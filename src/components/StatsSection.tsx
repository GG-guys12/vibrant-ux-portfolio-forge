
const StatsSection = () => {
  const stats = [
    {
      number: "5+",
      label: "Experiences"
    },
    {
      number: "20+",
      label: "Project done"
    },
    {
      number: "80+",
      label: "Happy Clients"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-dark-card/50 backdrop-blur-sm border border-gray-800 hover:border-orange-accent/30 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl md:text-5xl font-poppins font-bold text-orange-accent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-inter text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
