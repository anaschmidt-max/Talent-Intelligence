# Company: Manychat

**Domain:** manychat.com
**LinkedIn:** linkedin.com/company/manychat
**GitHub:** github.com/manychat (limited public presence)
**Last updated:** 2026-03-25
**Research status:** 🟢 Complete

---

## 1. Company identity

| Field | Value | Confidence |
|---|---|---|
| Legal name | Manychat, Inc. | ✅ Confirmed |
| Year founded | 2015 | ✅ Confirmed |
| Headquarters | West Hollywood, CA, USA (Austin, TX also cited) | ⚠️ Inferred |
| Company type | B2B SaaS — Conversational Marketing / Chat Automation / AI | ✅ Confirmed |
| Stage | Series B | ✅ Confirmed |
| Latest funding | $140M Series B, April 2025 (Summit Partners lead) | ✅ Confirmed |
| Total funding raised | ~$163.3M ($18M Bessemer 2019 + $140M Summit 2025) | ✅ Confirmed |

**Revenue signal:** $34.6M ARR in 2024 (up from $22.3M in 2023 — ~55% YoY growth). Low ARPU model: 1M+ businesses at an average of ~$35/yr implies heavy SMB/creator pricing. Notably **profitable** at time of $140M raise (April 2025) — unusual for a Series B.

**Founders:** Mike Yan (CEO, co-founder), Antony Gorin (co-founder)

**CEO note:** Mike Yan stepped back in 2022, handing CEO role to Sunny Manivannan (ex-Braze/Coupa). Sunny has since departed to found Peerbound. Mike Yan appears to have returned as CEO — confirmed on LinkedIn/Crunchbase as of 2025.

**Product:** Conversational marketing automation across Instagram, TikTok, WhatsApp, Facebook Messenger. Enables businesses/creators to automate DMs, run campaigns, qualify leads, and drive transactions — at scale (1B+ conversations/year).

---

## 2. Office locations

| City | Country | HQ? | Remote policy | Est. headcount here | Functions present |
|---|---|---|---|---|---|
| Austin / West Hollywood | USA | Yes | Hybrid | ~80–120 | Leadership, Sales, Marketing, some Eng |
| Yerevan | Armenia | No | Hybrid | ~80–120 | Engineering (core eng hub) |
| Barcelona | Spain | No | Hybrid | ~60–100 | Engineering, Product, Design |
| Amsterdam | Netherlands | No | Hybrid | ~40–60 | Sales, CS, Marketing (EMEA) |
| São Paulo | Brazil | No | Hybrid | ~30–50 | Sales, CS (LATAM) |

**Notes on geo footprint:**
Yerevan is a significant engineering hub — founders are likely of Armenian origin, and Eastern European/Armenian engineering talent is cost-competitive with strong quality. Barcelona is the European eng hub (multiple eng roles posted there). Amsterdam is the EMEA commercial hub. São Paulo for LATAM GTM. The distributed engineering model across Yerevan + Barcelona is interesting — cost optimization while maintaining quality.

---

## 3. Headcount by job family

**Total estimated headcount:** ~350–450 (LinkedIn page cites "350+ people"; PitchBook: 421; LeadIQ: 499; Crunchbase: 251–500 band)
**Best estimate:** ~400 employees
**Last headcount check:** 2026-03-25
**Headcount 6 months ago:** ~300–350 (pre-$140M raise, slower growth)
**Trend:** 📈 Growing (post-Series B in April 2025, likely accelerating hiring)

### Breakdown by function

