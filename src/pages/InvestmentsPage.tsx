
import { Navbar } from "@/components/Navbar";
import { InvestmentSection } from "@/components/InvestmentSection";

export default function InvestmentsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 max-w-xl">
              <div className="inline-block px-4 py-1 bg-easy-red/10 text-easy-red rounded-full text-sm font-medium mb-4">
                Start Investing Early
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-easy-red animate-fade-in">
                Begin Their Investment Journey Today
              </h1>
              <p className="text-xl text-gray-700 mb-8 animate-fade-in">
                Give your teen a head start in financial independence. Safe, supervised investing with built-in learning tools.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-easy-red to-easy-orange text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity animate-fade-in">
                  Start Investing
                </button>
                <button className="border-2 border-easy-red text-easy-red px-8 py-3 rounded-full font-semibold hover:bg-easy-red hover:text-white transition-colors animate-fade-in">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-1 relative animate-fade-in">
              <div className="absolute -z-10 w-full h-full bg-gradient-to-br from-easy-red/20 to-easy-orange/20 rounded-full blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500&h=500"
                alt="Teen learning about investments"
                className="rounded-2xl shadow-xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Investment Features Section */}
        <InvestmentSection />
      </main>
    </>
  );
}
