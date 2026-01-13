# WAI-WAY Step 1: The Brainstorm

## Overview

**Purpose**: Extract a complete HLD (High-Level Design) from the user through adaptive conversation.
**RACI**: Human=Accountable, AI=Responsible
**Persona**: EXTRACTOR — Senior Requirements Engineer

---

## What Happens

You have an app idea. EXTRACTOR extracts it from your head through targeted questions—not a rigid checklist, but an adaptive conversation that probes deeper on every answer.

**EXTRACTOR asks. You answer. EXTRACTOR generates HLD.**

### Why Conversation, Not Forms?

- You don't know what you don't know
- Good requirements come from probing, not checklists
- AI can catch gaps you'd miss filling out a form

### AI Persona: EXTRACTOR

**Role:** Senior Requirements Engineer
**Mindset:** "Extract what's in their head. Fill every gap. Challenge every assumption."

**Behaviors:**

- **Curious:** Digs deeper on every answer
- **Skeptical:** Challenges vague statements
- **Organized:** Tracks what's learned and what's missing
- **Honest:** Asks for clarification when uncertain rather than guessing

**EXTRACTOR focuses on:**

- Probing until answers are specific and complete
- Extracting requirements through conversation, not generating code
- Capturing what the user wants, not adding own ideas
- Adapting questions based on their answers, not following a rigid checklist

---

## Input Requirements

- An app idea (any level of clarity)
- Access to an AI (Claude, ChatGPT, Gemini, etc.)
- Time for conversation (typically 10-20 minutes)

## Output Deliverable

- **`HLD.md`** — Complete High-Level Design document containing:
  - Vision (one sentence)
  - Users (roles and permissions)
  - Entities (data models with fields)
  - Features (MVP vs V2)
  - Pages (routes and access levels)
  - Constraints (platform, languages, integrations)

---

## What EXTRACTOR Extracts

| Category | What EXTRACTOR Asks |
|----------|-----------------|
| **Vision** | What is this app? Who uses it? |
| **Users** | What roles exist? What can each role do? |
| **Entities** | What "things" exist? What fields? How do they relate? |
| **Features** | What can users DO? MVP or V2? |
| **Pages** | What screens? What routes? Who can access? |
| **Constraints** | Mobile? Languages? Auth providers? Integrations? |

---

## Success Criteria

- [ ] Vision is one clear sentence
- [ ] All user roles defined with permissions
- [ ] Every entity has fields with types
- [ ] Every reference field points to an existing entity
- [ ] Every select field has its options listed
- [ ] All features tagged MVP or V2
- [ ] All pages have routes and access levels
- [ ] Platform, languages, auth, integrations documented
- [ ] No ambiguous requirements remaining

---

## Human Todo List

### During Brainstorm

- [ ] **Answer honestly** — Say what's in your head without overthinking
- [ ] **Say "I don't know"** — EXTRACTOR will mark it as open question
- [ ] **Challenge back** — If EXTRACTOR misunderstands, correct it
- [ ] **Focus on MVP** — When scope grows, ask "What's minimum to launch?"

### After Brainstorm

- [ ] **Review HLD** — Read the full document (~5 min)
- [ ] **Check entities** — Are all fields there? Types correct?
- [ ] **Check features** — MVP vs V2 right?
- [ ] **Save as HLD.md** — For Step 2

---

## Quality Gates

### Exit Criteria

Before moving to Step 2 (Review), ensure:

- [ ] **Vision complete**: Can state app purpose in one sentence
- [ ] **Entities complete**: All entities have fields with types
- [ ] **Relations defined**: All reference fields point to valid entities
- [ ] **Features scoped**: MVP vs V2 clearly distinguished
- [ ] **Pages mapped**: All routes documented
- [ ] **Constraints captured**: Platform, i18n, integrations noted

### Common Pitfalls

| Pitfall | How to Avoid |
|---------|--------------|
| Vague entities | EXTRACTOR will probe: "What fields does X have?" |
| Missing relations | EXTRACTOR will ask: "How does X relate to Y?" |
| Scope creep | EXTRACTOR will challenge: "Is this MVP or V2?" |
| Assumed features | EXTRACTOR makes you say it explicitly |
| Orphan pages | EXTRACTOR checks navigation flow |

---

## Next Step Transition

### Handoff to Step 2 (Review)

- **Input**: `HLD.md`
- **AI Context**: PRINTER transforms HLD into entity schemas, routes, feature mapping
- **Human Preparation**: Review HLD one more time before technical transformation
