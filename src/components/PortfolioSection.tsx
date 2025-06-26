
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      tags: ["Mobile", "UX", "Figma", "React Native"],
      description: "Complete mobile shopping experience with intuitive navigation, personalized recommendations, and seamless checkout process that increased conversion by 45%.",
      featured: true,
      category: "Mobile App",
      duration: "3 months"
    },
    {
      id: 2,
      title: "SaaS Analytics Dashboard",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      tags: ["Web", "UI", "Dashboard", "React"],
      description: "Modern analytics dashboard with real-time data visualization, customizable widgets, and advanced filtering capabilities for enterprise clients.",
      featured: true,
      category: "Web Platform",
      duration: "4 months"
    },
    {
      id: 3,
      title: "Banking App Redesign",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
      tags: ["Mobile", "Fintech", "UX", "Security"],
      description: "Complete redesign of banking app focusing on security, accessibility, and user-friendly financial management with biometric authentication.",
      featured: false,
      category: "Fintech",
      duration: "5 months"
    },
    {
      id: 4,
      title: "Restaurant Booking Platform",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      tags: ["Web", "Branding", "UI", "Next.js"],
      description: "Modern restaurant booking platform with real-time availability, menu integration, and social features that boosted reservations by 60%.",
      featured: false,
      category: "Web Platform",
      duration: "2 months"
    },
    {
      id: 5,
      title: "Healthcare Management System",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      tags: ["Web", "Healthcare", "UX", "HIPAA"],
      description: "Comprehensive patient management system with appointment scheduling, medical records, and telemedicine features ensuring HIPAA compliance.",
      featured: false,
      category: "Healthcare",
      duration: "6 months"
    },
    {
      id: 6,
      title: "Travel Planning App",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      tags: ["Mobile", "Travel", "UI", "Flutter"],
      description: "Complete travel planning experience with itinerary management, booking integration, and social sharing features for modern travelers.",
      featured: false,
      category: "Travel",
      duration: "4 months"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-dark-card/20 via-transparent to-dark-card/10 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-accent/5 via-transparent to-transparent"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-orange-accent/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-32 w-3 h-3 bg-orange-accent/30 rounded-full animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-5 py-2 bg-orange-accent/10 border border-orange-accent/30 rounded-full text-orange-accent text-sm font-semibold backdrop-blur-sm mb-6">
            💼 My Work
          </div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent works that showcase my design skills, problem-solving abilities, and attention to user experience details. Each project tells a unique story of transformation and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group rounded-2xl overflow-hidden border transition-all duration-700 hover:scale-[1.02] animate-fade-in-up relative ${
                project.featured 
                  ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-br from-dark-bg/95 via-dark-card/80 to-dark-card/60 border-orange-accent/40 hover:border-orange-accent/70 hover:shadow-xl hover:shadow-orange-accent/25' 
                  : 'bg-gradient-to-br from-dark-bg/90 via-dark-card/70 to-dark-card/50 border-gray-800/50 hover:border-orange-accent/50 hover:shadow-lg hover:shadow-orange-accent/15'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    project.featured ? 'h-64 md:h-72' : 'h-48'
                  }`}
                />
                
                {/* Project Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-orange-accent/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                  {project.category}
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-dark-bg/80 text-orange-accent text-xs font-medium rounded-full backdrop-blur-sm border border-orange-accent/30">
                  {project.duration}
                </div>
              </div>
              
              {/* Enhanced Content */}
              <div className={`p-6 ${project.featured ? 'md:p-8' : 'p-6'} relative`}>
                <h3 className={`font-poppins font-bold text-white mb-3 group-hover:text-orange-accent transition-colors duration-500 flex items-center justify-between ${
                  project.featured ? 'text-2xl md:text-3xl' : 'text-xl'
                }`}>
                  {project.title}
                  <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>
                
                <p className={`text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 ${
                  project.featured ? 'text-base' : 'text-sm'
                }`}>
                  {project.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex space-x-3 mb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-orange-accent/50 text-orange-accent hover:bg-orange-accent hover:text-white backdrop-blur-md font-semibold text-xs px-3 py-1 h-8"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 backdrop-blur-md font-semibold text-xs px-3 py-1 h-8"
                  >
                    <Github size={14} className="mr-1" />
                    Code
                  </Button>
                </div>
                
                {/* Enhanced Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-orange-accent/20 to-orange-accent/10 text-orange-accent rounded-full border border-orange-accent/30 hover:bg-orange-accent/30 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="outline"
            className="group border-2 border-orange-accent text-orange-accent hover:bg-orange-accent hover:text-white px-8 py-5 rounded-xl font-semibold text-base transition-all duration-500 hover:scale-105 backdrop-blur-sm"
          >
            View All Projects
            <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
