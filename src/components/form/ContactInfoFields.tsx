
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { FormField } from "./FormField";
import { ConsultationFormValues } from "../consultation/types";

interface ContactInfoFieldsProps {
  form: UseFormReturn<ConsultationFormValues>;
}

export function ContactInfoFields({ form }: ContactInfoFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="schoolName"
        label="School Name"
        render={(field) => (
          <Input placeholder="Enter school name" {...field} />
        )}
      />

      <FormField
        control={form.control}
        name="contactPerson"
        label="Contact Person"
        render={(field) => (
          <Input placeholder="Enter your full name" {...field} />
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="email"
          label="Email"
          render={(field) => (
            <Input 
              type="email" 
              placeholder="your@school.edu" 
              {...field} 
            />
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          label="Phone Number"
          render={(field) => (
            <Input 
              placeholder="Enter phone number"
              {...field} 
            />
          )}
        />
      </div>
    </>
  );
}
