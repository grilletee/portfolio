# grillete.dev — Portfolio personal

Portfolio personal desarrollado desde cero con React, Vite y Tailwind CSS. Diseño moderno con animaciones propias sin librerías externas.

🔗 **[grillete.dev](https://grillete.dev)**

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS 3**
- **lucide-react** — iconografía
- **Vercel** — deploy con CI/CD automático desde GitHub

## Características

- Aurora de fondo reactiva al cursor — canvas animado con WebGL
- Magnetic hover en cards — efecto 3D sin librerías
- Animaciones de entrada escalonadas con IntersectionObserver
- Selector de proyectos interactivo con estado en React
- Navbar sticky con detección de sección activa
- Diseño responsive — mobile first
- CV descargable en PDF

## Estructura

```
src/
├── components/
│   ├── sections/       # Hero, About, Projects, Skills, Contact
│   ├── Aurora.jsx      # Fondo animado reactivo al cursor
│   └── Navbar.jsx      # Navegación sticky
├── data/
│   ├── projects.js     # Datos de proyectos
│   └── skills.js       # Stack por categorías
└── hooks/
    └── useMagneticHover.js  # Hook para efecto 3D en cards
```

## Desarrollo local

```bash
npm install
npm run dev
```

## Contacto

- grillete07@gmail.com
- [linkedin.com/in/guillermo-sanchez-gutierrez](https://www.linkedin.com/in/guillermo-sanchez-gutierrez/)
- [github.com/grilletee](https://github.com/grilletee)