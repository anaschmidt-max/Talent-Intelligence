# Research Methodology

This file tells Claude how to conduct talent intelligence research step by step.
Load this file at the start of any `/research`, `/update`, or `/filter` session.

---

## Phase 1: Company identity & business type

**Goal:** Establish the basic identity of the company before any talent research.

### 1.1 Company name & identifiers
- Legal name + brand name (if different)
- Website domain
- LinkedIn company URL
- GitHub org URL (if exists)
- Year founded

### 1.2 Type of business
Classify using **two layers**:

**Layer A — Company type:**
`B2B SaaS` | `B2C Product` | `Marketplace` | `Infrastructure / DevTools` | `Fintech` | `HealthTech` | `AI/ML` | `Agency / Consultancy` | `Enterprise Software` | `Hardware` | `Open Source Co.` | `Other`

**Layer B — Stage:**
`Seed` | `Series A` | `Series B` | `Series C` | `Series D+` | `Growth` | `Pre-IPO` | `Public` | `Bootstrapped` | `Acquired`

### 1.3 Office locations
For each office, collect:
- City + Country
- Headquarters? (Y/N)
- Remote policy (Full remote / Hybrid / Office-first)
- Estimated headcount at this location
- Functions present (Eng only? Full cross-functional? Sales hub?)

**Sources:**
- LinkedIn Company > About (lists all locations)
- Careers page (often says "offices in X, Y, Z")
- Job descriptions (location requirements reveal where people actually work)
- Company website About/Offices page

---

## Phase 2: Headcount by job family

**Goal:** Know how many people work in each function — not just total headcount.

**Job families to measure:**

| Family | What it includes |
|---|---|
| Engineering | Software Eng, Platform, Infra, SRE, Security Eng, ML Eng |
| Product | Product Managers, Product Ops |
| Design | UX, UI, Product Design, Research |
| Data | Data Eng, Data Science, Analytics, BI |
| ML / AI | ML Research, Applied AI, AI Eng (separate from general Data) |
| DevRel | Developer Advocates, Docs, Community |
| Sales | AE, SDR, Sales Ops, RevOps |
| Marketing | Growth, Brand, Content, PMM |
| Customer Success | CSM, Support, Onboarding |
| Finance & Legal | Finance, Legal, Compliance |
| HR & People | Recruiting, HR, L&D |
| Operations | BizOps, Strategy, Chief of Staff |
| Executive | C-suite, VP level and above |

**How to estimate:**
1. LinkedIn > Company > People > filter by each department
2. Record LinkedIn's number (treat as ±15% estimate)
3. Cross-check: sum of all families should match total headcount

**Key ratios to calculate:**
- Eng / Total → engineering density
- Data+ML / Eng → data investment signal
- Sales / Total → GTM-led vs product-led signal
- PM / Eng → product culture signal

---

## Phase 3: Tech stack — with people & seniority per technology

**Goal:** Not just WHAT they use, but WHO uses it and at what level.

### 3.1 Identify the stack

**Sources in order of reliability:**
1. ✅ Engineering blog — engineers write what they actually use
2. ✅ GitHub org — languages, frameworks, actual code
3. ⚠️ Job descriptions — required/preferred skills (inferred, not confirmed)
4. ⚠️ StackShare / BuiltWith — often outdated, baseline only

**Stack categories:**
- Backend languages
- Frontend languages / frameworks
- Mobile (iOS / Android / Cross-platform)
- Databases (relational, NoSQL, cache, search)
- Data & ML tooling
- Infrastructure (cloud, containers, IaC)
- CI/CD & developer tooling
- Observability & monitoring

### 3.2 Map people + seniority to each technology

For every primary technology, estimate:
- How many people use it
- Seniority distribution within that tech area

**How to estimate:**
1. Search LinkedIn: `[company] [technology]` to find people with that skill
2. Count open roles mentioning the tech and note seniority required
3. Check GitHub: activity level in that language/framework

**Output format per technology:**
```
Python
  Users: ~30 people  (Data + ML + some Backend)
  Seniority: ~10% junior | ~50% mid | ~30% senior | ~10% staff/principal
  Signal: Core for data pipeline + ML, growing into backend services
  Confidence: ⚠️ Inferred from JDs + LinkedIn profiles
```

### 3.3 Seniority levels (use consistently across all companies)

| Level | Typical titles |
|---|---|
| Junior | Junior Eng, Associate Eng, Eng I |
| Mid | Software Eng, Eng II, Eng III |
| Senior | Senior Eng, Senior SWE |
| Staff | Staff Eng, Tech Lead, Senior Staff |
| Principal | Principal Eng, Distinguished Eng |
| Management | EM, Director of Eng, VP Eng, CTO |

---

## Phase 4: Org structure & seniority distribution

**Goal:** Map the shape of the org — not just who's there but how it's structured.

### 4.1 Engineering org model
- **Model:** Flat / Functional / Squad-based / Tribe-Guilds / Matrix
- **Team structure:** Organized by product area? Platform layer? Customer segment?
- **IC vs manager ratio:** Healthy = ~7–10 ICs per manager

