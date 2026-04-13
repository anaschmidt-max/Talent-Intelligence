# Company: Notion

**Domain:** notion.com
**LinkedIn:** linkedin.com/company/notionhq
**GitHub:** github.com/makenotion
**Last updated:** 2026-03-25
**Research status:** 🟢 Complete

---

## 1. Company identity

| Field | Value | Confidence |
|---|---|---|
| Legal name | Notion Labs, Inc. | ✅ Confirmed |
| Year founded | 2013 | ✅ Confirmed |
| Headquarters | San Francisco, CA, USA | ✅ Confirmed |
| Company type | B2B SaaS + B2C Product (productivity/collaboration) | ✅ Confirmed |
| Stage | Growth / Pre-IPO | ⚠️ Inferred |
| Latest funding | $343.2M total; Series C $275M at $10B valuation (Oct 2021) | ✅ Confirmed |
| Total funding raised | $343.2M | ✅ Confirmed |

**Revenue signal:** Sacra estimates ~$500M ARR as of Sept 2025 (up from $300M ARR in June 2024). Some sources cite a $100B valuation in Sept 2025 — treat as ❓ unconfirmed until official announcement.

**Founders:** Ivan Zhao (CEO), Chris Prucha, Jessica Lam, Simon Last, Toby Schachman

---

## 2. Office locations

| City | Country | HQ? | Remote policy | Est. headcount here | Functions present |
|---|---|---|---|---|---|
| San Francisco | USA | Yes | Hybrid | ~400–600 | All functions |
| New York | USA | No | Hybrid | ~100–150 | Sales, Marketing, CS |
| Dublin | Ireland | No | Hybrid | ~50–100 | Sales, CS (EMEA hub) |
| Hyderabad | India | No | Hybrid | ~50–100 | Engineering |
| Seoul | South Korea | No | Hybrid | ~30–50 | Sales, Marketing (APAC) |
| Tokyo | Japan | No | Hybrid | ~30–50 | Sales, Marketing (APAC) |

**Notes on geo footprint:**
Notion is actively expanding in APAC (GTM Recruiter role for Japan posted Mar 2026, Regional Marketing Specialist APAC open). Enterprise sales expansion is driving the Tokyo/Seoul growth. Hyderabad presence signals engineering offshoring/near-shoring.

---

## 3. Headcount by job family

**Total estimated headcount:** ~800–1,200 (⚠️ wide discrepancy across sources; LinkedIn shows ~4,700 which likely includes contractors/extended workforce; more credible estimates point to 800–1,200 direct employees)
**Last headcount check:** 2026-03-25
**Headcount 6 months ago:** ~600–800 (grew from ~300 to 600+ as of Jan 2024 per company blog)
**Trend:** 📈 Growing

### Breakdown by function

| Job Family | Est. Count | % of total | Confidence | Notes |
|---|---|---|---|---|
| Engineering | ~400–500 | ~40–45% | ⚠️ Inferred | "500+ engineers, designers, AEs" cited in blog; engineering likely largest function |
| Product | ~50–80 | ~6–8% | ⚠️ Inferred | Separate from design |
| Design | ~40–60 | ~4–6% | ⚠️ Inferred | Included in "engineers, designers" count |
| Data | ~20–40 | ~3–4% | ⚠️ Inferred | Data lake team confirmed active |
| ML / AI | ~15–30 | ~2–3% | ⚠️ Inferred | Small dedicated ML team; AI embedded in product |
| DevRel | ~10–20 | ~1–2% | ⚠️ Inferred | Active developer community |
| Sales | ~80–120 | ~8–12% | ⚠️ Inferred | Active enterprise sales expansion |
| Marketing | ~40–60 | ~4–6% | ⚠️ Inferred | First CMO hired 2024 |
| Customer Success | ~50–80 | ~5–8% | ⚠️ Inferred | Mid-Market CSM role open |
| Finance & Legal | ~20–30 | ~2–3% | ⚠️ Inferred | |
| HR & People | ~20–30 | ~2–3% | ⚠️ Inferred | People team mentioned in Glassdoor reviews |
| Operations | ~15–25 | ~1–2% | ⚠️ Inferred | |
| Executive (VP+) | ~15–25 | ~1–2% | ⚠️ Inferred | New C-suite hires in 2024 |
| **Total** | **~800–1,100** | 100% | ⚠️ Inferred | |

### Key ratios

