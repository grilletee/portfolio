import { useEffect, useRef, useState } from "react"
import { Code2, Cpu, Brain, Rocket } from "lucide-react"

const cards = [
  {
    icon: Code2,
    title: "Backend First",
    desc: "Java, Spring Boot y Python son mi base. APIs REST, autenticación JWT y lógica de negocio.",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.15)",
    border: "rgba(167,139,250,0.2)",
  },
  {
    icon: Cpu,
    title: "IoT & Hardware",
    desc: "Seleccionado para desarrollar Green Campus: sistema autónomo de sensores para universidades.",
    color: "#fb923c",
    glow: "rgba(251,146,60,0.15)",
    border: "rgba(251,146,60,0.2)",
  },
  {
    icon: Brain,
    title: "IA Aplicada",
    desc: "Construyendo agentes de IA reales, no solo consumiendo APIs — entendiendo cómo funcionan por dentro.",
    color: "#e879f9",
    glow: "rgba(232,121,249,0.15)",
    border: "rgba(232,121,249,0.2)",
  },
  {
    icon: Rocket,
    title: "En constante crecimiento",
    desc: "Cada proyecto nuevo es un reto distinto. Aprendo rápido, me adapto y siempre busco entender el porqué.",
    color: "#34d399",
    glow: "rgba(52,211,153,0.15)",
    border: "rgba(52,211,153,0.2)",
  },
]

function AnimatedCard({ card, index }) {
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

  const Icon = card.icon

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl p-6 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${index * 100}ms`,
        background: "rgba(17,17,27,0.8)",
        border: `1px solid ${card.border}`,
        boxShadow: visible ? `0 0 30px ${card.glow}` : "none",
      }}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${card.glow}, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
          style={{ background: `${card.glow}`, border: `1px solid ${card.border}` }}
        >
          <Icon size={20} style={{ color: card.color }} />
        </div>
        <p className="font-bold text-white mb-2">{card.title}</p>
        <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
      </div>
    </div>
  )
}

export default function About() {
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
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div
          ref={ref}
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <p className="text-violet-400 text-sm font-mono mb-3">sobre mí</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Desarrollador Full Stack con foco en backend e IoT
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto mb-3">
            Estudio desarrollo de software y llevo tiempo construyendo proyectos
            que combinan backend robusto, hardware físico e inteligencia artificial.
            Me interesa la parte que no se ve: la lógica, los datos y los sistemas
            que hacen que todo funcione.
          </p>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Actualmente ampliando mi stack con React y profundizando en
            arquitecturas de agentes de IA. Busco un entorno donde seguir
            creciendo y aportar desde el primer día.
          </p>
        </div>

        {/* Cards 2x2 */}
        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <AnimatedCard key={card.title} card={card} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}