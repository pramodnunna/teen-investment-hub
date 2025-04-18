
import { Button } from "@/components/ui/button";
import { Book, School, Target, Users, ShieldCheck, LineChart } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const FinancialLiteracy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Financial Literacy Education Program for Schools
              </h1>
              <p className="text-xl text-gray-600">
                Empowering Students for Financial Success
              </p>
            </div>

            <div className="space-y-16">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Why Partner With Us?</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-xl mb-3">Curriculum Designed for Student Engagement</h3>
                    <p className="text-gray-600">
                      Our financial education materials are specifically tailored to meet students where they are. 
                      Using relatable examples, interactive activities, and age-appropriate content, we make financial 
                      concepts accessible and interesting for teens.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-xl mb-3">Flexible Implementation Options</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Workshop Series: Concentrated modules delivered over several weeks</li>
                      <li>Integrated Curriculum: Materials that complement existing courses</li>
                      <li>After-School Programs: Extended learning opportunities</li>
                      <li>Teacher Training: Professional development for educators</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6">Core Program Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <Book className="h-8 w-8 text-easy-blue mb-4" />
                    <h3 className="font-semibold text-xl mb-3">Foundational Financial Knowledge</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Banking basics and account management</li>
                      <li>Budgeting principles and applications</li>
                      <li>Saving strategies and goal-setting</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <Target className="h-8 w-8 text-easy-green mb-4" />
                    <h3 className="font-semibold text-xl mb-3">Planning for the Future</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>College financing options</li>
                      <li>Career exploration and income potential</li>
                      <li>Introduction to investing concepts</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <ShieldCheck className="h-8 w-8 text-easy-purple mb-4" />
                    <h3 className="font-semibold text-xl mb-3">Consumer Skills & Protection</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Smart shopping strategies</li>
                      <li>Digital payment safety</li>
                      <li>Identity protection</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <Users className="h-8 w-8 text-easy-red mb-4" />
                    <h3 className="font-semibold text-xl mb-3">Interactive Learning</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Simulation activities</li>
                      <li>Team-based financial challenges</li>
                      <li>Guest speakers and projects</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6">Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-easy-blue/5 rounded-xl border border-easy-blue/10">
                    <blockquote className="text-gray-700 italic mb-4">
                      "Implementing the financial literacy program helped our students connect math concepts to real life. 
                      We've seen increased engagement and better preparation for post-graduation decisions."
                    </blockquote>
                    <p className="font-medium text-easy-blue">- Principal, Washington High School</p>
                  </div>
                  
                  <div className="p-6 bg-easy-green/5 rounded-xl border border-easy-green/10">
                    <blockquote className="text-gray-700 italic mb-4">
                      "The curriculum was easy to integrate into our existing classes and provided exactly what our 
                      students needed—practical financial skills they'll use throughout their lives."
                    </blockquote>
                    <p className="font-medium text-easy-green">- Teacher, Eastside Academy</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button className="rounded-full px-8 py-6 bg-gradient-to-r from-easy-blue to-easy-green text-white hover:opacity-90 text-lg">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FinancialLiteracy;