| Ratio | Value | Signal |
|---|---|---|
| Eng / Total | ~40–45% | Very engineering-dense; product-led growth company |
| Data+ML / Eng | ~8–10% | Moderate data investment; accelerating with AI push |
| Sales / Total | ~8–12% | Shifting toward enterprise GTM; was more PLG-only |
| PM / Eng | ~1:6–8 | Product-light relative to eng; execution culture |

---

## 4. Tech stack — with people & seniority

### Confirmed stack ✅

**Backend:** TypeScript, Node.js
**Frontend:** TypeScript, React, Redux
**Mobile:** Electron (desktop app); mobile apps (iOS/Android — stack inferred as React Native or native)
**Databases:** PostgreSQL (heavily sharded on AWS RDS — 96 physical shards as of 2023+), AWS S3 for object/data lake storage
**Data / ML:** Apache Spark, Apache Hudi (data lake), Kafka, Debezium CDC (change data capture), Python (ML/AI work inferred)
**Infrastructure / Cloud:** AWS (EC2, EKS, RDS, S3), Kubernetes, Docker
**CI/CD & Tooling:** GitLab (confirmed for version control)
**Observability:** pganalyze (confirmed for Postgres monitoring)
**AI:** Multi-model access in product (GPT-4/5, Claude Opus, o3); internal evals/prompt engineering

### Stack sources
- [x] Engineering blog: notion.com/blog/topic/tech — Postgres sharding, data lake architecture confirmed
- [x] External coverage: pganalyze case study on Notion's Postgres at scale
- [x] Job descriptions: TypeScript, Python, LLMs confirmed in AI intern JDs
- [ ] GitHub org: makenotion (limited public repos)

### People & seniority per technology

#### TypeScript / Node.js
- **Users:** ~350–450 people (core product engineering — full-stack + backend)
- **Seniority mix:** ~5% junior | ~35% mid | ~45% senior | ~15% staff/principal
- **Signal:** Notion's entire product is TypeScript-first (rare for a company at this scale). Monorepo architecture likely. Deep investment in TS tooling.
- **Confidence:** ✅ Confirmed from engineering blog + JDs

#### React / Redux
- **Users:** ~300–400 people (frontend, product, some full-stack)
- **Seniority mix:** ~5% junior | ~35% mid | ~45% senior | ~15% staff/principal
- **Signal:** Core UI framework from day one; Redux used for complex state (collaborative editing, block model)
- **Confidence:** ✅ Confirmed

#### PostgreSQL
- **Users:** ~30–50 people (backend infra, data eng, platform)
- **Seniority mix:** ~0% junior | ~20% mid | ~50% senior | ~30% staff/principal
- **Signal:** One of the most sophisticated Postgres deployments publicly documented — 200B+ rows, 96-shard architecture. Postgres expertise is a differentiating competency.
- **Confidence:** ✅ Confirmed from engineering blog + pganalyze case study

#### Apache Spark / Data Lake (Hudi + Kafka)
- **Users:** ~15–30 people (data engineering, analytics)
- **Seniority mix:** ~0% junior | ~25% mid | ~50% senior | ~25% staff/principal
- **Signal:** Mature data lake architecture built for 200B+ entities; Firebolt interview confirms AI-driven workflows in BI. Data team punches above headcount weight.
- **Confidence:** ✅ Confirmed from engineering blog (July 2024)

#### Python (ML/AI)
- **Users:** ~15–25 people (ML, AI, data science)
- **Seniority mix:** ~0% junior | ~30% mid | ~40% senior | ~30% staff/principal
- **Signal:** Small but strategic ML team. AI product is LLM orchestration (prompts + evals) rather than model training. Python for data science + ML infra.
- **Confidence:** ⚠️ Inferred from JDs + AI intern role requirements

### Inferred stack ⚠️ (from JDs, not confirmed)
- React Native or Swift/Kotlin for mobile (no confirmation found)
- Redis likely (common at this scale with Postgres; not confirmed)
- Datadog or similar for APM (not confirmed)

---

## 5. Org structure & seniority

### Engineering org model
- **Structure:** Squad-based (inferred from product-area hiring patterns)
- **Team organization:** By product area (core editor, enterprise, AI, infrastructure, data) + platform layer
- **IC:Manager ratio:** ⚠️ ~8–10:1 estimated (healthy; top-heavy IC distribution typical for this stage)

### Seniority pyramid

**Shape:** Top-heavy (Series C+ startup with strong employer brand; few juniors)

