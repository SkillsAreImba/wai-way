import { useState, useEffect } from 'react';
import { useTranslation } from '@donotdev/core';
import { StepTemplate } from './StepTemplate';

export interface LocaleLoaders {
    prompts: () => Promise<{ default: string }>;
    desc: () => Promise<{ default: string }>;
    output: () => Promise<{ default: string }>;
}

export interface StepLoaders {
    en: LocaleLoaders;
    fr: LocaleLoaders;
}

export function StepPageContainer({ stepNumber, loaders }: { stepNumber: number; loaders: StepLoaders }) {
    const namespace = `step${stepNumber}`;
    const { t, i18n } = useTranslation(namespace);
    const faqs = t('faqs', { returnObjects: true });
    const faqCount = Array.isArray(faqs) ? faqs.length : 0;
    const [content, setContent] = useState({ prompt: '', instructions: '', output: '' });

    useEffect(() => {
        const loadContent = async () => {
            const lang = i18n.language?.startsWith('fr') ? 'fr' : 'en';
            const loader = loaders[lang];

            try {
                const [p, d, o] = await Promise.all([
                    loader.prompts(),
                    loader.desc(),
                    loader.output(),
                ]);
                setContent({
                    prompt: p.default,
                    instructions: d.default,
                    output: o.default,
                });
            } catch (err) {
                console.error('Failed to load markdown content', err);
            }
        };
        loadContent();
    }, [i18n.language, loaders]);

    if (!content.prompt) return null;

    const prefix = i18n.language?.startsWith('fr') ? 'Étape' : 'Step';
    const separator = i18n.language?.startsWith('fr') ? ' :' : ':';

    return (
        <StepTemplate
            stepNumber={stepNumber}
            title={`${prefix} ${stepNumber}${separator} ${t('hero.title')}`}
            subtitle={t('hero.subtitle')}
            masterPromptContent={content.prompt}
            stepDescriptionContent={content.instructions}
            stepOutputContent={content.output}
            t={t}
            faqCount={faqCount}
            labels={{
                masterPrompt: t('sections.prompt'),
                stepInstructions: t('sections.instructions'),
                exampleOutput: t('sections.output'),
                faq: t('sections.faq'),
            }}
        />
    );
}
