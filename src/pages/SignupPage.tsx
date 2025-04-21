
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: handle sign up logic here
    alert("Signup submitted! (Logic not implemented)");
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
            <Button type="submit" className="w-full rounded-full bg-gradient-to-r from-easy-green to-easy-blue text-white hover:opacity-90 mt-3" size="lg">
              Sign Up
            </Button>
          </form>
          <div className="text-sm text-center mt-6 text-gray-500">
            Already have an account?{" "}
            <a href="/" className="font-semibold text-easy-blue hover:underline">Log in</a>
          </div>
        </div>
      </main>
    </>
  );
}
