import { useEffect, useRef, useState } from "react"
import { Mail, Linkedin, ArrowUpRight } from "lucide-react"

const links = [
  {
    icon: Mail,
    label: "Email",
    sub: "grillete07@gmail.com",
    href: "mailto:grillete07@gmail.com",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.15)",
    border: "rgba(167,139,250,0.2)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    sub: "guillermo-sanchez-gutierrez",
    href: "https://www.linkedin.com/in/guillermo-sanchez-gutierrez/",
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.15)",
    border: "rgba(34,211,238,0.2)",
  },
]

function ContactCard({ link, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const Icon = link.icon

  return (
    <a
      ref={ref}
      href={link.href}
      target={link.href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="group relative rounded-2xl p-8 flex items-center justify-between transition-all duration-700 cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${index * 120}ms`,
        background: "rgba(17,17,27,0.8)",
        border: `1px solid ${link.border}`,
        boxShadow: visible ? `0 0 30px ${link.glow}` : "none",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${link.glow}, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex items-center gap-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: link.glow, border: `1px solid ${link.border}` }}
        >
          <Icon size={22} style={{ color: link.color }} />
        </div>
        <div>
          <p className="font-bold text-white text-lg">{link.label}</p>
          <p className="text-gray-400 text-sm font-mono">{link.sub}</p>
        </div>
      </div>

      <ArrowUpRight
        size={20}
        className="relative z-10 text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
        style={{ color: link.color }}
      />
    </a>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div
          ref={ref}
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <p className="text-violet-400 text-sm font-mono mb-3">contacto</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Hablamos?
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-xl mx-auto">
            Estoy buscando mi primera oportunidad profesional. Si tienes un proyecto
            interesante o una posición donde pueda aportar y crecer, escríbeme —
            respondo siempre.
          </p>
        </div>

        {/* Contact cards */}
        <div className="flex flex-col gap-4 mb-16">
          {links.map((link, i) => (
            <ContactCard key={link.label} link={link} index={i} />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 text-sm">
          <p>Diseñado y desarrollado por Guillermo Sánchez · 2026</p>
          <p className="mt-1 font-mono">grillete.dev</p>
        </div>

      </div>
    </section>
  )
}