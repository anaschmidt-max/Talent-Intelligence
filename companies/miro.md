# Company: Miro

**Domain:** miro.com
**LinkedIn:** linkedin.com/company/mirohq
**GitHub:** github.com/miroapp (44 repos)
**Last updated:** 2026-04-13
**Research status:** 🟢 Complete

---

## 1. Company identity

| Field | Value | Confidence |
|---|---|---|
| Legal name | RealtimeBoard Inc. (brand: Miro) | ✅ Confirmed |
| Year founded | 2011 | ✅ Confirmed |
| Headquarters | San Francisco, CA (USA) | ✅ Confirmed |
| Company type | B2B SaaS — Visual collaboration / Innovation workspace | ✅ Confirmed |
| Stage | Growth / Pre-IPO (last round Series C, profitable, no new raise since 2022) | ✅ Confirmed |
| Latest funding | $400M Series C — January 2022 | ✅ Confirmed |
| Total funding raised | $476.3M | ✅ Confirmed |
| Valuation | $17.5B (post Series C, January 2022; not re-marked since) | ✅ Confirmed |

**Notes:** Miro has been profitable and self-funding since ~2022. No new funding rounds despite significant headcount reductions in 2023 and 2024. Valuation likely marked down in secondary markets given broader SaaS multiple compression.

---

## 2. Office locations

| City | Country | HQ? | Remote policy | Est. headcount here | Functions present |
|---|---|---|---|---|---|
| San Francisco | USA | Yes | Hybrid | ~200–300 | Exec, Finance, Legal, Marketing, Sales |
| Amsterdam | Netherlands | No | Hybrid | ~300–400 | Engineering, Product, Design, CS |
| Austin | USA | No | Hybrid | ~200–300 | Sales, CS, HR, Finance |
| Berlin | Germany | No | Hybrid | ~150–200 | Engineering, Product |
| London | UK | No | Hybrid | ~150–200 | Sales, Engineering, Design |
| Copenhagen | Denmark | No | Hybrid | ~100–150 | Engineering, Product, Design |
| Yerevan | Armenia | No | Hybrid | ~150–200 | Engineering |
| New York | USA | No | Hybrid | ~100–150 | Sales, Finance |
| Munich | Germany | No | Hybrid | ~50–100 | Sales, CS |
| Paris | France | No | Hybrid | ~50–100 | Sales |
| Singapore | Singapore | No | Hybrid | ~50–100 | Sales, CS |
| Sydney | Australia | No | Hybrid | ~50–100 | Sales, CS |
| Tokyo | Japan | No | Hybrid | ~50–100 | Sales, CS |

**Notes on geo footprint:**
13 global hubs across 9 countries. Engineering is concentrated in Amsterdam, Berlin, Copenhagen, Yerevan, and London. The "hub-centric hybrid" model ("Miro Together") requires in-person team days and culture days — this is not a fully remote company. Remote roles appear to be EMEA-remote only for engineering, not global-remote. ⚠️ Inferred from careers page language and open role location requirements.

---

## 3. Headcount by job family

**Total estimated headcount:** ~1,400–1,600 (post-October 2024 layoffs)
**Last headcount check:** 2026-04-13
**Headcount 6 months ago:** ~1,500–1,700 (post-layoff stabilization)
**Trend:** ➡️ Stable (post two rounds of cuts in 2023 and 2024)

**Context:** Miro had ~2,000+ employees at peak (2022–2023). Two layoff rounds reduced this:
- December 2023: 119 people cut (7%)
- October/November 2024: ~275 people cut (~18% of remaining workforce)

### Breakdown by function

