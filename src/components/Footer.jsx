import { ArrowUp, Github, Linkedin } from 'lucide-react'

const Footer = () => (
  <footer className="relative z-10 border-t border-border/70 bg-card/40 py-8">
    <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
      <div>
        <p className="font-bold">Yash Sharma</p>
        <p className="mt-1 text-sm text-muted-foreground">Designed and built with care · © {new Date().getFullYear()}</p>
      </div>
      <div className="flex items-center gap-2">
        <a href="https://github.com/voldemort-17" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-primary"><Github size={18} /></a>
        <a href="https://www.linkedin.com/in/yash-sharma-57a846232/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-primary"><Linkedin size={18} /></a>
        <span className="mx-1 h-6 w-px bg-border" />
        <a href="#home" aria-label="Back to top" className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground transition hover:-translate-y-1"><ArrowUp size={18} /></a>
      </div>
    </div>
  </footer>
)

export default Footer
