import {
    Facebook,
    Instagram,
    LinkedinIcon,
    Mail,
    MapPin,
    Phone,
    Send,
    TwitterIcon,
} from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '../lib/utils';

const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => setIsSubmitting(false), 1500);
    };

    return (
        <section id='contact' className='py-24 px-4 bg-secondary/30 relative'>
            <div className='container mx-auto max-w-6xl'>
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>
                    Get In <span className='text-primary'>Touch</span>
                </h2>
                <p className='text-center max-w-2xl mx-auto text-base md:text-lg mb-12 text-muted-foreground'>
                    Looking forward to collaborating on impactful projects. If you have an idea, opportunity, or challenge where my skills can contribute, let’s connect and make it happen.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {/* Contact Info Section */}
                    <div className='space-y-10'>
                        <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
                        <div className='space-y-6'>
                            <ContactItem Icon={Mail} label='Email' value='yash100sharma1706@gmail.com' href='mailto:yash100sharma1706@gmail.com' />
                            <ContactItem Icon={Phone} label='Phone' value='+91-8076034598' href='tel:+918076034598' />
                            <ContactItem Icon={MapPin} label='Location' value='Faridabad, Haryana' />
                        </div>

                        <div className='pt-8 flex justify-center items-center flex-col' >
                            <h4 className='mb-4 font-semibold text-lg'>Connect With Me</h4>
                            <div className='flex space-x-4 items-center'>
                                <SocialIcon href='https://www.linkedin.com/in/yash-sharma-57a846232/' Icon={LinkedinIcon} />
                                <SocialIcon href='#' Icon={TwitterIcon} />
                                <SocialIcon href='#' Icon={Instagram} />
                                <SocialIcon href='#' Icon={Facebook} />
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className='bg-card p-8 rounded-xl shadow-sm border border-border'>
                        <h3 className='text-2xl font-semibold mb-6'>Send A Message</h3>
                        <form onSubmit={handleSubmit} className='space-y-5'>
                            <FormField label='Your Name' type='text' name='name' placeholder='Sam Anakamy' required />
                            <FormField label='Your Email' type='email' name='email' placeholder='sam@gmail.com' required />
                            <div>
                                <label htmlFor='message' className='mb-2 text-sm block font-medium'>Your Message</label>
                                <textarea
                                    name='message'
                                    id='message'
                                    rows={5}
                                    placeholder='Please type your message here...'
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none'
                                />
                            </div>
                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className={cn(
                                    'cosmic-button w-full flex items-center justify-center gap-2 py-3',
                                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                )}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

const ContactItem = ({ Icon, label, value, href }) => (
    <div className="flex items-center gap-4 group px-5 py-4 rounded-xl border border-border bg-muted/10 hover:bg-muted/20 transition-all duration-300 hover:shadow-md">
      {/* Icon */}
      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
      </div>
  
      {/* Text - full width & left-aligned */}
      <div className="flex flex-col justify-center flex-grow text-left">
        <p className="text-sm font-semibold group-hover:text-primary transition-colors leading-tight">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="text-sm text-muted-foreground group-hover:text-primary transition-colors break-words leading-tight"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm text-muted-foreground leading-tight">{value}</p>
        )}
      </div>
    </div>
  );
  

// Social Icon Component
const SocialIcon = ({ href, Icon }) => (
    <a href={href} target='_blank' rel='noopener noreferrer' className='text-muted-foreground hover:text-primary transition'>
        <Icon className='w-5 h-5' />
    </a>
);

// Form Input Component
const FormField = ({ label, type, name, placeholder, required }) => (
    <div>
        <label htmlFor={name} className='mb-2 text-sm block font-medium'>{label}</label>
        <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            required={required}
            className='w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary'
        />
    </div>
);
