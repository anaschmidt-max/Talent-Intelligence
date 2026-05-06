# Company: Semrush

**Domain:** semrush.com
**LinkedIn:** linkedin.com/company/semrush
**GitHub:** github.com/semrush
**Last updated:** 2026-04-15
**Research status:** 🟡 In progress

---

## 1. Company identity

| Field | Value | Confidence |
|---|---|---|
| Legal name | Semrush Holdings, Inc. | ✅ |
| Year founded | 2008 | ✅ |
| Headquarters | Boston, MA, USA | ✅ |
| Company type | B2B SaaS | ✅ |
| Stage | Public (NYSE: SEMR) | ✅ |
| Latest funding | IPO March 2021 | ✅ |
| Total funding raised | ~$40M pre-IPO | ⚠️ |

---

## 2. Office locations

| City | Country | HQ? | Remote policy | Est. headcount here | Functions present |
|---|---|---|---|---|---|
| Boston | USA | Yes | Hybrid | ~200 | Executive, Sales, Marketing |
| Prague | Czech Republic | No | Hybrid | ~500 | Engineering, Product |
| Limassol | Cyprus | No | Hybrid | ~300 | Engineering, Operations |
| Warsaw | Poland | No | Hybrid | ~200 | Engineering, Sales |
| Amsterdam | Netherlands | No | Hybrid | ~100 | Sales, Marketing |
| Barcelona | Spain | No | Hybrid | ~100 | Sales, Marketing |
| Remote (US) | USA | No | Full remote | ~200 | Various |

**Notes on geo footprint:**
Semrush has a significant Eastern European engineering presence (legacy from founding in Russia — they relocated most operations to EU/US after 2022). Prague and Cyprus are the primary engineering hubs.

---

## 3. Headcount by job family

**Total estimated headcount:** ~1,567 (✅ PitchBook / public filings, April 2026)
**Last headcount check:** 2026-04-15
**Headcount 6 months ago:** ~1,700 (pre-August 2025 layoffs)
**Trend:** 📉 Contracting — 10% layoff in August 2025 (~120 people cut)

### Breakdown by function

| Job Family | Est. Count | % of total | Confidence | Notes |
|---|---|---|---|---|
| Engineering + Product + Data | ~563 | ~36% | ✅ | PitchBook: "product and development" combined |
| Sales + Marketing | ~540 | ~34.5% | ✅ | PitchBook: "sales and marketing" combined |
| Design | ~50 | ~3% | ⚠️ | Estimated |
| ML / AI | ~60 | ~4% | ⚠️ | Growing sub-team within eng |
| Customer Success | ~150 | ~10% | ⚠️ | Estimated |
| Finance & Legal | ~80 | ~5% | ⚠️ | Public co. overhead |
| HR & People | ~60 | ~4% | ⚠️ | |
| Operations | ~50 | ~3% | ⚠️ | |
| Executive (VP+) | ~14 | ~1% | ⚠️ | |
| **Total** | **~1,567** | **100%** | | |

### Key ratios

| Ratio | Value | Signal |
|---|---|---|
| Eng+Product+Data / Total | ~36% | Strong product/eng density for size |
| Sales+Marketing / Total | ~34.5% | Balanced GTM investment (typical B2B SaaS) |
| Eng / Total (est.) | ~20–22% | Moderate engineering density |

---

## 4. Tech stack — with people & seniority

### Confirmed stack ✅

**Backend:** PHP (legacy core), Go (newer services), Python (data/ML)
**Frontend:** React, TypeScript
**Mobile:** React Native (limited mobile presence — primarily web product)
**Databases:** MySQL, ClickHouse (analytics), Redis, Elasticsearch
**Data / ML:** Python, Spark, Airflow, custom ML pipelines for NLP/content analysis
**Infrastructure / Cloud:** AWS (primary), GCP (secondary), Kubernetes, Terraform
**CI/CD & Tooling:** GitLab CI, Docker
**Observability:** Datadog, custom dashboards

### Stack sources
- [x] Engineering blog: semrush.com/blog/engineering (exists, moderate activity)
- [x] GitHub org: github.com/semrush (public repos, confirms Go + React)
- [x] Job descriptions: semrush.com/company/careers/
- [ ] StackShare: partial data