| Job Family | Est. Count | % of total | Confidence | Notes |
|---|---|---|---|---|
| Engineering | ~150–180 | ~38–42% | ⚠️ Inferred | Largest function; Yerevan + Barcelona eng hubs |
| Product | ~20–35 | ~6–8% | ⚠️ Inferred | New CPO (Dave Wilby) hired recently |
| Design | ~15–25 | ~4–6% | ⚠️ Inferred | Design system work active (Medium blog) |
| Data | ~15–25 | ~4–6% | ⚠️ Inferred | Data eng blog active; Snowflake-heavy |
| ML / AI | ~10–20 | ~3–5% | ⚠️ Inferred | AI Core Team actively hiring; growing function |
| DevRel | ~5–10 | ~1–2% | ⚠️ Inferred | Developer Enablement Engineer role open |
| Sales | ~40–60 | ~10–14% | ⚠️ Inferred | Amsterdam + São Paulo GTM hubs |
| Marketing | ~25–40 | ~6–9% | ⚠️ Inferred | Growth/content heavy (SMB/creator motion) |
| Customer Success | ~30–50 | ~8–11% | ⚠️ Inferred | Global CS across time zones |
| Finance & Legal | ~10–15 | ~2–4% | ⚠️ Inferred | |
| HR & People | ~10–15 | ~2–3% | ⚠️ Inferred | |
| Operations | ~5–10 | ~1–2% | ⚠️ Inferred | |
| Executive (VP+) | ~8–12 | ~2–3% | ⚠️ Inferred | |
| **Total** | **~350–450** | 100% | ⚠️ Inferred | |

### Key ratios

| Ratio | Value | Signal |
|---|---|---|
| Eng / Total | ~38–42% | Strong engineering density for this revenue level |
| Data+ML / Eng | ~14–18% | Growing AI investment; data team substantial |
| Sales / Total | ~10–14% | Mix of PLG + sales-assisted; SMB-heavy |
| PM / Eng | ~1:5–7 | Lean product layer; eng-execution culture |

---

## 4. Tech stack — with people & seniority

### Confirmed stack ✅

**Backend:** PHP 8.1 (primary — confirmed scaled to 1B+ conversations), PostgreSQL, Redis, Elasticsearch, NGINX + Lua (async request handling), AWS (infra + queues for billions of events), Python (AI/ML services)
**Frontend:** TypeScript/JavaScript, React, Redux; Jest (unit tests), Playwright (UI tests)
**Mobile:** ❓ Not confirmed
**Databases:** PostgreSQL (primary), Redis (cache), Elasticsearch (search), Snowflake (analytics + AI data warehouse)
**Data / ML:** Snowflake (main analytics datastore), Snowpark Container Services (GPU-hosted model inference), Python, LLM models (deployment + inference)
**Infrastructure / Cloud:** AWS (EC2, SQS, and related services — async queue architecture)
**CI/CD & Tooling:** Greenhouse (ATS), LeSS (Large Scale Scrum) agile framework; biweekly shipping cadence
**Observability:** ❓ Not confirmed

### Stack sources
- [x] Engineering blog (Medium): medium.com/manychat-engineering — PHP at scale, Snowflake AI, design system
- [x] Job descriptions: React, TypeScript, PostgreSQL, Redis, Elasticsearch confirmed in JDs
- [ ] GitHub org: Limited public repos
- [ ] StackShare: Not checked

### People & seniority per technology

#### PHP 8.1
- **Users:** ~80–110 people (core backend engineering)
- **Seniority mix:** ~5% junior | ~30% mid | ~50% senior | ~15% staff/principal
- **Signal:** PHP as primary language at this scale (1B conversations/yr) is unusual and worth noting. They've made it work with smart architecture (NGINX + Lua, async queues, cURL parallelism). Engineers here are PHP specialists who know how to scale it — niche skill. Not a "modern" stack, which may create hiring friction for candidates wanting Go/Rust/TypeScript backend roles.
- **Confidence:** ✅ Confirmed from engineering blog (Feb 2026 post)

#### TypeScript / React / Redux
- **Users:** ~50–80 people (frontend engineering)
- **Seniority mix:** ~5% junior | ~35% mid | ~45% senior | ~15% staff/principal
- **Signal:** Modern frontend despite PHP backend. Barcelona office hosts frontend dev day (confirmed). Cross-platform chatbot builder UI is complex — real engineering challenge.
- **Confidence:** ✅ Confirmed from JDs + engineering blog

