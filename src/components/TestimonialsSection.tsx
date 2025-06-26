
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b586?w=80&h=80&fit=crop&crop=face",
      content: "Mahmood delivered exceptional UI/UX design for our SaaS platform. The user engagement increased by 40% after the redesign. Highly recommended!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager, FinanceApp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      content: "Working with Mahmood was a game-changer. His attention to detail and user-centered approach resulted in a 60% improvement in our app's usability metrics.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, HealthTech Solutions",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      content: "Mahmood transformed our complex healthcare platform into an intuitive, user-friendly experience. Our customer satisfaction scores have never been higher.",
      rating: 5
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-dark-card border border-gray-800 rounded-2xl p-8 hover:border-orange-accent/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-orange-accent fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 font-inter leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-white font-poppins font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
