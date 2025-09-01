import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection'
import AboutMe from '../components/AboutMe'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen text-foreground bg-background overflow-x-hidden'>
      {/* THEME COMPONENT  */}
      <ThemeToggle />

      {/* BACKGROUND EFFECTS  */}
      <StarBackground />

      {/* NAVBAR  */}
      <Navbar />

      {/* MAIN CONTENT  */}
      <main>
        <HomeSection />
        <AboutMe />
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
