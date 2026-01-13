# DoNotDev Framework - Agent Quick Start

**Persona:** Lead Developer (implementation, code quality) | UX/UI Designer (UX considerations) | Expert Adviser (strategic feedback, trade-offs). **Skills:** TypeScript, React, component composition, convention-over-configuration mindset. **Critical:** ALWAYS follow conventions and trust the framework. Framework handles 90% - discover before building custom.

**When Stuck:**
1. Check JSDoc (hover in IDE)
2. Read relevant setup guide
3. Trust framework defaults
4. Ask user for clarification

**Never guess. Always verify.**

---

## ✅ Success Path: Follow These Steps

**Step 1: Install dependencies**
- Run `bun install` in project root
- Wait for completion - framework components will load correctly
- TypeScript imports will resolve properly

**Step 2: Create pages correctly**
- Name files ending in `Page.tsx` (e.g., `HomePage.tsx`)
- Place them in `src/pages/` folder
- Framework will auto-discover and route them
- Navigation will show them automatically

**Step 3: Configure app**
- Edit `src/config/app.ts` with your preset and app name
- Framework will use your configuration
- Footer and legal links will be included automatically

**Step 4: Customize via config files**
- Override defaults in `src/config/app.ts`
- Override themes in `src/themes.css`
- Framework preserves your changes on updates


** dndev ** is our custom CLI, dndev --help for info.


**🧠 PHILOSOPHY & MINDSET (READ THIS):**

**CRITICAL: ALL YOU NEED TO DO IS FOLLOW OUR NAMING CONVENTIONS + FILE STRUCTURE CONVENTIONS AND FOCUS ON THE INSIDE OF YOUR PAGES, WITH OUR COMPONENTS. EVERYTHING ELSE IS HANDLED. JUST TRUST THE FRAMEWORK AND CODE AS FEW AS POSSIBLE.**

*   **Speed > Polish:** Your goal is to reach UAT (User Acceptance Testing) fast. The app should look "good enough" (80%) using standard components.
*   **Composition > Customization:** Do not waste time writing CSS to make it "perfect" pixel-wise. Drop components, use props, move on.
*   **Standardize:** If it looks like a standard DoNotDev app, you succeeded. If you are writing custom CSS to fight the framework, you failed.
*   **Polishing:** Deep styling is for *after* the core functionality is approved and the User asks you to polish, with their preferred method.
*   **Trust the Framework:** Navigation, routing, layouts, auth, themes, i18n - all handled automatically. Focus on page content only.

---

**✅ STYLING STANDARDS (ALWAYS FOLLOW):**

1.  **Layout Strategy:** Use `<Stack>`, `<Grid>`, and `<Section>` components to organize content. These handle spacing and alignment automatically.
2.  **Component Props:** Leverage component-specific props and trust their defaults, only add what you really need.
3.  **Interactions:** Prefer native component interactions. E.g., Use `<Card onClick={...}>` instead of nesting a Button inside if the whole item is actionable.

---

## Import Rules

**Root imports only:**
```tsx
import { Button } from '@donotdev/components';
import { PageContainer } from '@donotdev/ui';
import { useAuth } from '@donotdev/auth';
```

**Type imports (strict TypeScript):**
```tsx
import type { ButtonProps } from '@donotdev/components';
import type { PageMeta } from '@donotdev/core';
```

---

## New App Setup

**CRITICAL: Follow these steps IN ORDER. Complete each step before moving to the next.**

**✅ SCAFFOLDING PHILOSOPHY:**
The `dndev init` or `dndev create-app` commands create files with working defaults. Your job is to UPDATE these scaffolded files with your specific needs - update values, add content, customize configuration. The scaffolded files are correctly structured and framework-ready. Preserve the structure and imports, update the values and content.

### Step 1: Create Project (if starting from scratch)
```bash
dndev init my-project-name
# OR if adding to existing project:
cd existing-project
dndev create-app my-app-name
```

### Step 2: Install Dependencies (REQUIRED - FIRST STEP)
```bash
cd my-project-name  # or cd apps/my-app-name
bun install
```
**✅ CRITICAL:** Run `bun install` as the first step. This installs all framework dependencies and enables framework components to work correctly.

### Step 3: Configure App (REQUIRED)
**CRITICAL:** The scaffolding process creates these files with working defaults. UPDATE them with your specific needs - do not replace them entirely.

