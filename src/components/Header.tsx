
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'about', 'portfolio', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-dark-bg/95 backdrop-blur-2xl shadow-2xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="font-poppins font-bold text-3xl group cursor-pointer">
            <span className="text-orange-accent group-hover:scale-110 transition-transform duration-300 inline-block">M</span>
            <span className="text-white group-hover:text-gray-300 transition-colors duration-300">ahmood</span>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-base font-semibold transition-all duration-300 hover:text-orange-accent relative py-2 group ${
                  activeSection === item.id ? 'text-orange-accent' : 'text-gray-300'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-accent to-orange-hover rounded-full"></div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-accent to-orange-hover rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-orange-accent to-orange-hover hover:from-orange-hover hover:to-orange-accent text-white px-8 py-3 rounded-xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-lg shadow-orange-accent/30 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Hire Me
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-orange-accent transition-colors p-3 rounded-xl hover:bg-orange-accent/10 backdrop-blur-sm"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-8 pb-8 border-t border-gray-700/50 bg-gradient-to-br from-dark-card/90 to-dark-card/70 backdrop-blur-2xl rounded-3xl mx-4 mt-6 border border-gray-800/50">
            <div className="flex flex-col space-y-6 pt-8 px-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left font-semibold transition-all duration-300 py-3 text-lg relative group ${
                    activeSection === item.id 
                      ? 'text-orange-accent' 
                      : 'text-gray-300 hover:text-orange-accent hover:translate-x-2'
                  }`}
                >
                  {item.label}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-accent to-orange-hover rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-orange-accent to-orange-hover text-white px-8 py-4 rounded-xl font-semibold w-fit mt-6 hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Hire Me
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