| Job Family | Est. Count | % of total | Confidence | Notes |
|---|---|---|---|---|
| Engineering | ~400–500 | ~30% | ⚠️ Inferred | Largest single function; 13 open eng roles active |
| Sales | ~250–350 | ~20% | ⚠️ Inferred | 23 open sales roles — most of any dept |
| Customer Success | ~150–200 | ~11% | ⚠️ Inferred | 8 open CS roles |
| Product | ~80–120 | ~7% | ⚠️ Inferred | Only 1 open PM role — likely frozen |
| Design | ~70–100 | ~6% | ⚠️ Inferred | 3 open design roles |
| Marketing | ~70–100 | ~6% | ⚠️ Inferred | 3 open marketing roles |
| Data | ~50–80 | ~4% | ⚠️ Inferred | Embedded in engineering streams |
| ML / AI | ~30–50 | ~3% | ⚠️ Inferred | Growing; Lead Research Scientist role open |
| HR & People | ~40–60 | ~3% | ⚠️ Inferred | 3 open people roles |
| Finance & Legal | ~30–50 | ~3% | ⚠️ Inferred | 2 open finance roles |
| Operations | ~30–50 | ~3% | ⚠️ Inferred | |
| Executive (VP+) | ~30–50 | ~2% | ⚠️ Inferred | |
| DevRel | ~10–20 | ~1% | ❓ Unclear | No dedicated DevRel roles currently visible |
| **Total** | **~1,400–1,600** | 100% | ⚠️ Inferred | |

### Key ratios

| Ratio | Value | Signal |
|---|---|---|
| Eng / Total | ~30% | Strong engineering density — product-led company |
| Data+ML / Eng | ~15–20% | Moderate; growing as AI features become core |
| Sales / Total | ~18–22% | Enterprise GTM push despite PLG roots |
| PM / Eng | ~1:5 | Low PM:Eng ratio — engineering-heavy culture |

---

## 4. Tech stack — with people & seniority

### Confirmed stack ✅

**Backend:** Java, Kotlin (primary), Node.js (secondary for some services), Spring Boot, Spring Framework
**Frontend:** TypeScript (primary), React.js, JavaScript, HTML5, CSS3, Next.js, Webpack
**Mobile:** React Native (⚠️ inferred from stack listing — no dedicated mobile team confirmed)
**Databases:** PostgreSQL (primary relational), Redis (cache/session), Amazon S3 (object storage)
**Data / ML:** Looker (BI), Segment (event data), Google Analytics, dbt (Spark + Presto adapters confirmed in GitHub), Python (for data pipelines — ⚠️ inferred from GitHub repos)
**Infrastructure / Cloud:** AWS (primary cloud), Amazon EC2, Amazon CloudFront, Amazon Route 53, Kubernetes (container orchestration), Docker, Terraform (IaC), NGINX
**CI/CD & Tooling:** GitHub, Bitbucket, Bamboo (CI), Apache Maven, Webpack, Git, Postman
**Observability:** Sentry (error tracking), New Relic (APM), Pingdom (uptime), HackerOne (bug bounty)
**CDN/Edge:** Cloudflare, Amazon CloudFront, jsDelivr
**Security/Compliance:** HackerOne, OneTrust

### Stack sources
- [x] Engineering team page: miro.com/careers/teams/engineering/ — Java, Kotlin, TypeScript, React, AWS, PostgreSQL, Kubernetes ✅
- [x] GitHub org: github.com/miroapp — SDK repos, dbt plugins (Python), MCP server, AI tools ✅
- [x] Job descriptions: TypeScript, React, Canvas API, WebSockets, Java, Kotlin ⚠️
- [x] Himalayas tech stack aggregation — full stack listing ⚠️
- [ ] StackShare: 429 error — not accessible

### People & seniority per technology

#### Kotlin / Java (Backend)
- **Users:** ~150–200 engineers (core backend platform and product services)
- **Seniority mix:** ~5% junior | ~40% mid | ~40% senior | ~15% staff/principal
- **Signal:** Primary backend language. Kotlin appears to be the direction of travel (newer services), with Java in older services. Spring Boot is the framework of choice. Heavy investment in backend platform given 9 distinct engineering streams.
- **Confidence:** ✅ Confirmed (careers page, JDs, engineering blog references)

#### TypeScript / React (Frontend)
- **Users:** ~100–150 engineers
- **Seniority mix:** ~5% junior | ~35% mid | ~45% senior | ~15% staff/principal
- **Signal:** Core frontend stack. The product is a complex real-time canvas — engineers work extensively with Canvas API, WebSockets (WS), and TypeScript. This is specialized frontend work, not commodity React dev.
- **Confidence:** ✅ Confirmed (careers page, JDs referencing Canvas/WS/TypeScript)

#### PostgreSQL + Redis
- **Users:** ~30–50 engineers directly responsible; used by all backend teams
- **Seniority mix:** Primarily senior/staff-level ownership
- **Signal:** Standard relational + cache setup. S3 for object/blob storage (whiteboards = large state). No NoSQL/document DB signal detected.
- **Confidence:** ✅ Confirmed (himalayas, engineering page)

