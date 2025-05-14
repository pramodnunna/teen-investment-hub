
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

    // Send email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "EasyMoney Notifications <onboarding@resend.dev>",
      to: ["admin@yourdomain.com"], // Replace with your admin email
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
      `,
    });

    // Send confirmation email to the school contact
    const contactEmailResponse = await resend.emails.send({
      from: "EasyMoney Financial Literacy <onboarding@resend.dev>",
      to: [consultation.email],
      subject: "We've Received Your Consultation Request",
      html: `
        <h1>Thank You for Your Interest!</h1>
        <p>Dear ${consultation.contactPerson},</p>
        <p>We have received your request to schedule a consultation about our Financial Literacy Education Program for ${consultation.schoolName}.</p>
        <p><strong>Details of your request:</strong></p>
        <ul>
          <li>Preferred Date: ${consultation.preferredDate}</li>
          <li>Preferred Time: ${consultation.preferredTime}</li>
        </ul>
        <p>Our team will review your request and get back to you shortly to confirm your appointment.</p>
        <p>If you have any questions in the meantime, please don't hesitate to contact us.</p>
        <p>Best regards,<br>The EasyMoney Financial Literacy Team</p>
      `,
    });

    console.log("Admin email sent:", adminEmailResponse);
    console.log("Confirmation email sent:", contactEmailResponse);

    return new Response(JSON.stringify({ 
      message: "Emails sent successfully",
      admin: adminEmailResponse,
      confirmation: contactEmailResponse
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
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
