import { useEffect, useState } from 'react'

const StarBackground = () => {
  const [stars, setStars] = useState([])
  const [meteors, setMeteors] = useState([])

  useEffect(() => {
    const generate = () => {
      const starCount = Math.min(70, Math.max(28, Math.floor(window.innerWidth / 22)))
      setStars(Array.from({ length: starCount }, (_, id) => ({
        id,
        size: Math.random() * 1.8 + 0.7,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.28 + 0.12,
        duration: Math.random() * 4 + 3,
      })))
      setMeteors(Array.from({ length: 3 }, (_, id) => ({
        id,
        x: Math.random() * 80 + 10,
        y: Math.random() * 30,
        delay: Math.random() * 12,
        duration: Math.random() * 4 + 6,
      })))
    }

    generate()
    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(generate, 200)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {stars.map((star) => (
        <span key={star.id} className="star animate-pulse-subtle" style={{ width: star.size, height: star.size, opacity: star.opacity, top: `${star.y}%`, left: `${star.x}%`, animationDuration: `${star.duration}s` }} />
      ))}
      {meteors.map((meteor) => (
        <span key={meteor.id} className="meteor animate-meteor h-px w-24" style={{ animationDelay: `${meteor.delay}s`, top: `${meteor.y}%`, left: `${meteor.x}%`, animationDuration: `${meteor.duration}s` }} />
      ))}
    </div>
  )
}

export default StarBackground
