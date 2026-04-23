import { Code2, Cpu, Brain } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Backend First",
    desc: "Java, Spring Boot y Python son mi base. APIs REST, autenticación JWT y lógica de negocio.",
  },
  {
    icon: Cpu,
    title: "IoT & Hardware",
    desc: "Seleccionado para desarrollar Green Campus: sistema autónomo de sensores para universidades.",
  },
  {
    icon: Brain,
    title: "IA Aplicada",
    desc: "Construyendo agentes de IA reales, no solo consumiendo APIs — entendiendo cómo funcionan.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-violet-400 text-sm font-mono mb-3">sobre mí</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Desarrollador Full Stack con foco en backend e IoT
        </h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          Estudio desarrollo de software y llevo tiempo construyendo proyectos
          que combinan backend robusto, hardware físico e inteligencia
          artificial. Me interesa la parte que no se ve: la lógica, los datos
          y los sistemas que hacen que todo funcione.
        </p>
        <p className="text-gray-400 leading-relaxed mb-12">
          Actualmente ampliando mi stack con React y profundizando en
          arquitecturas de agentes de IA. Busco un entorno donde seguir
          creciendo y aportar desde el primer día.
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-violet-500/30 transition-colors text-center"
            >
              <div className="text-violet-400">
                <Icon size={24} />
              </div>
              <p className="font-medium text-white text-sm">{title}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}