# Advanced Components (@donotdev/adv-comps)

High-level, opinionated, and marketing-focused UI components for DoNotDev framework.

## Setup

**IMPORTANT:** You must import the styles in your `globals.css` file:

```css
@import '@donotdev/adv-comps/styles';
```

Without this import, components will not have their required CSS styles.

## Components

### Crawl

Cinematic 3D text crawl component with lazy loading.

```tsx
import { Crawl } from '@donotdev/adv-comps';

<Crawl
  intro?: ReactNode | string
  title?: ReactNode | string
  content: ReactNode | string | string[]
  duration?: number // @default 26
  contentHeight?: string // @default "150vh"
  tiltAngle?: number
  className?: string
  style?: CSSProperties
  aria-label?: string
/>
```

### Marquee

Production-grade marquee with accessibility, reduced motion support, and smart behavior detection.

```tsx
import { Marquee } from '@donotdev/adv-comps';

<Marquee<T>
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
  className?: string
  itemClassName?: string
  gap?: 'none' | 'tight' | 'medium' | 'large' // @default 'medium'
  speed?: number // px per second
  direction?: 'left' | 'right' | 'up' | 'down' | 'auto' // @default 'auto'
  pauseOnHover?: boolean
  ariaLabel?: string
  reducedMotion?: 'respect' | 'ignore'
  behavior?: 'bounce' | 'infinite' | 'auto'
  pauseOnFocusWithin?: boolean
  easing?: 'linear' | 'ease-in-out' | 'ease-out'
/>
```

### Roadmap

Timeline component with horizontal (desktop) / vertical (mobile) layout. Features animated progress line, glowing nodes, and lift-on-hover cards.

```tsx
import { Roadmap } from '@donotdev/adv-comps';
import type { RoadmapStep } from '@donotdev/adv-comps';

<Roadmap
  steps: RoadmapStep[]
  className?: string
  variant?: CardVariant // @default 'default'
/>

// RoadmapStep interface:
interface RoadmapStep {
  phase: string // e.g., "Week 1", "Days 1-2"
  icon: LucideIcon
  title: string
  subtitle: string
  description?: string
  content?: CardContent // Optional content shown in popover on click
}
```

### StackedCards

Simple scroll-reveal stacked cards. Active card shows full content, stacked cards show only bottom edge with number.

```tsx
import { StackedCards } from '@donotdev/adv-comps';
import type { StackedCardData } from '@donotdev/adv-comps';

<StackedCards
  items: StackedCardData[]
  variant?: SurfaceVariantProps['variant']
  ariaLabel?: string
  threshold?: number // Intersection threshold (0.0 - 1.0) @default 0.3
  className?: string
  style?: CSSProperties
/>

// StackedCardData extends ComponentData with:
interface StackedCardData extends ComponentData {
  number?: string | number // Custom number/label (e.g. "01", "Week 1"). Defaults to index.
}
```

### Reveal

Reveal component for staggered animations. Features viewport-based visibility detection, directional animations, and customizable stagger delays.

```tsx
import { Reveal } from '@donotdev/adv-comps';

<Reveal
  items: string[] | ReactNode[]
  direction?: 'left' | 'right' | 'top' | 'bottom' | 'fade-in' | 'alternate-h' | 'alternate-v'
  stagger?: number // milliseconds between items
  threshold?: number
  distance?: number // animation distance in pixels
  duration?: number // animation duration in milliseconds
  once?: boolean // if true, only animate once
  viewport?: boolean // if true, only animate items in viewport
  overrides?: Array<{
    index: number
    direction: 'left' | 'right' | 'top' | 'bottom' | 'fade-in'
  }>
  className?: string
  children?: ReactNode
/>
```

### InspectorGadget

Floating code inspector component. Displays a floating eye icon button that opens a dialog showing the page's source code.

```tsx
import { InspectorGadget } from '@donotdev/adv-comps';

<InspectorGadget
  data?: string // Source code string
  sourcePath?: string // Path to source file (import with ?raw) - overrides data if provided
  sourceCode?: string // Source code loaded from file
  language?: string // Code language for syntax highlighting @default 'tsx'
  title?: string // Dialog title @default 'Page Source'
  className?: string
/>
```

### Breathing Components

Breathing exercise components for meditation and wellness apps.

```tsx
import { LungsAnimation, BreathingExerciseLayout } from '@donotdev/adv-comps';
import type { BreathingExerciseDnDevLayoutProps } from '@donotdev/adv-comps';

<BreathingExerciseLayout
  status?: ReactNode
  animation: ReactNode
  instructions: ReactNode
  debug?: boolean
  onSkip?: () => void
  statusValue?: string
  onRestart?: () => void
  isPaused?: boolean
  isComplete?: boolean
/>

<LungsAnimation ... />
```

