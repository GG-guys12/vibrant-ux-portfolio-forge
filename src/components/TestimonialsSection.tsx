
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b586?w=120&h=120&fit=crop&crop=face",
      content: "Mahmood delivered exceptional UI/UX design for our SaaS platform. The user engagement increased by 40% after the redesign. His attention to detail and user-centered approach is outstanding. Working with him was a game-changer for our business.",
      rating: 5,
      featured: true,
      projectValue: "$50k+",
      industry: "SaaS"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "FinanceApp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
      content: "Working with Mahmood was a transformative experience for our product. His strategic thinking and design expertise resulted in a 60% improvement in our app's usability metrics. The collaboration was seamless, professional, and exceeded all expectations.",
      rating: 5,
      featured: false,
      projectValue: "$75k+",
      industry: "Fintech"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder",
      company: "HealthTech Solutions",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
      content: "Mahmood transformed our complex healthcare platform into an intuitive, user-friendly experience. Our customer satisfaction scores have never been higher. His design process is thorough, results-driven, and truly innovative.",
      rating: 5,
      featured: false,
      projectValue: "$100k+",
      industry: "Healthcare"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-r from-dark-card/15 via-transparent to-dark-card/15 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-accent/5 via-transparent to-transparent"></div>
      <div className="absolute top-20 left-1/4 w-1 h-32 bg-gradient-to-b from-orange-accent/30 to-transparent rotate-12"></div>
      <div className="absolute bottom-20 right-1/4 w-1 h-32 bg-gradient-to-t from-orange-accent/30 to-transparent -rotate-12"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-orange-accent/10 border border-orange-accent/30 rounded-full text-orange-accent text-sm font-semibold backdrop-blur-sm mb-8">
            ⭐ Testimonials
          </div>
          <h2 className="text-5xl md:text-7xl font-poppins font-bold text-white mb-8 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text">
            Client Success Stories
          </h2>
          <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what my clients have to say about working with me and the remarkable results we've achieved together through innovative design solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group rounded-[2rem] p-10 transition-all duration-700 hover:scale-105 animate-fade-in-up backdrop-blur-lg relative overflow-hidden ${
                testimonial.featured 
                  ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-br from-orange-accent/15 via-orange-accent/8 to-orange-accent/5 border-2 border-orange-accent/40 hover:border-orange-accent/60 hover:shadow-2xl hover:shadow-orange-accent/25' 
                  : 'bg-gradient-to-br from-dark-card/90 via-dark-card/60 to-dark-card/40 border border-gray-800/50 hover:border-orange-accent/40 hover:shadow-xl hover:shadow-orange-accent/15'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Enhanced Background Pattern */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-orange-accent to-transparent group-hover:opacity-10 transition-opacity duration-500"></div>
              
              {/* Header with Quote and Rating */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <Quote size={40} className="text-orange-accent/60 group-hover:text-orange-accent/80 transition-colors duration-300" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-orange-accent fill-current group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>

              {/* Industry & Project Value Badges */}
              <div className="flex gap-3 mb-6 relative z-10">
                <span className="px-3 py-1 text-xs font-semibold bg-orange-accent/20 text-orange-accent rounded-full border border-orange-accent/30">
                  {testimonial.industry}
                </span>
                <span className="px-3 py-1 text-xs font-semibold bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                  {testimonial.projectValue}
                </span>
              </div>

              {/* Enhanced Content */}
              <p className="text-gray-300 font-inter leading-relaxed mb-10 text-lg group-hover:text-gray-200 transition-colors duration-300 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Enhanced Author Section */}
              <div className="flex items-center relative z-10">
                <div className="relative mr-5">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-2xl object-cover ring-2 ring-orange-accent/30 group-hover:ring-orange-accent/50 transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-accent to-orange-hover rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-poppins font-bold text-xl group-hover:text-orange-accent transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-base font-semibold">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Statistics Footer */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center justify-center space-x-6 p-8 bg-gradient-to-r from-dark-card/60 to-dark-card/40 rounded-3xl backdrop-blur-lg border border-gray-800/50">
            <div className="flex items-center space-x-3 text-gray-400">
              <span className="text-2xl font-bold">Trusted by</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="text-orange-accent fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-orange-accent">50+ clients worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
