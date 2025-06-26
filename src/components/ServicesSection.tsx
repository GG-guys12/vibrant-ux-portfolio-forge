
import { Palette, Users, Smartphone, Monitor, Figma, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Palette size={56} />,
      title: "UI Design",
      description: "Creating beautiful and intuitive user interfaces that captivate users and drive engagement through thoughtful design decisions and modern aesthetics.",
      gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
      icon: <Users size={56} />,
      title: "UX Strategy",
      description: "Developing comprehensive user-centered strategies that align business goals with user needs for maximum impact and conversion optimization.",
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: <Smartphone size={56} />,
      title: "Mobile Design",
      description: "Designing responsive mobile experiences that work seamlessly across all devices and screen sizes with pixel-perfect precision.",
      gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
      icon: <Monitor size={56} />,
      title: "Web Design",
      description: "Building modern, fast, and accessible websites that convert visitors into loyal customers through strategic design and optimization.",
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
      icon: <Figma size={56} />,
      title: "Prototyping",
      description: "Creating interactive prototypes that bring ideas to life and validate concepts before development, saving time and resources.",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: <Zap size={56} />,
      title: "Brand Identity",
      description: "Developing cohesive brand identities that communicate your values and resonate with your audience across all touchpoints.",
      gradient: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-dark-card/20 via-transparent to-dark-card/10 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-accent/3 via-transparent to-transparent"></div>
      <div className="absolute top-20 left-20 w-2 h-2 bg-orange-accent/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-3 h-3 bg-orange-accent/30 rounded-full animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-orange-accent/10 border border-orange-accent/30 rounded-full text-orange-accent text-sm font-semibold backdrop-blur-sm mb-8">
            🎨 My Expertise
          </div>
          <h2 className="text-5xl md:text-7xl font-poppins font-bold text-white mb-8 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text">
            What I Do
          </h2>
          <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
            I specialize in creating digital experiences that are not only visually stunning but also highly functional and user-friendly. Every project is crafted with meticulous attention to detail and deep understanding of user needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-10 rounded-[2rem] bg-gradient-to-br from-dark-bg/90 via-dark-card/70 to-dark-card/50 border border-gray-800/50 hover:border-orange-accent/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-orange-accent/15 backdrop-blur-lg animate-fade-in-up relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service-specific gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              {/* Icon Container */}
              <div className="relative z-10 text-orange-accent mb-10 group-hover:scale-110 group-hover:text-orange-hover transition-all duration-500 flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-accent/15 to-orange-accent/5 rounded-3xl mx-auto group-hover:bg-orange-accent/25 border border-orange-accent/20 group-hover:border-orange-accent/40">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="relative z-10 text-3xl font-poppins font-bold text-white mb-6 text-center group-hover:text-orange-accent transition-colors duration-500">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="relative z-10 text-gray-300 font-inter leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-500 text-lg">
                {service.description}
              </p>
              
              {/* Decorative Elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-orange-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-orange-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse delay-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
