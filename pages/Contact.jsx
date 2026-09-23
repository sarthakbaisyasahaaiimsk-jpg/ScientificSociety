import React, { useState } from "react";
import { Mail, MapPin, Clock, Send, MessageSquare, User, Phone, ShieldCheck } from "lucide-react";

const contacts = [
  { icon: Mail, label: "General Queries", value: "mss@aiimskalyani.edu.in", href: "mailto:mss@aiimskalyani.edu.in" },
  { icon: MessageSquare, label: "Event Partnerships", value: "events@aiimskalyani.edu.in", href: "mailto:events@aiimskalyani.edu.in" },
  { icon: ShieldCheck, label: "Technical Support", value: "tech@aiimskalyani.edu.in", href: "mailto:tech@aiimskalyani.edu.in" },
];

const hours = [
  { day: "Monday – Friday", time: "4:00 PM – 6:00 PM" },
  { day: "Saturday", time: "By appointment" },
  { day: "Sunday", time: "Closed" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div>
      <section className="pt-32 pb-12 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Contact Us</span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mt-3 max-w-3xl leading-tight">
            We'd love to hear from you
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            Questions about events, research, or partnerships? Reach out — the executive board responds within two working days.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl font-semibold mb-6">Send us a message</h2>
            {sent && (
              <div className="mb-5 p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-medium flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Thank you — your message has been received. We'll respond shortly.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-primary"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Subject</label>
                <input
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-primary"
                  placeholder="What is this about?"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-primary resize-none"
                  placeholder="Write your message..."
                />
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="w-3.5 h-3.5" /> Protected against spam — your details are never shared.
              </div>
              <button type="submit" className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition flex items-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl border border-border bg-card p-7">
              <h3 className="font-display text-lg font-semibold mb-5">Official Contact Details</h3>
              <div className="space-y-4">
                {contacts.map((c, i) => (
                  <a key={i} href={c.href} className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <c.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{c.label}</p>
                      <p className="text-sm font-medium group-hover:text-primary transition-colors">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center gap-2 mb-5">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-display text-lg font-semibold">Department Hours</h3>
              </div>
              <div className="space-y-3">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between text-sm border-b border-border pb-2.5 last:border-0">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">Executive board members are available during these hours at the society office, Block A, Room 104.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-20">
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-6 h-6 text-primary" />
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Find Us on Campus</h2>
        </div>
        <div className="rounded-2xl overflow-hidden border border-border h-[400px]">
          <iframe
            title="AIIMS Kalyani location"
            src="https://maps.google.com/maps?q=AIIMS%20Kalyani%20West%20Bengal&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}