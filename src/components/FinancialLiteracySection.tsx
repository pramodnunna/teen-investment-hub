
import { Button } from "@/components/ui/button";
import { Book, School, Target, Users, ShieldCheck, LineChart } from "lucide-react";

export function FinancialLiteracySection() {
  const coreComponents = [
    {
      icon: <Book className="h-6 w-6 text-easy-blue" />,
      title: "Foundational Financial Knowledge",
      description: "Banking basics, budgeting principles, and saving strategies for students."
    },
    {
      icon: <Target className="h-6 w-6 text-easy-green" />,
      title: "Planning for the Future",
      description: "College financing, career exploration, and introduction to investing."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-easy-purple" />,
      title: "Consumer Skills & Protection",
      description: "Smart shopping strategies and digital payment safety."
    },
    {
      icon: <Users className="h-6 w-6 text-easy-red" />,
      title: "Interactive Learning",
      description: "Real-world simulations and team-based financial challenges."
    },
    {
      icon: <School className="h-6 w-6 text-easy-orange" />,
      title: "Teacher Resources",
      description: "Comprehensive lesson plans and professional development support."
    },
    {
      icon: <LineChart className="h-6 w-6 text-easy-blue" />,
      title: "Measurable Impact",
      description: "Track student progress and program effectiveness."
    }
  ];

  return (
    <section id="financial-literacy" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-easy-blue/10 text-easy-blue rounded-full text-sm font-medium mb-4">
            Financial Education
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empowering Students for Financial Success
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive financial literacy program partners with schools to equip students with essential money management skills and knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Why Partner With Us?</h3>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-semibold text-lg mb-2">Curriculum Designed for Student Engagement</h4>
              <p className="text-gray-600">Using relatable examples, interactive activities, and age-appropriate content, we make financial concepts accessible and interesting for teens.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-semibold text-lg mb-2">Flexible Implementation Options</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Workshop Series: Concentrated modules delivered over several weeks</li>
                <li>Integrated Curriculum: Materials that complement existing courses</li>
                <li>After-School Programs: Extended learning opportunities</li>
                <li>Teacher Training: Professional development for educators</li>
              </ul>
            </div>
            
            <div className="p-6 bg-easy-blue/5 rounded-xl border border-easy-blue/10">
              <blockquote className="text-gray-700 italic">
                "The curriculum was easy to integrate into our existing classes and provided exactly what our students needed—practical financial skills they'll use throughout their lives."
              </blockquote>
              <p className="mt-2 font-medium text-easy-blue">- Teacher, Eastside Academy</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreComponents.map((component, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mb-3">{component.icon}</div>
                <h3 className="font-semibold mb-2">{component.title}</h3>
                <p className="text-gray-600 text-sm">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Button className="rounded-full px-6 py-6 bg-gradient-to-r from-easy-blue to-easy-green text-white hover:opacity-90 text-lg">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
