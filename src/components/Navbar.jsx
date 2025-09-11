import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('Home')

  // Track scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock scroll when menu is open
  useEffect(() => {
    const root = document.documentElement
    if (isMenuOpen) {
      const scrollBarWidth = window.innerWidth - root.clientWidth
      root.style.overflow = 'hidden'
      // Prevent content shift when scrollbar disappears (mainly desktop, but harmless on mobile)
      if (scrollBarWidth > 0) root.style.paddingRight = `${scrollBarWidth}px`
    } else {
      root.style.overflow = ''
      root.style.paddingRight = ''
    }
    return () => {
      root.style.overflow = ''
      root.style.paddingRight = ''
    }
  }, [isMenuOpen])

  const showNavChrome = isScrolled || isMenuOpen // keep stable styles during menu open

  return (
    <>
      <nav
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-300 py-5',
          showNavChrome && 'backdrop-blur-md shadow-sm bg-background/80'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="flex items-center font-bold text-xl text-primary">
              <span className="relative z-10">
                <span className="text-glow text-foreground">Yash</span>{' '}Portfolio
              </span>
            </a>

            {/* Middle: Desktop Nav */}
            <div className="hidden md:flex items-center justify-center">
              <div className="flex space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveTab(item.name)}
                    aria-current={activeTab === item.name ? 'page' : undefined}
                    className={cn(
                      'text-foreground hover:text-primary text-lg font-medium transition-colors duration-300',
                      activeTab === item.name && 'text-primary'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Desktop theme + Mobile hamburger */}
            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
              <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="md:hidden p-2 text-foreground"
                aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (mount/unmount for smoother first frame) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className={cn(
              'absolute inset-0 bg-background/95 backdrop-blur-md',
              'animate-[fadeIn_200ms_ease-out]'
            )}
          />
          {/* Panel */}
          <div
            className={cn(
              'relative z-10 h-full flex flex-col',
              'animate-[slideIn_220ms_ease-out]'
            )}
          >
            {/* Top row in menu: Title · Theme · Close */}
            <div className="flex items-center justify-between px-6 py-4">
              <a
                href="#home"
                onClick={() => {
                  setActiveTab('Home')
                  setIsMenuOpen(false)
                }}
                className="font-semibold text-lg text-primary"
              >
                Yash Portfolio
              </a>

              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-foreground"
                  aria-label="Close Menu"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            {/* Centered links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8 text-xl">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-foreground hover:text-primary transition-colors duration-300',
                    activeTab === item.name && 'text-primary'
                  )}
                  onClick={() => {
                    setActiveTab(item.name)
                    setIsMenuOpen(false)
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Spacer to avoid content hiding behind fixed nav */}
      <div className={showNavChrome ? 'h-16' : 'h-20'} />
      
      {/* Tailwind keyframes (can go in globals.css) */}
      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideIn { 
          from { opacity: 0; transform: translateY(-4px) } 
          to { opacity: 1; transform: translateY(0) } 
        }
      `}</style>
    </>
  )
}

export default Navbar
