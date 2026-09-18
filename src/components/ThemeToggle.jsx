import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '../lib/utils'

const ThemeToggle = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || localStorage.getItem('Theme')
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    const shouldUseDark = storedTheme ? storedTheme === 'dark' : prefersDark
    setIsDarkMode(shouldUseDark)
    document.documentElement.classList.toggle('dark', shouldUseDark)
    localStorage.removeItem('Theme')
  }, [])

  const toggleTheme = () => {
    const nextMode = !isDarkMode
    setIsDarkMode(nextMode)
    document.documentElement.classList.toggle('dark', nextMode)
    localStorage.setItem('theme', nextMode ? 'dark' : 'light')
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} theme`}
      className={cn('grid h-10 w-10 place-items-center rounded-full text-foreground transition hover:bg-secondary', className)}
    >
      {isDarkMode ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  )
}

export default ThemeToggle
