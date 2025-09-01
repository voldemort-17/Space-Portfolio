import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id: 1,
        title: "Amigo Chat App",
        description: 'I built a real-time chat app with MongoDB, Express, React, and Node, using Socket.IO for instant messaging, typing indicators, and online presence. Features include JWT auth, one-to-one and group chats, message persistence, read receipts, and a responsive, accessible UI.',
        tags: ["React", "TailwindCSS", "Express.js", "Node.js", "MongoDB", "Socket.io", "Javascript"],
        image: '/Chat_App.png',
        demoUrl: "https://chat-app-frontend-nit5.onrender.com/auth",
        githubUrl: "https://github.com/voldemort-17/Chat-App"
    },
    {
        id: 2,
        title: "Gemini Clone App",
        description: 'A front-end clone of the Gemini chat experience built with React and Tailwind CSS. It includes prompt input, conversation history, markdown/code rendering, loading states, dark mode, and keyboard shortcuts—clean, responsive, and API-agnostic so it can plug into any LLM backend later.',
        tags: ["React", "TailwindCSS", "Gemini", "Node.js", "AI", "Javascript"],
        image: '/Gemini_Clone.png',
        demoUrl: "https://geminidevclone.netlify.app/",
        githubUrl: "https://github.com/voldemort-17/GeminiClone_React"
    }
]

const ProjectsSection = () => {
    return (
        <>
            <section id='projects' className='py-24 px-4 relative'>
                <div className='container mx-auto max-w-5xl'>
                    <h2 className='mb-12 text-3xl md:text-4xl font-bold text-center'>Featured <span className='text-primary'>Projects</span></h2>
                    <p className='text-center mb-12 max-w-2xl mx-auto'>Here are my featured projects full-stack builds with thoughtful UX. You’ll find concise write-ups, architecture snapshots, and links to code and demos. I focus on performance, accessibility, and maintainability, turning real problems into reliable, elegant solutions.</p>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {projects.map((project, key) => (
                            <div key={key} className='group bg-card card-hover rounded-lg shadow-xs overflow-hidden'>
                                <div className='h-56 overflow-hidden'>
                                    <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                                </div>
                                <div className='p-6'>
                                    <div className='flex flex-wrap gap-2 mb-4'>
                                        {
                                            project.tags.map((tag) => (
                                                <span className='px-3 py-2 border rounded-full text-xs font-medium text-seconday-foreground bg-secondary/20'>{tag}</span>
                                            ))
                                        }
                                    </div>
                                    <h3 className='text-xl font-semibold mb-3'>{project.title}</h3>
                                    <p className='text-sm mb-4'>{project.description}</p>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex space-x-3'>
                                            <a href={project.demoUrl} target='_blank' className='transition-colors duration-300 hover:text-primary text-foreground/80'>{" "}<ExternalLink size={20} /></a>
                                            <a href={project.githubUrl} target='_blank' className='transition-colors duration-300 hover:text-primary text-foreground/80'>{" "}<Github size={20} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='text-center mt-12'>
                    <a href="https://github.com/voldemort-17" target='_blank' className='cosmic-button w-fit flex items-center mx-auto gap-2'>Check my Github <ArrowUpRight size={16} /></a>
                </div>
            </section>
        </>
    )
}

export default ProjectsSection
