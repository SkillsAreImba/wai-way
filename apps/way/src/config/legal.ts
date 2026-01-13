// apps/apc/src/config/legal.ts

/**
 * @fileoverview Legal Information Configuration
 * @description Centralized legal information for Terms, Privacy, and Legal Notice pages
 *
 * IMPORTANT: Configure your actual legal information here.
 * This file is used by all legal pages (Terms of Service, Privacy Policy, Legal Notice).
 *
 * @version 0.0.1
 * @since 0.0.1
 */

import type { LegalConfig } from '@donotdev/core';

/**
 * Legal Configuration
 *
 * Fill in your actual company and legal information below.
 * Remove any optional fields you don't need.
 *
 * For detailed documentation on each field, see the JSDoc in @donotdev/types or
 * hover over any field in your IDE for inline documentation.
 */
export const legalConfig: LegalConfig = {
	company: {
		name: 'AMBROISE PARK Consulting',
		shortName: 'A-P C',
		legalStatus: 'SAS',
		registrationNumber: '944 186 162 00011',
		vatNumber: 'FR00944186162',
		shareCapital: '1,000 EUR',
	},

	contact: {
		address: '205 chemin de la Halte, 13090 Aix-en-Provence, France',
		email: 'Rodolphe@ambroise-park.com',
		phone: '+33 1 23 45 67 89',
		supportEmail: 'rodolphe@ambroise-park.com',
		privacyEmail: 'rodolphe@ambroise-park.com',
		dpoEmail: 'rodolphe@ambroise-park.com',
	},

	director: {
		name: 'Rodolphe AMBROISE PARK',
		role: 'CEO',
	},

	hosting: {
		provider: 'Vercel Inc.',
		address: '340 S Lemon Ave #4133, Walnut, CA 91789, USA',
		contact: 'https://vercel.com/support',
	},

	jurisdiction: {
		country: 'France',
		arbitrationOrg: "Centre de Médiation et d'Arbitrage de Paris",
		arbitrationLocation: 'Paris, France',
	},

	website: {
		url: 'https://www.ambroise-park.com',
	},

	sections: {
		terms: {
			children: false,
			international: true,
			california: false,
			eu: true,
		},
		privacy: {
			children: false,
			international: true,
			california: false,
			eu: true,
		},
		legalNotice: {
			intellectualProperty: true,
			personalData: true,
			cookies: true,
		},
	},

	lastUpdated: {
		terms: '2025-05-05T00:00:00.000Z',
		privacy: '2025-05-05T00:00:00.000Z',
		legalNotice: '2025-05-05T00:00:00.000Z',
	},
} as const;

/**
 * Type-safe access to legal config
 */
export type AppLegalConfig = typeof legalConfig;

/**
 * QUICK START CHECKLIST:
 *
 * 1. Company Information:
 *    - [ ] Update company.name with your legal entity name
 *    - [ ] Set company.legalStatus (SARL, LLC, GmbH, etc.)
 *    - [ ] Add company.registrationNumber (SIRET, EIN, Company Number)
 *    - [ ] Add company.vatNumber if you're in the EU or have VAT obligations
 *
 * 2. Contact Information:
 *    - [ ] Update contact.address with your registered office
 *    - [ ] Set contact.email for legal notices
 *    - [ ] Set contact.supportEmail for customer support
 *    - [ ] Set contact.privacyEmail for GDPR/privacy requests
 *    - [ ] Set contact.dpoEmail if you have a Data Protection Officer
 *
 * 3. Legal Responsibility:
 *    - [ ] Update director.name (person responsible for content)
 *    - [ ] Set director.role (CEO, Director, etc.)
 *
 * 4. Hosting:
 *    - [ ] Verify hosting.provider is correct
 *    - [ ] Update hosting.address and hosting.contact if needed
 *
 * 5. Jurisdiction:
 *    - [ ] Set jurisdiction.country where you operate
 *    - [ ] Configure arbitration details if needed
 *
 * 6. Optional Sections:
 *    - [ ] Review and enable/disable sections based on your needs
 *    - [ ] Enable sections.*.eu if you have EU users (GDPR)
 *    - [ ] Enable sections.*.california if you have California users (CCPA)
 *
 * LEGAL COMPLIANCE NOTES:
 *
 * - France: All fields with "Required" are mandatory for French websites
 * - EU/GDPR: contact.dpoEmail is required if you process significant personal data
 * - USA/California: Enable California sections if you have California users
 * - International: Enable international sections for global audience
 *
 * For more information, consult your legal advisor or refer to:
 * - https://docs.dndev.com/legal/configuration (framework docs)
 * - Your local business registration authority
 * - GDPR guidance: https://gdpr.eu
 */