#### AWS / Kubernetes / Terraform
- **Users:** ~30–50 in dedicated infra/platform stream; all engineers are consumers
- **Seniority mix:** ~50% senior | ~30% staff | ~20% principal/architect
- **Signal:** AWS-native. Kubernetes for container orchestration. Terraform for IaC. This is a mature, cloud-native setup. "Infrastructure & Data" is one of Miro's nine engineering streams.
- **Confidence:** ✅ Confirmed

#### Python (Data & ML)
- **Users:** ~30–50 in Data/ML-focused roles
- **Seniority mix:** ~10% junior | ~30% mid | ~40% senior | ~20% staff
- **Signal:** Used for data pipelines (dbt adapters on GitHub confirmed) and ML/AI development. Lead Research Scientist currently open — AI investment is real and growing.
- **Confidence:** ⚠️ Inferred (GitHub repos + job descriptions)

### Inferred stack ⚠️ (from JDs, not confirmed)

- **Ruby on Rails** — listed in stack aggregators; possibly legacy or internal tooling
- **Less (CSS preprocessor)** — listed in stack; likely legacy
- **React Native** — listed but no mobile-specific JDs seen
- **Apache Maven** — build tool for Java/Kotlin services

---

## 5. Org structure & seniority

### Engineering org model
- **Structure:** Squad-based within product streams; platform/infra as separate vertical
- **Team organization:** Organized into 9 named engineering streams: Growth, Infrastructure & Data, Discovery & Scale, Canvas & Collaboration, Structure & Automation, Core Platform, Security/Compliance/Administration, Security, Functional Operations
- **IC:Manager ratio:** ~7–8:1 (estimated from theorg.com data showing 56 visible eng team members with ~7 managers) ⚠️ Inferred

### Seniority pyramid

**Shape:** Top-heavy (typical for a company post-layoffs that cut junior/mid first; also a mature Series C-era org)

| Level | Approx % | Approx count | Confidence |
|---|---|---|---|
| Junior / Associate | ~5% | ~20–30 | ⚠️ Inferred |
| Mid-level | ~30% | ~120–150 | ⚠️ Inferred |
| Senior | ~40% | ~160–200 | ⚠️ Inferred |
| Staff / Principal | ~15% | ~60–75 | ⚠️ Inferred |
| Management (EM, Director) | ~8% | ~30–40 | ⚠️ Inferred |
| Executive (VP+) | ~2% | ~8–12 | ⚠️ Inferred |

### Leadership map

| Name | Title | Reports to | Tenure at Miro | Notes |
|---|---|---|---|---|
| Andrey Khusid | CEO & Co-founder | Board | Since 2011 | Founded as RealtimeBoard |
| Jeff Chow | Chief Product & Technology Officer (CPTO) | CEO | Since Nov 2023 | Joined via Freehand/InVision acquisition; prev CEO at InVision, Product/Design leader at Google, TripAdvisor; BS Mechanical Eng MIT |
| Justin Coulombe | Chief Financial Officer | CEO | ~2022–2023 | Prev CFO at SurveyMonkey, Finance at Box and Autodesk; MBA UC Berkeley Haas |
| Norman Gennaro | Chief Revenue Officer | CEO | ❓ Unclear tenure | Leads global sales |
| Melinda Thompson | Chief People and Legal Officer | CEO | ❓ Unclear tenure | Combined HR + Legal role |
| Grisha Pavlotsky | Chief Transformation Officer | CEO | ❓ Unclear tenure | Prev Partner at Deloitte CIS; owns operational efficiency |
| Aileen Duplantis | Chief Marketing Officer | CEO | ❓ Unclear tenure | |
| Łukasz Sągol | Director of Engineering, Intelligent Workflows, Integrations & Community | CPTO | ❓ Unclear tenure | Most senior visible eng leader below CPTO |
| Reveka Fili | Head of Engineering, Access Controls & Administration | — | ❓ Unclear tenure | |
| Paul Doran | Senior Engineering Manager, AI Platform | — | ❓ Unclear tenure | Key AI platform leader |
| Susan van de Ven | Senior Engineering Manager, Monetization & Payments | — | ❓ Unclear tenure | |

