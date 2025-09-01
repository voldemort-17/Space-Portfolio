import React, { useEffect, useState } from 'react'

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerHeight * window.innerWidth) / 10000);
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      })
    }
    setStars(newStars);
  }

  const generateMeteors = () => {
    const numberOfMeteors = 5;
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      })
    }
    setMeteors(newMeteors);
  }

  return (
    <>
      <div className='fixed inset-0 z-0 overflow-hidden pointer-events-none'>
        {
          stars.map((star) => (
            <div key={star.id} className='star animate-pulse-subtle' style={{
              width: star.size + `px`,
              height: star.size + `px`,
              opacity: star.opacity,
              top: star.y + `%`,
              left: star.x + `%`,
              animationDuration: star.animationDuration + `s`,
            }}  />
          ))
        }
        {
          meteors.map((meteor) => (
            <div key={meteor.id} className='meteor animate-meteor' style={{
              width: meteor.size * 50 + `px`,
              height: meteor.size * 2 + `px`,
              animationDelay: meteor.delay,
              top: meteor.y + `%`,
              left: meteor.x + `%`,
              animationDuration: meteor.animationDuration + `s`,
            }}  />
          ))
        }
      </div>
    </>
  )
}

export default StarBackground
