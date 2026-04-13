# Talent Intelligence — Claude Code Project

A talent market research and intelligence system built for Claude Code.
Research companies, map their teams, track their hiring, and surface actionable signals.

---

## Getting started

### 1. Install Claude Code (if not already installed)

```bash
npm install -g @anthropic-ai/claude-code
```

### 2. Open this project in Claude Code

```bash
cd talent-intelligence
claude
```

Claude will automatically load `CLAUDE.md` and know the full context of this project.

### 3. Set up your target companies

Edit `context/target-companies.md` and add the companies you want to track.

### 4. Run your first research session

```bash
/research Stripe
```

Claude will systematically research Stripe across all sources and create a structured profile at `companies/stripe.md` — and automatically sync it to Notion.

---

## Available commands

| Command | What it does |
|---|---|
| `/research [company]` | Full research session on a new company |
| `/update [company]` | Refresh an existing company profile |
| `/update --stale` | Refresh all companies not updated in 14+ days |
| `/digest` | Generate weekly intelligence digest |
| `/hiring-scan` | Scan all companies for hiring changes |
| `/stack-compare` | Compare tech stacks across companies |
| `/person [name] [company]` | Research and profile an individual |
| `/report` | Generate a polished report from research files |
| `/notion-sync [company]` | Sync a company profile to Notion |
| `/notion-sync --all` | Sync all company profiles to Notion |
| `/notion-sync --digest` | Sync the latest weekly digest to Notion |

> **Notion sync is automatic.** `/research`, `/update`, and `/digest` all call `/notion-sync` at the end. Append `--no-notion` to any command to skip it.

---

## Notion integration

On the first sync, Claude Code will create a **Talent Intelligence** workspace in your connected Notion account containing:

- **Company Tracker** — a database with one row per researched company, tracking headcount, hiring signal, tech stack, stage, and last updated date.
- **Company pages** — a full intelligence profile page per company, kept in sync with the local markdown files.
- **Weekly digests** — each digest is posted as a dated Notion page for easy sharing.

After setup, IDs are saved to `context/notion-setup.md` so subsequent syncs update in place rather than creating duplicates.

---

## Project structure

```
talent-intelligence/
├── CLAUDE.md                    ← Project memory (Claude reads this first)
├── README.md                    ← This file
│
├── .claude/commands/            ← Slash command definitions
│   ├── research.md
│   ├── update.md
│   ├── digest.md
│   ├── hiring-scan.md
│   ├── stack-compare.md
│   ├── person.md
│   └── notion-sync.md           ← Notion sync command
│
├── context/                     ← Reference files Claude loads during research
│   ├── research-methodology.md  ← How to conduct research step by step
│   ├── data-sources.md          ← All data sources with access patterns
│   ├── target-companies.md      ← Your list of companies to track
│   └── notion-setup.md          ← Notion page/database IDs (auto-managed)
│
├── companies/                   ← One file per company researched
│   └── [company-slug].md
│
├── people/                      ← Profiles of individuals being tracked
│   └── [firstname-lastname].md
│
├── reports/                     ← Generated intelligence outputs
│   └── YYYY-MM-DD-[report].md
│
├── tasks/
│   └── active.md                ← Current priorities (check at every session)
│
└── templates/                   ← Blank templates
    ├── company.md
    ├── person.md
    └── weekly-digest.md
```

---

## Tips for best results

**Start with `/research` before asking freeform questions.**
Claude performs much better when it has a structured file to work from. Run research first, then ask analysis questions.

**Be specific about what you want.**
Instead of "tell me about Stripe", say "What is Stripe's current engineering headcount and where are they hiring most aggressively?"

**Use the research log.**
Every company file has a research log. Review it to understand what's already been confirmed vs what needs verification.

**Run `/digest` every Friday.**
The weekly digest is designed to be the thing you actually read and act on. The company files are the data layer; the digest is the intelligence layer.

**Trust confidence markers.**
✅ = confirmed from a primary source. ⚠️ = inferred from secondary signals. ❓ = unclear. Always note these when acting on intelligence.

**Notion is your shareable layer.**
The local markdown files are your source of truth. Notion is for sharing with stakeholders, reviewing on mobile, or building on top of with Notion's own tools. If they ever diverge, run `/notion-sync --all` to re-align.