| Level | Approx % | Approx count | Confidence |
|---|---|---|---|
| Junior / Associate | ~5% | ~40–60 | ⚠️ Inferred |
| Mid-level | ~30% | ~240–330 | ⚠️ Inferred |
| Senior | ~40% | ~320–440 | ⚠️ Inferred |
| Staff / Principal | ~15% | ~120–165 | ⚠️ Inferred |
| Management (EM, Director) | ~7% | ~56–77 | ⚠️ Inferred |
| Executive (VP+) | ~3% | ~24–33 | ⚠️ Inferred |

### Leadership map

| Name | Title | Reports to | Tenure | Notes |
|---|---|---|---|---|
| Ivan Zhao | CEO & Co-founder | Board | Since 2013 | Product-minded founder; sets vision |
| Fuzzy Khosrowshahi | CTO | CEO | Since Dec 2023 | Created Google Sheets; ex-SVP Product Eng at Slack |
| Erica Anderson | CRO | CEO | Since ~2024 | Ex-CRO at GitHub |
| Rachel Hepworth | CMO | CEO | Since ~2024 | First CMO hire |
| Joy Ho | Chief of Staff | CEO | ❓ | Cross-functional alignment across Eng/Product/Design |

**Gaps:** VP Engineering not confirmed in search results — may report to Fuzzy or role may be vacant/combined. CPO status unclear — Glassdoor reviews mention "new CPO" with some concern.

### Org signals & notes
- C-suite was significantly rebuilt in 2024: new CTO, CRO, CMO all joined within ~12 months
- Glassdoor recent reviews flag "impactful leadership departures" and tension with "new CPO" — suggests product org churn
- CTO Fuzzy Khosrowshahi brings enterprise-scale org-building experience (Slack at scale, Google) — suggests Notion is professionalizing its eng org post-growth phase

---

## 6. Hiring intelligence

### Current hiring status
**Hiring right now?** Yes — selectively
**Open roles (as of 2026-03-25):** ~15–25 confirmed open roles on Ashby (jobs.ashbyhq.com/notion)
**Hiring velocity:** Stable with enterprise GTM acceleration

### Active open roles (sample as of 2026-03-25)

| Title | Department | Seniority | Location | Key tech | Signal | Posted |
|---|---|---|---|---|---|---|
| Software Engineer, Enterprise | Engineering | Mid–Senior | SF/Remote | TypeScript, security, scale | growth_hire | ~Mar 2026 |
| Software Engineer, Product Infrastructure | Engineering | Senior | SF/Remote | TypeScript, Node.js, systems | strategic_bet | ~Mar 2026 |
| Forward Deployed Engineer | Engineering | Mid–Senior | SF/NYC | TypeScript, integrations | new_function | ~Mar 2026 |
| Software Engineer, AI Intern (Summer 2026) | Engineering / AI | Intern | SF | Python, TypeScript, LLMs | growth_hire | ~Mar 2026 |
| Mid-Market Customer Success Manager | Customer Success | Mid | SF/NYC | — | growth_hire | ~Mar 2026 |
| Manager, Enterprise Sales | Sales | Manager | SF/NYC | — | growth_hire | ~Mar 2026 |
| GTM Recruiter (Japan) | People / GTM | Mid | Tokyo | — | new_function | ~Mar 2026 |
| Regional Marketing Specialist (APAC) | Marketing | Mid | Tokyo/Seoul | — | growth_hire | ~Mar 2026 |
| Treasury Manager | Finance | Senior | SF | — | backfill/scale | ~Mar 2026 |

### Hiring velocity metrics

| Metric | Value |
|---|---|
| Roles open today | ~15–25 (Ashby board) |
| Posted last 30 days | ~8–15 estimated |
| Posted last 90 days | ~20–30 estimated |
| vs prior 30-day period | ⚠️ Insufficient data to trend |

### Hiring concentration

**Scaling hard:** Enterprise engineering (security, scale, infra), Enterprise sales & CS, APAC GTM
**Frozen:** Core product/PLG roles appear lighter; limited junior/associate roles
**Most in-demand skills:** TypeScript, Node.js, LLMs/prompt engineering, enterprise security
**Most in-demand seniority:** Senior + mid-level (very few junior roles visible)
**Location of open roles:** SF-primary, NYC secondary, Tokyo/Seoul APAC expansion

