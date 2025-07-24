# ⚡ Pokémon Explorer

A simple web application that allows you to explore Pokémon using the [PokeAPI](https://pokeapi.co/). The app supports two browsing modes:

- 📄 **Pagination View** – Navigate through pages
- 🔁 **Infinite Scroll View** – Load more as you scroll

## ✨ Features

- 🔍 Browse Pokémon using either pagination or infinite scrolling
- 🌀 Lazy loading for views
- 💥 Graceful error handling with Error Boundaries
- ❌ Display message when no Pokémon are found
- 🔝 "Scroll to Top" button for better UX

## 🛠️ Tech Stack

- **React + TypeScript**
- **React Query (TanStack Query)**
- **Material UI (MUI)**
- **React Router**
- **PokeAPI**
- **Intersection Observer API** for infinite scroll

## 📜 Scripts

| Command         | Description                          |
|----------------|--------------------------------------|
| `npm run dev`  | Start the Vite development server     |
| `npm run build`| Type-check and build the project      |
| `npm run lint` | Run ESLint for code quality checks    |
| `npm run preview` | Preview the production build       |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development
npm run dev
