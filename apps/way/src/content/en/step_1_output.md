# WAI-WAY Step 1 Output: The Brainstorm

**Date**: 2026-01-13  
**Persona**: EXTRACTOR — Senior Requirements Engineer  
**Status**: ✅ COMPLETE

---

## Session Log

### Initial Question
**EXTRACTOR**: What are you building? Describe it in one or two sentences.

**USER**: I'm building the website for the wai-way. I'll have HomePage with a Roadmap component for each of the 4 steps, then one page of each of the step, showcasing the master prompt / the step.md and the example step.output from this experiment. I'd like a docs preset from the DoNotDev framework to have the routing in the sidebar automatically. The website will be in FR and EN.

### Follow-up Questions

**EXTRACTOR Q1**: You mentioned a "Roadmap component for each of the 4 steps" on the HomePage. Tell me more about that. What should users see in this roadmap? Is it interactive, or just informational?

**USER A1**: Just use the Roadmap from @donotdev/adv-comps

**EXTRACTOR Q2**: Got it—using the Roadmap component. Now, what content goes into each roadmap item? For example, for "Step 1: The Brainstorm"—what should the user see? Just the title? A description? An icon? A status indicator?

**USER A2**: For each step page I envision:
- HeroSection: Step Name + Subtitle for the description
- Section 1: Accordion with Master Prompt (using MarkdownViewer from @donotdev/templates for nice display + auto copy-to-clipboard)
- Section 2: Accordion with Step.md
- Section 3: Accordion with Step output (the documentation to be generated)
- FAQSection (@donotdev/core) for troubleshooting/FAQ
- All pages share this structure → create a StepTemplate for DRY code
- Build in hardcoded English first, translate after validation

**EXTRACTOR Q3**: Clear structure for step pages! Now, back to the HomePage—you mentioned a Roadmap component showing the 4 steps. Should clicking on a roadmap item **navigate to that step's page**? Or is the roadmap just visual?

**USER A3**: Yes, use onClick with the useNavigate from @donotdev/ui on each step of the Roadmap.

**EXTRACTOR Q4**: Perfect—roadmap items are clickable. Let's talk about **pages**. I've got: HomePage (with Roadmap), Step 1 Page, Step 2 Page, Step 3 Page, Step 4 Page. Are there any other pages? For example: About, Contact, Showcase, or anything else?

**USER A4**: Each Page/Step needs its own lucide icon: Brain for Brainstorm, CheckList for Review, Hammer for Build, Brush for Polish. Only the legal pages that France requires—those are natively handled by the framework, just update LegalLinks.

**EXTRACTOR Q5**: Great—icons noted and legal pages handled by framework. Let's talk about **users**. Who visits this website? Are there different roles (like admin vs visitor), or is everyone just a public visitor reading documentation?

**USER A5**: It's only a public website, free to use, free to read—my gift to the world. You're set to code I think. We'll build with Vite, native DoNotDev setup and deploy to Vercel.

**EXTRACTOR Q6**: Almost there! Just a few more questions. You mentioned **bilingual support (FR/EN)**. Should there be a language switcher component on the page? And should the URL change (like `/en/step-1` vs `/fr/step-1`) or just switch the content?

**USER A6**: It's handled natively by the framework (see SETUP_I18N.md).

**EXTRACTOR Q7**: Perfect—i18n is native. Let's clarify the **data/content**. The step pages will display: (1) Master Prompt from `step_X_prompts.md`, (2) Step description from `step_X.md`, (3) Step output from `step_X_output.md`. Are these files **static content** (just read and display), or do you need any dynamic features like searching, filtering, or user annotations?

**USER A7**: They are in guides/WAI-WAY, put them in the CDN, handle French and EN versions, copy into src/content.

**EXTRACTOR Q8**: Got it—static markdown files in src/content with FR/EN versions. For the **FAQSection** on each step page—do you already have FAQ content prepared, or should I leave placeholders for you to fill in later? If you have FAQ content, what kind of questions should each step's FAQ cover?

