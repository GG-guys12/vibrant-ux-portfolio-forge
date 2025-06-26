
import { Palette, Users, Smartphone, Monitor } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Palette size={40} />,
      title: "UI Design",
      description: "Creating beautiful and intuitive user interfaces that captivate and engage users."
    },
    {
      icon: <Users size={40} />,
      title: "UX Strategy",
      description: "Developing user-centered strategies that drive business goals and user satisfaction."
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Design",
      description: "Designing responsive mobile experiences that work seamlessly across all devices."
    },
    {
      icon: <Monitor size={40} />,
      title: "Web Design",
      description: "Building modern, fast, and accessible websites that convert visitors into customers."
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
            What I Do
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I specialize in creating digital experiences that are not only visually stunning but also highly functional and user-friendly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-dark-bg border border-gray-800 hover:border-orange-accent/50 transition-all duration-300 hover:scale-105 hover:bg-dark-card/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-orange-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-poppins font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed">
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
