import { Facebook, Instagram, Twitter } from "lucide-react";
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-50 pt-12 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="flex items-center mb-4">
              <img src="/lovable-uploads/b28c594b-2169-4102-b023-a716aeda5b76.png" alt="EASY Logo" className="h-10" />
            </a>
            <p className="text-gray-600 mb-4 text-left">
              The modern banking solution for teenagers with guided investment opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-easy-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-easy-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-easy-blue transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-medium text-gray-900 mb-4">For Teens</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-easy-green transition-colors">Digital Banking</a></li>
              <li><a href="#" className="text-gray-600 hover:text-easy-green transition-colors">Savings Goals</a></li>
              <li><a href="#" className="text-gray-600 hover:text-easy-green transition-colors">Learn Investing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-easy-green transition-colors">Financial Education</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-medium text-gray-900 mb-4">For Parents</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-easy-blue transition-colors">Parental Controls</a></li>
              <li><a href="#" className="text-gray-600 hover:text-easy-blue transition-colors">Monitor Spending</a></li>
              <li><a href="#" className="text-gray-600 hover:text-easy-blue transition-colors">Approve Investments</a></li>
              <li><a href="#" className="text-gray-600 hover:text-easy-blue transition-colors">Family Banking</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-easy-red transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-easy-red transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-easy-red transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-easy-red transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-gray-500 text-sm">© {currentYear} EASY. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}
