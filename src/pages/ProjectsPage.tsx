
import { Github } from 'lucide-react';
import { Button } from '../components/ui/button';
import Section from '../components/shared/Section';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'MelanoMaven – Deep Learning for Melanoma Detection',
      description: 'MelanoMaven is a deep learning pipeline for detecting melanoma from dermoscopic images. Built using Inception V3 and VGG16 architectures trained on the ISIC dataset, it performs robust image classification and integrates into a Telegram bot for real-time user interaction. Features include image preprocessing, model training, evaluation with metrics like F1-score, and deployment.',
      techStack: ['Python', 'PyTorch', 'Keras', 'Pandas', 'Telegram Bot API'],
      github: 'https://github.com/Dimi-T/MelanoMaven',
      image: '/melanomaven.png',
    },
    {
      title: 'AudioMaven',
      description: 'AudioMaven is an accent classifier developed for the REMWaste Coding Challenge. It allows users to analyze spoken English from online Youtube videos and classify the speaker\'s accent using a pre-trained model, also providing the training piepline. The model is build using a simple, yet powerful Convolutional Recurrent Neural Network architecture.',
      techStack: ['Python', 'TensorFlow', 'Librosa', 'Scikit-learn', 'Matplotlib'],
      github: 'https://github.com/Dimi-T/AudioMaven---REMWaste-Challenge',
      image: '/audio_maven.png',
    }
  ];

  return (
    <>
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-navy mb-2 text-center">Projects</h1>
          <p className="text-muted-foreground text-center mb-12">Exploring my technical portfolio</p>
          
          {/* Projects list */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="animate-on-scroll">
                <div className="bg-white rounded-lg overflow-hidden border border-border shadow-sm">
                  <div className="aspect-video bg-lightgray flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-navy mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
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
                          href={project.github}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          <Github size={18} /> View on GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default ProjectsPage;
