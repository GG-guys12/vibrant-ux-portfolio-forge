
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-poppins font-bold text-2xl text-orange-accent">
            LOGO
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-orange-accent transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-orange-accent transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-orange-accent transition-colors font-medium"
            >
              About me
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-300 hover:text-orange-accent transition-colors font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-orange-accent transition-colors font-medium"
            >
              Contact me
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-orange-accent hover:bg-orange-hover text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Hire Me
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-orange-accent transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-white hover:text-orange-accent transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-300 hover:text-orange-accent transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-300 hover:text-orange-accent transition-colors font-medium"
              >
                About me
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-gray-300 hover:text-orange-accent transition-colors font-medium"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-300 hover:text-orange-accent transition-colors font-medium"
              >
                Contact me
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-orange-accent hover:bg-orange-hover text-white px-6 py-2 rounded-lg font-medium w-fit"
              >
                Hire Me
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
