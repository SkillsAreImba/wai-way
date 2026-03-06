// apps/way/src/config/legal.ts

/**
 * @fileoverview Legal Information Configuration
 * @description Centralized legal information for Terms, Privacy, and Legal Notice pages
 *
 * @version 0.0.1
 * @since 0.0.1
 * @author AMBROISE PARK Consulting
 */

import type { LegalConfig } from '@donotdev/core';

/**
 * Legal configuration for all legal pages
 * No fallbacks - configure your actual legal information here
 */
export const legalConfig: LegalConfig = {
	/**
	 * Company/Publisher Information
	 */
	company: {
		name: 'AMBROISE PARK Consulting',
		shortName: 'A-P C',
		legalStatus: 'SAS',
		registrationNumber: '944 186 162 00011',
		vatNumber: 'FR00944186162',
		shareCapital: '1,000 EUR',
	},

	/**
	 * Contact Information
	 */
	contact: {
		address: '205 chemin de la Halte, 13090 Aix-en-Provence, France',
		email: 'Rodolphe@ambroise-park.com',
		phone: '+33 1 23 45 67 89',
		supportEmail: 'contact@donotdev.com',
		privacyEmail: 'contact@donotdev.com',
		dpoEmail: 'contact@donotdev.com',
	},

	/**
	 * Publication Director (Directeur de la publication)
	 */
	director: {
		name: 'Rodolphe AMBROISE PARK',
		role: 'CEO',
	},

	/**
	 * Hosting Provider
	 */
	hosting: {
		provider: 'Vercel Inc.',
		address:
			'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA',
		contact: 'https://vercel.com/support',
	},

	/**
	 * Legal Jurisdiction and Arbitration
	 */
	jurisdiction: {
		country: 'France',
		arbitrationOrg: "Centre de Médiation et d'Arbitrage de Paris",
		arbitrationLocation: 'Paris, France',
	},

	/**
	 * Website Information
	 */
	website: {
		url: 'https://wai-way.com',
	},

	/**
	 * Optional Sections Configuration
	 */
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

	/**
	 * Last updated dates (ISO strings) - formatted based on user's locale
	 */
	lastUpdated: {
		terms: '2026-03-06T00:00:00.000Z',
		privacy: '2026-03-06T00:00:00.000Z',
		legalNotice: '2026-03-06T00:00:00.000Z',
	},
} as const;
