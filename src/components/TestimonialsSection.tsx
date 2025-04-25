
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [{
    name: "Sarah M.",
    role: "Parent",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    quote: "PayWithEasy has transformed how I teach my 15-year-old about money. The parental controls give me peace of mind while letting her learn independently."
  }, {
    name: "Josh T.",
    role: "Parent of 2 teens",
    avatar: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    quote: "The app makes it easy to monitor spending and set appropriate limits. My kids are learning valuable money management skills."
  }, {
    name: "Amanda K.",
    role: "Parent",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    quote: "The investment education is fantastic. My son is learning real financial skills while I can monitor and approve his decisions."
  }];

  return (
    <section className="py-16 bg-gradient-to-br from-easy-green/5 via-easy-blue/5 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-easy-blue">
          What Parents Are Saying
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Join thousands of parents who trust PayWithEasy to help their teens develop strong financial habits
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-fade-in border border-easy-green/10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-easy-green text-easy-green" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-easy-blue">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
