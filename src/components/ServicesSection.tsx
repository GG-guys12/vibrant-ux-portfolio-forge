
import { Palette, Users, Smartphone, Monitor, Figma, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Palette size={48} />,
      title: "UI Design",
      description: "Creating beautiful and intuitive user interfaces that captivate users and drive engagement through thoughtful design decisions."
    },
    {
      icon: <Users size={48} />,
      title: "UX Strategy",
      description: "Developing comprehensive user-centered strategies that align business goals with user needs for maximum impact."
    },
    {
      icon: <Smartphone size={48} />,
      title: "Mobile Design",
      description: "Designing responsive mobile experiences that work seamlessly across all devices and screen sizes."
    },
    {
      icon: <Monitor size={48} />,
      title: "Web Design",
      description: "Building modern, fast, and accessible websites that convert visitors into loyal customers."
    },
    {
      icon: <Figma size={48} />,
      title: "Prototyping",
      description: "Creating interactive prototypes that bring ideas to life and validate concepts before development."
    },
    {
      icon: <Zap size={48} />,
      title: "Brand Identity",
      description: "Developing cohesive brand identities that communicate your values and resonate with your audience."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-dark-card/20 to-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6">
            What I Do
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            I specialize in creating digital experiences that are not only visually stunning but also highly functional and user-friendly. Every project is crafted with attention to detail and user needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-gradient-to-br from-dark-bg/80 to-dark-card/60 border border-gray-800/50 hover:border-orange-accent/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-accent/10 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-orange-accent mb-8 group-hover:scale-110 group-hover:text-orange-hover transition-all duration-300 flex items-center justify-center w-20 h-20 bg-orange-accent/10 rounded-2xl mx-auto group-hover:bg-orange-accent/20">
                {service.icon}
              </div>
              <h3 className="text-2xl font-poppins font-bold text-white mb-4 text-center group-hover:text-orange-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
