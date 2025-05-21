
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const consultation: ConsultationRequest = await req.json();

    // Send notification email to your own verified email address
    // Update this to a working verified email address
    const notificationEmail = "hello@paywitheasy.com"; 
    
    console.log("Attempting to send email to:", notificationEmail);
    
    try {
      const emailResponse = await resend.emails.send({
        from: "EasyMoney Notifications <onboarding@resend.dev>",
        to: notificationEmail,
        subject: "New School Consultation Request",
        html: `
          <h1>New Consultation Request</h1>
          <p><strong>School:</strong> ${consultation.schoolName}</p>
          <p><strong>Contact Person:</strong> ${consultation.contactPerson}</p>
          <p><strong>Email:</strong> ${consultation.email}</p>
          <p><strong>Phone:</strong> ${consultation.phone}</p>
          <p><strong>Preferred Date:</strong> ${consultation.preferredDate}</p>
          <p><strong>Preferred Time:</strong> ${consultation.preferredTime}</p>
          ${consultation.studentCount ? `<p><strong>Student Count:</strong> ${consultation.studentCount}</p>` : ''}
          ${consultation.additionalInfo ? `<p><strong>Additional Info:</strong> ${consultation.additionalInfo}</p>` : ''}
          <hr>
          <p><strong>Note:</strong> Since you are using Resend's free tier, confirmation emails to the requester cannot be sent automatically. 
          You will need to reply to ${consultation.email} manually or verify your domain with Resend.</p>
        `,
      });

      console.log("Email response:", emailResponse);
      
      return new Response(JSON.stringify({ 
        message: "Consultation request received",
        notification: emailResponse
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    } catch (emailError: any) {
      console.error("Error sending email:", emailError);
      
      return new Response(
        JSON.stringify({ 
          error: "Email sending failed", 
          details: emailError.message,
          code: emailError.statusCode || 500
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
  } catch (error: any) {
    console.error("Error in send-consultation-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
