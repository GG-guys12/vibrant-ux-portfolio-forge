
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail, Phone, MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent Successfully! 🎉",
      description: "Thank you for your message. I'll get back to you within 24 hours!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "hello@mahmoodfazile.com",
      description: "Send me an email anytime!"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Let's talk about your project"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "San Francisco, CA",
      description: "Available for remote work"
    },
    {
      icon: <Clock size={24} />,
      title: "Response Time",
      value: "24 hours",
      description: "Quick turnaround guaranteed"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-dark-card/30 via-dark-card/20 to-dark-bg relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-accent/5 via-transparent to-transparent"></div>
      <div className="absolute top-32 left-20 w-2 h-2 bg-orange-accent/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 right-32 w-3 h-3 bg-orange-accent/30 rounded-full animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-orange-accent/10 border border-orange-accent/30 rounded-full text-orange-accent text-sm font-semibold backdrop-blur-sm mb-8">
            💬 Get In Touch
          </div>
          <h2 className="text-5xl md:text-7xl font-poppins font-bold text-white mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text">
            Let's Work Together
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into extraordinary digital experiences? I'm available for new projects and would love to discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Enhanced Contact Form */}
          <div className="animate-fade-in-up">
            <div className="bg-gradient-to-br from-dark-card/80 via-dark-card/60 to-dark-card/40 p-10 rounded-[2rem] border border-gray-800/50 backdrop-blur-lg">
              <h3 className="text-3xl font-poppins font-bold text-white mb-8 flex items-center">
                Send Message
                <ArrowRight size={28} className="ml-3 text-orange-accent" />
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-3 text-lg">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-dark-bg/80 border-gray-700 text-white placeholder-gray-400 focus:border-orange-accent focus:ring-orange-accent/20 h-14 text-lg rounded-xl backdrop-blur-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-3 text-lg">
                    Your Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-dark-bg/80 border-gray-700 text-white placeholder-gray-400 focus:border-orange-accent focus:ring-orange-accent/20 h-14 text-lg rounded-xl backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-3 text-lg">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-dark-bg/80 border-gray-700 text-white placeholder-gray-400 focus:border-orange-accent focus:ring-orange-accent/20 resize-none text-lg rounded-xl backdrop-blur-sm"
                    placeholder="Tell me about your project, goals, timeline, and budget..."
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-accent to-orange-hover hover:from-orange-hover hover:to-orange-accent text-white py-6 rounded-xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-orange-accent/30 group"
                >
                  <Send size={22} className="mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <div className="space-y-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-dark-card/80 via-dark-card/60 to-dark-card/40 p-10 rounded-[2rem] border border-gray-800/50 backdrop-blur-lg">
              <h3 className="text-3xl font-poppins font-bold text-white mb-8">
                Contact Information
              </h3>
              <p className="text-gray-300 font-inter text-lg leading-relaxed mb-10">
                I'm currently available for new projects and collaborations. Let's discuss how we can bring your vision to life with exceptional design.
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-5 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-accent/20 to-orange-accent/10 rounded-2xl flex items-center justify-center text-orange-accent group-hover:scale-110 transition-transform duration-300 border border-orange-accent/20">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-poppins font-bold text-xl mb-2 group-hover:text-orange-accent transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-orange-accent text-lg font-semibold mb-1">
                        {info.value}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-8 rounded-2xl border border-green-500/30 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-green-400 font-poppins font-bold text-xl">
                    Currently Available
                  </p>
                  <p className="text-gray-300 text-sm">
                    Ready for freelance & full-time opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
