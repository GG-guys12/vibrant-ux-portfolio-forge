
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["Mobile", "UX", "Figma"],
      description: "Complete mobile shopping experience design"
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      tags: ["Web", "UI", "Dashboard"],
      description: "Modern analytics dashboard interface"
    },
    {
      id: 3,
      title: "Banking App Redesign",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
      tags: ["Mobile", "Fintech", "UX"],
      description: "Simplified banking experience design"
    },
    {
      id: 4,
      title: "Restaurant Website",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      tags: ["Web", "Branding", "UI"],
      description: "Modern restaurant web presence"
    },
    {
      id: 5,
      title: "Healthcare Platform",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      tags: ["Web", "Healthcare", "UX"],
      description: "Patient management system design"
    },
    {
      id: 6,
      title: "Travel App",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
      tags: ["Mobile", "Travel", "UI"],
      description: "Complete travel booking experience"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-dark-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent works that showcase my design skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-dark-bg rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-accent/50 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white text-white hover:bg-orange-accent hover:border-orange-accent"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Project
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-orange-accent/20 text-orange-accent rounded-full border border-orange-accent/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
