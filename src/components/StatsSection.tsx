
const StatsSection = () => {
  const stats = [
    {
      number: "5+",
      label: "Years Experience",
      description: "Professional design experience"
    },
    {
      number: "50+",
      label: "Projects Completed",
      description: "Successful project deliveries"
    },
    {
      number: "100+",
      label: "Happy Clients",
      description: "Satisfied customers worldwide"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-dark-bg via-dark-card/30 to-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
            Numbers That Matter
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Building trust through consistent results and exceptional client satisfaction
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-10 rounded-3xl bg-gradient-to-br from-dark-card/80 to-dark-card/40 backdrop-blur-sm border border-gray-800/50 hover:border-orange-accent/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-accent/10 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-5xl md:text-6xl font-poppins font-bold text-transparent bg-gradient-to-r from-orange-accent to-orange-hover bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-white font-poppins text-xl font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-gray-400 font-inter text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
