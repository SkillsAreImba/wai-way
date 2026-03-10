// Auto-generated DnDev env config by @donotdev/config
// Generated at: 2026-03-10T09:30:45.256Z
// Populates _DNDEV_CONFIG_.env with NEXT_PUBLIC_* environment variables

const envConfig = {
  "NEXT_PUBLIC_APP_URL": "http://wai-way.com",
  "NEXT_PUBLIC_DONOTDEV_LICENSE_KEY": "dndev_dev_seat_1_65093a22c85edff3"
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
  globalThis._DNDEV_CONFIG_.env = envConfig;
}

// Export for compatibility
export default envConfig;
