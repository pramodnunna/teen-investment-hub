import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
}
export function PhoneNumberInput({
  value,
  onChange
}: PhoneNumberInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Basic phone number formatting - only allow numbers
    const formattedValue = e.target.value.replace(/\D/g, '');
    onChange(formattedValue);
  };
  return <div className="space-y-2">
      
      <Input id="phone-number" type="tel" placeholder="Enter your phone number" value={value} onChange={handleChange} className="rounded-full" />
    </div>;
}