**USER A8**: You'll need to define the FAQ/Troubleshooting based on your experience/knowledge of methodology/prompting websites.

**EXTRACTOR Q9**: Understood—I'll create FAQ/Troubleshooting content. Let's talk about the **HomePage** in more detail. Besides the Roadmap component, what else should appear on the HomePage? For example: a hero section with title/description? Introduction text about WAI-WAY? Call-to-action buttons? Or is it just the Roadmap?

**USER A9**: I've already told you that! HeroSection with "WAI-WAY - With AI WAY of building webApps. Powered by the DoNotDev Framework (can be used standalone tho)". Then Roadmap. Then CallToAction to go to DoNotDev.com and ambroise-park.com - the tools/company behind the WAI-WAY.

**EXTRACTOR Q10**: You're right—apologies! I've got the HomePage structure now. Almost done! For the **Roadmap component**—what text should each step show? Step 1: "The Brainstorm" or something else? And what should the descriptions/subtitles be for each step?

**USER A10**: You summarize as best as possible the actual steps please.

**EXTRACTOR**: Based on the documentation:
- Step 1: "The Brainstorm" - Extract complete requirements through AI conversation
- Step 2: "The Review" - Transform design into technical specifications
- Step 3: "The Build" - Implement the app phase by phase
- Step 4: "The Polish" - Test, fix bugs, and ship

**EXTRACTOR Q11 (FINAL)**: Is there anything else this website needs that we haven't covered? Any special features, analytics, contact form, or constraints I should know about?

---

## Extraction Progress

- [x] Vision
- [x] Users
- [x] Entities
- [x] Features
- [x] Pages
- [x] Constraints

---

## Completion Summary

✅ **Step 1 Complete: The Brainstorm**

### What Was Extracted

**Vision**: A bilingual documentation website showcasing the WAI-WAY methodology for building web apps with AI.

**Users**: Public visitors only (no authentication)

**Pages**: 
- HomePage (Roadmap + Hero + CTA)
- 4 Step Pages (standardized template)
- Legal pages (framework-generated)

**Key Features**:
- Bilingual EN/FR support (framework-native)
- Interactive roadmap with navigation
- Markdown content display with copy-to-clipboard
- Per-step FAQ sections
- Docs preset with sidebar navigation

**Tech Stack**:
- DoNotDev Framework (Vite)
- Preset: docs
- Deployment: Vercel
- Icons: Brain, CheckList, Hammer, Brush (lucide-react)

**Content Structure**:
- StepTemplate component (DRY)
- Static markdown in src/content/
- FR/EN versions for all content

### Generated Artifacts

- ✅ `HLD.md` - Complete High-Level Design document
- ✅ `step_1_output.md` - This conversation log

### Success Criteria Met

- [x] Vision is one clear sentence
- [x] All user roles defined with permissions
- [x] All features tagged MVP or V2
- [x] All pages have routes and access levels
- [x] Platform, languages, deployment documented
- [x] No ambiguous requirements remaining

---

## Next Step

**Ready for Step 2: The Review**

PRINTER will transform this HLD into:
1. Entity schemas (none needed for this static site)
2. Navigation config (route definitions)
3. Feature mapping (which @donotdev packages to use)


# WAI-WAY Website

## Vision
A bilingual documentation website that teaches developers how to build web applications using AI through the WAI-WAY methodology, powered by the DoNotDev Framework.

## Users
| Role | Description | Permissions |
|------|-------------|-------------|
| Public Visitor | Anyone visiting the website | Read all documentation, switch languages, navigate between pages |

## Entities
No database entities required. This is a static documentation website with markdown content.

## Features

### Documentation Display
| Feature | Status | Notes |
|---------|--------|-------|
| Display WAI-WAY methodology steps | MVP | 4 steps with detailed documentation |
| Markdown rendering with syntax highlighting | MVP | Using MarkdownViewer from @donotdev/templates |
| Copy-to-clipboard for code blocks | MVP | Auto-included in MarkdownViewer |
| Accordion components for content sections | MVP | Master Prompt, Step Description, Step Output |
| FAQ/Troubleshooting sections | MVP | Per-step FAQs based on methodology knowledge |

