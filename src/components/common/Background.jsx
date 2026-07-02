import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const Background = () => {
  const cursorX = useMotionValue(-1000)
  const cursorY = useMotionValue(-1000)
  const smoothX = useSpring(cursorX, { stiffness: 180, damping: 25, mass: 0.1 })
  const smoothY = useSpring(cursorY, { stiffness: 180, damping: 25, mass: 0.1 })
  const [isActive, setIsActive] = useState(false)
  const [particles, setParticles] = useState([])
  const particleIdRef = useRef(0)
  const lastMoveTimeRef = useRef(Date.now())
  const rafRef = useRef(null)

  useEffect(() => {
    const handleMove = (event) => {
      cursorX.set(event.clientX)
      cursorY.set(event.clientY)
      setIsActive(true)
      lastMoveTimeRef.current = Date.now()

      // Create particles with random offset
      if (Math.random() > 0.4) {
        const particleId = particleIdRef.current++
        const angle = Math.random() * Math.PI * 2
        const speed = 2 + Math.random() * 3
        const lifetime = 600 + Math.random() * 400

        const particle = {
          id: particleId,
          x: event.clientX,
          y: event.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          lifetime,
          birth: Date.now(),
          size: 1 + Math.random() * 2,
        }

        setParticles((prev) => {
          const updated = [...prev, particle]
          return updated.length > 20 ? updated.slice(-20) : updated
        })
      }
    }

    const handleLeave = () => setIsActive(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)

    // Animation loop for particles
    const animate = () => {
      setParticles((prev) => {
        const now = Date.now()
        return prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.08, // gravity effect
          }))
          .filter((p) => now - p.birth < p.lifetime)
      })
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [cursorX, cursorY])

  // Pulse animation trigger based on cursor stillness
  const [isPulsing, setIsPulsing] = useState(false)

  useEffect(() => {
    const checkStillness = setInterval(() => {
      const timeSinceMove = Date.now() - lastMoveTimeRef.current
      setIsPulsing(timeSinceMove > 400 && isActive)
    }, 100)

    return () => clearInterval(checkStillness)
  }, [isActive])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-dark-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.14),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_36%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.07]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,10,0.1),rgba(5,5,10,0.75))]" />

      {/* Soul Orb - Spiritual Cursor Effect */}
      <motion.div
        className="absolute left-0 top-0 pointer-events-none"
        style={{ x: smoothX, y: smoothY, opacity: isActive ? 1 : 0 }}
      >
        {/* Outer glow - purple aura */}
        <motion.div
          className="absolute -inset-8 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(168,85,247,0.1) 50%, transparent 100%)',
            filter: 'blur(12px)',
          }}
          animate={isPulsing ? { scale: [1, 1.1, 1] } : { scale: 1 }}
          transition={isPulsing ? { duration: 1.2, repeat: Infinity } : undefined}
        />

        {/* Middle glow - soft white-purple */}
        <motion.div
          className="absolute -inset-4 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(216,180,254,0.25) 0%, rgba(168,85,247,0.1) 40%, transparent 100%)',
            filter: 'blur(8px)',
          }}
        />

        {/* Core Soul Orb - bright center */}
        <div
          className="absolute -inset-2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236,230,255,0.8) 0%, rgba(216,180,254,0.6) 50%, rgba(168,85,247,0.4) 100%)',
            filter: 'blur(4px)',
            boxShadow: '0 0 24px rgba(216,180,254,0.6), 0 0 48px rgba(168,85,247,0.3)',
          }}
        />

        {/* Innermost core - bright point */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.9)',
            boxShadow: '0 0 8px rgba(236,230,255,0.8)',
          }}
        />
      </motion.div>

      {/* Spiritual Particles */}
      {particles.map((particle) => {
        const age = Date.now() - particle.birth
        const progress = age / particle.lifetime
        const opacity = Math.max(0, 1 - progress * 1.5)

        return (
          <div
            key={particle.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              background: `rgba(${168 + Math.random() * 68}, ${85 + Math.random() * 95}, 247, ${opacity * 0.7})`,
              filter: `blur(${0.5 + progress * 0.5}px)`,
              transform: 'translate(-50%, -50%)',
              boxShadow: `0 0 ${4 + progress * 8}px rgba(216,180,254,${opacity * 0.6})`,
            }}
          />
        )
      })}

      {/* Ambient background glow that follows cursor */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          width: 400,
          height: 400,
          left: '-200px',
          top: '-200px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
          opacity: isActive ? 0.5 : 0,
        }}
      />
    </div>
  )
}

export default Background
