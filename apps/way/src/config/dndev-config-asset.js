// Auto-generated DnDev config by @donotdev/config
// Generated at: 2026-03-04T00:44:49.838Z
// Populates _DNDEV_CONFIG_ with discovery results

const assetConfig = {
  "assets": [
    {
      "path": "/i18n-manifest.json",
      "name": "i18n-manifest.json",
      "type": "manifest",
      "format": "json",
      "size": 461,
      "sizeFormatted": "461 Bytes",
      "isModern": false
    },
    {
      "path": "/route-manifest.json",
      "name": "route-manifest.json",
      "type": "manifest",
      "format": "json",
      "size": 1268,
      "sizeFormatted": "1.24 KB",
      "isModern": false
    },
    {
      "path": "/theme-manifest.json",
      "name": "theme-manifest.json",
      "type": "manifest",
      "format": "json",
      "size": 515,
      "sizeFormatted": "515 Bytes",
      "isModern": false
    }
  ],
  "manifest": {
    "logo": {
      "optimal": null,
      "fallback": null
    },
    "favicon": {
      "optimal": null,
      "fallback": null
    },
    "appleTouchIcon": null,
    "androidChrome": {
      "192": null,
      "512": null
    },
    "manifest": "/i18n-manifest.json",
    "modernFormats": [],
    "fallbackFormats": [
      "/i18n-manifest.json",
      "/route-manifest.json",
      "/theme-manifest.json"
    ],
    "logoSvgContent": null
  },
  "copiedAssets": [
    "manifest.json"
  ],
  "generatedAssets": [],
  "pwaIcons": [],
  "timestamp": 1772585089838
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
  globalThis._DNDEV_CONFIG_.assets = {
    mapping: assetConfig.manifest,
    logoSvgContent: null,
    manifest: {
      totalAssets: 3,
      generatedAt: '2026-03-04T00:44:49.838Z',
    },
  };
}

// Export for compatibility
export default assetConfig;
