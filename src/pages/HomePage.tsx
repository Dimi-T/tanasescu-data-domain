
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import Section from '../components/shared/Section';

const HomePage = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('featured-project');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy/10 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 z-10 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-navy animate-fade-in">
                Dimitrie Tănăsescu
              </h1>
              <p className="mt-3 text-xl md:text-2xl font-medium text-navy-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Data Scientist
              </p>
              <p className="mt-6 text-muted-foreground max-w-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
                Data Scientist & Machine Learning Engineer with experience across data science, cybersecurity, RTL design, and AI-powered health tech. I enjoy building robust, scalable systems and solving hard data problems.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Button asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/about">About Me</Link>
                </Button>
              </div>
              
              <div className="mt-8 flex items-center gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <a 
                  href="https://github.com/Dimi-T/MelanoMaven" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-navy hover:text-navy-light transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/dimitrie-t-43568120b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-navy hover:text-navy-light transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a 
                  href="mailto:contact@example.com" 
                  className="text-navy hover:text-navy-light transition-colors"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-lightgray flex items-center justify-center">
                {/* Placeholder for profile image */}
                <div className="text-navy text-lg">Profile Photo</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-navy animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={36} />
        </button>
      </section>

      {/* Featured Project Section */}
      <Section 
        id="featured-project"
        title="Featured Project"
        subtitle="Check out my latest machine learning project"
        background="light"
      >
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-display font-semibold text-navy mb-3">
                MelanoMaven – Deep Learning for Melanoma Detection
              </h3>
              <p className="text-muted-foreground mb-6">
                MelanoMaven is a deep learning pipeline for detecting melanoma from dermoscopic images. 
                Built using Inception V3 and VGG16 architectures trained on the ISIC dataset, it performs 
                robust image classification and integrates into a Telegram bot for real-time user interaction. 
                Features include image preprocessing, model training, evaluation with metrics like F1-score, and deployment.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary text-navy-light px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-secondary text-navy-light px-3 py-1 rounded-full text-sm">PyTorch</span>
                  <span className="bg-secondary text-navy-light px-3 py-1 rounded-full text-sm">Keras</span>
                  <span className="bg-secondary text-navy-light px-3 py-1 rounded-full text-sm">Pandas</span>
                  <span className="bg-secondary text-navy-light px-3 py-1 rounded-full text-sm">Telegram Bot API</span>
                </div>
              </div>
              
              <Button asChild>
                <a href="https://github.com/Dimi-T/MelanoMaven" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <Github size={18} /> View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <Button variant="outline" asChild>
            <Link to="/projects" className="inline-flex items-center gap-2">
              View All Projects <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Documents Preview Section */}
      <Section title="Professional Documents" subtitle="Access my resume, cover letter, and references">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll">
          {['Resume', 'Cover Letter', 'Reference Letter'].map((doc) => (
            <div key={doc} className="bg-white border border-border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4 text-navy">
                  <FileIcon />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{doc}</h3>
                <p className="text-muted-foreground text-sm flex-grow mb-4">View or download my professional {doc.toLowerCase()}.</p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/documents" className="w-full justify-center">View Document</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <Button asChild>
            <Link to="/documents" className="inline-flex items-center gap-2">
              See All Documents <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="navy">
        <div className="text-center max-w-xl mx-auto animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">Interested in Collaborating?</h2>
          <p className="text-gray-300 mb-8">I'm always open to discussing product design work or partnership opportunities.</p>
          <Button asChild className="bg-white text-navy hover:bg-gray-100">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </Section>
    </>
  );
};

// File icon component
const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
  </svg>
);

export default HomePage;
