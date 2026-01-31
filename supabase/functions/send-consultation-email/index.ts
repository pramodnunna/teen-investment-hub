import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Use allowed origin from environment or default to production domain
const allowedOrigin = Deno.env.get("ALLOWED_ORIGIN") || "*";

const corsHeaders = {
  "Access-Control-Allow-Origin": allowedOrigin,
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ConsultationRequest {
  schoolName: string;
  contactPerson: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  studentCount?: string;
  additionalInfo?: string;
}

// HTML escape function to prevent injection
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Input validation functions
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

function validateConsultation(consultation: ConsultationRequest): string | null {
  if (!consultation.email || !isValidEmail(consultation.email)) {
    return "Invalid email format";
  }
  if (!consultation.phone || !isValidPhone(consultation.phone)) {
    return "Invalid phone number";
  }
  if (!consultation.schoolName || consultation.schoolName.length > 200) {
    return "School name is required and must be under 200 characters";
  }
  if (!consultation.contactPerson || consultation.contactPerson.length > 100) {
    return "Contact person is required and must be under 100 characters";
  }
  if (consultation.additionalInfo && consultation.additionalInfo.length > 1000) {
    return "Additional info must be under 1000 characters";
  }
  if (consultation.studentCount && consultation.studentCount.length > 20) {
    return "Student count is too long";
  }
  return null;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Consultation request received");
    
    // Check if Resend API key is available
    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) {
      console.error("Email service not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const consultation: ConsultationRequest = await req.json();
    
    // Validate input
    const validationError = validateConsultation(consultation);
    if (validationError) {
      console.log("Validation failed:", validationError);
      return new Response(
        JSON.stringify({ error: validationError }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Log only non-PII data
    console.log("Processing consultation for school");

    // Send notification email to verified email address
    const notificationEmail = "p195471@gmail.com";
    
    try {
      const emailData = {
        from: "EasyMoney Notifications <onboarding@resend.dev>",
        to: notificationEmail,
        subject: "New School Consultation Request",
        html: `
          <h1>New Consultation Request</h1>
          <p><strong>School:</strong> ${escapeHtml(consultation.schoolName)}</p>
          <p><strong>Contact Person:</strong> ${escapeHtml(consultation.contactPerson)}</p>
          <p><strong>Email:</strong> ${escapeHtml(consultation.email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(consultation.phone)}</p>
          <p><strong>Preferred Date:</strong> ${escapeHtml(consultation.preferredDate)}</p>
          <p><strong>Preferred Time:</strong> ${escapeHtml(consultation.preferredTime)}</p>
          ${consultation.studentCount ? `<p><strong>Student Count:</strong> ${escapeHtml(consultation.studentCount)}</p>` : ''}
          ${consultation.additionalInfo ? `<p><strong>Additional Info:</strong> ${escapeHtml(consultation.additionalInfo)}</p>` : ''}
          <hr>
          <p><strong>Note:</strong> Please reply to ${escapeHtml(consultation.email)} to confirm the consultation.</p>
        `,
      };

      const emailResponse = await resend.emails.send(emailData);

      if (emailResponse.error) {
        console.error("Email API error occurred");
        throw new Error("Email service error");
      }
      
      console.log("Consultation processed successfully");
      
      return new Response(JSON.stringify({ 
        message: "Consultation request received and notification sent",
        notification: "Email sent successfully"
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    } catch (emailError: any) {
      console.error("Email sending failed:", emailError.message);
      
      return new Response(
        JSON.stringify({ error: "Email sending failed" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
  } catch (error: any) {
    console.error("Function execution error:", error.message);
    return new Response(
      JSON.stringify({ error: "Function execution failed" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