### People & seniority per technology

#### PHP
- **Users:** ~200 engineers (legacy backend; core product originally PHP monolith)
- **Seniority mix:** ~5% junior | ~30% mid | ~50% senior | ~15% staff/principal
- **Signal:** Long-tenured, senior-heavy. Legacy core but still critical. Ongoing migration to Go.
- **Confidence:** ⚠️ Inferred from JDs + eng blog

#### Go
- **Users:** ~150 engineers (newer microservices, platform infrastructure)
- **Seniority mix:** ~10% junior | ~35% mid | ~40% senior | ~15% staff/principal
- **Signal:** Strategic migration target — most new backend services are Go. Growing headcount.
- **Confidence:** ⚠️ Inferred from JDs + GitHub

#### Python
- **Users:** ~150 engineers/data scientists (data pipelines, ML, NLP)
- **Seniority mix:** ~10% junior | ~40% mid | ~35% senior | ~15% staff/principal
- **Signal:** Core for data and AI product investment (AI writing tools, SEO recommendations)
- **Confidence:** ⚠️ Inferred from JDs + eng blog

#### React / TypeScript
- **Users:** ~180 engineers (primary frontend)
- **Seniority mix:** ~10% junior | ~40% mid | ~35% senior | ~15% staff/principal
- **Signal:** Fully committed to React ecosystem across all product surfaces
- **Confidence:** ⚠️ Inferred from JDs + GitHub

#### ClickHouse
- **Users:** ~50 data engineers (analytics backend, large-scale SEO data processing)
- **Seniority mix:** ~0% junior | ~30% mid | ~50% senior | ~20% staff/principal
- **Signal:** Core to Semrush's competitive moat — they process billions of SEO data points. ClickHouse engineers are senior and specialized.
- **Confidence:** ⚠️ Inferred from JDs + public engineering talks

### Inferred stack ⚠️ (from JDs, not confirmed)
- Kafka (event streaming, inferred from scale + data pipeline JDs)
- Cassandra or similar (for high-volume crawl data storage)
- Helm (Kubernetes packaging)

---

## 5. Org structure & seniority

### Engineering org model
- **Structure:** Squad-based, organized around product areas
- **Team organization:** By product (SEO toolkit, Content Marketing, Competitive Research, etc.) + Platform/Infra layer
- **IC:Manager ratio:** ~8:1 (⚠️ estimated)

### Seniority pyramid

**Shape:** Top-heavy (legacy of Eastern European engineering culture; long tenures, promoted-from-within)

| Level | Approx % | Approx count | Confidence |
|---|---|---|---|
| Junior / Associate | ~10% | ~90 | ⚠️ |
| Mid-level | ~35% | ~315 | ⚠️ |
| Senior | ~40% | ~360 | ⚠️ |
| Staff / Principal | ~10% | ~90 | ⚠️ |
| Management (EM, Director) | ~5% | ~45 | ⚠️ |

### Leadership map

| Name | Title | Reports to | Tenure | LinkedIn | Notes |
|---|---|---|---|---|---|
| Bill Wagner | CEO | Board | Since Mar 2025 | ✅ | External hire; former CEO of LogMeIn/GoTo Group ($4.2B exit) |
| Oleg Shchegolev | CTO | CEO | Co-founder (2008), CTO since Mar 2025 | ✅ | Stepped down as CEO to focus on AI/product innovation |
| Vitalii Obishchenko | CPO | CEO | Since Mar 2025 | ✅ | Was CTO previously |
| Alex Sukennik | CIO | CEO | Since Apr 2022 | ✅ | |
| TBD | VP Engineering | CTO | | | Not publicly named |

### Org signals & notes
- **Major CEO transition March 2025**: Founder Oleg stepped down as CEO after 16 years; external SaaS veteran brought in. Strong signal of a pivot toward professional management / growth-at-scale execution.
- Engineering distributed across Prague, Warsaw, Cyprus — EU remote-first
- Post-Russia relocation (2022) fully complete; org now EU/US anchored

---

## 6. Hiring intelligence

### Current hiring status
**Hiring right now?** Minimal — near-hiring freeze
**Open roles (as of 2026-04-15):** <10 confirmed live roles (Glassdoor shows 1; careers site shows handful)
**Hiring velocity:** 📉 Sharply decelerating — post-August 2025 layoffs (10% cut, ~120 people)

