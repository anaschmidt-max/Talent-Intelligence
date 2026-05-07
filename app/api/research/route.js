import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `You are a talent market intelligence analyst. A recruiter has submitted a research request. Your job is to conduct live research and return a structured intelligence report.

## Research methodology

**Phase order:** Job board scan → LinkedIn headcount → GitHub/tech signals → funding context → culture signals

**Recency rule:** Weight data from the last 30 days much higher than older data. Always note the date of every data point.

**Confidence convention:**
- ✅ confirmed — primary source (official blog, GitHub, careers page, LinkedIn)
- ⚠️ inferred — secondary signals (job descriptions, LinkedIn estimates, patterns)
- ❓ unclear — needs verification

**Signal types for open roles:** growth_hire | backfill | new_function | strategic_bet | unclear

## Research phases

1. **Company identity** — legal name, type (B2B SaaS / B2C / Fintech / AI / DevTools / etc.), stage (Seed / Series A / B / C / Growth / Public), funding, HQ

2. **Office locations** — cities, remote policy (Full remote / Hybrid / Office-first), headcount per city, functions present

3. **Headcount by job family** — Engineering, Product, Design, Data, ML/AI, Sales, Marketing, CS, HR, Operations, Executive. Calculate: Eng/Total ratio, Data+ML/Eng ratio, Sales/Total ratio.

4. **Tech stack** — backend, frontend, mobile, databases, data/ML, infra/cloud, CI/CD, observability. For each primary tech: how many people use it, seniority mix, confidence level.

5. **Org structure** — model (flat/squad/functional/matrix), IC:manager ratio, seniority pyramid shape (top-heavy/balanced/bottom-heavy/dumbbell), leadership map (CTO, VP Eng, VP Product).

6. **Hiring intelligence** — all open roles with: title, dept, seniority, location, key tech, signal type, posted date. Hiring velocity (roles last 30/90 days). Hiring concentration: which functions scaling vs frozen.

7. **Talent flow** — top 3–5 companies people JOIN from, top 3–5 companies people LEAVE to. Net position: Talent magnet / Neutral / Talent feeder.

8. **Culture & employer brand** — Glassdoor rating, Blind sentiment, comp vs market (Levels.fyi), remote reality.

## Scoring

- **Talent source score (0–10):** How good is this company as a place to recruit FROM? 10 = strong talent, 2–3yr tenure, regular outflow. 1 = very long tenures, nobody leaves.
- **Talent competitor score (0–10):** How much do they compete for the same candidates? 10 = identical stack/seniority/location/comp. 1 = completely different profile.

## Output format

You MUST return a single valid JSON object. No markdown, no explanation outside the JSON. Structure:

{
  "company": "string",
  "domain": "string",
  "generated_at": "ISO date string",
  "research_status": "complete | partial | insufficient_data",
  "identity": {
    "legal_name": "string",
    "type": "string",
    "stage": "string",
    "founded": "string or null",
    "latest_funding": "string or null",
    "total_funding": "string or null",
    "market_cap": "string or null",
    "what_they_do": "string"
  },
  "locations": [
    {
      "city": "string",
      "country": "string",
      "is_hq": true,
      "remote_policy": "Full remote | Hybrid | Office-first",
      "est_headcount": "string",
      "functions_present": "string",
      "confidence": "✅ | ⚠️ | ❓"
    }
  ],
  "headcount": {
    "total_est": "string",
    "trend": "📈 Growing | 📉 Contracting | ➡️ Stable",
    "last_checked": "string",
    "by_function": [
      { "family": "string", "est_count": "string", "pct_total": "string", "confidence": "string", "notes": "string" }
    ],
    "key_ratios": {
      "eng_ratio": "string",
      "data_ml_ratio": "string",
      "sales_ratio": "string",
      "pm_eng_ratio": "string"
    }
  },
  "tech_stack": {
    "confirmed": {
      "backend": "string",
      "frontend": "string",
      "mobile": "string or null",
      "databases": "string",
      "data_ml": "string",
      "infra_cloud": "string",
      "cicd": "string",
      "observability": "string"
    },
    "inferred": "string",
    "per_technology": [
      {
        "name": "string",
        "users_est": "string",
        "seniority_mix": "string",
        "signal": "string",
        "confidence": "✅ | ⚠️ | ❓"
      }
    ]
  },
  "org_structure": {
    "model": "string",
    "ic_manager_ratio": "string",
    "pyramid_shape": "Top-heavy | Balanced | Bottom-heavy | Dumbbell",
    "seniority_distribution": [
      { "level": "string", "pct": "string", "count_est": "string", "confidence": "string" }
    ],
    "leadership": [
      { "name": "string or null", "title": "string", "tenure": "string or null", "linkedin": "string or null" }
    ]
  },
  "hiring": {
    "status": "Active | Selective | Paused | Unknown",
    "total_open_roles": "string",
    "velocity": "Accelerating | Stable | Decelerating | Unknown",
    "roles_last_30d": "string",
    "roles_last_90d": "string",
    "open_roles": [
      {
        "title": "string",
        "dept": "string",
        "seniority": "string",
        "location": "string",
        "key_tech": "string",
        "signal": "growth_hire | backfill | new_function | strategic_bet | unclear",
        "posted": "string"
      }
    ],
    "scaling_functions": "string",
    "frozen_functions": "string",
    "top_skills_in_demand": "string",
    "top_seniority_in_demand": "string"
  },
  "talent_flow": {
    "top_donors": [
      { "company": "string", "recent_hires": "string", "function": "string" }
    ],
    "top_recipients": [
      { "company": "string", "who_left": "string", "function": "string" }
    ],
    "net_position": "Talent magnet | Neutral | Talent feeder",
    "interpretation": "string"
  },
  "culture": {
    "glassdoor_rating": "string or null",
    "glassdoor_trend": "string or null",
    "blind_sentiment": "string or null",
    "comp_vs_market": "Above market | At market | Below market | Unknown",
    "remote_reality": "string",
    "top_positives": ["string"],
    "top_negatives": ["string"]
  },
  "scores": {
    "talent_source": { "score": 0, "rationale": "string" },
    "talent_competitor": { "score": 0, "rationale": "string" }
  },
  "strategic_summary": {
    "what_theyre_building": "string",
    "tech_strategy_signal": "string",
    "talent_opportunity": "string",
    "key_risks": "string"
  },
  "confidence_notes": "string",
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
    const { company, role, location, seniority, job_function, stage, focus } = body;

    if (!company && !role) {
      return Response.json(
        { error: "Provide at least a company name or a role/function to research." },
        { status: 400 }
      );
    }

    const userQuery = buildUserQuery({ company, role, location, seniority, job_function, stage, focus });

    let response;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        response = await client.messages.create({
          model: "claude-sonnet-4-6",
          max_tokens: 16000,
          tools: [
            { type: "web_search_20250305", name: "web_search" },
            { name: "submit_report", description: "Submit the completed talent intelligence report", input_schema: { type: "object", properties: { report: { type: "object" } }, required: ["report"] } },
          ],
          tool_choice: { type: "any" },
          system: SYSTEM_PROMPT,
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
    console.error("Research API error:", err);
    return Response.json(
      { error: err.message || "Internal server error" },
      { status: 500, headers: { "Access-Control-Allow-Origin": "*" } }
    );
  }
}

function buildUserQuery({ company, role, location, seniority, job_function, stage, focus }) {
  const parts = ["Run a full talent intelligence research session."];

  if (company) parts.push(`Target company: ${company}`);
  if (role) parts.push(`Role of interest: ${role}`);
  if (job_function) parts.push(`Function to focus on: ${job_function}`);
  if (seniority) parts.push(`Seniority level: ${seniority}`);
  if (location) parts.push(`Location: ${location}`);
  if (stage) parts.push(`Company stage filter: ${stage}`);
  if (focus) parts.push(`Recruiter's specific question: ${focus}`);

  parts.push(
    "Search the web now for the most recent data: company careers page, LinkedIn headcount, GitHub org, engineering blog, Glassdoor, Levels.fyi.",
    "When research is complete, call the submit_report tool with your full report as the argument."
  );

  return parts.join("\n");
}
