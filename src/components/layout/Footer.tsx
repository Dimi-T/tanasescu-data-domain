
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Name and Info */}
          <div>
            <h3 className="font-display font-semibold text-xl mb-3">Dimitrie Tănăsescu</h3>
            <p className="text-sm text-gray-300 mb-4">Data Scientist & Machine Learning Engineer</p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Dimi-T/MelanoMaven" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/dimitrie-t-43568120b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:dimi.tanasescu@yahoo.com" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/documents" className="text-gray-300 hover:text-white transition-colors">Documents</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Documents */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Documents</h3>
            <ul className="space-y-2">
              <li><Link to="/documents" className="text-gray-300 hover:text-white transition-colors">Resume</Link></li>
              <li><Link to="/documents" className="text-gray-300 hover:text-white transition-colors">Cover Letter</Link></li>
              <li><Link to="/documents" className="text-gray-300 hover:text-white transition-colors">Reference Letter</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Get In Touch</h3>
            <p className="text-sm text-gray-300 mb-2">Have a project in mind? Let's work together!</p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-navy px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} Dimitrie Tănăsescu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
