
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TeensSection } from "@/components/TeensSection";
import { ParentsSection } from "@/components/ParentsSection";
import { InvestmentSection } from "@/components/InvestmentSection";
import { FinancialLiteracySection } from "@/components/FinancialLiteracySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TeensSection />
        <ParentsSection />
        <InvestmentSection />
        <FinancialLiteracySection />
        <TestimonialsSection />
        <CTASection />
        <section id="contact" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions about our banking solutions for teens? Reach out to our team and we'll get back to you as soon as possible.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
