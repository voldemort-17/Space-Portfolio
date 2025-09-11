import React, { memo } from 'react'
import {
  Calendar,
  MapPin,
  Globe,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Laptop
} from 'lucide-react'
import { cn } from '../lib/utils'

const exp = {
  company: 'Crowe Horwath IT LLP',
  role: 'Product Engineer - Hybrid',
  period: 'Jul 2024 — Present',
  location: 'Bengaluru, IN',
  site: 'https://www.crowe.com',
  status: 'Currently Working',
  highlights: [
    "Integrated OpenAI’s Responses API into Archer GRC for an AI chatbot—accelerated support resolution and boosted user satisfaction.",
    "Modernized core codebase from jQuery to advanced JavaScript, improving performance and handling complex scenarios under heavy traffic.",
    "Built Archer GRC custom apps to optimize record management with robust API-driven cross-application functionality.",
    "Led full automation for Archer GRC and cross-platform workflows (Playwright UI automation, Power Platform → Azure DevOps to NEST migrations) using dynamic queries and trigger-based flows."
  ],
  stack: ['React', 'OpenAI', 'Advanced JS', 'TypeScript', 'TailwindCSS', 'Node.js', 'Playwright', 'Power Platform', 'Archer GRC', 'JQuery']
}

const HERO_STATS = [
  { label: 'Years', value: '1+' },
  { label: 'Projects', value: '10+' },
  { label: 'Perf Wins', value: 'A+' }
]

const HERO_STACK = ['React', 'JavaScript', 'Tailwind', 'TypeScript', 'Node', 'Express', 'MongoDB', 'OpenAI']

function WorkSection() {
  return (
    <section id="work" className="relative py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Work <span className="text-primary">Experience</span>
        </h2>

        {/* smart two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Hero summary (glass + gradient) */}
          <aside className="lg:col-span-5 h-full">
            <div
              className={cn(
                'relative h-full overflow-hidden rounded-2xl shadow-xs card-hover',
                'p-6 sm:p-8 gradient-border',
                'bg-gradient-to-br from-primary/15 via-background/60 to-background/40',
                'backdrop-blur-md'
              )}
              aria-label="Current Company Summary"
            >
              {/* corner sparkles */}
              <Sparkles className="absolute -right-6 -top-6 h-24 w-24 opacity-20 text-primary pointer-events-none" />

              {/* brand chip */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-primary/15 text-primary font-bold">
                  C
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wide opacity-70">Current Company</p>
                  <h3 className="text-xl font-semibold leading-tight">{exp.company}</h3>
                </div>
              </div>

              {/* hero sentence */}
              <p className="mt-4 text-sm opacity-80 leading-relaxed text-left">
                I craft <span className="text-primary font-medium">performant, accessible UIs</span>,
                wire clean APIs, and ship reusable patterns—so products look sharp and feel fast.
              </p>

              {/* stats */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {HERO_STATS.map((s) => (
                  <div key={s.label} className="rounded-xl border bg-secondary/20 px-4 py-5 text-center">
                    <div className="text-2xl font-bold text-primary">{s.value}</div>
                    <div className="text-xs opacity-80 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* stack */}
              <div className="mt-6 flex flex-wrap gap-2">
                {HERO_STACK.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium border bg-secondary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-14 flex">
                <a
                  href="#contact"
                  className="cosmic-button inline-flex items-center gap-2 mx-auto"
                >
                  Let’s collaborate <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </aside>

          {/* Right: Experience card */}
          <article className="lg:col-span-7 h-full">
            <div
              className="h-full rounded-2xl p-6 sm:p-8 gradient-border bg-card card-hover flex flex-col text-left"
              aria-label="Experience Details"
            >
              {/* HEADER — single divider, compact spacing */}
              <header className="pb-4 border-b border-border/30">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  {/* Role + Company */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">{exp.company}</p>
                  </div>

                  {/* Visit site button */}
                  {exp.site && (
                    <a
                      href={exp.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium px-3 py-1.5 rounded-lg border bg-secondary/20 hover:bg-secondary/30 hover:text-primary transition-all"
                    >
                      Visit Site
                      <Globe className="h-4 w-4" />
                    </a>
                  )}
                </div>

                {/* Meta row */}
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm">
                  {/* status pill — gradient, glow, live pulse */}
                  <span className="flex items-center gap-1 opacity-80">
                    <Laptop className="h-4 w-4" /> {exp.status}
                  </span>

                  <span className="flex items-center gap-1 opacity-80">
                    <Calendar className="h-4 w-4" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1 opacity-80">
                    <MapPin className="h-4 w-4" /> {exp.location}
                  </span>
                </div>
              </header>

              {/* Content */}
              <p className="mt-5 text-sm md:text-base leading-relaxed opacity-90">
                Driving <span className="text-primary font-medium">AI-assisted workflows</span> and
                <span className="text-primary font-medium"> high-performance frontends</span> for Archer GRC—modern, scalable, and automation-first.
              </p>

              {/* highlights (left-aligned, no boxes) */}
              <ul className="space-y-4 mt-3">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-1 text-primary shrink-0" />
                    <p className="text-sm md:text-base leading-relaxed">{h}</p>
                  </li>
                ))}
              </ul>

              {/* footer divider + stack chips */}
              <div className="mt-6 border-t border-border/30 pt-6 flex flex-wrap gap-2">
                {exp.stack.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium border bg-secondary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default memo(WorkSection)
