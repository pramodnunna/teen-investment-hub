
import { UseFormReturn } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";
import { FormField } from "./FormField";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormLabel } from "@/components/ui/form";
import { ConsultationFormValues } from "../consultation/types";

interface PreferenceFieldsProps {
  form: UseFormReturn<ConsultationFormValues>;
}

export function PreferenceFields({ form }: PreferenceFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={form.control}
        name="preferredDate"
        label="Preferred Date"
        render={(field) => (
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={field.onChange}
            disabled={(date) => date < new Date()}
            className="rounded-md border"
          />
        )}
      />

      <FormField
        control={form.control}
        name="preferredTime"
        label="Preferred Time"
        render={(field) => (
          <RadioGroup
            onValueChange={field.onChange}
            defaultValue={field.value}
            className="flex flex-col space-y-1"
          >
            <div className="flex items-center space-x-3 space-y-0">
              <RadioGroupItem value="morning" id="morning" />
              <FormLabel htmlFor="morning" className="font-normal">
                Morning (9AM - 12PM)
              </FormLabel>
            </div>
            <div className="flex items-center space-x-3 space-y-0">
              <RadioGroupItem value="afternoon" id="afternoon" />
              <FormLabel htmlFor="afternoon" className="font-normal">
                Afternoon (1PM - 4PM)
              </FormLabel>
            </div>
            <div className="flex items-center space-x-3 space-y-0">
              <RadioGroupItem value="evening" id="evening" />
              <FormLabel htmlFor="evening" className="font-normal">
                Evening (5PM - 7PM)
              </FormLabel>
            </div>
          </RadioGroup>
        )}
      />
    </div>
  );
}
