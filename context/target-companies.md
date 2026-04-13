# Target Companies

This file defines which companies are in scope for talent intelligence research.
Edit this file to add/remove companies. Claude will use this as the source of truth.

---

## Tier 1 — High priority (research weekly)

These are companies you care most about — key competitors, key talent sources, or strategic targets.

| Company | Domain | Why we track | Priority |
|---|---|---|---|
| [Company A] | company-a.com | Key competitor for eng talent | Weekly |
| [Company B] | company-b.com | Top source of candidates | Weekly |
| Uber Amsterdam | uber.com | Largest eng office outside US in Amsterdam; top-paying NL employer; talent source for senior engineers | Weekly |

---

## Tier 2 — Medium priority (research monthly)

| Company | Domain | Why we track | Priority |
|---|---|---|---|
| [Company C] | company-c.com | Watch for talent moves | Monthly |
| Just Eat Takeaway | justeattakeaway.com | Amsterdam-based tech company; below-market comp + post-acquisition uncertainty = moveable engineers | Monthly |

---

## Tier 3 — Watchlist (research quarterly or on-trigger)

| Company | Domain | Trigger to escalate | Priority |
|---|---|---|---|
| [Company D] | company-d.com | If they raise a round | Quarterly |

---

## Out of scope

*(Companies we explicitly decided not to track and why)*

---

## Research cadence

- **Tier 1**: Re-run `/update` every Monday
- **Tier 2**: Re-run `/update` on the 1st of each month  
- **Tier 3**: Only refresh when a trigger event occurs (funding, news, leadership change)
- **Weekly digest**: Run `/digest` every Friday