### Active open roles (confirmed from careers.semrush.com, April 2026)

| Title | Department | Seniority | Location | Key tech | Signal | Posted |
|---|---|---|---|---|---|---|
| Senior Golang Developer (Nexus Team) | Engineering | Senior | Cyprus | Go, Kubernetes | backfill/strategic | ❓ |
| Enterprise Account Executive, DACH | Sales | Mid-Senior | Czech Republic | — | growth_hire | ❓ |
| Channel Sales Account Executive | Sales | Mid | United States | — | growth_hire | ❓ |
| Senior Financial Analyst | Finance | Senior | United States | — | backfill | ❓ |
| HRIS Specialist (6-month FTC) | HR | Mid | United Kingdom | — | backfill | ❓ |

### Hiring velocity metrics

| Metric | Value |
|---|---|
| Roles open today | ~5–10 ✅ (very low) |
| Posted last 30 days | ❓ |
| Posted last 90 days | ❓ |
| August 2025 layoff | ~120 people, ~10% of workforce |

### Hiring concentration

**Scaling:** Near-zero net hiring across all functions
**Frozen:** Engineering, Product, Design, Marketing (no open roles visible)
**Active (barely):** Sales (DACH AE, US Channel AE), isolated senior eng (Go/Cyprus)
**Most in-demand skills:** Go (sole eng role visible)
**Most in-demand seniority:** Senior (only level being hired)
**Location of open roles:** Cyprus, Czech Republic, US, UK

### Interpretation
🚨 **Hiring freeze signal.** Post-August 2025 layoffs + fewer than 10 open roles = company in cost-containment mode. The lone engineering role (Senior Go/Cyprus) is almost certainly backfill. Sales roles suggest they're still trying to drive revenue but not investing in product/eng growth. This is a company managing through a difficult market transition (AI disrupting traditional SEO tools).

---

## 7. Talent flow — donors & recipients

### Where they recruit FROM (talent donors)

| Previous company | # recent hires | Function | Notes |
|---|---|---|---|
| Yandex / ex-Yandex | Multiple | Engineering, Data | Post-Russia talent migration |
| JetBrains | Several | Engineering | Czech Republic talent pool |
| Avast/Gen Digital | Several | Engineering | Prague overlap |
| Similarweb | Several | Engineering, Product | Direct competitor |
| Moz | A few | Product, Marketing | SEO market |
| Ahrefs | A few | Engineering, Product | Direct competitor |

**Donor pattern interpretation:**
Semrush benefits heavily from the post-2022 Eastern European tech talent diaspora (Yandex, Mail.ru engineers relocating to EU). They also pull from direct SEO competitors — Similarweb and Moz signal that product/eng talent circulates within the SEO/marketing intelligence space.

### Where their people GO (talent recipients)

| Destination company | # who went there | Function | Notes |
|---|---|---|---|
| Similarweb | Several | Product, Engineering | Primary competitor |
| Ahrefs | A few | Engineering | Competitor |
| Google | A few | Engineering | FAANG pull |
| Startups (various) | Several | Senior Eng | Entrepreneurial exits |

**Recipient pattern interpretation:**
Primary attrition is to direct competitor Similarweb and to the startup ecosystem. FAANG pull exists but is moderate.

### Net talent flow summary

```
→ Gaining most from: Ex-Yandex/Russian tech diaspora, JetBrains, Similarweb
← Losing most to:   Similarweb, startup ecosystem, Google

Net position: Neutral (benefits from Eastern European talent displacement, loses to competitors + startups)
```

**Strategic interpretation:**
Semrush is a net beneficiary of the 2022 Russian tech exodus but faces steady attrition to Similarweb (their main talent competitor). The SEO/marketing intelligence talent pool is small and circular.

---

## 8. Culture & employer brand

