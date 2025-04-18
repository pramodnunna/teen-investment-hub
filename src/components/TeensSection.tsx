import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck } from "lucide-react";
export function TeensSection() {
  const benefits = ["Your own debit card with cool designs", "Easy-to-use mobile app to track spending", "Set savings goals and watch your money grow", "Learn about investing with real money", "No hidden fees or minimum balances", "Earn rewards for smart financial choices"];
  return <section id="for-teens" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-gradient-to-br from-easy-green/10 to-easy-blue/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 p-1">
              <div className="bg-gradient-to-r from-easy-green/10 to-easy-blue/10 rounded-xl p-6">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Teen using banking app" className="rounded-lg shadow-md" />
                  <div className="absolute -bottom-5 -right-5 bg-white p-3 rounded-xl shadow-lg animate-float">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                        <span className="text-green-500 text-lg font-bold">+$</span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Allowance Received</p>
                        <p className="font-semibold">$25.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between">
                      <p className="font-medium">Gaming Subscription</p>
                      <p className="font-medium text-red-500">-₹9.99</p>
                    </div>
                    <p className="text-xs text-gray-500">Yesterday</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between">
                      <p className="font-medium">Savings Transfer</p>
                      <p className="font-medium text-easy-blue">-₹15.00</p>
                    </div>
                    <p className="text-xs text-gray-500">Laptop Fund</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between">
                      <p className="font-medium">Coffee Shop</p>
                      <p className="font-medium text-red-500">-$4.50</p>
                    </div>
                    <p className="text-xs text-gray-500">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1 bg-easy-green/10 text-easy-green rounded-full text-sm font-medium mb-4">
              For Teens
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your First Step to Financial Freedom
            </h2>
            <p className="text-gray-600 mb-8">
              PayWithEasy gives you the freedom to manage your own money while learning valuable financial skills that will benefit you for life.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-easy-green mt-0.5 mr-3" />
                  <p className="text-gray-700">{benefit}</p>
                </div>)}
            </div>
            
            <Button className="rounded-full px-6 bg-gradient-to-r from-easy-green to-easy-blue text-white hover:opacity-90">
              Open Your Account <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
}