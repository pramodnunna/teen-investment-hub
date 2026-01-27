
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { DialogClose } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { FormSuccess } from "../form/FormSuccess";
import { ContactInfoFields } from "../form/ContactInfoFields";
import { PreferenceFields } from "../form/PreferenceFields";
import { AdditionalInfoFields } from "../form/AdditionalInfoFields";
import { consultationFormSchema, ConsultationFormValues } from "./types";

interface ConsultationFormContentProps {
  onOpenChange: (open: boolean) => void;
}

export function ConsultationFormContent({ onOpenChange }: ConsultationFormContentProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: {
      schoolName: "",
      contactPerson: "",
      email: "",
      phone: "",
      preferredTime: "morning",
      studentCount: "",
      additionalInfo: "",
    },
  });

  async function onSubmit(data: ConsultationFormValues) {
    setIsSubmitting(true);
    try {
      // Insert the consultation into the database
      const { error } = await (supabase as any).from("school_consultations").insert({
        school_name: data.schoolName,
        contact_person: data.contactPerson,
        email: data.email,
        phone: data.phone,
        preferred_date: format(data.preferredDate, "yyyy-MM-dd"),
        preferred_time: data.preferredTime,
        student_count: data.studentCount ? parseInt(data.studentCount) : null,
        additional_info: data.additionalInfo || null,
      });

      if (error) throw error;
      
      // Send email notification
      const emailResponse = await fetch(
        "https://jmgvggdcdskuwogochxy.supabase.co/functions/v1/send-consultation-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Use the direct publishable key
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZ3ZnZ2RjZHNrdXdvZ29jaHh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0MzcxMzIsImV4cCI6MjA2MjAxMzEzMn0.IQyv4cD_m6AiZ1F98aGq20OJ1Im0xM5galYZY6B15NY`,
          },
          body: JSON.stringify({
            schoolName: data.schoolName,
            contactPerson: data.contactPerson,
            email: data.email,
            phone: data.phone,
            preferredDate: format(data.preferredDate, "yyyy-MM-dd"),
            preferredTime: data.preferredTime,
            studentCount: data.studentCount || undefined,
            additionalInfo: data.additionalInfo || undefined,
          }),
        }
      );
      
      if (!emailResponse.ok) {
        console.warn("Email notification encountered an issue", await emailResponse.json());
      }
      
      setIsSuccess(true);
      toast({
        title: "Consultation Request Submitted",
        description: "We'll contact you shortly to confirm your appointment.",
      });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        form.reset();
        setIsSuccess(false);
        onOpenChange(false);
      }, 2000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <FormSuccess 
        title="Thank You!" 
        message="Your consultation request has been submitted successfully. We'll contact you shortly to confirm your appointment."
      />
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <ContactInfoFields form={form} />
        <PreferenceFields form={form} />
        <AdditionalInfoFields form={form} />

        <div className="flex justify-end space-x-2">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-gradient-to-r from-easy-blue to-easy-green text-white"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Request"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
