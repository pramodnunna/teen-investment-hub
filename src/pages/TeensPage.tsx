
import { Navbar } from "@/components/Navbar";
import { WhyTeensLoveUs } from "@/components/WhyTeensLoveUs";
import { TeensTestimonials } from "@/components/TeensTestimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function TeensPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 bg-gradient-to-br from-soft-green to-white">
        <header className="max-w-5xl mx-auto text-center px-4 pt-6 pb-10">
          <div className="inline-block px-4 py-1 bg-easy-green/10 text-easy-green rounded-full text-sm font-semibold mb-4 animate-fade-in">
            For Teens
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-easy-green animate-fade-in">
            Your Money, <span className="text-easy-blue">Your Rules</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-700 mb-6 animate-fade-in">
            EASY gives you the power to manage, spend, save, and grow your own money—independently, confidently, and with rewards for smart choices.
          </p>
          <Button
            className="mt-2 bg-gradient-to-r from-easy-green to-easy-blue rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:opacity-90 animate-fade-in"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </header>

        <WhyTeensLoveUs />

        <div className="w-full max-w-5xl mx-auto my-14 px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80"
            alt="Teen using phone to manage money"
            className="rounded-2xl shadow-xl object-cover h-72 w-full md:w-2/3 animate-fade-in"
          />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-easy-blue mb-3">Designed for You</h3>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Instant spending notifications and safety controls</li>
              <li>Set savings goals—watch your money grow</li>
              <li>No hidden fees, no minimum balance</li>
              <li>Invest and learn with real money, safely</li>
              <li>Make payments & split bills with friends</li>
              <li>Personalize your card and app</li>
            </ul>
          </div>
        </div>

        <TeensTestimonials />

        <section className="w-full py-10 flex flex-col items-center bg-soft-green/50">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-easy-green">
            Ready to Level Up Your Money Game?
          </h2>
          <Button
            className="bg-gradient-to-r from-easy-green to-easy-blue rounded-full px-7 py-3 text-lg font-semibold mt-2 hover:opacity-90"
            onClick={() => window.location.href = '/signup'}
          >
            Open Your Account <ArrowRight className="ml-2" />
          </Button>
        </section>
      </main>
    </>
  );
}
