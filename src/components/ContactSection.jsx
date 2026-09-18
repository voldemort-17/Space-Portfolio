import { CheckCircle2, Github, Linkedin, Mail, MapPin, Send, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { cn } from '../lib/utils'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnnbllzk'

const ContactSection = () => {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.company?.value) return

    setStatus('submitting')
    try {
      const formData = new FormData(form)
      formData.append('_subject', `Portfolio contact from ${form.name.value || 'Visitor'}`)
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error('Unable to send message')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="container mx-auto max-w-6xl">
        <div className="surface-card overflow-hidden">
          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
            <div className="relative overflow-hidden bg-gradient-to-br from-primary to-indigo-700 p-7 text-white sm:p-10 lg:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-white/5" aria-hidden="true" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.17em]"><Sparkles size={14} /> Contact</span>
                <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl">Have an idea worth building?</h2>
                <p className="mt-5 leading-7 text-white/75">Tell me what you’re working on, where you need help, or simply say hello. I’ll get back to you as soon as I can.</p>

                <div className="mt-10 space-y-5">
                  <a href="mailto:yash100sharma1706@gmail.com" className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/8 p-4 transition hover:bg-white/15">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/12"><Mail size={20} /></span>
                    <span className="min-w-0 text-left"><span className="block text-xs text-white/60">Email me</span><span className="block truncate text-sm font-semibold sm:text-base">yash100sharma1706@gmail.com</span></span>
                  </a>
                  <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/8 p-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/12"><MapPin size={20} /></span>
                    <span className="text-left"><span className="block text-xs text-white/60">Based in</span><span className="block font-semibold">Noida, India</span></span>
                  </div>
                </div>

                <div className="mt-9 flex gap-3">
                  <a href="https://github.com/voldemort-17" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition hover:bg-white hover:text-indigo-700"><Github size={19} /></a>
                  <a href="https://www.linkedin.com/in/yash-sharma-57a846232/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition hover:bg-white hover:text-indigo-700"><Linkedin size={19} /></a>
                </div>
              </div>
            </div>

            <div className="bg-card p-7 sm:p-10 lg:p-12">
              <h3 className="text-2xl font-black tracking-tight">Send a message</h3>
              <p className="mt-2 text-sm text-muted-foreground">All fields are required. No mailing lists, ever.</p>

              {status === 'success' ? (
                <div className="mt-8 flex min-h-80 flex-col items-center justify-center rounded-2xl border border-emerald-500/25 bg-emerald-500/8 p-8 text-center" role="status">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"><CheckCircle2 size={28} /></span>
                  <h4 className="mt-5 text-xl font-bold">Message received</h4>
                  <p className="mt-2 max-w-sm text-muted-foreground">Thanks for reaching out. I’ll get back to you soon.</p>
                  <button type="button" onClick={() => setStatus('idle')} className="secondary-button mt-6">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" type="text" tabIndex="-1" autoComplete="off" />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField label="Your name" name="name" placeholder="Jane Smith" autoComplete="name" />
                    <FormField label="Email address" name="email" type="email" placeholder="jane@company.com" autoComplete="email" />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold">How can I help?</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={6}
                      placeholder="A little about your project, timeline, or opportunity..."
                      required
                      className="w-full resize-none rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/65 focus:border-primary"
                    />
                  </div>
                  {status === 'error' && <p className="rounded-xl border border-red-500/20 bg-red-500/8 px-4 py-3 text-sm text-red-600 dark:text-red-400" role="alert">Something went wrong. Please try again or email me directly.</p>}
                  <button type="submit" disabled={status === 'submitting'} className={cn('cosmic-button w-full', status === 'submitting' && 'cursor-wait opacity-70')}>
                    {status === 'submitting' ? 'Sending…' : 'Send message'} <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const FormField = ({ label, name, type = 'text', placeholder, autoComplete }) => (
  <div>
    <label htmlFor={name} className="mb-2 block text-sm font-semibold">{label}</label>
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      required
      className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/65 focus:border-primary"
    />
  </div>
)

export default ContactSection
