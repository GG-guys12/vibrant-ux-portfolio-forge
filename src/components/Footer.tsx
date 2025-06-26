
import { Instagram, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="mb-6 md:mb-0">
            <div className="font-poppins font-bold text-2xl text-orange-accent mb-2">
              LOGO
            </div>
            <p className="text-gray-400 text-sm">
              Designed by Mahmood Fazile – All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:border-orange-accent hover:text-orange-accent transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:border-orange-accent hover:text-orange-accent transition-all duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:border-orange-accent hover:text-orange-accent transition-all duration-300"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Mahmood Fazile. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
