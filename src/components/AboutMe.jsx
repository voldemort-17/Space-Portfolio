import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutMe = () => {
    return (
        <>
            <section id='about' className='relative py-24 px-4'>
                <div className='container max-w-5xl m-auto'>
                    <h2 className='font-bold mb-12 text-3xl md:text-4xl text-center'>
                        About <span className='text-primary'>Me</span>
                    </h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                        <div className='space-y-6'>
                            <h3 className='text-2xl font-semibold'>Full-Stack Developer & Creative Builder</h3>

                            <p>With over 1 year of experience in Full Stack Development, I specialize in developing scalable, responsive and interactive applications using modern technologies.</p>

                            <p>I thrive on transforming ideas into interactive, real-world applications. From designing smooth user interfaces to engineering reliable back-end systems, I enjoy working across the entire stack to bring projects to life. My focus is on writing clean, efficient code and creating products that not only work well but feel great to use.</p>

                            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                                <a href="#contact" className='cosmic-button'>Connect Now !</a>
                                <a href="" className='px-6 py-2 text-primary border border-primary hover:bg-primary/10 rounded-full duration-300 transition-colors'>Download CV</a>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-6'>
                            <div className='card-hover p-6 gradient-border'>
                                <div className='flex items-start gap-4'>
                                    <div className='p-3 rounded-full bg-primary/10'>
                                        <Code className='h-6 w-6 text-primary' />
                                    </div>
                                    <div className='text-left'>
                                        <h4 className='text-lg font-semibold'>Full Stack Development</h4>
                                        <p>Creating seamless digital experiences by bridging design and development across the full stack.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='card-hover p-6 gradient-border'>
                                <div className='flex items-start gap-4'>
                                    <div className='p-3 rounded-full bg-primary/10'>
                                        <User className='h-6 w-6 text-primary' />
                                    </div>
                                    <div className='text-left'>
                                        <h4 className='text-lg font-semibold'>UI/UX Design</h4>
                                        <p>Passionate about turning complex ideas into simple, beautiful designs..</p>
                                    </div>
                                </div>
                            </div>
                            <div className='card-hover p-6 gradient-border'>
                                <div className='flex items-start gap-4'>
                                    <div className='p-3 rounded-full bg-primary/10'>
                                        <Briefcase className='h-6 w-6 text-primary' />
                                    </div>
                                    <div className='text-left'>
                                        <h4 className='text-lg font-semibold'>Project Development</h4>
                                        <p>Turning ideas into polished solutions through clear planning, efficient execution, and continuous iteration.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe
