
import { CreditCard, LineChart, LockKeyhole, Smartphone, Users2, Wallet } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <CreditCard className="h-8 w-8 text-easy-green" />,
      title: "Teen Debit Card",
      description: "A secure debit card designed for teenagers with instant notifications and spending controls."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-easy-blue" />,
      title: "Mobile Banking",
      description: "Manage your money with an intuitive app designed specifically for teen users."
    },
    {
      icon: <LineChart className="h-8 w-8 text-easy-purple" />,
      title: "Guided Investments",
      description: "Learn about investing with age-appropriate options and educational content."
    },
    {
      icon: <LockKeyhole className="h-8 w-8 text-easy-red" />,
      title: "Parental Controls",
      description: "Parents can set spending limits, approve transactions, and monitor financial activity."
    },
    {
      icon: <Wallet className="h-8 w-8 text-easy-orange" />,
      title: "Savings Goals",
      description: "Set and track progress toward savings goals with visual progress indicators."
    },
    {
      icon: <Users2 className="h-8 w-8 text-easy-green" />,
      title: "Family Banking",
      description: "Connect parent and teen accounts for easy money transfers and financial guidance."
    }
  ];

  return (
    <section id="features" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Start Banking & Investing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            PayWithEasy combines teen-friendly banking with guided investment opportunities, all under parental supervision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="mb-4 p-3 bg-gray-50 rounded-xl w-fit group-hover:bg-gray-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
