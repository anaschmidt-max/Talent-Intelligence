# Filters — Targeted Research Queries

This file defines how to run targeted intelligence searches using filters.
Load this file during any `/filter` or `/research --filter` session.

---

## How filters work

Filters let you scope your research to a specific slice of the talent market.
Instead of researching every company, you define what you care about and Claude
finds, researches, and compares only companies that match.

**Syntax:**
```
/filter --type [business type] --location [city/country] --tech [technology] --function [job family] --stage [funding stage]
```

**Examples:**
```
/filter --type product --location berlin --tech python
/filter --type b2b-saas --location amsterdam --tech react --function engineering
/filter --type fintech --location london --stage series-b --function data
/filter --location berlin --tech python --seniority senior
```

All flags are optional — use only the ones you care about. Combine freely.

---

## Filter reference

### `--type` — Company type
| Value | Matches |
|---|---|
| `product` | B2B SaaS + B2C Product (any product company) |
| `b2b-saas` | B2B SaaS only |
| `b2c` | B2C Product only |
| `fintech` | Fintech (B2B or B2C) |
| `healthtech` | HealthTech |
| `ai` | AI/ML companies |
| `devtools` | Developer tools / Infrastructure |
| `marketplace` | Marketplace |
| `enterprise` | Enterprise Software |
| `agency` | Agency / Consultancy |
| `startup` | Any startup (Seed through Series C) |
| `scaleup` | Series C+ or Growth stage |

### `--location` — Office or employee location
| Value | Matches |
|---|---|
| `berlin` | Companies with office in Berlin OR people based in Berlin |
| `amsterdam` | Amsterdam |
| `london` | London |
| `paris` | Paris |
| `munich` | Munich |
| `lisbon` | Lisbon |
| `remote-eu` | Remote-friendly companies hiring in EU |
| `germany` | Any city in Germany |
| `europe` | Any European location |
| `us` | Any US location |
| `global` | Fully distributed / global remote |

**Note:** Location filter applies to BOTH company offices AND where employees are based.
A company HQ'd in SF with 30 engineers in Berlin counts as matching `--location berlin`.

### `--tech` — Primary technology
| Value | Matches |
|---|---|
| `python` | Python as primary or significant language |
| `go` | Go / Golang |
| `rust` | Rust |
| `java` | Java / JVM |
| `typescript` | TypeScript / JavaScript |
| `react` | React (frontend) |
| `kubernetes` | Kubernetes / K8s |
| `aws` | Amazon Web Services |
| `gcp` | Google Cloud Platform |
| `dbt` | dbt (data transformation) |
| `spark` | Apache Spark |
| `pytorch` | PyTorch (ML) |
| `terraform` | Terraform (IaC) |

Multiple tech filters can be combined: `--tech python --tech kubernetes`

### `--function` — Job family to focus on
| Value | Matches |
|---|---|
| `engineering` | Software engineers, all specialisms |
| `data` | Data engineers, data scientists, analysts |
| `ml` | ML engineers, AI researchers, applied AI |
| `product` | Product managers |
| `design` | Designers, UX researchers |
| `devrel` | Developer relations, advocacy |
| `leadership` | VP / Director / Head of level and above |

### `--stage` — Funding / company stage
| Value | Matches |
|---|---|
| `seed` | Seed |
| `series-a` | Series A |
| `series-b` | Series B |
| `series-c` | Series C |
| `series-c-plus` | Series C and above |
| `growth` | Growth / pre-IPO |
| `public` | Publicly traded |
| `bootstrapped` | No institutional funding |

### `--seniority` — Seniority level focus
| Value | Matches |
|---|---|
| `junior` | Junior / Associate level |
| `mid` | Mid-level |
| `senior` | Senior level |
| `staff` | Staff / Principal / Tech Lead |
| `manager` | Engineering Manager and above |
| `director` | Director level and above |
| `vp` | VP level and above |

### `--size` — Company size
| Value | Matches |
|---|---|
| `small` | 1–50 employees |
| `medium` | 51–200 employees |
| `large` | 201–1000 employees |
| `enterprise` | 1000+ employees |

---

## What Claude does with a filter

When a filter is applied, Claude:

1. **Scans tracked companies** (`companies/` folder) for any that match the filter criteria
2. **Runs web research** to find additional companies that match but aren't tracked yet
3. **Applies the filter at every research phase:**
   - Headcount → only the relevant job family + location
   - Tech stack → only the specified technology
   - Hiring → only roles matching the filter
   - Talent flow → only people in the specified function/location/tech
4. **Produces a filtered output** — a ranked list or comparison matrix of matching companies
5. **Optionally kicks off `/research`** on any matching companies not yet in the system

---

## Filter query examples

### Example 1: Product companies in Berlin with Python
```
/filter --type product --location berlin --tech python
```
Claude will:
- Find product companies (B2B SaaS + B2C) with a Berlin presence
- Focus on their Python engineering teams specifically
- Show: how many Python engineers per company, seniority levels, open Python roles
- Show: talent flow for Python engineers in Berlin (who moves where?)

### Example 2: Senior data engineers in Amsterdam, Series B fintechs
```
/filter --type fintech --location amsterdam --stage series-b --function data --seniority senior
```
Claude will:
- Identify Series B fintech companies with Amsterdam presence
- Map their data teams
- Focus specifically on senior data engineer profiles and open roles
- Show talent donors/recipients for senior data engineers in Amsterdam

### Example 3: Any company hiring staff-level Go engineers remotely in EU
```
/filter --tech go --seniority staff --location remote-eu --function engineering
```

### Example 4: AI companies in Europe raising at growth stage
```
/filter --type ai --location europe --stage growth
```

---

## Saving filter presets

You can save a filter as a named preset for repeated use.
Add it to the **Saved presets** section below, then run it with:
```
/filter --preset [name]
```

### Saved presets

*(Add your presets here)*

```
# Example preset (replace with your own):
# preset: berlin-python-product
# --type product --location berlin --tech python --function engineering
```

---

## Filter output format

A filter run produces a **market slice report** saved to `reports/YYYY-MM-DD-filter-[query].md`:

```
## Market Slice: [Filter description]
## Date: [DATE]

### Companies matching filter: [N]

| Company | Type | Stage | Location | [Tech] engineers | Seniority mix | Hiring? | Source score | Competitor score |
|---|---|---|---|---|---|---|---|---|
| Stripe | B2B SaaS | Public | Berlin (40 eng) | Python: ~15 | 60% senior | Yes (3 roles) | 8/10 | 9/10 |

### Talent flow in this market slice

Top donors (who feeds this market):
Top recipients (where this talent goes):

### Open roles matching filter: [N total]

| Company | Role | Seniority | Location | Posted |
|---|---|---|---|---|

### Key insights
[3–5 bullets synthesizing what this market slice tells you]

### Recommended actions
[What to do with this intelligence]
```
