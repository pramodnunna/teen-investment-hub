import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type LoginModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function LoginModal({ open, onOpenChange }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // To keep login simple—no logic yet, just closes the modal on submit.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Add your authentication logic here.
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Log In</DialogTitle>
          <DialogDescription>
            Sign in to your EASY account.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 mt-3">
          <div>
            <label htmlFor="login-email" className="text-sm font-medium block mb-1">Email</label>
            <Input
              id="login-email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="login-password" className="text-sm font-medium block mb-1">Password</label>
            <Input
              id="login-password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full rounded-full bg-easy-blue text-white hover:bg-easy-blue/90">
            Log In
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
