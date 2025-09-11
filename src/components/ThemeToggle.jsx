import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '../lib/utils'

const ThemeToggle = ({ className, size = 20 }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('Theme')
    if (stored) {
      const dark = stored === 'dark'
      setIsDarkMode(dark)
      document.documentElement.classList.toggle('dark', dark)
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(prefersDark)
      document.documentElement.classList.toggle('dark', prefersDark)
    }
  }, [])

  const toggleTheme = () => {
    const next = !isDarkMode
    setIsDarkMode(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('Theme', next ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        'p-2 rounded-full transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/40',
        className
      )}
    >
      {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}

export default ThemeToggle
