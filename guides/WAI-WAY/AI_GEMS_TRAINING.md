# Training AI Gems for WAI-WAY

Guide for creating custom AI assistants (GPTs, Gemini, Claude) trained on WAI-WAY methodology.

---

## Overview

Each step needs its own AI gem. You'll create 4 separate assistants:
- **Step 1 Gem**: EXTRACTOR persona (Brainstorm)
- **Step 2 Gem**: PRINTER persona (Review)
- **Step 3 Gem**: FORGER persona (Build)
- **Step 4 Gem**: FINISHER persona (Polish)

---

## Content to Include

For each gem, include:

1. **Master Prompt** (from `step_X_prompts.md`)
2. **Step Instructions** (from `step_X.md`)
3. **Context about WAI-WAY** (see below)

### WAI-WAY Context (include in all gems)

```
WAI-WAY is a 4-step methodology for building web apps with AI:

Step 1: The Brainstorm (EXTRACTOR) - Extract requirements through conversation
Step 2: The Review (PRINTER) - Transform HLD into technical specs
Step 3: The Build (FORGER) - Implement app phase by phase
Step 4: The Polish (FINISHER) - Fix bugs and ship

Each step has a specific AI persona with defined behaviors and rules.
The methodology emphasizes conversation over forms, precision over speed, and minimal changes.
```

---

## Platform-Specific Instructions

### ChatGPT Custom GPTs