**File: `src/config/app.ts`** (scaffolded - update with your values):
```typescript
import type { AppConfig } from '@donotdev/core';

export const appConfig: AppConfig = {
  preset: 'landing', // Update: Choose your preset (landing | admin | moolti | docs | blog | game | plain)
  app: {
    name: 'My App', // Update: Your app name
    url: 'https://myapp.com', // Update: Your app URL
  },
};
```

**File: `src/config/legal.ts`** (scaffolded - update with your legal pages):
```typescript
export const legalConfig = {
  // Update: Add your legal pages (privacy, terms, etc.)
};
```

**File: `vite.config.ts`** (scaffolded - already configured correctly):
```typescript
import { defineViteConfig } from '@donotdev/core/vite';
import { appConfig } from './src/config/app';

export default defineViteConfig({
  appConfig,  // Already configured - framework imports your appConfig
});
```

**✅ UPDATE STRATEGY:**
- Scaffolded files are already correctly structured
- Update values (app name, preset, URLs) to match your needs
- Keep the file structure and imports as-is
- Framework expects these exact file paths and exports

**✅ CORRECT FILE PATHS:**
- `src/config/app.ts` - Place in `src/config/` folder
- `src/config/legal.ts` - Place in `src/config/` folder  
- `vite.config.ts` - Place at project root (same level as `package.json`)
- `src/pages/*Page.tsx` - Place in `src/pages/` folder

### Step 4: Add Logo (Optional but recommended)
Drop `logo.svg` in `public/` folder. Framework auto-generates favicon, icons, PWA assets.

### Step 5: Create or Update Pages
**Scaffolding creates `src/pages/HomePage.tsx` with a working example. UPDATE it with your content:**

```tsx
import { PageContainer } from '@donotdev/ui';

export default function HomePage() {
  return <PageContainer><h1>Hello</h1></PageContainer>;
}
```

**✅ UPDATE STRATEGY:**
- Scaffolded `HomePage.tsx` is already correctly structured
- Update the content inside `PageContainer` with your components
- Keep the imports and export structure as-is
- Add more pages by creating new `*Page.tsx` files in `src/pages/`

### Step 6: Verify Setup (BEFORE running dev)
**Check these files exist:**
- ✅ `src/config/app.ts` exists
- ✅ `vite.config.ts` exists and imports `appConfig` from `src/config/app.ts`
- ✅ `src/pages/HomePage.tsx` exists (or at least one `*Page.tsx` file)
- ✅ `package.json` exists with `@donotdev/*` dependencies
- ✅ `bun install` completed successfully

### Step 7: Run Development Server
```bash
bun run dev
```

**Expected output:**
- Server starts on `http://localhost:5173` (or configured port)
- No "Cannot find module" errors
- Browser shows your app (may show watermark if no license key)

**If you see errors:**
1. **"Cannot find module '@donotdev/...'"** → Run `bun install` again
2. **"Cannot find module './src/config/app'"** → Check `vite.config.ts` path is correct
3. **"No routes found"** → Check you have `*Page.tsx` files in `src/pages/`
4. **TypeScript errors** → Run `bun run type-check` to see details

**✅ ALWAYS DO:**
- Run `bun install` first - required for dependencies
- Create pages in `src/pages/` folder - framework discovers them automatically
- Name files ending in `Page.tsx` - framework routes them automatically
- Trust framework defaults - routing, navigation, layouts are automatic
- Use preset components - LanguageSelector, ThemeToggle, AuthMenu are included automatically

---

## Generic Conventions

**File Routing Rule: Only files ending in `Page.tsx` inside `src/pages` become routes.**

**✅ ROUTING RULES:**
- Name files with `Page.tsx` suffix (e.g., `HomePage.tsx`, `AboutPage.tsx`)
- Place files inside `src/pages/` directory (or subdirectories)
- Framework auto-discovers routes from `src/pages/*Page.tsx` files
- Framework automatically generates navigation from discovered routes

**Routing:** Drop `*Page.tsx` files in `src/pages/**` → auto-discovered. Use `PageMeta` for routes, auth, icons.

**i18n:** Drop `<namespace>_<lng>.json` in `/locales` (eager) or `/pages/locales` (lazy). Framework auto-discovers languages.

**Themes:** Override CSS variables in `src/themes.css`. Framework auto-computes surfaces, borders, text colors.

---

## Success Checklist

**✅ Follow these to ensure success:**

