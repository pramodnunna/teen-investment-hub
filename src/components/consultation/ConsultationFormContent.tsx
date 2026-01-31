
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
      
      // Send email notification using Supabase functions
      const { error: emailError } = await supabase.functions.invoke(
        'send-consultation-email',
        {
          body: {
            schoolName: data.schoolName,
            contactPerson: data.contactPerson,
            email: data.email,
            phone: data.phone,
            preferredDate: format(data.preferredDate, "yyyy-MM-dd"),
            preferredTime: data.preferredTime,
            studentCount: data.studentCount || undefined,
            additionalInfo: data.additionalInfo || undefined,
          },
        }
      );
      
      if (emailError) {
        console.error("Email notification failed:", emailError.message);
        toast({
          title: "Request Saved",
          description: "Your request was saved, but email notification failed. We'll review your request manually.",
        });
        setIsSuccess(true);
        setTimeout(() => {
          form.reset();
          setIsSuccess(false);
          onOpenChange(false);
        }, 2000);
        return;
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
      
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error("Form submission error:", errorMessage);
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
