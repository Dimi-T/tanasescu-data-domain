
import { Briefcase, GraduationCap, Code, Award } from 'lucide-react';
import Section from '../components/shared/Section';

const AboutPage = () => {
  return (
    <>
      <Section className="pt-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-navy mb-6 text-center">About Me</h1>
          
          <div className="mb-12 animate-on-scroll">
            <p className="text-lg leading-relaxed mb-4">
              I'm a Bucharest-based Machine Learning and Verification Engineer with industry experience in cybersecurity-applied data science (CrowdStrike), chip design verification (Capgemini), and DevOps (IBM).
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I hold a BEng in Computer Science and Systems Engineering from University Politehnica of Bucharest and completed an Erasmus+ exchange at University of Groningen focusing on AI and numerical methods.
            </p>
            <p className="text-lg leading-relaxed">
              I'm passionate about building intelligent, robust systems — from machine learning pipelines to hardware verification flows — and I love bridging the gap between data, code, and infrastructure.
            </p>
          </div>
        </div>
      </Section>

      <Section title="My Experience" background="light">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <ExperienceItem
              title="Data Scientist"
              company="CrowdStrike"
              period="2021 - Present"
              description="Developing machine learning models for cybersecurity threat detection and prevention. Working with large-scale data pipelines and implementing MLOps best practices."
              icon={<Briefcase className="h-6 w-6 text-navy" />}
            />
            
            <ExperienceItem
              title="Verification Engineer"
              company="Capgemini"
              period="2019 - 2021"
              description="Designed and implemented verification environments for complex SoC designs. Developed automated testing frameworks and conducted functional verification using SystemVerilog and UVM."
              icon={<Code className="h-6 w-6 text-navy" />}
            />
            
            <ExperienceItem
              title="DevOps Intern"
              company="IBM"
              period="2018 - 2019"
              description="Assisted in maintaining and improving CI/CD pipelines. Contributed to infrastructure automation and monitoring solutions using Docker, Kubernetes, and various cloud technologies."
              icon={<Briefcase className="h-6 w-6 text-navy" />}
            />
          </div>
        </div>
      </Section>

      <Section title="Education">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <ExperienceItem
              title="BEng Computer Science and Systems Engineering"
              company="University Politehnica of Bucharest"
              period="2015 - 2019"
              description="Focus on computer architecture, algorithms, and systems engineering. Graduated with honors."
              icon={<GraduationCap className="h-6 w-6 text-navy" />}
            />
            
            <ExperienceItem
              title="Erasmus+ Exchange Program"
              company="University of Groningen"
              period="2018"
              description="Focused on Artificial Intelligence and numerical methods. Completed research project on neural network optimization."
              icon={<GraduationCap className="h-6 w-6 text-navy" />}
            />
          </div>
        </div>
      </Section>

      <Section title="Skills" background="light">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillCategory
              title="Data Science & ML"
              skills={[
                "Python (PyTorch, TensorFlow, Scikit-learn)",
                "Deep Learning & Computer Vision",
                "NLP & Time Series Analysis",
                "Feature Engineering",
                "Model Deployment & MLOps"
              ]}
            />
            
            <SkillCategory
              title="Software Development"
              skills={[
                "Python, C++, Java",
                "Version Control (Git)",
                "CI/CD Pipelines",
                "Docker & Kubernetes",
                "Microservices Architecture"
              ]}
            />
            
            <SkillCategory
              title="Hardware & Verification"
              skills={[
                "SystemVerilog & UVM",
                "RTL Design",
                "FPGA Programming",
                "Digital Signal Processing",
                "Hardware Simulation"
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Certifications">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CertificationCard
              title="AWS Certified Machine Learning - Specialty"
              issuer="Amazon Web Services"
              date="2022"
            />
            
            <CertificationCard
              title="Professional Data Scientist"
              issuer="DataCamp"
              date="2021"
            />
            
            <CertificationCard
              title="TensorFlow Developer Certificate"
              issuer="Google"
              date="2020"
            />
            
            <CertificationCard
              title="FPGA Design for System Designers"
              issuer="Xilinx"
              date="2019"
            />
          </div>
        </div>
      </Section>
    </>
  );
};

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: React.ReactNode;
}

const ExperienceItem = ({ title, company, period, description, icon }: ExperienceItemProps) => {
  return (
    <div className="flex gap-4 animate-on-scroll">
      <div className="mt-1 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-accent">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-navy">{title}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
          <span className="text-navy-light font-medium">{company}</span>
          <span className="hidden sm:inline text-muted-foreground">•</span>
          <span className="text-muted-foreground text-sm">{period}</span>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-border animate-on-scroll">
      <h3 className="text-navy font-semibold text-lg mb-3">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start">
            <span className="text-navy-light mr-2">•</span>
            <span className="text-muted-foreground">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
}

const CertificationCard = ({ title, issuer, date }: CertificationCardProps) => {
  return (
    <div className="border border-border p-5 rounded-lg shadow-sm animate-on-scroll">
      <div className="flex items-start gap-3">
        <Award className="h-6 w-6 text-navy flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-navy">{title}</h3>
          <p className="text-muted-foreground text-sm">{issuer} • {date}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
