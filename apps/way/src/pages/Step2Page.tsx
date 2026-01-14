import { CheckSquare } from 'lucide-react';

import { StepPageContainer } from '@/components/StepPageContainer';
import type { StepLoaders } from '@/components/StepPageContainer';
import type { PageMeta } from '@donotdev/core';

export const NAMESPACE = 'step2';

export const meta: PageMeta = {
    namespace: NAMESPACE,
    title: '2. Review',
    icon: <CheckSquare />,
};

const loaders: StepLoaders = {
    en: {
        prompts: () => import('@/content/en/step_2_prompts.md?raw'),
        desc: () => import('@/content/en/step_2.md?raw'),
        output: () => import('@/content/en/step_2_output.md?raw'),
    },
    fr: {
        prompts: () => import('@/content/fr/step_2_prompts.md?raw'),
        desc: () => import('@/content/fr/step_2.md?raw'),
        output: () => import('@/content/fr/step_2_output.md?raw'),
    },
};

export default function Step2Page() {
    return <StepPageContainer stepNumber={2} loaders={loaders} />;
}
