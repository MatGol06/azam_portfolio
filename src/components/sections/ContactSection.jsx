"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Send } from "lucide-react";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Mock API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      e.target.reset();
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-8 md:p-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-secondary mb-4">Let's build something great.</h3>
          <p className="text-muted">Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-muted">Name</label>
              <input type="text" id="name" required className="bg-background border border-border rounded-lg px-4 py-3 text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200" placeholder="Azam Tajuddin" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-muted">Email</label>
              <input type="email" id="email" required className="bg-background border border-border rounded-lg px-4 py-3 text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200" placeholder="azam@sdegroup.com.my" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-muted">Message</label>
            <textarea id="message" required rows={5} className="bg-background border border-border rounded-lg px-4 py-3 text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-none" placeholder="Briefly describe your project or enquiry..."></textarea>
          </div>
          
          <Button type="submit" size="lg" className="w-full sm:w-auto self-end" disabled={loading || success}>
            {loading ? "Sending..." : success ? "Message Sent!" : (
              <>Send Message <Send size={18} className="ml-2" /></>
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
}
