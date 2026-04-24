import { useEffect, useRef, useState } from "react"
import { skills } from "../../data/skills"

const logos = {
  Backend: (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke="#a78bfa" strokeWidth="1.5"/>
      <path d="M8 21h8M12 17v4" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 8l3 3-3 3M13 14h4" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Frontend: (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#22d3ee" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#22d3ee" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  "Bases de datos": (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#34d399" strokeWidth="1.5"/>
      <path d="M4 6v4c0 1.657 3.582 3 8 3s8-1.343 8-3V6" stroke="#34d399" strokeWidth="1.5"/>
      <path d="M4 10v4c0 1.657 3.582 3 8 3s8-1.343 8-3v-4" stroke="#34d399" strokeWidth="1.5"/>
    </svg>
  ),
  "IoT & Hardware": (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
      <rect x="7" y="7" width="10" height="10" rx="1" stroke="#fb923c" strokeWidth="1.5"/>
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" stroke="#fb923c" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="2" fill="#fb923c"/>
    </svg>
  ),
  Herramientas: (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a8 8 0 01-11 11l-3 3a1 1 0 01-1.4 0l-1.6-1.6a1 1 0 010-1.4l3-3A8 8 0 0114.7 6.3z" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "IA & Agentes": (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
      <path d="M12 2a4 4 0 014 4v1h1a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h1V6a4 4 0 014-4z" stroke="#e879f9" strokeWidth="1.5"/>
      <circle cx="9" cy="12" r="1" fill="#e879f9"/>
      <circle cx="15" cy="12" r="1" fill="#e879f9"/>
      <path d="M9 16s1 1.5 3 1.5 3-1.5 3-1.5" stroke="#e879f9" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
}

const categoryStyle = {
  Backend:          { glow: "rgba(167,139,250,0.15)", border: "rgba(167,139,250,0.2)",  text: "#a78bfa" },
  Frontend:         { glow: "rgba(34,211,238,0.15)",  border: "rgba(34,211,238,0.2)",   text: "#22d3ee" },
  "Bases de datos": { glow: "rgba(52,211,153,0.15)",  border: "rgba(52,211,153,0.2)",   text: "#34d399" },
  "IoT & Hardware": { glow: "rgba(251,146,60,0.15)",  border: "rgba(251,146,60,0.2)",   text: "#fb923c" },
  Herramientas:     { glow: "rgba(244,114,182,0.15)", border: "rgba(244,114,182,0.2)",  text: "#f472b6" },
  "IA & Agentes":   { glow: "rgba(232,121,249,0.15)", border: "rgba(232,121,249,0.2)",  text: "#e879f9" },
}

function SkillCard({ category, items, index }) {
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

  const style = categoryStyle[category] || {
    glow: "rgba(255,255,255,0.05)",
    border: "rgba(255,255,255,0.1)",
    text: "#fff",
  }
  const logo = logos[category] || null

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl p-6 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${index * 80}ms`,
        background: "rgba(17,17,27,0.8)",
        border: `1px solid ${style.border}`,
        boxShadow: visible ? `0 0 30px ${style.glow}` : "none",
      }}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${style.glow}, transparent 70%)`,
        }}
      />

      {/* Logo + title */}
      <div className="flex items-center gap-3 mb-5">
        <div className="shrink-0">{logo}</div>
        <p className="text-sm font-bold tracking-widest uppercase" style={{ color: style.text }}>
          {category}
        </p>
      </div>

      {/* Items */}
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-xs px-3 py-1.5 rounded-lg font-mono text-gray-300 transition-colors duration-200 group-hover:text-white"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-mono mb-3">stack</p>
          <h2 className="text-3xl md:text-4xl font-bold">Tecnologías y herramientas</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}