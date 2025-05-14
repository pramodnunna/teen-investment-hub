
import { z } from "zod";

export const consultationFormSchema = z.object({
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

export type ConsultationFormValues = z.infer<typeof consultationFormSchema>;
