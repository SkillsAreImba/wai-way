import { Paintbrush } from 'lucide-react';

import { StepPageContainer } from '@/components/StepPageContainer';
import type { StepLoaders } from '@/components/StepPageContainer';
import type { PageMeta } from '@donotdev/core';

export const NAMESPACE = 'step4';

export const meta: PageMeta = {
    namespace: NAMESPACE,
    title: '4. Polish',
    icon: <Paintbrush />,
};

const loaders: StepLoaders = {
    en: {
        prompts: () => import('@/content/en/step_4_prompts.md?raw'),
        desc: () => import('@/content/en/step_4.md?raw'),
        output: () => import('@/content/en/step_4_output.md?raw'),
    },
    fr: {
        prompts: () => import('@/content/fr/step_4_prompts.md?raw'),
        desc: () => import('@/content/fr/step_4.md?raw'),
        output: () => import('@/content/fr/step_4_output.md?raw'),
    },
};

export default function Step4Page() {
    return <StepPageContainer stepNumber={4} loaders={loaders} />;
}
