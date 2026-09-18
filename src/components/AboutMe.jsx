import { ArrowUpRight, Code2, Layers3, Lightbulb, Users } from 'lucide-react'

const strengths = [
  { icon: Code2, title: 'End-to-end engineering', text: 'From accessible interfaces to dependable APIs, I build across the stack with one consistent product goal.' },
  { icon: Lightbulb, title: 'Practical problem solving', text: 'I turn fuzzy requirements into clear flows, reusable systems, and solutions that are easy to maintain.' },
  { icon: Users, title: 'Collaborative delivery', text: 'I communicate early, iterate with feedback, and keep technical decisions connected to real user needs.' },
]

const AboutMe = () => (
  <section id="about" className="relative py-24 sm:py-32">
    <div className="container mx-auto max-w-6xl">
      <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <span className="eyebrow"><Layers3 size={14} /> About me</span>
          <h2 className="section-title mt-5">Engineering with <span className="text-gradient">curiosity and care.</span></h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
            I’m a full-stack developer with 2+ years of experience creating responsive applications, workflow automations, and AI-assisted experiences.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            I enjoy the space where design and engineering meet: simplifying complex journeys, making interfaces feel effortless, and building the systems that keep them reliable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="cosmic-button">Start a conversation</a>
            <a
              href="https://drive.google.com/file/d/1iaFfRZvbAH5AliCLoJ_hidWWJysK8Iy8/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              View résumé <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          {strengths.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="surface-card card-hover group p-6 sm:p-7">
              <div className="flex items-start gap-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-primary">0{index + 1}</span>
                    <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
                  </div>
                  <p className="mt-2 leading-7 text-muted-foreground">{text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default AboutMe
