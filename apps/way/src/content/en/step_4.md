# WAI-WAY Step 4: The Polish

## Overview

**Purpose**: Test, fix bugs, and ship.
**RACI**: Human=Responsible, AI=Consulted
**Persona**: FINISHER — QA Engineer & Bug Fixer

---

## What Happens

You test the app. You find bugs. FINISHER fixes them with minimal changes.

**You test. You report. FINISHER fixes. You ship.**

### Why Human Leads This Step?

- You know your users
- You know edge cases that matter
- You decide when "good enough" is good enough
- AI assists, doesn't decide

### AI Persona: FINISHER

**Role:** QA Engineer & Bug Fixer
**Mindset:** "Diagnose why, fix minimally, verify it works."

**Behaviors:**

- **Diagnostic:** Understands WHY before fixing
- **Minimal:** Changes only what's necessary
- **Thorough:** Checks for regressions
- **Honest:** Asks for more information when bug reports are unclear

**FINISHER focuses on:**

- Fixing bugs only, keeping working code as-is
- Fixing bugs only, avoiding feature additions
- Verifying fixes work before declaring them complete
- Asking for clarification when bug reports are unclear

---

## Input Requirements

- Working app from Step 3
- Your testing and bug reports

## Output Deliverables

- **Fixed bugs** — All reported issues resolved
- **Ship-ready app** — Deployed and accessible
- **Ship readiness check** — Verification all MVP works

---

## Testing Checklist

### Functional Testing

For each feature:
- [ ] Happy path works
- [ ] Edge cases handled
- [ ] Error states work

### Auth Testing

- [ ] Can register
- [ ] Can login
- [ ] Can logout
- [ ] Protected routes redirect
- [ ] Invalid credentials show error

### CRUD Testing (per entity)

- [ ] Create works
- [ ] Read works
- [ ] Update works
- [ ] Delete works
- [ ] Empty state shows message

### Navigation Testing

- [ ] All links work
- [ ] Back button works
- [ ] Deep links work
- [ ] 404 page shows for invalid routes

### Mobile Testing (if applicable)

- [ ] Layout responsive
- [ ] Touch targets adequate
- [ ] Forms usable

---

## Bug Report Format

```
**Bug:** [One-line description]

**Steps to reproduce:**
1. [Step]
2. [Step]
3. [Step]

**Expected:** [What should happen]
**Actual:** [What actually happens]

**Error (if any):**
[Console error or error message]

**Context:**
- Page: [URL]
- User: [logged in/out, role]
```

---

## Ship Readiness

### Ready to Ship When

- [ ] No critical bugs (crashes, data loss, security)
- [ ] All MVP features work
- [ ] Auth is secure
- [ ] Performance acceptable (<3s load)
- [ ] Mobile works (if in spec)

### Acceptable to Ship With

- Minor UI glitches
- V2 features not done
- Edge cases unhandled (documented)

### NOT Acceptable

- Crashes on common paths
- Data loss or corruption
- Auth bypass possible
- Core features broken

---

## Human Todo List

### Testing

- [ ] **Run through all features** — Use checklist above
- [ ] **Document bugs** — Use bug report format
- [ ] **Prioritize** — Critical vs nice-to-fix

### Bug Fixing

- [ ] **Report to FINISHER** — One or batch
- [ ] **Apply fixes** — Check the diff
- [ ] **Verify fixes** — Test again

### Shipping

- [ ] **Final check** — All MVP works
- [ ] **Deploy** — To production
- [ ] **Test production** — Same tests
- [ ] **Ship it** — Share with users

---

## After Shipping

### For New Features

→ Return to **Step 1** (Brainstorm)
→ Add to HLD, go through full flow

### For Small Fixes

→ Stay in **Step 4**
→ Report bug, get fix, apply

### For Major Changes

→ Return to **Step 2** (Review)
→ Update schemas/routes as needed

---

## Common Pitfalls

| Pitfall | How to Avoid |
|---------|--------------|
| FINISHER refactors | Say: "Minimal fix only. Keep working code unchanged." |
| FINISHER adds features | Say: "Remove [feature]. Only fix the bug." |
| Fix doesn't work | Say: "Still broken: [details]" |
| Multiple related bugs | Say: "Find root cause." |

---

## The Loop

WAI-WAY is iterative:

```
Step 1 → Step 2 → Step 3 → Step 4 → Ship
                                    ↓
                            User feedback
                                    ↓
                    New feature? → Step 1
                    Bug fix? → Step 4
```
