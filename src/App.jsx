import Hero from './sections/Hero/Hero.jsx'
import Nutrition from './sections/Nutrition/Nutrition.jsx'
import GutHealth from './sections/GutHealth/GutHealth.jsx'

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