import { defineViteConfig } from '@donotdev/core/vite';
import { appConfig } from './src/config/app';

export default defineViteConfig({
  appConfig,
  server: {
    https: false,
  },
  resolve: {
    conditions: ['import', 'module', 'browser', 'default'],
  },
  optimizeDeps: {
    exclude: ['shiki'],
  },
  ssr: {
    noExternal: ['shiki'],
  },
});