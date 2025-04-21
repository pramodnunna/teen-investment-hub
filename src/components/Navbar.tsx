
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlignRight, X } from "lucide-react";
import { LoginModal } from "@/components/LoginModal";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full py-4 px-4 md:px-8 bg-white/90 backdrop-blur-sm fixed top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src="/lovable-uploads/b28c594b-2169-4102-b023-a716aeda5b76.png" alt="PayWithEasy Logo" className="h-10 mr-2" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#for-teens" className="text-gray-600 hover:text-easy-blue transition-colors">For Teens</a>
          <a href="#for-parents" className="text-gray-600 hover:text-easy-purple transition-colors">For Parents</a>
          <a href="#investments" className="text-gray-600 hover:text-easy-red transition-colors">Investments</a>
          <a href="/financial-literacy" className="text-gray-600 hover:text-easy-blue transition-colors">Financial Literacy</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            className="rounded-full border-easy-blue text-easy-blue hover:bg-easy-blue hover:text-white"
            onClick={() => setLoginOpen(true)}
          >
            Log In
          </Button>
          <Button
            className="rounded-full bg-gradient-to-r from-easy-green to-easy-blue text-white hover:opacity-90"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
          {isMenuOpen ? <X size={24} /> : <AlignRight size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-gray-600 hover:text-easy-green py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#for-teens"
              className="text-gray-600 hover:text-easy-blue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              For Teens
            </a>
            <a
              href="#for-parents"
              className="text-gray-600 hover:text-easy-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              For Parents
            </a>
            <a
              href="#investments"
              className="text-gray-600 hover:text-easy-red py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Investments
            </a>
            <a
              href="/financial-literacy"
              className="text-gray-600 hover:text-easy-blue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Financial Literacy
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button
                variant="outline"
                className="w-full justify-center rounded-full border-easy-blue text-easy-blue hover:bg-easy-blue hover:text-white"
                onClick={() => {
                  setLoginOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                Log In
              </Button>
              <Button
                className="w-full justify-center rounded-full bg-gradient-to-r from-easy-green to-easy-blue text-white hover:opacity-90"
                onClick={() => {
                  navigate("/signup");
                  setIsMenuOpen(false);
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
    </nav>
  );
}
