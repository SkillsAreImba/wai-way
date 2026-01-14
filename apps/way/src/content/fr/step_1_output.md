# Sortie WAI-WAY Étape 1 : Le Brainstorm

**Date** : 2026-01-13  
**Persona** : EXTRACTOR — Ingénieur Senior en Exigences  
**Statut** : ✅ COMPLET

---

## Journal de Session

### Question Initiale
**EXTRACTOR** : Que construisez-vous ? Décrivez-le en une ou deux phrases.

**USER** : Je construis le site web pour le wai-way. J'aurai une HomePage avec un composant Roadmap pour chacune des 4 étapes, puis une page pour chaque étape, présentant le prompt maître / le step.md et l'exemple step.output de cette expérience. J'aimerais un preset docs du framework DoNotDev pour avoir le routing dans la barre latérale automatiquement. Le site sera en FR et EN.

### Questions de Suivi

**EXTRACTOR Q1** : Vous avez mentionné un "composant Roadmap pour chacune des 4 étapes" sur la HomePage. Dites-m'en plus. Que doivent voir les utilisateurs dans cette roadmap ? Est-ce interactif ou juste informatif ?

**USER A1** : Utilisez juste la Roadmap de @donotdev/adv-comps

**EXTRACTOR Q2** : Compris—utilisation du composant Roadmap. Maintenant, quel contenu va dans chaque élément de la roadmap ? Par exemple, pour "Étape 1 : Le Brainstorm"—que doit voir l'utilisateur ? Juste le titre ? Une description ? Une icône ? Un indicateur de statut ?

**USER A2** : Pour chaque page d'étape, j'imagine :
- HeroSection : Nom de l'étape + Sous-titre pour la description
- Section 1 : Accordéon avec Prompt Maître (utilisant MarkdownViewer de @donotdev/templates pour affichage sympa + auto copy-to-clipboard)
- Section 2 : Accordéon avec Step.md
- Section 3 : Accordéon avec Sortie de l'étape (la documentation à générer)
- FAQSection (@donotdev/core) pour dépannage/FAQ
- Toutes les pages partagent cette structure → créer un StepTemplate pour code DRY
- Construire en anglais hardcodé d'abord, traduire après validation

**EXTRACTOR Q3** : Structure claire pour les pages d'étape ! Maintenant, retour à la HomePage—vous avez mentionné un composant Roadmap montrant les 4 étapes. Est-ce que cliquer sur un élément de la roadmap doit **naviguer vers la page de cette étape** ? Ou la roadmap est-elle juste visuelle ?

**USER A3** : Oui, utilisez onClick avec le useNavigate de @donotdev/ui sur chaque étape de la Roadmap.

**EXTRACTOR Q4** : Parfait—les éléments de la roadmap sont cliquables. Parlons des **pages**. J'ai : HomePage (avec Roadmap), Page Étape 1, Page Étape 2, Page Étape 3, Page Étape 4. Y a-t-il d'autres pages ? Par exemple : À propos, Contact, Showcase, ou autre chose ?

**USER A4** : Chaque Page/Étape a besoin de sa propre icône lucide : Brain pour Brainstorm, CheckList pour Revue, Hammer pour Build, Brush pour Polish. Seulement les pages légales requises par la France—celles-ci sont gérées nativement par le framework, juste mettre à jour LegalLinks.

**EXTRACTOR Q5** : Super—icônes notées et pages légales gérées par le framework. Parlons des **utilisateurs**. Qui visite ce site web ? Y a-t-il différents rôles (comme admin vs visiteur), ou tout le monde est-il juste un visiteur public lisant la documentation ?

**USER A5** : C'est uniquement un site public, gratuit à utiliser, gratuit à lire—mon cadeau au monde. Vous êtes prêt à coder je pense. Nous construirons avec Vite, configuration native DoNotDev et déploiement sur Vercel.

**EXTRACTOR Q6** : Presque là ! Juste quelques questions de plus. Vous avez mentionné le **support bilingue (FR/EN)**. Doit-il y avoir un composant sélecteur de langue sur la page ? Et l'URL doit-elle changer (comme `/en/step-1` vs `/fr/step-1`) ou juste changer le contenu ?

**USER A6** : C'est géré nativement par le framework (voir SETUP_I18N.md).

