
const StatsSection = () => {
  const stats = [
    {
      number: "5+",
      label: "Years Experience",
      description: "Professional design experience",
      icon: "🚀"
    },
    {
      number: "50+",
      label: "Projects Completed",
      description: "Successful project deliveries",
      icon: "⚡"
    },
    {
      number: "100+",
      label: "Happy Clients",
      description: "Satisfied customers worldwide",
      icon: "❤️"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-dark-bg via-dark-card/30 to-dark-bg relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-accent/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-accent/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-accent/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2 bg-orange-accent/10 border border-orange-accent/30 rounded-full text-orange-accent text-sm font-semibold backdrop-blur-sm mb-6">
            📊 Numbers That Matter
          </div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-5 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text">
            Proven Results
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
            Building trust through consistent results and exceptional client satisfaction across every project
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl bg-gradient-to-br from-dark-card/90 via-dark-card/60 to-dark-card/40 backdrop-blur-lg border border-gray-800/50 hover:border-orange-accent/50 transition-all duration-700 hover:scale-105 hover:shadow-xl hover:shadow-orange-accent/20 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-accent/5 to-orange-hover/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              
              {/* Number */}
              <div className="text-4xl md:text-5xl font-poppins font-bold text-transparent bg-gradient-to-r from-orange-accent via-orange-hover to-orange-accent bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-500 relative z-10">
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="text-white font-poppins text-xl font-bold mb-3 group-hover:text-orange-accent transition-colors duration-500 relative z-10">
                {stat.label}
              </div>
              
              {/* Description */}
              <div className="text-gray-400 font-inter text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-500 relative z-10">
                {stat.description}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse delay-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
