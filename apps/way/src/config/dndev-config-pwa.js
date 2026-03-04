// Auto-generated DnDev config by @donotdev/config
// Generated at: 2026-03-04T00:44:49.848Z
// Populates _DNDEV_CONFIG_ with discovery results

const pwaConfig = {
  "assets": [
    {
      "type": "manifest",
      "path": "public/manifest.json",
      "content": {
        "name": "DoNotDev App",
        "short_name": "DoNotDev",
        "description": "Built with DoNotDev Framework ©",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#ffffff",
        "theme_color": "#000000",
        "icons": []
      },
      "size": 232
    }
  ],
  "manifest": {
    "name": "DoNotDev App",
    "short_name": "DoNotDev",
    "description": "Built with DoNotDev Framework ©",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#000000",
    "icons": []
  },
  "totalFiles": 1,
  "timestamp": 1772585089848
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
  globalThis._DNDEV_CONFIG_.pwa = pwaConfig;
}

// Export for compatibility
export default pwaConfig;
