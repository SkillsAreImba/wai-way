# WAI-WAY Étape 3 : Le Build

## Vue d'ensemble

**But** : Implémenter l'app selon les spécifications validées.
**RACI** : Humain=Responsable (Accountable), IA=Exécutant (Responsible)
**Persona** : FORGER — Développeur Senior DoNotDev

---

## Ce qui se passe

FORGER prend vos artefacts approuvés et construit l'app phase par phase :

1. **Entités** → Créer tous les fichiers defineEntity
2. **Routes** → Configurer la navigation
3. **Auth** → Configurer l'authentification (si nécessaire)
4. **Pages** → Créer les composants de page
5. **Fonctionnalités** → Câbler la logique
6. **Polish** → États de chargement, gestion d'erreurs

**Vous vérifiez chaque phase. FORGER procède quand vous dites "continuer" ou "continue".**

### Pourquoi Phase par Phase ?

- Capturer les erreurs tôt (avant d'avoir 50 fichiers)
- Plus facile de vérifier des petits morceaux
- L'humain reste au contrôle

### Persona IA : FORGER

**Rôle :** Développeur Senior DoNotDev
**État d'esprit :** "Construire exactement ce qui est spécifié. Framework d'abord. Pas d'extras."

**Comportements :**

- **Précis :** Construit exactement ce qui est dans les specs
- **Framework-D'abord :** Vérifie les composants existants avant d'en écrire de nouveaux
- **Incrémental :** Phase par phase, pas tout d'un coup
- **Auto-Correcteur :** Repère et corrige ses propres erreurs

**FORGER se concentre sur :**

- Construire seulement les fonctionnalités spécifiées dans les specs
- Écrire du code qui marche, garder les explications minimales
- Livrer des solutions suffisantes qui répondent aux exigences
- Tester chaque phase avant de passer à la suivante

---

## Exigences d'Entrée

- Schémas d'entités approuvés de l'Étape 2
- Config de navigation approuvée de l'Étape 2
- Mapping de fonctionnalités approuvé de l'Étape 2

## Livrables de Sortie

- **Code fonctionnel** commité dans le dépôt
- **Fichiers d'entités** dans le répertoire `entities/`
- **Composants de page** dans `src/pages/` ou `src/app/`
- **Configuration de route** mise à jour
- **Toutes fonctionnalités MVP fonctionnelles**

---

## Phases d'Implémentation

| Phase | Ce que FORGER Fait | Point de Contrôle |
|-------|--------------------|-------------------|
| **1. Entités** | Crée fichiers defineEntity + index | Fichiers existent, pas d'erreurs TS |
| **2. Routes** | Crée configuration de route | TypeScript valide |
| **3. Auth** | Configure fournisseurs, pages auth | Peut se connecter/déconnecter |
| **4. Pages** | Crée tous les composants de page | Toutes pages s'affichent |
| **5. Fonctionnalités** | Câble CRUD, fonctions custom | Toutes fonctions marchent |
| **6. Polish** | États chargement, erreurs, 404 | App complète |

---

## Critères de Succès

- [ ] Toutes entités implémentées comme spécifié
- [ ] Toutes pages créées avec composants spécifiés
- [ ] Toutes fonctionnalités MVP fonctionnelles
- [ ] Code suit conventions framework
- [ ] Pas d'erreurs TypeScript
- [ ] App tourne sans plantage
- [ ] États de chargement présents
- [ ] Gestion d'erreurs présente

---

## To-do List Humaine

### Pendant le Build

- [ ] **Vérifier chaque phase** — Fichiers créés correctement ?
- [ ] **Lancer vérification TypeScript** — `npx tsc --noEmit`
- [ ] **Tester fonctionnalité** — Essayer l'app au fur et à mesure
- [ ] **Dire "continuer"** — Quand le point de contrôle passe

### Après le Build

- [ ] **Test complet** — Tester toutes fonctionnalités MVP
- [ ] **Documenter bugs** — Pour l'Étape 4
- [ ] **Approuver** — Prêt pour le Polish

---

## Portes de Qualité

### Points de Contrôle de Phase

**Après Phase 1 (Entités)**
```bash
ls entities/        # Tous fichiers existent
npx tsc --noEmit    # Pas d'erreurs TypeScript
```

**Après Phase 3 (Auth)**
- [ ] Peut enregistrer nouvel utilisateur
- [ ] Peut se connecter
- [ ] Peut se déconnecter
- [ ] Routes protégées redirigent

**Après Phase 4 (Pages)**
- [ ] Toutes pages s'affichent sans erreurs
- [ ] Navigation marche entre les pages

**Après Phase 5 (Fonctionnalités)**
- [ ] Opérations CRUD fonctionnent
- [ ] Fonctionnalités custom fonctionnent
- [ ] Données persistent correctement

**Après Phase 6 (Polish)**
- [ ] Spinners de chargement s'affichent
- [ ] Erreurs s'affichent gracieusement
- [ ] Page 404 fonctionne

---

## Pièges Communs

### FORGER ajoute fonctionnalités
- **Solution** : Dites : "Enlève [fonctionnalité]. Construis seulement ce qui est dans la spec."

### FORGER saute des phases
- **Solution** : Dites : "Complète Phase N d'abord."

### Mauvais imports
- **Solution** : Dites : "Utilise @donotdev/[package]"

### Erreurs Type
- **Solution** : Dites : "Fixe erreur : [message]"

### Contexte perdu
- **Solution** : Dites : "Nous avons complété 1-N. Continue depuis Phase N+1."

---

## Transition Étape Suivante

### Passage à l'Étape 4 (Polish)

- **Entrée** : App fonctionnelle avec toutes fonctionnalités MVP
- **Contexte IA** : FINISHER corrige les bugs que vous rapportez du testing
- **Préparation Humaine** : Tester minutieusement, documenter bugs
