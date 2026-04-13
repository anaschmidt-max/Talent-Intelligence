# Company: Adyen

**Domain:** adyen.com
**LinkedIn:** linkedin.com/company/adyen
**GitHub:** github.com/Adyen
**Last updated:** 2026-04-08
**Research status:** 🟢 Complete

---

## 1. Company identity

| Field | Value | Confidence |
|---|---|---|
| Legal name | Adyen N.V. | ✅ |
| Year founded | 2006 | ✅ |
| Headquarters | Amsterdam, Netherlands | ✅ |
| Company type | Fintech / Payments Infrastructure | ✅ |
| Stage | Public (Euronext Amsterdam: ADYEN) | ✅ |
| Latest funding | IPO June 2018 @ €240/share (opened at €400) | ✅ |
| Market cap | ~$32.5B (March 2026) | ⚠️ market data |
| Revenue | ~$2.3B (2025) | ⚠️ reported estimate |

**What they do:** Full-stack payments infrastructure — processes payments online, in-app, and in-person for enterprise merchants (Spotify, Uber, McDonald's, etc.). End-to-end: gateway + acquiring + risk management + data. Not a PSP reseller — they own the full stack.

---

## 2. Office locations

| City | Country | HQ? | Remote policy | Est. headcount | Functions present |
|---|---|---|---|---|---|
| Amsterdam | Netherlands | ✅ | Office-first | ~2,500 | Full (Eng, Product, Data, Finance, Leadership) |
| London | UK | | Office-first | ~300 | Eng, Sales, CS |
| New York | USA | | Office-first | ~250 | Sales, Eng, CS |
| San Francisco | USA | | Office-first | ~150 | Eng, Sales |
| Singapore | Singapore | | Office-first | ~200 | Eng, Sales, Ops |
| Berlin | Germany | | Office-first | ~100 | Eng, Sales |
| Paris | France | | Office-first | ~100 | Sales, Ops |
| Sydney | Australia | | Office-first | ~80 | Sales, CS |
| Tokyo | Japan | | Office-first | ~80 | Sales |
| Chicago | USA | | Office-first | ~80 | Eng, Sales |
| Other (Madrid, Brussels, Milan, Mumbai, Bengaluru, HK, Toronto, São Paulo, Stockholm, Prague, Warsaw, Munich, Manchester, Dubai, Mexico City) | Various | | Office-first | ~400 total | Sales + CS hubs mostly |

**Notes on geo footprint:**
- Firmly office-first — no fully remote roles. This is a culture signal, not just policy.
- Engineering is heavily Amsterdam-concentrated. Non-AMS eng offices are satellites (London, SF, Singapore, Chicago primarily).
- 28+ office locations globally but engineering talent is mainly in Amsterdam.
- ❓ Exact per-city headcounts are estimates; Amsterdam dominates.

---

## 3. Headcount by job family

**Total estimated headcount:** ~4,500 (⚠️ LinkedIn/reported estimate)
**Last headcount check:** 2026-04-08
**Headcount note:** BitScale/ZoomInfo reports ~3,176 employees with ~1,398 engineers; careers page and other sources suggest ~4,500 active employees. Use ~4,500 as working estimate.
**Trend:** ➡️ Stable (after significant slowdown post-2023 growth peak)

### Breakdown by function

| Job Family | Est. Count | % of total | Confidence | Notes |
|---|---|---|---|---|
| Engineering | ~1,400 | ~31% | ⚠️ | Includes backend, infra, platform, security eng, terminal eng |
| Product | ~180 | ~4% | ⚠️ | |
| Design | ~80 | ~2% | ⚠️ | |
| Data | ~200 | ~4% | ⚠️ | Strong data team given payments analytics product |
| ML / AI | ~60 | ~1% | ❓ | Smaller dedicated ML team; AI applied to fraud/risk |
| DevRel | ~40 | ~1% | ⚠️ | Developer advocacy team (active engineering blog + docs) |
| Sales | ~600 | ~13% | ⚠️ | Large enterprise sales force globally |
| Marketing | ~150 | ~3% | ⚠️ | |
| Customer Success | ~400 | ~9% | ⚠️ | Merchant support + onboarding |
| Finance & Legal | ~250 | ~6% | ⚠️ | Financial services compliance headcount is high |
| HR & People | ~120 | ~3% | ⚠️ | |
| Operations | ~200 | ~4% | ⚠️ | BizOps, Strategy, Settlements |
| Executive (VP+) | ~100 | ~2% | ⚠️ | |
| **Total** | **~3,780** | **100%** | ⚠️ | Row sum lower than total estimate — gap likely in Ops/Support/unclassified |

### Key ratios

| Ratio | Value | Signal |
|---|---|---|
| Eng / Total | ~31% | High engineering density — infrastructure company, not sales-led |
| Data+ML / Eng | ~19% | Significant data investment; fraud + payments analytics is a product differentiator |
| Sales / Total | ~13% | Enterprise sales motion — definitely not pure PLG |
| PM / Eng | ~1:8 | Low — engineers have high product ownership; PM culture is lean |

---

## 4. Tech stack — with people & seniority

### Confirmed stack ✅

**Backend:** Java (primary), Kotlin (growing fast for terminal + backend services)
**Frontend:** Internal tooling; not a frontend-heavy company. React used in merchant dashboard
**Mobile:** Kotlin + Android (in-person payment terminals), iOS not primary
**Databases:** PostgreSQL (primary), MyBatis ORM, internal graph database engine (built on PostgreSQL)
**Data / ML:** Python (data pipelines + ML), internal ML platform for fraud/risk scoring
**Infrastructure / Cloud:** Primarily own data centers + cloud hybrid; Linux-based terminal infrastructure
**CI/CD & Tooling:** Internal tooling emphasized; "build in-house or use open source" philosophy
**Observability:** ❓ (not publicly documented; inferred: custom internal tooling)
**APIs:** REST, API-first architecture (all products are API-driven)

### Stack sources
- [x] Engineering blog: adyen.com/knowledge-hub + medium.com/adyen ✅
- [x] GitHub org: github.com/Adyen ✅ (examples, SDKs in Java/Kotlin/Python/Go/Node)
- [x] Job descriptions: careers.adyen.com/vacancies ✅
- [ ] StackShare: not verified

### People & seniority per technology

#### Java
- **Users:** ~700–900 people (core backend engineering)
- **Seniority mix:** ~5% junior | ~35% mid | ~45% senior | ~15% staff/principal
- **Signal:** Primary language for the core payments platform. Very mature Java codebase, in production since 2006. Top-heavy seniority — they don't hire junior Java devs often.
- **Confidence:** ✅ Confirmed (engineering blog, GitHub, JDs)

#### Kotlin
- **Users:** ~200–300 people (terminal engineering + growing backend)
- **Seniority mix:** ~10% junior | ~40% mid | ~40% senior | ~10% staff
- **Signal:** Active hiring push for Kotlin engineers (in-person payments terminals + backend services). One of the faster-growing skills in their open role list. Kotlin is becoming the preferred new-service language.
- **Confidence:** ✅ Confirmed (JDs at greenhouse.io/adyen + engineering blog)

#### Python
- **Users:** ~150–200 people (Data + ML + some Backend Services)
- **Seniority mix:** ~5% junior | ~40% mid | ~40% senior | ~15% staff
- **Signal:** Core for data pipelines and fraud/risk ML models. Not replacing Java as backend language.
- **Confidence:** ⚠️ Inferred from JDs + GitHub examples

#### Go
- **Users:** ~50–80 people
- **Seniority mix:** ~20% mid | ~60% senior | ~20% staff
- **Signal:** Used for select infrastructure/platform tooling. Smaller footprint than Java/Kotlin.
- **Confidence:** ⚠️ Inferred from GitHub org + JDs

#### PostgreSQL
- **Users:** ~200+ engineers interact with it
- **Seniority mix:** Skews senior/staff (core DB platform team is small but senior)
- **Signal:** Foundation of their graph DB and core data stores. Deep PostgreSQL expertise required. Not moving to NoSQL.
- **Confidence:** ✅ Confirmed (engineering blog explicitly mentions PostgreSQL + MyBatis)

### Inferred stack ⚠️ (from JDs, not confirmed)
- C/C++ — used in terminal firmware layer
- SQLite — embedded on payment terminals
- Kafka or similar — likely for payment event streaming (inferred from scale)
- Kubernetes — inferred from platform engineering JDs mentioning container orchestration

---

## 5. Org structure & seniority

### Engineering org model
- **Structure:** Functional teams organized by product domain (In-Person Payments, Online Payments, Platform, Data, Risk/Fraud, Financial Services)
- **Team organization:** Product-area squads, with a strong Platform layer underneath
- **IC:Manager ratio:** ❓ Not confirmed; estimated ~8:1 based on leadership map signals
- **Notable:** Adyen Tech Academy is run directly under the CTO — signals strong investment in internal talent development

### Seniority pyramid

**Shape:** Top-heavy (typical for a 19-year-old fintech with low attrition historically)

| Level | Approx % | Approx count (eng) | Confidence |
|---|---|---|---|
| Junior / Associate | ~5% | ~70 | ⚠️ |
| Mid-level | ~35% | ~490 | ⚠️ |
| Senior | ~45% | ~630 | ⚠️ |
| Staff / Principal | ~10% | ~140 | ⚠️ |
| Management (EM, Director) | ~5% | ~70 | ⚠️ |

### Leadership map

| Name | Title | Reports to | Tenure | LinkedIn | Notes |
|---|---|---|---|---|---|
| Tom Adams | CTO | Co-CEOs | Since Aug 2024 | linkedin.com/in/tomjadams | Came from Cash App (Block). New hire. |
| Pieter van der Does | Co-CEO | Board | Founder, since 2006 | — | |
| Ingo Uytdehaage | Co-CEO | Board | Long tenure | — | |
| Alexander Matthey | Former CTO | — | Departed 2024 | — | 10yr tenure; replaced by Tom Adams |
| ❓ | VP Engineering | CTO | | | Not publicly identified |
| ❓ | Head of Platform | VP Eng | | | Not publicly identified |

### Org signals & notes
- New CTO (Tom Adams, Aug 2024) from Cash App — watch for culture/technical direction shifts
- Historically built everything in-house; new CTO from US fintech may shift toward more modern tooling or cloud adoption
- Adyen Tech Academy (20+ internal courses) = strong internal mobility culture, engineers develop within rather than hiring senior externally
- Glassdoor mentions internal politics increasing as company scaled — potential tension point

---

## 6. Hiring intelligence

### Current hiring status
**Hiring right now?** Yes — selectively
**Open roles (as of 2026-04-08):** ~53 in Amsterdam; ~55 on LinkedIn globally
**Hiring velocity:** Stable to Decelerating (post-2023 growth slowdown; not in aggressive growth mode)
**ATS:** Greenhouse (confirmed: greenhouse.io/adyen)

### Active open roles (sample)

| Title | Department | Seniority | Location | Key tech | Signal | Posted |
|---|---|---|---|---|---|---|
| Staff Engineer, Monetization | Engineering | Staff | Amsterdam | Java, Kotlin | strategic_bet | Recent |
| Kotlin Engineer II | Engineering | Mid | Amsterdam + Chicago | Kotlin, Android, PostgreSQL | growth_hire | Recent |
| Senior Kotlin Engineer | Engineering | Senior | Amsterdam | Kotlin, Java | growth_hire | Recent |
| Software Engineer | Engineering | Mid–Senior | Multiple | Java, Kotlin | growth_hire | Recent |

### Hiring velocity metrics

| Metric | Value |
|---|---|
| Roles open today | ~53 (Amsterdam) / ~55 (global) |
| Hiring trend | Stable; not a hiring surge |
| ATS | Greenhouse |

### Hiring concentration

**Scaling:** In-person payments (Kotlin/terminal engineering), Platform, Monetization
**Frozen:** ❓ Marketing and junior engineering appear light in open roles
**Most in-demand skills:** Kotlin, Java, PostgreSQL
**Most in-demand seniority:** Mid to Senior (not aggressively hiring Staff+)
**Location of open roles:** Amsterdam-heavy; some US (Chicago, NY, SF)

### Interpretation
Adyen is in steady-state hiring, not a growth surge. They are investing in in-person/terminal payments (Kotlin push) and platform/monetization capabilities. New CTO (Tom Adams, Aug 2024) from Cash App may be behind the Kotlin and in-person payments emphasis — this is his background.

---

## 7. Talent flow — donors & recipients

### Where they recruit FROM (talent donors)

*(Limited public data — inferred from LinkedIn patterns and press)*

| Previous company | # recent hires | Function | Notes |
|---|---|---|---|
| ING / ABN AMRO / Rabobank | Several | Eng, Finance | Dutch banking talent pipeline |
| Booking.com | Several | Eng, Data | Amsterdam-based tech pool |
| Mollie | Several | Eng | Dutch fintech peer |
| Worldline / Worldpay | A few | Payments domain | Industry-specific recruits |
| Google / Meta (AMS offices) | A few | Eng, Data | Strong brand attracting FAANG |
| TU Delft / TU Eindhoven alumni | Regular stream | Eng | Core university pipeline for Amsterdam |

**Donor pattern:** Amsterdam-centric talent pool. Strong draw from Dutch banking, local fintech peers, and Booking.com. Less of a FAANG-drain company and more of a destination for Dutch tech talent.

### Where their people GO (talent recipients)

| Destination company | # who went there | Function | Notes |
|---|---|---|---|
| Stripe | Multiple (confirmed Glassdoor mentions) | Eng, Sales | Comp gap drives departures — Stripe pays significantly more |
| Mollie | Several | Eng | Direct Dutch fintech competitor |
| Bunq | A few | Eng | Amsterdam-based neobank |
| Early-stage Dutch startups | Several | Eng, Product | Entrepreneurial exits |
| Other fintechs (globally) | Several | Eng, Sales | Domain expertise is portable |

**Recipient pattern:** Stripe is the #1 named destination in Glassdoor reviews. Comp gap is a real factor. Local Dutch fintech ecosystem (Mollie, Bunq, Checkout.com NL) also absorbs leavers.

### Net talent flow summary

```
→ Gaining most from: Dutch banks, Booking.com, Mollie, TU Delft graduates
← Losing most to:   Stripe, Mollie, early-stage NL startups

Net position: Neutral to slight talent feeder (to Stripe in particular)
```

**Strategic interpretation:**
Adyen is a strong destination for Dutch tech talent at mid/senior level — the company brand and mission carry weight. However, Stripe is aggressively taking their talent due to a significant compensation gap. Anyone considering Adyen as a talent source should know: the comp delta is a real motivator, and many Adyen engineers are receptive to conversations framed around compensation + equity upside.

---

## 8. Culture & employer brand

| Signal | Value | Source | Date |
|---|---|---|---|
| Glassdoor rating | 3.8 / 5 | Glassdoor (890 reviews) | 2026-04 |
| % recommend to friend | 73% | Glassdoor | 2026-04 |
| Work-life balance | 4.1 / 5 | Glassdoor | 2026-04 |
| Culture & values | 3.8 / 5 | Glassdoor | 2026-04 |
| Career opportunities | 3.3 / 5 | Glassdoor | 2026-04 |
| Comp & benefits | 3.6 / 5 (declining) | Glassdoor | 2026-04 |
| Comp vs market (NL) | Below market | Levels.fyi | 2026-04 |
| Comp vs market (US) | Significantly below Stripe | Glassdoor, Levels.fyi | 2026-04 |
| Remote reality | No remote; office-first enforced | JDs | 2026-04 |

**Compensation data (Levels.fyi):**
- Software Engineer (NL): €80–121K total comp
- Senior Software Engineer (NL): €94–147K total comp
- Software Engineer (US): $160–228K total comp
- Note: Stripe pays reported 4x for equivalent roles (Glassdoor)

### What employees say

**Top positives (from reviews):**
1. Great colleagues — "genuine, down-to-earth people" consistently mentioned
2. Interesting technical challenges — payments infrastructure at global scale
3. Strong work-life balance (4.1/5 is notably high for fintech)

**Top negatives (from reviews):**
1. Compensation significantly below market — often compared unfavorably to Stripe
2. Internal politics increased as company scaled — less startup feel
3. Career progression unclear — 3.3/5 for career opportunities is low; limited mobility for some roles

---

## Intelligence scores

| Dimension | Score (0–10) | Rationale |
|---|---|---|
| Talent source score | **7/10** | Strong Java/Kotlin engineers with payments domain expertise, ~2–5yr typical tenures, comp is below market so people are reachable. Top-heavy org means senior/staff ICs exist and may be looking. |
| Talent competitor score | **6/10** | Competes for Java/Kotlin backend engineers, data engineers in Amsterdam. Less competition outside NL. Below-market comp means they lose head-to-head against well-funded competitors. |

---

## Strategic summary

### What are they building right now?
Based on hiring: Adyen is doubling down on **in-person payments** (Kotlin/terminal engineering push), **platform/infrastructure** hardening, and **monetization** (new Staff Eng, Monetization role is a signal). New CTO Tom Adams (Cash App background) brings in-person payments DNA — this likely influences the Kotlin and terminal investment direction.

### Tech strategy signal
Java core isn't going anywhere (19-year production system). Kotlin is the new-layer language — for terminal software and greenfield services. Python growing in data/ML for fraud and analytics. The "build in-house" philosophy is deeply embedded — this creates a very specific engineer profile: people who like ownership, low abstraction, and building infra from scratch.

### Talent opportunity / risk

**As a talent source:**
Senior Java/Kotlin engineers at Adyen are attractive candidates. The comp gap (vs Stripe, scale-ups, FAANG) means many are quietly in-market or open to conversations. The office-first policy means Amsterdam-based candidates only (unless targeting London/SF offices). The top-heavy seniority pyramid means there is a real pool of senior/staff ICs with 3–7yr tenures.

**As a talent competitor:**
Competing with Adyen for Amsterdam Java/Kotlin engineers is real but winnable — they can't match market comp. Outside Amsterdam, competition is lower. They don't compete meaningfully for remote or full-stack product engineers.

**Key risks / watch items:**
- New CTO (Tom Adams) — culture and tech direction may shift over 2025–2026; worth tracking what he changes
- Comp gap to Stripe is a known pain point — any offer needs to be comp-competitive
- Office-first is non-negotiable — don't reach out to Adyen engineers unless your role also has an Amsterdam (or matching) office

---

## Research log

| Date | What was researched | Key findings | Next steps |
|---|---|---|---|
| 2026-04-08 | Full initial profile | Public company, ~4,500 employees, Java/Kotlin stack, new CTO Aug 2024, below-market comp, office-first, 53 open Amsterdam roles | Validate headcount via LinkedIn People filter; identify specific Staff+ leavers on LinkedIn |

## Raw notes & links

- Careers page: https://careers.adyen.com
- Engineering blog: https://medium.com/adyen + https://www.adyen.com/knowledge-hub
- GitHub: https://github.com/Adyen
- Glassdoor: https://www.glassdoor.com/Reviews/Adyen-Reviews-E684495.htm
- Levels.fyi NL: https://www.levels.fyi/companies/adyen/salaries/software-engineer
- Greenhouse jobs: https://job-boards.greenhouse.io/adyen
- CTO announcement: https://thefinancialtechnologyreport.com/adyen-appoints-tom-adams-as-chief-technology-officer-to-lead-global-innovation/
- Adyen Tech Academy: https://www.adyen.com/knowledge-hub/taking-onboarding-and-upskilling-to-the-next-level