#### PostgreSQL + Redis + Elasticsearch
- **Users:** ~30–50 people (backend + infra)
- **Seniority mix:** ~0% junior | ~25% mid | ~50% senior | ~25% staff/principal
- **Signal:** Standard modern stack for the data layer. Nothing exotic here — good for hiring. Postgres as primary, Redis for cache, ES for search (likely for chatbot flow search + analytics).
- **Confidence:** ✅ Confirmed from JDs

#### Snowflake (Data + AI)
- **Users:** ~15–25 people (data engineering, analytics, ML)
- **Seniority mix:** ~0% junior | ~30% mid | ~45% senior | ~25% staff/principal
- **Signal:** Snowflake as both analytics warehouse AND AI model hosting (Snowpark) is a notable architectural bet. Concentrates data + AI on one platform. Suggests smaller team optimizing for leverage over raw ML infra. Cost-efficient for their revenue profile.
- **Confidence:** ✅ Confirmed from engineering blog (June 2025 post)

#### Python (ML/AI)
- **Users:** ~10–20 people (AI Core Team, data science)
- **Seniority mix:** ~0% junior | ~20% mid | ~45% senior | ~35% staff/principal
- **Signal:** Actively hiring ML Engineers for dedicated "AI Core Team" — this is a growing function. LLM-focused (building + maintaining LLM models, evals, deployment). Post-$140M raise, expect this team to grow 2–3x.
- **Confidence:** ⚠️ Inferred from JDs + Snowflake AI blog post

### Inferred stack ⚠️ (from JDs, not confirmed)
- Node.js / TypeScript backend services (alongside PHP — likely newer services)
- Kafka or SQS for event queuing (at 1B conversations/yr, high-throughput queue needed)
- Datadog or similar APM (not confirmed)

---

## 5. Org structure & seniority

### Engineering org model
- **Structure:** Squad-based with LeSS (Large Scale Scrum) framework ✅ Confirmed
- **Team organization:** By product area (Growth, Billing & Business, Inbox, AI Core, Developer Enablement, Platform) — confirmed from Greenhouse JDs
- **IC:Manager ratio:** ⚠️ ~6–8:1 estimated (multiple EM roles open suggests scaling management layer)

### Seniority pyramid

**Shape:** Balanced to slightly top-heavy (Series B with distributed eng; cost-aware hiring means some mid-level bulk)

| Level | Approx % | Approx count | Confidence |
|---|---|---|---|
| Junior / Associate | ~8% | ~30–35 | ⚠️ Inferred |
| Mid-level | ~35% | ~125–155 | ⚠️ Inferred |
| Senior | ~40% | ~140–175 | ⚠️ Inferred |
| Staff / Principal | ~10% | ~35–45 | ⚠️ Inferred |
| Management (EM, Director) | ~5% | ~18–22 | ⚠️ Inferred |
| Executive (VP+) | ~2% | ~7–10 | ⚠️ Inferred |

### Leadership map

| Name | Title | Reports to | Tenure | Notes |
|---|---|---|---|---|
| Mike Yan | CEO & Co-founder | Board | Since 2015 (returned ~2023–24) | Stepped back 2022, Sunny Manivannan (ex-Braze) took over and departed; Mike back as CEO |
| Antony Gorin | Co-founder | Board | Since 2015 | Technical co-founder; role unclear |
| Dave Wilby | CPO | CEO | Since ~2024–25 | 20+ yrs product leadership; hired after Sunny departed |
| Golov Nikolay | Chief Data Architect | CTO/CEO | ❓ | Data/AI architecture lead |

**Gaps:** CTO not confirmed in search results — may be Antony Gorin (technical co-founder) or an unfilled/combined role. VP Engineering not confirmed. Leadership team is notably thin at the public-facing exec level.

### Org signals & notes
- CEO transition (Mike → Sunny → Mike back) is a notable instability signal. Sunny Manivannan left to found Peerbound — suggests culture/direction misalignment or founder pulling back control
- New CPO Dave Wilby is a stabilizing hire — experienced product exec brought in post-Sunny departure
- Multiple Engineering Manager roles open simultaneously (Growth, Billing, Inbox) = scaling the management layer, likely post-Series B professionalization
- LeSS framework is unusual — implies large, coordinated engineering org operating as one product team rather than autonomous squads

