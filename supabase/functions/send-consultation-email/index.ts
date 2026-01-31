import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

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
    console.log("Received consultation request");
    
    // Check if Resend API key is available
    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) {
      console.error("RESEND_API_KEY environment variable is not set");
      return new Response(
        JSON.stringify({ 
          error: "Email service not configured", 
          details: "Missing API key"
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const consultation: ConsultationRequest = await req.json();
    console.log("Parsed consultation data:", {
      schoolName: consultation.schoolName,
      contactPerson: consultation.contactPerson,
      email: consultation.email
    });

    // Send notification email to verified email address
    // NOTE: For Resend free tier, emails can only be sent to verified addresses
    const notificationEmail = "p195471@gmail.com";
    
    console.log("Attempting to send email to:", notificationEmail);
    console.log("Using API key (first 10 chars):", apiKey.substring(0, 10) + "...");
    
    try {
      const emailData = {
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
          <p><strong>Note:</strong> Please reply to ${consultation.email} to confirm the consultation.</p>
        `,
      };

      console.log("Email payload prepared:", {
        from: emailData.from,
        to: emailData.to,
        subject: emailData.subject
      });

      const emailResponse = await resend.emails.send(emailData);

      console.log("Email response received:", emailResponse);
      
      if (emailResponse.error) {
        console.error("Resend API returned error:", emailResponse.error);
        throw new Error(`Resend API error: ${JSON.stringify(emailResponse.error)}`);
      }
      
      return new Response(JSON.stringify({ 
        message: "Consultation request received and notification sent",
        emailId: emailResponse.data?.id,
        notification: "Email sent successfully"
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    } catch (emailError: any) {
      console.error("Error sending email:", emailError);
      console.error("Error details:", {
        message: emailError.message,
        statusCode: emailError.statusCode,
        name: emailError.name,
        stack: emailError.stack
      });
      
      return new Response(
        JSON.stringify({ 
          error: "Email sending failed", 
          details: emailError.message,
          code: emailError.statusCode || 500,
          type: emailError.name || "Unknown error"
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
      JSON.stringify({ 
        error: "Function execution failed",
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
