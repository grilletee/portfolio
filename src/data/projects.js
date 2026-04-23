export const projects = [
  {
    id: 1,
    title: "CRM Empresarial Full Stack",
    description:
      "Sistema de gestión empresarial con autenticación JWT, roles de usuario y panel de administración. Desarrollado como proyecto de fin de curso.",
    details: [
      "Arquitectura cliente-servidor con Angular en frontend y Spring Boot en backend",
      "Autenticación stateless con JWT — tokens generados y validados en cada request",
      "Control de acceso por roles: admin, gestor y empleado con rutas protegidas",
      "Base de datos relacional MySQL con entidades mapeadas via JPA/Hibernate",
    ],
    stack: ["Java", "Spring Boot", "Angular", "MySQL", "JWT"],
    type: "Full Stack",
    github: "https://github.com/Yangsr-png/Proyecto-CRM",
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: "Green Campus IoT",
    description:
      "Sistema de monitorización ambiental para universidades. Controla luz, humedad y temperatura de forma autónoma mediante sensores físicos.",
    details: [
      "Seleccionado entre varios candidatos de clase para colaborar en el módulo de hardware",
      "Programación de Arduino en C++ para lectura de sensores DHT22 y LDR",
      "Comunicación entre hardware y backend via API REST con polling periódico",
      "Sistema de reglas autónomas: si temperatura supera umbral, activa actuadores",
    ],
    stack: ["Arduino", "C++", "Python", "API REST"],
    type: "IoT / Hardware",
    github: "https://github.com/GreenCampusNebrija",
    demo: null,
    featured: true,
  },
  {
    id: 3,
    title: "Pokémon TCG AI Agent",
    description:
      "Agente de inteligencia artificial capaz de analizar cartas del juego Pokémon TCG. Proyecto en desarrollo activo.",
    details: [
      "Agente construido con Python capaz de razonar sobre datos de cartas en tiempo real",
      "Integración con la Pokémon TCG API para obtener datos actualizados",
      "Lógica de decisión propia — no solo llamadas a LLM, sino pipeline de análisis",
      "Proyecto en expansión activa con nuevas capacidades en desarrollo",
    ],
    stack: ["Python", "IA", "API"],
    type: "Inteligencia Artificial",
    github: "https://github.com/grilletee/pokemon-tcg-ai-agent",
    demo: null,
    featured: true,
  },
  {
    id: 4,
    title: "Python Automation Tools",
    description:
      "Colección de scripts CLI para automatización de tareas: gestión de archivos y generación de códigos QR. En expansión continua.",
    details: [
      "Scripts ejecutables desde terminal con argumentos parametrizables",
      "Generación de códigos QR con destino configurable y exportación a imagen",
      "Organización automática de archivos por extensión o fecha de modificación",
      "Repositorio en crecimiento continuo — nuevas utilidades añadidas regularmente",
    ],
    stack: ["Python", "CLI"],
    type: "Automatización",
    github: "https://github.com/grilletee/python-automation-tools",
    demo: null,
    featured: false,
  },
]