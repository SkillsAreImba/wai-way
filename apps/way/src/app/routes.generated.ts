// Auto-generated app routes by @donotdev/config
// Generated at 2026-03-04T00:44:49.793Z

import { lazy } from 'react';

export const appRoutes = [
  {
    path: '/',
    component: lazy(() => import('../pages/HomePage')),
    auth: false,
    meta: {"title":"Home","entity":"pages","action":null,"file":"src/pages/HomePage.tsx"}
  },
  {
    path: '/legal/legal-notice',
    component: lazy(() => import('../pages/legal/LegalNoticePage')),
    auth: false,
    meta: {"title":"Legal Notice","entity":"legal","action":null,"file":"src/pages/legal/LegalNoticePage.tsx","namespace":"legalNotice","icon":"Building","hideFromMenu":true}
  },
  {
    path: '/legal/privacy',
    component: lazy(() => import('../pages/legal/PrivacyPage')),
    auth: false,
    meta: {"title":"Privacy","entity":"legal","action":null,"file":"src/pages/legal/PrivacyPage.tsx","namespace":"privacy","icon":"Shield","hideFromMenu":true}
  },
  {
    path: '/legal/terms',
    component: lazy(() => import('../pages/legal/TermsPage')),
    auth: false,
    meta: {"title":"Terms","entity":"legal","action":null,"file":"src/pages/legal/TermsPage.tsx","namespace":"terms","icon":"FileText","hideFromMenu":true}
  }
];

export const routeManifest = {
  totalRoutes: 4,
  routingMode: 'app',
  generatedAt: '2026-03-04T00:44:49.793Z'
};

export default appRoutes;
