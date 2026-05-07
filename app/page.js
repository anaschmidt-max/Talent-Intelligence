export default function Home() {
  return (
    <main style={{ fontFamily: "monospace", padding: "2rem", maxWidth: "720px", lineHeight: "1.7" }}>
      <h1>Talent Intelligence API</h1>
      <p style={{ color: "#666" }}>Two endpoints. Both return structured JSON reports powered by Claude + live web search.</p>

      <hr style={{ margin: "2rem 0", borderColor: "#eee" }} />

      <h2>1. Company Intelligence</h2>
      <p>Research a target company as a talent ecosystem — headcount, tech stack, hiring signals, org structure, talent flow, and culture.</p>
      <pre style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "6px", overflowX: "auto" }}>
{`POST /api/research

{
  "company":      "Adyen",           // required (or role)
  "role":         "Engineering Manager",
  "location":     "Amsterdam",
  "seniority":    "Senior",
  "job_function": "Engineering",
  "stage":        "Public",
  "focus":        "Are they scaling their data team?"
}`}
      </pre>

      <h2 style={{ marginTop: "2rem" }}>2. Talent Mapping</h2>
      <p>Find where a specific profile lives in the market — target companies, key people, talent pools, sourcing channels, and Boolean strings.</p>
      <pre style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "6px", overflowX: "auto" }}>
{`POST /api/talent-map

{
  "role":         "Data Engineer",   // required (or job_function)
  "job_function": "Data",
  "seniority":    "Senior",
  "location":     "Amsterdam",
  "skills":       "Python, dbt, Snowflake",
  "industry":     "Fintech",
  "stage":        "Series B",
  "focus":        "Who is hiring right now?"
}`}
      </pre>

      <hr style={{ margin: "2rem 0", borderColor: "#eee" }} />

      <h2>Response fields</h2>
      <p><strong>/api/research</strong> returns: <code>identity</code>, <code>locations</code>, <code>headcount</code>, <code>tech_stack</code>, <code>org_structure</code>, <code>hiring</code>, <code>talent_flow</code>, <code>culture</code>, <code>scores</code>, <code>strategic_summary</code></p>
      <p><strong>/api/talent-map</strong> returns: <code>target_companies</code>, <code>key_people</code>, <code>talent_pools</code>, <code>sourcing_channels</code>, <code>market_snapshot</code>, <code>outreach_tips</code></p>

      <hr style={{ margin: "2rem 0", borderColor: "#eee" }} />

      <p style={{ color: "#999", fontSize: "0.85rem" }}>
        Confidence convention: ✅ confirmed (primary source) · ⚠️ inferred (secondary signals) · ❓ unclear (needs verification)
      </p>
    </main>
  );
}
