# wai

**Built with [DoNotDev Framework](https://donotdev.com)**

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build
```

## 📦 What's Included

This project is scaffolded with:

- ✅ **DoNotDev Framework** - Modern React framework with auth, billing, i18n
- ✅ **Vite** - Lightning-fast development
- ✅ **TypeScript** - Type-safe throughout
- ✅ **Firebase** - Authentication & database ready
- ✅ **Stripe** - Billing integration ready (optional)
- ✅ **i18n** - Multi-language support (8 languages)
- ✅ **Themes** - Dark mode & custom themes

## 📁 Project Structure

```
wai/
├── src/
│   ├── pages/              # Auto-discovered routes
│   │   └── HomePage.tsx    # Your landing page
│   ├── components/         # Your components
│   ├── App.tsx             # App entry point
│   └── main.tsx            # Vite entry
├── public/
│   └── assets/
│       ├── themes/         # Custom theme files
│       └── locales/        # Translation files
├── CLAUDE.md               # Guide for AI agents
└── package.json
```

## 🔧 Configuration

### License Key

This project uses `@donotdev` packages from npm. To remove the watermark, add your license key:

1. Get your license key from [donotdev.com/pricing](https://donotdev.com/pricing)
2. Add to `.env` file:
   ```env
   VITE_DONOTDEV_LICENSE_KEY=dndev_your_key_here
   ```
   Or for Next.js:
   ```env
   NEXT_PUBLIC_DONOTDEV_LICENSE_KEY=dndev_your_key_here
   ```

### Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update the values:
   ```env
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   ```

### Features Configuration

Edit `vite.config.ts` to enable/disable features:

```typescript
export default defineConfig({
  plugins: [
    doNotDevPlugin({
      features: {
        enabled: ['auth', 'billing', 'oauth'],
      },
    }),
  ],
});
```

## 🎨 Customization

### Adding Your Logo

Add your `logo.svg` to `public/`:

- Framework will prompt during build if missing: "Do you want us to provide one from the framework?"
- Or manually copy from `node_modules/@donotdev/ui/assets/logo.svg`
- Framework automatically generates favicon, app icons, and PWA assets from your logo

### Add a New Page

Create a file in `src/pages/`:

```tsx
// src/pages/AboutPage.tsx
import { PageContainer } from '@donotdev/ui';
import { Info } from 'lucide-react';
import type { PageMeta } from '@donotdev/core';

export const meta: PageMeta = {
  namespace: 'about',
  icon: <Info />,
};

export default function AboutPage() {
  return (
    <PageContainer variant="standard">
      <h1>About Us</h1>
    </PageContainer>
  );
}
```

Route auto-discovered as `/about` ✨

### Add Translations

Create/edit `public/assets/locales/about_en.json`:

```json
{
  "title": "About Us",
  "description": "Learn more about our mission"
}
```

### Add Custom Theme

Edit `src/themes.css`:

```css
.ocean {
  --theme-icon: 'Waves';
  --theme-label: 'Ocean';
  --primary: #0ea5e9;
  --background: #0a1929;
}
```

## 🔐 Authentication

Enable Firebase Auth:

1. Set up Firebase project
2. Enable authentication methods
3. Update `.env` with Firebase credentials
4. Use in your pages:

```tsx
import { useAuth } from '@donotdev/auth';

export default function ProfilePage() {
  const { user, signOut } = useAuth();
  return <div>Hello, {user?.displayName}!</div>;
}
```

## 💳 Billing (Optional)

Enable Stripe:

1. Create Stripe account
2. Add Stripe keys to `.env`
3. Enable in `vite.config.ts`
4. Use in your pages:

```tsx
import { useStripeBilling } from '@donotdev/billing';

export default function PricingPage() {
  const { createCheckoutSession } = useStripeBilling();
  return <button onClick={() => createCheckoutSession('pro')}>
    Upgrade to Pro
  </button>;
}
```

## 🚢 Deployment

### Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and init
firebase login
firebase init hosting

# Deploy
bun run build
firebase deploy
```

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## 🤖 Working with AI Agents

This project includes `CLAUDE.md` - a guide for AI agents like Claude, ChatGPT, etc.

When working with an AI:
1. The AI will automatically read `CLAUDE.md`
2. The AI will understand the framework conventions
3. Ask the AI to create pages, add features, fix bugs, etc.

**Example prompts:**
- "Create a blog page with post listing"
- "Add French translations for the home page"
- "Create a protected dashboard page that requires authentication"
- "Add a pricing page with Stripe integration"

## 📚 Documentation

- **Framework Docs**: [docs.donotdev.com](https://docs.donotdev.com)
- **CLAUDE.md**: AI agent guide (in this project)
- **Component Library**: [donotdev.com/components](https://donotdev.com/components)

## 🆘 Troubleshooting

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules bun.lock
bun install
```

### Firebase Connection Issues

- Verify `.env` has correct Firebase credentials
- Check Firebase console for project status
- Ensure authentication is enabled

### Hot Reload Not Working

- Check Vite config port (default: 5173)
- Ensure no other process is using the port

## 📝 Scripts

```bash
bun run dev          # Start development server
bun run build        # Build for production
bun run preview      # Preview production build
bun run lint         # Lint code
bun run type-check   # TypeScript validation
dndev format         # Format code with Prettier
```

### Code Formatting

The project includes `.prettierrc.cjs` which extends the framework's Prettier configuration. Run `dndev format` to format all TypeScript files according to the project's Prettier rules.

## 🙏 Built With

- [DoNotDev Framework](https://donotdev.com) - Application framework
- [React 19](https://react.dev) - UI library
- [Vite](https://vitejs.dev) - Build tool
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Firebase](https://firebase.google.com) - Backend services
- [Stripe](https://stripe.com) - Payment processing

## 📄 License

Your project license here (MIT, Apache, proprietary, etc.)

## 🤝 Contributing

[Add your contribution guidelines here]

---

**Need help?** Check [DoNotDev Documentation](https://docs.donotdev.com) or open an issue.