**EXTRACTOR Q7** : Parfait—i18n est natif. Clarifions les **données/contenu**. Les pages d'étape afficheront : (1) Prompt Maître de `step_X_prompts.md`, (2) Description de l'étape de `step_X.md`, (3) Sortie de l'étape de `step_X_output.md`. Ces fichiers sont-ils du **contenu statique** (juste lire et afficher), ou avez-vous besoin de fonctionnalités dynamiques comme recherche, filtrage ou annotations utilisateur ?

**USER A7** : Ils sont dans guides/WAI-WAY, mettez-les dans le CDN, gérez les versions Françaises et EN, copiez dans src/content.

**EXTRACTOR Q8** : Compris—fichiers markdown statiques dans src/content avec versions FR/EN. Pour la **FAQSection** sur chaque page d'étape—avez-vous déjà le contenu FAQ préparé, ou dois-je laisser des placeholders pour que vous remplissiez plus tard ? Si vous avez le contenu FAQ, quel type de questions la FAQ de chaque étape doit-elle couvrir ?

**USER A8** : Vous devrez définir la FAQ/Dépannage basé sur votre expérience/connaissance de la méthodologie/sites de prompting.

**EXTRACTOR Q9** : Compris—Je créerai le contenu FAQ/Dépannage. Parlons de la **HomePage** plus en détail. À part le composant Roadmap, quoi d'autre doit apparaître sur la HomePage ? Par exemple : une section hero avec titre/description ? Texte d'introduction sur WAI-WAY ? Boutons d'appel à l'action ? Ou est-ce juste la Roadmap ?

**USER A9** : Je vous l'ai déjà dit ! HeroSection avec "WAI-WAY - With AI WAY of building webApps. Powered by the DoNotDev Framework (can be used standalone tho)". Puis Roadmap. Puis CallToAction pour aller sur DoNotDev.com et ambroise-park.com - les outils/entreprise derrière le WAI-WAY.

**EXTRACTOR Q10** : Vous avez raison—toutes mes excuses ! J'ai la structure de la HomePage maintenant. Presque fini ! Pour le **composant Roadmap**—quel texte doit afficher chaque étape ? Étape 1 : "Le Brainstorm" ou autre chose ? Et quelles doivent être les descriptions/sous-titres pour chaque étape ?

**USER A10** : Vous résumez du mieux possible les étapes réelles s'il vous plaît.

**EXTRACTOR** : Basé sur la documentation :
- Étape 1 : "Le Brainstorm" - Extraire les exigences complètes via conversation IA
- Étape 2 : "La Revue" - Transformer le design en spécifications techniques
- Étape 3 : "Le Build" - Implémenter l'application phase par phase
- Étape 4 : "Le Polish" - Tester, corriger les bugs et livrer

**EXTRACTOR Q11 (FINAL)** : Y a-t-il autre chose dont ce site a besoin que nous n'avons pas couvert ? Fonctionnalités spéciales, analytics, formulaire de contact ou contraintes que je devrais connaître ?

---

## Progrès de l'Extraction

- [x] Vision
- [x] Utilisateurs
- [x] Entités
- [x] Fonctionnalités
- [x] Pages
- [x] Contraintes

---

## Résumé de Complétion

✅ **Étape 1 Complète : Le Brainstorm**

### Ce Qui A Été Extrait

**Vision** : Un site de documentation bilingue présentant la méthodologie WAI-WAY pour construire des web apps avec l'IA.

