
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";
import { formatPhoneNumber, validateIndianPhoneNumber } from '@/utils/validation';

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function PhoneNumberInput({
  value,
  onChange
}: PhoneNumberInputProps) {
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Format and limit to 10 digits
    const formattedValue = formatPhoneNumber(e.target.value);
    onChange(formattedValue);
    
    // Clear error state when user is typing
    if (error) setError('');
  };
  
  const handleBlur = () => {
    // Validate on blur only if there's a value
    if (value && !validateIndianPhoneNumber(value)) {
      setError('Please enter a valid 10-digit number starting with 6, 7, 8, or 9');
    } else {
      setError('');
    }
  };

  return (
    <div className="space-y-1">
      <Input 
        id="phone-number" 
        type="tel" 
        placeholder="10-digit mobile number" 
        value={value} 
        onChange={handleChange}
        onBlur={handleBlur}
        className={`rounded-full ${error ? 'border-red-500' : ''}`} 
      />
      {error && (
        <div className="text-xs text-red-500 flex items-center mt-1">
          <AlertCircle className="w-3 h-3 mr-1" />
          {error}
        </div>
      )}
    </div>
  );
}
