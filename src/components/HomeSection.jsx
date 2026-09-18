import { ArrowDown, ArrowRight, Braces, Github, Linkedin, MapPin, Sparkles } from 'lucide-react'

const stats = [
  { value: '2+', label: 'Years building' },
  { value: '3–4', label: 'Personal projects' },
  { value: 'Full-stack', label: 'Product mindset' },
]

const HomeSection = () => (
  <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28 sm:pt-32">
    <div className="section-grid absolute inset-0 -z-10" aria-hidden="true" />
    <div className="absolute left-[8%] top-24 -z-10 h-72 w-72 rounded-full bg-primary/12 blur-3xl" aria-hidden="true" />
    <div className="absolute bottom-16 right-[4%] -z-10 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" aria-hidden="true" />

    <div className="container mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
      <div className="text-center lg:text-left">
        <div className="opacity-0 animate-fade-in">
          <span className="eyebrow">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for meaningful projects
          </span>
        </div>

        <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-[-0.04em] opacity-0 animate-fade-in-delay-1 sm:text-6xl lg:text-7xl">
          I build products that feel
          <span className="text-gradient"> simple, fast, and human.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground opacity-0 animate-fade-in-delay-2 sm:text-lg lg:mx-0">
          I’m Yash Sharma, a full-stack developer turning complex ideas into polished web experiences—from intuitive React interfaces to reliable APIs and automation.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 opacity-0 animate-fade-in-delay-3 sm:flex-row lg:justify-start">
          <a href="#projects" className="cosmic-button w-full sm:w-auto">
            View selected work <ArrowRight size={17} />
          </a>
          <a href="#contact" className="secondary-button w-full sm:w-auto">Let’s work together</a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground opacity-0 animate-fade-in-delay-4 lg:justify-start">
          <span className="flex items-center gap-1.5"><MapPin size={15} /> Noida, India</span>
          <span className="h-4 w-px bg-border" />
          <a href="https://github.com/voldemort-17" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="transition hover:text-primary"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/yash-sharma-57a846232/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="transition hover:text-primary"><Linkedin size={18} /></a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-lg opacity-0 animate-fade-in-delay-3">
        <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/25 to-sky-400/20 blur-2xl" />
        <div className="surface-card overflow-hidden p-2 sm:p-3">
          <div className="rounded-[1.25rem] border border-border/80 bg-background/85 p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-border/70 pb-4">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">yash.build</span>
              <Braces size={17} className="text-primary" />
            </div>

            <div className="py-7 text-left font-mono text-sm leading-7 sm:text-base">
              <p><span className="text-sky-500">const</span> developer = {'{'}</p>
              <p className="pl-5">name: <span className="text-emerald-500">'Yash Sharma'</span>,</p>
              <p className="pl-5">focus: <span className="text-emerald-500">'Useful products'</span>,</p>
              <p className="pl-5">craft: [<span className="text-emerald-500">'React'</span>, <span className="text-emerald-500">'Node'</span>, <span className="text-emerald-500">'AI'</span>],</p>
              <p className="pl-5">principle: <span className="text-emerald-500">'Clarity over clutter'</span></p>
              <p>{'}'}</p>
            </div>

            <div className="grid grid-cols-3 gap-2 border-t border-border/70 pt-5">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-secondary/65 px-2 py-3 text-center">
                  <div className="text-sm font-bold text-primary sm:text-base">{stat.value}</div>
                  <div className="mt-0.5 text-[10px] leading-tight text-muted-foreground sm:text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute -right-4 -top-5 hidden items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold shadow-xl sm:flex animate-float">
          <Sparkles size={17} className="text-primary" /> Thoughtful by default
        </div>
      </div>
    </div>

    <a href="#about" aria-label="Scroll to about section" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-muted-foreground transition hover:text-primary md:flex">
      Explore <ArrowDown size={16} className="animate-bounce" />
    </a>
  </section>
)

export default HomeSection
