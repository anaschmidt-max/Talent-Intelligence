# Company: Just Eat Takeaway

**Domain:** justeattakeaway.com
**LinkedIn:** linkedin.com/company/just-eat-takeaway-com
**GitHub:** github.com/justeat
**Last updated:** 2026-04-08
**Research status:** 🟢 Complete

---

## 1. Company identity

| Field | Value | Confidence |
|---|---|---|
| Legal name | Just Eat Takeaway.com N.V. | ✅ |
| Year founded | 2000 (Takeaway.com); merged with Just Eat 2020 | ✅ |
| Headquarters | Amsterdam, Netherlands | ✅ |
| Company type | Marketplace / Food Delivery | ✅ |
| Stage | **Acquired / Private** (sold to Prosus ~$4.3B, 2025) | ✅ |
| Previous stage | Public (Euronext Amsterdam + LSE) | ✅ |
| Grubhub (US) | Sold to Wonder for $650M, January 2025 | ✅ |
| Revenue | ~€5B+ GMV (Europe + UK focus post-Grubhub sale) | ⚠️ |

**Key strategic context:** JET went through major restructuring in 2024–2025:
1. Sold Grubhub (US) to Wonder for $650M (January 2025) — a massive write-down from the $7.3B paid in 2021
2. Acquired by Prosus for ~$4.3B → became a **private company**
3. Post-acquisition: focused purely on Europe + UK/Ireland, cutting global complexity

This creates significant **talent uncertainty** — acquisition = org restructuring, culture shift, and potential further layoffs. Engineers are watching.

---

## 2. Office locations

| City | Country | HQ? | Remote policy | Est. headcount | Functions present |
|---|---|---|---|---|---|
| Amsterdam | Netherlands | ✅ | Hybrid | ~800–1,200 | Eng, Product, Design, Data, Finance, Ops, Leadership |
| London | UK | No | Hybrid | ~600–800 | Eng, Product, Sales, Marketing (Just Eat UK) |
| Cologne | Germany | No | Hybrid | ~200–400 | Eng, Ops (Lieferando) |
| Other EU | Various | No | Hybrid | ~1,000+ | Country ops, sales, CS |

**Notes:**
- Amsterdam is the global HQ and tech/product hub
- Prosus acquisition may result in Amsterdam office consolidation (Prosus is also Amsterdam-based — potential overlap)
- ~2,000+ tech & product staff globally confirmed (careers page)
- Total global headcount ~12,000 (September 2025, post-Grubhub sale)

---

## 3. Headcount by job family

**Total global headcount:** ~12,000 ✅ (post-Grubhub sale, September 2025)
**Tech & Product globally:** 2,000+ ✅ (careers page)
**Amsterdam tech estimate:** ~400–600 ⚠️
**Last headcount check:** 2026-04-08
**Trend:** 📉 Contracting (multiple layoff rounds 2023–2025; Prosus acquisition adds more uncertainty)

### Key ratios

| Ratio | Value | Signal |
|---|---|---|
| Tech / Total | ~17% | Marketplace ops-heavy — lower eng density than pure SaaS |
| Amsterdam open roles | ~47 total (all functions) | Selective; not in growth mode |

---

## 4. Tech stack — with people & seniority

### Confirmed stack ✅

**Backend:** Go (primary — confirmed in JDs and engineering blog), Java/Kotlin/Spring (legacy + some teams), Python (data/ML)
**Frontend:** JavaScript/TypeScript, React (inferred from JDs)
**Mobile:** iOS (Swift), Android (Java/Kotlin)
**Databases:** MySQL (confirmed in stack listings), PostgreSQL, Redis
**Infrastructure:** Kubernetes, Docker, event-driven microservices architecture ✅
**Data / ML:** Python, data pipelines; ML applied to recommendations + logistics
**CI/CD:** Internal tooling
**Observability:** ❓ Not confirmed

