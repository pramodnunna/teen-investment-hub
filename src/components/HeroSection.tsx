import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export function HeroSection() {
  return <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-easy-green to-easy-blue">
                Banking & Investing
              </span>
              <br />
              <span>Made for Teens</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              A digital banking experience designed specifically for teenagers with guided investment opportunities and parental supervision.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="h-12 px-6 rounded-full bg-gradient-to-r from-easy-green to-easy-blue text-white hover:opacity-90">
                Get Started
              </Button>
              <Button variant="outline" className="h-12 px-6 rounded-full border-easy-blue text-easy-blue hover:bg-easy-blue hover:text-white">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&h=80&q=80" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&h=80&q=80" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&h=80&q=80" alt="User" />
              </div>
              <p className="ml-4 text-gray-600 text-sm">
                <span className="font-semibold">1,000+</span> teens are already growing their money
              </p>
            </div>
          </div>
          
          <div className="relative animate-fade-in-slow">
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-gradient-to-br from-easy-green/10 to-easy-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-br from-easy-blue/10 to-easy-red/10 rounded-full blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-easy-green to-easy-blue h-32 flex items-center justify-center">
                <img src="/lovable-uploads/b28c594b-2169-4102-b023-a716aeda5b76.png" alt="PayWithEasy Logo" className="h-16" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Account Balance</p>
                    <p className="text-2xl font-bold">₹1,275.84</p>
                  </div>
                  <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    +12.4%
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-easy-blue/10 flex items-center justify-center text-easy-blue">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium">Savings</p>
                          <p className="text-xs text-gray-500">Goal: New Laptop</p>
                        </div>
                      </div>
                      <p className="font-semibold">₹378.21</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-easy-blue h-2 rounded-full" style={{
                      width: '65%'
                    }}></div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-easy-green/10 flex items-center justify-center text-easy-green">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium">Investments</p>
                          <p className="text-xs text-gray-500">Tech ETF</p>
                        </div>
                      </div>
                      <p className="font-semibold">₹587.63</p>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-easy-green text-white hover:bg-easy-green/90">
                  View Dashboard
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}