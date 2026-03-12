// Auto-generated DnDev config by @donotdev/config
// Generated at: 2026-03-11T23:36:51.848Z
// Populates _DNDEV_CONFIG_ with discovery results

const i18nConfig = {
  mapping: {
  "footer": {
    "en": "./src/locales/footer_en.json",
    "fr": "./src/locales/footer_fr.json"
  },
  "home": {
    "en": "./src/locales/home_en.json",
    "fr": "./src/locales/home_fr.json"
  },
  "dndev": {
    "en": "./../../node_modules/@donotdev/core/i18n/locales/eager/dndev_en.json",
    "fr": "./../../node_modules/@donotdev/core/i18n/locales/eager/dndev_fr.json"
  },
  "blog": {
    "en": "./../../node_modules/@donotdev/core/i18n/locales/lazy/blog_en.json",
    "fr": "./../../node_modules/@donotdev/core/i18n/locales/lazy/blog_fr.json"
  },
  "cookies": {
    "en": "./../../node_modules/@donotdev/core/i18n/locales/lazy/cookies_en.json",
    "fr": "./../../node_modules/@donotdev/core/i18n/locales/lazy/cookies_fr.json"
  },
  "homeTemplate": {
    "en": "./../../node_modules/@donotdev/core/i18n/locales/lazy/homeTemplate_en.json",
    "fr": "./../../node_modules/@donotdev/core/i18n/locales/lazy/homeTemplate_fr.json"
  },
  "legalNotice": {
    "en": "./../../node_modules/@donotdev/core/i18n/locales/lazy/legalNotice_en.json",
    "fr": "./../../node_modules/@donotdev/core/i18n/locales/lazy/legalNotice_fr.json"
  },
  "privacy": {
    "en": "./../../node_modules/@donotdev/core/i18n/locales/lazy/privacy_en.json",
    "fr": "./../../node_modules/@donotdev/core/i18n/locales/lazy/privacy_fr.json"
  },
  "terms": {
    "en": "./../../node_modules/@donotdev/core/i18n/locales/lazy/terms_en.json",
    "fr": "./../../node_modules/@donotdev/core/i18n/locales/lazy/terms_fr.json"
  }
},
  languages: [
  "en",
  "fr"
],
  eager: [
  "dndev",
  "footer",
  "home"
],
  fallback: 'en',
  content: {
  "footer": {
    "en": {
      "headings": {
        "product": "PRODUCT",
        "resources": "RESOURCES",
        "legal": "LEGAL"
      },
      "links": {
        "consulting": "Consulting",
        "training": "Coaching",
        "customDev": "Custom Dev",
        "framework": "DoNotDev Framework",
        "github": "WAI WAY on GitHub",
        "privacy": "Privacy Policy",
        "terms": "Terms of Service",
        "legalNotice": "Legal Notice"
      },
      "copyright": {
        "text": "© {{year}}",
        "company": "AMBROISE PARK Consulting",
        "rights": "All rights reserved."
      }
    },
    "fr": {
      "headings": {
        "product": "PRODUITS",
        "resources": "RESSOURCES",
        "legal": "LÉGAL"
      },
      "links": {
        "consulting": "Consulting",
        "training": "Accompagnement",
        "customDev": "Dev sur mesure",
        "framework": "Framework DoNotDev",
        "github": "WAI WAY sur GitHub",
        "privacy": "Politique de confidentialité",
        "terms": "Conditions d'utilisation",
        "legalNotice": "Mentions légales"
      },
      "copyright": {
        "text": "© {{year}}",
        "company": "AMBROISE PARK Consulting",
        "rights": "Tous droits réservés."
      }
    }
  },
  "home": {
    "en": {
      "hero": {
        "title": "<highlight>Every</highlight> single time.<br/>AI <highlight>almost</highlight> nails it!",
        "subtitle": "AI gets closer every day. Still misses.\n5%, 10%, 20% off — across pages, features, prompts.\nGlobal coherence? Forget it. You finish by hand.\n\nThe WAI WAY fixes that. Free. Any codebase."
      },
      "what": {
        "method": {
          "title": "The Problem with agents",
          "subtitle": "AI is fast. But fast and wrong gets expensive.",
          "items": [
            "AI forgets what it built two prompts ago",
            "No spec means no accountability",
            "You end up debugging AI's shortcuts",
            "\"Just prompt it\" doesn't scale past a prototype"
          ]
        },
        "tooling": {
          "title": "The Fix \"with AI WAY\"",
          "subtitle": "A five phase method that keeps your AI focused.",
          "items": [
            "Every phase produces a reviewable artifact",
            "You approve before the AI moves on",
            "Works with any codebase and any AI agent",
            "Spec, scaffold, build, test, deploy. In order"
          ]
        }
      },
      "protocol": {
        "title": "Five Phases. Skip None.",
        "phases": {
          "0": {
            "title": "Brainstorm",
            "subtitle": "Idea to complete spec.",
            "outcome": "A full spec before a single line of code.",
            "items": [
              "Describe what you want in plain language",
              "AI asks questions until nothing is ambiguous",
              "Data models, journeys, permissions, edge cases",
              "Output: spec documents you own and control"
            ]
          },
          "1": {
            "title": "Scaffold",
            "subtitle": "Clickable app, zero logic.",
            "outcome": "Navigate the real app before writing business code.",
            "items": [
              "Every screen gets a route and a placeholder",
              "Navigation wired end to end",
              "Catch structural mistakes before they cost you",
              "Demo ready in minutes"
            ]
          },
          "2": {
            "title": "Entities",
            "subtitle": "Your data, locked down.",
            "outcome": "Defined once, enforced everywhere.",
            "items": [
              "Fields, types, validations. Straight from the spec",
              "State machines with explicit transitions",
              "Who can do what, when. Decided upfront",
              "Single source of truth for the entire app"
            ]
          },
          "3": {
            "title": "Compose",
            "subtitle": "Real pages, real data.",
            "outcome": "Every screen does what the spec says.",
            "items": [
              "CRUD wired to your entities",
              "AI follows the spec step by step",
              "No freestyling, no invented features",
              "Functionality first, polish later"
            ]
          },
          "4": {
            "title": "Harden",
            "subtitle": "Ship it.",
            "outcome": "Nothing goes live unchecked.",
            "items": [
              "Tests generated from your spec",
              "Security rules from your access definitions",
              "Code review and vulnerability audit",
              "i18n, CI/CD, deploy"
            ]
          }
        }
      },
      "cta": {
        "title": "Follow the WAI WAY.",
        "subtitle": "The method is embedded in the framework. Skills and templates are on GitHub.",
        "linkFramework": "DoNotDev.com",
        "linkGithub": "GitHub"
      }
    },
    "fr": {
      "hero": {
        "title": "À <highlight>chaque</highlight> fois.<br/>L'IA rate de <highlight>peu</highlight> !",
        "subtitle": "L'IA s'améliore. Ça ne suffit pas.\n20% d'écarts sur chaque page, feature, prompt...\nDès qu'on a besoin de cohérence, on doit finir à la main.\n\nLa WAI WAY change la donne. Gratuite. Toute codebase."
      },
      "what": {
        "method": {
          "title": "Le problème avec les agents",
          "subtitle": "L'IA va vite. Mais vite et faux, ça coûte cher.",
          "items": [
            "L'IA oublie ce qu'elle a codé deux prompts avant",
            "Pas de spec = pas de comptes à rendre",
            "Tu finis par débugger les raccourcis de l'IA",
            "\"Prompt et ça roule\" tient pas au-delà d'un proto"
          ]
        },
        "tooling": {
          "title": "La solution \"with AI WAY\"",
          "subtitle": "Une méthode en cinq phases qui garde ton IA cadrée.",
          "items": [
            "Chaque phase produit un livrable vérifiable",
            "Tu valides avant que l'IA passe à la suite",
            "Compatible toute codebase, tout agent IA",
            "Spec, scaffold, build, test, deploy. Dans l'ordre"
          ]
        }
      },
      "protocol": {
        "title": "Cinq Phases. Aucune en option.",
        "phases": {
          "0": {
            "title": "Brainstorm",
            "subtitle": "De l'idée à la spec complète.",
            "outcome": "Une spec complète avant la moindre ligne de code.",
            "items": [
              "Décris ce que tu veux en langage courant",
              "L'IA pose des questions jusqu'à zéro ambiguïté",
              "Modèles de données, parcours, permissions, cas limites",
              "Résultat : des specs que tu possèdes et contrôles"
            ]
          },
          "1": {
            "title": "Scaffold",
            "subtitle": "App cliquable, zéro logique.",
            "outcome": "Navigue dans l'app réelle avant d'écrire du code métier.",
            "items": [
              "Chaque écran a sa route et son placeholder",
              "Navigation câblée de bout en bout",
              "Repère les erreurs de structure avant qu'elles coûtent",
              "Démo prête en quelques minutes"
            ]
          },
          "2": {
            "title": "Entities",
            "subtitle": "Tes données, verrouillées.",
            "outcome": "Définie une fois, appliquée partout.",
            "items": [
              "Champs, types, validations. Direct depuis la spec",
              "Machines à états avec transitions explicites",
              "Qui peut faire quoi, quand. Décidé en amont",
              "Source unique de vérité pour toute l'app"
            ]
          },
          "3": {
            "title": "Compose",
            "subtitle": "Vraies pages, vraies données.",
            "outcome": "Chaque écran fait ce que la spec dit.",
            "items": [
              "CRUD câblé à tes entités",
              "L'IA suit la spec étape par étape",
              "Pas d'impro, pas de features inventées",
              "La fonctionnalité d'abord, le polish après"
            ]
          },
          "4": {
            "title": "Harden",
            "subtitle": "Ship.",
            "outcome": "Rien ne part en prod sans vérification.",
            "items": [
              "Tests générés depuis ta spec",
              "Règles de sécurité issues de tes définitions d'accès",
              "Code review et audit de vulnérabilités",
              "i18n, CI/CD, deploy"
            ]
          }
        }
      },
      "cta": {
        "title": "Suis la WAI WAY.",
        "subtitle": "La méthode est intégrée au framework. Skills et templates sont sur GitHub.",
        "linkFramework": "DoNotDev.com",
        "linkGithub": "GitHub"
      }
    }
  },
  "dndev": {
    "en": {
      "signIn": "Sign In",
      "choosePlatform": "Choose a platform to sign in with",
      "providers": {
        "google": "Google",
        "facebook": "Facebook",
        "github": "GitHub",
        "twitter": "Twitter",
        "microsoft": "Microsoft",
        "yahoo": "Yahoo",
        "apple": "Apple"
      },
      "buttons": {
        "signIn": "Sign in with {{provider}}",
        "continue": "Continue with {{provider}}",
        "verify": "Verify Email",
        "sendVerification": "Send Verification Email",
        "signOut": "Sign Out",
        "loading": "Loading..."
      },
      "accountLinking": {
        "title": "Account Linking Required",
        "message": "This email is already associated with different sign-in methods ({{methods}}). Please sign in using one of those methods to link your accounts.",
        "instruction": "Please sign in with one of the following methods to link your accounts:",
        "explanation": "By signing in, your accounts will be automatically linked, allowing you to use either sign-in method in the future.",
        "success": "Accounts successfully linked!",
        "error": "Failed to link accounts. Please try again.",
        "emailLabel": "Email:"
      },
      "emailVerification": {
        "title": "Email Verification",
        "status": {
          "verified": "Your email is verified.",
          "unverified": "Please verify your email to access all features."
        },
        "sending": "Sending verification email...",
        "success": "Verification email sent! Please check your inbox.",
        "alreadyVerified": "Your email has already been verified.",
        "notSignedIn": "You must be signed in to verify your email.",
        "error": "Failed to send verification email. Please try again."
      },
      "errors": {
        "auth/popup-closed-by-user": "The sign in popup was closed before completion.",
        "auth/cancelled-popup-request": "The sign in popup was cancelled.",
        "auth/popup-blocked": "The sign in popup was blocked by the browser.",
        "auth/email-already-in-use": "This email is already registered.",
        "auth/invalid-email": "The email address is invalid.",
        "auth/operation-not-allowed": "This sign in method is not enabled.",
        "auth/weak-password": "The password is too weak.",
        "auth/user-disabled": "This account has been disabled.",
        "auth/user-not-found": "No account found with this email.",
        "auth/wrong-password": "Incorrect password.",
        "auth/network-request-failed": "A network error occurred. Please try again.",
        "auth/internal-error": "An internal error occurred. Please try again.",
        "auth/invalid-credential": "The provided credential is invalid.",
        "auth/account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials.",
        "auth/provider-not-enabled": "{{provider}} authentication is not enabled",
        "auth/unknown-provider": "Unknown provider: {{provider}}",
        "auth/missing-provider": "Authentication provider is not configured",
        "auth/no-user-signed-in": "No user is currently signed in",
        "auth/oauth-incomplete": "Authentication flow incomplete. Please try signing in again.",
        "fallback": {
          "title": "Authentication Required",
          "description": "You need to sign in to access this page.",
          "chooseProvider": "Choose your preferred sign-in method",
          "authOptions": "Authentication options",
          "secure": "Your data is secure and encrypted.",
          "terms": "By signing in, you agree to our Terms of Service."
        },
        "genericError": "Authentication failed. Please try again.",
        "fieldUpdate": "Failed to update {{field}}",
        "hiddenField": "Error rendering hidden field {{field}}",
        "unsupportedFieldType": "Unsupported field type: {{type}}",
        "fieldRendering": "Error rendering field {{field}}",
        "fallingBackToTextField": "Using text field for unsupported type {{type}}",
        "invalidFieldProps": "Invalid configuration for field {{field}}"
      },
      "status": {
        "loading": "Loading...",
        "authenticating": "Authenticating...",
        "verifying": "Verifying...",
        "checking": "Checking permissions..."
      },
      "aria": {
        "signInOptions": "Sign in options",
        "signInButton": "Sign in with {{provider}}",
        "loadingState": "Loading authentication",
        "errorAlert": "Authentication error",
        "successAlert": "Success",
        "accountLinkingRequired": "Account linking required",
        "verificationRequired": "Email verification required"
      },
      "home": {
        "title": "DoNotDev",
        "description": "DoNotDev is a platform for building web applications with TypeScript and pure CSS.",
        "getStarted": "Get Started",
        "whyChooseDoNotDev": "Why Choose DoNotDev?",
        "openSource": "Open Source",
        "freeAndOpenSource": "Free and open-source with a vibrant community.",
        "customizable": "Customizable",
        "flexibleComponents": "Flexible components to tailor your project needs.",
        "developerFocused": "Developer-Focused",
        "scalableArchitecture": "Scalable Architecture",
        "secureByDesign": "Secure by Design",
        "fastIntegration": "Fast Integration",
        "scaleEffortlessly": "Scale effortlessly from prototypes to enterprise solutions.",
        "header": {
          "purchase": "Purchase"
        }
      },
      "actions": {
        "create": "Create",
        "update": "Update",
        "delete": "Delete",
        "cancel": "Cancel",
        "save": "Save",
        "confirm": "Confirm",
        "back": "Back",
        "next": "Next",
        "previous": "Previous",
        "search": "Search",
        "searchPlaceholder": "Search...",
        "filter": "Filter",
        "clear": "Clear",
        "reset": "Reset",
        "apply": "Apply",
        "select": "Select",
        "upload": "Upload",
        "download": "Download",
        "close": "Close"
      },
      "messages": {
        "createSuccess": "{{entity}} created successfully",
        "updateSuccess": "{{entity}} updated successfully",
        "deleteSuccess": "{{entity}} deleted successfully",
        "error": "An error occurred",
        "loading": "Loading...",
        "noResults": "No results found",
        "confirmDelete": "Are you sure you want to delete this {{entity}}?",
        "unsavedChanges": "You have unsaved changes",
        "sessionExpired": "Your session has expired",
        "networkError": "Network error occurred",
        "unauthorized": "Unauthorized access",
        "forbidden": "Access forbidden",
        "serverError": "Server error occurred",
        "notFound": {
          "title": "Page Not Found",
          "description": "The page you're looking for doesn't exist or has been moved.",
          "suggestions": "You might be looking for:",
          "goHome": "Go Home",
          "goBack": "Go Back"
        }
      },
      "nav": {
        "signIn": "Sign in"
      },
      "pagination": {
        "showing": "Showing {{from}} to {{to}} of {{total}} entries",
        "previous": "Previous",
        "next": "Next",
        "page": "Page {{page}} of {{total}}"
      },
      "filters": {
        "title": "Filters",
        "apply": "Apply Filters",
        "clear": "Clear Filters",
        "noResults": "No results match your filters",
        "selected": "{{count}} selected"
      },
      "settings": {
        "title": "Settings",
        "theme": "Theme",
        "language": "Language",
        "clearCache": {
          "title": "Clear Cache",
          "localStorage": "Local Storage",
          "sessionStorage": "Session Storage",
          "applicationCache": "Application Cache",
          "serviceWorker": "Service Worker",
          "cookies": "Cookies",
          "indexedDB": "IndexedDB",
          "webSQL": "WebSQL",
          "memoryCache": "Memory Cache",
          "button": "Clear Cache",
          "clearing": "Clearing...",
          "error": "Error clearing cache",
          "success": "Cache cleared successfully: {{items}}",
          "noItemsCleared": "No cache items were cleared"
        }
      },
      "common": {
        "app": {
          "name": "DoNotDev App"
        },
        "defaultTitle": "Page",
        "defaultDescription": "Page description",
        "locale": "en_US",
        "themeSelector": {
          "changeTheme": "Change Theme",
          "tooltipWithTransition": "Change Theme: {{current}} → {{next}}",
          "tooltipWithCurrent": "Change Theme: {{current}}",
          "tooltipWithNext": "Change Theme: Switch to {{next}}"
        },
        "languageSelector": {
          "changeLanguage": "Change Language"
        }
      },
      "footer": {
        "landing": {
          "company": {
            "defaultName": "Company",
            "description": "Build better products faster with our comprehensive development platform."
          },
          "social": {
            "twitter": "Twitter",
            "github": "GitHub",
            "discord": "Discord"
          },
          "sections": {
            "product": {
              "title": "Product",
              "features": "Features",
              "pricing": "Pricing",
              "docs": "Docs",
              "updates": "Updates"
            },
            "support": {
              "title": "Support",
              "help": "Help",
              "contact": "Contact",
              "status": "Status",
              "community": "Community"
            }
          }
        },
        "legal": {
          "allRightsReserved": "All rights reserved.",
          "cookieSettings": "Cookie Settings",
          "legalNotice": "Legal Notice",
          "privacyPolicy": "Privacy Policy",
          "termsOfService": "Terms of Service",
          "builtWith": "Made with ❤️ & DoNotDev ©",
          "collapse": "Collapse footer",
          "expand": "Expand footer"
        }
      },
      "search": {
        "ariaLabel": "Search",
        "label": "Search"
      },
      "goTo": {
        "ariaLabel": "Go to page",
        "label": "Go to"
      },
      "globalGoTo": {
        "placeholder": "Filter routes or navigate to a page...",
        "noResults": "No routes found.",
        "favorites": "Favorites",
        "allPages": "All Pages",
        "addFavorite": "Add to favorites",
        "removeFavorite": "Remove from favorites"
      },
      "copyToClipboard": "Copy to clipboard",
      "copied": "Copied!",
      "copyPassword": "Copy password",
      "table": {
        "searchPlaceholder": "Search...",
        "filters": "Filters",
        "selectAllRows": "Select all rows",
        "selectRow": "Select row {{index}}",
        "showingResults": "Showing {{from}} to {{to}} of {{total}} results",
        "previous": "Previous",
        "next": "Next",
        "page": "Page {{current}} of {{total}}"
      },
      "language": {
        "selectLanguage": "Select Language",
        "searchLanguages": "Search languages...",
        "noLanguagesFound": "No languages found",
        "changeLanguage": "Change Language"
      },
      "form": {
        "submit": "Submit",
        "cancel": "Cancel",
        "submitting": "Submitting...",
        "loading": "Loading...",
        "add": "Add",
        "remove": "Remove",
        "typeAndPressAdd": "Type and press Add...",
        "enterLocationData": "Enter location data (JSON)"
      },
      "navigation": {
        "more": "More",
        "home": "Home"
      },
      "pwa": {
        "update": {
          "title": "Update available",
          "description": "A new version is ready. Refresh to update.",
          "button": "Update",
          "altText": "Update application"
        }
      },
      "document": {
        "upload": {
          "hint": "Click or drag files to upload",
          "ariaLabel": "Upload document"
        },
        "preview": {
          "title": "Document Preview",
          "ariaLabel": "Preview document"
        },
        "delete": {
          "ariaLabel": "Delete document",
          "failed": "Failed to delete document"
        },
        "errors": {
          "maxFiles": "Maximum {{max}} files allowed",
          "invalidType": "\"{{fileName}}\" is not an allowed file type",
          "exceedsSize": "\"{{fileName}}\" exceeds the maximum size of {{size}} MB"
        }
      },
      "image": {
        "alt": {
          "upload": "Upload image {{index}}"
        },
        "upload": {
          "pending": "Pending",
          "dropzoneMultiple": "Drop images here or click to upload",
          "dropzoneSingle": "Drop image here or click to upload"
        }
      },
      "code": {
        "copyCode": "Copy code",
        "copied": "Copied!",
        "copyCodeToClipboard": "Copy code to clipboard"
      },
      "video": {
        "clickToWatch": "Click to watch video",
        "watchVideo": "Watch Video"
      },
      "inspector": {
        "pageSource": "Page Source",
        "inspectPageSourceCode": "Inspect page source code"
      },
      "sheet": {
        "navigation": "Navigation",
        "codeInspector": "Code Inspector",
        "debugPanel": "Debug Panel"
      },
      "routeError": {
        "title": "Something went wrong",
        "description": "We encountered an error while loading this page.",
        "dataSafe": "Don't worry, your data is safe.",
        "errorId": "Error ID",
        "errorMessage": "Error Message",
        "copied": "Copied",
        "copyDetails": "Copy Details",
        "tryAgain": "Try Again",
        "goHome": "Go Home",
        "goBack": "Go Back",
        "contactSupport": "If the problem persists, please contact support."
      },
      "redirectOverlay": {
        "phases": {
          "connecting": "Connecting to secure server...",
          "preparing": "Preparing your session...",
          "redirecting": "Redirecting...",
          "timeout": "Taking longer than expected..."
        },
        "cancel": "Cancel",
        "doNotRefresh": "Please do not refresh or press back",
        "default": {
          "title": "Redirecting",
          "message": "Please wait while we redirect you...",
          "subtitle": "This may take a moment",
          "ariaLabel": "Redirecting, please wait"
        },
        "stripe-checkout": {
          "title": "Redirecting to Stripe",
          "message": "Initializing secure payment...",
          "subtitle": "This may take a moment on first load",
          "ariaLabel": "Preparing secure checkout, please wait"
        },
        "stripe-portal": {
          "title": "Redirecting to Stripe",
          "message": "Opening billing portal...",
          "subtitle": "Manage your subscription and invoices",
          "ariaLabel": "Opening billing portal, please wait"
        },
        "oauth-google": {
          "title": "Signing in with Google",
          "message": "Connecting to Google...",
          "subtitle": "You will be redirected to sign in",
          "ariaLabel": "Signing in with Google, please wait"
        },
        "oauth-github": {
          "title": "Signing in with GitHub",
          "message": "Connecting to GitHub...",
          "subtitle": "You will be redirected to sign in",
          "ariaLabel": "Signing in with GitHub, please wait"
        },
        "oauth-apple": {
          "title": "Signing in with Apple",
          "message": "Connecting to Apple...",
          "subtitle": "You will be redirected to sign in",
          "ariaLabel": "Signing in with Apple, please wait"
        },
        "oauth-microsoft": {
          "title": "Signing in with Microsoft",
          "message": "Connecting to Microsoft...",
          "subtitle": "You will be redirected to sign in",
          "ariaLabel": "Signing in with Microsoft, please wait"
        },
        "oauth-facebook": {
          "title": "Signing in with Facebook",
          "message": "Connecting to Facebook...",
          "subtitle": "You will be redirected to sign in",
          "ariaLabel": "Signing in with Facebook, please wait"
        },
        "auth-email-link": {
          "title": "Sending verification",
          "message": "Preparing your verification link...",
          "subtitle": "Check your email inbox",
          "ariaLabel": "Sending verification email, please wait"
        }
      },
      "templates": {
        "home": {
          "hero": {
            "badge": "Welcome",
            "title": "Build Something Amazing",
            "subtitle": "A modern platform to launch, grow, and scale your next project — faster than ever.",
            "primaryAction": "Get Started",
            "secondaryAction": "Learn More"
          },
          "features": {
            "title": "Features",
            "feature1": {
              "title": "Lightning Fast",
              "description": "Optimized for speed with instant page loads and real-time updates out of the box."
            },
            "feature2": {
              "title": "Secure by Default",
              "description": "Enterprise-grade security with authentication, role-based access, and encryption built in."
            },
            "feature3": {
              "title": "Ready to Scale",
              "description": "From prototype to production — scale effortlessly with a robust, modular architecture."
            }
          },
          "howItWorks": {
            "title": "How It Works",
            "step1": {
              "title": "Sign Up",
              "description": "Create your account in seconds. No credit card required to get started."
            },
            "step2": {
              "title": "Configure",
              "description": "Set up your workspace, invite your team, and customize your workflow."
            },
            "step3": {
              "title": "Launch",
              "description": "Go live with confidence. Deploy, monitor, and iterate at your own pace."
            }
          },
          "showcase": {
            "title": "Why Us",
            "item1": {
              "title": "Modern Stack",
              "description": "Built on cutting-edge technology for performance, reliability, and developer happiness."
            },
            "item2": {
              "title": "Open Source",
              "description": "Transparent, community-driven, and free to use."
            },
            "item3": {
              "title": "Developer First",
              "description": "Designed by developers, for developers. Clean APIs and great docs."
            },
            "item4": {
              "title": "Global Ready",
              "description": "Multi-language, multi-region, and accessible from day one."
            }
          },
          "cta": {
            "title": "Ready to Get Started?",
            "subtitle": "Join thousands of teams building better products, faster.",
            "primaryAction": "Start for Free",
            "secondaryAction": "Contact Sales"
          }
        },
        "dashboard": {
          "title": "Dashboard",
          "stats": {
            "revenue": "Revenue",
            "orders": "Orders",
            "customers": "Customers",
            "conversion": "Conversion"
          },
          "activity": {
            "title": "Recent Activity",
            "item1": "New order #1234 placed",
            "time1": "2 min ago",
            "item2": "Customer John D. signed up",
            "time2": "15 min ago",
            "item3": "Product 'Pro Plan' updated",
            "time3": "1 hour ago",
            "item4": "Payment of $299 received",
            "time4": "3 hours ago"
          },
          "actions": {
            "title": "Quick Actions",
            "newProduct": "New Product",
            "viewReports": "View Reports",
            "manageTeam": "Manage Team"
          }
        },
        "settings": {
          "title": "Settings",
          "tabs": {
            "general": "General",
            "notifications": "Notifications",
            "appearance": "Appearance"
          },
          "general": {
            "appInfo": "Application",
            "appName": "Name",
            "description": "Description",
            "language": "Language",
            "languageHint": "Language can be changed from the header menu."
          },
          "notifications": {
            "preferences": "Notification Preferences",
            "email": "Email Notifications",
            "emailDesc": "Receive updates and alerts via email.",
            "push": "Push Notifications",
            "pushDesc": "Receive real-time push notifications.",
            "marketing": "Marketing Emails",
            "marketingDesc": "Receive product updates and promotions."
          },
          "appearance": {
            "theme": "Theme",
            "darkMode": "Dark Mode",
            "currentTheme": "Current theme"
          }
        },
        "profile": {
          "title": "Profile",
          "subtitle": "Manage your account settings and preferences.",
          "identity": {
            "title": "Identity",
            "displayName": "Display Name",
            "email": "Email",
            "emailVerified": "Verified",
            "emailUnverified": "Unverified"
          },
          "security": {
            "title": "Security",
            "updatePassword": "Update Password",
            "linkedProviders": "Linked Providers"
          },
          "subscription": {
            "title": "Subscription",
            "currentPlan": "Current Plan",
            "status": "Status",
            "manageBilling": "Manage Billing",
            "noPlan": "No active plan"
          },
          "dangerZone": {
            "title": "Danger Zone",
            "deleteAccount": "Delete Account",
            "deleteWarning": "This action is permanent and cannot be undone. All your data will be deleted."
          },
          "signOut": "Sign Out"
        }
      }
    },
    "fr": {
      "signIn": "Se connecter",
      "choosePlatform": "Choisissez une plateforme pour vous connecter",
      "providers": {
        "google": "Google",
        "facebook": "Facebook",
        "github": "GitHub",
        "twitter": "Twitter",
        "microsoft": "Microsoft",
        "yahoo": "Yahoo",
        "apple": "Apple"
      },
      "buttons": {
        "signIn": "Se connecter avec {{provider}}",
        "continue": "Continuer avec {{provider}}",
        "verify": "Vérifier l'email",
        "sendVerification": "Envoyer l'email de vérification",
        "signOut": "Se déconnecter",
        "loading": "Chargement..."
      },
      "accountLinking": {
        "title": "Liaison de compte requise",
        "message": "Cet email est déjà associé à différentes méthodes de connexion ({{methods}}). Veuillez vous connecter en utilisant l'une de ces méthodes pour lier vos comptes.",
        "instruction": "Veuillez vous connecter avec l'une des méthodes suivantes pour lier vos comptes :",
        "explanation": "En vous connectant, vos comptes seront automatiquement liés, vous permettant d'utiliser l'une ou l'autre méthode de connexion à l'avenir.",
        "success": "Comptes liés avec succès !",
        "error": "Échec de la liaison des comptes. Veuillez réessayer.",
        "emailLabel": "Email :"
      },
      "emailVerification": {
        "title": "Vérification de l'email",
        "status": {
          "verified": "Votre email est vérifié.",
          "unverified": "Veuillez vérifier votre email pour accéder à toutes les fonctionnalités."
        },
        "sending": "Envoi de l'email de vérification...",
        "success": "Email de vérification envoyé ! Veuillez vérifier votre boîte de réception.",
        "alreadyVerified": "Votre email est déjà vérifié.",
        "notSignedIn": "Vous devez être connecté pour vérifier votre email.",
        "error": "Échec de l'envoi de l'email de vérification. Veuillez réessayer."
      },
      "errors": {
        "auth/popup-closed-by-user": "La fenêtre de connexion a été fermée avant la fin.",
        "auth/cancelled-popup-request": "La demande de fenêtre de connexion a été annulée.",
        "auth/popup-blocked": "La fenêtre de connexion a été bloquée par le navigateur.",
        "auth/email-already-in-use": "Cet email est déjà enregistré.",
        "auth/invalid-email": "L'adresse email est invalide.",
        "auth/operation-not-allowed": "Cette méthode de connexion n'est pas activée.",
        "auth/weak-password": "Le mot de passe est trop faible.",
        "auth/user-disabled": "Ce compte a été désactivé.",
        "auth/user-not-found": "Aucun compte trouvé avec cet email.",
        "auth/wrong-password": "Mot de passe incorrect.",
        "auth/network-request-failed": "Une erreur réseau s'est produite. Veuillez réessayer.",
        "auth/internal-error": "Une erreur interne s'est produite. Veuillez réessayer.",
        "auth/invalid-credential": "Les identifiants fournis sont invalides.",
        "auth/account-exists-with-different-credential": "Un compte existe déjà avec la même adresse email mais des identifiants de connexion différents.",
        "auth/provider-not-enabled": "L'authentification {{provider}} n'est pas activée",
        "auth/unknown-provider": "Fournisseur inconnu : {{provider}}",
        "auth/missing-provider": "Le fournisseur d'authentification n'est pas configuré",
        "auth/no-user-signed-in": "Aucun utilisateur n'est actuellement connecté",
        "auth/oauth-incomplete": "Flux d'authentification incomplet. Veuillez réessayer de vous connecter.",
        "fallback": {
          "title": "Authentification requise",
          "description": "Vous devez vous connecter pour accéder à cette page.",
          "chooseProvider": "Choisissez votre méthode de connexion préférée",
          "authOptions": "Options d'authentification",
          "secure": "Vos données sont sécurisées et chiffrées.",
          "terms": "En vous connectant, vous acceptez nos conditions d'utilisation."
        },
        "genericError": "L'authentification a échoué. Veuillez réessayer.",
        "fieldUpdate": "Échec de la mise à jour de {{field}}",
        "hiddenField": "Erreur de rendu du champ caché {{field}}",
        "unsupportedFieldType": "Type de champ non pris en charge : {{type}}",
        "fieldRendering": "Erreur de rendu du champ {{field}}",
        "fallingBackToTextField": "Utilisation du champ texte pour le type non pris en charge {{type}}",
        "invalidFieldProps": "Configuration invalide pour le champ {{field}}"
      },
      "status": {
        "loading": "Chargement...",
        "authenticating": "Authentification...",
        "verifying": "Vérification...",
        "checking": "Vérification des permissions..."
      },
      "aria": {
        "signInOptions": "Options de connexion",
        "signInButton": "Se connecter avec {{provider}}",
        "loadingState": "Chargement de l'authentification",
        "errorAlert": "Erreur d'authentification",
        "successAlert": "Succès",
        "accountLinkingRequired": "Liaison de compte requise",
        "verificationRequired": "Vérification de l'email requise"
      },
      "home": {
        "title": "DoNotDev",
        "description": "DoNotDev est une plateforme pour construire des applications web avec TypeScript et du CSS pur.",
        "getStarted": "Commencer",
        "whyChooseDoNotDev": "Pourquoi choisir DoNotDev ?",
        "openSource": "Open Source",
        "freeAndOpenSource": "Gratuit et open-source avec une communauté dynamique.",
        "customizable": "Personnalisable",
        "flexibleComponents": "Composants flexibles pour adapter aux besoins de votre projet.",
        "developerFocused": "Centré sur les développeurs",
        "scalableArchitecture": "Architecture évolutive",
        "secureByDesign": "Sécurisé par conception",
        "fastIntegration": "Intégration rapide",
        "scaleEffortlessly": "Évoluez sans effort des prototypes aux solutions d'entreprise.",
        "header": {
          "purchase": "Acheter"
        }
      },
      "actions": {
        "create": "Créer",
        "update": "Mettre à jour",
        "delete": "Supprimer",
        "cancel": "Annuler",
        "save": "Sauvegarder",
        "confirm": "Confirmer",
        "back": "Retour",
        "next": "Suivant",
        "previous": "Précédent",
        "search": "Rechercher",
        "searchPlaceholder": "Rechercher...",
        "filter": "Filtrer",
        "clear": "Effacer",
        "reset": "Réinitialiser",
        "apply": "Appliquer",
        "select": "Sélectionner",
        "upload": "Télécharger",
        "download": "Télécharger",
        "close": "Fermer"
      },
      "messages": {
        "createSuccess": "{{entity}} créé avec succès",
        "updateSuccess": "{{entity}} mis à jour avec succès",
        "deleteSuccess": "{{entity}} supprimé avec succès",
        "error": "Une erreur s'est produite",
        "loading": "Chargement...",
        "noResults": "Aucun résultat trouvé",
        "confirmDelete": "Êtes-vous sûr de vouloir supprimer ce {{entity}} ?",
        "unsavedChanges": "Vous avez des modifications non sauvegardées",
        "sessionExpired": "Votre session a expiré",
        "networkError": "Erreur réseau",
        "unauthorized": "Accès non autorisé",
        "forbidden": "Accès interdit",
        "serverError": "Erreur serveur",
        "notFound": {
          "title": "Page non trouvée",
          "description": "La page que vous recherchez n'existe pas ou a été déplacée.",
          "suggestions": "Vous cherchez peut-être :",
          "goHome": "Retour à l'accueil",
          "goBack": "Retour"
        }
      },
      "nav": {
        "signIn": "Se connecter"
      },
      "pagination": {
        "showing": "Affichage de {{from}} à {{to}} sur {{total}} entrées",
        "previous": "Précédent",
        "next": "Suivant",
        "page": "Page {{page}} sur {{total}}"
      },
      "filters": {
        "title": "Filtres",
        "apply": "Appliquer les filtres",
        "clear": "Effacer les filtres",
        "noResults": "Aucun résultat ne correspond à vos filtres",
        "selected": "{{count}} sélectionné"
      },
      "settings": {
        "title": "Paramètres",
        "theme": "Thème",
        "language": "Langue",
        "clearCache": {
          "title": "Vider le cache",
          "localStorage": "Stockage local",
          "sessionStorage": "Stockage de session",
          "applicationCache": "Cache d'application",
          "serviceWorker": "Service Worker",
          "cookies": "Cookies",
          "indexedDB": "IndexedDB",
          "webSQL": "WebSQL",
          "memoryCache": "Cache mémoire",
          "button": "Vider le cache",
          "clearing": "Nettoyage en cours...",
          "error": "Erreur lors du nettoyage du cache",
          "success": "Cache vidé avec succès : {{items}}",
          "noItemsCleared": "Aucun élément de cache n'a été vidé"
        }
      },
      "common": {
        "app": {
          "name": "Application DoNotDev"
        },
        "defaultTitle": "Page",
        "defaultDescription": "Description de la page",
        "locale": "fr_FR",
        "themeSelector": {
          "changeTheme": "Changer le thème",
          "tooltipWithTransition": "Changer le thème : {{current}} → {{next}}",
          "tooltipWithCurrent": "Changer le thème : {{current}}",
          "tooltipWithNext": "Changer le thème : Passer à {{next}}"
        },
        "languageSelector": {
          "changeLanguage": "Changer la langue"
        }
      },
      "footer": {
        "landing": {
          "company": {
            "defaultName": "Entreprise",
            "description": "Construisez de meilleurs produits plus rapidement avec notre plateforme de développement complète."
          },
          "social": {
            "twitter": "Twitter",
            "github": "GitHub",
            "discord": "Discord"
          },
          "sections": {
            "product": {
              "title": "Produit",
              "features": "Fonctionnalités",
              "pricing": "Tarifs",
              "docs": "Documentation",
              "updates": "Mises à jour"
            },
            "support": {
              "title": "Support",
              "help": "Aide",
              "contact": "Contact",
              "status": "Statut",
              "community": "Communauté"
            }
          }
        },
        "legal": {
          "allRightsReserved": "Tous droits réservés.",
          "cookieSettings": "Paramètres des cookies",
          "legalNotice": "Mentions légales",
          "privacyPolicy": "Politique de confidentialité",
          "termsOfService": "Conditions d'utilisation",
          "builtWith": "Créé avec ❤️ & DoNotDev ©",
          "collapse": "Réduire le pied de page",
          "expand": "Développer le pied de page"
        }
      },
      "search": {
        "ariaLabel": "Rechercher",
        "label": "Rechercher"
      },
      "goTo": {
        "ariaLabel": "Aller à la page",
        "label": "Aller à"
      },
      "globalGoTo": {
        "placeholder": "Filtrer les routes ou naviguer vers une page...",
        "noResults": "Aucune route trouvée.",
        "favorites": "Favoris",
        "allPages": "Toutes les pages",
        "addFavorite": "Ajouter aux favoris",
        "removeFavorite": "Retirer des favoris"
      },
      "copyToClipboard": "Copier dans le presse-papiers",
      "copied": "Copié !",
      "copyPassword": "Copier le mot de passe",
      "table": {
        "searchPlaceholder": "Rechercher...",
        "filters": "Filtres",
        "selectAllRows": "Sélectionner toutes les lignes",
        "selectRow": "Sélectionner la ligne {{index}}",
        "showingResults": "Affichage de {{from}} à {{to}} sur {{total}} résultats",
        "previous": "Précédent",
        "next": "Suivant",
        "page": "Page {{current}} sur {{total}}"
      },
      "language": {
        "selectLanguage": "Sélectionner la langue",
        "searchLanguages": "Rechercher une langue...",
        "noLanguagesFound": "Aucune langue trouvée",
        "changeLanguage": "Changer la langue"
      },
      "form": {
        "submit": "Soumettre",
        "cancel": "Annuler",
        "submitting": "Envoi en cours...",
        "loading": "Chargement...",
        "add": "Ajouter",
        "remove": "Retirer",
        "typeAndPressAdd": "Tapez et appuyez sur Ajouter...",
        "enterLocationData": "Saisir les données de localisation (JSON)"
      },
      "navigation": {
        "more": "Plus",
        "home": "Accueil"
      },
      "pwa": {
        "update": {
          "title": "Mise à jour disponible",
          "description": "Une nouvelle version est prête. Actualisez pour mettre à jour.",
          "button": "Mettre à jour",
          "altText": "Mettre à jour l'application"
        }
      },
      "document": {
        "upload": {
          "hint": "Cliquez ou glissez des fichiers pour les envoyer",
          "ariaLabel": "Envoyer un document"
        },
        "preview": {
          "title": "Aperçu du document",
          "ariaLabel": "Aperçu du document"
        },
        "delete": {
          "ariaLabel": "Supprimer le document",
          "failed": "Échec de la suppression du document"
        },
        "errors": {
          "maxFiles": "Maximum {{max}} fichiers autorisés",
          "invalidType": "\"{{fileName}}\" n'est pas un type de fichier autorisé",
          "exceedsSize": "\"{{fileName}}\" dépasse la taille maximale de {{size}} Mo"
        }
      },
      "image": {
        "alt": {
          "upload": "Envoyer l'image {{index}}"
        },
        "upload": {
          "pending": "En attente",
          "dropzoneMultiple": "Déposez des images ici ou cliquez pour envoyer",
          "dropzoneSingle": "Déposez une image ici ou cliquez pour envoyer"
        }
      },
      "code": {
        "copyCode": "Copier le code",
        "copied": "Copié !",
        "copyCodeToClipboard": "Copier le code dans le presse-papiers"
      },
      "video": {
        "clickToWatch": "Cliquez pour regarder la vidéo",
        "watchVideo": "Regarder la vidéo"
      },
      "inspector": {
        "pageSource": "Code source de la page",
        "inspectPageSourceCode": "Inspecter le code source de la page"
      },
      "routeError": {
        "title": "Une erreur s'est produite",
        "description": "Nous avons rencontré une erreur lors du chargement de cette page.",
        "dataSafe": "Ne vous inquiétez pas, vos données sont en sécurité.",
        "errorId": "ID d'erreur",
        "errorMessage": "Message d'erreur",
        "copied": "Copié",
        "copyDetails": "Copier les détails",
        "tryAgain": "Réessayer",
        "goHome": "Retour à l'accueil",
        "goBack": "Retour",
        "contactSupport": "Si le problème persiste, veuillez contacter le support."
      },
      "redirectOverlay": {
        "phases": {
          "connecting": "Connexion au serveur sécurisé...",
          "preparing": "Préparation de votre session...",
          "redirecting": "Redirection en cours...",
          "timeout": "Cela prend plus de temps que prévu..."
        },
        "cancel": "Annuler",
        "doNotRefresh": "Veuillez ne pas actualiser ou revenir en arrière",
        "default": {
          "title": "Redirection",
          "message": "Veuillez patienter pendant la redirection...",
          "subtitle": "Cela peut prendre un moment",
          "ariaLabel": "Redirection en cours, veuillez patienter"
        },
        "stripe-checkout": {
          "title": "Redirection vers Stripe",
          "message": "Initialisation du paiement sécurisé...",
          "subtitle": "Cela peut prendre un moment au premier chargement",
          "ariaLabel": "Préparation du paiement sécurisé, veuillez patienter"
        },
        "stripe-portal": {
          "title": "Redirection vers Stripe",
          "message": "Ouverture du portail de facturation...",
          "subtitle": "Gérez votre abonnement et vos factures",
          "ariaLabel": "Ouverture du portail de facturation, veuillez patienter"
        },
        "oauth-google": {
          "title": "Connexion avec Google",
          "message": "Connexion à Google...",
          "subtitle": "Vous allez être redirigé pour vous connecter",
          "ariaLabel": "Connexion avec Google, veuillez patienter"
        },
        "oauth-github": {
          "title": "Connexion avec GitHub",
          "message": "Connexion à GitHub...",
          "subtitle": "Vous allez être redirigé pour vous connecter",
          "ariaLabel": "Connexion avec GitHub, veuillez patienter"
        },
        "oauth-apple": {
          "title": "Connexion avec Apple",
          "message": "Connexion à Apple...",
          "subtitle": "Vous allez être redirigé pour vous connecter",
          "ariaLabel": "Connexion avec Apple, veuillez patienter"
        },
        "oauth-microsoft": {
          "title": "Connexion avec Microsoft",
          "message": "Connexion à Microsoft...",
          "subtitle": "Vous allez être redirigé pour vous connecter",
          "ariaLabel": "Connexion avec Microsoft, veuillez patienter"
        },
        "oauth-facebook": {
          "title": "Connexion avec Facebook",
          "message": "Connexion à Facebook...",
          "subtitle": "Vous allez être redirigé pour vous connecter",
          "ariaLabel": "Connexion avec Facebook, veuillez patienter"
        },
        "auth-email-link": {
          "title": "Envoi de la vérification",
          "message": "Préparation de votre lien de vérification...",
          "subtitle": "Vérifiez votre boîte de réception",
          "ariaLabel": "Envoi de l'email de vérification, veuillez patienter"
        }
      }
    }
  },
  "blog": {
    "en": {
      "readMore": "Read more",
      "minuteRead": "min read",
      "all": "All",
      "empty": "No posts yet. Check back soon!",
      "backToBlog": "Back to blog",
      "publishedOn": "Published on",
      "notFound": "Post not found"
    },
    "fr": {
      "readMore": "Lire la suite",
      "minuteRead": "min de lecture",
      "all": "Tous",
      "empty": "Aucun article pour l'instant. Revenez bientôt !",
      "backToBlog": "Retour au blog",
      "publishedOn": "Publié le",
      "notFound": "Article introuvable"
    }
  },
  "cookies": {
    "en": {
      "cookiePreferences": "Cookie Preferences",
      "essentialCookies": "Essential Cookies",
      "functionalCookies": "Functional Cookies",
      "analyticsCookies": "Analytics Cookies",
      "marketingCookies": "Marketing Cookies",
      "preferencesCookies": "Preferences Cookies",
      "savePreferences": "Save Preferences",
      "hideDetails": "Hide Details",
      "acceptAll": "Accept All",
      "declineOptional": "Decline Optional",
      "customize": "Customize",
      "featureConsentTitle": "Enable {{category}}?",
      "featureConsentDescription": "This feature requires {{category}} to work properly.",
      "enable": "Enable",
      "decline": "Decline",
      "essentialDescription": "Required for the website to function. Enables core features like navigation and security. Cannot be disabled.",
      "essentialExamples": "Session management, security tokens, routing",
      "functionalDescription": "Enable personalized features like user accounts and saved preferences. Required for authentication and user-specific functionality.",
      "functionalExamples": "Login sessions (Firebase Auth), user preferences, language settings",
      "functionalLegalNotice": "This includes authentication cookies from Firebase that keep you logged in.",
      "analyticsDescription": "Help us understand how you use our site so we can improve it. No personal data is sold or shared with third parties.",
      "analyticsExamples": "Page views, click tracking, performance metrics",
      "marketingDescription": "Used to show relevant ads and measure campaign effectiveness. May share data with advertising partners.",
      "marketingExamples": "Ad targeting, conversion tracking, social media pixels",
      "cookieBannerDescription": "We use cookies to enhance your experience and provide personalized features. Some cookies are essential for the website to function, while others help us improve our services.",
      "alwaysOn": "Always on",
      "enabled": "Enabled",
      "disabled": "Disabled",
      "examples": "Examples",
      "essentialOnlyNotice": "We use essential cookies to ensure the site functions properly"
    },
    "fr": {
      "cookiePreferences": "Préférences de Cookies",
      "essentialCookies": "Cookies Essentiels",
      "functionalCookies": "Cookies Fonctionnels",
      "analyticsCookies": "Cookies d'Analyse",
      "marketingCookies": "Cookies Marketing",
      "preferencesCookies": "Cookies de Préférences",
      "savePreferences": "Enregistrer les Préférences",
      "hideDetails": "Masquer les Détails",
      "acceptAll": "Tout Accepter",
      "declineOptional": "Refuser les Optionnels",
      "customize": "Personnaliser",
      "featureConsentTitle": "Activer {{category}} ?",
      "featureConsentDescription": "Cette fonctionnalité nécessite {{category}} pour fonctionner correctement.",
      "enable": "Activer",
      "decline": "Refuser",
      "essentialDescription": "Nécessaires au fonctionnement du site. Permettent les fonctionnalités essentielles comme la navigation et la sécurité. Ne peuvent pas être désactivés.",
      "essentialExamples": "Gestion de session, jetons de sécurité, routage",
      "functionalDescription": "Permettent des fonctionnalités personnalisées comme les comptes utilisateur et les préférences sauvegardées. Nécessaires pour l'authentification et les fonctionnalités spécifiques à l'utilisateur.",
      "functionalExamples": "Sessions de connexion (Firebase Auth), préférences utilisateur, paramètres de langue",
      "functionalLegalNotice": "Cela inclut les cookies d'authentification Firebase qui vous maintiennent connecté.",
      "analyticsDescription": "Nous aident à comprendre comment vous utilisez notre site afin que nous puissions l'améliorer. Aucune donnée personnelle n'est vendue ou partagée avec des tiers.",
      "analyticsExamples": "Pages vues, suivi des clics, métriques de performance",
      "marketingDescription": "Utilisés pour afficher des publicités pertinentes et mesurer l'efficacité des campagnes. Peuvent partager des données avec des partenaires publicitaires.",
      "marketingExamples": "Ciblage publicitaire, suivi des conversions, pixels de réseaux sociaux",
      "cookieBannerDescription": "Nous utilisons des cookies pour améliorer votre expérience et fournir des fonctionnalités personnalisées. Certains cookies sont essentiels au fonctionnement du site, tandis que d'autres nous aident à améliorer nos services.",
      "alwaysOn": "Toujours actif",
      "enabled": "Activé",
      "disabled": "Désactivé",
      "examples": "Exemples",
      "essentialOnlyNotice": "Nous utilisons uniquement des cookies essentiels pour assurer le bon fonctionnement du site"
    }
  },
  "homeTemplate": {
    "en": {
      "homeTemplate": {
        "hero": {
          "title": "Welcome to DoNotDev",
          "subtitle": "Build, deploy, and scale powerful apps with our modern TypeScript and Firebase boilerplate.",
          "getStarted": "Get Started",
          "learnMore": "Learn More",
          "viewDemo": "View Demo"
        },
        "features": {
          "title": "Why Choose DoNotDev?",
          "subtitle": "Everything you need to build modern, scalable applications",
          "modern": {
            "title": "Modern Stack",
            "description": "Built with TypeScript, React, and modern web technologies"
          },
          "scalable": {
            "title": "Scalable Architecture",
            "description": "Firebase-powered backend that grows with your needs"
          },
          "fast": {
            "title": "Lightning Fast",
            "description": "Optimized for performance and developer experience"
          },
          "secure": {
            "title": "Enterprise Security",
            "description": "Built-in authentication, authorization, and security features"
          }
        },
        "cta": {
          "title": "Ready to Get Started?",
          "subtitle": "Join thousands of developers building amazing apps",
          "signUp": "Sign Up Free",
          "contactSales": "Contact Sales",
          "viewDocumentation": "View Documentation"
        },
        "footer": {
          "description": "The modern development framework for building scalable applications",
          "links": {
            "product": "Product",
            "developers": "Developers",
            "company": "Company",
            "support": "Support"
          },
          "legal": {
            "privacy": "Privacy Policy",
            "terms": "Terms of Service",
            "cookies": "Cookie Policy"
          }
        }
      }
    },
    "fr": {
      "homeTemplate": {
        "hero": {
          "title": "Bienvenue sur DoNotDev",
          "subtitle": "Construisez, déployez et développez des applications puissantes avec notre boilerplate moderne TypeScript et Firebase.",
          "getStarted": "Commencer",
          "learnMore": "En Savoir Plus",
          "viewDemo": "Voir la Démo"
        },
        "features": {
          "title": "Pourquoi Choisir DoNotDev ?",
          "subtitle": "Tout ce dont vous avez besoin pour construire des applications modernes et évolutives",
          "modern": {
            "title": "Stack Moderne",
            "description": "Construit avec TypeScript, React et les technologies web modernes"
          },
          "scalable": {
            "title": "Architecture Évolutive",
            "description": "Backend alimenté par Firebase qui grandit avec vos besoins"
          },
          "fast": {
            "title": "Ultra Rapide",
            "description": "Optimisé pour les performances et l'expérience développeur"
          },
          "secure": {
            "title": "Sécurité Entreprise",
            "description": "Fonctionnalités d'authentification, d'autorisation et de sécurité intégrées"
          }
        },
        "cta": {
          "title": "Prêt à Commencer ?",
          "subtitle": "Rejoignez des milliers de développeurs qui construisent des applications incroyables",
          "signUp": "S'inscrire Gratuitement",
          "contactSales": "Contacter les Ventes",
          "viewDocumentation": "Voir la Documentation"
        },
        "footer": {
          "description": "Le framework de développement moderne pour construire des applications évolutives",
          "links": {
            "product": "Produit",
            "developers": "Développeurs",
            "company": "Entreprise",
            "support": "Support"
          },
          "legal": {
            "privacy": "Politique de Confidentialité",
            "terms": "Conditions d'Utilisation",
            "cookies": "Politique des Cookies"
          }
        }
      }
    }
  },
  "legalNotice": {
    "en": {
      "title": "Legal Notice",
      "lastUpdated": "Last updated",
      "publisher": {
        "title": "1. Publisher Information",
        "name": "Publisher name",
        "type": "Type",
        "types": {
          "company": "Company",
          "individual": "Individual"
        },
        "legalStatus": "Legal status",
        "shareCapital": "Share capital"
      },
      "registration": {
        "title": "2. Registration Details",
        "number": "Registration number / SIRET",
        "vat": "VAT number"
      },
      "office": {
        "title": "3. Registered Office",
        "address": "Address"
      },
      "contact": {
        "title": "4. Contact Information",
        "email": "Email",
        "phone": "Phone"
      },
      "director": {
        "title": "5. Publication Director",
        "name": "Name",
        "role": "Role"
      },
      "hosting": {
        "title": "6. Hosting Provider",
        "provider": "Provider",
        "address": "Address",
        "contact": "Contact"
      },
      "intellectualProperty": {
        "title": "7. Intellectual Property",
        "content": "All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of {{publisherName}} or its content suppliers and is protected by international copyright laws.",
        "unauthorized": "The unauthorized use of any content from this website may violate copyright, trademark, and other laws."
      },
      "personalData": {
        "title": "8. Personal Data",
        "content": "For information about how we collect, use, and protect your personal data, please refer to our ",
        "privacyPolicy": "Privacy Policy"
      },
      "cookies": {
        "title": "9. Cookies",
        "content": "This website uses cookies. For detailed information about cookies and how we use them, please refer to our ",
        "privacyPolicy": "Privacy Policy"
      }
    },
    "fr": {
      "title": "Mentions Légales",
      "lastUpdated": "Dernière mise à jour",
      "publisher": {
        "title": "1. Informations sur l'éditeur",
        "name": "Nom de l'éditeur",
        "type": "Type",
        "types": {
          "company": "Société",
          "individual": "Personne physique"
        },
        "legalStatus": "Forme juridique",
        "shareCapital": "Capital social"
      },
      "registration": {
        "title": "2. Informations d'enregistrement",
        "number": "Numéro d'enregistrement / SIRET",
        "vat": "Numéro de TVA intracommunautaire"
      },
      "office": {
        "title": "3. Siège social",
        "address": "Adresse"
      },
      "contact": {
        "title": "4. Coordonnées",
        "email": "Email",
        "phone": "Téléphone"
      },
      "director": {
        "title": "5. Directeur de la publication",
        "name": "Nom",
        "role": "Fonction"
      },
      "hosting": {
        "title": "6. Hébergeur",
        "provider": "Nom de l'hébergeur",
        "address": "Adresse",
        "contact": "Contact"
      },
      "intellectualProperty": {
        "title": "7. Propriété intellectuelle",
        "content": "L'ensemble des éléments de ce site web, incluant mais ne se limitant pas aux textes, graphiques, logos, images, clips audio, téléchargements numériques, compilations de données et logiciels, est la propriété de {{publisherName}} ou de ses fournisseurs de contenu et est protégé par les lois internationales sur le droit d'auteur.",
        "unauthorized": "L'utilisation non autorisée de tout contenu de ce site web peut violer les lois sur le droit d'auteur, les marques déposées et d'autres lois."
      },
      "personalData": {
        "title": "8. Données personnelles",
        "content": "Pour des informations sur la manière dont nous collectons, utilisons et protégeons vos données personnelles, veuillez consulter notre ",
        "privacyPolicy": "Politique de confidentialité"
      },
      "cookies": {
        "title": "9. Cookies",
        "content": "Ce site web utilise des cookies. Pour des informations détaillées sur les cookies et la manière dont nous les utilisons, veuillez consulter notre ",
        "privacyPolicy": "Politique de confidentialité"
      }
    }
  },
  "privacy": {
    "en": {
      "title": "Privacy Policy",
      "lastUpdated": "Last updated",
      "common": {
        "we": "we",
        "our": "our",
        "or": "or",
        "us": "us"
      },
      "sections": {
        "introduction": {
          "title": "1. Introduction",
          "welcome": "Welcome to",
          "commitment": "We are committed to protecting your privacy and ensuring you have a positive experience on our platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our development framework, tools, and services.",
          "agreement": "you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services."
        },
        "collection": {
          "title": "2. Information We Collect",
          "provided": {
            "title": "2.1 Information You Provide",
            "account": "Account Information",
            "accountDesc": "Name, email address, password, and profile information when you create an account",
            "usage": "Usage Data",
            "usageDesc": "Information about how you use our services, including features accessed and time spent",
            "communication": "Communication",
            "communicationDesc": "Messages, feedback, and support requests you send to us",
            "payment": "Payment Information",
            "paymentDesc": "Billing details and payment method information for premium features",
            "project": "Project Data",
            "projectDesc": "Code, configurations, and project files you create using our framework"
          },
          "automatic": {
            "title": "2.2 Automatically Collected Information",
            "device": "Device Information",
            "deviceDesc": "IP address, browser type, operating system, and device identifiers",
            "analytics": "Usage Analytics",
            "analyticsDesc": "Pages visited, features used, and interaction patterns",
            "performance": "Performance Data",
            "performanceDesc": "Error logs, performance metrics, and system diagnostics",
            "cookies": "Cookies and Tracking",
            "cookiesDesc": "Small data files stored on your device to improve your experience"
          }
        },
        "usage": {
          "title": "3. How We Use Your Information",
          "intro": "We use the information we collect to:",
          "provide": "Provide, maintain, and improve our services",
          "process": "Process transactions and manage your account",
          "send": "Send you important updates, security alerts, and support messages",
          "respond": "Respond to your comments, questions, and support requests",
          "analyze": "Analyze usage patterns to enhance user experience",
          "detect": "Detect and prevent fraud, abuse, and security threats",
          "comply": "Comply with legal obligations and enforce our terms",
          "develop": "Develop new features and services based on user feedback"
        },
        "sharing": {
          "title": "4. Information Sharing and Disclosure",
          "intro": "We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:",
          "providers": {
            "title": "4.1 Service Providers",
            "intro": "We may share information with trusted third-party service providers who assist us in operating our platform, such as:",
            "hosting": "Cloud hosting and infrastructure providers",
            "payment": "Payment processors for billing and transactions",
            "analytics": "Analytics and monitoring services",
            "support": "Customer support and communication tools"
          },
          "legal": {
            "title": "4.2 Legal Requirements",
            "desc": "We may disclose your information if required by law, court order, or government request, or to protect our rights, property, or safety."
          },
          "business": {
            "title": "4.3 Business Transfers",
            "desc": "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction."
          }
        },
        "security": {
          "title": "5. Data Security",
          "intro": "We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:",
          "encryption": "Encryption of data in transit and at rest",
          "assessments": "Regular security assessments and updates",
          "access": "Access controls and authentication mechanisms",
          "training": "Employee training on data protection practices",
          "incident": "Incident response and breach notification procedures"
        },
        "retention": {
          "title": "6. Data Retention",
          "intro": "We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. The retention period varies based on the type of information:",
          "account": "Account Information",
          "accountDesc": "Retained while your account is active and for a reasonable period after deletion",
          "usage": "Usage Data",
          "usageDesc": "Retained for analytics and service improvement purposes",
          "payment": "Payment Information",
          "paymentDesc": "Retained as required by financial regulations",
          "communication": "Communication Records",
          "communicationDesc": "Retained for customer support and legal compliance"
        },
        "rights": {
          "title": "7. Your Rights and Choices",
          "intro": "Depending on your location, you may have the following rights regarding your personal information:",
          "access": {
            "title": "7.1 Access and Portability",
            "desc": "You can request access to your personal information and receive a copy in a portable format."
          },
          "correction": {
            "title": "7.2 Correction and Update",
            "desc": "You can request correction of inaccurate or incomplete information."
          },
          "deletion": {
            "title": "7.3 Deletion",
            "desc": "You can request deletion of your personal information, subject to legal requirements."
          },
          "restriction": {
            "title": "7.4 Restriction and Objection",
            "desc": "You can request restriction of processing or object to certain uses of your information."
          },
          "marketing": {
            "title": "7.5 Marketing Communications",
            "desc": "You can opt out of marketing communications at any time using the unsubscribe link or contacting us directly."
          }
        },
        "cookies": {
          "title": "8. Cookies and Tracking Technologies",
          "intro": "We use cookies and similar tracking technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie settings through your browser preferences.",
          "types": {
            "title": "8.1 Types of Cookies We Use",
            "essential": "Essential Cookies",
            "essentialDesc": "Required for basic functionality and security",
            "analytics": "Analytics Cookies",
            "analyticsDesc": "Help us understand how visitors use our platform",
            "functional": "Functional Cookies",
            "functionalDesc": "Remember your preferences and settings",
            "marketing": "Marketing Cookies",
            "marketingDesc": "Used for targeted advertising and content"
          }
        },
        "international": {
          "title": "9. International Data Transfers",
          "desc": "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws."
        },
        "children": {
          "title": "10. Children's Privacy",
          "desc": "Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately."
        },
        "changes": {
          "title": "11. Changes to This Privacy Policy",
          "desc": "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the \"Last updated\" date."
        },
        "contact": {
          "title": "12. Contact Us",
          "intro": "If you have any questions about this Privacy Policy or our data practices, please contact us:",
          "email": "Email",
          "address": "Address",
          "dpo": "Data Protection Officer",
          "phone": "Phone",
          "support": "Support Email"
        },
        "eu": {
          "title": "13. Legal Basis for Processing (EU Users)",
          "intro": "For users in the European Union, our legal basis for processing your personal information includes:",
          "consent": "Consent",
          "consentDesc": "When you explicitly agree to our processing",
          "contract": "Contract Performance",
          "contractDesc": "To provide our services under our terms",
          "legitimate": "Legitimate Interest",
          "legitimateDesc": "To improve our services and prevent fraud",
          "legal": "Legal Obligation",
          "legalDesc": "To comply with applicable laws and regulations"
        },
        "california": {
          "title": "14. California Privacy Rights (CCPA)",
          "desc": "California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and how we use it, the right to delete personal information, and the right to opt out of the sale of personal information."
        }
      },
      "footer": {
        "effective": "This Privacy Policy is effective as of",
        "remain": "and will remain in effect except with respect to any changes in its provisions in the future."
      }
    },
    "fr": {
      "title": "Politique de Confidentialité",
      "lastUpdated": "Dernière mise à jour",
      "common": {
        "we": "nous",
        "our": "notre",
        "or": "ou",
        "us": "nous"
      },
      "sections": {
        "introduction": {
          "title": "1. Introduction",
          "welcome": "Bienvenue chez",
          "commitment": "Nous nous engageons à protéger votre vie privée et à vous assurer une expérience positive sur notre plateforme. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre framework de développement, nos outils et nos services.",
          "agreement": "vous acceptez la collecte et l'utilisation d'informations conformément à cette politique. Si vous n'êtes pas d'accord avec nos politiques et pratiques, veuillez ne pas utiliser nos services."
        },
        "collection": {
          "title": "2. Informations que nous collectons",
          "provided": {
            "title": "2.1 Informations que vous fournissez",
            "account": "Informations de compte",
            "accountDesc": "Nom, adresse e-mail, mot de passe et informations de profil lors de la création d'un compte",
            "usage": "Données d'utilisation",
            "usageDesc": "Informations sur la façon dont vous utilisez nos services, y compris les fonctionnalités consultées et le temps passé",
            "communication": "Communication",
            "communicationDesc": "Messages, commentaires et demandes de support que vous nous envoyez",
            "payment": "Informations de paiement",
            "paymentDesc": "Détails de facturation et informations de méthode de paiement pour les fonctionnalités premium",
            "project": "Données de projet",
            "projectDesc": "Code, configurations et fichiers de projet que vous créez en utilisant notre framework"
          },
          "automatic": {
            "title": "2.2 Informations collectées automatiquement",
            "device": "Informations sur l'appareil",
            "deviceDesc": "Adresse IP, type de navigateur, système d'exploitation et identifiants d'appareil",
            "analytics": "Analyses d'utilisation",
            "analyticsDesc": "Pages visitées, fonctionnalités utilisées et modèles d'interaction",
            "performance": "Données de performance",
            "performanceDesc": "Journaux d'erreurs, métriques de performance et diagnostics système",
            "cookies": "Cookies et suivi",
            "cookiesDesc": "Petits fichiers de données stockés sur votre appareil pour améliorer votre expérience"
          }
        },
        "usage": {
          "title": "3. Comment nous utilisons vos informations",
          "intro": "Nous utilisons les informations que nous collectons pour :",
          "provide": "Fournir, maintenir et améliorer nos services",
          "process": "Traiter les transactions et gérer votre compte",
          "send": "Vous envoyer des mises à jour importantes, des alertes de sécurité et des messages de support",
          "respond": "Répondre à vos commentaires, questions et demandes de support",
          "analyze": "Analyser les modèles d'utilisation pour améliorer l'expérience utilisateur",
          "detect": "Détecter et prévenir la fraude, les abus et les menaces de sécurité",
          "comply": "Se conformer aux obligations légales et faire respecter nos conditions",
          "develop": "Développer de nouvelles fonctionnalités et services basés sur les commentaires des utilisateurs"
        },
        "sharing": {
          "title": "4. Partage et divulgation d'informations",
          "intro": "Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations dans les circonstances suivantes :",
          "providers": {
            "title": "4.1 Fournisseurs de services",
            "intro": "Nous pouvons partager des informations avec des fournisseurs de services tiers de confiance qui nous aident à exploiter notre plateforme, tels que :",
            "hosting": "Fournisseurs d'hébergement cloud et d'infrastructure",
            "payment": "Processeurs de paiement pour la facturation et les transactions",
            "analytics": "Services d'analyse et de surveillance",
            "support": "Outils de support client et de communication"
          },
          "legal": {
            "title": "4.2 Exigences légales",
            "desc": "Nous pouvons divulguer vos informations si la loi, une ordonnance du tribunal ou une demande gouvernementale l'exige, ou pour protéger nos droits, notre propriété ou notre sécurité."
          },
          "business": {
            "title": "4.3 Transferts d'entreprise",
            "desc": "En cas de fusion, d'acquisition ou de vente d'actifs, vos informations peuvent être transférées dans le cadre de la transaction commerciale."
          }
        },
        "security": {
          "title": "5. Sécurité des données",
          "intro": "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos informations contre l'accès non autorisé, l'altération, la divulgation ou la destruction. Ces mesures comprennent :",
          "encryption": "Chiffrement des données en transit et au repos",
          "assessments": "Évaluations de sécurité régulières et mises à jour",
          "access": "Contrôles d'accès et mécanismes d'authentification",
          "training": "Formation des employés sur les pratiques de protection des données",
          "incident": "Procédures de réponse aux incidents et de notification des violations"
        },
        "retention": {
          "title": "6. Conservation des données",
          "intro": "Nous conservons vos informations aussi longtemps que nécessaire pour fournir nos services, nous conformer aux obligations légales, résoudre les litiges et faire respecter nos accords. La période de conservation varie selon le type d'information :",
          "account": "Informations de compte",
          "accountDesc": "Conservées tant que votre compte est actif et pendant une période raisonnable après la suppression",
          "usage": "Données d'utilisation",
          "usageDesc": "Conservées pour les analyses et l'amélioration des services",
          "payment": "Informations de paiement",
          "paymentDesc": "Conservées conformément aux réglementations financières",
          "communication": "Registres de communication",
          "communicationDesc": "Conservés pour le support client et la conformité légale"
        },
        "rights": {
          "title": "7. Vos droits et choix",
          "intro": "Selon votre localisation, vous pouvez avoir les droits suivants concernant vos informations personnelles :",
          "access": {
            "title": "7.1 Accès et portabilité",
            "desc": "Vous pouvez demander l'accès à vos informations personnelles et recevoir une copie dans un format portable."
          },
          "correction": {
            "title": "7.2 Correction et mise à jour",
            "desc": "Vous pouvez demander la correction d'informations inexactes ou incomplètes."
          },
          "deletion": {
            "title": "7.3 Suppression",
            "desc": "Vous pouvez demander la suppression de vos informations personnelles, sous réserve des exigences légales."
          },
          "restriction": {
            "title": "7.4 Restriction et objection",
            "desc": "Vous pouvez demander la restriction du traitement ou vous opposer à certaines utilisations de vos informations."
          },
          "marketing": {
            "title": "7.5 Communications marketing",
            "desc": "Vous pouvez vous désabonner des communications marketing à tout moment en utilisant le lien de désabonnement ou en nous contactant directement."
          }
        },
        "cookies": {
          "title": "8. Cookies et technologies de suivi",
          "intro": "Nous utilisons des cookies et des technologies de suivi similaires pour améliorer votre expérience, analyser l'utilisation et fournir du contenu personnalisé. Vous pouvez contrôler les paramètres des cookies via les préférences de votre navigateur.",
          "types": {
            "title": "8.1 Types de cookies que nous utilisons",
            "essential": "Cookies essentiels",
            "essentialDesc": "Requis pour les fonctionnalités de base et la sécurité",
            "analytics": "Cookies d'analyse",
            "analyticsDesc": "Nous aident à comprendre comment les visiteurs utilisent notre plateforme",
            "functional": "Cookies fonctionnels",
            "functionalDesc": "Se souviennent de vos préférences et paramètres",
            "marketing": "Cookies marketing",
            "marketingDesc": "Utilisés pour la publicité ciblée et le contenu"
          }
        },
        "international": {
          "title": "9. Transferts internationaux de données",
          "desc": "Vos informations peuvent être transférées et traitées dans des pays autres que le vôtre. Nous nous assurons que des garanties appropriées sont en place pour protéger vos informations conformément aux lois applicables sur la protection des données."
        },
        "children": {
          "title": "10. Confidentialité des enfants",
          "desc": "Nos services ne sont pas destinés aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants de moins de 13 ans. Si vous pensez que nous avons collecté des informations auprès d'un enfant de moins de 13 ans, veuillez nous contacter immédiatement."
        },
        "changes": {
          "title": "11. Modifications de cette politique de confidentialité",
          "desc": "Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre pour refléter les changements dans nos pratiques ou les lois applicables. Nous vous informerons de tout changement important en publiant la politique mise à jour sur notre site web et en mettant à jour la date de \"Dernière mise à jour\"."
        },
        "contact": {
          "title": "12. Nous contacter",
          "intro": "Si vous avez des questions sur cette Politique de Confidentialité ou nos pratiques en matière de données, veuillez nous contacter :",
          "email": "E-mail",
          "address": "Adresse",
          "dpo": "Délégué à la protection des données",
          "phone": "Téléphone",
          "support": "E-mail de support"
        },
        "eu": {
          "title": "13. Base légale du traitement (Utilisateurs UE)",
          "intro": "Pour les utilisateurs de l'Union européenne, notre base légale pour traiter vos informations personnelles comprend :",
          "consent": "Consentement",
          "consentDesc": "Lorsque vous acceptez explicitement notre traitement",
          "contract": "Exécution du contrat",
          "contractDesc": "Pour fournir nos services selon nos conditions",
          "legitimate": "Intérêt légitime",
          "legitimateDesc": "Pour améliorer nos services et prévenir la fraude",
          "legal": "Obligation légale",
          "legalDesc": "Pour se conformer aux lois et réglementations applicables"
        },
        "california": {
          "title": "14. Droits à la confidentialité de la Californie (CCPA)",
          "desc": "Les résidents de Californie ont des droits supplémentaires en vertu de la California Consumer Privacy Act (CCPA), y compris le droit de savoir quelles informations personnelles nous collectons et comment nous les utilisons, le droit de supprimer les informations personnelles et le droit de se désabonner de la vente d'informations personnelles."
        }
      },
      "footer": {
        "effective": "Cette Politique de Confidentialité est effective à partir du",
        "remain": "et restera en vigueur sauf en ce qui concerne tout changement dans ses dispositions à l'avenir."
      }
    }
  },
  "terms": {
    "en": {
      "title": "Terms of Service",
      "lastUpdated": "Last updated",
      "common": {
        "we": "we",
        "our": "our",
        "or": "or",
        "us": "us"
      },
      "sections": {
        "introduction": {
          "title": "1. Introduction",
          "welcome": "Welcome to",
          "govern": "These Terms of Service (\"Terms\") govern your use of our development framework, tools, and services (collectively, the \"Service\"). By accessing or using our Service, you agree to be bound by these Terms.",
          "organization": "If you are using our Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms. If you do not agree to these Terms, please do not use our Service."
        },
        "service": {
          "title": "2. Service Description",
          "description": "is a comprehensive development framework that provides tools, components, and infrastructure for building modern web applications. Our Service includes:",
          "framework": "Development framework and libraries",
          "ui": "UI components and design system",
          "auth": "Authentication and authorization services",
          "i18n": "Internationalization and localization tools",
          "billing": "Billing and subscription management",
          "docs": "Documentation and support resources"
        },
        "account": {
          "title": "3. Account Registration and Security",
          "creation": {
            "title": "3.1 Account Creation",
            "desc": "To access certain features of our Service, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete."
          },
          "security": {
            "title": "3.2 Account Security",
            "desc": "You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security."
          },
          "eligibility": {
            "title": "3.3 Account Eligibility",
            "desc": "You must be at least 13 years old to use our Service. If you are under 18, you must have parental or guardian consent to use our Service."
          }
        },
        "acceptable": {
          "title": "4. Acceptable Use Policy",
          "intro": "You agree to use our Service only for lawful purposes and in accordance with these Terms. You agree not to:",
          "laws": "Use the Service to violate any applicable laws or regulations",
          "infringe": "Infringe upon the intellectual property rights of others",
          "harmful": "Transmit harmful, offensive, or inappropriate content",
          "unauthorized": "Attempt to gain unauthorized access to our systems or other users' accounts",
          "spam": "Use the Service for spam, phishing, or other malicious activities",
          "disrupt": "Interfere with or disrupt the Service or servers",
          "reverse": "Reverse engineer, decompile, or disassemble our software",
          "automated": "Use automated systems to access the Service without permission",
          "share": "Share your account credentials with others",
          "competing": "Use the Service to build competing products or services"
        },
        "payment": {
          "title": "5. Subscription and Payment Terms",
          "plans": {
            "title": "5.1 Subscription Plans",
            "desc": "We offer various subscription plans with different features and pricing. Subscription details, including pricing and features, are available on our website and may be updated from time to time."
          },
          "processing": {
            "title": "5.2 Payment Processing",
            "desc": "Payments are processed through secure third-party payment processors. You authorize us to charge your payment method for all fees associated with your subscription."
          },
          "billing": {
            "title": "5.3 Billing and Renewal",
            "desc": "Subscriptions automatically renew unless cancelled before the renewal date. You will be charged the applicable subscription fee on each renewal date."
          },
          "refunds": {
            "title": "5.4 Refunds and Cancellation",
            "desc": "You may cancel your subscription at any time through your account settings. Refunds are provided in accordance with our refund policy, which may vary by plan and usage."
          }
        },
        "ip": {
          "title": "6. Intellectual Property Rights",
          "ours": {
            "title": "6.1 Our Intellectual Property",
            "desc": "The Service, including all software, content, and materials, is owned by us or our licensors and is protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable license to use the Service in accordance with these Terms."
          },
          "yours": {
            "title": "6.2 Your Content",
            "desc": "You retain ownership of any content you create using our Service. You grant us a license to use, store, and process your content solely to provide and improve our Service."
          },
          "opensource": {
            "title": "6.3 Open Source Components",
            "desc": "Our Service may include open source software components. The use of such components is subject to their respective open source licenses."
          }
        },
        "privacy": {
          "title": "7. Privacy and Data Protection",
          "desc": "Your privacy is important to us. Our collection and use of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference."
        },
        "availability": {
          "title": "8. Service Availability and Support",
          "service": {
            "title": "8.1 Service Availability",
            "desc": "We strive to maintain high service availability but do not guarantee uninterrupted access. The Service may be temporarily unavailable due to maintenance, updates, or other factors beyond our control."
          },
          "support": {
            "title": "8.2 Support Services",
            "desc": "Support availability varies by subscription plan. We provide support through documentation, community forums, and direct support channels as specified in your plan."
          },
          "updates": {
            "title": "8.3 Updates and Changes",
            "desc": "We may update the Service from time to time to improve functionality, security, or user experience. We will provide reasonable notice of significant changes that may affect your use of the Service."
          }
        },
        "termination": {
          "title": "9. Termination and Suspension",
          "you": {
            "title": "9.1 Termination by You",
            "desc": "You may terminate your account at any time by cancelling your subscription and deleting your account through your account settings."
          },
          "us": {
            "title": "9.2 Termination by Us",
            "desc": "We may terminate or suspend your account immediately if you violate these Terms, engage in fraudulent activity, or for any other reason at our sole discretion."
          },
          "effect": {
            "title": "9.3 Effect of Termination",
            "desc": "Upon termination, your right to use the Service ceases immediately. We may delete your account data in accordance with our data retention policies."
          }
        },
        "disclaimers": {
          "title": "10. Disclaimers and Limitations",
          "service": {
            "title": "10.1 Service Disclaimers",
            "desc": "THE SERVICE IS PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT."
          },
          "liability": {
            "title": "10.2 Limitation of Liability",
            "desc": "TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, INCURRED BY YOU OR ANY THIRD PARTY."
          },
          "maximum": {
            "title": "10.3 Maximum Liability",
            "desc": "OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICE IN THE TWELVE MONTHS PRECEDING THE CLAIM."
          }
        },
        "indemnification": {
          "title": "11. Indemnification",
          "desc": "You agree to indemnify, defend, and hold harmless us and our officers, directors, employees, and agents from and against any claims, damages, losses, and expenses arising out of or relating to your use of the Service or violation of these Terms."
        },
        "governing": {
          "title": "12. Governing Law and Dispute Resolution",
          "law": {
            "title": "12.1 Governing Law",
            "desc": "These Terms are governed by and construed in accordance with the laws of",
            "without": "without regard to its conflict of law principles."
          },
          "dispute": {
            "title": "12.2 Dispute Resolution",
            "desc": "Any disputes arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of",
            "location": "The arbitration shall be conducted in"
          },
          "class": {
            "title": "12.3 Class Action Waiver",
            "desc": "You agree that any arbitration or legal proceeding will be conducted on an individual basis and not as a class action or representative action."
          }
        },
        "miscellaneous": {
          "title": "13. Miscellaneous",
          "entire": {
            "title": "13.1 Entire Agreement",
            "desc": "These Terms, together with our Privacy Policy, constitute the entire agreement between you and us regarding the Service and supersede all prior agreements and understandings."
          },
          "severability": {
            "title": "13.2 Severability",
            "desc": "If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will continue in full force and effect."
          },
          "waiver": {
            "title": "13.3 Waiver",
            "desc": "Our failure to enforce any provision of these Terms does not constitute a waiver of that provision or any other provision."
          },
          "assignment": {
            "title": "13.4 Assignment",
            "desc": "You may not assign or transfer your rights or obligations under these Terms without our written consent. We may assign these Terms without restriction."
          },
          "force": {
            "title": "13.5 Force Majeure",
            "desc": "We shall not be liable for any failure to perform our obligations due to circumstances beyond our reasonable control, including but not limited to natural disasters, war, terrorism, or government actions."
          }
        },
        "changes": {
          "title": "14. Changes to These Terms",
          "desc": "We may update these Terms from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated Terms on our website and updating the \"Last updated\" date."
        },
        "contact": {
          "title": "15. Contact Us",
          "intro": "If you have any questions about these Terms of Service, please contact us:",
          "email": "Email",
          "address": "Address",
          "phone": "Phone",
          "support": "Support Email"
        }
      },
      "footer": {
        "effective": "These Terms of Service are effective as of",
        "remain": "and will remain in effect except with respect to any changes in its provisions in the future."
      }
    },
    "fr": {
      "title": "Conditions d'Utilisation",
      "lastUpdated": "Dernière mise à jour",
      "common": {
        "we": "nous",
        "our": "notre",
        "or": "ou",
        "us": "nous"
      },
      "sections": {
        "introduction": {
          "title": "1. Introduction",
          "welcome": "Bienvenue chez",
          "govern": "Ces Conditions d'Utilisation (\"Conditions\") régissent votre utilisation de notre framework de développement, nos outils et nos services (collectivement, le \"Service\"). En accédant ou en utilisant notre Service, vous acceptez d'être lié par ces Conditions.",
          "organization": "Si vous utilisez notre Service au nom d'une organisation, vous représentez que vous avez l'autorité pour lier cette organisation à ces Conditions. Si vous n'êtes pas d'accord avec ces Conditions, veuillez ne pas utiliser notre Service."
        },
        "service": {
          "title": "2. Description du service",
          "description": "est un framework de développement complet qui fournit des outils, des composants et une infrastructure pour construire des applications web modernes. Notre Service comprend :",
          "framework": "Framework de développement et bibliothèques",
          "ui": "Composants UI et système de design",
          "auth": "Services d'authentification et d'autorisation",
          "i18n": "Outils d'internationalisation et de localisation",
          "billing": "Gestion de la facturation et des abonnements",
          "docs": "Documentation et ressources de support"
        },
        "account": {
          "title": "3. Inscription et sécurité du compte",
          "creation": {
            "title": "3.1 Création de compte",
            "desc": "Pour accéder à certaines fonctionnalités de notre Service, vous devez créer un compte. Vous acceptez de fournir des informations exactes, actuelles et complètes lors de l'inscription et de mettre à jour ces informations pour les maintenir exactes, actuelles et complètes."
          },
          "security": {
            "title": "3.2 Sécurité du compte",
            "desc": "Vous êtes responsable de la protection de vos identifiants de compte et de toutes les activités qui se produisent sous votre compte. Vous acceptez de nous notifier immédiatement de toute utilisation non autorisée de votre compte ou de toute autre violation de sécurité."
          },
          "eligibility": {
            "title": "3.3 Éligibilité du compte",
            "desc": "Vous devez avoir au moins 13 ans pour utiliser notre Service. Si vous avez moins de 18 ans, vous devez avoir le consentement parental ou du tuteur pour utiliser notre Service."
          }
        },
        "acceptable": {
          "title": "4. Politique d'utilisation acceptable",
          "intro": "Vous acceptez d'utiliser notre Service uniquement à des fins légales et conformément à ces Conditions. Vous acceptez de ne pas :",
          "laws": "Utiliser le Service pour violer toute loi ou réglementation applicable",
          "infringe": "Enfreindre les droits de propriété intellectuelle d'autrui",
          "harmful": "Transmettre du contenu nuisible, offensant ou inapproprié",
          "unauthorized": "Tenter d'obtenir un accès non autorisé à nos systèmes ou aux comptes d'autres utilisateurs",
          "spam": "Utiliser le Service pour le spam, le phishing ou d'autres activités malveillantes",
          "disrupt": "Interférer avec ou perturber le Service ou les serveurs",
          "reverse": "Rétroconcevoir, décompiler ou désassembler notre logiciel",
          "automated": "Utiliser des systèmes automatisés pour accéder au Service sans permission",
          "share": "Partager vos identifiants de compte avec d'autres",
          "competing": "Utiliser le Service pour construire des produits ou services concurrents"
        },
        "payment": {
          "title": "5. Conditions d'abonnement et de paiement",
          "plans": {
            "title": "5.1 Plans d'abonnement",
            "desc": "Nous proposons divers plans d'abonnement avec différentes fonctionnalités et tarifs. Les détails de l'abonnement, y compris les tarifs et fonctionnalités, sont disponibles sur notre site web et peuvent être mis à jour de temps à autre."
          },
          "processing": {
            "title": "5.2 Traitement des paiements",
            "desc": "Les paiements sont traités par des processeurs de paiement tiers sécurisés. Vous nous autorisez à facturer votre méthode de paiement pour tous les frais associés à votre abonnement."
          },
          "billing": {
            "title": "5.3 Facturation et renouvellement",
            "desc": "Les abonnements se renouvellent automatiquement sauf s'ils sont annulés avant la date de renouvellement. Vous serez facturé des frais d'abonnement applicables à chaque date de renouvellement."
          },
          "refunds": {
            "title": "5.4 Remboursements et annulation",
            "desc": "Vous pouvez annuler votre abonnement à tout moment via les paramètres de votre compte. Les remboursements sont fournis conformément à notre politique de remboursement, qui peut varier selon le plan et l'utilisation."
          }
        },
        "ip": {
          "title": "6. Droits de propriété intellectuelle",
          "ours": {
            "title": "6.1 Notre propriété intellectuelle",
            "desc": "Le Service, y compris tous les logiciels, contenus et matériaux, est détenu par nous ou nos concédants et est protégé par les lois sur la propriété intellectuelle. Nous vous accordons une licence limitée, non exclusive et non transférable pour utiliser le Service conformément à ces Conditions."
          },
          "yours": {
            "title": "6.2 Votre contenu",
            "desc": "Vous conservez la propriété de tout contenu que vous créez en utilisant notre Service. Vous nous accordez une licence pour utiliser, stocker et traiter votre contenu uniquement pour fournir et améliorer notre Service."
          },
          "opensource": {
            "title": "6.3 Composants open source",
            "desc": "Notre Service peut inclure des composants logiciels open source. L'utilisation de ces composants est soumise à leurs licences open source respectives."
          }
        },
        "privacy": {
          "title": "7. Confidentialité et protection des données",
          "desc": "Votre confidentialité est importante pour nous. Notre collecte et utilisation de vos informations personnelles sont régies par notre Politique de Confidentialité, qui est incorporée dans ces Conditions par référence."
        },
        "availability": {
          "title": "8. Disponibilité et support du service",
          "service": {
            "title": "8.1 Disponibilité du service",
            "desc": "Nous nous efforçons de maintenir une haute disponibilité du service mais ne garantissons pas un accès ininterrompu. Le Service peut être temporairement indisponible en raison de maintenance, de mises à jour ou d'autres facteurs indépendants de notre volonté."
          },
          "support": {
            "title": "8.2 Services de support",
            "desc": "La disponibilité du support varie selon le plan d'abonnement. Nous fournissons un support via la documentation, les forums communautaires et les canaux de support directs comme spécifié dans votre plan."
          },
          "updates": {
            "title": "8.3 Mises à jour et changements",
            "desc": "Nous pouvons mettre à jour le Service de temps à autre pour améliorer la fonctionnalité, la sécurité ou l'expérience utilisateur. Nous fournirons un préavis raisonnable des changements importants qui peuvent affecter votre utilisation du Service."
          }
        },
        "termination": {
          "title": "9. Résiliation et suspension",
          "you": {
            "title": "9.1 Résiliation par vous",
            "desc": "Vous pouvez résilier votre compte à tout moment en annulant votre abonnement et en supprimant votre compte via les paramètres de votre compte."
          },
          "us": {
            "title": "9.2 Résiliation par nous",
            "desc": "Nous pouvons résilier ou suspendre votre compte immédiatement si vous violez ces Conditions, vous engagez dans une activité frauduleuse, ou pour toute autre raison à notre seule discrétion."
          },
          "effect": {
            "title": "9.3 Effet de la résiliation",
            "desc": "Lors de la résiliation, votre droit d'utiliser le Service cesse immédiatement. Nous pouvons supprimer les données de votre compte conformément à nos politiques de conservation des données."
          }
        },
        "disclaimers": {
          "title": "10. Exclusions et limitations",
          "service": {
            "title": "10.1 Exclusions de service",
            "desc": "LE SERVICE EST FOURNI \"EN L'ÉTAT\" ET \"TEL QUE DISPONIBLE\" SANS GARANTIES D'AUCUNE SORTE, EXPRESSES OU IMPLICITES, Y COMPRIS MAIS SANS S'Y LIMITER LES GARANTIES IMPLICITES DE COMMERCIALISATION, D'ADÉQUATION À UN USAGE PARTICULIER ET DE NON-VIOLATION."
          },
          "liability": {
            "title": "10.2 Limitation de responsabilité",
            "desc": "DANS LA MESURE MAXIMALE PERMISE PAR LA LOI, NOUS NE SERONS PAS RESPONSABLES DE TOUT DOMMAGE INDIRECT, ACCESSOIRE, SPÉCIAL, CONSÉQUENTIEL OU PUNITIF, Y COMPRIS MAIS SANS S'Y LIMITER LA PERTE DE PROFITS, DE DONNÉES OU D'UTILISATION, ENCOURUS PAR VOUS OU TOUT TIERS."
          },
          "maximum": {
            "title": "10.3 Responsabilité maximale",
            "desc": "NOTRE RESPONSABILITÉ TOTALE ENVERS VOUS POUR TOUTE RÉCLAMATION DÉCOULANT DE OU RELATIVE À CES CONDITIONS OU AU SERVICE NE DÉPASSERA PAS LE MONTANT PAYÉ PAR VOUS POUR LE SERVICE DANS LES DOUZE MOIS PRÉCÉDANT LA RÉCLAMATION."
          }
        },
        "indemnification": {
          "title": "11. Indemnisation",
          "desc": "Vous acceptez d'indemniser, de défendre et de tenir indemnes nous et nos dirigeants, administrateurs, employés et agents de toute réclamation, dommage, perte et dépense découlant de ou relative à votre utilisation du Service ou violation de ces Conditions."
        },
        "governing": {
          "title": "12. Droit applicable et résolution des litiges",
          "law": {
            "title": "12.1 Droit applicable",
            "desc": "Ces Conditions sont régies et interprétées conformément aux lois de",
            "without": "sans égard à ses principes de conflit de lois."
          },
          "dispute": {
            "title": "12.2 Résolution des litiges",
            "desc": "Tout litige découlant de ou relatif à ces Conditions ou au Service sera résolu par arbitrage contraignant conformément aux règles de",
            "location": "L'arbitrage sera mené à"
          },
          "class": {
            "title": "12.3 Renonciation aux actions collectives",
            "desc": "Vous acceptez que toute procédure d'arbitrage ou légale sera menée sur une base individuelle et non comme une action collective ou représentative."
          }
        },
        "miscellaneous": {
          "title": "13. Dispositions diverses",
          "entire": {
            "title": "13.1 Accord complet",
            "desc": "Ces Conditions, avec notre Politique de Confidentialité, constituent l'accord complet entre vous et nous concernant le Service et remplacent tous les accords et compréhensions antérieurs."
          },
          "severability": {
            "title": "13.2 Divisibilité",
            "desc": "Si une disposition de ces Conditions est jugée invalide ou inapplicable, les dispositions restantes continueront en pleine force et effet."
          },
          "waiver": {
            "title": "13.3 Renonciation",
            "desc": "Notre échec à faire respecter une disposition de ces Conditions ne constitue pas une renonciation à cette disposition ou à toute autre disposition."
          },
          "assignment": {
            "title": "13.4 Cession",
            "desc": "Vous ne pouvez pas céder ou transférer vos droits ou obligations en vertu de ces Conditions sans notre consentement écrit. Nous pouvons céder ces Conditions sans restriction."
          },
          "force": {
            "title": "13.5 Force majeure",
            "desc": "Nous ne serons pas responsables de tout échec à exécuter nos obligations en raison de circonstances indépendantes de notre contrôle raisonnable, y compris mais sans s'y limiter les catastrophes naturelles, la guerre, le terrorisme ou les actions gouvernementales."
          }
        },
        "changes": {
          "title": "14. Modifications de ces conditions",
          "desc": "Nous pouvons mettre à jour ces Conditions de temps à autre pour refléter les changements dans nos pratiques ou les lois applicables. Nous vous informerons de tout changement important en publiant les Conditions mises à jour sur notre site web et en mettant à jour la date de \"Dernière mise à jour\"."
        },
        "contact": {
          "title": "15. Nous contacter",
          "intro": "Si vous avez des questions sur ces Conditions d'Utilisation, veuillez nous contacter :",
          "email": "E-mail",
          "address": "Adresse",
          "phone": "Téléphone",
          "support": "E-mail de support"
        }
      },
      "footer": {
        "effective": "Ces Conditions d'Utilisation sont effectives à partir du",
        "remain": "et resteront en vigueur sauf en ce qui concerne tout changement dans leurs dispositions à l'avenir."
      }
    }
  }
},
  storage: {
    type: 'localStorage',
    prefix: 'dndev_i18n_',
    ttl: 24 * 60 * 60 * 1000,
    encryption: false,
    maxSize: 5 * 1024 * 1024,
  },
  performance: {
    cacheSize: 100,
    errorCacheTTL: 30000,
  },
  manifest: {
    totalFiles: 9,
    totalNamespaces: 9,
    totalLanguages: 2,
    eagerNamespaces: 3,
    generatedAt: new Date().toISOString(),
  },
  debug: false,
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
  globalThis._DNDEV_CONFIG_.i18n = i18nConfig;
}

// Export for compatibility
export default i18nConfig;
