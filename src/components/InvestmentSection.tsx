import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, BookOpen, Lightbulb, LineChart, PiggyBank, TrendingUp } from "lucide-react";
export function InvestmentSection() {
  const investmentFeatures = [{
    icon: <Lightbulb className="h-6 w-6 text-easy-red" />,
    title: "Learn First",
    description: "Interactive lessons teach investing basics before any real money is involved."
  }, {
    icon: <PiggyBank className="h-6 w-6 text-easy-red" />,
    title: "Start Small",
    description: "Begin with as little as ₹5 and watch their investments grow over time."
  }, {
    icon: <TrendingUp className="h-6 w-6 text-easy-red" />,
    title: "Guided Investing",
    description: "Parent-approved, age-appropriate investment options with built-in safeguards."
  }, {
    icon: <BookOpen className="h-6 w-6 text-easy-red" />,
    title: "Educational Content",
    description: "Learn about stocks, ETFs, and mutual funds through easy-to-understand content."
  }, {
    icon: <BarChart3 className="h-6 w-6 text-easy-red" />,
    title: "Real-Time Tracking",
    description: "Monitor portfolio performance and understand market movements."
  }, {
    icon: <LineChart className="h-6 w-6 text-easy-red" />,
    title: "Smart Portfolios",
    description: "Pre-built, diversified portfolios designed for long-term growth."
  }];
  return <section id="investments" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-easy-red/10 text-easy-red rounded-full text-sm font-medium mb-4">Investment Hub</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Smart Investing Made for Teens
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">EASY helps teens start their investment journey with educational content, parent-supervised trading, and age-appropriate investment options.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 border-easy-red/10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Investment Dashboard</h3>
              <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm">
                Demo Account
              </div>
            </div>
            
            <div className="relative h-64 mb-6 bg-gradient-to-br from-easy-red/5 to-easy-orange/5 rounded-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 500 200">
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
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-500 mb-1">Demo Balance</p>
                <p className="text-2xl font-bold">₹10,000</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-500 mb-1">Portfolio Value</p>
                <p className="text-2xl font-bold">₹10,450</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <span className="font-bold text-sm">TECH</span>
                  </div>
                  <div>
                    <p className="font-medium">Tech Fund</p>
                    <p className="text-xs text-gray-500">Demo Investment</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹5,000</p>
                  <p className="text-xs text-green-500">+4.5%</p>
                </div>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                    <span className="font-bold text-sm">DIV</span>
                  </div>
                  <div>
                    <p className="font-medium">Dividend Fund</p>
                    <p className="text-xs text-gray-500">Demo Investment</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹5,000</p>
                  <p className="text-xs text-green-500">+3.5%</p>
                </div>
              </div>
            </div>
          </Card>
          
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
            Try Demo Investment Account
          </Button>
        </div>
      </div>
    </section>;
}