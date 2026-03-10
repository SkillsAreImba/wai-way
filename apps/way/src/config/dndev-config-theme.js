// Auto-generated DnDev config by @donotdev/config
// Generated at: 2026-03-10T09:50:35.432Z
// Populates _DNDEV_CONFIG_ with discovery results

const themeConfig = {
  discovered: [
  {
    "name": "light",
    "displayName": "Matrix",
    "meta": {
      "icon": "Monitor"
    },
    "essential": false,
    "isDark": false,
    "variableCount": 0
  }
],
  variables: {
  "framework": [],
  "consumer": [
    "--accent",
    "--accent-foreground",
    "--background",
    "--border",
    "--card",
    "--card-foreground",
    "--destructive",
    "--destructive-foreground",
    "--font-family",
    "--font-headline",
    "--font-sans",
    "--foreground",
    "--header-height",
    "--input",
    "--muted",
    "--muted-foreground",
    "--popover",
    "--popover-foreground",
    "--primary",
    "--primary-foreground",
    "--ring",
    "--secondary",
    "--secondary-foreground",
    "--success",
    "--success-foreground",
    "--theme-icon",
    "--theme-is-dark",
    "--theme-label",
    "--warning",
    "--warning-foreground"
  ],
  "all": [
    "--accent",
    "--accent-foreground",
    "--background",
    "--border",
    "--card",
    "--card-foreground",
    "--destructive",
    "--destructive-foreground",
    "--font-family",
    "--font-headline",
    "--font-sans",
    "--foreground",
    "--header-height",
    "--input",
    "--muted",
    "--muted-foreground",
    "--popover",
    "--popover-foreground",
    "--primary",
    "--primary-foreground",
    "--ring",
    "--secondary",
    "--secondary-foreground",
    "--success",
    "--success-foreground",
    "--theme-icon",
    "--theme-is-dark",
    "--theme-label",
    "--warning",
    "--warning-foreground"
  ]
},
  utilities: {
    framework: [],
    consumer: [
  "--accent",
  "--accent-foreground",
  "--background",
  "--border",
  "--card",
  "--card-foreground",
  "--destructive",
  "--destructive-foreground",
  "--font-family",
  "--font-headline",
  "--font-sans",
  "--foreground",
  "--header-height",
  "--input",
  "--muted",
  "--muted-foreground",
  "--popover",
  "--popover-foreground",
  "--primary",
  "--primary-foreground",
  "--ring",
  "--secondary",
  "--secondary-foreground",
  "--success",
  "--success-foreground",
  "--theme-icon",
  "--theme-is-dark",
  "--theme-label",
  "--warning",
  "--warning-foreground"
],
    all: [
  "--accent",
  "--accent-foreground",
  "--background",
  "--border",
  "--card",
  "--card-foreground",
  "--destructive",
  "--destructive-foreground",
  "--font-family",
  "--font-headline",
  "--font-sans",
  "--foreground",
  "--header-height",
  "--input",
  "--muted",
  "--muted-foreground",
  "--popover",
  "--popover-foreground",
  "--primary",
  "--primary-foreground",
  "--ring",
  "--secondary",
  "--secondary-foreground",
  "--success",
  "--success-foreground",
  "--theme-icon",
  "--theme-is-dark",
  "--theme-label",
  "--warning",
  "--warning-foreground"
],
  },
  manifest: {
    totalThemes: 1,
    totalVariables: 30,
    frameworkVariables: 0,
    consumerVariables: 30,
    generatedAt: new Date().toISOString(),
  },
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
  globalThis._DNDEV_CONFIG_.themes = themeConfig;
}

// Export for compatibility
export default themeConfig;
