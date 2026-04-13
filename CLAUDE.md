# Talent Market Intelligence — Claude Memory

## What this project is

This is a talent market research and intelligence system. The goal is to build deep profiles on target companies: their tech stack, team structure, org design, job titles, hiring patterns, growth signals, and key people.

This is NOT a generic competitor research tool. It is focused on **talent intelligence** — understanding companies as talent ecosystems: who they hire, how they're structured, what they build with, and whether they're growing or contracting.

## How to use this project

Always read this file at the start of every session. Then check `tasks/active.md` for current priorities.

### Key folders
- `context/` — reference files about research methodology, scoring frameworks, data sources
- `companies/` — one markdown file per company being researched (e.g. `companies/stripe.md`)
- `people/` — profiles of key individuals being tracked
- `reports/` — final intelligence outputs (weekly digests, company briefs, market snapshots)
- `tasks/` — active and completed task lists
- `templates/` — blank templates to copy when starting new research

### Slash commands available
- `/research` — start a new company research session
- `/update` — refresh an existing company profile with new data
- `/digest` — generate a weekly talent intelligence digest from all company files
- `/person` — research and profile an individual
- `/hiring-scan` — scan for hiring signals across all tracked companies
- `/stack-compare` — compare tech stacks across a list of companies
- `/report` — generate a polished intelligence report from raw research

## Research philosophy

**Go wide before going deep.** When researching a company, always start with the job board scan (what are they hiring for RIGHT NOW), then layer in LinkedIn headcount signals, then GitHub/tech signals, then funding context.

**Recency matters most.** A job posted 6 months ago is a cold signal. Always note the date of every data point. Weight recent data (< 30 days) much higher than older data.

**Look for pattern breaks.** The most valuable intelligence is when a company changes behavior — suddenly hiring for a new function, stopping all hiring, or replacing senior leadership. Changes are more interesting than states.

**Be specific about uncertainty.** When a signal is inferred (e.g. "likely using Kubernetes based on job descriptions") vs confirmed (e.g. "confirmed from their engineering blog"), mark it clearly.

## Output standards

- All company files use the template at `templates/company.md`
- All reports go to `reports/` with the date prefix: `YYYY-MM-DD-report-name.md`
- All confidence levels are marked: ✅ confirmed | ⚠️ inferred | ❓ unclear
- Always end research sessions by updating `tasks/active.md` with next steps

## Filter system

The `/filter` command lets you research a specific slice of the market rather than one company at a time.

Example queries:
- `/filter --type product --location berlin --tech python`
- `/filter --type fintech --location amsterdam --stage series-b --function data`
- `/filter --tech go --seniority staff --location remote-eu`

See `context/filters.md` for all filter values and how to save presets.

## What every company profile now covers

Every company file (based on `templates/company.md`) covers 8 areas:
1. **Company identity** — name, type, stage, funding
2. **Office locations** — where they are, remote policy, headcount per city
3. **Headcount by job family** — eng / product / data / sales / etc. broken out
4. **Tech stack with people & seniority** — who uses what, at what level
5. **Org structure & seniority** — pyramid shape, IC:manager ratio, leadership map
6. **Hiring intelligence** — open roles, velocity, concentration, signal types
7. **Talent flow** — where they recruit FROM and where their people GO
8. **Culture & employer brand** — Glassdoor, Blind, comp benchmarks
