
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      company: "TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b586?w=100&h=100&fit=crop&crop=face",
      content: "Mahmood delivered exceptional UI/UX design for our SaaS platform. The user engagement increased by 40% after the redesign. His attention to detail and user-centered approach is outstanding. Highly recommended!",
      rating: 5,
      featured: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "FinanceApp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "Working with Mahmood was a game-changer for our product. His strategic thinking and design expertise resulted in a 60% improvement in our app's usability metrics. The collaboration was seamless and professional.",
      rating: 5,
      featured: false
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder",
      company: "HealthTech Solutions",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "Mahmood transformed our complex healthcare platform into an intuitive, user-friendly experience. Our customer satisfaction scores have never been higher. His design process is thorough and results-driven.",
      rating: 5,
      featured: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-dark-card/10 via-transparent to-dark-card/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6">
            Client Success Stories
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what my clients have to say about working with me and the results we've achieved together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group rounded-3xl p-8 transition-all duration-500 hover:scale-105 animate-fade-in-up backdrop-blur-sm ${
                testimonial.featured 
                  ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-br from-orange-accent/10 to-orange-accent/5 border-2 border-orange-accent/30 hover:border-orange-accent/50 hover:shadow-2xl hover:shadow-orange-accent/20' 
                  : 'bg-gradient-to-br from-dark-card/80 to-dark-card/40 border border-gray-800/50 hover:border-orange-accent/30 hover:shadow-xl hover:shadow-orange-accent/10'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote size={32} className="text-orange-accent/60" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-orange-accent fill-current"
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-300 font-inter leading-relaxed mb-8 text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-2xl object-cover mr-4 ring-2 ring-orange-accent/20 group-hover:ring-orange-accent/40 transition-all duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-accent rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-poppins font-bold text-lg group-hover:text-orange-accent transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm font-medium">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <span className="text-lg">Trusted by</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-orange-accent fill-current" />
              ))}
            </div>
            <span className="text-lg font-semibold text-orange-accent">50+ clients worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
