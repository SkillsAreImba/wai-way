# WAI-WAY Étape 2 : La Revue

## Vue d'ensemble

**But** : Transformer le HLD en artefacts techniques conformes au framework pour approbation humaine.
**RACI** : Humain=Responsable (Accountable), IA=Exécutant (Responsible)
**Persona** : PRINTER — Architecte Framework

---

## Ce qui se passe

PRINTER prend votre HLD et le transforme en spécifications techniques exactes :

1. **Schémas d'Entités** — Code `defineEntity()` pour chaque entité
2. **Config de Navigation** — Définitions de routes avec niveaux d'accès
3. **Mapping de Fonctionnalités** — Quels packages framework implémentent chaque fonctionnalité

**Vous revoyez. Vous approuvez. Puis l'Étape 3 construit.**

### Pourquoi Revoir Avant de Construire ?

- Attraper les malentendus avant que le code soit écrit
- S'assurer que tout correspond aux conventions DoNotDev
- L'approbation humaine empêche du refactoring coûteux

### Persona IA : PRINTER

**Rôle :** Architecte Framework DoNotDev
**État d'esprit :** "Est-ce que cela colle au framework ? Générer du code exact, pas des descriptions."

**Comportements :**

- **Précis :** Génère du code TypeScript exact
- **Natif Framework :** Connaît DoNotDev sur le bout des doigts
- **Vigilant :** Repère les incohérences et les signale
- **Minimal :** Inclut seulement ce qui est dans le HLD

**PRINTER se concentre sur :**

- Générer des schémas et du code de configuration, pas implémenter les fonctionnalités de l'app
- Inclure uniquement les fonctionnalités spécifiées dans le HLD
- Signaler chaque problème trouvé pour revue humaine
- Laisser le code parler de lui-même, garder les explications concises

---

## Exigences d'Entrée

- `HLD.md` approuvé de l'Étape 1

## Livrables de Sortie

| Artefact | Description |
|----------|-------------|
| **Schémas d'Entités** | Code `defineEntity()` pour chaque entité |
| **Config de Navigation** | Définitions de routes avec niveaux d'accès |
| **Mapping de Fonctionnalités** | Quels packages `@donotdev/*` gèrent quoi |
| **Problèmes de Validation** | Tout problème trouvé dans le HLD |

---

## Ce que PRINTER Génère

### 1. Schémas d'Entités

```typescript
import { defineEntity } from '@donotdev/core';

export const projectEntity = defineEntity({
  name: 'Project',
  collection: 'projects',
  fields: {
    id: { type: 'text', visibility: 'technical', hidden: true },
    name: { type: 'text', visibility: 'user', validation: { required: true } },
    owner: { type: 'reference', visibility: 'user', ref: 'users' },
    createdAt: { type: 'timestamp', visibility: 'technical', hidden: true }
  }
});
```

### 2. Config de Navigation

```typescript
export const routes = [
  { path: '/', name: 'Landing', access: 'public', layout: 'marketing' },
  { path: '/dashboard', name: 'Dashboard', access: 'protected', layout: 'app' }
];
```

### 3. Mapping de Fonctionnalités

| Fonctionnalité | Package | Implémentation |
|----------------|---------|----------------|
| Email auth | @donotdev/features/auth | AuthForm |
| CRUD projects | @donotdev/features/crud | useCrud('projects') |

---

## Critères de Succès

- [ ] Toutes les entités HLD ont des schémas avec code
- [ ] Chaque schéma a les champs id et createdAt
- [ ] Chaque référence pointe vers une collection existante
- [ ] Chaque select a un tableau d'options
- [ ] Toutes les pages HLD ont des routes
- [ ] Toutes les fonctionnalités HLD mappées aux packages
- [ ] Les noms de collection sont pluriel minuscule
- [ ] L'humain approuve tous les artefacts

---

## To-do List Humaine

### Revoir les Artefacts

- [ ] **Vérifier les schémas d'entités** — Champs correspondent au HLD ? Types corrects ?
- [ ] **Vérifier la navigation** — Routes correspondent aux pages HLD ? Niveaux d'accès justes ?
- [ ] **Vérifier le mapping fonctionnalités** — Implémentation logique ?
- [ ] **Vérifier les problèmes de validation** — Adresser tout problème signalé

### Approuver ou Itérer

- [ ] **Demander des changements** si quelque chose ne va pas
- [ ] **Approuver** quand les artefacts sont corrects
- [ ] **Sauvegarder** les artefacts approuvés pour l'Étape 3

---

## Portes de Qualité

### Critères de Sortie

Avant de passer à l'Étape 3 (Build), assurez-vous :

- [ ] **Tous les schémas valides** : Chaque entité compile
- [ ] **Tous les types valides** : Pas de types de champs inconnus
- [ ] **Toutes les relations valides** : Références pointent vers entités réelles
- [ ] **Navigation complète** : Chaque page HLD a une route
- [ ] **Fonctionnalités mappées** : Chemin d'implémentation clair
- [ ] **Humain approuvé** : Sign-off explicite

### Pièges Communs

| Piège | Comment PRINTER Gère |
|-------|----------------------|
| Type de champ invalide | Mappe au valide le plus proche, signale problème |
| Collection manquante | Signale comme problème de validation |
| Entité orpheline | Note qu'aucune page ne la référence |
| Fonctionnalité non mappée | Marque comme "custom requis" |

---

## Transition Étape Suivante

### Passage à l'Étape 3 (Build)

- **Entrée** : Schémas d'entités approuvés + navigation + mapping fonctionnalités
- **Contexte IA** : FORGER implémente l'app phase par phase
- **Préparation Humaine** : Configurer l'environnement de dev, préparer à tester chaque phase
