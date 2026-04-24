import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'

function App() {
  return (
    <main className="relative bg-gray-950 text-white min-h-screen">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-950/40 via-gray-950 to-gray-950" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #6d28d9 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Contenido encima del fondo */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}

export default App