import { ArrowDown } from 'lucide-react'
import React from 'react'

const HomeSection = () => {
  return (
    <>
      <section id="home" className='relative flex flex-col items-center min-h-screen px-4 justify-center'>
        <div className='container max-w-4xl mx-auto text-center z-10'>
          <div className='space-y-6'>
            <h1 className='font-bold tracking-tight text-4xl md:text-6xl'>
              <span className='opacity-0 animate-fade-in'> Hi, I'm</span>
              <span className='text-primary opacity-0 animate-fade-in-delay-1'> {" "} Yash</span>
              <span className='text-gradient opacity-0 ml-2 animate-fade-in-delay-2'> {" "} Sharma</span>
            </h1>

            <p className='text-lg md:text-xl text-muted-foreground mx-auto opacity-0 animate-fade-in-delay-3'>I'm a Full-Stack Developer passionate about turning ideas into fast, user-friendly products. From intuitive interfaces to scalable APIs, I bridge design and engineering to deliver real-world solutions.</p>

            <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
              <a href="#projects" className='cosmic-button'>Explore My Work Now !</a>
            </div>
          </div>
        </div>
        <div className='absolute bottom-8 transform -translate-x-1/2 left-1/2 flex flex-col items-center animate-bounce'>
        <span className='text-sm mb-2 text-muted-foreground'>Scroll</span>
        <ArrowDown className='h-5 w-5 text-primary' />
        </div>
      </section>
    </>
  )
}

export default HomeSection
