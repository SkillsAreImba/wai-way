# WAI-WAY Step 2: The Review

## Overview

**Purpose**: Transform HLD into framework-compliant technical artifacts for human approval.
**RACI**: Human=Accountable, AI=Responsible
**Persona**: PRINTER — Framework Architect

---

## What Happens

PRINTER takes your HLD and transforms it into exact technical specifications:

1. **Entity Schemas** — `defineEntity()` code for each entity
2. **Navigation Config** — Route definitions with access levels
3. **Feature Mapping** — What framework packages implement each feature

**You review. You approve. Then Step 3 builds it.**

### Why Review Before Building?

- Catch misunderstandings before code is written
- Ensure everything maps to DoNotDev conventions
- Human approval prevents expensive rework

### AI Persona: PRINTER

**Role:** DoNotDev Framework Architect
**Mindset:** "Does this fit the framework? Generate exact code, not descriptions."

**Behaviors:**

- **Precise:** Generates exact TypeScript code
- **Framework-Native:** Knows DoNotDev inside-out
- **Vigilant:** Catches inconsistencies and flags them
- **Minimal:** Includes only what's in HLD

**PRINTER focuses on:**

- Generating schemas and configuration code, not implementing app features
- Including only features specified in the HLD
- Flagging every issue found for human review
- Letting code speak for itself, keeping explanations concise

---

## Input Requirements

- Approved `HLD.md` from Step 1

## Output Deliverables
 
| Artifact | Description |
|----------|-------------|
| **Entity Schemas** | `defineEntity()` code for each entity |
| **Navigation Config** | Route definitions with access levels |
| **Feature Mapping** | Which `@donotdev/*` packages handle what |
| **Validation Issues** | Any problems found in HLD |
 
---
 
## What PRINTER Generates
 
### 1. Entity Schemas
 
```typescript
import { defineEntity } from '@donotdev/core';
 
export const projectEntity = defineEntity({
  name: 'Project',
  collection: 'projects',
  fields: {
    id: { type: 'text', visibility: 'technical', hidden: true },
    name: { type: 'text', visibility: 'user', validation: { required: true } },
    owner: { type: 'reference', visibility: 'user', ref: 'users' },
    createdAt: { type: 'timestamp', visibility: 'technical', hidden: true }
  }
});
```
 
### 2. Navigation Config
 
```typescript
export const routes = [
  { path: '/', name: 'Landing', access: 'public', layout: 'marketing' },
  { path: '/dashboard', name: 'Dashboard', access: 'protected', layout: 'app' }
];
```
 
### 3. Feature Mapping
 
| Feature | Package | Implementation |
|---------|---------|----------------|
| Email auth | @donotdev/auth | AuthForm |
| CRUD projects | @donotdev/crud | useCrud('projects') |
 
---
 
## Success Criteria
 
- [ ] All HLD entities have schemas with code
- [ ] Every schema has id and createdAt fields
- [ ] Every reference points to existing collection
- [ ] Every select has options array
- [ ] All HLD pages have routes
- [ ] All HLD features mapped to packages
- [ ] Collection names are plural lowercase
- [ ] Human approves all artifacts
 
---
 
## Human Todo List
 
### Review Artifacts
 
- [ ] **Check entity schemas** — Fields match HLD? Types correct?
- [ ] **Check navigation** — Routes match HLD pages? Access levels right?
- [ ] **Check feature mapping** — Implementation makes sense?
- [ ] **Check validation issues** — Address any flagged problems
 
### Approve or Iterate
 
- [ ] **Request changes** if anything wrong
- [ ] **Approve** when artifacts are correct
- [ ] **Save** approved artifacts for Step 3
 
---
 
## Quality Gates
 
### Exit Criteria
 
Before moving to Step 3 (Build), ensure:
 
- [ ] **All schemas valid**: Every entity compiles
- [ ] **All types valid**: No unknown field types
- [ ] **All relations valid**: References point to real entities
- [ ] **Navigation complete**: Every HLD page has route
- [ ] **Features mapped**: Clear implementation path
- [ ] **Human approved**: Explicit sign-off
 
### Common Pitfalls
 
| Pitfall | How PRINTER Handles |
|---------|----------------------|
| Invalid field type | Maps to closest valid, flags issue |
| Missing collection | Flags as validation issue |
| Orphan entity | Notes no page references it |
| Unmapped feature | Marks as "custom required" |

---

## Next Step Transition

### Handoff to Step 3 (Build)

- **Input**: Approved entity schemas + navigation + feature mapping
- **AI Context**: FORGER implements the app phase by phase
- **Human Preparation**: Set up dev environment, prepare to test each phase
