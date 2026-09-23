import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Activity, Linkedin, Instagram, Youtube, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-foreground text-background/80 mt-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <div className="font-display font-semibold text-background text-[15px]">AIIMS Kalyani</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-background/50">Medical Student Society</div>
              </div>
            </div>
            <p className="text-sm text-background/60 leading-relaxed max-w-xs">
              Fostering scientific temperament, clinical acumen, and research ethics among medical undergraduates at AIIMS Kalyani.
            </p>
            <div className="flex gap-3 mt-5">
              {[Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "About Us", path: "/about" },
                { label: "Events & Conferences", path: "/events" },
                { label: "Research & Publications", path: "/research" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact Us", path: "/contact" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-background/60 hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>AIIMS Kalyani, Campus Road, Kalyani, West Bengal 741245</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a href="mailto:mss@aiimskalyani.edu.in" className="hover:text-primary transition-colors">mss@aiimskalyani.edu.in</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background text-sm mb-4">Newsletter</h4>
            <p className="text-sm text-background/60 mb-3">Get event deadlines and research opportunities in your inbox.</p>
            {subscribed ? (
              <p className="text-sm text-primary font-medium">✓ You're subscribed. Welcome aboard!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 px-3 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/40 text-sm focus:outline-none focus:border-primary"
                />
                <button type="submit" className="px-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-background/40">
          <p>© {new Date().getFullYear()} AIIMS Kalyani Medical Student Society. All rights reserved.</p>
          <p className="text-center md:text-right max-w-md">
            An independent student body of AIIMS Kalyani. Content does not represent official institutional policy.
          </p>
        </div>
      </div>
    </footer>
  );
}