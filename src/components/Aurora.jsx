import { useEffect, useRef } from "react"

export default function Aurora() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animId
    let mouse = { x: 0.5, y: 0.3 }
    let target = { x: 0.5, y: 0.3 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const onMouseMove = (e) => {
      target.x = e.clientX / window.innerWidth
      target.y = e.clientY / window.innerHeight
    }
    window.addEventListener("mousemove", onMouseMove)

    const orbs = [
      { offsetX: 0,    offsetY: 0,    r: 0.55, color: "rgba(109,40,217,0.18)",  speed: 0.00007, phase: 0,   influence: 0.25 },
      { offsetX: 0.6,  offsetY: 0.2,  r: 0.4,  color: "rgba(6,182,212,0.12)",   speed: 0.00005, phase: 2,   influence: 0.15 },
      { offsetX: 0.3,  offsetY: 0.65, r: 0.45, color: "rgba(139,92,246,0.14)",  speed: 0.00006, phase: 4,   influence: 0.20 },
      { offsetX: -0.1, offsetY: 0.8,  r: 0.35, color: "rgba(16,185,129,0.07)",  speed: 0.00004, phase: 1,   influence: 0.10 },
    ]

    let t = 0
    const draw = (ts) => {
      t = ts

      // Lerp suave del ratón
      mouse.x += (target.x - mouse.x) * 0.04
      mouse.y += (target.y - mouse.y) * 0.04

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      orbs.forEach((orb) => {
        // Posición base animada + influencia del ratón
        const baseX = orb.offsetX + Math.sin(t * orb.speed + orb.phase) * 0.12
        const baseY = orb.offsetY + Math.cos(t * orb.speed + orb.phase) * 0.08
        const x = (baseX + mouse.x * orb.influence) * canvas.width
        const y = (baseY + mouse.y * orb.influence) * canvas.height
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
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}