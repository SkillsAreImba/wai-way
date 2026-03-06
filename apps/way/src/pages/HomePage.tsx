'use client';

import { useTranslation } from '@donotdev/core';
import { tList } from '@donotdev/ui';
import { PageContainer, FeatureCard, Link } from '@donotdev/ui';
import {
  HeroSection,
  Section,
  CallToAction,
  Button,
  Roadmap,
  Reveal,
  Stack,
  Grid,
} from '@donotdev/components';
import type { RoadmapStep } from '@donotdev/components';
import {
  Brain,
  Layout,
  Database,
  Code,
  Settings,
  Server,
  Terminal,
  ShieldCheck,
  Kanban,
  FileText,
  RotateCcw,
  ExternalLink,
  AlertTriangle,
  Users,
} from 'lucide-react';

const NAMESPACE = 'home';

const phaseIcons = [Brain, Layout, Database, Code, Settings] as const;
const phaseKeys = ['0', '1', '2', '3', '4'] as const;

const toolkitKeys = ['mcp', 'skills', 'grill', 'kanban', 'specs', 'lessons'] as const;
const toolkitIcons = [Server, Terminal, ShieldCheck, Kanban, FileText, RotateCcw] as const;

export default function HomePage() {
  const { t } = useTranslation(NAMESPACE);

  const protocolSteps: RoadmapStep[] = phaseKeys.map((key, i) => ({
    phase: `P${i}`,
    icon: phaseIcons[i],
    title: t(`protocol.phases.${key}.title`).split(' — ')[1],
    subtitle: t(`protocol.phases.${key}.subtitle`),
    description: t(`protocol.phases.${key}.outcome`),
    content: tList(t, `protocol.phases.${key}.items`, 6),
  }));

  return (
    <PageContainer>
      {/* 1. Hero */}
      <HeroSection
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        badge={t('hero.badge')}
        variant="primary"
      >
        <Button
          variant="primary"
          icon={ExternalLink}
          iconEnd
          render={({ children, ...props }) => (
            <Link path="https://donotdev.com" target="_blank" {...props}>{children}</Link>
          )}
        >
          {t('hero.btnDoNotDev')}
        </Button>
        <Button
          variant="outline"
          icon={ExternalLink}
          iconEnd
          render={({ children, ...props }) => (
            <Link path="https://github.com/AmboisePark/donotdev" target="_blank" {...props}>{children}</Link>
          )}
        >
          {t('hero.btnGitHub')}
        </Button>
      </HeroSection>

      {/* 2. The Problem */}
      <Section title={t('problem.title')} icon={AlertTriangle} tone="muted" align="center">
        <Stack align="center" style={{ maxWidth: 700, margin: '0 auto' }}>
          {tList(t, 'problem.items', 4)}
        </Stack>
      </Section>

      {/* 3. The Protocol — Vertical Roadmap, centered */}
      <Section title={t('protocol.title')} subtitle={t('protocol.subtitle')} align="center">
        <Stack align="center" style={{ maxWidth: 700, margin: '0 auto' }}>
          <Roadmap
            steps={protocolSteps}
            layout="vertical"
            variant="glass"
          />
        </Stack>
      </Section>

      {/* 4. The Toolkit — FeatureCards */}
      <Section title={t('toolkit.title')} subtitle={t('toolkit.subtitle')} tone="muted">
        <Grid cols={[1, 1, 2, 3]}>
          {toolkitKeys.map((key, i) => (
            <Reveal
              key={key}
              direction="bottom"
              stagger={150 * i}
              items={[
                <FeatureCard
                  key={key}
                  icon={toolkitIcons[i]}
                  title={t(`toolkit.features.${key}.title`)}
                  subtitle={t(`toolkit.features.${key}.subtitle`)}
                  content={tList(t, `toolkit.features.${key}.items`, 4)}
                  variant="glass"
                />,
              ]}
            />
          ))}
        </Grid>
      </Section>

      {/* 5. Who It's For */}
      <Section title={t('audience.title')} icon={Users} align="center">
        <Stack align="center" style={{ maxWidth: 700, margin: '0 auto' }}>
          <p>{t('audience.subtitle')}</p>
        </Stack>
      </Section>

      {/* 6. CTA */}
      <CallToAction
        title={t('cta.title')}
        subtitle={t('cta.subtitle')}
        primaryAction={
          <Button
            variant="primary"
            icon={ExternalLink}
            iconEnd
            render={({ children, ...props }) => (
              <Link path="https://donotdev.com" target="_blank" {...props}>{children}</Link>
            )}
          >
            {t('cta.btnInstall')}
          </Button>
        }
        secondaryAction={
          <Button
            variant="outline"
            icon={ExternalLink}
            iconEnd
            render={({ children, ...props }) => (
              <Link path="https://github.com/DoNotDev/cli" target="_blank" {...props}>{children}</Link>
            )}
          >
            {t('cta.btnGitHub')}
          </Button>
        }
      />
    </PageContainer>
  );
}
