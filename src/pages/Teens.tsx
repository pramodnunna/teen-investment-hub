
import { TeensSection } from "@/components/TeensSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Teens = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <TeensSection />
      </main>
      <Footer />
    </div>
  );
};

export default Teens;
