import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    });

    useEffect(() => {
        console.log('activeTab', activeTab)
    }, [activeTab]);

    return (
        <>
            <nav className={cn('transition-all duration-300 fixed w-full z-40', isScrolled ? `py-3 backdrop-blur-md shadow-xs bg-background/80` : `py-5`)}>
                <div className='container flex justify-between items-center'>
                    <a href="#home" className='flex items-center font-bold text-xl text-primary'>
                        <span className='relative z-10'>
                            <span className='text-glow text-foreground'>Yash</span> {" "} Portfolio
                        </span>
                    </a>

                    {/* LAPTOP NAVBAR  */}
                    <div className='hidden md:flex space-x-8'>
                        {
                            navItems.map((item, key) => (
                                <a id={key} href={item.href} className={`text-foreground hover:text-primary text-lg font-medium transition-colors duration-300 ${activeTab === item.name ? "text-primary" : ""}`} onClick={() => { setActiveTab(item.name); console.log('activeTab ', activeTab)}}>{item.name}</a>
                            ))
                        }
                    </div>

                    {/* MOBILE VERSION  */}
                    <button onClick={() => setIsMenuOpen((prev) => !prev)} className='md:hidden p-2 text-foreground z-50' aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}>{isMenuOpen ? <X size={24}/> : <Menu />}</button>
                    <div className={cn('fixed flex flex-col inset-0 backdrop-blur-md justify-center items-center z-40 bg-background/95 transition-all duration-300 md:hidden', isMenuOpen ? `opacity-100 pointer-events-auto` : `opacity-0 pointer-events-none`)}>
                        <div className='flex flex-col space-y-8 text-xl'>
                            {
                                navItems.map((item, key) => (
                                    <a id={key} href={item.href} className={`text-foreground hover:text-primary transition-colors duration-300 ${activeTab === item.name ? "text-primary" : ""}`} onClick={() => { setIsMenuOpen(false); setActiveTab(item.name); console.log('activeTab ', activeTab)}}>{item.name}</a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
