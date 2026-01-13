import { PageContainer } from '@donotdev/ui';
import { FAQSection } from '@donotdev/core';
import { HeroSection, Section, Accordion } from '@donotdev/components';
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
        masterPromptLabel: string;
        stepInstructions: string;
        stepInstructionsLabel: string;
        exampleOutput: string;
        exampleOutputLabel: string;
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
        masterPromptLabel: 'View Master Prompt',
        stepInstructions: 'Step Instructions',
        stepInstructionsLabel: 'View Instructions',
        exampleOutput: 'Example Output',
        exampleOutputLabel: 'View Output',
        faq: 'Troubleshooting & FAQ',
    },
}: StepTemplateProps) {
    return (
        <PageContainer>
            <HeroSection
                title={title}
                subtitle={subtitle}
            />

            <Section title={labels.masterPrompt}>
                <Accordion
                    items={[
                        {
                            value: 'master-prompt',
                            trigger: labels.masterPromptLabel,
                            content: <MarkdownViewer content={masterPromptContent} />,
                        },
                    ]}
                />
            </Section>

            <Section title={labels.stepInstructions} tone="muted">
                <Accordion
                    items={[
                        {
                            value: 'step-instructions',
                            trigger: labels.stepInstructionsLabel,
                            content: <MarkdownViewer content={stepDescriptionContent} />,
                        },
                    ]}
                />
            </Section>

            <Section title={labels.exampleOutput}>
                <Accordion
                    items={[
                        {
                            value: 'example-output',
                            trigger: labels.exampleOutputLabel,
                            content: <MarkdownViewer content={stepOutputContent} />,
                        },
                    ]}
                />
            </Section>

            <Section title={labels.faq} tone="muted">
                <FAQSection t={t} keyPrefix="faqs" maxIndex={faqCount || 10} />
            </Section>
        </PageContainer >
    );
}
