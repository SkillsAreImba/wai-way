# Configuration Setup

**For AI Agents:** Configure `src/config/app.ts` and `vite.config.ts`. Framework handles the rest.

---

## 1. App Configuration

```typescript
// src/config/app.ts
import type { AppConfig } from '@donotdev/core';

export const appConfig: AppConfig = {
  app: {
    name: 'My App',
    url: 'https://myapp.com',
  },

  preset: 'landing', // landing | admin | moolti | docs | blog | game | plain

  features: {
    debug: false, // Enable debug tools
    requiredCookies: ['necessary'], // Cookie consent categories
  },

  auth: {
    authRoute: '/login',
    roleRoute: '/404',
    tierRoute: '/404',
    loginPath: '/login',
    profilePath: '/profile',
  },

  i18n: {
    defaultLanguage: 'en',
    fallbackLanguage: 'en',
  },

  theme: {
    defaultTheme: 'light',
  },
};
```

---

## 2. Vite Configuration

```typescript
// vite.config.ts
import { defineViteConfig } from '@donotdev/core/vite';
import { appConfig } from './src/config/app';

export default defineViteConfig({
  appConfig,  // Required
});
```

**Done.** Routes, themes, and translations are automatically detected from your `src/` directory.

---

## 3. Optional Vite Options

```typescript
export default defineViteConfig({
  appConfig,

  // Debug
  debug: true,
  verbose: true,

  // Debug options
  routes: { debug: true },
  themes: { debug: true },
  i18n: { debug: true },

  // Server
  server: {
    port: 3000,
    https: true,
  },

  // Build
  build: {
    sourcemap: false,
  },

  // SEO
  seo: {
    disabled: false,
    generateRobotsTxt: true,
    generateSitemap: true,
  },

  // PWA
  pwa: {
    enabled: false,
  },
});
```

---

## 4. Environment Variables

```bash
# .env
VITE_APP_NAME="My App"
VITE_APP_URL=http://localhost:5173

# Firebase
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef

# Auth providers
VITE_AUTH_PARTNERS=password,emailLink,google,github

# Stripe
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_API_VERSION=2025-08-27.basil
```

---

**Zero config. Override when needed.**
