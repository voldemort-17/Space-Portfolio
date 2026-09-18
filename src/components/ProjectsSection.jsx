import { ArrowUpRight, Github, Heart, MessageCircle, Send, Sparkles, Users } from 'lucide-react'

const projects = [
  {
    id: 'portfolio',
    number: '01',
    title: 'Yash’s Portfolio',
    type: 'Personal portfolio',
    description: 'A responsive portfolio designed to make experience, capabilities, and selected work easy to scan. Built with reusable React components, theme support, accessible interactions, and a working contact flow.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Formspree'],
    githubUrl: 'https://github.com/voldemort-17/Space-Portfolio',
    liveUrl: '#home',
    liveLabel: 'You’re viewing it',
    image: '/Portfolio.png',
  },
  {
    id: 'converse',
    number: '02',
    title: 'Converse',
    type: 'Full-stack social platform',
    description: 'A modern social experience with profiles, posts, stories, friendships, notifications, media uploads, and authenticated user journeys—built on a type-safe Next.js stack.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Clerk', 'Cloudinary'],
    githubUrl: 'https://github.com/voldemort-17/converse_ys',
    liveUrl: 'https://converseys.vercel.app/',
    liveLabel: 'View live app',
  },
]

const ConversePreview = () => (
  <div className="relative h-full min-h-64 overflow-hidden bg-[#f1f5ff] p-5 text-slate-800 dark:bg-[#111426] sm:p-7" aria-hidden="true">
    <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-white/60 bg-white shadow-2xl shadow-indigo-900/15 dark:border-white/10 dark:bg-[#191d32] dark:text-slate-100">
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-white/10">
        <span className="font-black tracking-tight text-indigo-600 dark:text-indigo-400">converse</span>
        <div className="flex gap-2"><span className="h-7 w-16 rounded-full bg-slate-100 dark:bg-white/10" /><span className="h-7 w-7 rounded-full bg-indigo-100 dark:bg-indigo-400/20" /></div>
      </div>
      <div className="grid grid-cols-[72px_1fr] gap-3 p-3">
        <div className="space-y-3 rounded-xl bg-slate-50 p-2 dark:bg-white/5">
          {[Users, Heart, MessageCircle].map((Icon, index) => <div key={index} className="grid h-8 place-items-center rounded-lg bg-white text-indigo-500 shadow-sm dark:bg-white/10"><Icon size={14} /></div>)}
        </div>
        <div>
          <div className="mb-3 flex gap-2">
            {['YS', 'AS', 'MK', '+'].map((item) => <div key={item} className="grid h-9 w-9 place-items-center rounded-full border-2 border-indigo-400 bg-indigo-50 text-[9px] font-bold text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-300">{item}</div>)}
          </div>
          <div className="rounded-xl border border-slate-100 p-3 dark:border-white/10">
            <div className="flex items-center gap-2"><span className="h-7 w-7 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-300" /><div><div className="h-2 w-20 rounded bg-slate-200 dark:bg-white/20" /><div className="mt-1 h-1.5 w-12 rounded bg-slate-100 dark:bg-white/10" /></div></div>
            <div className="mt-3 h-20 rounded-lg bg-gradient-to-br from-indigo-100 via-purple-100 to-cyan-100 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-cyan-500/20" />
            <div className="mt-3 flex gap-3 text-slate-400"><Heart size={14} /><MessageCircle size={14} /><Send size={14} /></div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-indigo-400/25 blur-2xl" />
  </div>
)

const ProjectsSection = () => (
  <section id="projects" className="relative border-y border-border/60 bg-secondary/30 py-24 sm:py-32">
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <span className="eyebrow"><Sparkles size={14} /> Selected work</span>
          <h2 className="section-title mt-5">Two projects, built with <span className="text-gradient">purpose.</span></h2>
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">A focused selection that shows how I approach both polished interfaces and full-stack product workflows.</p>
        </div>
        <a href="https://github.com/voldemort-17" target="_blank" rel="noreferrer" className="secondary-button w-fit">More on GitHub <ArrowUpRight size={16} /></a>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.id} className="surface-card card-hover group flex h-full flex-col overflow-hidden">
            <div className="relative h-64 overflow-hidden border-b border-border/70">
              {project.image ? (
                <img src={project.image} alt="Yash's portfolio home page" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]" />
              ) : (
                <ConversePreview />
              )}
              <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-slate-950/70 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">{project.type}</span>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <span className="font-mono text-xs font-bold text-primary">PROJECT {project.number}</span>
                  <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">{project.title}</h3>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-secondary/50 text-primary transition group-hover:rotate-45"><ArrowUpRight size={18} /></span>
              </div>
              <p className="mt-4 flex-1 leading-7 text-muted-foreground">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={tag} className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-semibold">{tag}</span>)}
              </div>
              <div className="mt-7 flex flex-wrap gap-3 border-t border-border/70 pt-6">
                <a
                  href={project.liveUrl}
                  target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
                  rel={project.liveUrl.startsWith('http') ? 'noreferrer' : undefined}
                  className="cosmic-button"
                >
                  {project.liveLabel} <ArrowUpRight size={16} />
                </a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="secondary-button" aria-label={`View ${project.title} source code on GitHub`}><Github size={17} /> Source code</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default ProjectsSection
