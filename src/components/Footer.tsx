
import { Instagram, Github, Mail, Heart, ArrowUp, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Instagram size={24} />, href: "#", label: "Instagram" },
    { icon: <Github size={24} />, href: "#", label: "GitHub" },
    { icon: <Mail size={24} />, href: "mailto:hello@mahmoodfazile.com", label: "Email" }
  ];

  const footerLinks = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms of Service", href: "#" },
    { text: "Cookie Policy", href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-t from-black via-dark-bg to-dark-bg py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-accent/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/2 w-px h-20 bg-gradient-to-b from-orange-accent/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-12 md:space-y-0">
          {/* Enhanced Logo and Description */}
          <div className="text-center md:text-left max-w-md">
            <div className="font-poppins font-bold text-4xl mb-6 group">
              <span className="text-orange-accent group-hover:scale-110 transition-transform duration-300 inline-block">M</span>
              <span className="text-white">ahmood</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Creating exceptional digital experiences through thoughtful design and user-centered solutions that make a lasting impact.
            </p>
            <div className="flex items-center space-x-2 text-green-400 text-sm">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-semibold">Available for freelance & full-time opportunities</span>
            </div>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex flex-col items-center space-y-6">
            <p className="text-gray-400 text-sm font-semibold">Follow me on</p>
            <div className="flex space-x-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group w-16 h-16 bg-gradient-to-br from-dark-card to-dark-card/80 border border-gray-700 rounded-2xl flex items-center justify-center text-gray-400 hover:border-orange-accent hover:text-orange-accent hover:bg-orange-accent/10 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-accent/25 hover:-translate-y-1"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Divider */}
        <div className="border-t border-gradient-to-r from-transparent via-gray-800 to-transparent mb-12"></div>

        {/* Enhanced Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <p className="text-gray-500 text-base flex items-center">
              © {currentYear} Mahmood Fazile. Made with 
              <Heart size={18} className="text-orange-accent mx-2 fill-current animate-pulse" />
              All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-orange-accent text-sm">
              <Star size={16} className="fill-current" />
              <span className="font-semibold">Rated 5.0 by 50+ clients</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-8 text-sm">
              {footerLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-gray-500 hover:text-orange-accent transition-colors duration-300 relative group"
                >
                  {link.text}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group w-12 h-12 bg-gradient-to-br from-orange-accent/20 to-orange-accent/10 border border-orange-accent/30 rounded-xl flex items-center justify-center text-orange-accent hover:bg-orange-accent hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
