# Setup: Firebase Functions

**Most is pre-configured.** Functions scaffolded. Just add config and deploy.

---

## Standard Use

**Structure:**
```
functions/
├── src/
│   ├── billing/
│   └── index.ts
├── functions.yaml    # Manually maintained
└── .env.local        # Local secrets
```

**Environment:**
```bash
# .env.local (local)
STRIPE_SECRET_KEY=sk_test_...

# .env (production, synced via dndev sync-secrets)
STRIPE_SECRET_KEY=sk_live_...
```

---

## Advanced: Adding Functions

1. **Create:** `src/billing/myFunction.ts`
2. **Export:** `export * from './billing/myFunction.js';` in `src/index.ts`
3. **Add to functions.yaml:**
```yaml
endpoints:
  myFunction:
    region: [europe-west1]
    platform: gcfv2
    httpsTrigger: {}
    entryPoint: myFunction
    labels: {}
```
4. **Deploy:** `dndev deploy`

**Critical:** Every exported function must be in `functions.yaml` or it won't deploy.

---

## Advanced: Framework Integration

```typescript
// Your function = framework + your config
import { createCheckoutSession as generic } from '@donotdev/functions/firebase';
import { stripeBackConfig } from '../config/stripeBackConfig';

export const createCheckoutSession = generic(stripeBackConfig);
```

---

**Add functions, get backend. Framework handles the rest.**