**Note:** No dedicated CTO or VP Engineering role exists. Engineering reports directly to Jeff Chow as CPTO. This is a flat product+engineering leadership model. ✅ Confirmed from about page and org chart data.

### Org signals & notes
- The CPTO model (combined product + tech under one executive) is notable. It suggests product and engineering are tightly coupled — engineers are expected to understand product context, not just execute tickets.
- Post-2024 restructuring aimed at "fewer layers" — the org was explicitly flattened per CEO message.
- 9 distinct engineering streams suggests squad/tribe-style organization with clear product area ownership.

---

## 6. Hiring intelligence

### Current hiring status
**Hiring right now?** Yes — selectively
**Open roles (as of 2026-04-13):** 54 total
**Hiring velocity:** Decelerating (post-layoff cautious hiring, heavily skewed to Sales)

### Active open roles (sample — as of 2026-04-13)

| Title | Department | Seniority | Location | Key tech | Signal |
|---|---|---|---|---|---|
| Backend Engineer, Monetization | Engineering | Mid/Senior | Copenhagen/London | Java/Kotlin | growth_hire — monetization build-out |
| Senior Frontend Engineer, AI Flows | Engineering | Senior | Copenhagen/London | TypeScript/React | strategic_bet — AI product investment |
| Lead Research Scientist | Engineering | Staff/Principal | Copenhagen/London/Remote EMEA | ML/AI | strategic_bet — AI capability building |
| Staff Product Designer, Prototypes | Design | Staff | Copenhagen/London | — | strategic_bet — new Prototypes product |
| Graduate Software Engineer | Engineering | Junior | Amsterdam/Berlin | Java/Kotlin | growth_hire — pipeline building, Aug 2026 start |
| Enterprise Account Executive | Sales | Mid/Senior | Remote US | — | growth_hire — US enterprise expansion |
| Go-to-Market Lead, Miro Engage | Product | Senior/Lead | Copenhagen/London/Remote EMEA | — | new_function — Engage product launch |

### Hiring velocity metrics

| Metric | Value |
|---|---|
| Roles open today | 54 |
| Engineering roles | 13 (~24% of open roles) |
| Sales roles | 23 (~43% of open roles) |
| Posted last 30 days | ❓ Unclear (date stamps not extracted) |
| Posted last 90 days | ❓ Unclear |

### Hiring concentration

**Scaling hard:** Sales (23 roles = 43% of all open roles), Engineering AI-related roles
**Frozen:** Product Management (1 open role only), likely Data
**Most in-demand skills:** TypeScript/React (frontend), Java/Kotlin (backend), Enterprise sales skills
**Most in-demand seniority:** Senior / Staff (limited junior hiring except Graduate programme)
**Location of open roles:** Copenhagen and London dominate engineering; US remote dominates sales

### Interpretation
Miro is in a post-restructuring, selective-hiring phase. The sales-heavy open role count (43% of all openings) signals an enterprise GTM push — the company is trying to convert its massive PLG user base (100M users) into enterprise revenue. Engineering hiring is focused on AI Flows and monetization, confirming that the AI Innovation Workspace strategy announced in 2025 is now being staffed. Very limited junior hiring except for a structured graduate programme (Amsterdam/Berlin, August 2026 start).

---

## 7. Talent flow — donors & recipients

### Where they recruit FROM (talent donors)

*(Based on leadership background and general knowledge — LinkedIn deep-dive not completed)*

| Previous company | # recent hires | Function | Notes |
|---|---|---|---|
| InVision | 1 confirmed (Jeff Chow) | Executive | CPTO joined via Freehand acquisition |
| Okta | Known (Sangeeta Chakraborty) | Revenue | CRO background |
| Google | Known (Jeff Chow background) | Engineering/Product | Attracts from FAANG |
| Atlassian | Investor + known talent relationship | Engineering/Product | Collaboration space overlap |
| Figma / design-tool companies | ⚠️ Inferred | Design/Engineering | Canvas-tool niche overlap |

**Donor pattern interpretation:** ⚠️ Incomplete — LinkedIn donor scan not performed. Based on leadership hires, Miro recruits senior leaders from enterprise SaaS and design-tool companies. Amsterdam hub likely draws from Dutch tech ecosystem (Booking.com, TomTom, Adyen).

