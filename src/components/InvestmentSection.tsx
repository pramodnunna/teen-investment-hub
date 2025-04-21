import { Button } from "@/components/ui/button";
import { BarChart3, BookOpen, Lightbulb, LineChart, TrendingUp, Users } from "lucide-react";
export function InvestmentSection() {
  const investmentFeatures = [{
    icon: <Lightbulb className="h-6 w-6 text-easy-red" />,
    title: "Educational First",
    description: "Learn investment basics before putting any money at risk."
  }, {
    icon: <BarChart3 className="h-6 w-6 text-easy-red" />,
    title: "Age-Appropriate Options",
    description: "Access investment options designed specifically for teen investors."
  }, {
    icon: <Users className="h-6 w-6 text-easy-red" />,
    title: "Parental Guidance",
    description: "Parents approve trades and can provide guidance on investment decisions."
  }, {
    icon: <BookOpen className="h-6 w-6 text-easy-red" />,
    title: "Financial Literacy",
    description: "Build knowledge through interactive lessons and real-world practice."
  }, {
    icon: <TrendingUp className="h-6 w-6 text-easy-red" />,
    title: "Track Performance",
    description: "Monitor your investments and understand market movements."
  }, {
    icon: <LineChart className="h-6 w-6 text-easy-red" />,
    title: "Diversified Portfolio",
    description: "Start building a balanced portfolio with as little as $5."
  }];
  return <section id="investments" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-easy-red/10 text-easy-red rounded-full text-sm font-medium mb-4">Investment Hub</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn to Invest with Safety and Confidence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            PayWithEasy introduces teens to the world of investing with age-appropriate options, 
            educational content, and required parental approvals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Investment Dashboard</h3>
              <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm">
                Up 5.2% Today
              </div>
            </div>
            
            <div className="relative h-64 mb-6">
              <div className="absolute inset-0">
                <div className="w-full h-full bg-gradient-to-r from-easy-red/10 to-easy-orange/10 rounded-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 500 200">
                    <path d="M0,150 C50,120 100,180 150,130 C200,80 250,120 300,100 C350,80 400,60 500,40" fill="none" stroke="#E84C3D" strokeWidth="3" />
                    <path d="M0,150 C50,120 100,180 150,130 C200,80 250,120 300,100 C350,80 400,60 500,40" fill="none" stroke="url(#gradient)" strokeWidth="3" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#E84C3D" />
                        <stop offset="100%" stopColor="#F5A623" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-500 mb-1">Total Invested</p>
                <p className="text-2xl font-bold">₹2500.00</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-500 mb-1">Current Value</p>
                <p className="text-2xl font-bold">₹2687.5</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mr-3">
                    <span className="font-bold text-sm">TECH</span>
                  </div>
                  <div>
                    <p className="font-medium">Technology ETF</p>
                    <p className="text-xs text-gray-500">10 shares</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹1500.00</p>
                  <p className="text-xs text-green-500">+8.5%</p>
                </div>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 mr-3">
                    <span className="font-bold text-sm">ECO</span>
                  </div>
                  <div>
                    <p className="font-medium">Clean Energy Fund</p>
                    <p className="text-xs text-gray-500">5 shares</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹1000.00</p>
                  <p className="text-xs text-green-500">+3.2%</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investmentFeatures.map((feature, index) => <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-3">{feature.icon}</div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>)}
          </div>
        </div>
        
        <div className="text-center">
          <Button className="rounded-full px-6 py-6 bg-gradient-to-r from-easy-red to-easy-orange text-white hover:opacity-90 text-lg">
            Start Investing Today
          </Button>
        </div>
      </div>
    </section>;
}