### Interpretation
Notion is executing a clear **PLG → Enterprise upgrade** motion. The hiring pattern tells the story: Forward Deployed Engineers (enterprise implementation), enterprise security engineers, Mid-Market CSMs, Japan GTM hiring. This is a company that built its 100M user base on PLG and is now monetizing it with an enterprise sales layer. CTO Fuzzy (ex-Slack) knows exactly how to do this.

---

## 7. Talent flow — donors & recipients

### Where they recruit FROM (talent donors)

*(Based on known hires and leadership backgrounds — limited direct signal without LinkedIn access)*

| Previous company | # recent hires | Function | Notes |
|---|---|---|---|
| Google / Alphabet | Multiple | Eng, Leadership | CTO from Google; engineering DNA |
| Slack | Multiple | Eng, Leadership | CTO (Fuzzy) from Slack; likely brought network |
| GitHub | 1 confirmed | Executive | CRO Erica Anderson |
| Meta / Facebook | ⚠️ Likely | Engineering | Common FAANG source for PLG companies |
| Stripe | ⚠️ Likely | Eng, Finance | SF fintech-adjacent talent overlap |
| Other B2B SaaS | Multiple | Sales, CS | Typical enterprise SaaS CS/AE background |

**Donor pattern interpretation:**
Strong FAANG pull (Google, likely Meta). Slack overlap is notable given CTO's network. This company has the employer brand to pull from top-tier — $300-500M ARR + $10B valuation + product people love = strong magnet. ⚠️ Inferred, needs LinkedIn validation.

### Where their people GO (talent recipients)

| Destination company | # who went there | Function | Notes |
|---|---|---|---|
| AI startups / LLM cos | ⚠️ Likely several | Engineering | AI gold rush pulling eng talent |
| OpenAI / Anthropic | ⚠️ Possible | Eng, AI | Common destination for PLG-to-AI movers |
| Other SaaS unicorns | ⚠️ Likely | Multiple | Normal churn for this stage |
| Founded own startups | ⚠️ Possible | Senior eng/PM | Tenure culture; equity vesting cliff |

**Recipient pattern interpretation:**
❓ Insufficient hard data. Given AI talent war, Notion likely loses some ML/AI-adjacent engineers to OpenAI, Anthropic, and AI startups. Glassdoor notes "leadership departures" in 2024–2025 — some senior exits confirmed but destinations unclear.

### Net talent flow summary

```
→ Gaining most from: Google/Alphabet, Slack, GitHub (confirmed), Meta/Stripe (inferred)
← Losing most to:   AI startups, OpenAI/Anthropic (inferred), likely some Figma/Linear/similar

Net position: Talent magnet (strong brand) with growing AI attrition risk
```

**Strategic interpretation:**
Notion has a very strong employer brand for product engineers who want to work on something people genuinely use. The 100M user count is a real recruiting tool. However, the AI talent market is competitive and Notion isn't an AI-native company — some ML talent may prefer OpenAI/Anthropic. The leadership churn in 2024 (new C-suite) creates some short-term uncertainty but could stabilize as the new team settles.

---

## 8. Culture & employer brand

| Signal | Value | Source | Date |
|---|---|---|---|
| Glassdoor rating | 4.4 / 5.0 | Glassdoor | Mar 2026 |
| Rating trend | ⚠️ Slight decline recently (see notes) | Glassdoor reviews | Mar 2026 |
| Blind sentiment | ❓ Not checked | Blind | — |
| Comp vs market | Above market (FAANG-competitive TC) | Levels.fyi | Mar 2026 |
| Remote reality | Hybrid (SF-centric; some roles remote) | JDs | Mar 2026 |

### Compensation benchmarks (Levels.fyi, updated Mar 2026)

| Level | Median TC (US) | Range |
|---|---|---|
| L3 (Mid) | ~$316K | $212K–$453K |
| L4 (Senior) | ~$532K | $250K–$720K |
| L5 (Staff) | ~$910K | $900K–$920K |
| EM | ~$457K | $386K–$529K |

**Assessment: Well above market for all levels. L5 comp at $910K is exceptional for a pre-IPO company — strong equity component likely.**

### What employees say

**Top positives (from Glassdoor, ~313 reviews, 4.4/5):**
1. Exceptional product that people genuinely love — engineers feel proud of what they build
2. Smart, talented colleagues — strong peer calibration
3. Compensation and benefits rated 4.5/5 — competitive equity + TC

