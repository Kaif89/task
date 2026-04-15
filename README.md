# 🛍️ ShopExplorer

> A responsive, component-based single-page application that fetches and displays products from the [Fake Store API](https://fakestoreapi.com/). Built with **React 19**, **Vite**, and **Vanilla CSS**.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Custom_Design_System-1572B6?logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-green)

---

## ✨ Features

| Feature | Description |
|---|---|
| **Product Grid** | Responsive grid layout — 1 column (mobile) → 2 (tablet) → 3 (laptop) → 4 (desktop) |
| **Search** | Real-time client-side filtering by title, category, and description |
| **Category Filters** | Pill-based filter bar to browse by product category |
| **Loading States** | Animated spinner + skeleton card placeholders while data loads |
| **Error Handling** | Friendly error message with retry button and network error detection |
| **Empty State** | Informative UI when search/filter yields no results |
| **Glassmorphism UI** | Dark theme with frosted-glass header, backdrop blur, and ambient gradients |
| **Micro-Animations** | Staggered card entrance, hover lifts, image zoom, and interactive buttons |
| **Fully Responsive** | Adapts gracefully across mobile, tablet, and desktop viewports |

---

## 🔧 Technology Stack

| Technology | Purpose |
|---|---|
| **React 19** | Component-based UI framework with Hooks (`useState`, `useEffect`, `useMemo`, `useCallback`) |
| **Vite 8** | Lightning-fast dev server and build tooling |
| **Vanilla CSS** | Custom design system with CSS Custom Properties (no framework dependencies) |
| **Lucide React** | Lightweight, tree-shakeable SVG icon library |
| **Fake Store API** | RESTful public API providing product data |
| **ES6+ JavaScript** | Modern JavaScript with async/await, destructuring, template literals |

---

## 🏗️ Architecture & Component Structure

```
src/
├── main.jsx                  # App entry point, React root render
├── App.jsx                   # Root component — state management, data fetching, filtering logic
├── index.css                 # Global design system (tokens, layout, animations)
└── components/
    ├── Header.jsx            # Sticky glassmorphic header with logo and search bar
    ├── CategoryFilter.jsx    # Horizontal scrollable category pill filter bar
    ├── ProductGrid.jsx       # Responsive CSS Grid container with empty state
    ├── ProductCard.jsx       # Individual product card with image, details, rating
    ├── Loader.jsx            # Spinner + skeleton card placeholder grid
    ├── ErrorMessage.jsx      # Error state with retry functionality
    └── Footer.jsx            # Site footer with branding and external links
```

### Key Architectural Decisions

1. **State Management**: All application state lives in `App.jsx` using React's built-in `useState` hook. This keeps the data flow unidirectional and predictable without introducing external state libraries for this scale of application.

2. **Memoized Filtering**: Product filtering uses `useMemo` to avoid recalculating on every render. The filter pipeline chains category selection → search query matching.

3. **Component Separation**: Each component has a single responsibility:
   - `App.jsx` — orchestrates data flow and state
   - Presentational components receive data via props with zero internal API knowledge
   - All styling lives in a single `index.css` design system file using CSS Custom Properties

4. **CSS Design System**: Instead of utility frameworks, we use a custom design token system (`--accent-primary`, `--surface-color`, etc.) delivering consistent theming that's easy to modify and fully self-contained.

5. **Error Resilience**: The `fetchProducts` function provides specific messages for network errors vs. server errors, and the retry button re-invokes the exact same fetch logic.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# Clone the repository
git clone <YOUR_REPO_URL>
cd shop-explorer

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

The optimized output will be in the `dist/` folder.

---

## 🌐 API Used

**[Fake Store API](https://fakestoreapi.com/)** — A free online REST API for e-commerce prototyping.

| Endpoint | Method | Description |
|---|---|---|
| `/products` | GET | Returns all products with title, price, description, category, image, and rating |

### Sample Response

```json
{
  "id": 1,
  "title": "Fjallraven Backpack",
  "price": 109.95,
  "description": "Your perfect pack for everyday use...",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": { "rate": 3.9, "count": 120 }
}
```

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

1. Connect your GitHub repository on [netlify.com](https://netlify.com)
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### GitHub Pages

```bash
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/shop-explorer",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then run:
```bash
npm run deploy
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Columns | Target |
|---|---|---|
| < 540px | 1 | Mobile |
| ≥ 540px | 2 | Large mobile / small tablet |
| ≥ 900px | 3 | Tablet / laptop |
| ≥ 1200px | 4 | Desktop |

---

## 🧪 Cross-Browser Compatibility

Tested and compatible with:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Microsoft Edge (latest)
- Safari (latest)

---

## 📄 License

This project is licensed under the ISC License.
