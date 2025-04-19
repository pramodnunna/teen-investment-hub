
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function PhoneNumberInput({ value, onChange }: PhoneNumberInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Basic phone number formatting - only allow numbers
    const formattedValue = e.target.value.replace(/\D/g, '');
    onChange(formattedValue);
  };

  return (
    <FormItem>
      <FormLabel>Phone Number</FormLabel>
      <FormControl>
        <Input 
          type="tel" 
          placeholder="Enter your phone number" 
          value={value}
          onChange={handleChange}
          className="rounded-full"
        />
      </FormControl>
    </FormItem>
  );
}