---

## 6. Hiring intelligence

### Current hiring status
**Hiring right now?** Yes — actively accelerating post-Series B
**Open roles (as of 2026-03-25):** ~30–45 confirmed (Wellfound: 45 as of Jan 2026; Glassdoor: 9; Greenhouse board active)
**Hiring velocity:** Accelerating (April 2025 Series B → hiring ramp underway)

### Active open roles (sample as of 2026-03-25)

| Title | Department | Seniority | Location | Key tech | Signal | Posted |
|---|---|---|---|---|---|---|
| Senior Engineering Manager (Growth) | Engineering | Manager | Remote/Distributed | — | growth_hire | ~Mar 2026 |
| Senior Engineering Manager (Business & Billing) | Engineering | Manager | Remote/Distributed | — | growth_hire | ~Mar 2026 |
| Engineering Manager (Billing & Business) | Engineering | Manager | Remote/Distributed | — | growth_hire | ~Mar 2026 |
| Engineering Manager (Inbox) | Engineering | Manager | Remote/Distributed | — | growth_hire | ~Mar 2026 |
| Machine Learning Engineer (AI Core Team) | Engineering / AI | Mid–Senior | Remote | Python, LLMs | strategic_bet | ~Mar 2026 |
| Senior Machine Learning Engineer | Engineering / AI | Senior | Remote | Python, LLMs | strategic_bet | ~Mar 2026 |
| Developer Enablement Engineer | Engineering | Mid | Remote | Docs, tooling | new_function | ~Mar 2026 |
| Senior PHP Developer | Engineering | Senior | Yerevan/Barcelona | PHP, Postgres | backfill/growth | ~Mar 2026 |
| Head of Affiliate Marketing | Marketing | Senior | Austin/Remote | — | growth_hire | ~Mar 2026 |
| Full-Stack Developer | Engineering | Mid | Barcelona | TypeScript, React, PHP | growth_hire | ~Mar 2026 |
| Cloud Infrastructure Engineer | Engineering | Senior | Yerevan/Remote | AWS | strategic_bet | ~Mar 2026 |

### Hiring velocity metrics

| Metric | Value |
|---|---|
| Roles open today | ~30–45 |
| Posted last 30 days | ~15–20 estimated |
| Posted last 90 days | ~25–35 estimated |
| vs prior 30-day period | Accelerating (post-Series B ramp) |

### Hiring concentration

**Scaling hard:** AI/ML (AI Core Team — 2 open ML roles confirmed), Engineering management layer, Cloud infrastructure, Affiliate/growth marketing
**Frozen:** No obvious frozen functions
**Most in-demand skills:** Python (ML), PHP (backend scale), TypeScript/React, AWS, LLMs
**Most in-demand seniority:** Senior + Manager level; some mid (Full-Stack Developer, Developer Enablement)
**Location of open roles:** Remote-first with Barcelona + Yerevan as physical hubs

### Interpretation
The hiring pattern post-Series B is clear: **AI buildout + management layer professionalization + growth marketing**. The AI Core Team hiring (multiple ML engineers, Snowflake AI infra) signals a deliberate push to bake AI deeper into the product — not just feature-level but infrastructure-level. Hiring Senior EMs across 3–4 product domains simultaneously means they're building out middle management to scale execution. Developer Enablement is a new function signal — they're investing in the developer ecosystem (likely partner/API growth strategy).

---

## 7. Talent flow — donors & recipients

### Where they recruit FROM (talent donors)

*(Limited hard data without LinkedIn access — based on leadership backgrounds and geo patterns)*

| Previous company | # recent hires | Function | Notes |
|---|---|---|---|
| Braze | 1 confirmed | Executive | Sunny Manivannan (departed); Braze network likely |
| Coupa / enterprise SaaS | ⚠️ Likely | Sales, CS | CPO Dave Wilby + Sunny both enterprise SaaS DNA |
| YEREVAN tech scene | Multiple | Engineering | Local Armenian engineering talent; strong pool |
| Barcelona tech startups | Multiple | Engineering, Product | Growing Barcelona tech ecosystem |
| Facebook / Meta | ⚠️ Likely | Eng, Product | Deep Meta platform integration (Messenger, Instagram) = relevant alumni |
| Other chat/messaging cos | ⚠️ Possible | Eng, Product | Twilio, Intercom alumni would be logical fits |

