# WAI-WAY Étape 2 Sortie : La Revue

**Date** : 2026-01-13  
**Persona** : PRINTER — Architecte Framework  
**Statut** : ✅ COMPLET

---

## 1. Schémas d'Entités

**Note** : C'est un site de documentation statique sans base de données. Tout le contenu est stocké sous forme de fichiers markdown.

Aucun schéma d'entité requis.

---

## 2. Config de Navigation

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

## 3. Structure de Page & Composants

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

### StepTemplate.tsx (Composant Réutilisable)

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

### Step1Page.tsx (Exemple - les autres suivent le même modèle)

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

## 4. Structure de Contenu

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

## 5. Mapping de Fonctionnalités

| Fonctionnalité HLD | Implémentation | Package |
|--------------------|----------------|---------|
| Rendu Markdown avec coloration syntaxique | Composant MarkdownViewer | @donotdev/templates |
| Copier-coller pour les blocs de code | Inclus dans MarkdownViewer | @donotdev/templates |
| Composants Accordéon | Composant Accordéon | @donotdev/components |
| Sections FAQ | Composant FAQSection | @donotdev/components |
| Sections Hero | Composant HeroSection | @donotdev/components |
| Roadmap interactive | Composant Roadmap | @donotdev/adv-comps |
| Navigation (useNavigate) | Hook useNavigate | @donotdev/ui |
| Navigation latérale (preset docs) | Généré auto depuis les routes | @donotdev/ui |
| Support bilingue (EN/FR) | Système i18n framework | @donotdev/core |
| Sélecteur de langue | Inclus dans docs preset | @donotdev/ui |
| Pages légales | Auto-génération framework | @donotdev/core |
| Icônes | Icônes lucide-react | lucide-react |
| Liens d'appel à l'action | Composant CallToAction | @donotdev/components |
| Mises en page | Composant PageContainer | @donotdev/ui |
| Sections | Composant Section | @donotdev/components |

---

## 6. Configuration de l'App

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

## 7. Problèmes de Validation

### ✅ Tout est Valide

Aucun problème de validation trouvé. Le HLD est complet et correspond proprement aux composants du Framework DoNotDev.

**Vérifications Passées :**
- ✅ Toutes les routes définies
- ✅ Toutes les fonctionnalités mappées aux packages framework
- ✅ Tous les composants disponibles dans le framework
- ✅ Configuration i18n valide
- ✅ Aucune entité de base de données nécessaire (site statique)
- ✅ Preset 'docs' supporte la navigation latérale
- ✅ Toutes les icônes disponibles dans lucide-react

---

## 8. Notes Additionnelles

### Affichage HLD
Selon demande utilisateur, `HLD.md` doit aussi être affiché dans l'app. Implémentation suggérée :

**Option A**: Ajouter HLD comme page séparée
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

**Option B**: Inclure HLD dans les accordéons de l'Étape 1
```typescript
<Accordion title="High-Level Design (HLD)">
  <MarkdownViewer content={hldContent} />
</Accordion>
```

Recommandation : **Option A** - Page séparée pour meilleure découvrabilité.

---

## Résumé

**Prêt pour l'Étape 3 (Build)**

Toutes les spécifications sont conformes au framework et prêtes pour l'implémentation :

✅ **5 pages** (HomePage + 4 Pages d'Étape)  
✅ **1 composant réutilisable** (StepTemplate)  
✅ **Preset docs** avec navigation latérale  
✅ **Support bilingue** (EN/FR)  
✅ **Tous les composants DoNotDev** identifiés  
✅ **Estimation d'implémentation** : ~2-3 heures (principalement traduction de contenu)
