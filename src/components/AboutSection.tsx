
const AboutSection = () => {
  const skills = [
    { name: 'Figma', level: 95 },
    { name: 'Adobe XD', level: 90 },
    { name: 'Sketch', level: 85 },
    { name: 'Photoshop', level: 88 },
    { name: 'Illustrator', level: 82 },
    { name: 'Framer', level: 80 },
    { name: 'Principle', level: 75 },
    { name: 'InVision', level: 85 }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-r from-transparent via-dark-card/10 to-transparent relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-accent/3 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-0 w-px h-1/2 bg-gradient-to-b from-transparent via-orange-accent/20 to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-px h-1/2 bg-gradient-to-b from-transparent via-orange-accent/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Enhanced Left Content */}
          <div className="space-y-10 animate-fade-in-up">
            <div>
              <div className="inline-flex items-center px-5 py-2 bg-orange-accent/10 border border-orange-accent/30 rounded-full text-orange-accent text-sm font-semibold backdrop-blur-sm mb-6">
                👋 Get to know me
              </div>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-8 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text">
                About Me
              </h2>
              <div className="space-y-6 text-gray-300 font-inter text-base leading-relaxed">
                <p className="text-lg text-gray-200 font-light">
                  I'm a passionate UI/UX designer with over 5 years of experience creating digital experiences that make a real difference in people's lives.
                </p>
                <p className="text-base">
                  My design philosophy centers around understanding user needs and translating them into intuitive, beautiful interfaces. I believe that great design is not just about making things look pretty – it's about solving problems, improving lives, and creating meaningful connections between people and technology.
                </p>
                <p className="text-base">
                  When I'm not designing, you can find me exploring the latest design trends, contributing to open-source projects, or mentoring aspiring designers in the community. I'm always excited to take on new challenges and push the boundaries of what's possible in design.
                </p>
              </div>
            </div>

            {/* Simplified Skills Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-poppins font-bold text-white mb-6">Skills & Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group text-center p-4 bg-gradient-to-br from-dark-card/60 to-dark-card/40 rounded-xl border border-gray-800/50 hover:border-orange-accent/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-orange-accent/20">
                    <div className="text-white font-semibold text-sm group-hover:text-orange-accent transition-colors duration-300 mb-2">{skill.name}</div>
                    <div className="text-orange-accent font-bold text-lg bg-orange-accent/10 px-2 py-1 rounded-lg text-xs">{skill.level}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Right Content - Image */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative group">
              <div className="w-96 h-[28rem] rounded-3xl overflow-hidden bg-gradient-to-br from-orange-accent/15 via-transparent to-orange-accent/10 p-2 shadow-2xl hover:shadow-orange-accent/25 transition-all duration-700">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=700&fit=crop"
                  alt="Design workspace with modern setup"
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-all duration-700 group-hover:brightness-110"
                />
              </div>
              
              {/* Enhanced Decorative Badges */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-orange-accent to-orange-hover rounded-2xl flex flex-col items-center justify-center text-white font-bold shadow-xl border-4 border-dark-bg group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl font-poppins">5+</span>
                <span className="text-xs font-semibold">Years</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-orange-accent/80 to-orange-hover/80 rounded-xl flex items-center justify-center text-white font-bold shadow-xl group-hover:scale-110 transition-transform duration-500 animate-bounce group-hover:animate-none">
                <span className="text-2xl">✨</span>
              </div>
              
              <div className="absolute top-1/4 -left-3 w-6 h-6 bg-orange-accent/60 rounded-full group-hover:scale-150 transition-transform duration-500 animate-pulse"></div>
              <div className="absolute bottom-1/3 -right-4 w-4 h-4 bg-orange-accent/40 rounded-full group-hover:scale-125 transition-transform duration-500 animate-pulse delay-500"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-20 -left-4 w-8 h-8 bg-orange-accent/20 rounded-xl group-hover:rotate-12 transition-transform duration-500 animate-pulse delay-1000 backdrop-blur-sm"></div>
              <div className="absolute bottom-20 -right-3 w-6 h-6 bg-orange-accent/30 rounded-lg group-hover:-rotate-12 transition-transform duration-500 animate-pulse delay-1500 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
