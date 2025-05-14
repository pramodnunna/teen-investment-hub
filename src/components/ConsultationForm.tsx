
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Check, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const consultationFormSchema = z.object({
  schoolName: z.string().min(2, "School name is required"),
  contactPerson: z.string().min(2, "Contact person name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  preferredDate: z.date({
    required_error: "Please select a preferred date",
  }),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  studentCount: z.string().optional(),
  additionalInfo: z.string().optional(),
});

type ConsultationFormValues = z.infer<typeof consultationFormSchema>;

type ConsultationFormProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ConsultationForm({ open, onOpenChange }: ConsultationFormProps) {
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
      const { error } = await supabase.from("school_consultations").insert({
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
            // Fix: Use the direct publishable key from SUPABASE_PUBLISHABLE_KEY instead of auth.anon_key
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
        console.warn("Email notification failed but form submitted successfully");
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Schedule a Consultation</DialogTitle>
          <DialogDescription>
            Complete the form below to schedule a consultation about our Financial Literacy Education Program for your school.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-medium text-center">Thank You!</h3>
            <p className="text-gray-600 text-center mt-2">
              Your consultation request has been submitted successfully. We'll contact you shortly to confirm your appointment.
            </p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="schoolName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>School Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter school name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactPerson"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Person</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="your@school.edu" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter phone number"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Preferred Date</FormLabel>
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        className="rounded-md border"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferredTime"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Preferred Time</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="morning" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Morning (9AM - 12PM)
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="afternoon" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Afternoon (1PM - 4PM)
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="evening" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Evening (5PM - 7PM)
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="studentCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Approximate Number of Students (Optional)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="Enter number of students" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additionalInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Information (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any specific requirements or questions?" 
                        className="resize-none h-24" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
        )}
      </DialogContent>
    </Dialog>
  );
}