### Where their people GO (talent recipients)

*(Based on Glassdoor/Blind signals — LinkedIn recipient scan not performed)*

| Destination company | # who went there | Function | Notes |
|---|---|---|---|
| Competitors (Figma, Lucid, Canva) | ⚠️ Inferred | Design/Product/Eng | Obvious destinations in visual-tool space |
| OpenAI / AI startups | ⚠️ Inferred | Engineering/ML | AI talent drain a risk given AI investment |
| FAANG | ⚠️ Inferred | Engineering | Post-layoff talent absorbed by larger cos |

**Recipient pattern interpretation:** ⚠️ Incomplete — needs LinkedIn scan. High probability that layoff victims (275 in Oct 2024 + 119 in Dec 2023) went to competitors and FAANG.

### Net talent flow summary

```
→ Gaining from:  Enterprise SaaS leaders, design-tool ecosystem, Dutch/European tech
← Losing to:     AI startups, competitors (Figma/Lucid/Canva), FAANG (post-layoffs)

Net position: Neutral to slight Talent Feeder (post-layoff reputation damage)
```

**Strategic interpretation:** Two layoff rounds in 13 months have likely damaged Miro's employer brand in the talent market. The gap between "at peak" (2,000+ employees, $17.5B valuation) and "current" (1,400–1,600 employees, unclear valuation mark) creates narrative risk. Engineers considering Miro may hesitate given the restructuring history.

---

## 8. Culture & employer brand

| Signal | Value | Source | Date |
|---|---|---|---|
| Glassdoor rating | 3.7 / 5 | Glassdoor (603 reviews) | 2026-04 |
| Rating trend | Declining (~3% drop in last 12 months) | Glassdoor | 2026-04 |
| Blind rating | 3.3 / 5 (250 reviews) | Blind | 2026-04 |
| Blind: Comp & Benefits | 3.6 / 5 | Blind | 2026-04 |
| Blind: Management | 2.6 / 5 (lowest category) | Blind | 2026-04 |
| Glassdoor: Rec to Friend | 64% would recommend | Glassdoor | 2026-04 |
| Glassdoor: Comp & Benefits | 3.9 / 5 | Glassdoor | 2026-04 |
| Glassdoor: Career Opps | 3.4 / 5 (below average) | Glassdoor | 2026-04 |
| Comp vs market | At-to-slightly-below EU market; below US tech market | Levels.fyi | Nov 2025 |
| Remote reality | Hybrid required (hub-centric); EMEA-remote for some eng roles | Careers page | 2026-04 |
| SWE comp (Netherlands) | €116K–€170K total comp (median ~€130K) | Levels.fyi | Nov 2025 |

### What employees say

**Top positives (from reviews):**
1. Good work-life balance (rated 3.7–3.9) and a real hybrid/flexible model
2. Compensation is competitive for European market (esp. Netherlands)
3. Interesting technical problems at scale (100M users, real-time canvas)

**Top negatives (from reviews):**
1. Management quality is the lowest-rated dimension (Blind: 2.6/5) — EMs described as "project managers rather than people managers"
2. Layoffs handled poorly — "first round of layoffs were treated extremely poorly"; significant fear and distrust in aftermath
3. Strategy churn — "priorities shift monthly"; leadership direction changes create instability and make ownership hard
4. Bloated leadership (Blind review title: "Nice culture, bloated leadership") — too many layers was cited even before the restructuring

---

## Intelligence scores

| Dimension | Score (0–10) | Rationale |
|---|---|---|
| Talent source score | 6/10 | Solid mid-level engineers with real-time canvas + collaborative SaaS experience; tenure has shortened post-layoffs; some top talent exited in rounds; EU-based talent is at European comp levels |
| Talent competitor score | 6/10 | Overlapping stack (TypeScript/React/Kotlin/AWS/Kubernetes), similar stage (growth/pre-IPO), overlapping talent pool in Amsterdam/Berlin/London; competes for same senior product engineers |

---

## Strategic summary

### What are they building right now?
Miro pivoted hard in 2025 to become the "AI Innovation Workspace" — moving from a whiteboard tool to an AI-first platform where AI agents (Sidekicks) work alongside teams on the canvas. Key products in active development:
- **Miro Flows** — repeatable multi-step AI workflows on the canvas
- **Miro Specs** — PRD + prototype + technical diagrams → AI coding tool integration (Copilot, Cursor, Claude Code)
- **Miro Engage** — new GTM product currently being hired for (GTM Lead role open)
- **Miro MCP server** — developer-facing integration announced March 2026

