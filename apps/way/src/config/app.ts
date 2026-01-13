/**
 * @fileoverview Application configuration
 * @description Defines application metadata and feature flags
 * @version 0.0.1
 * @since 0.0.1
 * @author AMBROISE PARK Consulting
 */

import type { AppConfig } from '@donotdev/core';

/**
 * Application name constant
 *
 * @version 0.0.1
 * @since 0.0.1
 * @author AMBROISE PARK Consulting
 */
export const APP_NAME = 'WAI-WAY';

/**
 * Application short name constant
 *
 * @version 0.0.1
 * @since 0.0.1
 * @author AMBROISE PARK Consulting
 */
export const APP_SHORT_NAME = 'WAI-WAY';

/**
 * Application description constant
 *
 * @version 0.0.1
 * @since 0.0.1
 * @author AMBROISE PARK Consulting
 */
export const APP_DESCRIPTION = 'With AI WAY of building webApps';

/**
 * Application tagline constant
 *
 * @version 0.0.1
 * @since 0.0.1
 * @author AMBROISE PARK Consulting
 */
export const APP_TAGLINE = 'Powered by the DoNotDev Framework';

/**
 * Application configuration object
 *
 * @version 0.0.1
 * @since 0.0.1
 * @author AMBROISE PARK Consulting
 */
export const appConfig: AppConfig = {
  app: {
    name: APP_NAME,
    shortName: APP_SHORT_NAME,
    description: APP_DESCRIPTION,
    url: 'https://wai-way.com',
    footer: {
      legalLinks: [
        { path: '#cookie-settings', label: 'footer.legal.cookieSettings' },
        { path: '/legal/privacy', label: 'footer.legal.privacyPolicy' },
        { path: '/legal/terms', label: 'footer.legal.termsOfService' },
        { path: '/legal/legal-notice', label: 'footer.legal.legalNotice' },
      ],
    },
  },
  preset: 'docs',
  features: {
    // Optional: Enable debug tools in development
    // debug: true,
  },
  // Optional: Override auth routes
  // auth: {
  //   authRoute: '/signin',
  //   roleRoute: '/403',
  //   tierRoute: '/pricing',
  // },
};

