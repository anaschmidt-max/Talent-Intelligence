# Company: Uber Amsterdam

**Domain:** uber.com
**LinkedIn:** linkedin.com/company/uber-com
**GitHub:** github.com/uber-go / github.com/uber
**Last updated:** 2026-04-08
**Research status:** 🟢 Complete

> **Note:** This profile focuses on the Amsterdam engineering office specifically, not Uber globally. Global headcount ~32,000. Amsterdam is Uber's largest engineering office outside the US.

---

## 1. Company identity

| Field | Value | Confidence |
|---|---|---|
| Legal name | Uber Technologies, Inc. | ✅ |
| Year founded | 2009 | ✅ |
| Headquarters (global) | San Francisco, CA, USA | ✅ |
| Amsterdam office opened | ~2015–2016 | ✅ |
| Company type | B2C Product / Marketplace / Fintech (Payments infra) | ✅ |
| Stage | Public (NYSE: UBER) | ✅ |
| Market cap | ~$170B (2026) | ⚠️ |
| Revenue | ~$43B (2024) | ✅ reported |

**Amsterdam focus:** The Amsterdam office is Uber's European engineering HQ and the largest engineering hub outside the US. It owns globally significant product areas — not a satellite office doing localisation work.

---

## 2. Office locations (Amsterdam focus)

| City | Country | HQ? | Remote policy | Est. headcount | Functions present |
|---|---|---|---|---|---|
| Amsterdam | Netherlands | No (global HQ is SF) | Hybrid (≥50% in-office) | ~1,100+ total | Engineering, Product, Design, Data Science, Operations, Sales |

**Amsterdam office:** Tripolis Park, Burgerweeshuispad 301, Amsterdam. Modern campus-style office.

**Engineering headcount Amsterdam estimate:**
- Total Amsterdam: ~1,100+ confirmed (careers page)
- Engineering subset: ⚠️ Estimated ~400–600 (based on historical growth trajectory: 25 engineers in 2016 → ~130 in 2018; extrapolating ~3x further growth and cross-functional composition)
- 20+ nationalities in the office

**Notes on footprint:**
- Hybrid enforced — "at least half of work time in office." Not remote-friendly. Amsterdam-based candidates only.
- All major functions present: Eng + PM + Design + Data co-located. Not just an eng satellite.

---

## 3. Headcount by job family (Amsterdam office)

**Total Amsterdam headcount:** ~1,100+ ✅ (careers page confirmed)
**Engineering estimate:** ~400–600 ⚠️
**Last headcount check:** 2026-04-08
**Trend:** ➡️ Stable (Uber globally had layoffs in 2023; Amsterdam appears stable post-restructuring)

### Breakdown by function (Amsterdam, estimated)

| Job Family | Est. Count | % of total | Confidence | Notes |
|---|---|---|---|---|
| Engineering | ~400–600 | ~40–50% | ⚠️ | Dominant function; cross-platform teams |
| Product | ~80–120 | ~8–10% | ⚠️ | Local PM teams confirmed |
| Design | ~40–60 | ~4–5% | ⚠️ | Local design confirmed |
| Data Science | ~60–100 | ~5–8% | ⚠️ | Co-located with eng teams |
| Operations | ~100–150 | ~10–12% | ⚠️ | Rides, Delivery, Eats ops |
| Sales & Marketing | ~80–120 | ~7–10% | ⚠️ | EMEA commercial |
| Finance & Legal | ~40–60 | ~3–5% | ⚠️ | |
| HR & People | ~30–50 | ~3% | ⚠️ | |
| **Total** | **~1,100+** | 100% | ⚠️ | Engineering-heavy vs typical co. |

### Key ratios (engineering lens)

| Ratio | Value | Signal |
|---|---|---|
| Eng / Total (Amsterdam) | ~40–50% | Very high density — product engineering office, not ops centre |
| Amsterdam Eng / Global Uber Eng | ~10–15% | Significant slice of global eng org |

---

## 4. Tech stack — with people & seniority

### Confirmed stack ✅

