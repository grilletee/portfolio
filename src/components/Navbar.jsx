import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Contacto", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Detecta sección activa con IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(9,9,18,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-bold text-white tracking-tight hover:text-violet-400 transition-colors font-mono"
        >
          <span className="text-gray-500">&lt;</span>grillete<span className="text-violet-400">.</span>dev<span className="text-gray-500"> /&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm transition-colors duration-200 relative"
                style={{ color: active === href ? "#a78bfa" : "#9ca3af" }}
              >
                {label}
                {active === href && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                    style={{ background: "#a78bfa" }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="mailto:grillete07@gmail.com"
          className="hidden md:inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg font-medium transition-all duration-200"
          style={{
            background: "rgba(167,139,250,0.1)",
            border: "1px solid rgba(167,139,250,0.2)",
            color: "#a78bfa",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(167,139,250,0.2)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(167,139,250,0.1)"
          }}
        >
          Contrátame
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{
            background: "rgba(9,9,18,0.95)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm py-2 transition-colors"
              style={{ color: active === href ? "#a78bfa" : "#9ca3af" }}
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:grillete07@gmail.com"
            className="text-sm px-4 py-2 rounded-lg font-medium text-center mt-2"
            style={{
              background: "rgba(167,139,250,0.1)",
              border: "1px solid rgba(167,139,250,0.2)",
              color: "#a78bfa",
            }}
          >
            Contrátame
          </a>
        </div>
      )}
    </header>
  )
}