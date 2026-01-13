# WAI-WAY Step 2 Output: The Review

**Date**: 2026-01-13  
**Persona**: PRINTER — Framework Architect  
**Status**: ✅ COMPLETE

---

## 1. Entity Schemas

**Note**: This is a static documentation website with no database entities. All content is stored as markdown files.

No entity schemas required.

---

## 2. Navigation Config

```typescript
// src/config/routes.ts
import type { RouteConfig } from '@donotdev/core';
import { Brain, CheckSquare, Hammer, Paintbrush, Home } from 'lucide-react';

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    icon: Home,
    access: 'public',
    layout: 'docs',
  },
  {
    path: '/step-1',
    name: 'Step 1: Brainstorm',
    icon: Brain,
    access: 'public',
    layout: 'docs',
  },
  {
    path: '/step-2',
    name: 'Step 2: Review',
    icon: CheckSquare,
    access: 'public',
    layout: 'docs',
  },
  {
    path: '/step-3',
    name: 'Step 3: Build',
    icon: Hammer,
    access: 'public',
    layout: 'docs',
  },
  {
    path: '/step-4',
    name: 'Step 4: Polish',
    icon: Paintbrush,
    access: 'public',
    layout: 'docs',
  },
];
```

---

## 3. Page Structure & Components

### HomePage.tsx

```typescript
import { PageContainer } from '@donotdev/ui';
import { HeroSection, CallToAction } from '@donotdev/components';
import { Roadmap } from '@donotdev/adv-comps';
import { useNavigate } from '@donotdev/ui';
import { Brain, CheckSquare, Hammer, Paintbrush } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  const roadmapSteps = [
    {
      phase: '1',
      title: 'The Brainstorm',
      subtitle: 'Extract complete requirements through AI conversation',
      icon: Brain,
      onClick: () => navigate('/step-1'),
    },
    {
      phase: '2',
      title: 'The Review',
      subtitle: 'Transform design into technical specifications',
      icon: CheckSquare,
      onClick: () => navigate('/step-2'),
    },
    {
      phase: '3',
      title: 'The Build',
      subtitle: 'Implement the app phase by phase',
      icon: Hammer,
      onClick: () => navigate('/step-3'),
    },
    {
      phase: '4',
      title: 'The Polish',
      subtitle: 'Test, fix bugs, and ship',
      icon: Paintbrush,
      onClick: () => navigate('/step-4'),
    },
  ];

  return (
    <PageContainer>
      <HeroSection
        title="WAI-WAY"
        subtitle="With AI WAY of building webApps"
        description="Powered by the DoNotDev Framework (can be used standalone)"
        variant="primary"
      />

      <Roadmap steps={roadmapSteps} />

      <CallToAction
        title="Built With"
        subtitle="The tools and company behind WAI-WAY"
        primaryAction={{
          label: 'DoNotDev Framework',
          href: 'https://donotdev.com',
          external: true,
        }}
        secondaryAction={{
          label: 'Ambroise Park',
          href: 'https://ambroise-park.com',
          external: true,
        }}
      />
    </PageContainer>
  );
}
```

### StepTemplate.tsx (Reusable Component)

```typescript
import { PageContainer } from '@donotdev/ui';
import { HeroSection, Section, Accordion, FAQSection } from '@donotdev/components';
import { MarkdownViewer } from '@donotdev/templates';

interface StepTemplateProps {
  stepNumber: number;
  title: string;
  subtitle: string;
  masterPromptContent: string;
  stepDescriptionContent: string;
  stepOutputContent: string;
  faqs: Array<{ question: string; answer: string }>;
}

export function StepTemplate({
  stepNumber,
  title,
  subtitle,
  masterPromptContent,
  stepDescriptionContent,
  stepOutputContent,
  faqs,
}: StepTemplateProps) {
  return (
    <PageContainer>
      <HeroSection
        title={`Step ${stepNumber}: ${title}`}
        subtitle={subtitle}
        variant="secondary"
      />

      <Section>
        <Accordion title="Master Prompt" defaultOpen>
          <MarkdownViewer content={masterPromptContent} />
        </Accordion>
      </Section>

      <Section>
        <Accordion title="Step Instructions">
          <MarkdownViewer content={stepDescriptionContent} />
        </Accordion>
      </Section>

      <Section>
        <Accordion title="Example Output">
          <MarkdownViewer content={stepOutputContent} />
        </Accordion>
      </Section>

      <Section>
        <FAQSection items={faqs} title="Troubleshooting & FAQ" />
      </Section>
    </PageContainer>
  );
}
```

### Step1Page.tsx (Example - others follow same pattern)

