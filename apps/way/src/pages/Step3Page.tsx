import { Hammer } from 'lucide-react';

import { StepPageContainer } from '@/components/StepPageContainer';
import type { StepLoaders } from '@/components/StepPageContainer';
import type { PageMeta } from '@donotdev/core';

export const NAMESPACE = 'step3';

export const meta: PageMeta = {
    namespace: NAMESPACE,
    title: '3. Build',
    icon: <Hammer />,
};

const loaders: StepLoaders = {
    en: {
        prompts: () => import('@/content/en/step_3_prompts.md?raw'),
        desc: () => import('@/content/en/step_3.md?raw'),
        output: () => import('@/content/en/step_3_output.md?raw'),
    },
    fr: {
        prompts: () => import('@/content/fr/step_3_prompts.md?raw'),
        desc: () => import('@/content/fr/step_3.md?raw'),
        output: () => import('@/content/fr/step_3_output.md?raw'),
    },
};

export default function Step3Page() {
    return <StepPageContainer stepNumber={3} loaders={loaders} />;
}
