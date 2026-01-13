# Shwe Shop Product Dashboard

React + Vite frontend for the Shwe Shop product listing and create/edit flow.

## Features
- Product listing with search, sorting, pagination, and filtering.
- Create, edit, and delete products with confirmation.
- Image upload preview for products.
- Print support for product list and create modal.
- Custom dropdowns and responsive modals.
- Toast notifications via Notistack.

## Tech Stack
- React
- Vite
- Tailwind CSS
- Notistack

## Getting Started
Install dependencies:
```
npm install
```

Run the dev server:
```
npm run dev
```

Build for production:
```
npm run build
```

Preview the production build:
```
npm run preview
```

## Project Structure
- `src/App.jsx`: main page layout and state wiring
- `src/components`: UI components (header, table, modals, icons, custom select)
- `src/hooks`: custom hooks (products, filters, pagination)
- `src/data/appData.js`: seed data and menu lists
- `src/utils/formatters.js`: shared utilities
- `src/assets`: logos and images

## Notes
- Fonts are loaded in `src/index.css`.
- Print styles are also defined in `src/index.css`.
