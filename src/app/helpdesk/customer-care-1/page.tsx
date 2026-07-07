"use client";

import { useState } from "react";
import { Send, AlertCircle } from "lucide-react";

export default function HelpdeskCustomerCare() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `*New Helpdesk Ticket*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}

*Description:*
${formData.description}`;

    const whatsappUrl = `https://wa.me/918330887435?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30 pt-32 pb-16 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-2xl">
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Customer Care Support</h1>
            <p className="text-white/60">
              Please fill out the form below. Your ticket will be directed to our support team via WhatsApp for immediate assistance.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-white/30"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-white/80">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-white/30"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-white/80">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-white/30"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-white/80">Issue Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-white/30"
                placeholder="Brief summary of the issue"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium text-white/80">Detailed Description *</label>
              <textarea
                id="description"
                name="description"
                required
                rows={5}
                value={formData.description}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-white/30 resize-none"
                placeholder="Please describe your issue or request in detail..."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <span>Submit Ticket via WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>
              
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/40">
                <AlertCircle className="w-4 h-4" />
                <span>You will be redirected to WhatsApp securely.</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
