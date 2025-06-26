
const AboutSection = () => {
  const skills = [
    { name: 'Figma', level: 95, color: 'from-purple-500 to-pink-500' },
    { name: 'Adobe XD', level: 90, color: 'from-pink-500 to-red-500' },
    { name: 'Sketch', level: 85, color: 'from-yellow-500 to-orange-500' },
    { name: 'Photoshop', level: 88, color: 'from-blue-500 to-purple-500' },
    { name: 'Illustrator', level: 82, color: 'from-orange-500 to-red-500' },
    { name: 'Framer', level: 80, color: 'from-green-500 to-blue-500' },
    { name: 'Principle', level: 75, color: 'from-indigo-500 to-purple-500' },
    { name: 'InVision', level: 85, color: 'from-teal-500 to-green-500' }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-r from-transparent via-dark-card/10 to-transparent relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-accent/3 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-0 w-px h-1/2 bg-gradient-to-b from-transparent via-orange-accent/20 to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-px h-1/2 bg-gradient-to-b from-transparent via-orange-accent/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Enhanced Left Content */}
          <div className="space-y-12 animate-fade-in-up">
            <div>
              <div className="inline-flex items-center px-6 py-3 bg-orange-accent/10 border border-orange-accent/30 rounded-full text-orange-accent text-sm font-semibold backdrop-blur-sm mb-8">
                👋 Get to know me
              </div>
              <h2 className="text-5xl md:text-7xl font-poppins font-bold text-white mb-10 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text">
                About Me
              </h2>
              <div className="space-y-8 text-gray-300 font-inter text-lg leading-relaxed">
                <p className="text-2xl text-gray-200 font-light">
                  I'm a passionate UI/UX designer with over 5 years of experience creating digital experiences that make a real difference in people's lives.
                </p>
                <p className="text-xl">
                  My design philosophy centers around understanding user needs and translating them into intuitive, beautiful interfaces. I believe that great design is not just about making things look pretty – it's about solving problems, improving lives, and creating meaningful connections between people and technology.
                </p>
                <p className="text-xl">
                  When I'm not designing, you can find me exploring the latest design trends, contributing to open-source projects, or mentoring aspiring designers in the community. I'm always excited to take on new challenges and push the boundaries of what's possible in design.
                </p>
              </div>
            </div>

            {/* Enhanced Skills with Progress Bars */}
            <div className="space-y-8">
              <h3 className="text-4xl font-poppins font-bold text-white mb-8">Skills & Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-4 group">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold text-lg group-hover:text-orange-accent transition-colors duration-300">{skill.name}</span>
                      <span className="text-orange-accent font-bold text-lg bg-orange-accent/10 px-3 py-1 rounded-full">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800/80 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-lg relative overflow-hidden group-hover:shadow-xl`}
                        style={{ width: `${skill.level}%`, animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Right Content - Image */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative group">
              <div className="w-[28rem] h-[32rem] rounded-[3rem] overflow-hidden bg-gradient-to-br from-orange-accent/15 via-transparent to-orange-accent/10 p-2 shadow-2xl hover:shadow-orange-accent/25 transition-all duration-700">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=700&fit=crop"
                  alt="Design workspace with modern setup"
                  className="w-full h-full object-cover rounded-[2.5rem] hover:scale-105 transition-all duration-700 group-hover:brightness-110"
                />
              </div>
              
              {/* Enhanced Decorative Badges */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-r from-orange-accent to-orange-hover rounded-3xl flex flex-col items-center justify-center text-white font-bold shadow-2xl border-4 border-dark-bg group-hover:scale-110 transition-transform duration-500">
                <span className="text-3xl font-poppins">5+</span>
                <span className="text-xs font-semibold">Years</span>
              </div>
              
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-orange-accent/80 to-orange-hover/80 rounded-2xl flex items-center justify-center text-white font-bold shadow-2xl group-hover:scale-110 transition-transform duration-500 animate-bounce group-hover:animate-none">
                <span className="text-3xl">✨</span>
              </div>
              
              <div className="absolute top-1/4 -left-4 w-8 h-8 bg-orange-accent/60 rounded-full group-hover:scale-150 transition-transform duration-500 animate-pulse"></div>
              <div className="absolute bottom-1/3 -right-6 w-6 h-6 bg-orange-accent/40 rounded-full group-hover:scale-125 transition-transform duration-500 animate-pulse delay-500"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-20 -left-6 w-12 h-12 bg-orange-accent/20 rounded-2xl group-hover:rotate-12 transition-transform duration-500 animate-pulse delay-1000 backdrop-blur-sm"></div>
              <div className="absolute bottom-20 -right-4 w-10 h-10 bg-orange-accent/30 rounded-xl group-hover:-rotate-12 transition-transform duration-500 animate-pulse delay-1500 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