### Stack sources
- [x] Engineering blog: tech.justeattakeaway.com ✅
- [x] Job descriptions: careers.justeattakeaway.com ✅ (Go, Python Platform, Kubernetes confirmed)
- [x] GitHub: github.com/justeat (public repos in Go, C#, Swift)

### People & seniority per technology

#### Go
- **Users:** ~150–250 engineers (primary new-service language)
- **Seniority mix:** ~5% junior | ~30% mid | ~50% senior | ~15% staff
- **Signal:** Go is confirmed in multiple Amsterdam JDs (Software Engineer Golang, Senior Platform Engineer). Primary language for new backend services.
- **Confidence:** ✅ Confirmed (JDs + engineering blog)

#### Java / Kotlin / Spring
- **Users:** ~100–200 engineers (legacy services)
- **Seniority mix:** ~5% junior | ~35% mid | ~45% senior | ~15% staff
- **Signal:** Older parts of the platform. Kotlin adoption growing.
- **Confidence:** ⚠️ Inferred from JDs + GitHub

#### Python
- **Users:** ~60–100 engineers (data, ML, platform)
- **Seniority mix:** ~0% junior | ~30% mid | ~50% senior | ~20% staff
- **Signal:** Data engineering and ML (recommendations, ETA, logistics optimisation). Python Platform role open.
- **Confidence:** ⚠️ Inferred from JDs

#### Kubernetes / Docker
- **Users:** ~80–120 engineers (platform/infra layer)
- **Signal:** Senior Platform Engineer role explicitly requires Go + Kubernetes + Docker + event-driven microservices. Modern infra stack.
- **Confidence:** ✅ Confirmed (JD)

### Inferred stack ⚠️
- Kafka (event-driven architecture at food delivery scale)
- Elasticsearch (search + restaurant discovery)
- gRPC (service-to-service at microservices scale)

---

## 5. Org structure & seniority

### Engineering org model
- **Structure:** Squad-based, organized by product domain (Consumer, Restaurant/Partner, Logistics, Platform)
- **Team organization:** Product domain squads + horizontal platform layer
- **IC:Manager ratio:** ⚠️ ~6–8:1 estimated

### Seniority pyramid

**Shape:** Balanced to slightly top-heavy (post-layoffs removed junior/mid layers)

| Level | Approx % | Confidence |
|---|---|---|
| Junior / Associate | ~10% | ⚠️ |
| Mid-level | ~30% | ⚠️ |
| Senior | ~45% | ⚠️ |
| Staff / Principal | ~10% | ⚠️ |
| Management / Executive | ~5% | ⚠️ |

### Leadership map

| Name | Title | Notes |
|---|---|---|
| ❓ | CEO | Post-Prosus acquisition; prior CEO Jitse Groen (founder) stepped back |
| ❓ | CTO | Not publicly confirmed post-acquisition |
| ❓ | VP Engineering (Amsterdam) | Not publicly confirmed |

**Note:** Prosus acquisition (2025) means leadership team is in flux. Founder Jitse Groen built the company; acquisition dynamics may have changed exec layer significantly.

### Org signals
- Prosus acquisition = private company → less pressure for public market performance, but also less transparency and potential for deeper restructuring
- Multiple layoff rounds (2023 headcount cuts + November 2024 layoffs cited on Glassdoor) = trust erosion in eng org
- Early Careers Program still active (18-month rotation program) = still investing in junior pipeline despite layoffs

---

## 6. Hiring intelligence

### Current hiring status
**Hiring right now?** Selectively
**Open roles Amsterdam (as of 2026-04-08):** ~47 total (all functions); engineering subset ~15–25
**Hiring velocity:** Decelerating / stable (not in growth mode post-acquisition)
**ATS:** Own careers portal (careers.justeattakeaway.com)

### Active open roles (sample)

| Title | Dept | Seniority | Location | Key tech | Signal |
|---|---|---|---|---|---|
| Software Engineer — Golang | Eng | Mid–Senior | Amsterdam / London | Go | growth_hire |
| Senior Platform Engineer | Eng | Senior | Amsterdam | Go, Kubernetes, Docker | growth_hire |
| Senior Software Engineer — Python Platform | Eng | Senior | Amsterdam | Python | growth_hire |
| Software Engineer — Backend | Eng | Mid | Amsterdam | Go, Java | backfill |
| Early Careers Software Engineering | Eng | Junior | Amsterdam | Rotation program | pipeline |

### Hiring concentration

**Scaling:** Platform engineering, Go backend, Python data/platform
**Frozen:** ❓ Likely senior leadership and commercial roles frozen post-acquisition
**Most in-demand skills:** Go, Kubernetes, Python
**Most in-demand seniority:** Mid to Senior
**Location:** Amsterdam + London primarily

### Interpretation
JET is in maintenance hiring mode — backfilling and selectively growing platform/infra. The Prosus acquisition means strategic direction is still being set; expect hiring to remain subdued until the new ownership finalises its roadmap.

---

## 7. Talent flow — donors & recipients

### Where they recruit FROM

| Previous company | Function | Notes |
|---|---|---|
| Booking.com | Eng, Data | Amsterdam's dominant tech employer; Go/Python overlap |
| TomTom | Eng (maps, logistics) | Logistics/routing domain alignment |
| Takeaway.com alumni | Eng | Pre-merger talent; long tenure |
| Dutch universities (TU Delft, UvA, TU/e) | Eng | Graduate pipeline |
| Uber Amsterdam | Eng | Lateral move for engineers wanting less pressure / different domain |
| Other EU food-tech (Deliveroo, Glovo) | Eng, Product | Domain expertise hires |

**Donor pattern:** Amsterdam-centric. Booking.com is the primary feeder. Some domain-specific hires from logistics/maps (TomTom, HERE). Post-acquisition, inbound talent brand has likely weakened.

### Where their people GO

| Destination | Function | Notes |
|---|---|---|
| Uber Amsterdam | Eng | Comp upgrade + more prestigious brand |
| Booking.com | Eng, Product | Natural Amsterdam lateral |
| Adyen | Eng | Fintech pivot for payments-adjacent engineers |
| Early-stage NL startups | Eng, Product | Equity seekers |
| Prosus portfolio companies | Eng | Internal mobility via new parent |

**Recipient pattern:** Engineers leave for comp (Uber, Adyen pay more) or stability concerns (startups, Prosus companies). Post-acquisition uncertainty is accelerating outflow.

### Net talent flow summary

```
→ Gaining most from: Booking.com, TomTom, Dutch universities
← Losing most to:   Uber Amsterdam, Adyen, Booking.com, early-stage NL startups

Net position: Talent feeder — below-market comp + acquisition uncertainty = elevated outflow
```

**Strategic interpretation:**
JET is in a vulnerable talent position. Below-market comp (avg €74K vs Uber's €197K median for senior), repeated layoffs, and Prosus acquisition uncertainty create a meaningful outflow risk. Engineers with 2–4yr tenure who joined pre-restructuring are likely questioning their trajectory. **This is a sourcing window.**

---

## 8. Culture & employer brand

| Signal | Value | Source | Date |
|---|---|---|---|
| Glassdoor rating (Amsterdam) | 3.4 / 5 | Glassdoor (173 Amsterdam reviews) | 2026-04 |
| WLB (Amsterdam) | 3.7–3.8 / 5 | Glassdoor | 2026-04 |
| Culture & values | 3.6 / 5 | Glassdoor | 2026-04 |
| Career opportunities | 3.0 / 5 | Glassdoor | 2026-04 |
| Comp & benefits | 3.3 / 5 (declining) | Glassdoor | 2026-04 |
| Comp vs market (NL) | **Below market** | TechPays / Levels.fyi | 2026-04 |
| Remote reality | Hybrid | JDs | 2026-04 |

**Compensation data:**
- TechPays Amsterdam average: **€74,053** (18 data points; all levels)
- TechPays Senior NL average: **€75,807**
- Levels.fyi NL median (SWE): **€57,619**
- Context: Uber Amsterdam Senior SWE median is €197K — JET pays ~2.5–3x less at equivalent seniority

### What employees say

**Top positives:**
1. Good WLB (3.7–3.8/5) — one of the higher-rated dimensions
2. Interesting logistical + marketplace engineering challenges
3. International, diverse team in Amsterdam

**Top negatives:**
1. Layoffs with "zero empathy" — cited specifically in November (recent) reviews
2. Leadership and strategic uncertainty — new management + Prosus acquisition
3. Compensation below market — 3.3/5 and declining; engineers know they're underpaid
4. Career opportunities lowest-rated (3.0/5) — limited progression visibility

---

## Intelligence scores

| Dimension | Score (0–10) | Rationale |
|---|---|---|
| Talent source score | **7/10** | Below-market comp + post-acquisition uncertainty + career frustration = elevated outflow. Good Go/Python/Kubernetes engineers with 2–4yr tenure are reachable. WLB is actually decent so don't lead with that — lead with comp, growth, and stability. |
| Talent competitor score | **4/10** | Different domain (food delivery vs conversational marketing), lower comp, not growing fast. Limited overlap except for Go backend and data engineers in Amsterdam. |

---

## Strategic summary

### What are they building right now?
Post-Grubhub sale + Prosus acquisition, JET is refocusing on **Europe + UK/Ireland** only. Platform modernisation (Go microservices, Kubernetes), logistics optimisation (ML for ETAs, routing), and consumer experience. Not in aggressive expansion mode — consolidation and efficiency.

### Tech strategy signal
Go is the primary new-service language — modernising away from Java legacy. Kubernetes + event-driven microservices = modern infra foundation. Python growing for data/ML. Stack is solid and modern, which means engineers aren't leaving for technical reasons — they're leaving for comp and stability.

### Talent opportunity / risk

**As a talent source:**
Senior Go and Python engineers with 2–4yr tenure are the prime target. The pitch writes itself: comp gap is real (JET avg €74K vs market), career ceiling is real (3.0/5), and Prosus acquisition has introduced genuine uncertainty. Use stability + comp + ownership as the core message.

**As a talent competitor:**
Low threat. JET can't compete on comp with Uber or Adyen. They may compete for junior/mid Amsterdam Go engineers, but lose most senior head-to-heads on comp.

**Key risks / watch items:**
- Prosus integration timeline — if they announce deeper restructuring, expect accelerated outflow → refresh this profile
- WLB is relatively good (3.7/5) — if your role is less flexible, this could work against you
- Post-acquisition, internal mobility to Prosus portfolio companies (OLX, Swiggy, etc.) may retain some engineers who'd otherwise leave

---

## Research log

| Date | What was researched | Key findings | Next steps |
|---|---|---|---|
| 2026-04-08 | Full initial profile | Acquired by Prosus ~$4.3B (private); Grubhub sold Jan 2025; ~12K global, 2K+ tech; Go/Kubernetes stack; comp avg €74K (well below market); Glassdoor 3.4 Amsterdam; career 3.0; layoffs cited Nov 2024; talent source score 7/10 | Validate Amsterdam eng headcount via LinkedIn; pull full open role list; monitor Prosus integration announcements |

## Raw notes & links

- Careers (NL): https://careers.justeattakeaway.com/global/en/the-netherlands
- Engineering blog: https://tech.justeattakeaway.com
- GitHub: https://github.com/justeat
- Glassdoor Amsterdam: https://www.glassdoor.com/Reviews/Just-Eat-Takeaway-com-Amsterdam-Reviews-EI_IE490124.0,21_IL.22,31_IM1112.htm
- TechPays Amsterdam: https://techpays.com/europe/netherlands/just-eat-takeaway-com/amsterdam
- Levels.fyi: https://www.levels.fyi/companies/just-eat/salaries/software-engineer/locations/netherlands
- Prosus acquisition / Grubhub sale: https://techcrunch.com/2024/11/12/just-eat-takeaway-sells-grubhub-to-wonder-for-650-million/
- FY2024 results: https://newsroom.justeattakeaway.com/en-WW/247233-full-year-2024-results/
