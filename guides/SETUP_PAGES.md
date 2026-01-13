# Setup: Pages & Routing

**Most is pre-configured.** Drop `*Page.tsx` files. Routes auto-discovered, navigation auto-generated, sitemap auto-built.

---

## File Routing Rule

**CRITICAL: Only files ending in `Page.tsx` inside `src/pages` become routes.**

Files must be named `*Page.tsx` (e.g., `HomePage.tsx`, `AboutPage.tsx`, `BlogPostPage.tsx`). Files without the `Page.tsx` suffix are ignored by the routing system.

---

## Standard Use

**Pattern:** `src/pages/**/*Page.tsx` → routes

**Basic page structure:**
```tsx
// src/pages/AboutPage.tsx
import { PageContainer } from '@donotdev/ui';

export const NAMESPACE = 'about';

export const meta: PageMeta = {
  namespace: NAMESPACE,
};

export default function AboutPage() {
  return <PageContainer><h1>About</h1></PageContainer>;
}
```

**Cookie-cutter pattern (Landing page):**
```tsx
import { PageContainer } from '@donotdev/ui';
import { HeroSection, Section, Card, CallToAction } from '@donotdev/components';

export default function HomePage() {
  return (
    <PageContainer>
      <HeroSection title="Welcome" subtitle="Build fast" variant="primary" />
      <Section title="Features" gridCols={3}>
        <Card title="Fast" />
        <Card title="Simple" />
        <Card title="Powerful" />
      </Section>
      <CallToAction title="Get Started" primaryAction={<Button>Sign Up</Button>} />
    </PageContainer>
  );
}
```

**Drop files, get routes. No config needed.**

**Component reference:** See [COMPONENTS_ATOMIC.md](./COMPONENTS_ATOMIC.md) for atomic components, [COMPONENTS_UI.md](./COMPONENTS_UI.md) for layout components.

---

## Advanced: All PageMeta Props

```tsx
export const meta: PageMeta = {
  // Translation/SEO namespace
  namespace: NAMESPACE,
  
  // Route configuration
  route: '/custom-url',                    // Override auto-generated path
  route: { params: ['slug'] },            // Dynamic: /blog/:slug
  
  // Page title (optional - auto-extracted from filename)
  title: 'Custom Title',
  
  // Navigation icon (lucide-react JSX only)
  icon: <Rocket />,                        // Menu icon (default: Link)
  
  // Hide from navigation menu
  hideFromMenu: false,                     // Default: false (shows in nav)
  
  // Authentication
  auth: true,                              // Simple: auth required
  auth: { required: true },                // Explicit: auth required
  auth: { required: true, role: 'admin' }, // Role-based access
  auth: { required: true, tier: 'pro' },   // Tier-based access
  auth: { 
    required: true,
    validate: (role, tier) => role === 'admin' && tier === 'pro'
  },                                       // Custom validation
};
```

---

## Advanced: Dynamic Routes & Navigation

```tsx
// Dynamic route
export const meta: PageMeta = {
  namespace: 'blog',
  route: { params: ['slug'] },  // → /blog/:slug
};

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  return <PageContainer><h1>{slug}</h1></PageContainer>;
}

// Manual navigation
import { useNavigate, Link } from '@donotdev/ui';
const navigate = useNavigate();
navigate('/about');
<Link path="/about">About</Link>
```

**Pre-configured:** Navigation menu auto-generated, sitemap auto-built (if `generateSitemap: true`).

---

**Drop files, get routes. Framework handles the rest.**
