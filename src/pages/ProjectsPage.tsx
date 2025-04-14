
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import Section from '../components/shared/Section';

const ProjectsPage = () => {
  const featuredProject = {
    title: 'MelanoMaven – Deep Learning for Melanoma Detection',
    description: 'MelanoMaven is a deep learning pipeline for detecting melanoma from dermoscopic images. Built using Inception V3 and VGG16 architectures trained on the ISIC dataset, it performs robust image classification and integrates into a Telegram bot for real-time user interaction. Features include image preprocessing, model training, evaluation with metrics like F1-score, and deployment.',
    techStack: ['Python', 'PyTorch', 'Keras', 'Pandas', 'Telegram Bot API'],
    github: 'https://github.com/Dimi-T/MelanoMaven',
    image: '/placeholder.svg',
  };

  const otherProjects = [
    {
      title: 'Predictive Maintenance ML Pipeline',
      description: 'Built an end-to-end machine learning pipeline for predictive maintenance of industrial equipment. Implemented time series forecasting and anomaly detection algorithms.',
      techStack: ['Python', 'Scikit-learn', 'TensorFlow', 'Apache Airflow', 'Docker'],
      github: 'https://github.com/Dimi-T',
    },
    {
      title: 'Secure File Storage System',
      description: 'Developed a secure, encrypted file storage solution with client-side encryption, access controls, and audit logging capabilities.',
      techStack: ['Java', 'Spring Boot', 'ReactJS', 'AWS S3', 'PostgreSQL'],
      github: 'https://github.com/Dimi-T',
    },
    {
      title: 'RTL Design Verification Framework',
      description: 'Created a reusable verification framework for complex digital designs using UVM. Implemented coverage-driven verification methodologies.',
      techStack: ['SystemVerilog', 'UVM', 'Python', 'Tcl', 'Jenkins'],
      github: 'https://github.com/Dimi-T',
    },
  ];

  return (
    <>
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-navy mb-2 text-center">Projects</h1>
          <p className="text-muted-foreground text-center mb-12">Exploring my technical portfolio</p>
          
          {/* Featured Project */}
          <div className="mb-16 animate-on-scroll">
            <h2 className="section-heading">Featured Project</h2>
            
            <div className="bg-white rounded-lg overflow-hidden border border-border shadow-sm">
              <div className="aspect-video bg-lightgray flex items-center justify-center">
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.title}
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-display font-semibold text-navy mb-3">
                  {featuredProject.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {featuredProject.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-secondary text-navy-light px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a 
                      href={featuredProject.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <Github size={18} /> View on GitHub
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a 
                      href="https://github.com/Dimi-T/MelanoMaven"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Other Projects */}
          <div className="animate-on-scroll">
            <h2 className="section-heading">Other Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <div 
                  key={project.title}
                  className="bg-white rounded-lg border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-navy mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span 
                            key={tech} 
                            className="bg-secondary text-navy-light px-2 py-0.5 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="text-muted-foreground text-xs">+{project.techStack.length - 3} more</span>
                        )}
                      </div>
                    </div>
                    
                    <Button size="sm" variant="outline" asChild>
                      <a 
                        href={project.github}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <Github size={16} /> View Code
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ProjectsPage;
