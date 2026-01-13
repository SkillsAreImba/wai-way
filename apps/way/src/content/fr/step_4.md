# WAI-WAY Étape 4 : Le Polish

## Vue d'ensemble

**But** : Tester, corriger les bugs, et livrer.
**RACI** : Humain=Responsable, IA=Consulté
**Persona** : FINISHER — Ingénieur QA & Bug Fixer

---

## Ce qui se passe

Vous testez l'app. Vous trouvez des bugs. FINISHER les corrige avec des changements minimaux.

**Vous testez. Vous rapportez. FINISHER corrige. Vous livrez.**

### Pourquoi l'Humain Mène cette Étape ?

- Vous connaissez vos utilisateurs
- Vous connaissez les cas limites qui comptent
- Vous décidez quand "assez bon" est assez bon
- L'IA assiste, ne décide pas

### Persona IA : FINISHER

**Rôle :** Ingénieur QA & Bug Fixer
**État d'esprit :** "Diagnostiquer pourquoi, corriger minimalement, vérifier le fonctionnement."

**Comportements :**

- **Diagnostique :** Comprend le POURQUOI avant de corriger
- **Minimal :** Change seulement ce qui est nécessaire
- **Minutieux :** Vérifie les régressions
- **Honnête :** Demande plus d'information quand les rapports de bug sont flous

**FINISHER se concentre sur :**

- Corriger les bugs uniquement, garder le code fonctionnel tel quel
- Corriger les bugs uniquement, éviter les ajouts de fonctionnalités
- Vérifier les corrections fonctionnent avant de les déclarer complètes
- Demander clarification quand les rapports de bug sont flous

---

## Exigences d'Entrée

- App fonctionnelle de l'Étape 3
- Vos tests et rapports de bugs

## Livrables de Sortie

- **Bugs corrigés** — Tous les problèmes rapportés résolus
- **App prête à livrer** — Déployée et accessible
- **Vérification de prêt-à-livrer** — Vérification que tout le MVP fonctionne

---

## Checklist de Test

### Test Fonctionnel

Pour chaque fonctionnalité :
- [ ] Chemin heureux fonctionne
- [ ] Cas limites gérés
- [ ] États d'erreur fonctionnent

### Test Auth

- [ ] Peut s'enregistrer
- [ ] Peut se connecter
- [ ] Peut se déconnecter
- [ ] Routes protégées redirigent
- [ ] Identifiants invalides montrent erreur

### Test CRUD (par entité)

- [ ] Création fonctionne
- [ ] Lecture fonctionne
- [ ] Mise à jour fonctionne
- [ ] Suppression fonctionne
- [ ] État vide montre message

### Test Navigation

- [ ] Tous les liens fonctionnent
- [ ] Bouton retour fonctionne
- [ ] Liens profonds fonctionnent
- [ ] Page 404 s'affiche pour routes invalides

### Test Mobile (si applicable)

- [ ] Layout réactif
- [ ] Cibles tactiles adéquates
- [ ] Formulaires utilisables

---

## Format Rapport de Bug

```
**Bug :** [Description une ligne]

**Étapes pour reproduire :**
1. [Étape]
2. [Étape]
3. [Étape]

**Attendu :** [Ce qui devrait arriver]
**Réel :** [Ce qui arrive réellement]

**Erreur (si présente) :**
[Erreur console ou message d'erreur]

**Contexte :**
- Page : [URL]
- Utilisateur : [connecté/déconnecté, rôle]
```

---

## Prêt à Livrer

### Prêt à Livrer Quand

- [ ] Pas de bugs critiques (plantages, perte de données, sécurité)
- [ ] Toutes fonctionnalités MVP fonctionnent
- [ ] Auth est sécurisée
- [ ] Performance acceptable (<3s chargement)
- [ ] Mobile fonctionne (si dans spec)

### Acceptable à Livrer Avec

- Bugs UI mineurs
- Fonctionnalités V2 non faites
- Cas limites non gérés (documentés)

### PAS Acceptable

- Plantages sur chemins communs
- Perte ou corruption de données
- Contournement auth possible
- Fonctionnalités centrales cassées

---

## To-do List Humaine

### Testing

- [ ] **Parcourir toutes fonctionnalités** — Utiliser checklist ci-dessus
- [ ] **Documenter bugs** — Utiliser format rapport de bug
- [ ] **Prioriser** — Critique vs sympa-à-fixer

### Bug Fixing

- [ ] **Rapporter à FINISHER** — Un ou lot
- [ ] **Appliquer corrections** — Vérifier le diff
- [ ] **Vérifier corrections** — Tester à nouveau

### Shipping

- [ ] **Vérification finale** — Tout le MVP fonctionne
- [ ] **Déployer** — En production
- [ ] **Tester production** — Mêmes tests
- [ ] **Livrer** — Partager avec utilisateurs

---

## Après la Livraison

### Pour Nouvelles Fonctionnalités

→ Retourner à **Étape 1** (Brainstorm)
→ Ajouter au HLD, passer tout le flux

### Pour Petites Corrections

→ Rester en **Étape 4**
→ Rapporter bug, obtenir correction, appliquer

### Pour Changements Majeurs

→ Retourner à **Étape 2** (Revue)
→ Mettre à jour schémas/routes si nécessaire

---

## Pièges Communs

| Piège | Comment Éviter |
|-------|----------------|
| FINISHER refactore | Dites : "Correction minimale seulement. Garde code fonctionnel inchangé." |
| FINISHER ajoute fonctionnalités | Dites : "Enlève [fonctionnalité]. Fixe seulement le bug." |
| Correction ne marche pas | Dites : "Toujours cassé : [détails]" |
| Multiples bugs liés | Dites : "Trouve la cause racine." |

---

## La Boucle

WAI-WAY est itératif :

```
Étape 1 → Étape 2 → Étape 3 → Étape 4 → Livrer
                                         ↓
                                 Feedback Utilisateur
                                         ↓
                        Nouvelle fonction ? → Étape 1
                        Correction bug ? → Étape 4
                        Changement schéma ? → Étape 2
```
