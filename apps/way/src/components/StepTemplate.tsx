import { PageContainer, Link } from '@donotdev/ui';
import { FAQSection } from '@donotdev/core';
import { HeroSection, Section, Button, Stack, Text } from '@donotdev/components';
import { MarkdownViewer } from '@donotdev/templates';
import { ExternalLink, BookOpen } from 'lucide-react';
import { AI_GEMS_TRAINING_GUIDE_URL } from '@/config/ai-gems';

interface StepTemplateProps {
    stepNumber: number;
    title: string;
    subtitle: string;
    masterPromptContent: string;
    stepDescriptionContent: string;
    stepOutputContent: string;
    t: any;
    faqCount?: number;
    labels?: {
        masterPrompt: string;
        stepInstructions: string;
        exampleOutput: string;
        faq: string;
        tryWithAI?: string;
        tryWithAIDescription?: string;
        createYourOwn?: string;
        createYourOwnDescription?: string;
    };
}

export function StepTemplate({
    stepNumber,
    title,
    subtitle,
    masterPromptContent,
    stepDescriptionContent,
    stepOutputContent,
    t,
    faqCount,
    labels = {
        masterPrompt: 'Master Prompt',
        stepInstructions: 'Step Instructions',
        exampleOutput: 'Example Output',
        faq: 'Troubleshooting & FAQ',
        tryWithAI: 'Create Your Own AI Assistant',
        tryWithAIDescription: 'Automate this step by training a custom AI assistant (GPT/Gemini/Claude) with the master prompt below',
        createYourOwn: 'How to Create Your AI Assistant',
        createYourOwnDescription: 'Use AI agents to automatically create custom assistants trained on WAI-WAY methodology',
    },
}: StepTemplateProps) {
    return (
        <PageContainer>
            <HeroSection
                title={title}
                subtitle={subtitle}
            />

            <Section title={labels.tryWithAI} tone="primary">
                <Stack gap="md">
                    <Text>{labels.tryWithAIDescription}</Text>
                    <Button
                        variant="outline"
                        icon={BookOpen}
                        iconEnd={ExternalLink}
                        render={({ children, ...props }) => (
                            <Link path={AI_GEMS_TRAINING_GUIDE_URL} {...props}>
                                {children}
                            </Link>
                        )}
                    >
                        {t('aiGems.trainingGuide', 'View Training Guide')}
                    </Button>
                    <Text variant="muted" size="sm">
                        {labels.createYourOwnDescription}
                    </Text>
                </Stack>
            </Section>

            <Section title={labels.masterPrompt} collapsible>
                <MarkdownViewer content={masterPromptContent} />
            </Section>

            <Section title={labels.stepInstructions} tone="muted" collapsible>
                <MarkdownViewer content={stepDescriptionContent} />
            </Section>

            <Section title={labels.exampleOutput} collapsible>
                <MarkdownViewer content={stepOutputContent} />
            </Section>

            <Section title={labels.faq} tone="muted">
                <FAQSection t={t} keyPrefix="faqs" maxIndex={faqCount || 10} />
            </Section>
        </PageContainer>
    );
}