```typescript
import { StepTemplate } from '@/components/StepTemplate';
import step1Prompts from '@/content/en/step_1_prompts.md';
import step1Description from '@/content/en/step_1.md';
import step1Output from '@/content/en/step_1_output.md';

export default function Step1Page() {
  const faqs = [
    {
      question: 'How long does the brainstorm typically take?',
      answer: 'Typically 10-20 minutes for a complete HLD extraction.',
    },
    {
      question: 'What if the AI asks too many questions at once?',
      answer: 'Remind it: "One question at a time please." The EXTRACTOR persona should ask one focused question and wait for your answer.',
    },
    {
      question: 'Can I say "I don\'t know" to questions?',
      answer: 'Absolutely! EXTRACTOR will mark it as an "Open Question" and continue. You can decide later or leave it for V2.',
    },
    {
      question: 'What if I forgot something important?',
      answer: 'You can always go back to the HLD and add it before Step 2. The process is iterative.',
    },
    {
      question: 'Does this only work with DoNotDev Framework?',
      answer: 'No! The WAI-WAY methodology works with any tech stack. DoNotDev just makes Steps 2-3 faster with its conventions.',
    },
  ];

  return (
    <StepTemplate
      stepNumber={1}
      title="The Brainstorm"
      subtitle="Extract complete requirements through AI conversation"
      masterPromptContent={step1Prompts}
      stepDescriptionContent={step1Description}
      stepOutputContent={step1Output}
      faqs={faqs}
    />
  );
}
```

---

## 4. Content Structure

```
src/
├── content/
│   ├── en/
│   │   ├── step_1.md
│   │   ├── step_1_prompts.md
│   │   ├── step_1_output.md
│   │   ├── step_2.md
│   │   ├── step_2_prompts.md
│   │   ├── step_2_output.md
│   │   ├── step_3.md
│   │   ├── step_3_prompts.md
│   │   ├── step_3_output.md
│   │   ├── step_4.md
│   │   ├── step_4_prompts.md
│   │   ├── step_4_output.md
│   │   └── HLD.md
│   └── fr/
│       ├── step_1.md
│       ├── step_1_prompts.md
│       ├── step_1_output.md
│       └── ... (same as EN, translated)
├── components/
│   └── StepTemplate.tsx
└── pages/
    ├── HomePage.tsx
    ├── Step1Page.tsx
    ├── Step2Page.tsx
    ├── Step3Page.tsx
    └── Step4Page.tsx
```

---

## 5. Feature Mapping

| HLD Feature | Implementation | Package |
|-------------|----------------|---------|
| Markdown rendering with syntax highlighting | MarkdownViewer component | @donotdev/templates |
| Copy-to-clipboard for code blocks | Built into MarkdownViewer | @donotdev/templates |
| Accordion components | Accordion component | @donotdev/components |
| FAQ sections | FAQSection component | @donotdev/components |
| Hero sections | HeroSection component | @donotdev/components |
| Interactive roadmap | Roadmap component | @donotdev/adv-comps |
| Navigation (useNavigate) | useNavigate hook | @donotdev/ui |
| Sidebar navigation (docs preset) | Auto-generated from routes | @donotdev/ui |
| Bilingual support (EN/FR) | Framework i18n system | @donotdev/core |
| Language switcher | Auto-included in docs preset | @donotdev/ui |
| Legal pages | Framework auto-generation | @donotdev/core |
| Icons | lucide-react icons | lucide-react |
| Call-to-action links | CallToAction component | @donotdev/components |
| Page layouts | PageContainer component | @donotdev/ui |
| Sections | Section component | @donotdev/components |

---

## 6. App Configuration

### src/config/app.ts

```typescript
import type { AppConfig } from '@donotdev/core';

export const appConfig: AppConfig = {
  preset: 'docs',
  app: {
    name: 'WAI-WAY',
    url: 'https://wai-way.com',
    description: 'With AI WAY of building webApps',
    tagline: 'Powered by the DoNotDev Framework',
  },
  i18n: {
    defaultLanguage: 'en',
    supportedLanguages: ['en', 'fr'],
  },
};
```

### src/config/legal.ts

```typescript
export const legalConfig = {
  country: 'FR',
  companyName: 'Ambroise Park',
  // Framework will auto-generate required French legal pages
};
```

---

## 7. Validation Issues

### ✅ All Valid

No validation issues found. The HLD is complete and maps cleanly to DoNotDev Framework components.

**Checks Passed:**
- ✅ All routes defined
- ✅ All features mapped to framework packages
- ✅ All components available in framework
- ✅ i18n configuration valid
- ✅ No database entities needed (static site)
- ✅ Preset 'docs' supports sidebar navigation
- ✅ All icons available in lucide-react

---

## 8. Additional Notes

### HLD Display
Per user request, `HLD.md` should also be displayed in the app. Suggested implementation:

**Option A**: Add HLD as a separate page
```typescript
// Add to routes
{
  path: '/hld',
  name: 'High-Level Design',
  icon: FileText,
  access: 'public',
  layout: 'docs',
}
```

**Option B**: Include HLD in Step 1's accordions
```typescript
<Accordion title="High-Level Design (HLD)">
  <MarkdownViewer content={hldContent} />
</Accordion>
```

Recommendation: **Option A** - Separate page for better discoverability.

---

## Summary

**Ready for Step 3 (Build)**

All specifications are framework-compliant and ready for implementation:

✅ **5 pages** (HomePage + 4 Step Pages)  
✅ **1 reusable component** (StepTemplate)  
✅ **Docs preset** with sidebar navigation  
✅ **Bilingual support** (EN/FR)  
✅ **All DoNotDev components** identified  
✅ **No custom code** needed beyond page composition  

**Estimated implementation**: ~2-3 hours (mostly content translation)

---

