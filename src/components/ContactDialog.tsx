
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
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface ContactDialogProps {
  children: React.ReactNode;
}

export function ContactDialog({ children }: ContactDialogProps) {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          {children}
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[85vh] overflow-y-auto">
          <SheetHeader className="px-2 pt-4 pb-2">
            <SheetTitle className="text-xl flex items-center gap-2">
              <Mail className="h-5 w-5 text-easy-blue" />
              Contact Us
            </SheetTitle>
            <SheetDescription className="text-sm">
              Have questions about our banking solutions? Reach out to our team and we'll get back to you as soon as possible.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-2">
            <ContactForm />
          </div>
        </SheetContent>
      </Sheet>
    );
  }
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
        <DialogHeader className="px-4 pt-4 md:px-6 md:pt-6 pb-2">
          <DialogTitle className="text-xl md:text-2xl flex items-center gap-2">
            <Mail className="h-5 w-5 text-easy-blue" />
            Contact Us
          </DialogTitle>
          <DialogDescription className="text-sm md:text-base">
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
