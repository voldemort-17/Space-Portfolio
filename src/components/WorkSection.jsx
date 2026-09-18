import { ArrowUpRight, Calendar, Check, MapPin, Sparkles } from 'lucide-react'

const highlights = [
  'Integrated OpenAI’s Responses API into Archer GRC to speed up support resolution and improve the in-product help experience.',
  'Modernized core jQuery flows with advanced JavaScript patterns, improving performance and reliability in high-traffic scenarios.',
  'Worked on developing applications and functionalities within Archer to streamline customer support.',
  'Designed Azure Functions to perform client-required operations using webhooks and in-app APIs provided by the LogicGate platform.',
]

const stack = ['JavaScript', 'TypeScript', 'React', 'OpenAI', 'Node.js', 'Playwright', 'Power Platform', 'Archer GRC']

const WorkSection = () => (
  <section id="work" className="relative border-y border-border/60 bg-secondary/30 py-24 sm:py-32">
    <div className="container mx-auto max-w-6xl">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow"><Sparkles size={14} /> Experience</span>
        <h2 className="section-title mt-5">Building useful systems in the <span className="text-gradient">real world.</span></h2>
        <p className="mt-5 leading-7 text-muted-foreground sm:text-lg">Product engineering experience across enterprise platforms, AI-assisted workflows, frontend modernization, and automation.</p>
      </div>

      <article className="surface-card mt-12 overflow-hidden">
        <div className="grid lg:grid-cols-[0.38fr_0.62fr]">
          <div className="relative overflow-hidden border-b border-border/70 bg-gradient-to-br from-primary/16 via-primary/5 to-sky-400/10 p-7 lg:border-b-0 lg:border-r sm:p-9">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[28px] border-primary/5" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary font-black text-primary-foreground shadow-lg shadow-primary/20">C</div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.17em] text-primary">Current role</p>
                  <h3 className="mt-1 text-xl font-bold">Product Engineer</h3>
                </div>
              </div>

              <p className="mt-8 text-2xl font-bold leading-snug">Crowe Horwath IT LLP</p>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><Calendar size={16} /> July 2024 — Present</p>
                <p className="flex items-center gap-2"><MapPin size={16} /> Noida, India · Hybrid</p>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> Currently working
              </div>

              <a href="https://www.crowe.com" target="_blank" rel="noreferrer" className="mt-10 flex w-fit items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3">
                Visit company <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="p-7 sm:p-9 lg:p-10">
            <h3 className="text-xl font-bold sm:text-2xl">Selected impact</h3>
            <p className="mt-3 leading-7 text-muted-foreground">I focus on improvements people can feel: fewer repetitive steps, faster interfaces, and clearer support journeys.</p>
            <ul className="mt-7 space-y-5">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary"><Check size={14} strokeWidth={3} /></span>
                  <span className="leading-7 text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2 border-t border-border/70 pt-7">
              {stack.map((item) => <span key={item} className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-semibold">{item}</span>)}
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
)

export default WorkSection
