
import { Star } from "lucide-react";
export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Parent",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      quote: "PayWithEasy has transformed how I teach my 15-year-old about money. The parental controls give me peace of mind while letting her learn independently."
    }, {
      name: "Josh T.",
      role: "Teen",
      avatar: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      quote: "I love being able to save for things I want and even started investing with $10 a week. The app makes it easy to track everything."
    }, {
      name: "Amanda K.",
      role: "Parent",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      quote: "The investment education is fantastic. My son is learning real financial skills while I can monitor and approve his decisions."
    }, {
      name: "Tyler R.",
      role: "Teen",
      avatar: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      quote: "Setting up savings goals is super easy, and watching my investment portfolio grow motivates me to save more each month."
    }
  ];
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Testimonials</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center border border-gray-100">
              <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-4 border-easy-blue mb-4" />
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="h-4 w-4 text-yellow-400" fill="#facc15" />)}
              </div>
              <p className="text-gray-700 italic text-center mb-3">"{t.quote}"</p>
              <p className="font-bold text-easy-blue">{t.name}</p>
              <p className="text-xs text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