### Navigation
| Feature | Status | Notes |
|---------|--------|-------|
| Sidebar navigation (docs preset) | MVP | Auto-generated from DoNotDev framework |
| Interactive roadmap on homepage | MVP | Clickable steps using useNavigate |
| Step icons (lucide-react) | MVP | Brain, CheckList, Hammer, Brush |

### Internationalization
| Feature | Status | Notes |
|---------|--------|-------|
| Bilingual support (EN/FR) | MVP | Framework-native i18n |
| Language switcher | MVP | Auto-included by framework |
| Translated content | MVP | All markdown files in both languages |

### Branding
| Feature | Status | Notes |
|---------|--------|-------|
| Hero sections per page | MVP | Title + subtitle |
| Call-to-action links | MVP | DoNotDev.com, ambroise-park.com |
| Legal pages | MVP | Framework auto-generated for France |

## Pages

| Route | Name | Purpose | Access | Key Components |
|-------|------|---------|--------|----------------|
| / | HomePage | Landing page with roadmap | public | HeroSection, Roadmap, CallToAction |
| /step-1 | Step1Page | The Brainstorm documentation | public | HeroSection, Accordion (Master Prompt), Accordion (Step.md), Accordion (Step Output), FAQSection |
| /step-2 | Step2Page | The Review documentation | public | HeroSection, Accordion (Master Prompt), Accordion (Step.md), Accordion (Step Output), FAQSection |
| /step-3 | Step3Page | The Build documentation | public | HeroSection, Accordion (Master Prompt), Accordion (Step.md), Accordion (Step Output), FAQSection |
| /step-4 | Step4Page | The Polish documentation | public | HeroSection, Accordion (Master Prompt), Accordion (Step.md), Accordion (Step Output), FAQSection |
| /legal/* | LegalPages | Privacy, Terms, etc. | public | Framework-generated |

## Constraints

| Constraint | Value | Notes |
|------------|-------|-------|
| Platform | Web (desktop + mobile) | Responsive design |
| Languages | EN, FR | Framework-native i18n |
| Framework | DoNotDev (Vite) | Native setup |
| Preset | docs | Sidebar navigation auto-generated |
| Auth | None | Fully public website |
| Deployment | Vercel | |
| External Links | DoNotDev.com, ambroise-park.com | Call-to-action targets |

## Content Structure

### Static Content Location
- Source: `c:\ws\wai\guides\WAI-WAY\`
- Deployed: `src/content/` (with EN/FR versions)

### Per-Step Content Files
1. **step_X.md** - Step methodology description
2. **step_X_prompts.md** - Master prompt for the step
3. **step_X_output.md** - Example output from this experiment

### Roadmap Content
- **Step 1**: "The Brainstorm" - Extract complete requirements through AI conversation (Brain icon)
- **Step 2**: "The Review" - Transform design into technical specifications (CheckList icon)
- **Step 3**: "The Build" - Implement the app phase by phase (Hammer icon)
- **Step 4**: "The Polish" - Test, fix bugs, and ship (Brush icon)

### HomePage Content
- **HeroSection**: "WAI-WAY - With AI WAY of building webApps"
- **Subtitle**: "Powered by the DoNotDev Framework (can be used standalone)"
- **Roadmap**: Interactive 4-step roadmap
- **CallToAction**: Links to DoNotDev.com and ambroise-park.com

### Step Page Template (DRY)
All step pages share this structure:
1. HeroSection (Step name + subtitle)
2. Accordion: Master Prompt (MarkdownViewer)
3. Accordion: Step Description (MarkdownViewer)
4. Accordion: Step Output (MarkdownViewer)
5. FAQSection (Troubleshooting)

None - ready to proceed to Step 2 (Review).
