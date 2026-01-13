# WAI-WAY Step 3: The Build

## Overview

**Purpose**: Implement the app according to validated specifications.
**RACI**: Human=Accountable, AI=Responsible
**Persona**: FORGER — Senior DoNotDev Developer

---

## What Happens

FORGER takes your approved artifacts and builds the app phase by phase:

1. **Entities** → Create all defineEntity files
2. **Routes** → Set up navigation configuration
3. **Auth** → Configure authentication (if needed)
4. **Pages** → Create page components
5. **Features** → Wire up functionality
6. **Polish** → Loading states, error handling

**You verify each phase. FORGER proceeds when you say "continue".**

### Why Phase by Phase?

- Catch errors early (before 50 files exist)
- Easier to verify small chunks
- Human stays in control

### AI Persona: FORGER

**Role:** Senior DoNotDev Developer
**Mindset:** "Build exactly what's specified. Framework first. No extras."

**Behaviors:**

- **Precise:** Builds exactly what's in spec
- **Framework-First:** Checks for existing components before writing new
- **Incremental:** Phase by phase, not everything at once
- **Self-Correcting:** Catches and fixes own errors

**FORGER focuses on:**

- Building only features specified in the spec
- Writing code that works, keeping explanations minimal
- Delivering good enough solutions that meet requirements
- Testing each phase before proceeding to the next

---

## Input Requirements

- Approved entity schemas from Step 2
- Approved navigation config from Step 2
- Approved feature mapping from Step 2

## Output Deliverables

- **Working code** committed to repository
- **Entity files** in `entities/` directory
- **Page components** in `src/pages/` or `src/app/`
- **Route configuration** updated
- **All MVP features functional**

---

## Implementation Phases

| Phase | What FORGER Does | Checkpoint |
|-------|-----------------|------------|
| **1. Entities** | Create defineEntity files + index | Files exist, no TS errors |
| **2. Routes** | Create route configuration | Valid TypeScript |
| **3. Auth** | Configure providers, auth pages | Can login/logout |
| **4. Pages** | Create all page components | All pages render |
| **5. Features** | Wire CRUD, custom features | All features work |
| **6. Polish** | Loading states, errors, 404 | App complete |

---

## Success Criteria

- [ ] All entities implemented as specified
- [ ] All pages created with specified components
- [ ] All MVP features functional
- [ ] Code follows framework conventions
- [ ] No TypeScript errors
- [ ] App runs without crashes
- [ ] Loading states present
- [ ] Error handling present

---

## Human Todo List

### During Build

- [ ] **Verify each phase** — Check files created correctly
- [ ] **Run TypeScript check** — `npx tsc --noEmit`
- [ ] **Test functionality** — Try the app as features are built
- [ ] **Say "continue"** — When phase checkpoint passes

### After Build

- [ ] **Full test** — Test all MVP features
- [ ] **Document bugs** — For Step 4
- [ ] **Approve** — Ready for Polish

---

## Quality Gates

### Phase Checkpoints

**After Phase 1 (Entities)**
```bash
ls entities/        # All files exist
npx tsc --noEmit    # No TypeScript errors
```

**After Phase 3 (Auth)**
- [ ] Can register new user
- [ ] Can login
- [ ] Can logout
- [ ] Protected routes redirect

**After Phase 4 (Pages)**
- [ ] All pages render without errors
- [ ] Navigation works between pages

**After Phase 5 (Features)**
- [ ] CRUD operations work
- [ ] Custom features work
- [ ] Data persists correctly

**After Phase 6 (Polish)**
- [ ] Loading spinners show
- [ ] Errors display gracefully
- [ ] 404 page works

---

## Common Pitfalls

### FORGER adds features
- **Solution**: Say: "Remove [feature]. Only build what's in the spec."

### FORGER skips phases
- **Solution**: Say: "Complete Phase N first."

### Wrong imports
- **Solution**: Say: "Use @donotdev/[package]"

### Type errors
- **Solution**: Say: "Fix error: [message]"

### Context lost
- **Solution**: Say: "We completed 1-N. Continue from Phase N+1."

---

## Next Step Transition

### Handoff to Step 4 (Polish)

- **Input**: Working app with all MVP features
- **AI Context**: FINISHER fixes bugs you report from testing
- **Human Preparation**: Test thoroughly, document bugs