**Utilisateurs** : Visiteurs publics uniquement (pas d'authentification)

**Pages** : 
- HomePage (Roadmap + Hero + CTA)
- 4 Pages d'Étape (modèle standardisé)
- Pages légales (générées par le framework)

**Fonctionnalités Clés** :
- Support bilingue EN/FR (natif framework)
- Roadmap interactive avec navigation
- Affichage de contenu Markdown avec copier-coller
- Sections FAQ par étape
- Preset docs avec navigation latérale

**Stack Technique** :
- Framework DoNotDev (Vite)
- Preset : docs
- Déploiement : Vercel
- Icônes : Brain, CheckList, Hammer, Brush (lucide-react)

**Structure du Contenu** :
- Composant StepTemplate (DRY)
- Markdown statique dans src/content/
- Versions FR/EN pour tout le contenu

### Artefacts Générés

- ✅ `HLD.md` - Document complet de Conception de Haut Niveau
- ✅ `step_1_output.md` - Ce journal de conversation

### Critères de Succès Remplis

- [x] La vision est une phrase claire
- [x] Tous les rôles utilisateurs définis avec permissions
- [x] Toutes les fonctionnalités taguées MVP ou V2
- [x] Toutes les pages ont des routes et niveaux d'accès
- [x] Plateforme, langues, déploiement documentés
- [x] Aucune exigence ambiguë restante

---

## Étape Suivante

**Prêt pour l'Étape 2 : La Revue**

PRINTER transformera ce HLD en :
1. Schémas d'entités (aucun requis pour ce site statique)
2. Config de navigation (définitions de routes)
3. Mapping de fonctionnalités (quels packages @donotdev utiliser)

---

> Ci-dessous le contenu du fichier HLD.md généré :

# Site WAI-WAY

## Vision
Un site web de documentation bilingue qui enseigne aux développeurs comment créer des applications web en utilisant l'IA grâce à la méthode WAI-WAY, propulsée par le framework DoNotDev.

## Utilisateurs
| Rôle | Description | Permissions |
|------|-------------|-------------|
| Visiteur Public | Toute personne visitant le site | Lire toute la documentation, changer de langue, naviguer entre les pages |

## Entités
Aucune entité de base de données requise. Il s'agit d'un site de documentation statique avec contenu markdown.

## Fonctionnalités

### Affichage de la Documentation
| Fonctionnalité | Statut | Notes |
|----------------|--------|-------|
| Afficher les étapes de la méthode WAI-WAY | MVP | 4 étapes avec documentation détaillée |
| Rendu Markdown avec coloration syntaxique | MVP | Utilisation de MarkdownViewer de @donotdev/templates |
| Copier-coller pour les blocs de code | MVP | Inclus automatiquement dans MarkdownViewer |
| Composants Accordéon pour les sections de contenu | MVP | Prompt Maître, Description de l'étape, Sortie de l'étape |
| Sections FAQ/Dépannage | MVP | FAQs par étape basées sur la connaissance de la méthode |

### Navigation
| Fonctionnalité | Statut | Notes |
|----------------|--------|-------|
| Navigation latérale (preset docs) | MVP | Généré automatiquement par le framework DoNotDev |
| Roadmap interactive sur l'accueil | MVP | Étapes cliquables utilisant useNavigate |
| Icônes d'étape (lucide-react) | MVP | Brain, CheckList, Hammer, Brush |

### Internationalisation
| Fonctionnalité | Statut | Notes |
|----------------|--------|-------|
| Support bilingue (EN/FR) | MVP | i18n natif du framework |
| Sélecteur de langue | MVP | Inclus automatiquement par le framework |
| Contenu traduit | MVP | Tous les fichiers markdown dans les deux langues |

### Branding
| Fonctionnalité | Statut | Notes |
|----------------|--------|-------|
| Sections Hero par page | MVP | Titre + sous-titre |
| Liens d'appel à l'action | MVP | DoNotDev.com, ambroise-park.com |
| Pages légales | MVP | Générées automatiquement par le framework pour la France |

## Pages

| Route | Nom | But | Accès | Composants Clés |
|-------|-----|-----|-------|-----------------|
| / | HomePage | Page d'accueil avec roadmap | public | HeroSection, Roadmap, CallToAction |
| /step-1 | Step1Page | Documentation du Brainstorm | public | HeroSection, Accordion (Master Prompt), Accordion (Step.md), Accordion (Step Output), FAQSection |
| /step-2 | Step2Page | Documentation de la Revue | public | HeroSection, Accordion (Master Prompt), Accordion (Step.md), Accordion (Step Output), FAQSection |
| /step-3 | Step3Page | Documentation du Build | public | HeroSection, Accordion (Master Prompt), Accordion (Step.md), Accordion (Step Output), FAQSection |
| /step-4 | Step4Page | Documentation du Polish | public | HeroSection, Accordion (Master Prompt), Accordion (Step.md), Accordion (Step Output), FAQSection |
| /legal/* | LegalPages | Confidentialité, CGU, etc. | public | Généré par le framework |

## Contraintes

| Contrainte | Valeur | Notes |
|------------|--------|-------|
| Plateforme | Web (desktop + mobile) | Design réactif |
| Langues | EN, FR | i18n natif du framework |
| Framework | DoNotDev (Vite) | Configuration native |
| Preset | docs | Navigation latérale générée automatiquement |
| Auth | Aucun | Site entièrement public |
| Liens Externes | DoNotDev.com, ambroise-park.com | Cibles des appels à l'action |
