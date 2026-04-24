import { useEffect, useRef } from "react"

export default function Aurora() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Orbs de color que se mueven lentamente
    const orbs = [
      { x: 0.2, y: 0.1, r: 0.5, color: "rgba(109,40,217,0.18)", speed: 0.00008, phase: 0 },
      { x: 0.8, y: 0.3, r: 0.4, color: "rgba(6,182,212,0.12)", speed: 0.00006, phase: 2 },
      { x: 0.5, y: 0.7, r: 0.45, color: "rgba(139,92,246,0.14)", speed: 0.00007, phase: 4 },
      { x: 0.1, y: 0.8, r: 0.35, color: "rgba(16,185,129,0.08)", speed: 0.00005, phase: 1 },
    ]

    let t = 0
    const draw = (ts) => {
      t = ts
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      orbs.forEach((orb) => {
        const x = (orb.x + Math.sin(t * orb.speed + orb.phase) * 0.15) * canvas.width
        const y = (orb.y + Math.cos(t * orb.speed + orb.phase) * 0.1) * canvas.height
        const r = orb.r * Math.max(canvas.width, canvas.height)

        const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
        grad.addColorStop(0, orb.color)
        grad.addColorStop(1, "transparent")

        ctx.fillStyle = grad
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 1 }}
    />
  )
}