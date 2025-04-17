
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Eye, Lock, Shield, Sliders } from "lucide-react";

export function ParentsSection() {
  const parentControls = [
    {
      icon: <Shield className="h-6 w-6 text-easy-blue" />,
      title: "Complete Oversight",
      description: "Monitor your teen's spending and savings in real-time with instant notifications."
    },
    {
      icon: <Lock className="h-6 w-6 text-easy-blue" />,
      title: "Spending Controls",
      description: "Set daily or weekly spending limits and merchant category restrictions."
    },
    {
      icon: <Eye className="h-6 w-6 text-easy-blue" />,
      title: "Investment Approval",
      description: "Review and approve any investment decisions your teen wants to make."
    },
    {
      icon: <Sliders className="h-6 w-6 text-easy-blue" />,
      title: "Flexible Permissions",
      description: "Gradually increase financial independence as your teen demonstrates responsibility."
    }
  ];

  return (
    <section id="for-parents" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-easy-blue/10 text-easy-blue rounded-full text-sm font-medium mb-4">
              For Parents
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Peace of Mind with Complete Parental Controls
            </h2>
            <p className="text-gray-600 mb-8">
              Help your teen learn financial responsibility while maintaining the oversight and controls you need as a parent.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {parentControls.map((control, index) => (
                <div key={index} className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="mb-3">{control.icon}</div>
                  <h3 className="font-semibold mb-2">{control.title}</h3>
                  <p className="text-gray-600 text-sm">{control.description}</p>
                </div>
              ))}
            </div>
            
            <Button className="rounded-full px-6 bg-easy-blue text-white hover:bg-easy-blue/90">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br from-easy-blue/10 to-easy-purple/10 rounded-full blur-3xl"></div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 p-6 relative z-10">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Parent Dashboard</h3>
                <div className="p-4 bg-gray-50 rounded-xl mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium">Alex's Account Overview</p>
                    <div className="bg-green-50 text-green-600 px-2 py-1 rounded-full text-xs">
                      Active
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex-1 p-3 bg-white rounded-lg shadow-sm">
                      <p className="text-xs text-gray-500">Current Balance</p>
                      <p className="font-bold text-lg">$238.42</p>
                    </div>
                    <div className="flex-1 p-3 bg-white rounded-lg shadow-sm">
                      <p className="text-xs text-gray-500">Savings</p>
                      <p className="font-bold text-lg">$145.00</p>
                    </div>
                    <div className="flex-1 p-3 bg-white rounded-lg shadow-sm">
                      <p className="text-xs text-gray-500">Investments</p>
                      <p className="font-bold text-lg">$50.00</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mb-3">
                  <p className="font-medium">Parental Controls</p>
                  <button className="text-easy-blue text-sm">Edit</button>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="p-2 bg-easy-blue/10 rounded-full mr-3">
                        <Shield className="h-4 w-4 text-easy-blue" />
                      </div>
                      <p className="text-sm">Spending Limit</p>
                    </div>
                    <p className="font-medium">$75/week</p>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="p-2 bg-easy-blue/10 rounded-full mr-3">
                        <Lock className="h-4 w-4 text-easy-blue" />
                      </div>
                      <p className="text-sm">Investment Approval</p>
                    </div>
                    <div className="w-12 h-6 bg-easy-blue rounded-full flex items-center p-1">
                      <div className="w-4 h-4 rounded-full bg-white ml-auto"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="p-2 bg-easy-blue/10 rounded-full mr-3">
                        <Eye className="h-4 w-4 text-easy-blue" />
                      </div>
                      <p className="text-sm">Transactions Notifications</p>
                    </div>
                    <div className="w-12 h-6 bg-easy-blue rounded-full flex items-center p-1">
                      <div className="w-4 h-4 rounded-full bg-white ml-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-3">
                  <p className="font-medium">Recent Activity</p>
                  <button className="text-easy-blue text-sm">View All</button>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Online Purchase</p>
                      <p className="text-xs text-gray-500">Today, 2:34 PM</p>
                    </div>
                    <p className="font-medium text-red-500">-$18.99</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Investment Approval Request</p>
                      <p className="text-xs text-gray-500">Yesterday, 5:15 PM</p>
                    </div>
                    <Button variant="outline" className="text-xs h-8 px-3 border-easy-blue text-easy-blue hover:bg-easy-blue hover:text-white">
                      Review
                    </Button>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Allowance Transfer</p>
                      <p className="text-xs text-gray-500">Monday, 9:00 AM</p>
                    </div>
                    <p className="font-medium text-green-500">+$25.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
