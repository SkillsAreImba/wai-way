# WAI-WAY Étape 1 : Le Brainstorm

## Vue d'ensemble

**But** : Extraire un HLD (High-Level Design / Conception de Haut Niveau) complet de l'utilisateur via une conversation adaptative.
**RACI** : Humain=Responsable (Accountable), IA=Exécutant (Responsible)
**Persona** : EXTRACTOR — Ingénieur Senior en Exigences

---

## Ce qui se passe

Vous avez une idée d'application. EXTRACTOR l'extrait de votre tête grâce à des questions ciblées—pas une checklist rigide, mais une conversation adaptative qui creuse plus profondément à chaque réponse.

**EXTRACTOR demande. Vous répondez. EXTRACTOR génère le HLD.**

### Pourquoi une Conversation, pas des Formulaires ?

- Vous ne savez pas ce que vous ne savez pas
- Les bonnes exigences viennent du questionnement, pas des checklists
- L'IA peut repérer des lacunes que vous manqueriez en remplissant un formulaire

### Persona IA : EXTRACTOR

**Rôle :** Ingénieur Senior en Exigences
**État d'esprit :** "Extraire ce qui est dans leur tête. Combler chaque lacune. Challenger chaque hypothèse."

**Comportements :**

- **Curieux :** Creuse plus profondément à chaque réponse
- **Sceptique :** Challenge les déclarations vagues
- **Organisé :** Suit ce qui est appris et ce qui manque
- **Honnête :** Demande clarification quand incertain plutôt que de deviner

**EXTRACTOR se concentre sur :**

- Sonder jusqu'à ce que les réponses soient spécifiques et complètes
- Extraire les exigences par la conversation, pas générer du code
- Capturer ce que l'utilisateur veut, pas ajouter ses propres idées
- Adapter les questions basées sur leurs réponses, pas suivre une checklist rigide

---

## Exigences d'Entrée

- Une idée d'application (n'importe quel niveau de clarté)
- Accès à une IA (Claude, ChatGPT, Gemini, etc.)
- Temps pour la conversation (typiquement 10-20 minutes)

## Livrable de Sortie

- **`HLD.md`** — Document complet de Conception de Haut Niveau contenant :
  - Vision (une phrase)
  - Utilisateurs (rôles et permissions)
  - Entités (modèles de données avec champs)
  - Fonctionnalités (MVP vs V2)
  - Pages (routes et niveaux d'accès)
  - Contraintes (plateforme, langues, intégrations)

---

## Ce que EXTRACTOR Extrait

| Catégorie | Ce que EXTRACTOR Demande |
|-----------|-------------------------|
| **Vision** | Qu'est-ce que cette app ? Qui l'utilise ? |
| **Utilisateurs** | Quels rôles existent ? Que peut faire chaque rôle ? |
| **Entités** | Quelles "choses" existent ? Quels champs ? Comment sont-elles liées ? |
| **Fonctionnalités** | Que peuvent FAIRE les utilisateurs ? MVP ou V2 ? |
| **Pages** | Quels écrans ? Quelles routes ? Qui peut y accéder ? |
| **Contraintes** | Mobile ? Langues ? Fournisseurs d'auth ? Intégrations ? |

---

## Critères de Succès

- [ ] La vision est une phrase claire
- [ ] Tous les rôles utilisateurs définis avec permissions
- [ ] Chaque entité a des champs avec types
- [ ] Chaque champ de référence pointe vers une entité existante
- [ ] Chaque champ select a ses options listées
- [ ] Toutes les fonctionnalités taguées MVP ou V2
- [ ] Toutes les pages ont des routes et niveaux d'accès
- [ ] Plateforme, langues, auth, intégrations documentées
- [ ] Aucune exigence ambiguë restante

---

## To-do List Humaine

### Pendant le Brainstorm

- [ ] **Répondre honnêtement** — Dites ce qui est dans votre tête sans trop réfléchir
- [ ] **Dire "Je ne sais pas"** — EXTRACTOR le marquera comme question ouverte
- [ ] **Challenger en retour** — Si EXTRACTOR comprend mal, corrigez-le
- [ ] **Focus sur le MVP** — Quand le périmètre grandit, demandez "Quel est le minimum pour lancer ?"

### Après le Brainstorm

- [ ] **Revoir le HLD** — Lire le document complet (~5 min)
- [ ] **Vérifier les entités** — Tous les champs sont-ils là ? Types corrects ?
- [ ] **Vérifier les fonctionnalités** — MVP vs V2 corrects ?
- [ ] **Sauvegarder en HLD.md** — Pour l'Étape 2

---

## Portes de Qualité

### Critères de Sortie

Avant de passer à l'Étape 2 (Revue), assurez-vous :

- [ ] **Vision compléte** : Peut énoncer le but de l'app en une phrase
- [ ] **Entités complètes** : Toutes les entités ont des champs avec types
- [ ] **Relations définies** : Tous les champs de référence pointent vers des entités valides
- [ ] **Fonctionnalités périmétrées** : MVP vs V2 clairement distingués
- [ ] **Pages mappées** : Toutes les routes documentées
- [ ] **Contraintes capturées** : Plateforme, i18n, intégrations notées

### Pièges Communs

| Piège | Comment l'Éviter |
|-------|------------------|
| Entités vagues | EXTRACTOR sondera : "Quels champs a X ?" |
| Relations manquantes | EXTRACTOR demandera : "Comment X est lié à Y ?" |
| Dérive du périmètre | EXTRACTOR challengeotera : "Est-ce MVP ou V2 ?" |
| Fonctionnalités supposées | EXTRACTOR vous fait le dire explicitement |
| Pages orphelines | EXTRACTOR vérifie le flux de navigation |

---

## Transition Étape Suivante

### Passage à l'Étape 2 (Revue)

- **Entrée** : `HLD.md`
- **Contexte IA** : PRINTER transforme le HLD en schémas d'entités, routes, mapping de fonctionnalités
- **Préparation Humaine** : Revoir le HLD une dernière fois avant la transformation technique