| Signal | Value | Source | Date |
|---|---|---|---|
| Glassdoor rating | 4.0/5 (576 reviews) | Glassdoor | ✅ 2026 |
| % recommend to friend | 75% | Glassdoor | ✅ 2026 |
| Work-life balance | 4.1/5 | Glassdoor | ✅ 2026 |
| Comp & benefits | 4.1/5 | Glassdoor | ✅ 2026 |
| Career opportunities | 3.8/5 | Glassdoor | ✅ 2026 |
| Positive business outlook | 63% | Glassdoor | ✅ 2026 |
| Sales dept rating | 3.2/5 | Glassdoor | ✅ 2026 |
| Blind sentiment | Mixed | Blind | ⚠️ |
| Comp vs market | At market (surprisingly good per Glassdoor 4.1) | Glassdoor | ⚠️ |
| Remote reality | EU remote-friendly; US roles often hybrid | JDs | ⚠️ |

### What employees say

**Top positives (from reviews):**
1. Good work-life balance (4.1/5) — better than comparable SaaS
2. Compensation rated well for EU market
3. Interesting technical problems at scale

**Top negatives (from reviews):**
1. Layoffs and job security concerns (multiple rounds: July 2022, Dec 2023, Aug 2025)
2. Career growth unclear post-Russia exit / org restructure
3. Sales department particularly dissatisfied (3.2/5 — notably below company average)

---

## Intelligence scores

| Dimension | Score (0–10) | Rationale |
|---|---|---|
| Talent source score | 7/10 | Senior engineers post-layoff = motivated to move. EU-based Go/Python/ClickHouse talent. Layoff anxiety makes them receptive. |
| Talent competitor score | 3/10 | Near-hiring freeze — they're not competing for talent right now. Low overlap in US market. |

---

## Strategic summary

### What are they building right now?
Semrush is in a **defensive consolidation** phase. The August 2025 layoffs (10%), the CEO transition to an external SaaS operator (Bill Wagner, ex-LogMeIn), and near-zero hiring all signal a company prioritizing profitability and margin over growth. The founder moving to CTO to focus on AI is the growth bet — but it's being funded by cost cuts, not expansion. They're trying to reinvent the core product for the AI search era (GEO: Generative Engine Optimization) while cutting operating costs.

### Tech strategy signal
- **AI/GEO pivot**: Semrush is rebranding toward "brand visibility" beyond traditional SEO — positioning for AI search (Perplexity, ChatGPT). This is an existential response, not an opportunistic bet.
- **PHP → Go migration** ongoing but slowed: fewer engineers now, backfilling only.
- **ClickHouse at scale** remains a core moat — rare expertise for high-volume SEO/web data.
- **Python/ML** investment continues despite headcount cuts — AI tooling is the strategic priority.

### Talent opportunity / risk

**As a talent source:** 🟢 **High opportunity right now.** Post-layoff engineers (Aug 2025) are on the market or anxious. Semrush Go/Python/ClickHouse engineers are senior, EU-based, and have experienced uncertainty. Tenures of 3–6 years are common = not yet fully vested in new options, but experienced enough to be valuable. Barcelona (102), Philadelphia (74), Boston (47) offices add US-based targets.

**As a talent competitor:** 🟢 **Low threat.** Hiring freeze means they're not competing for your candidates. If anything they're releasing talent into the market.

**Key risks / watch items:**
- Bill Wagner's track record (LogMeIn: $140M → $1B → acquisition) suggests he may pursue M&A or a take-private. Watch for strategic announcements.
- Market cap at ~$1B (down from $3.5B peak) = potential acquisition target. Talent pipeline disruption risk if acquired.
- Glassdoor shows 63% positive business outlook — not terrible, but employees are cautious.

---

## Research log

| Date | What was researched | Key findings | Next steps |
|---|---|---|---|
| 2026-04-15 | Initial full research session | ~1,567 HC (not 4K), 10% layoffs Aug 2025, CEO transition Mar 2025, near-hiring freeze, AI pivot, Go/PHP/Python stack | Get full live job list from careers.semrush.com; monitor for M&A signals; check Levels.fyi for eng comp |

## Raw notes & links

- Careers page: https://semrush.com/company/careers/
- GitHub: https://github.com/semrush
- Engineering blog: https://www.semrush.com/blog/ (filter: engineering)
- LinkedIn: https://www.linkedin.com/company/semrush/
- Crunchbase: https://www.crunchbase.com/organization/semrush
- NYSE ticker: SEMR (public filings available on SEC EDGAR)
