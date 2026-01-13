import { PageContainer } from '@donotdev/ui';
import { FAQSection } from '@donotdev/core';
import { HeroSection, Section } from '@donotdev/components';
import { MarkdownViewer } from '@donotdev/templates';

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
    },
}: StepTemplateProps) {
    return (
        <PageContainer>
            <HeroSection
                title={title}
                subtitle={subtitle}
            />

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
