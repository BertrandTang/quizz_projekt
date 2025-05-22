# Quizz-O-matic – Documentation du projet

## 1. Structure du projet

Le projet est organisé autour de React avec Vite, en utilisant Bootstrap pour le style. L’architecture repose sur trois piliers principaux : **components**, **contexts** et **reducers**.

```
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── FilterQuizz.jsx
│   ├── QuizzAccordion.jsx
│   └── QuestionItem.jsx
├── contexts/
│   └── QuizzContext.jsx
├── reducers/
│   └── quizzReducer.js
└── assets/
    ├── data/
    │   ├── QuizzData.js
    │   └── QuizzFunData.js
    └── styles/
        └── app.scss
```

---

## 2. Components (Composants)

- **App.jsx** : Point d’entrée de l’UI, gère la sélection de catégorie et affiche le filtre ainsi que la liste des questions.
- **FilterQuizz.jsx** : Affiche un menu déroulant pour filtrer les questions par catégorie.
- **QuizzAccordion.jsx** : Affiche les questions sous forme d’accordéon, filtrées selon la catégorie choisie.
- **QuestionItem.jsx** : Affiche une question, ses boutons de validation (Vrai/Faux), et le badge de résultat.

---

## 3. Contexts

- **QuizzContext.jsx** : Fournit l’état global des questions et le dispatch pour modifier cet état à tous les composants enfants. Il encapsule le reducer et expose `stateQuizzData` et `dispatch` via le Context API.

---

## 4. Reducers

- **quizzReducer.js** : Fonction qui gère l’évolution de l’état des questions (validation, reset) selon les actions dispatchées.

---

## 5. Flux de données et relations

1. **main.jsx** : Monte l’application et englobe `<App />` dans `<QuizzProvider>`, rendant le contexte accessible à tous les composants.
2. **App.jsx** : 
   - Gère la catégorie sélectionnée (état local).
   - Passe la catégorie à `FilterQuizz` (pour affichage et sélection) et à `QuizzAccordion` (pour filtrer les questions).
3. **FilterQuizz.jsx** : 
   - Récupère les catégories uniques depuis le contexte.
   - Permet de changer la catégorie sélectionnée (remonte l’information à App).
4. **QuizzAccordion.jsx** : 
   - Récupère toutes les questions depuis le contexte.
   - Filtre les questions selon la catégorie.
   - Affiche chaque question via `QuestionItem`.
5. **QuestionItem.jsx** : 
   - Affiche la question, la réponse, les boutons Vrai/Faux et Réinitialiser.
   - Utilise `dispatch` du contexte pour valider ou réinitialiser la question.
6. **quizzReducer.js** : 
   - Met à jour l’état des questions selon les actions reçues (`validate`, `reset`).

---

## 6. Exemple de flux utilisateur

- Une catégorie est sélectionnée dans `FilterQuizz`.
- `App` met à jour la catégorie, ce qui filtre les questions dans `QuizzAccordion`.
- Une réponse est donnée à une question via `QuestionItem` : un bouton déclenche `dispatch({ type: "validate", id, value })`.
- Le reducer met à jour l’état, le contexte propage la nouvelle valeur, l’UI se met à jour automatiquement.

---

## 7. Avantages de cette architecture

- **Lisibilité** : Séparation claire entre UI, logique métier et gestion d’état.
- **Centralisation** : L’état des questions est partagé et modifiable partout via le contexte.
- **Extensibilité** : Facile d’ajouter d’autres types de questions, de nouveaux contextes ou reducers.

---

## 8. Conseils pour aller plus loin

- Ajouter un context pour la gestion du score ou des utilisateurs.
- Utiliser TypeScript pour plus de robustesse.
- Ajouter des tests unitaires sur les reducers et les composants.

---

## 9. Schéma des relations

```
[main.jsx]
   |
[QuizzProvider/Context]
   |
[App.jsx]
  |         \
[FilterQuizz] [QuizzAccordion]
                   |
             [QuestionItem]
```

---

## 10. Données

Les questions sont stockées dans `/src/assets/data/QuizzData.js` (ou `QuizzFunData.js`), importées dans le reducer pour initialiser l’état.

---

## 11. Styles

Les styles globaux sont dans `/src/assets/styles/app.scss` et Bootstrap est utilisé pour la mise en forme des composants.

---

**Résumé :**  
Ce projet React utilise le Context API et un reducer pour centraliser la gestion des questions de quiz, avec des composants spécialisés pour l’UI et la logique métier. Cette architecture favorise la clarté, la réutilisabilité et la maintenabilité.
