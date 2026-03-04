// Auto-generated DnDev config by @donotdev/config
// Generated at: 2026-03-04T10:28:45.510Z
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
        "icons": [
          {
            "src": "/public/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "/public/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "/public/favicon.ico",
            "sizes": "32x32",
            "type": "image/ico",
            "purpose": "any"
          },
          {
            "src": "/public/favicon.svg",
            "sizes": "32x32",
            "type": "image/svg",
            "purpose": "any"
          },
          {
            "src": "/public/apple-touch-icon.png",
            "sizes": "180x180",
            "type": "image/png",
            "purpose": "apple-touch"
          },
          {
            "src": "/public/logo.svg",
            "sizes": "192x192",
            "type": "image/svg",
            "purpose": "any"
          }
        ]
      },
      "size": 232
    },
    {
      "type": "icon",
      "path": "public/icon-192x192.png",
      "size": {
        "width": 192,
        "height": 192
      },
      "format": "png",
      "purpose": "any"
    },
    {
      "type": "icon",
      "path": "public/icon-512x512.png",
      "size": {
        "width": 512,
        "height": 512
      },
      "format": "png",
      "purpose": "any"
    },
    {
      "type": "icon",
      "path": "public/favicon.ico",
      "size": {
        "width": 32,
        "height": 32
      },
      "format": "ico",
      "purpose": "any"
    },
    {
      "type": "icon",
      "path": "public/favicon.svg",
      "size": {
        "width": 32,
        "height": 32
      },
      "format": "svg",
      "purpose": "any"
    },
    {
      "type": "icon",
      "path": "public/apple-touch-icon.png",
      "size": {
        "width": 180,
        "height": 180
      },
      "format": "png",
      "purpose": "apple-touch"
    },
    {
      "type": "icon",
      "path": "public/logo.svg",
      "size": {
        "width": 192,
        "height": 192
      },
      "format": "svg",
      "purpose": "any"
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
    "icons": [
      {
        "src": "/public/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/public/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/public/favicon.ico",
        "sizes": "32x32",
        "type": "image/ico",
        "purpose": "any"
      },
      {
        "src": "/public/favicon.svg",
        "sizes": "32x32",
        "type": "image/svg",
        "purpose": "any"
      },
      {
        "src": "/public/apple-touch-icon.png",
        "sizes": "180x180",
        "type": "image/png",
        "purpose": "apple-touch"
      },
      {
        "src": "/public/logo.svg",
        "sizes": "192x192",
        "type": "image/svg",
        "purpose": "any"
      }
    ]
  },
  "totalFiles": 7,
  "timestamp": 1772620125510
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
