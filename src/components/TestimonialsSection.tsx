
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Parent",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      quote: "PayWithEasy has transformed how I teach my 15-year-old about money. The parental controls give me peace of mind while letting her learn independently.",
    },
    {
      name: "Josh T.",
      role: "Teen",
      avatar: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      quote: "I love being able to save for things I want and even started investing with $10 a week. The app makes it easy to track everything.",
    },
    {
      name: "Amanda K.",
      role: "Parent",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      quote: "The investment education is fantastic. My son is learning real financial skills while I can monitor and approve his decisions.",
    },
    {
      name: "Tyler R.",
      role: "Teen",
      avatar: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      quote: "Setting up savings goals is super easy, and watching my investment portfolio grow motivates me to save more each month.",
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Are Saying
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of families who trust PayWithEasy for their teen banking and investment needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 stroke-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover" 
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
