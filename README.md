# GemCommerce - Dog Food Product Landing Page

A modern, responsive landing page built with React and Vite showcasing premium dog food products with a focus on nutrition and gut health.



## What is React?

**React** is a JavaScript library for building user interfaces, developed and maintained by Meta (formerly Facebook). It allows developers to create reusable UI components and manage application state efficiently.

### Core Concepts Used in This Project:

1. **Component-Based Architecture**: UI is broken down into independent, reusable pieces (components)
2. **JSX (JavaScript XML)**: Syntax extension that allows writing HTML-like code in JavaScript
3. **Virtual DOM**: React creates a virtual representation of the DOM for efficient updates
4. **Declarative Programming**: Describe what the UI should look like, React handles the rendering
5. **Unidirectional Data Flow**: Data flows from parent to child components via props

---

## Why React?

This project uses React for several compelling reasons:

### 1. **Component Reusability**
- The components can be reused across different sections
- Each section (Hero, Nutrition, GutHealth) is a self-contained, reusable module
- Makes code more maintainable and DRY (Don't Repeat Yourself)

### 2. **Performance**
- React's Virtual DOM efficiently updates only the parts of the page that change
- Paired with Vite's fast build tool, provides instant Hot Module Replacement (HMR)
- Optimal loading and rendering performance for smooth user experience

### 3. **Declarative Syntax**
- Easy to understand what the UI will look like by reading the code
- JSX makes it intuitive to build complex UIs with familiar HTML-like syntax
- Example: `<Hero />` clearly represents the Hero section component

### 4. **Modern Development Experience**
- Strong ecosystem with excellent tooling (ESLint, Vite)
- Great developer experience with React DevTools
- Easy to debug and maintain

### 5. **Scalability**
- Component structure makes it easy to add new sections or features
- Can easily scale to a full e-commerce application
- Clear separation of concerns (structure, styling, logic)

---

## Project Structure

```
gemCommerce/
├── public/
│   └── images/              # Static image assets
├── src/
│   ├
│   ├── sections/            # Page section components
│   │   ├── Hero/
│   │   │   ├── Hero.jsx     # Hero section component
│   │   │   └── Hero.css     # Hero section styles
│   │   ├── Nutrition/
│   │   │   ├── Nutrition.jsx
│   │   │   └── Nutrition.css
│   │   └── GutHealth/
│   │       ├── GutHealth.jsx
│   │       └── GutHealth.css
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── package.json             # Project dependencies
```

---

## Components Overview

### 1. **App.jsx** - Main Application Component

The root component that orchestrates all sections of the landing page.

```jsx
export default function App() {
  return (
    <main className="app-shell">
      <section className="feature-card-shell">
        <Hero />
        <Nutrition /> 
        <GutHealth />
      </section>
    </main>
  )
}
```

**Purpose**: 
- Serves as the application entry point after React initialization
- Composes all major sections into a cohesive page layout
- Provides semantic HTML structure with `<main>` and `<section>` tags

---

### 2. **Hero.jsx** - Hero Section Component

The top section showcasing the main value proposition with a circular food bowl image, feature callouts, and call-to-action button.

**Key Features**:
- **Feature Cards**: Displays 4 key benefits (Real Food, Premium Ingredient, Made Fresh, Vet Developed)
- **Icon System**: Each feature has a unique emoji icon and color-coded background
- **Central Visual**: Eye-catching circular image of mixed dog food
- **CTA Button**: Primary action button to drive conversions
- **Trust Indicators**: Payment methods and money-back guarantee
- **Brand Mark**: Purple gradient badge in top-right corner

**Data Structure**:
```jsx
const heroFeatures = [
  {
    title: 'Real Food',
    description: 'Wholesome recipes for dogs with real meat and veggies.',
    tone: 'mint',        // Background color theme
    icon: '🥩',          // Emoji icon
  },
  // ... more features
]
```

**Layout Pattern**: 
- 3-column grid: Left features → Central visual → Right features
- Responsive: Collapses to single column on mobile
- Symmetric design for visual balance

---

### 3. **Nutrition.jsx** - Nutrition Metrics Section

Showcases evidence-based nutrition statistics with visual progress bars.

**Key Features**:
- **Statistic Display**: Three key metrics (97%, 84%, 92%)
- **Progress Bars**: Visual representation of each metric's value
- **Supporting Text**: Explains what each statistic represents
- **Side Image**: Dog photo for emotional connection
- **CTA Button**: Drives users to learn more

**Data Structure**:
```jsx
const nutritionMetrics = [
  {
    value: '97%',
    description: 'Dogs on our food had lower stool volume...',
    barWidth: '97%',    // Controls progress bar fill
  },
  // ... more metrics
]
```

**Design Pattern**:
- 2-column layout: Text/metrics left, image right
- Dynamic data rendering with `.map()`
- Each metric is independently styled with custom `barWidth`

---

### 4. **GutHealth.jsx** - Gut Health Benefits Section

Features two alternating image-text layouts explaining digestive health benefits.

**Key Features**:
- **Dual Subsections**: Two distinct benefit explanations
- **Alternating Layout**: First section has image left, second has image right
- **Visual Variety**: Uses GIF animation and static image
- **Accessible Content**: Semantic HTML with proper alt text

**Layout Pattern**:
```jsx
// First feature: Image on left
<article className="guthealth-feature">
  <div className="guthealth-visual">...</div>
  <div className="guthealth-copy">...</div>
</article>

// Second feature: Image on right (reversed)
<article className="guthealth-feature guthealth-feature-reverse">
  <div className="guthealth-copy">...</div>
  <div className="guthealth-visual">...</div>
</article>
```

**Design Pattern**:
- Grid-based layout with `grid-template-columns` for precise control
- `.guthealth-feature-reverse` class swaps column order
- Maintains visual rhythm through alternation

---

### 5. **Button Component** (Placeholder)

Reusable button component for consistent interactive elements across the application.

**Purpose**:
- Centralize button styling and behavior
- Ensure consistent user interaction patterns
- Easy to modify button styles globally

---

### 6. **FeatureItem Component** (Placeholder)

Reusable component for displaying individual feature callouts.

**Purpose**:
- Standardize feature presentation
- Reduce code duplication
- Maintain consistent visual language

---

## Code Patterns & Architecture

### 1. **Component-Scoped Styling**

Each component has its own CSS file imported at the top:

```jsx
import './Hero.css'  // Component-specific styles
```

**Benefits**:
- Clear ownership of styles
- Easy to locate and modify component styles
- Prevents style conflicts across components
- Organized file structure

---

### 2. **Data-Driven Rendering**

Instead of hardcoding repeated elements, data is stored in arrays and rendered dynamically:

```jsx
const heroFeatures = [/* data */]

// Render dynamically
{heroFeatures.map((feature) => (
  <article key={feature.title}>
    <h2>{feature.title}</h2>
    <p>{feature.description}</p>
  </article>
))}
```

**Benefits**:
- Easy to add/remove/modify items
- Consistent rendering logic
- Reduces code duplication
- Single source of truth for data

---

### 3. **Semantic HTML**

Uses proper HTML5 semantic elements:

```jsx
<section>   // Page sections
<article>   // Self-contained content
<main>      // Main content area
<header>    // Section headers
```

**Benefits**:
- Better accessibility for screen readers
- Improved SEO
- Clearer code structure
- Enhanced maintainability

---

### 4. **Responsive Design**

CSS uses modern responsive techniques:

```css
.hero-grid {
  grid-template-columns: 1fr minmax(420px, 500px) 1fr;
  gap: 64px;
}

@media (max-width: 960px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
```

**Benefits**:
- Mobile-first approach
- Fluid layouts with `minmax()` and `clamp()`
- Breakpoint-based adaptations
- Optimal viewing on all devices

---

### 5. **Modular Architecture**

Project follows separation of concerns:
- **Structure** (JSX): Component markup and logic
- **Styling** (CSS): Visual presentation
- **Data** (Constants): Content and configuration

**Benefits**:
- Each file has a single responsibility
- Easy to locate and modify specific aspects
- Team members can work on different parts simultaneously
- Facilitates testing and debugging

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Gloryozo/gemCommerce.git
cd gemCommerce
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

---

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

### Build Tool: Vite

This project uses **Vite** as the build tool, which offers:
-  **Lightning-fast** Hot Module Replacement (HMR)
- **Optimized builds** with automatic code splitting
-  **Zero-config** setup with sensible defaults
-  **Modern** ES modules support



---

## Technology Stack

- **React 19.2.7** - UI library
- **Vite 6.4.3** - Build tool and dev server
- **ESLint 10.6.0** - Code quality and consistency
- **CSS3** - Styling with modern features (Grid, Flexbox, Custom Properties)

---

## Design Philosophy

This project demonstrates several best practices:

1. **Component Composition**: Building complex UIs from simple, reusable pieces
2. **Separation of Concerns**: Structure, style, and data are clearly separated
3. **Accessibility First**: Semantic HTML and ARIA labels for screen readers
4. **Performance Optimized**: Efficient rendering with React + Vite
5. **Maintainable Code**: Clear naming, consistent patterns, organized structure
6. **Responsive Design**: Mobile-first approach with fluid layouts
7. **Visual Hierarchy**: Strategic use of spacing, typography, and color

---

---