### Carousel

Premium carousel component with lazy loading built-in. Features true infinite circular loop, hardware-accelerated animations, swipe/touch gestures, and autoplay with pause-on-hover.

```tsx
import { Carousel } from '@donotdev/adv-comps';
import type { CarouselProps, CarouselRef } from '@donotdev/adv-comps';

<Carousel<T>
  items: T[]
  renderItem: (item: T, index: number, isActive: boolean) => ReactNode
  className?: string
  slideClassName?: string
  showArrows?: boolean
  showDots?: boolean
  showProgress?: boolean
  autoplay?: boolean
  autoplayInterval?: number // milliseconds
  transitionDuration?: number // milliseconds
  loop?: boolean
  // ... and more props
/>
```

### ComparisonGrid

Comparison grid component for displaying feature comparisons. Provides lazy-loaded content with skeleton loading states.

```tsx
import { ComparisonGrid } from '@donotdev/adv-comps';
import type { ComparisonItem } from '@donotdev/adv-comps';

<ComparisonGrid
  title?: string
  items: ComparisonItem[]
  gridCols?: 1 | 2 | 3 | 4 // @default 2
  className?: string
  ariaLabel?: string
/>

// ComparisonItem interface:
interface ComparisonItem {
  useCase: string
  bestFit: string
  dndev: string
  reason: string
}
```

### CongratulationsCard

Card component for displaying congratulatory messages. Features customizable icon and text with centered layout.

```tsx
import { CongratulationsCard } from '@donotdev/adv-comps';

<CongratulationsCard
  text: string
  icon?: ReactNode // @default '🎉'
  className?: string
/>
```

### GuideModal

Modal component for displaying guides and tutorials. Provides step-by-step guide display with navigation, progress tracking, and completion handling.

```tsx
import { GuideModal } from '@donotdev/adv-comps';
import type { GuideModalProps, GuideTemplate } from '@donotdev/adv-comps';

<GuideModal
  open: boolean
  onOpenChange: (open: boolean) => void
  guide: GuideTemplate
  icon?: LucideIcon
/>

// GuideTemplate interface:
interface GuideTemplate {
  title: string
  subtitle: string
  quickStart?: {
    title: string
    code: string
    description: string
  }
  steps?: GuideStep[]
  features?: string[]
  templates?: Array<{
    name: string
    description: string
  }>
  actions?: Array<{
    label: string
    href: string
    variant?: 'default' | 'outline'
    icon?: LucideIcon
  }>
}

// GuideStep interface:
interface GuideStep {
  icon: LucideIcon
  title: string
  description: string
  code?: string
  details?: string
}
```

### SplitReveal

Split reveal component for displaying content in two columns. Features left column content and right column stat cards or custom content with reveal animations.

```tsx
import { SplitReveal } from '@donotdev/adv-comps';
import type { StatCardData } from '@donotdev/adv-comps';

<SplitReveal
  left: ReactNode
  right: ReactNode | StatCardData[]
  leftDirection?: 'left' | 'right' | 'top' | 'bottom' | 'fade-in' // @default 'left'
  rightDirection?: 'left' | 'right' | 'top' | 'bottom' | 'fade-in' // @default 'right'
  threshold?: number // @default 0.3
  className?: string
/>

// StatCardData interface:
interface StatCardData {
  title: string
  description: string
}
```

### StartChallengeForm

Generic form layout component for input + CTA button patterns.

```tsx
import { StartChallengeForm } from '@donotdev/adv-comps';

<StartChallengeForm
  input={{
    value: string
    onChange: (value: string) => void
    placeholder?: string
    label?: string
    maxLength?: number
    className?: string
  }}
  button={{
    label: string
    onClick: () => void
    icon?: ComponentType<{ className?: string }>
    variant?: ButtonVariant
    className?: string
  }}
  size?: 'sm' | 'md' | 'lg'
  className?: string
/>
```

### Waterfall

Waterfall component with lazy loading built-in. Features clean cascade layout with diagonal staircase effect, perfect for step-by-step processes or feature showcases.

```tsx
import { Waterfall } from '@donotdev/adv-comps';
import type { WaterfallProps } from '@donotdev/adv-comps';

<Waterfall
  items: ComponentData[]
  className?: string
  connectorClassName?: string
  density?: 'compact' | 'comfortable'
  ariaLabel?: string
  direction?: 'horizontal' | 'descending'
/>
```

## Notes

- All components are lazy-loaded by default for optimal performance
- Components use framework theme variables for consistent styling
- Most components support reduced motion preferences
- All components are SSR-safe and work with both Vite and Next.js
