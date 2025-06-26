
import { Button } from '@/components/ui/button';
import { Instagram, Github, Mail, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-gray-300 text-lg font-inter">Hi I am</p>
              <h1 className="text-gray-300 text-3xl md:text-4xl font-poppins font-medium">
                Mahmood Fazile
              </h1>
              <h2 className="text-orange-accent text-5xl md:text-7xl font-poppins font-bold leading-tight">
                UI/UX designer
              </h2>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 border border-gray-600 rounded-lg flex items-center justify-center hover:border-orange-accent hover:text-orange-accent transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-gray-600 rounded-lg flex items-center justify-center hover:border-orange-accent hover:text-orange-accent transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="w-12 h-12 border border-gray-600 rounded-lg flex items-center justify-center hover:border-orange-accent hover:text-orange-accent transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-accent hover:bg-orange-hover text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Hire Me
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-gray-600 text-white hover:border-orange-accent hover:text-orange-accent bg-transparent px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105"
              >
                <Download size={20} className="mr-2" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-80 h-96 md:w-96 md:h-[28rem] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-accent/20 to-transparent p-1">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                  alt="Mahmood Fazile - UI/UX Designer"
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-accent/60 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