**Top negatives (recent reviews, 2024–2025):**
1. Recent leadership changes (new CPO, People team changes) creating uncertainty
2. "Times are changing" — some employees feel culture is shifting as company scales
3. Career growth paths less clear than at larger companies (still maturing)

---

## Intelligence scores

| Dimension | Score (0–10) | Rationale |
|---|---|---|
| Talent source score | **6/10** | Good talent, FAANG-competitive comp makes them hard to pull from. But AI transition + leadership churn = some openings. Tenure at ~3–5yr for many. |
| Talent competitor score | **7/10** | Competes for the same TypeScript/React engineers, product-minded builders, and enterprise SaaS talent. Similar PLG-to-enterprise story as many B2B SaaS cos. |

---

## Strategic summary

### What are they building right now?
Notion is executing a two-track strategy:
1. **AI-native product** — Notion 3.0 with autonomous AI agents, multi-model access (GPT, Claude, o3), mobile AI. Goal: become the AI-powered workspace, not just a notes/wiki tool.
2. **Enterprise GTM expansion** — New CTO (Slack DNA), CRO (GitHub DNA), CMO, Forward Deployed Engineers, enterprise security engineers, APAC sales hiring. Goal: convert PLG user base into enterprise contracts.

$300M → $500M ARR in ~15 months suggests the monetization motion is working.

### Tech strategy signal
TypeScript-everything is a rare architectural commitment. It suggests a unified full-stack culture with strong leverage across frontend, backend, and infra. The Postgres sharding depth (~96 shards, 200B+ rows) indicates they're solving hard infrastructure problems in-house rather than outsourcing to managed services — this attracts and retains senior infrastructure engineers who want hard problems.

AI integration is **LLM orchestration** (prompt engineering, evals, multi-model routing), not foundational model research. This is a product-AI company, not an AI-research company.

### Talent opportunity / risk

**As a talent source:**
- Best targets: Senior/Staff TypeScript engineers with collaborative editor or real-time systems experience; enterprise platform engineers; data lake / Spark engineers
- Timing window: 2024–2025 leadership churn creates some senior mobility. L4/L5 engineers with 3–4yr tenure approaching equity vesting cliffs.
- Hard to move: Anyone deep in the Postgres/sharding infrastructure work (rare craft, hard to match elsewhere); PLG believers who love the product

**As a talent competitor:**
- Competes for: React/TypeScript senior engineers, enterprise SaaS product engineers, B2B GTM talent (sales, CS, marketing)
- Most dangerous in: SF Bay Area and NYC for mid-senior product engineering
- Less competitive in: AI/ML research (not their positioning), pure backend infra (lower volume)

**Key risks / watch items:**
- CPO churn / product org instability — watch for senior PM/design exits
- AI talent war: as Notion doubles down on AI features, they'll need more ML engineers — competing against OpenAI, Anthropic, Google DeepMind
- Pre-IPO uncertainty: if IPO timing stretches, equity compression risk could accelerate senior exits
- APAC expansion: real hiring investment in Tokyo/Seoul — watch for senior IC roles opening there

---

## Research log

| Date | What was researched | Key findings | Next steps |
|---|---|---|---|
| 2026-03-25 | Full Phase 1–8 initial research | PLG→Enterprise pivot confirmed; TypeScript-first stack; Fuzzy (ex-Slack) as CTO; ~$500M ARR; Glassdoor 4.4 with recent leadership churn signals | Validate headcount via LinkedIn; check Blind for candid eng sentiment; pull full Ashby job list; identify specific senior leavers on LinkedIn |

## Raw notes & links

- Careers page: jobs.ashbyhq.com/notion
- Engineering blog: notion.com/blog/topic/tech
- Postgres at scale: pganalyze.com/blog/how-notion-runs-postgres-at-scale
- Data lake post (July 2024): notion.com/blog/building-and-scaling-notions-data-lake
- Re-shard post: notion.com/blog/the-great-re-shard
- CTO announcement: notion.com/blog/notion-new-cto
- Levels.fyi: levels.fyi/companies/notion/salaries (updated Mar 2026)
- Glassdoor: glassdoor.com/Reviews/Notion-Labs-Reviews-E3304926.htm
- Crunchbase: crunchbase.com/organization/notion-so
- Firebolt interview with Notion BI lead: firebolt.io/blog/from-zero-to-100m-users-inside-notions-data-stack-and-ai-strategy-with-sumit-gupta
