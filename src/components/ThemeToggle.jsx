import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils'

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("Theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("Theme", "light");
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem("Theme", "dark");
        }
        setIsDarkMode(!isDarkMode)
    }
    return (
        <>
            <button onClick={toggleTheme} className={cn("fixed max-sm:hidden z-50 transition-colors duration-300 top-5 right-5 p-2 rounded-full focus:outline-hidden cursor-pointer")}>
                {isDarkMode ? <Sun className='h-6 w-6 text-yellow-300' /> : <Moon className='h-6 w-6 text-blue-900' />}
            </button>
        </>
    )
}

export default ThemeToggle
