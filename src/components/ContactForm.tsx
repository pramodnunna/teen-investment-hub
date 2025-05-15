
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useIsMobile } from "@/hooks/use-mobile";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          { name, email, phone, message }
        ]);
      
      if (error) throw error;
      
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      // Reset the form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-6 bg-white rounded-lg shadow-sm overflow-hidden`}>
      {/* Contact Form */}
      <div className="p-4 md:p-6">
        <h3 className="font-semibold text-xl mb-4">Send Us a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <Input
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone (optional)</label>
            <Input
              id="phone"
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <Textarea
              id="message"
              placeholder="How can we help you?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[100px] md:min-h-[120px] w-full"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
      
      {/* Contact Information */}
      <div className="bg-gray-50 p-4 md:p-6 flex flex-col justify-center">
        <h3 className="text-lg font-semibold mb-4 md:mb-6">Our Contact Information</h3>
        
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-easy-blue mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium">Address</h4>
              <a 
                href="https://maps.app.goo.gl/wG9v3vqxXpAa5p2KA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-easy-blue hover:underline text-sm md:text-base"
              >
                T-Hub Phase 2<br />
                20, Inorbit Mall Rd, Vittal Rao Nagar, Madhapur<br />
                Hyderabad, Telangana 500081
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-easy-green mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium">Phone</h4>
              <p className="text-gray-600 text-sm md:text-base">+91 9578175555</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-easy-red mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium">Email</h4>
              <a href="mailto:hello@paywitheasy.com" className="text-gray-600 hover:text-easy-blue hover:underline text-sm md:text-base">
                hello@paywitheasy.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
