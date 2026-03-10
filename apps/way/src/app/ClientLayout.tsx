'use client';
// src/app/ClientLayout.tsx

// Import generated configs first to set globalThis._DNDEV_CONFIG_ before any hooks run
// Each handler writes to its own file to avoid overwrites
import '../config/dndev-config-route.js';
import '../config/dndev-config-theme.js';
import '../config/dndev-config-i18n.js';
import '../config/dndev-config-pwa.js';
import '../config/dndev-config-asset.js';
import '../config/dndev-config-seo.js';
import '../config/dndev-config-env.js';

import React from 'react';
import { NextJsAppProviders } from '@donotdev/ui/next';
import { LanguageFAB } from '@donotdev/core';

import '../config/providers';
import { appConfig } from '../config/app';
import MatrixRain from '../components/MatrixRain';
import SiteFooter from '../components/SiteFooter';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div id="root">
      <MatrixRain />
      <NextJsAppProviders
        config={appConfig}
        layout={{
          breadcrumbs: 'never',
          header: () => null,
        }}
      >
        {children}
        <SiteFooter />
        <LanguageFAB />
      </NextJsAppProviders>
    </div>
  );
}