### 4.2 Seniority pyramid shape
- `Top-heavy` — lots of seniors/staff, few juniors (common at Series B+ startups)
- `Balanced` — roughly equal distribution (mature orgs)
- `Bottom-heavy` — lots of juniors (consultancies, hyper-growth, outsourcing)
- `Dumbbell` — lots of senior + lots of junior, few mid (common post-layoffs)

### 4.3 Leadership map

| Name | Title | Reports to | Tenure | LinkedIn | Notes |
|---|---|---|---|---|---|
| | CTO | CEO | | | |
| | VP Engineering | CTO | | | |
| | Head of Platform | VP Eng | | | |

### 4.4 Overall seniority distribution

Estimate % of total company at each level:
```
Executive (VP+):   ~8%
Senior / Staff:    ~35%
Mid-level:         ~40%
Junior:            ~17%
```

---

## Phase 5: Hiring intelligence — what they're hiring for

**Goal:** Know every open role, what it signals, and how fast they're moving.

### 5.1 Active job scan

For every open role, record:
```
Title | Dept | Seniority | Location | Tech mentioned | Signal type | Date posted
```

Signal types: `growth_hire` | `backfill` | `new_function` | `strategic_bet` | `unclear`

### 5.2 Hiring velocity
- Roles open now
- Posted last 30 days / last 90 days
- Trend: accelerating / stable / decelerating

### 5.3 Hiring concentration
- Which functions are scaling? Which are frozen?
- Most in-demand tech skills (from JD frequency analysis)
- Most in-demand seniority level
- Location breakdown of open roles

---

## Phase 6: Talent flow — donors & recipients

**Goal:** Understand where the company's talent comes from and where it goes.

### 6.1 Talent donors — where they recruit FROM

**How to find:**
1. LinkedIn > Company > People > filter by function > sort by "Recently joined"
2. For each recent hire (last 90 days), note their previous company
3. Build a tally of most frequent previous employers

**Output:**
```
Top talent donors:
1. Google       — 12 recent hires
2. Meta         — 8 recent hires
3. [Startup X]  — 5 recent hires
```

**Signal interpretation:**
- FAANG-heavy → strong employer brand + compensation
- Competitor-heavy → actively poaching from a specific rival
- Startup-heavy → seen as an upward move from early-stage

### 6.2 Talent recipients — where their people GO

**How to find:**
1. LinkedIn: search with `[company name]` as Past Company filter
2. Look at profiles of people who recently left
3. Tally their new employers

**Output:**
```
Top talent recipients:
1. OpenAI       — 6 former employees
2. [Startup Y]  — 4 former employees (3 co-founded it)
3. Competitor Z — 3 senior engineers
```

**Signal interpretation:**
- Leaving for competitors → competitor is winning the talent war
- Leaving to found startups → entrepreneurial culture, hard to retain senior
- Leaving for FAANG → comp or career ceiling issue
- Leaving for early-stage → senior talent seeking more equity/ownership

### 6.3 Talent flow summary

```
NET TALENT FLOW:
→ Gaining from: [top 3 sources]
← Losing to:   [top 3 destinations]

INTERPRETATION:
[Is this company a net winner or loser in the talent market?
Are they draining competitors? Are competitors draining them?]
```

### 6.4 Function-specific flow (for filtered research)

When targeting a specific function, technology, or location:
- Restrict donor/recipient analysis to only people matching the filter
- Example: "Python engineers based in Berlin" → only track Python eng profiles in Berlin

---

## Phase 7: Culture & employer brand

- Glassdoor rating + trend (last 6 months only)
- Top 3 recurring positives / negatives in reviews
- Blind themes (more candid for tech workers)
- Compensation vs market (use Levels.fyi as benchmark)
- Remote policy reality (what JDs say, not just what company claims)

---

## Scoring

### Talent source score (0–10)
How good is this company as a place to recruit FROM?
- 10 = strong talent, 2–3yr tenure, at-market comp, regular outflow
- 1 = very long tenures, above-market comp, almost nobody leaves

### Talent competitor score (0–10)
How much do they compete with you for the same candidates?
- 10 = identical stack, seniority, locations, comp, and stage
- 1 = completely different profile on every dimension

---

## Confidence convention

- ✅ **Confirmed** — primary source (official blog, GitHub, careers page, LinkedIn company)
- ⚠️ **Inferred** — secondary signals (JDs, LinkedIn headcount estimates, alumni patterns)
- ❓ **Unclear** — needs verification

---

## Filter-aware research

When a filter is active (see `context/filters.md`), apply it at every phase:
- Phase 1: Only research companies matching type + location filter
- Phase 2: Report headcount for the relevant location(s) and job families only
- Phase 3: Focus stack analysis on the specified technology
- Phase 5: Show only open roles matching the filter
- Phase 6: Restrict talent flow to the filtered function / location / tech
