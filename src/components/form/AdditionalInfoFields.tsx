
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField } from "./FormField";
import { ConsultationFormValues } from "../consultation/types";

interface AdditionalInfoFieldsProps {
  form: UseFormReturn<ConsultationFormValues>;
}

export function AdditionalInfoFields({ form }: AdditionalInfoFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="studentCount"
        label="Approximate Number of Students (Optional)"
        render={(field) => (
          <Input 
            type="number" 
            placeholder="Enter number of students" 
            {...field} 
          />
        )}
      />

      <FormField
        control={form.control}
        name="additionalInfo"
        label="Additional Information (Optional)"
        render={(field) => (
          <Textarea 
            placeholder="Any specific requirements or questions?" 
            className="resize-none h-24" 
            {...field} 
          />
        )}
      />
    </>
  );
}
