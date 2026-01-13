# Setup: Authentication (Firebase Auth)

**Most is pre-configured.** Firebase Auth for user sign-in/sign-up. Add env vars and config. Framework handles providers, callbacks, sessions.

---

## Standard Use

**Environment:**
```bash
# .env
VITE_AUTH_PARTNERS=password,emailLink,google,github,facebook
```

**Config:**
```typescript
// src/config/app.ts
export const appConfig: AppConfig = {
  auth: {
    authRoute: '/login',
    loginPath: '/login',     // Optional: undefined = header providers
    profilePath: '/profile',
  },
};
```

**Firebase Console:** Enable providers in Authentication > Sign-in method

---

## Advanced: Protected Routes

```tsx
// Basic protection
export const meta: PageMeta = {
  namespace: NAMESPACE,
  auth: { required: true },
};

// Role-based access
export const meta: PageMeta = {
  namespace: NAMESPACE,
  auth: { required: true, role: 'admin' },
};

// Tier-based access
export const meta: PageMeta = {
  namespace: NAMESPACE,
  auth: { required: true, tier: 'pro' },
};
```

---

## Advanced: Components & Hooks

```tsx
import { useAuth } from '@donotdev/auth';
import { MultipleAuthProviders, AuthPartnerButton } from '@donotdev/auth';
import { AuthHeader, AuthMenu } from '@donotdev/ui';
import { LoginTemplate } from '@donotdev/templates';

// Hook
const user = useAuth('user');
const signIn = useAuth('signInWithEmail');
const signOut = useAuth('signOut');

// Components
<MultipleAuthProviders layout="vertical" emailMode="signin" />
<AuthPartnerButton partnerId="google" method="popup" />
```

**Pre-configured:** `AuthHeader` in layout (null if auth disabled), OAuth callbacks, session management, account linking.

---

**Add env vars, get auth. Framework handles the rest.**
