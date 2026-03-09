// Auto-generated DnDev config by @donotdev/config
// Generated at: 2026-03-07T15:59:52.793Z
// Populates _DNDEV_CONFIG_ with discovery results

const seoConfig = {
  "routes": [
    {
      "path": "/",
      "component": "HomePage",
      "importPath": "/src/pages/HomePage.tsx",
      "auth": false,
      "meta": {
        "title": "Home",
        "entity": "pages",
        "action": null,
        "file": "src/pages/HomePage.tsx"
      },
      "metaExport": null,
      "file": "src/pages/HomePage.tsx"
    },
    {
      "path": "/legal/legal-notice",
      "component": "LegalNoticePage",
      "importPath": "/src/pages/legal/LegalNoticePage.tsx",
      "auth": false,
      "meta": {
        "title": "Legal Notice",
        "entity": "legal",
        "action": null,
        "file": "src/pages/legal/LegalNoticePage.tsx",
        "namespace": "legalNotice",
        "icon": "Building",
        "hideFromMenu": true
      },
      "metaExport": {
        "namespace": "legalNotice",
        "icon": "Building",
        "hideFromMenu": true
      },
      "file": "src/pages/legal/LegalNoticePage.tsx"
    },
    {
      "path": "/legal/privacy",
      "component": "PrivacyPage",
      "importPath": "/src/pages/legal/PrivacyPage.tsx",
      "auth": false,
      "meta": {
        "title": "Privacy",
        "entity": "legal",
        "action": null,
        "file": "src/pages/legal/PrivacyPage.tsx",
        "namespace": "privacy",
        "icon": "Shield",
        "hideFromMenu": true
      },
      "metaExport": {
        "namespace": "privacy",
        "icon": "Shield",
        "hideFromMenu": true
      },
      "file": "src/pages/legal/PrivacyPage.tsx"
    },
    {
      "path": "/legal/terms",
      "component": "TermsPage",
      "importPath": "/src/pages/legal/TermsPage.tsx",
      "auth": false,
      "meta": {
        "title": "Terms",
        "entity": "legal",
        "action": null,
        "file": "src/pages/legal/TermsPage.tsx",
        "namespace": "terms",
        "icon": "FileText",
        "hideFromMenu": true
      },
      "metaExport": {
        "namespace": "terms",
        "icon": "FileText",
        "hideFromMenu": true
      },
      "file": "src/pages/legal/TermsPage.tsx"
    }
  ],
  "errors": [],
  "source": "auto-discovery",
  "totalFiles": 4,
  "timestamp": 1772899192793
};

// Populate unified DnDev config for runtime access (universal CSR/SSR)
if (typeof globalThis !== 'undefined') {
  if (!globalThis._DNDEV_CONFIG_) {
    globalThis._DNDEV_CONFIG_ = {
      platform: 'nextjs',
      mode: typeof process !== 'undefined' && process.env.NODE_ENV === 'production' ? 'production' : 'development',
      version: '1.0.0',
      context: typeof window !== 'undefined' ? 'client' : 'server',
      timestamp: Date.now(),
    };
  }
  globalThis._DNDEV_CONFIG_.seo = seoConfig;
}

// Export for compatibility
export default seoConfig;
