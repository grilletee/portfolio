import { useState } from "react"
import { Github, ExternalLink, ArrowUpRight, ChevronRight } from "lucide-react"
import { projects } from "../../data/projects"

const typeColors = {
  "Full Stack": "text-violet-400 border-violet-500/30 bg-violet-500/10",
  "IoT / Hardware": "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  "Inteligencia Artificial": "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  "Automatización": "text-orange-400 border-orange-500/30 bg-orange-500/10",
}

const typeAccent = {
  "Full Stack": "from-violet-500/20 to-transparent border-violet-500/20",
  "IoT / Hardware": "from-cyan-500/20 to-transparent border-cyan-500/20",
  "Inteligencia Artificial": "from-emerald-500/20 to-transparent border-emerald-500/20",
  "Automatización": "from-orange-500/20 to-transparent border-orange-500/20",
}

const typeText = {
  "Full Stack": "text-violet-400",
  "IoT / Hardware": "text-cyan-400",
  "Inteligencia Artificial": "text-emerald-400",
  "Automatización": "text-orange-400",
}

export default function Projects() {
  const [selected, setSelected] = useState(0)
  const active = projects[selected]
  const rest = projects.filter((_, i) => i !== selected)

  const accentClass = typeAccent[active.type] || "from-gray-500/20 to-transparent border-gray-500/20"
  const textClass = typeText[active.type] || "text-gray-400"
  const badgeClass = typeColors[active.type] || "text-gray-400 border-gray-500/20 bg-gray-500/10"

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-mono mb-3">proyectos</p>
          <h2 className="text-3xl md:text-4xl font-bold">Lo que he construido</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Featured card */}
          <div
            className={`lg:col-span-2 relative rounded-2xl border bg-gradient-to-br ${accentClass} bg-gray-900/60 p-8 flex flex-col transition-all duration-500`}
          >
            {/* Background number */}
            <span className={`text-8xl font-black opacity-10 absolute top-6 right-8 select-none leading-none ${textClass}`}>
              {String(selected + 1).padStart(2, "0")}
            </span>

            <div className="relative z-10 flex flex-col h-full">
              {/* Badge + links */}
              <div className="flex items-center justify-between mb-6">
                <span className={`text-xs px-3 py-1 rounded-full border font-medium ${badgeClass}`}>
                  {active.type}
                </span>
                <div className="flex gap-3">
                  {active.github && (
                    <a
                      href={active.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={15} />
                      Código
                    </a>
                  )}
                  {active.demo && (
                    <a
                      href={active.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={15} />
                      Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {active.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {active.description}
              </p>

              {/* Details */}
              {active.details && (
                <ul className="flex flex-col gap-2 mb-8">
                  {active.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <ChevronRight size={15} className={`mt-0.5 shrink-0 ${textClass}`} />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {active.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md bg-gray-800/80 text-gray-300 font-mono border border-gray-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            {rest.map((project) => {
              const originalIndex = projects.findIndex((p) => p.id === project.id)
              const miniText = typeText[project.type] || "text-gray-400"
              return (
                <button
                  key={project.id}
                  onClick={() => setSelected(originalIndex)}
                  className="text-left p-5 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-600 transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className={`text-xs font-mono ${miniText}`}>
                      {String(originalIndex + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-gray-700 group-hover:text-gray-400 transition-colors"
                    />
                  </div>
                  <p className="font-semibold text-white text-sm mb-1">{project.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </button>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}