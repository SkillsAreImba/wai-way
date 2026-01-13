# Setup: Billing

**Most is pre-configured.** Create Stripe config files. Framework handles checkout, webhooks, subscriptions.

---

## Standard Use

**Environment:**
```bash
# .env (frontend)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_xxx

# functions/.env.local (local)
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx  # From 'stripe listen'

# functions/.env (production)
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
```

**Stripe Dashboard:** Create products, copy Price IDs (`price_...`)

---

## Advanced: Frontend Config

```typescript
// src/config/stripeFrontConfig.ts
export const stripeFrontConfig: StripeFrontConfig = {
  pro_plan: {
    name: 'Pro Plan',
    price: 29,
    currency: 'USD',
    priceId: 'price_1234567890',
    allowPromotionCodes: true,
  },
};
```

---

## Advanced: Backend Config

```typescript
// functions/src/config/stripeBackConfig.ts
export const stripeBackConfig: StripeBackConfig = {
  pro_plan: {
    type: 'StripeSubscription', // or 'StripePayment'
    price: 2900, // In cents
    priceId: process.env.STRIPE_PRICE_PRO_PLAN!,
    tier: 'pro',
    onPurchaseSuccess: async (userId, metadata) => { /* Grant features */ },
  },
};

// functions/src/index.ts
import { createCheckoutSession } from '@donotdev/functions/firebase';
export const createCheckout = createCheckoutSession(stripeBackConfig);
```

---

## Advanced: Components & Hooks

```tsx
import { useStripeBilling } from '@donotdev/billing';
import { SubscriptionTemplate, PaymentTemplate } from '@donotdev/templates';
import { ProductCard, SubscriptionManager } from '@donotdev/billing';

const checkout = useStripeBilling('checkout');
await checkout({ priceId: 'price_123', mode: 'subscription' });
```

---

**Create config files, get billing. Framework handles the rest.**
