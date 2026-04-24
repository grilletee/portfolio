import { useEffect, useState } from "react"
import { Github, Mail, Linkedin } from "lucide-react"

const roles = [
  "Full Stack Developer",
  "Backend Engineer",
  "IoT & Hardware Builder",
  "Python Automation Dev",
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const current = roles[roleIndex]

    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      return () => clearTimeout(t)
    }

    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000)
      return () => clearTimeout(t)
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      return () => clearTimeout(t)
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }
  }, [displayed, deleting, roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16 overflow-hidden"
    >
      <div
        className={`relative z-10 w-full transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          Disponible para trabajar
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Guillermo{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
            Sánchez
          </span>
        </h1>

        <div className="h-10 flex items-center justify-center mb-6">
          <p className="text-xl md:text-2xl text-gray-400 font-mono">
            {displayed}
            <span className="animate-pulse text-violet-400">|</span>
          </p>
        </div>

        <p className="max-w-xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed mb-10">
          Construyo aplicaciones que van del sensor al servidor y del servidor a
          la pantalla. Del hardware con Arduino hasta agentes de IA.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-700 hover:border-violet-500 hover:text-violet-400 text-gray-300 font-medium rounded-lg transition-colors duration-200"
          >
            Contacto
          </a>
        </div>

        <div className="flex gap-5 justify-center text-gray-500">
          <a
            href="https://github.com/grilletee"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition-colors"
          >
            <Github size={22} />
          </a>
          <a
            href="mailto:grillete07@gmail.com"
            className="hover:text-violet-400 transition-colors"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/guillermo-sanchez-gutierrez/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition-colors"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>
    </section>
  )
}