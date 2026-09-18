import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#work' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-28% 0px -60% 0px', threshold: [0.05, 0.2, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isMenuOpen])

  const handleNavClick = (href) => {
    setActiveSection(href.slice(1))
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Primary navigation"
        className={cn(
          'mx-auto max-w-6xl rounded-2xl border border-transparent px-4 transition-all duration-300 sm:px-5',
          (isScrolled || isMenuOpen) &&
            'border-border/70 bg-background/85 shadow-[0_10px_40px_hsl(230_30%_10%/0.08)] backdrop-blur-xl',
        )}
      >
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#home" onClick={() => handleNavClick('#home')} className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-sm font-black text-primary-foreground shadow-lg shadow-primary/20 transition group-hover:-rotate-3">
              YS
            </span>
            <span className="font-bold tracking-tight">Yash Sharma</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const id = item.href.slice(1)
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  aria-current={activeSection === id ? 'location' : undefined}
                  className={cn(
                    'rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground',
                    activeSection === id && 'bg-primary/10 text-primary',
                  )}
                >
                  {item.name}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="grid h-10 w-10 place-items-center rounded-full text-foreground transition hover:bg-secondary lg:hidden"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={cn(
            'grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 lg:hidden',
            isMenuOpen ? 'grid-rows-[1fr] pb-4 opacity-100' : 'grid-rows-[0fr] opacity-0',
          )}
        >
          <div className="min-h-0">
            <div className="grid gap-1 border-t border-border/70 pt-3">
              {navItems.map((item) => {
                const id = item.href.slice(1)
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      'rounded-xl px-4 py-3 text-left text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground',
                      activeSection === id && 'bg-primary/10 text-primary',
                    )}
                  >
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
