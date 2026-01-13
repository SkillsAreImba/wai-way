import { PageContainer, useNavigate, Link, tList } from '@donotdev/ui';
import { useTranslation } from '@donotdev/core';
import { HeroSection, CallToAction, Button } from '@donotdev/components';
import { Roadmap } from '@donotdev/adv-comps';
import { Brain, CheckSquare, Hammer, Paintbrush, Home, ExternalLink } from 'lucide-react';
import type { PageMeta } from '@donotdev/core';

export const NAMESPACE = 'home';

export const meta: PageMeta = {
  namespace: NAMESPACE,
  icon: <Home />,
};

export default function HomePage() {
  const navigate = useNavigate();
  const { t } = useTranslation(NAMESPACE);

  const roadmapSteps = [
    {
      phase: t('steps.1.phase', 'EXTRACTOR'),
      title: t('steps.1.title', 'The Brainstorm'),
      subtitle: t('steps.1.subtitle', 'Senior Requirements Engineer'),
      content: tList(t, 'steps.1.deliverables', 3),
      icon: Brain,
      onClick: () => navigate('/step1'),
    },
    {
      phase: t('steps.2.phase', 'PRINTER'),
      title: t('steps.2.title', 'The Review'),
      subtitle: t('steps.2.subtitle', 'Framework Architect'),
      content: tList(t, 'steps.2.deliverables', 4),
      icon: CheckSquare,
      onClick: () => navigate('/step2'),
    },
    {
      phase: t('steps.3.phase', 'FORGER'),
      title: t('steps.3.title', 'The Build'),
      subtitle: t('steps.3.subtitle', 'Senior DoNotDev Developer'),
      content: tList(t, 'steps.3.deliverables', 4),
      icon: Hammer,
      onClick: () => navigate('/step3'),
    },
    {
      phase: t('steps.4.phase', 'FINISHER'),
      title: t('steps.4.title', 'The Polish'),
      subtitle: t('steps.4.subtitle', 'QA Engineer & Bug Fixer'),
      content: tList(t, 'steps.4.deliverables', 4),
      icon: Paintbrush,
      onClick: () => navigate('/step4'),
    },
  ];

  return (
    <PageContainer>
      <HeroSection
        title={t('hero.title', 'WAI-WAY')}
        subtitle={t('hero.subtitle', 'With AI WAY of building webApps - Powered by the DoNotDev Framework')}
        variant="primary"
      />

      <Roadmap steps={roadmapSteps} />

      <CallToAction
        title={t('cta.title', 'Built With')}
        subtitle={t('cta.subtitle', 'The tools and company behind WAI-WAY')}
        primaryAction={
          <Button
            icon={ExternalLink}
            iconEnd
            render={({ children, ...props }) => (
              <Link path="https://donotdev.com" {...props}>
                {children}
              </Link>
            )}
          >
            {t('cta.donotdev', 'DoNotDev Framework')}
          </Button>
        }
        secondaryAction={
          <Button
            variant="outline"
            icon={ExternalLink}
            iconEnd
            render={({ children, ...props }) => (
              <Link path="https://ambroise-park.com" {...props}>
                {children}
              </Link>
            )}
          >
            {t('cta.ambroise', 'Ambroise Park')}
          </Button>
        }
      />
    </PageContainer>
  );
}
