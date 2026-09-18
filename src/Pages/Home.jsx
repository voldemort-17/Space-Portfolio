import AboutMe from '../components/AboutMe'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import HomeSection from '../components/HomeSection'
import Navbar from '../components/Navbar'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'
import StarBackground from '../components/StarBackground'
import WorkSection from '../components/WorkSection'

const Home = () => (
  <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
    <a
      href="#main-content"
      className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground transition focus:translate-y-0"
    >
      Skip to content
    </a>
    <StarBackground />
    <Navbar />
    <main id="main-content" className="relative z-10">
      <HomeSection />
      <AboutMe />
      <WorkSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
)

export default Home