**Step 1: Create GPT**
1. Go to [chat.openai.com/gpts](https://chat.openai.com/gpts)
2. Click "Create" → "Create a GPT"
3. Use "Configure" tab (not "Create" conversation)

**Step 2: Configure**

**Name:**
- Step 1: "WAI-WAY EXTRACTOR - Requirements Engineer"
- Step 2: "WAI-WAY PRINTER - Framework Architect"
- Step 3: "WAI-WAY FORGER - DoNotDev Developer"
- Step 4: "WAI-WAY FINISHER - QA Engineer"

**Description:**
- Step 1: "Extracts complete HLD documents through adaptive conversation. Asks one question at a time, probes vague answers, challenges scope."
- Step 2: "Transforms HLD into DoNotDev framework technical specifications. Generates entity schemas, routes, feature mappings."
- Step 3: "Implements DoNotDev apps from specifications. Builds phase by phase: Entities → Routes → Auth → Pages → Features → Polish."
- Step 4: "Diagnoses and fixes bugs with minimal changes. Verifies fixes, checks for regressions."

**Instructions (paste full master prompt here):**
```
[Copy entire content from guides/WAI-WAY/step_X_prompts.md]
[Include the full <persona>, <mission>, <rules>, etc. sections]
```

**Knowledge Base:**
- Upload `guides/WAI-WAY/step_X.md` (step instructions)
- Optionally upload all WAI-WAY guides for context

**Conversation Starters:**
- Step 1: "What are you building? Describe it in one or two sentences."
- Step 2: "I'll paste my HLD below. Transform it into technical artifacts."
- Step 3: "I'll paste my approved specifications. Start with Phase 1 (Entities)."
- Step 4: "I'll report bugs below. For each one, diagnose and provide a minimal fix."

**Step 3: Save & Share**
1. Click "Save" → "Only me" or "Anyone with a link"
2. Copy the share link (format: `https://chat.openai.com/g/g-XXXXX`)
3. Update `apps/way/src/config/ai-gems.ts` with the link

---

### Google Gemini Custom Assistants

**Step 1: Create Assistant**
1. Go to [aistudio.google.com/app/assistants](https://aistudio.google.com/app/assistants)
2. Click "Create" → "New Assistant"

**Step 2: Configure**

**Name & Description:**
- Same as ChatGPT above

**Instructions:**
- Paste full master prompt from `step_X_prompts.md`
- Include all sections: `<persona>`, `<mission>`, `<rules>`, etc.

**Knowledge:**
- Click "Add knowledge"
- Upload `guides/WAI-WAY/step_X.md`
- Optionally add other WAI-WAY guides

**Step 3: Save & Share**
1. Click "Save"
2. Click "Share" → Copy link
3. Update `apps/way/src/config/ai-gems.ts` with the link

**Note:** Gemini assistant links format: `https://gemini.google.com/app/XXXXX`

---

### Claude Custom Assistants

**Step 1: Create Assistant**
1. Go to [claude.ai/assistants](https://claude.ai/assistants)
2. Click "Create Assistant"

**Step 2: Configure**

**Name:**
- Same as ChatGPT above

**Instructions:**
- Paste full master prompt from `step_X_prompts.md`
- Include complete prompt with all XML-style sections

**Knowledge:**
- Click "Add Knowledge"
- Upload `guides/WAI-WAY/step_X.md`
- Add other WAI-WAY files for context

**Step 3: Save & Share**
1. Click "Save"
2. Copy the assistant URL
3. Update `apps/way/src/config/ai-gems.ts` with the link

**Note:** Claude assistant links format: `https://claude.ai/chat/XXXXX`

---

## Content Checklist

For each gem, ensure you include:

### Step 1 (EXTRACTOR)
- [ ] Full master prompt from `step_1_prompts.md`
- [ ] Step instructions from `step_1.md`
- [ ] WAI-WAY context (4-step overview)
- [ ] Field types reference
- [ ] HLD output format

### Step 2 (PRINTER)
- [ ] Full master prompt from `step_2_prompts.md`
- [ ] Step instructions from `step_2.md`
- [ ] DoNotDev framework knowledge (entity system, packages)
- [ ] Field types and validation rules
- [ ] Output format (schemas, routes, mapping)

### Step 3 (FORGER)
- [ ] Full master prompt from `step_3_prompts.md`
- [ ] Step instructions from `step_3.md`
- [ ] DoNotDev framework patterns
- [ ] Implementation phases
- [ ] Code standards

### Step 4 (FINISHER)
- [ ] Full master prompt from `step_4_prompts.md`
- [ ] Step instructions from `step_4.md`
- [ ] Common DoNotDev bugs reference
- [ ] Bug fix process
- [ ] Ship readiness criteria

---

## Testing Your Gems

After creating each gem, test it:

**Step 1 Gem Test:**
```
What are you building? Describe it in one or two sentences.

[User]: I want to build a task manager for teams.
```
Expected: AI asks ONE question at a time, probes answers, generates HLD.

**Step 2 Gem Test:**
```
I'll paste my HLD below. Transform it into technical artifacts.

---
HLD START
---
[Paste a simple HLD]
```
Expected: AI generates entity schemas, routes, feature mapping.

**Step 3 Gem Test:**
```
I'll paste my approved specifications. Start with Phase 1 (Entities).

---
SPECIFICATIONS START
---
[Paste Step 2 artifacts]
```
Expected: AI builds phase by phase, waits for "continue".

**Step 4 Gem Test:**
```
I'll report bugs below. For each one, diagnose and provide a minimal fix.

---
BUG REPORTS START
---
**Bug:** Projects list is empty
**Steps:** Go to /dashboard
**Expected:** See projects
**Actual:** Empty list
```
Expected: AI diagnoses, provides minimal fix, checks regressions.

---

## Updating the Config

Once you have all gem URLs:

1. Open `apps/way/src/config/ai-gems.ts`
2. Replace placeholder URLs:

```typescript
export const aiGems: Record<number, AIGemUrls> = {
    1: {
        gpt: 'https://chat.openai.com/g/g-ACTUAL_ID',
        gemini: 'https://gemini.google.com/app/ACTUAL_ID',
        claude: 'https://claude.ai/chat/ACTUAL_ID',
    },
    // ... repeat for steps 2, 3, 4
};
```

3. Save and deploy

---

## Tips

**For Better Results:**
- Include complete master prompts (don't truncate)
- Upload step instructions as knowledge base files
- Test each gem before sharing
- Use clear, descriptive names

**Common Issues:**
- **Gem doesn't follow persona**: Ensure master prompt is complete
- **Gem asks multiple questions**: Remind it "one question at a time"
- **Gem generates code in Step 1**: Remind it "requirements only, no code"
- **Gem adds features not in spec**: Remind it "only what's specified"

**Maintenance:**
- Update gems when methodology changes
- Test after platform updates
- Keep master prompts in sync with `guides/WAI-WAY/`

---

## Quick Reference: File Locations

- Master Prompts: `guides/WAI-WAY/step_X_prompts.md`
- Step Instructions: `guides/WAI-WAY/step_X.md`
- Config File: `apps/way/src/config/ai-gems.ts`
- This Guide: `guides/WAI-WAY/AI_GEMS_TRAINING.md`
