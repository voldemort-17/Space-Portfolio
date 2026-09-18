import { useState } from 'react'
import { Braces, CodeXml, Database, PanelsTopLeft, Settings2, Sparkles } from 'lucide-react'
import { cn } from '../lib/utils'

const skills = [
  { name: 'React', detail: 'Core', category: 'frontend' },
  { name: 'JavaScript', detail: 'Advanced', category: 'frontend' },
  { name: 'TypeScript', detail: 'Proficient', category: 'frontend' },
  { name: 'HTML & CSS', detail: 'Advanced', category: 'frontend' },
  { name: 'Tailwind CSS', detail: 'Advanced', category: 'frontend' },
  { name: 'Accessibility', detail: 'Practiced', category: 'frontend' },
  { name: 'Node.js', detail: 'Proficient', category: 'backend' },
  { name: 'Express.js', detail: 'Proficient', category: 'backend' },
  { name: 'MongoDB', detail: 'Proficient', category: 'backend' },
  { name: 'SQL', detail: 'Proficient', category: 'backend' },
  { name: 'REST APIs', detail: 'Advanced', category: 'backend' },
  { name: 'Prisma', detail: 'Working knowledge', category: 'backend' },
  { name: 'Git & GitHub', detail: 'Daily use', category: 'tools' },
  { name: 'Playwright', detail: 'Proficient', category: 'tools' },
  { name: 'Postman', detail: 'Advanced', category: 'tools' },
  { name: 'OpenAI APIs', detail: 'Production use', category: 'tools' },
  { name: 'Power Platform', detail: 'Production use', category: 'tools' },
  { name: 'VS Code', detail: 'Daily use', category: 'tools' },
]

const categories = [
  { id: 'all', label: 'All skills', icon: Braces },
  { id: 'frontend', label: 'Frontend', icon: PanelsTopLeft },
  { id: 'backend', label: 'Backend', icon: Database },
  { id: 'tools', label: 'Tools & AI', icon: Settings2 },
]

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const filteredSkills = skills.filter((skill) => activeCategory === 'all' || skill.category === activeCategory)

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-14">
          <div>
            <span className="eyebrow"><CodeXml size={14} /> Toolkit</span>
            <h2 className="section-title mt-5">Tools I use to turn ideas into <span className="text-gradient">reliable products.</span></h2>
            <p className="mt-5 leading-7 text-muted-foreground">A practical stack shaped by shipping interfaces, APIs, automations, and AI-enabled workflows.</p>

            <div className="mt-8 flex flex-wrap gap-2 lg:flex-col" role="group" aria-label="Filter skills by category">
              {categories.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  aria-pressed={activeCategory === id}
                  onClick={() => setActiveCategory(id)}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition lg:w-full',
                    activeCategory === id
                      ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/15'
                      : 'border-border bg-card/60 text-muted-foreground hover:border-primary/30 hover:text-foreground',
                  )}
                >
                  <Icon size={17} /> {label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid content-start gap-3 sm:grid-cols-2" aria-live="polite">
            {filteredSkills.map((skill) => (
              <article key={skill.name} className="surface-card card-hover flex items-center justify-between gap-4 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary"><Sparkles size={16} /></span>
                  <h3 className="font-bold">{skill.name}</h3>
                </div>
                <span className="text-right text-xs font-medium text-muted-foreground">{skill.detail}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
