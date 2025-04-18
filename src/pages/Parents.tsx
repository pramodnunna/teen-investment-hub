
import { ParentsSection } from "@/components/ParentsSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Parents = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <ParentsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Parents;
