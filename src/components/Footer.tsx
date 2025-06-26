
import { Instagram, Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-black to-dark-bg py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Enhanced Logo and Description */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="font-poppins font-bold text-3xl mb-4">
              <span className="text-orange-accent">M</span>
              <span className="text-white">ahmood</span>
            </div>
            <p className="text-gray-400 text-lg max-w-md">
              Creating exceptional digital experiences through thoughtful design and user-centered solutions.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Available for freelance & full-time opportunities
            </p>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-12 h-12 bg-dark-card border border-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:border-orange-accent hover:text-orange-accent hover:bg-orange-accent/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-dark-card border border-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:border-orange-accent hover:text-orange-accent hover:bg-orange-accent/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="w-12 h-12 bg-dark-card border border-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:border-orange-accent hover:text-orange-accent hover:bg-orange-accent/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0 flex items-center">
              © {currentYear} Mahmood Fazile. Made with 
              <Heart size={16} className="text-orange-accent mx-1 fill-current" />
              All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-orange-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-orange-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
