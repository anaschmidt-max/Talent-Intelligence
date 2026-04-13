# Data Sources Reference

This file lists all data sources available for talent intelligence research, with notes on reliability, freshness, and how to access them.

---

## Free sources (web search + direct access)

### Job postings
| Source | URL pattern | Freshness | Best for |
|---|---|---|---|
| Company careers page | `[company].com/careers` or `[company].com/jobs` | Real-time | Most accurate, direct |
| Greenhouse | `[company].greenhouse.io/jobs` | Real-time | Series A-C startups |
| Lever | `jobs.lever.co/[company]` | Real-time | Startups |
| Ashby | `jobs.ashbyhq.com/[company]` | Real-time | Modern startups |
| Workday | `[company].wd[N].myworkdayjobs.com` | Real-time | Enterprise |
| LinkedIn Jobs | `linkedin.com/jobs` | ~24h lag | Good for posted date |
| Indeed | `indeed.com` | ~24-48h | Catch-all backup |

### Company intelligence
| Source | What you get | Reliability |
|---|---|---|
| LinkedIn Company page | Headcount, growth %, dept breakdown | ⚠️ Estimates only |
| Crunchbase | Funding, founding, headcount | ✅ Good for funding |
| GitHub org page | Tech stack, OSS activity, team size | ✅ High for stack |
| BuiltWith | Frontend + infra stack | ⚠️ Partial view |
| StackShare | Declared tech stack | ⚠️ Often outdated |
| G2/Capterra | Product category, market position | ✅ For positioning |

### People intelligence
| Source | What you get | Notes |
|---|---|---|
| LinkedIn profiles | Career history, current title, activity | Best primary source |
| GitHub profiles | Contributions, expertise, OSS work | ✅ High signal for eng |
| Twitter/X | Public POVs, job signals, network | Useful for activity signals |
| Personal blogs | Expertise depth, thought leadership | High quality, low volume |
| Conference speaker lists | Who speaks = who is respected | Good for senior eng |

### Compensation benchmarks
| Source | What you get | Notes |
|---|---|---|
| Levels.fyi | Eng comp by level, company | ✅ Reliable for TC |
| Glassdoor | Salary ranges | ⚠️ Self-reported, noisy |
| Blind | Candid comp discussions | ⚠️ Anonymous, but useful |
| LinkedIn Salary | Market ranges | ⚠️ Very broad |

### Culture & employer brand
| Source | What you get | Notes |
|---|---|---|
| Glassdoor reviews | Rating, pros/cons | Weight last 6 months only |
| Blind | Candid employee views | High signal for tech culture |
| LinkedIn Life tab | Company-curated culture content | Promotional but useful |
| Company blog "Life at..." | What they want you to think | Treat as marketing |

---

## Paid/API sources (if integrated)

### Enrichment APIs
| Tool | What it provides | Cost model |
|---|---|---|
| Proxycurl | LinkedIn profile + company data via API | Per-call |
| Apollo.io | People + company data, emails | Monthly subscription |
| Hunter.io | Email finding + verification | Per-lookup |
| Clearbit | Company enrichment | Per-lookup |
| Crunchbase API | Funding, investors, headcount | Monthly |
| People Data Labs | People + company at scale | Per-record |

### Job data APIs
| Tool | What it provides | Notes |
|---|---|---|
| JSearch API (RapidAPI) | Aggregated job listings | Good coverage |
| SerpAPI Google Jobs | Google Jobs data | Reliable |
| Adzuna API | Job board aggregator | Free tier available |

---

## How to choose which source to use

**For "is this company hiring right now?"**
→ Go directly to their careers page or Greenhouse/Lever board. Fastest, most accurate.

**For "how big is their engineering team?"**
→ LinkedIn Company > People > filter by Engineering. Estimate ±20% margin.

**For "what's their tech stack?"**
→ Engineering blog first. If none, check GitHub org. Then layer in job description signals.

**For "who are the key engineers?"**
→ LinkedIn search: `[company name] engineer site:linkedin.com` sorted by relevance.

**For "are people happy there?"**
→ Glassdoor last 6 months + Blind. Ignore reviews older than 1 year.

**For "what's their comp like?"**
→ Levels.fyi for calibrated TC data. Glassdoor as backup.
