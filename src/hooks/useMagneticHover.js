import { useRef } from "react"

export function useMagneticHover(strength = 15) {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -strength
    const rotateY = ((x - centerX) / centerX) * strength

    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    el.style.transition = "transform 0.1s ease"
  }

  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)"
    el.style.transition = "transform 0.4s ease"
  }

  return { ref, onMouseMove, onMouseLeave }
}