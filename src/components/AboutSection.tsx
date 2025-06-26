
const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
                About Me
              </h2>
              <div className="space-y-6 text-gray-300 font-inter text-lg leading-relaxed">
                <p>
                  I'm a passionate UI/UX designer with over 5 years of experience creating digital experiences that make a difference. My design philosophy centers around understanding user needs and translating them into intuitive, beautiful interfaces.
                </p>
                <p>
                  I believe that great design is not just about making things look pretty – it's about solving problems, improving lives, and creating meaningful connections between people and technology.
                </p>
                <p>
                  When I'm not designing, you can find me exploring the latest design trends, contributing to open-source projects, or mentoring aspiring designers in the community.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-2xl font-poppins font-semibold text-white">Core Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'Framer', 'Principle', 'InVision'].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-dark-card/50 px-4 py-2 rounded-lg text-center text-gray-300 hover:text-orange-accent hover:bg-orange-accent/10 transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-accent/20 to-transparent p-1">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop"
                  alt="Design workspace"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-orange-accent/80 rounded-full flex items-center justify-center text-white font-bold">
                5+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
