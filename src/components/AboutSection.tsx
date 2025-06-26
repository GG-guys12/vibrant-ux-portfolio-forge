
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
    <section id="about" className="py-24 bg-gradient-to-r from-transparent via-dark-card/10 to-transparent">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10 animate-fade-in-up">
            <div>
              <h2 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-8">
                About Me
              </h2>
              <div className="space-y-6 text-gray-300 font-inter text-lg leading-relaxed">
                <p className="text-xl">
                  I'm a passionate UI/UX designer with over 5 years of experience creating digital experiences that make a real difference in people's lives.
                </p>
                <p>
                  My design philosophy centers around understanding user needs and translating them into intuitive, beautiful interfaces. I believe that great design is not just about making things look pretty – it's about solving problems, improving lives, and creating meaningful connections between people and technology.
                </p>
                <p>
                  When I'm not designing, you can find me exploring the latest design trends, contributing to open-source projects, or mentoring aspiring designers in the community. I'm always excited to take on new challenges and push the boundaries of what's possible in design.
                </p>
              </div>
            </div>

            {/* Skills with Progress Bars */}
            <div className="space-y-6">
              <h3 className="text-3xl font-poppins font-bold text-white">Skills & Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-orange-accent font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-accent to-orange-hover h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%`, animationDelay: `${index * 0.1}s` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Image */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-96 h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-orange-accent/10 via-transparent to-orange-accent/5 p-1 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=500&fit=crop"
                  alt="Design workspace with modern setup"
                  className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-all duration-700"
                />
              </div>
              {/* Enhanced Decorative Badge */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-orange-accent to-orange-hover rounded-2xl flex flex-col items-center justify-center text-white font-bold shadow-2xl border-4 border-dark-bg">
                <span className="text-2xl font-poppins">5+</span>
                <span className="text-xs">Years</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-orange-accent/80 to-orange-hover/80 rounded-xl flex items-center justify-center text-white font-bold shadow-xl">
                <span className="text-lg">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
