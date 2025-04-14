
import { cn } from '../../lib/utils';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  background?: 'white' | 'light' | 'navy';
}

const Section = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className, 
  fullWidth = false,
  background = 'white'
}: SectionProps) => {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-lightgray',
    navy: 'bg-navy text-white'
  };

  return (
    <section 
      id={id}
      className={cn(
        'py-12 md:py-20',
        bgClasses[background],
        className
      )}
    >
      <div className={fullWidth ? '' : 'container mx-auto px-4 md:px-6'}>
        {(title || subtitle) && (
          <div className="text-center mb-12 animate-on-scroll">
            {title && (
              <h2 
                className={cn(
                  "font-display text-3xl md:text-4xl font-semibold mb-3",
                  background === 'navy' ? 'text-white' : 'text-navy'
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p 
                className={cn(
                  "max-w-2xl mx-auto text-lg",
                  background === 'navy' ? 'text-gray-300' : 'text-muted-foreground'
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
