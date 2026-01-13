/**
 * @fileoverview ESLint Flat Config
 * @description Modern ESLint flat configuration for the DoNotDev framework with TypeScript, React, and accessibility support.
 *
 * @version 0.0.1
 * @since 0.0.1
 * @author AMBROISE PARK Consulting
 */

import { dirname } from 'path';
import { fileURLToPath } from 'url';

import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

import customPlugin from '@donotdev/core/config/eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🔍 ESLint: Starting analysis...');

export default [
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/build/**',
      '**/.next/**',
      '**/coverage/**',
      '**/lib/**',
      '**/es/**',
      '**/cjs/**',
      '**/umd/**',
      '**/types/**',
      '**/*.d.ts',
      '**/*.min.js',
      '**/*.bundle.js',
      '**/*element.tsx',
      '**/*element.ts',
      '**/*-element.tsx',
      '**/*-element.ts',
    ],
  },
  {
    files: ['*.config.js', 'postcss.config.cjs', 'eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
  {
    files: ['vite.config.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.node.json',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.node.json',
        },
      },
    },
    rules: {
      'prettier/prettier': 'warn',
    },
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react,
      'react-refresh': reactRefresh,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      prettier: prettierPlugin,
      '@typescript-eslint': tsPlugin,
      '@donotdev/config': customPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      '@donotdev/config/no-singleton-lifecycle': 'error',
      '@donotdev/config/react-19-ssr-safe': 'error',
      '@donotdev/config/prefer-framework-utils': 'warn',
      'react/no-unstable-nested-components': 'error',
      'no-restricted-globals': [
        'error',
        {
          name: 'window',
          message: 'Use typeof window !== "undefined" check for SSR safety',
        },
        {
          name: 'document',
          message: 'Use typeof document !== "undefined" check for SSR safety',
        },
        {
          name: 'localStorage',
          message: 'Use safeLocalStorage from @donotdev/utils for SSR safety',
        },
        {
          name: 'sessionStorage',
          message: 'Use safeSessionStorage from @donotdev/utils for SSR safety',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: '@donotdev/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-named-export': 'off',
      'no-console': 'off',
      'no-debugger': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'warn',
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': [
        'warn',
        {
          aspects: ['invalidHref', 'preferButton'],
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@donotdev/config/require-use-client': [
        'warn',
        {
          clientPatterns: [
            'useState',
            'useEffect',
            'useCallback',
            'useMemo',
            'useRef',
            'useContext',
            'useReducer',
            'useLayoutEffect',
            'useImperativeHandle',
            'useDebugValue',
            'useId',
            'useSyncExternalStore',
            'useTransition',
            'useDeferredValue',
            'useInsertionEffect',
            'onClick',
            'onChange',
            'onSubmit',
            'onFocus',
            'onBlur',
            'onMouseEnter',
            'onMouseLeave',
            'onKeyDown',
            'onKeyUp',
            'onKeyPress',
            'onScroll',
            'onResize',
            'onLoad',
            'onError',
            'window',
            'document',
            'localStorage',
            'sessionStorage',
            'navigator',
            'location',
            'history',
            'addEventListener',
            'removeEventListener',
            'useAuth',
            'useTranslation',
            'useLocalStorage',
            'useTheme',
            'useRouter',
            'usePathname',
            'useSearchParams',
            'framer-motion',
            'lottie',
            'gsap',
            'shiki',
          ],
          filePatterns: ['**/*.{ts,tsx}'],
          excludePatterns: [
            '**/*.config.{js,ts}',
            '**/*.d.ts',
            '**/types/**',
            '**/constants/**',
            '**/utils/**',
            '**/helpers/**',
            '**/stores/**',
            '**/api/**',
            '**/functions/**',
            '**/lib/**',
            '**/server/**',
            '**/middleware/**',
            '**/edge/**',
            '**/node_modules/**',
            '**/dist/**',
            '**/build/**',
          ],
        },
      ],
      'import/no-named-export': 'off',
    },
  },
  {
    files: [
      '**/components/**/*.{ts,tsx}',
      '**/src/**/*.{ts,tsx}',
    ],
    rules: {
      'import/no-default-export': 'off',
      'import/prefer-default-export': 'off',
    },
  },
  {
    files: [
      '**/utils/**/*.{ts,tsx}',
      '**/helpers/**/*.{ts,tsx}',
      '**/hooks/**/*.{ts,tsx}',
      '**/stores/**/*.{ts,tsx}',
    ],
    rules: {
      'import/no-default-export': 'error',
      'import/prefer-default-export': 'off',
    },
  },
  {
    files: [
      '**/functions/**/*.{ts,tsx}',
      '**/lib/**/*.{ts,tsx}',
      '**/api/**/*.{ts,tsx}',
    ],
    rules: {
      'import/no-default-export': 'error',
      'import/prefer-default-export': 'off',
    },
  },
  {
    files: [
      '**/pages/**/*.{ts,tsx}',
      '**/app/**/*.{ts,tsx}',
      '**/*Page.{ts,tsx}',
      '**/*Page.tsx',
    ],
    rules: {
      'import/no-default-export': 'off',
      'import/prefer-default-export': 'warn',
    },
  },
  {
    files: ['**/index.{ts,tsx}', '**/index.js'],
    rules: {
      'import/no-default-export': 'off',
      'import/prefer-default-export': 'off',
    },
  },
];
