
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
