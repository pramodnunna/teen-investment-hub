
import { Check } from "lucide-react";

interface FormSuccessProps {
  title: string;
  message: string;
}

export function FormSuccess({ title, message }: FormSuccessProps) {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
        <Check className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-xl font-medium text-center">{title}</h3>
      <p className="text-gray-600 text-center mt-2">{message}</p>
    </div>
  );
}