**Backend:** Go (primary for new services ✅), Java (legacy + some teams), Python (ML/Data/Platform)
**Frontend:** TypeScript, React, GraphQL, Node.js, CSS-in-JS
**Mobile:** Swift + some Obj-C (iOS), Java + Kotlin (Android)
**Databases:** ❓ At Uber scale: Cassandra, MySQL, PostgreSQL, Redis (inferred from global Uber eng blog)
**Data / ML:** Python, Apache Spark (confirmed JD: "Backend with Spark — Maps"), ML Platform team in Amsterdam
**Infrastructure:** Own data centres + multi-cloud; Kubernetes (inferred from scale)
**CI/CD:** Internal tooling; Mobile Tooling Platform team is Amsterdam-based (builds Uber's global mobile dev tooling)
**Observability:** ❓ Internal Uber tooling at scale

### Stack sources
- [x] Uber Engineering blog: eng.uber.com (global)
- [x] Amsterdam-specific careers page: careersinfo.uber.com/amsterdam-engineering
- [x] Job descriptions: uber.com/careers (Amsterdam filter)
- [x] The Pragmatic Engineer: blog.pragmaticengineer.com/working-at-uber-in-amsterdam

### Amsterdam team ownership — key product domains

| Team | What they own | Tech signal |
|---|---|---|
| Earner Financials | Driver/courier payment systems globally | Go, Java, payments infra |
| Payments (Rider) | Global rider payment integrations | Go, Java, payments |
| Developer Platform | Internal dev tooling + APIs for Uber engineers | Go, Python, TypeScript |
| Mobile Tooling Platform | Mobile dev tooling for all of Uber's mobile engineers | Swift, Kotlin, tooling |
| AdTech | Advertising products (Uber Eats, Rides) | Go, Python, ML |
| Maps | Mapping + routing backend | Go, Java, Spark |
| ML Platform | ML infra + tooling globally | Python, Go |
| Capacity & Efficiency | Marketplace compute distribution globally | Go, distributed systems |

**Key signal:** Amsterdam engineers own globally critical, high-scale infrastructure — Payments, Driver Financials, Maps, ML infra. This is not a localisation team. Engineers here work on systems that process millions of transactions daily.

### People & seniority per technology

#### Go
- **Users:** ~150–250 engineers (core backend across most teams)
- **Seniority mix:** ~0% junior | ~20% mid | ~55% senior | ~25% staff/principal
- **Signal:** Primary new-service language at Uber globally. Amsterdam teams are Go-heavy. Strong hiring for senior+ Go engineers.
- **Confidence:** ✅ Confirmed (Uber eng blog + JDs)

#### Python
- **Users:** ~80–120 engineers (ML Platform, AdTech, Data, Maps)
- **Seniority mix:** ~5% junior | ~25% mid | ~50% senior | ~20% staff
- **Signal:** Python Platform is a dedicated Amsterdam team (Senior SWE Python Platform role open). ML-heavy use.
- **Confidence:** ✅ Confirmed (open JD: Senior SWE Python Platform Amsterdam)

#### TypeScript / React
- **Users:** ~60–100 engineers (frontend + ML Platform frontend)
- **Seniority mix:** ~5% junior | ~30% mid | ~50% senior | ~15% staff
- **Signal:** Frontend teams present in Amsterdam. SWE II Frontend ML Platform role open.
- **Confidence:** ✅ Confirmed (JDs)

#### Java
- **Users:** ~80–150 engineers (legacy services, mobile Android)
- **Seniority mix:** ~0% junior | ~25% mid | ~55% senior | ~20% staff
- **Signal:** Older Uber services and Android. Kotlin adoption growing on mobile.
- **Confidence:** ⚠️ Inferred from global Uber stack + Amsterdam tenure

#### Apache Spark
- **Users:** ~30–50 engineers (Maps, Data)
- **Seniority mix:** ~0% junior | ~20% mid | ~50% senior | ~30% staff
- **Signal:** Confirmed in Amsterdam JD (Senior SWE Backend with Spark — Maps). Niche but specific to data-heavy teams.
- **Confidence:** ✅ Confirmed (JD)

### Inferred stack ⚠️
- Kafka (at Uber's event scale, near-certain)
- Cassandra / ScyllaDB (Uber's global DB of choice for high-scale services)
- Kubernetes + Mesos (Uber has own orchestration tooling but K8s dominant now)

---

## 5. Org structure & seniority

### Engineering org model
- **Structure:** Functional teams owning global product domains (not geo-specific squads)
- **Team organization:** By product area / platform layer — Amsterdam teams own globally-scoped domains (Payments, Earner Financials, Maps, etc.)
- **IC:Manager ratio:** ⚠️ Estimated ~8:1 (Uber historically values IC-heavy orgs)
- **Levels:** L3 (SWE I) → L4 (SWE II) → L5 (Senior) → L6 (Staff) → L7 (Senior Staff) → L8 (Principal)

### Seniority pyramid

**Shape:** Top-heavy (Amsterdam is a mature office; Uber's 2023 layoffs removed many junior/mid; remaining team skews senior)

| Level | Approx % | Confidence |
|---|---|---|
| Junior / Associate (L3) | ~5% | ⚠️ |
| Mid-level (L4) | ~20% | ⚠️ |
| Senior (L5) | ~50% | ⚠️ |
| Staff / Senior Staff (L6–L7) | ~20% | ⚠️ |
| Principal+ / Management | ~5% | ⚠️ |

### Leadership map (Amsterdam)

| Name | Title | Notes |
|---|---|---|
| ❓ | Engineering Director / VP (Amsterdam) | Not publicly confirmed |
| ❓ | Head of Earner Financials | Not publicly confirmed |
| ❓ | Head of Developer Platform | Not publicly confirmed |

**Note:** Amsterdam engineering leadership is not prominently named in public sources. The Pragmatic Engineer series (2019–2021) profiled Amsterdam EMs but those may have since moved.

### Org signals
- Amsterdam owns globally critical domains — engineers here influence product used by 150M+ users
- Post-2023 Uber layoffs: the Amsterdam office was retained and appears stable; the domains they own (Payments, Maps, ML infra) were not deprioritized
- Uber has a strong internal mobility culture — Amsterdam engineers can move to SF, NYC, or other hubs

---

## 6. Hiring intelligence

### Current hiring status
**Hiring right now?** Yes — selectively
**Open roles in Amsterdam (as of 2026-04-08):** ~10–20 engineering roles confirmed
**Hiring velocity:** Stable / selective (not a surge; post-layoff steady state)
**ATS:** Uber's own careers portal (uber.com/careers) — no Greenhouse/Lever

### Active open roles (confirmed)

| Title | Dept | Seniority | Location | Key tech | Signal |
|---|---|---|---|---|---|
| Staff SWE, Fullstack — Capacity & Efficiency | Eng | Staff (L6) | Amsterdam | Go, TypeScript | strategic_bet |
| Senior SWE — AdTech | Eng | Senior (L5) | Amsterdam | Go, Python, ML | growth_hire |
| Senior SWE — Python Platform | Eng | Senior (L5) | Amsterdam | Python | growth_hire |
| Senior SWE — Backend with Spark, Maps | Eng | Senior (L5) | Amsterdam | Go, Java, Spark | growth_hire |
| SWE II — Frontend, ML Platform | Eng | Mid (L4) | Amsterdam | TypeScript, React | growth_hire |
| Senior Staff Engineer — Earner Financials | Eng | Senior Staff (L7) | Amsterdam | Go, Java, payments | strategic_bet |

### Hiring concentration

**Scaling:** ML Platform, AdTech, Earner Financials (payments domain), Python Platform
**Frozen:** ❓ No obvious frozen areas; junior/entry-level largely absent
**Most in-demand skills:** Go, Python, Spark, TypeScript
**Most in-demand seniority:** Senior (L5) and Staff+ (L6–L7) — almost no junior hiring
**Location:** Amsterdam only (hybrid enforced)

### Interpretation
Uber Amsterdam is selectively hiring for senior and staff engineers in technically deep domains. The L7 Earner Financials role and L6 Capacity & Efficiency role signal investment in payment infrastructure and marketplace efficiency. ML Platform and AdTech openings suggest AI/ML tooling investment. No junior/L3 hiring visible — this is a senior+ office.

---

## 7. Talent flow — donors & recipients

### Where they recruit FROM (talent donors)

| Previous company | Function | Notes |
|---|---|---|
| Booking.com | Eng (backend, data) | Dominant Amsterdam tech employer; Go/Java overlap; natural pipeline |
| Adyen | Eng (payments) | Payments domain overlap — Earner Financials/Rider Payments teams directly relevant |
| TomTom | Eng (Maps) | Maps team in Amsterdam; TomTom alumni have direct domain relevance |
| Philips / ASML | Eng (platform, infra) | Dutch engineering talent from enterprise; scale systems background |
| Google Amsterdam | Eng, Data | FAANG-to-FAANG lateral; Google has Amsterdam office |
| TU Delft / TU/e / UvA graduates | Eng | Top Dutch university pipeline; CS/maths graduates |
| Other EU scale-ups | Eng, Product | Mollie, Takeaway/JustEat, Catawiki as feeder companies |

**Donor pattern:** Amsterdam's tech ecosystem is relatively small — Booking.com is the #1 feeder for backend/data talent. TomTom for maps. Adyen for payments. Uber is at the top of NL comp ladder which means they can pull from any Amsterdam employer.

### Where their people GO (talent recipients)

| Destination | Function | Notes |
|---|---|---|
| Other FAANG/hyperscalers (Google, Meta, Amazon) | Eng | Natural lateral at equivalent comp |
| Stripe | Eng (payments) | Direct domain overlap; Stripe Amsterdam office competes for same profiles |
| Startups / founding teams | Eng, Product | Staff+ engineers leave to found or join early-stage |
| Uber SF / NYC | Eng | Internal mobility to US hubs |
| Booking.com | Eng | Reverse flow — Uber → Booking also happens |

**Recipient pattern:** Uber Amsterdam is at the top of NL comp; people primarily leave for FAANG peers (Stripe, Google, Meta) or to found startups. Retention risk is concentrated at staff+ level (equity vesting cycles, startup pull).

### Net talent flow summary

```
→ Gaining most from: Booking.com, Adyen, TomTom, EU scale-ups
← Losing most to:   Stripe, Google, Meta (Amsterdam), early-stage startups

Net position: Strong talent magnet in Amsterdam — highest-paying NL employer
```

**Strategic interpretation:**
Uber is the highest-paying tech employer in Amsterdam (confirmed: Levels.fyi shows Uber as #1 TC in AMS). This means they win most comp-based head-to-heads in the city. The engineers they lose are typically chasing equity upside (startups) or domain change (FAANG). Uber Amsterdam engineers are harder to recruit on comp alone — you need to offer something else: ownership, mission, equity, or a better domain.

---

## 8. Culture & employer brand

| Signal | Value | Source | Date |
|---|---|---|---|
| Glassdoor rating (Amsterdam) | 4.1 / 5 | Glassdoor (305 Amsterdam reviews) | 2026-04 |
| % recommend to friend (Amsterdam) | 66% | Glassdoor | 2026-04 |
| WLB (Amsterdam) | 3.4 / 5 | Glassdoor | 2026-04 |
| Culture & values (Amsterdam) | 3.3 / 5 | Glassdoor | 2026-04 |
| Career opportunities (Amsterdam) | 3.1 / 5 | Glassdoor | 2026-04 |
| Comp & benefits (Amsterdam) | 3.4 / 5 | Glassdoor | 2026-04 |
| Comp vs market (NL) | **Above market** — highest paying in Amsterdam | Levels.fyi | 2026-04 |
| Remote reality | Hybrid — ≥50% in-office enforced | JDs | 2026-04 |

**Compensation data (Levels.fyi, Netherlands):**
- SWE I (L3): €68–91K total comp
- SWE II (L4): €119–181K total comp (median ~€158K)
- Senior SWE (L5): €167–230K total comp (median ~€197K)
- **Uber is the #1 highest-paying employer for software engineers in Amsterdam**

**Note on Amsterdam vs global Glassdoor:** Amsterdam scores notably lower than Uber global on WLB (3.4 vs higher global avg), culture (3.3), career progression (3.1), and comp (3.4 — despite being highest TC in city). This paradox suggests: engineers know they're well-paid but feel the trade-offs in pressure, culture quality, and career visibility from a non-HQ office.

### What employees say

**Top positives:**
1. Technically challenging work at massive scale — global product impact from Amsterdam
2. Strong peer calibration — smart colleagues across 20+ nationalities
3. Compensation is top-of-market for Amsterdam

**Top negatives:**
1. WLB pressure — Amsterdam rates WLB 3.4/5 (significantly below global avg)
2. Career progression unclear for non-HQ office — L6+ promotions can be harder without SF visibility
3. Culture scores lower than expected (3.3/5) — post-layoff cultural shift, org changes

---

## Intelligence scores

| Dimension | Score (0–10) | Rationale |
|---|---|---|
| Talent source score | **8/10** | Top-of-market comp means engineers are well-paid but also face pressure — WLB and career ceiling frustrations make senior ICs moveable if the right role is pitched. Strong Go/Python/payments domain. Staff+ engineers at Earner Financials/Payments are a prime target. |
| Talent competitor score | **8/10** | Direct competitor for Amsterdam senior backend/Go engineers, payments domain engineers, ML Platform talent. Highest comp in city means they win most head-to-heads on TC alone. Hard to beat on comp; need to compete on ownership, equity, mission. |

---

## Strategic summary

### What are they building right now?
Amsterdam teams are investing in: (1) **payment infrastructure** at scale (Earner Financials L7 hire, Rider Payments team), (2) **ML Platform** tooling for Uber's global ML engineers, (3) **AdTech** (Uber Eats advertising is a growing revenue stream), (4) **Maps backend** (Spark-based routing systems). These are globally critical, technically deep domains.

### Tech strategy signal
Go is the dominant new-service language. Python growing for ML/data. The ML Platform and Python Platform teams in Amsterdam suggests Uber is centralising AI/ML infrastructure development in this office — interesting investment signal. AdTech hiring aligns with Uber's push to monetise its audience data.

### Talent opportunity / risk

**As a talent source:**
Senior (L5) and Staff (L6) Go and Python engineers in the **Payments**, **Earner Financials**, and **ML Platform** teams are the top targets. These engineers work on globally-scaled systems, are well-paid, but face real career ceiling frustrations (3.1/5 career score, non-HQ visibility problem). The pitch needs to be: more ownership, more equity upside, or a technical leadership opportunity that Amsterdam visibility limits at Uber.

**As a talent competitor:**
Uber Amsterdam directly competes for the same Amsterdam senior backend pool as Adyen, Booking.com, Stripe, and Mollie. With the highest TC in the city, they win most comp battles. To compete: lead with equity, ownership, technical scope, or stage excitement (growth-stage vs. late-stage public company).

**Key risks / watch items:**
- Hybrid enforcement (≥50% in-office) — any role that's more flexible can use this as a wedge
- Career ceiling signal (3.1/5) — engineers who feel stuck due to non-HQ location are reachable
- Post-2023 layoffs created trust gap — some engineers still processing cultural shift
- Staff+ (L6–L7) engineers are the hardest to move on comp; need equity/ownership story

---

## Research log

| Date | What was researched | Key findings | Next steps |
|---|---|---|---|
| 2026-04-08 | Full initial profile | ~1,100+ Amsterdam, engineering-heavy, Go/Python primary, #1 NL comp, owns Payments + Maps + ML Platform globally, WLB & career scores low vs global avg, selectively hiring L5–L7 | Validate eng headcount via LinkedIn People filter; identify L6+ leavers 2024–2025; check Blind for senior eng sentiment |

## Raw notes & links

- Careers (Amsterdam): https://jobs.uber.com/en/locations/amsterdam/
- Careers info page: https://careersinfo.uber.com/amsterdam-engineering
- Uber Engineering blog: https://eng.uber.com
- Amsterdam engineering blog tag: https://eng.uber.com/locations/amsterdam/
- The Pragmatic Engineer — Working at Uber Amsterdam: https://blog.pragmaticengineer.com/working-at-uber-in-amsterdam/
- Glassdoor Amsterdam reviews: https://www.glassdoor.com/Reviews/Uber-Amsterdam-Reviews-EI_IE575263.0,4_IL.5,14_IM1112.htm
- Levels.fyi NL: https://www.levels.fyi/companies/uber/salaries/software-engineer/locations/netherlands
- Open roles Amsterdam: https://www.uber.com/us/en/careers/locations/amsterdam/