1. **✅ Always name pages with `Page.tsx` suffix** - Example: `HomePage.tsx`, `AboutPage.tsx`
2. **✅ Always run `bun install` first** - Required before any other commands
3. **✅ Trust framework routing** - Framework auto-discovers routes from `src/pages/*Page.tsx`
4. **✅ Use preset components** - LanguageSelector, ThemeToggle, AuthMenu are included automatically
5. **✅ Configure via config files** - Edit `src/config/app.ts`, never modify `node_modules`
6. **✅ Create pages in `src/pages/` folder** - Framework discovers them automatically
7. **✅ Configure `src/config/app.ts`** - Set your preset and app name
8. **✅ Run `bun install` before `bun run dev`** - Dependencies must be installed first

---

## Landing Page Example

```tsx
import { PageContainer } from '@donotdev/ui';
import { HeroSection, Section, Card, CallToAction, Button, Grid, Stack } from '@donotdev/components';

export default function HomePage() {
  return (
    <PageContainer>
      <HeroSection 
        title="Welcome" 
        subtitle="Build fast with DoNotDev" 
        variant="primary"
      />
      
      <Section title="Features" gridCols={3}>
        <Card title="Fast" content="Lightning fast development" />
        <Card title="Simple" content="Zero configuration needed" />
        <Card title="Powerful" content="Enterprise-grade features" />
      </Section>
      
      <Section title="Layout Examples">
        <Grid cols={[1, 1, 2, 2]} gap="medium">
          <Card title="Left Column" />
          <Card title="Right Column" />
        </Grid>
        
        <Stack direction="row" gap="medium">
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Secondary</Button>
        </Stack>
      </Section>
      
      <CallToAction 
        title="Get Started" 
        subtitle="Ready to build?"
        primaryAction={<Button variant="primary">Sign Up</Button>}
        secondaryAction={<Button variant="outline">Learn More</Button>}
      />
    </PageContainer>
  );
}
```

---

---

## Required File Structure

**CRITICAL:** Your project MUST have this exact structure:

```
my-project/
├── package.json              # At root - contains dependencies
├── vite.config.ts            # At root - imports appConfig
├── src/
│   ├── config/
│   │   ├── app.ts            # REQUIRED - app configuration
│   │   └── legal.ts           # REQUIRED - legal pages config
│   ├── pages/
│   │   └── HomePage.tsx       # Your pages (must end in Page.tsx)
│   ├── App.tsx                # App entry point
│   └── main.tsx               # Vite entry point
└── public/
    └── logo.svg               # Optional - framework generates assets
```

**✅ CORRECT FILE PATHS EXAMPLES:**
- ✅ `src/config/app.ts` (correct location)
- ✅ `src/pages/HomePage.tsx` (correct location)
- ✅ `src/pages/AboutPage.tsx` (correct - in pages subfolder)
- ✅ `src/pages/blog/BlogPostPage.tsx` (correct - nested pages work)

---

## Troubleshooting

### "Cannot find module '@donotdev/...'"
**Solution:** Run `bun install` in the project root. Dependencies must be installed before running the app.

### "No routes found"
**Solution:** 
1. Check files are in `src/pages/` folder
2. Check files end in `Page.tsx` (not `.tsx` or `.ts`)
3. Check files are exported as default: `export default function HomePage()`

### "Cannot find module './src/config/app'"
**Solution:**
1. Check `vite.config.ts` is at project root (same level as `package.json`)
2. Check `src/config/app.ts` exists
3. Check import path in `vite.config.ts`: `import { appConfig } from './src/config/app';`

### App shows blank page
**Solution:**
1. Check browser console for errors
2. Verify at least one `*Page.tsx` file exists in `src/pages/`
3. Verify `vite.config.ts` imports `appConfig` correctly
4. Check `src/App.tsx` uses `ViteAppProviders` with `config={appConfig}`

### TypeScript errors
**Solution:**
1. Run `bun run type-check` to see all errors
2. Ensure all `@donotdev/*` packages are installed
3. Check imports use root package names: `@donotdev/components`, not deep paths

---

**Component references:** [COMPONENTS_ATOMIC.md](./COMPONENTS_ATOMIC.md) | [COMPONENTS_UI.md](./COMPONENTS_UI.md) | [COMPONENTS_CRUD.md](./COMPONENTS_CRUD.md)

**Full guides:** [INDEX.md](./INDEX.md) - 50-100 LOC per topic (SETUP_*.md, advanced/*.md)
