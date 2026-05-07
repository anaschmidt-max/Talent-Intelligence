import Anthropic from "@anthropic-ai/sdk";

const TALENT_MAP_PROMPT = `You are a talent mapping analyst for a recruiter. Your job is to find where a specific type of professional can be found — which companies employ them, in what concentrations, and how to reach them.

## Your task

Given a profile (role, seniority, location, skills, industry), identify:
1. The best target companies where this profile exists in meaningful numbers
2. Key individuals who match the profile (if findable)
3. Talent pools, communities, and sourcing channels where this profile concentrates
4. Sourcing tips specific to this profile

## Research approach

- Search LinkedIn, GitHub, meetup communities, conference speaker lists, and job boards
- Look for companies currently hiring this profile (signals they have existing teams)
- Check engineering blogs and tech talks for named individuals
- Note which companies are talent MAGNETS for this profile vs which are feeders

## Confidence convention
- ✅ confirmed — directly observed (profile visible on LinkedIn, named in blog post)
- ⚠️ inferred — signals suggest presence (job postings, tech stack match)
- ❓ unclear — estimated based on company type/size

## Output format

Return a single valid JSON object. No markdown, no explanation outside the JSON.

{
  "profile_summary": "string — one-line description of who was searched for",
  "generated_at": "ISO date string",
  "total_companies_identified": "number",
  "target_companies": [
    {
      "company": "string",
      "est_profile_count": "string",
      "why_relevant": "string",
      "seniority_present": "string",
      "hiring_now": true,
      "confidence": "✅ | ⚠️ | ❓",
      "sourcing_tip": "string"
    }
  ],
  "key_people": [
    {
      "name": "string or null",
      "current_company": "string",
      "title": "string",
      "linkedin_url": "string or null",
      "why_relevant": "string",
      "confidence": "✅ | ⚠️ | ❓"
    }
  ],
  "talent_pools": [
    {
      "type": "Community | Conference | Newsletter | GitHub | University | Bootcamp | Other",
      "name": "string",
      "url": "string or null",
      "est_size": "string",
      "relevance": "string"
    }
  ],
  "sourcing_channels": {
    "linkedin_search_tips": "string",
    "boolean_string": "string",
    "github_signals": "string",
    "other_channels": "string"
  },
  "market_snapshot": {
    "supply": "Abundant | Balanced | Scarce | Very Scarce",
    "demand": "Low | Moderate | High | Very High",
    "competition": "string — who else is hiring this profile right now",
    "avg_tenure": "string",
    "location_notes": "string"
  },
  "outreach_tips": "string — 2-3 sentences on what resonates with this profile",
  "data_gaps": ["string"]
}`;

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function POST(request) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      return Response.json({ error: "ANTHROPIC_API_KEY is not set on the server." }, { status: 500 });
    }
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const body = await request.json();
    const { role, location, seniority, job_function, skills, industry, stage, focus } = body;

    if (!role && !job_function) {
      return Response.json(
        { error: "Provide at least a role or job function to map." },
        { status: 400 }
      );
    }

    const userQuery = buildQuery({ role, location, seniority, job_function, skills, industry, stage, focus });

    let response;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        response = await client.messages.create({
          model: "claude-sonnet-4-6",
          max_tokens: 16000,
          tools: [
            { type: "web_search_20250305", name: "web_search" },
            { name: "submit_report", description: "Submit the completed talent map report", input_schema: { type: "object", properties: { report: { type: "object" } }, required: ["report"] } },
          ],
          tool_choice: { type: "any" },
          system: TALENT_MAP_PROMPT,
          messages: [{ role: "user", content: userQuery }],
        });
        break;
      } catch (err) {
        if (attempt < 2 && err?.status === 529) {
          await new Promise((r) => setTimeout(r, (attempt + 1) * 10000));
        } else {
          throw err;
        }
      }
    }

    const toolUse = response.content.find((b) => b.type === "tool_use" && b.name === "submit_report");
    const report = toolUse ? toolUse.input.report : null;

    if (!report) {
      return Response.json({ error: "No report returned." }, { status: 500 });
    }

    return Response.json(report, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  } catch (err) {
    console.error("Talent map API error:", err);
    return Response.json(
      { error: err.message || "Internal server error" },
      { status: 500, headers: { "Access-Control-Allow-Origin": "*" } }
    );
  }
}

function buildQuery({ role, location, seniority, job_function, skills, industry, stage, focus }) {
  const parts = ["Run a full talent mapping session. Find where this profile lives in the market."];

  if (role) parts.push(`Role: ${role}`);
  if (job_function) parts.push(`Function: ${job_function}`);
  if (seniority) parts.push(`Seniority: ${seniority}`);
  if (location) parts.push(`Location: ${location}`);
  if (skills) parts.push(`Key skills / stack: ${skills}`);
  if (industry) parts.push(`Preferred industry: ${industry}`);
  if (stage) parts.push(`Preferred company stage: ${stage}`);
  if (focus) parts.push(`Recruiter's specific question: ${focus}`);

  parts.push(
    "Search the web now for real companies, real people, and real communities.",
    "When research is complete, call the submit_report tool with your full report as the argument."
  );

  return parts.join("\n");
}
