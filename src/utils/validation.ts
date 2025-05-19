/**
 * Validates an Indian phone number (10 digits starting with 6, 7, 8, or 9)
 */
export function validateIndianPhoneNumber(phone: string): boolean {
  // Remove any non-digit characters
  const phoneDigits = phone.replace(/\D/g, '');
  
  // Check if it's exactly 10 digits and starts with 6, 7, 8, or 9
  const validPhonePattern = /^[6-9]\d{9}$/;
  
  return validPhonePattern.test(phoneDigits);
}

/**
 * Formats input to only allow digits and limit to 10 digits
 */
export function formatPhoneNumber(input: string): string {
  // Keep only digits
  return input.replace(/\D/g, '').slice(0, 10);
}
