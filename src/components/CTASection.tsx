import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export function CTASection() {
  return <section className="py-20 px-4 bg-gradient-to-r from-easy-green/10 via-easy-blue/10 to-easy-red/10">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Help Your Teen Build a Financial Future?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">Join thousands of families already using EASY to teach their teens about money management, saving, and investing — all in one secure platform.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="rounded-full px-8 py-6 bg-gradient-to-r from-easy-green to-easy-blue text-white hover:opacity-90 text-lg">
              Open an Account
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 border-easy-blue text-easy-blue hover:bg-easy-blue hover:text-white text-lg">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
}