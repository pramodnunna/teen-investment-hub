
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Save the user signup data to Supabase
      const { error } = await supabase
        .from('user_signups')
        .insert([
          { 
            name, 
            email, 
            phone_number: phoneNumber, 
            password_hash: password // Note: In a real app, you should hash passwords
          }
        ]);
      
      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
        return;
      }
      
      // Show success dialog
      setShowDialog(true);
    } catch (error) {
      console.error("Error saving signup:", error);
      toast({
        title: "Error",
        description: "Failed to save your information. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-soft-blue to-soft-purple pt-24">
        <div className="w-full max-w-md bg-white shadow-lg rounded-3xl px-8 py-10 border border-soft-gray">
          <h1 className="text-3xl font-extrabold text-center mb-3 text-easy-blue">Create your EASY Account</h1>
          <p className="text-gray-500 text-center mb-6">
            Sign up to start your financial journey.
          </p>
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-semibold text-gray-700">Name</label>
              <Input
                id="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your full name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="signup-email" className="block mb-1 text-sm font-semibold text-gray-700">Email</label>
              <Input
                id="signup-email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="signup-phone" className="block mb-1 text-sm font-semibold text-gray-700">Phone Number</label>
              <Input
                id="signup-phone"
                type="tel"
                autoComplete="tel"
                placeholder="Your phone number"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="signup-password" className="block mb-1 text-sm font-semibold text-gray-700">Password</label>
              <Input
                id="signup-password"
                type="password"
                autoComplete="new-password"
                required
                minLength={6}
                placeholder="Choose a strong password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full rounded-full bg-gradient-to-r from-easy-green to-easy-blue text-white hover:opacity-90 mt-3" 
              size="lg"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>
          <div className="text-sm text-center mt-6 text-gray-500">
            Already have an account?{" "}
            <a href="/" className="font-semibold text-easy-blue hover:underline">Log in</a>
          </div>
        </div>
      </main>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Thanks for your interest!</DialogTitle>
          </DialogHeader>
          <div className="text-center py-4">
            <p className="text-gray-600">We are launching soon. We'll notify you when we're ready!</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
