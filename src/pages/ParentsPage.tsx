
import { Navbar } from "@/components/Navbar";
import { ParentsSection } from "@/components/ParentsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { useNavigate } from "react-router-dom";

export default function ParentsPage() {
  const navigate = useNavigate();
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 bg-gradient-to-br from-easy-green/10 via-white to-easy-blue/10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 max-w-xl">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-easy-green animate-fade-in">
                Help Your Teen Master Money Management
              </h1>
              <p className="text-xl text-gray-700 mb-8 animate-fade-in">
                Give your teen the financial tools and knowledge they need while maintaining the oversight you want. Safe, secure, and educational.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  className="bg-gradient-to-r from-easy-green to-easy-blue text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity animate-fade-in"
                  onClick={() => navigate('/signup')}
                >
                  Get Started Today
                </button>
                <button 
                  className="border-2 border-easy-green text-easy-green px-8 py-3 rounded-full font-semibold hover:bg-easy-green hover:text-white transition-colors animate-fade-in"
                  onClick={() => navigate('/signup')}
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-1 relative animate-fade-in">
              <div className="absolute -z-10 w-full h-full bg-gradient-to-br from-easy-green/20 to-easy-blue/20 rounded-full blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&q=80&w=500&h=500"
                alt="Parent and teen managing money together"
                className="rounded-2xl shadow-xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Main Features Section */}
        <ParentsSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Call to Action */}
        <CTASection />
      </main>
    </>
  );
}
