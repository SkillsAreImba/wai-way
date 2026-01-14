import { Brain } from 'lucide-react';

import { StepPageContainer } from '@/components/StepPageContainer';
import type { StepLoaders } from '@/components/StepPageContainer';
import type { PageMeta } from '@donotdev/core';

export const NAMESPACE = 'step1';

export const meta: PageMeta = {
    namespace: NAMESPACE,
    title: '1. Brainstorm',
    icon: <Brain />,
};

const loaders: StepLoaders = {
    en: {
        prompts: () => import('@/content/en/step_1_prompts.md?raw'),
        desc: () => import('@/content/en/step_1.md?raw'),
        output: () => import('@/content/en/step_1_output.md?raw'),
    },
    fr: {
        prompts: () => import('@/content/fr/step_1_prompts.md?raw'),
        desc: () => import('@/content/fr/step_1.md?raw'),
        output: () => import('@/content/fr/step_1_output.md?raw'),
    },
};

export default function Step1Page() {
    return <StepPageContainer stepNumber={1} loaders={loaders} />;
}
