
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["Mobile", "UX", "Figma", "React Native"],
      description: "Complete mobile shopping experience with intuitive navigation, personalized recommendations, and seamless checkout process.",
      featured: true
    },
    {
      id: 2,
      title: "SaaS Analytics Dashboard",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      tags: ["Web", "UI", "Dashboard", "React"],
      description: "Modern analytics dashboard with real-time data visualization, customizable widgets, and advanced filtering capabilities.",
      featured: true
    },
    {
      id: 3,
      title: "Banking App Redesign",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
      tags: ["Mobile", "Fintech", "UX", "Security"],
      description: "Complete redesign of banking app focusing on security, accessibility, and user-friendly financial management.",
      featured: false
    },
    {
      id: 4,
      title: "Restaurant Booking Platform",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      tags: ["Web", "Branding", "UI", "Next.js"],
      description: "Modern restaurant booking platform with real-time availability, menu integration, and social features.",
      featured: false
    },
    {
      id: 5,
      title: "Healthcare Management System",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      tags: ["Web", "Healthcare", "UX", "HIPAA"],
      description: "Comprehensive patient management system with appointment scheduling, medical records, and telemedicine features.",
      featured: false
    },
    {
      id: 6,
      title: "Travel Planning App",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
      tags: ["Mobile", "Travel", "UI", "Flutter"],
      description: "Complete travel planning experience with itinerary management, booking integration, and social sharing features.",
      featured: false
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-dark-card/20 to-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent works that showcase my design skills, problem-solving abilities, and attention to user experience details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group rounded-3xl overflow-hidden border transition-all duration-500 hover:scale-[1.02] animate-fade-in-up ${
                project.featured 
                  ? 'md:col-span-2 bg-gradient-to-br from-dark-bg/90 to-dark-card/70 border-orange-accent/30 hover:border-orange-accent/60 hover:shadow-2xl hover:shadow-orange-accent/20' 
                  : 'bg-gradient-to-br from-dark-bg/80 to-dark-card/60 border-gray-800/50 hover:border-orange-accent/40 hover:shadow-xl hover:shadow-orange-accent/10'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    project.featured ? 'h-64 md:h-80' : 'h-56'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/80 text-white hover:bg-orange-accent hover:border-orange-accent backdrop-blur-sm"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/80 text-white hover:bg-gray-800 hover:border-gray-600 backdrop-blur-sm"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className={`p-8 ${project.featured ? 'md:p-10' : ''}`}>
                <h3 className={`font-poppins font-bold text-white mb-3 group-hover:text-orange-accent transition-colors duration-300 ${
                  project.featured ? 'text-2xl md:text-3xl' : 'text-xl'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-gray-400 mb-6 leading-relaxed ${
                  project.featured ? 'text-lg' : 'text-sm'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 text-xs font-medium bg-orange-accent/20 text-orange-accent rounded-full border border-orange-accent/30 hover:bg-orange-accent/30 transition-colors duration-300"
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
            className="border-2 border-orange-accent text-orange-accent hover:bg-orange-accent hover:text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
