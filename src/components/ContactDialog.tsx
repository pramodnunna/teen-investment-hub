
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import { Mail } from "lucide-react";

interface ContactDialogProps {
  children: React.ReactNode;
}

export function ContactDialog({ children }: ContactDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Mail className="h-5 w-5 text-easy-blue" />
            Contact Us
          </DialogTitle>
          <DialogDescription>
            Have questions about our banking solutions? Reach out to our team and we'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <div className="p-0">
          <ContactForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
