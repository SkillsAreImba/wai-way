'use client';

import { useTranslation } from '@donotdev/core';
import { tList } from '@donotdev/ui';
import { PageContainer, FeatureCard, Link, AppBranding } from '@donotdev/ui';
import {
  HeroSection,
  Section,
  CallToAction,
  Button,
  Roadmap,
  Reveal,
  Grid,
  Stack,
} from '@donotdev/components';
import type { RoadmapStep } from '@donotdev/components';
import {
  Brain,
  Layout,
  Database,
  Code,
  Settings,
  BookOpen,
  Wrench,
  ExternalLink,
  Github,
} from 'lucide-react';
const NAMESPACE = 'home';

const phaseIcons = [Brain, Layout, Database, Code, Settings] as const;
const phaseKeys = ['0', '1', '2', '3', '4'] as const;

export default function HomePage() {
  const { t } = useTranslation(NAMESPACE);

  const protocolSteps: RoadmapStep[] = phaseKeys.map((key, i) => ({
    phase: `P${i}`,
    icon: phaseIcons[i],
    title: t(`protocol.phases.${key}.title`),
    subtitle: t(`protocol.phases.${key}.subtitle`),
    description: t(`protocol.phases.${key}.outcome`),
    content: tList(t, `protocol.phases.${key}.items`, 6),
  }));

  return (
    <>
      <PageContainer>
        <AppBranding display="full" linkToHome />

        {/* Hero */}
        <HeroSection
          title={
            <>
              <span className="hero-highlight">Every</span> single time.<br />
              AI <span className="hero-highlight">almost</span> nails it!
            </>
          }
          subtitle={t('hero.subtitle')}
          variant="subtle"
        />

        {/* The method / The tooling */}
        <Section tone="ghost" align="center">
          <Grid cols={[1, 1, 2, 2]}>
            <Reveal direction="left" items={[
              <FeatureCard
                key="method"
                icon={BookOpen}
                title={t('what.method.title')}
                subtitle={t('what.method.subtitle')}
                content={tList(t, 'what.method.items', 4)}
                variant="glass"
              />,
            ]} />
            <Reveal direction="right" items={[
              <FeatureCard
                key="tooling"
                icon={Wrench}
                title={t('what.tooling.title')}
                subtitle={t('what.tooling.subtitle')}
                content={tList(t, 'what.tooling.items', 4)}
                variant="glass"
              />,
            ]} />
          </Grid>
        </Section>

        {/* The Protocol — centered, focused */}
        <Section title={t('protocol.title')}>
          <Stack align="center" style={{ maxWidth: 700, margin: '0 auto' }}>
            <Roadmap
              steps={protocolSteps}
              layout="vertical"
              variant="glass"
            />
          </Stack>
        </Section>

        {/* CTA */}
        <CallToAction
          title={t('cta.title')}
          subtitle={t('cta.line1')}
          primaryAction={
            <Button
              variant="primary"
              icon={ExternalLink}
              render={({ children, ...props }) => (
                <Link path="https://donotdev.com" target="_blank" {...props}>{children}</Link>
              )}
            >
              {t('cta.linkFramework')}
            </Button>
          }
          secondaryAction={
            <Button
              variant="outline"
              icon={Github}
              render={({ children, ...props }) => (
                <Link path="https://github.com/DoNotDev/cli" target="_blank" {...props}>{children}</Link>
              )}
            >
              {t('cta.linkGithub')}
            </Button>
          }
        />
      </PageContainer>
    </>
  );
}
