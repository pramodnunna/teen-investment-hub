
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ConsultationFormContent } from "./consultation/ConsultationFormContent";

type ConsultationFormProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ConsultationForm({ open, onOpenChange }: ConsultationFormProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Schedule a Consultation</DialogTitle>
          <DialogDescription>
            Complete the form below to schedule a consultation about our Financial Literacy Education Program for your school.
          </DialogDescription>
        </DialogHeader>
        
        <ConsultationFormContent onOpenChange={onOpenChange} />
      </DialogContent>
    </Dialog>
  );
}
