import { ArrowUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-12 bg-card px-4 relative border-t border-border mt-12 pt-8  flex flex-wrap justify-between'>
        <p>
      &copy; {new Date().getFullYear()} Yash Sharma, All rights reserved.
        </p>
        <a href="#home" className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors'>
            <ArrowUp size={20}/>
        </a>
    </footer>
  )
}

export default Footer
