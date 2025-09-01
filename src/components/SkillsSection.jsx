import React, { useState } from 'react'
import { cn } from '../lib/utils'

const skills = [
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "Javascript", level: 96, category: "frontend" },
    { name: "C++", level: 94, category: "frontend" },
    { name: "C", level: 98, category: "frontend" },
    { name: "Typescript", level: 86, category: "frontend" },
    { name: "React", level: 92, category: "frontend" },
    { name: "Tailwind CSS", level: 95, category: "frontend" },

    { name: "MongoDB", level: 84, category: "backend" },
    { name: "Node.js", level: 87, category: "backend" },
    { name: "Express.js", level: 80, category: "backend" },
    { name: "SQL", level: 83, category: "backend" },

    { name: "Postman", level: 93, category: "tools" },
    { name: "Github", level: 87, category: "tools" },
    { name: "VS Code", level: 90, category: "tools" },
    { name: "Open AI", level: 90, category: "tools" },
    { name: "Playwright", level: 79, category: "tools" },
]

const categories = ["all", "frontend", "backend", "tools"]

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || activeCategory === skill.category)
    return (
        <>
            <section id="skills" className='py-24 px-4 bg-secondary/30'>
                <div className='container mx-auto max-w-5xl'>
                    <h2 className='mb-12 text-3xl md:text-4xl font-bold text-center'>My <span className='text-primary'>Skills</span></h2>
                    <div className='flex flex-wrap justify-center mb-12 gap-4'>
                        {categories.map((category, key) => (
                            <div key={key} className={cn('py-2 px-5 capitalize rounded-full transition-colors duration-300 cursor-pointer', activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")} onClick={() => setActiveCategory(category)}>{category}</div>
                        ))}
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {filteredSkills.map((skill, key) => (
                            <div key='key' className='bg-card card-hover shadow-xs rounded-lg p-6'>
                                <div className='text-left mb-4'>
                                    <h3 className='font-semibold text-lg'>{skill.name}</h3>
                                </div>
                                <div className='bg-secondary/50 rounded-full w-full overflow-hidden'>
                                    <div className='bg-primary origin-left rounded-full animate-[grow_1.5s_ease-out] h-2' style={{ width: skill.level + "%" }} />
                                </div>
                                <div className='mt-1 text-right'>{skill.level}%</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default SkillsSection