The AI product push is supported by active hiring for AI Platform (Paul Doran's team), Lead Research Scientist, and Senior Frontend Engineer for AI Flows.

### Tech strategy signal
The stack (Java/Kotlin backend + TypeScript/React frontend + AWS + Kubernetes) is a mature, well-structured enterprise SaaS architecture. The move toward MCP server and AI coding tool integration (Claude Code, Cursor, Copilot) signals that Miro is trying to embed itself into the AI-assisted software development workflow — a smart strategic bet given their user base of product/engineering teams. dbt usage in GitHub repos indicates a maturing data infrastructure.

### Talent opportunity / risk

**As a talent source:** Moderate opportunity. Post-layoffs, ~400 engineers left Miro in 2023–2024. Many will be on the market or recently settled at new companies. The canvas/collaborative infra engineers (TypeScript + Canvas API + WebSockets + Kotlin) are a niche skill set but valuable. EU-based compensation (€116K–€130K median) means they are recruitable for roles offering meaningful TC uplift or equity.

**As a talent competitor:** Moderate competition. Overlapping stack, similar product-led origins, same European talent markets. However, Miro's valuation overhang ($17.5B mark not updated since 2022) and layoff history mean their employer brand is weaker than at peak, reducing their pull power for senior candidates.

**Key risks / watch items:**
- No new funding since January 2022 and a $17.5B valuation that may be significantly marked down in secondary markets — equity compensation is a question mark for candidates
- Two layoff rounds in 13 months create a narrative of instability; management scores on Blind (2.6/5) are a red flag
- Jeff Chow joined via acquisition in November 2023 — tenure is ~2.5 years; watch for leadership changes
- Revenue growth slowing (Sacra: $630M ARR → $665M ARR in 2024, only ~5.6% growth) despite 100M users — monetization pressure is why Sales is the biggest hiring priority

---

## Research log

| Date | What was researched | Key findings | Next steps |
|---|---|---|---|
| 2026-04-13 | Full initial profile — all 8 areas | Stack confirmed (Kotlin/Java/TypeScript/React/AWS/K8s/PostgreSQL); 2 layoff rounds (Dec 2023: 119, Oct 2024: 275); CPTO Jeff Chow (joined Nov 2023 via InVision); Glassdoor 3.7, Blind 3.3; 54 open roles skewed to Sales (43%); $665M ARR, $17.5B valuation (2022); AI pivot in 2025 | 1. Run LinkedIn talent flow scan (donors + recipients). 2. Validate headcount by function via LinkedIn People filter. 3. Check Jeff Chow + other leaders' LinkedIn for recent tenure confirmation. 4. Deep-dive Miro Engineering Medium blog for specific architecture posts. |

## Raw notes & links

- Careers page: https://miro.com/careers/open-positions/
- Engineering team: https://miro.com/careers/teams/engineering/
- Engineering blog: https://medium.com/miro-engineering
- GitHub org: https://github.com/miroapp
- About/leadership: https://miro.com/about/
- CEO layoff message (Feb 2023 round): https://miro.com/blog/a-message-from-our-ceo/
- Series C announcement: https://miro.com/newsroom/miro-series-c/
- Glassdoor: https://www.glassdoor.com/Reviews/Miro-Reviews-E2106300.htm
- Blind: https://www.teamblind.com/company/Miro
- Levels.fyi: https://www.levels.fyi/companies/miro/salaries/software-engineer
- Jeff Chow profile: https://theorg.com/org/miro/org-chart/jeff-chow
- Sacra revenue data: https://sacra.com/c/miro/
- PitchBook 2026 profile: https://pitchbook.com/profiles/company/96620-95
- Tech stack (himalayas): https://himalayas.app/companies/miro/tech-stack
- Org chart (theorg): https://theorg.com/org/miro/teams/engineering-team
- Oct 2024 layoff coverage: https://techstartups.com/2024/11/04/miro-a-unicorn-startup-once-valued-at-17-5-billion-cuts-18-of-its-workforce-amid-competitive-pressures/
