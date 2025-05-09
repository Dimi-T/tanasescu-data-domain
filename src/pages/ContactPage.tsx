
import { Mail, MapPin, Phone } from 'lucide-react';
import Section from '../components/shared/Section';

const ContactPage = () => {
  return (
    <Section className="pt-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-navy mb-2 text-center">Contact Me</h1>
        <p className="text-muted-foreground text-center mb-12">Get in touch for collaborations or opportunities</p>
        
        <div className="max-w-xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="bg-accent p-3 rounded-full">
                <Mail className="h-5 w-5 text-navy" />
              </div>
              <div>
                <h3 className="font-medium text-navy">Email</h3>
                <a href="mailto:dimi.tanasescu@yahoo.com" className="text-muted-foreground hover:text-navy transition-colors">
                  dimi.tanasescu@yahoo.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-accent p-3 rounded-full">
                <MapPin className="h-5 w-5 text-navy" />
              </div>
              <div>
                <h3 className="font-medium text-navy">Location</h3>
                <p className="text-muted-foreground">
                  Bucharest, Romania
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-accent p-3 rounded-full">
                <Phone className="h-5 w-5 text-navy" />
              </div>
              <div>
                <h3 className="font-medium text-navy">Phone</h3>
                <p className="text-muted-foreground">
                  +40746456534
                </p>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-navy mb-4">Connect Online</h3>
            <div className="flex gap-4">
              <SocialButton 
                name="GitHub"
                href="https://github.com/Dimi-T/MelanoMaven" 
                icon={<GithubIcon />}
              />
              <SocialButton 
                name="LinkedIn"
                href="https://www.linkedin.com/in/dimitrie-t-43568120b/" 
                icon={<LinkedinIcon />}
              />
              <SocialButton 
                name="Email"
                href="mailto:dimi.tanasescu@yahoo.com" 
                icon={<EmailIcon />}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

interface SocialButtonProps {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const SocialButton = ({ name, href, icon }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-white border border-border px-4 py-2 rounded-md hover:bg-secondary transition-colors"
      aria-label={name}
    >
      {icon}
      <span className="font-medium text-navy">{name}</span>
    </a>
  );
};

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export default ContactPage;
