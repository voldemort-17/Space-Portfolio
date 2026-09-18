import { ArrowLeft, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <main className="grid min-h-screen place-items-center bg-background px-5 text-foreground">
    <div className="surface-card max-w-lg p-8 text-center sm:p-12">
      <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary/10 text-primary"><Compass size={30} /></span>
      <p className="mt-7 font-mono text-sm font-bold text-primary">404 · PAGE NOT FOUND</p>
      <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">This page drifted out of orbit.</h1>
      <p className="mt-4 leading-7 text-muted-foreground">The link may be outdated, or the page may have moved. The homepage is still right where you left it.</p>
      <Link to="/" className="cosmic-button mt-7"><ArrowLeft size={17} /> Back to portfolio</Link>
    </div>
  </main>
)

export default NotFound
