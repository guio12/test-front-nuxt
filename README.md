# Test technique - Frontend

## Temps passé : entre 15 et 20 heures

## Choix techniques

- **Framework**: Nuxt
- **Langage**: TypeScript
- **CSS**: Bootstrap 5 / SCSS
- **Icons**: Bootstrap Icons
- **Store**: Pinia
- **Linting**: ESLint
- **Drag and Drop**: Formkit drag-and-drop
- **Animations**: Formkit auto-animate
- **Police de caractères**: Nuxt Fonts (Poppins)

J'ai choisi Nuxt puisque j'ai encore récemment travaillé avec. Typescript même si cela demande un peu plus de temps pour la configuration, cela m'a permis d'éviter certaines erreurs. J'ai choisi Pinia pour le store car il est mieux intégré à Nuxt que Vuex.
L'intégration de Bootstrap et SCSS dans Nuxt m'a posé quelques problèmes, mais j'ai finalement réussi à les intégrer. Après m'être cassé les dents sur vue-draggable-next, j'ai finalement opté pour @formkit/drag-and-drop qui est plus simple à utiliser, et plus à jour. J'ai également utilisé @formkit/auto-animate pour les animations.

Au niveau du design, j'ai voulu donner un aspect "jeu" à l'application, avec des couleurs vives et des animations. J'ai également utilisé une police de caractères plus "fun" que la police par défaut.

## Setup

Installer les dépendances:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Lancer le serveur de dev sur `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build l'application en mode production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Preview l'application en mode production:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```