**Donor pattern interpretation:**
Geographic sourcing is the dominant signal — Yerevan and Barcelona are cost-optimized engineering hubs with real talent. US leadership layer likely comes from B2B SaaS network (Braze, Coupa, HubSpot). No strong FAANG drain signal — Manychat is not yet at the employer brand level to pull Google/Meta at scale, but they recruit from the Meta ecosystem due to platform alignment. ⚠️ Inferred.

### Where their people GO (talent recipients)

| Destination company | # who went there | Function | Notes |
|---|---|---|---|
| Peerbound | 1 confirmed | Executive | CEO Sunny Manivannan founded it |
| Other SaaS startups | ⚠️ Likely | Multiple | Standard churn for Series B |
| Larger messaging/martech cos | ⚠️ Possible | Eng, Sales | HubSpot, Klaviyo, Braze as potential destinations |

**Recipient pattern interpretation:**
❓ Insufficient hard data. Given Yerevan/Barcelona footprint, local startup ecosystems will also pull talent. PHP engineers may face limited external demand (PHP is declining in popularity), which paradoxically reduces attrition risk for backend engineers.

### Net talent flow summary

```
→ Gaining most from: Armenian/Yerevan tech ecosystem, Barcelona startup scene, B2B SaaS network (inferred)
← Losing most to:   Local startup ecosystems, larger martech/SaaS (HubSpot, Klaviyo) (inferred)

Net position: Moderate magnet — strong in geos where they operate; weak brand in SF/NYC talent market
```

**Strategic interpretation:**
Manychat's distributed hiring model is both a strength and a constraint. Strong pull in Yerevan/Barcelona at competitive local salaries. Weaker pull in US tech hubs where they compete against Notion, Stripe, Salesforce-tier employers. PHP stack limits the candidate pool for backend hires. Post-Series B + $163M total funding, they have more capacity to compete on comp — watch for US engineering hiring acceleration.

---

## 8. Culture & employer brand

| Signal | Value | Source | Date |
|---|---|---|---|
| Glassdoor rating | 4.5 / 5.0 | Glassdoor | Mar 2026 |
| Rating trend | Stable / positive | Glassdoor | Mar 2026 |
| Blind sentiment | ❓ Not checked | Blind | — |
| Comp vs market | ⚠️ Below US market; competitive in Yerevan/Barcelona | Inferred | Mar 2026 |
| Remote reality | Remote-friendly with hub offices | JDs + careers page | Mar 2026 |

**Note on compensation:** No Levels.fyi data found — too small/private for good TC benchmarks. Likely below FAANG/Notion-tier for US hires; competitive for Yerevan/Barcelona market rates. PHP specialization may depress some comp benchmarks.

### What employees say

**Top positives (Glassdoor, ~91 reviews, 4.5/5):**
1. Smart, talented teammates — strong peer calibration across a distributed team
2. Genuine product that solves real problems — engineers feel purpose in the work
3. Strong culture and values rating (4.5); good work-life balance (4.4); flexibility

**Top negatives (Glassdoor, recent reviews):**
1. COO org culture issues — "fear and tension" cited in that department specifically
2. Strategic direction can feel inconsistent — likely CEO transition turbulence
3. Career progression frameworks still evolving — immature for company age

---

## Intelligence scores

| Dimension | Score (0–10) | Rationale |
|---|---|---|
| Talent source score | **5/10** | Good mid-level engineers (especially in Yerevan/Barcelona); PHP backend engineers are moveable but niche. Comp likely competitive-to-below-market in US. Post-Series B equity may not be compelling vs. IPO-stage peers. |
| Talent competitor score | **4/10** | Different stack (PHP vs TypeScript), different geos (Yerevan/Barcelona vs SF/NYC), different stage. Overlaps mainly in: ML/AI engineers, product engineering roles, B2B SaaS GTM talent. |

