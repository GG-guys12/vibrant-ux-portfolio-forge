
import { Button } from '@/components/ui/button';
import { Instagram, Github, Mail, Download, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-dark-card/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-accent/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-accent/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Left Content */}
          <div className="space-y-10 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-orange-accent/10 border border-orange-accent/30 rounded-full text-orange-accent text-sm font-medium backdrop-blur-sm">
                ✨ Available for new projects
              </div>
              <p className="text-gray-300 text-xl font-inter font-light">Hi I am</p>
              <h1 className="text-gray-100 text-4xl md:text-5xl font-poppins font-semibold leading-tight">
                Mahmood Fazile
              </h1>
              <h2 className="text-orange-accent text-6xl md:text-8xl font-poppins font-bold leading-none bg-gradient-to-r from-orange-accent via-orange-hover to-orange-accent bg-clip-text text-transparent animate-pulse">
                UI/UX designer
              </h2>
              <p className="text-gray-300 text-xl font-inter leading-relaxed max-w-xl">
                Creating exceptional digital experiences that combine beautiful design with intuitive functionality. Let's transform your vision into stunning reality.
              </p>
            </div>

            {/* Enhanced Social Icons */}
            <div className="flex space-x-6">
              <a
                href="#"
                className="group w-16 h-16 bg-gradient-to-br from-dark-card to-dark-card/80 border border-gray-700 rounded-2xl flex items-center justify-center hover:border-orange-accent hover:text-orange-accent hover:bg-orange-accent/10 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-accent/25 hover:-translate-y-1"
              >
                <Instagram size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="group w-16 h-16 bg-gradient-to-br from-dark-card to-dark-card/80 border border-gray-700 rounded-2xl flex items-center justify-center hover:border-orange-accent hover:text-orange-accent hover:bg-orange-accent/10 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-accent/25 hover:-translate-y-1"
              >
                <Github size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="group w-16 h-16 bg-gradient-to-br from-dark-card to-dark-card/80 border border-gray-700 rounded-2xl flex items-center justify-center hover:border-orange-accent hover:text-orange-accent hover:bg-orange-accent/10 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-accent/25 hover:-translate-y-1"
              >
                <Mail size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-orange-accent to-orange-hover hover:from-orange-hover hover:to-orange-accent text-white px-10 py-6 rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-orange-accent/30 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Hire Me
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-hover to-orange-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
              <Button 
                variant="outline"
                className="group border-2 border-gray-600 text-white hover:border-orange-accent hover:text-orange-accent bg-transparent hover:bg-orange-accent/5 px-10 py-6 rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 backdrop-blur-sm"
              >
                <Download size={20} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Enhanced Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative group">
              <div className="w-96 h-[32rem] md:w-[28rem] md:h-[36rem] rounded-[3rem] overflow-hidden bg-gradient-to-br from-orange-accent/20 via-transparent to-orange-accent/10 p-2 shadow-2xl hover:shadow-orange-accent/20 transition-all duration-700">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                  alt="Mahmood Fazile - UI/UX Designer"
                  className="w-full h-full object-cover rounded-[2.5rem] hover:scale-105 transition-all duration-700 group-hover:brightness-110"
                />
              </div>
              {/* Enhanced Decorative elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-orange-accent to-orange-hover rounded-3xl animate-pulse shadow-2xl flex items-center justify-center text-white font-bold text-lg border-4 border-dark-bg group-hover:scale-110 transition-transform duration-500">
                <div className="text-center">
                  <div className="text-2xl font-poppins">5+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-orange-accent/80 to-orange-hover/80 rounded-2xl flex items-center justify-center text-white font-bold shadow-2xl animate-bounce group-hover:animate-none group-hover:scale-110 transition-transform duration-500">
                <span className="text-3xl">✨</span>
              </div>
              <div className="absolute top-1/3 -left-6 w-6 h-6 bg-orange-accent/60 rounded-full animate-pulse delay-500 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute top-2/3 -right-4 w-4 h-4 bg-orange-accent/40 rounded-full animate-pulse delay-700 group-hover:scale-125 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
