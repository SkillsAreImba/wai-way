// Auto-generated asset manifest by @donotdev/config
// Generated at 2026-03-04T00:44:49.840Z
// Populates _DNDEV_CONFIG_ with discovery results

export const assets = [
  {
    path: '/i18n-manifest.json',
    type: 'manifest',
    format: 'json',
    size: 461,
    optimized: false
  },
  {
    path: '/route-manifest.json',
    type: 'manifest',
    format: 'json',
    size: 1268,
    optimized: false
  },
  {
    path: '/theme-manifest.json',
    type: 'manifest',
    format: 'json',
    size: 515,
    optimized: false
  }
];

export const assetManifest = {
  logo: {"optimal":null,"fallback":null},
  favicon: {"optimal":null,"fallback":null},
  appleTouchIcon: null,
  androidChrome: {"192":null,"512":null},
  manifest: "/i18n-manifest.json",
  modernFormats: [],
  fallbackFormats: ["/i18n-manifest.json","/route-manifest.json","/theme-manifest.json"],
  logoSvgContent: null
};

export const copiedAssets = [
  "manifest.json"
];

export const assetStats = {
  totalAssets: 3,
  copiedAssets: 1,
  source: 'undefined',
  generatedAt: '2026-03-04T00:44:49.840Z'
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
    mapping: assetManifest,
    logoSvgContent: null,
    manifest: {
      totalAssets: 3,
      generatedAt: '2026-03-04T00:44:49.840Z',
    },
  };
}

export default assets;