---

## Strategic summary

### What are they building right now?
Manychat is executing an **AI-native conversational marketing** platform — moving beyond rule-based chatbot flows toward autonomous AI agents that can engage, qualify, and transact on behalf of businesses. The $140M raise (April 2025) was explicitly positioned around "AI-driven customer engagement." The Snowflake + Snowpark architecture for AI inference, plus active ML Core Team hiring, confirms this is real investment, not just positioning.

Secondary build: **enterprise upgrade**. New CPO (Dave Wilby), multiple EM hires, Billing & Business team investment, Head of Affiliate Marketing — the company is professionalizing its GTM and product org post-Series B, likely targeting upmarket movement from SMB/creator to mid-market.

### Tech strategy signal
PHP at 1B conversations/year is a bold architectural decision to maintain. They've clearly made it work — but it creates two risks:
1. **Hiring friction** — strong PHP backend engineers are increasingly rare (PHP losing share to Node/Go/Python)
2. **Talent perception** — engineers who want cutting-edge stacks may self-select out

The Snowflake bet for AI is smart for their size — using managed GPU compute (Snowpark) vs. building ML infra is the right leverage play for a 400-person company. Python AI services sitting alongside PHP backend is an increasingly common hybrid.

### Talent opportunity / risk

**As a talent source:**
- Best targets: Mid-senior frontend engineers (TypeScript/React) from Barcelona/Amsterdam offices — modern stack, good culture signals, likely below SF market rates
- Interesting: ML/AI engineers on the AI Core Team — post-Series B equity, but competing in hot market
- Hard to move: PHP backend engineers (rare in market; Manychat is one of few quality employers for this skill)
- Timing: Post-Series B (April 2025) = ~18 months since raise → equity partially vested, some early hires approaching 4yr cliff in 2026

**As a talent competitor:**
- Minimal overlap for most roles — different stack, different geos
- Potential overlap: B2B SaaS GTM talent (AEs, CSMs), ML/AI engineers, product managers
- Not a threat in SF/NYC market; could be a competitor in Barcelona or Amsterdam

**Key risks / watch items:**
- CEO instability (Mike Yan → Sunny → Mike back) — watch for further leadership churn if culture issues persist
- PHP as primary backend is a long-term hiring/talent risk — watch for signs they're migrating to Node/TypeScript
- COO org issues on Glassdoor — if that extends to attrition, could destabilize commercial teams
- $34.6M ARR at $163M raised = capital-efficient but growth needs to re-accelerate to justify Series B valuation

---

## Research log

| Date | What was researched | Key findings | Next steps |
|---|---|---|---|
| 2026-03-25 | Full Phase 1–8 initial research | Profitable Series B ($140M, April 2025); PHP-at-scale (1B conversations); AI Core Team hiring; Snowflake for AI; Mike Yan back as CEO; Glassdoor 4.5/5; ~400 employees across Yerevan/Barcelona/Austin/Amsterdam/São Paulo | Validate headcount via LinkedIn; check Blind for eng sentiment; pull full Greenhouse role list; confirm CTO identity; check Levels.fyi or similar for Yerevan/Barcelona comp benchmarks |

## Raw notes & links

- Careers page: careers.manychat.com
- Greenhouse board: job-boards.greenhouse.io/manychat
- Engineering blog (Medium): medium.com/manychat-engineering
- PHP at scale post (Feb 2026): medium.com/manychat-engineering/how-manychat-scaled-to-1-billion-conversations-using-php-...
- Snowflake AI post (June 2025): medium.com/manychat-engineering/using-snowflake-for-ai-completion-in-manychat-...
- Series B announcement (April 2025): manychat.com/blog/manychat-raises-140m/
- Summit Partners announcement: summitpartners.com/news/manychat-raises-140m-...
- Glassdoor: glassdoor.com/Reviews/Manychat-Reviews-E1609671.htm
- Crunchbase: crunchbase.com/organization/manychat
- GetLatka revenue: getlatka.com/companies/manychat
- CPO hire: manychat.com/blog/dave-wilby/
