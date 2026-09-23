import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import StatCounter from "@/components/StatCounter";
import hero1 from "@/images/hero-1.jpg";
import hero2 from "@/images/hero-2.jpg";
import hero3 from "@/images/hero-3.jpg";
import aboutSnippet from "@/images/about-snippet.jpg";
import CountdownTimer from "@/components/CountdownTimer";
import {
  ArrowRight, Calendar, Microscope, Award, Users, FlaskConical,
  ChevronLeft, ChevronRight, Megaphone, MapPin
} from "lucide-react";

// NOTE: download these from Base44's media library and place them under
// public/images/, then adjust the filenames below if needed.
const heroSlides = [
  {
    image: hero1,
    eyebrow: "Welcome to the Society",
    title: "Where Curiosity Meets Clinical Excellence",
    subtitle: "The official student research society of AIIMS Kalyani — building the next generation of physician-scientists.",
  },
  {
    image: hero2,
    eyebrow: "Research First",
    title: "From Bench to Bedside, Led by Students",
    subtitle: "Original research, systematic reviews, and case reports — published in indexed journals, mentored by faculty.",
  },
  {
    image: hero3,
    eyebrow: "Annual Symposium",
    title: "Conferences, Workshops & National Meets",
    subtitle: "Flagship fests, hands-on workshops, and lectures by eminent clinicians from across the country.",
  },
];

const announcements = [
  { title: "Abstract submissions open for Synapse 2026 — deadline October 10", date: "2026-09-12" },
  { title: "ICMR-STS 2026 short-term studentship applications now open", date: "2026-09-08" },
  { title: "Endocrinology Quiz prelims scheduled for September 28", date: "2026-09-05" },
  { title: "BLS & ACLS hands-on workshop — registrations live", date: "2026-09-01" },
];

const events = [
  {
    title: "Synapse 2026 — Annual Research Symposium",
    category: "Symposium",
    start_date: "2026-11-14T09:00:00",
    location: "Auditorium, AIIMS Kalyani",
    description: "Our flagship two-day symposium featuring paper presentations, guest lectures, and a national quiz.",
  },
  {
    title: "Endocrinology Quiz — Prelinary Round",
    category: "Academic Competition",
    start_date: "2026-09-28T14:00:00",
    location: "Lecture Hall 2",
    description: "Inter-batch quiz on endocrine physiology, pathology, and clinical endocrinology.",
  },
  {
    title: "BLS & ACLS Hands-on Workshop",
    category: "Workshop",
    start_date: "2026-10-05T10:00:00",
    location: "Skills Lab, Block C",
    description: "Certified basic and advanced life support training with manikin-based simulation.",
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);

  const nextSlide = useCallback(() => setSlide((s) => (s + 1) % heroSlides.length), []);
  const prevSlide = () => setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const id = setInterval(nextSlide, 6000);
    return () => clearInterval(id);
  }, [nextSlide]);

  return (
    <div>
      {/* Announcement ticker */}
      <div className="bg-primary text-primary-foreground py-2.5 mt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center gap-3">
          <Megaphone className="w-4 h-4 shrink-0" />
          <div className="overflow-hidden flex-1">
            <div className="flex gap-12 animate-[ticker_30s_linear_infinite] whitespace-nowrap text-sm">
              {[...announcements, ...announcements].map((a, i) => (
                <span key={i} className="inline-flex items-center gap-2">
                  <span className="opacity-60">●</span> {a.title}
                </span>
              ))}
            </div>
          </div>
        </div>
        <style>{`@keyframes ticker {from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      </div>

      {/* Hero */}
      <section className="relative h-[78vh] min-h-[560px] overflow-hidden">
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
          >
            <Image src={s.image} fittingType="fill" className="w-full h-full" alt={s.title} />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-foreground/20" />
          </div>
        ))}

        <div className="relative h-full max-w-7xl mx-auto px-5 lg:px-8 flex items-center">
          <div className="max-w-2xl text-background">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-medium uppercase tracking-wider mb-5">
              {heroSlides[slide].eyebrow}
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.08] tracking-tight">
              {heroSlides[slide].title}
            </h1>
            <p className="mt-5 text-lg text-background/80 max-w-xl leading-relaxed">
              {heroSlides[slide].subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/research" className="px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:brightness-110 transition flex items-center gap-2">
                Explore Research <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/events" className="px-6 py-3 rounded-xl bg-background/10 backdrop-blur-sm border border-background/30 text-background font-medium hover:bg-background/20 transition">
                Join Us
              </Link>
            </div>
          </div>
        </div>

        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/30 transition hidden md:flex">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/30 transition hidden md:flex">
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`h-1.5 rounded-full transition-all ${i === slide ? "w-8 bg-accent" : "w-2 bg-background/50"}`}
            />
          ))}
        </div>
      </section>

      {/* About snippet */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">About the Society</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 leading-tight">
              A community of medical undergraduates driven by inquiry
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              The Medical Student Society at AIIMS Kalyani is a student-led body dedicated to cultivating
              scientific temperament, clinical acumen, and research ethics among future physicians. Affiliated
              with the All India Institute of Medical Sciences, Kalyani, we provide a platform where medical
              undergraduates engage in original research, academic competitions, and skill-building workshops.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From ICMR short-term studentships to national-level symposia, we empower students to move beyond
              the curriculum — to question, investigate, and contribute meaningfully to medical science.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Read our story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image src={aboutSnippet} fittingType="fill" alt="Medical students" className="w-full h-full" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-lg hidden sm:block">
              <div className="font-display text-2xl font-semibold">Est. 2019</div>
              <div className="text-xs text-primary-foreground/70">AIIMS Kalyani</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary/40 py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter value={320} label="Active Researchers" suffix="+" />
            <StatCounter value={87} label="Published Papers" suffix="+" />
            <StatCounter value={24} label="Annual Events" />
            <StatCounter value={40} label="Workshops Conducted" suffix="+" />
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Mark Your Calendar</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-2">Upcoming Events & Deadlines</h2>
          </div>
          <Link to="/events" className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all text-sm">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((evt, i) => (
            <div key={i} className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{evt.category}</span>
              </div>
              <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-primary transition-colors">{evt.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{evt.description}</p>
              <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" /> {new Date(evt.start_date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" /> {evt.location}
              </div>
              <div className="mt-5 pt-4 border-t border-border">
                <CountdownTimer targetDate={evt.start_date} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest announcements */}
      <section className="bg-foreground text-background py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div>
              <span className="text-sm font-medium text-accent uppercase tracking-wider">Stay Informed</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mt-2">Latest Announcements</h2>
              <p className="mt-4 text-background/60 leading-relaxed">
                Important circulars, deadlines, and news from the society. Don't miss a submission window or a guest lecture.
              </p>
              <Link to="/events" className="mt-6 inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all">
                All updates <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-2 space-y-3">
              {announcements.slice(0, 4).map((a, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-background/5 hover:bg-background/10 transition-colors border border-background/10">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                    <Megaphone className="w-4 h-4 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-background">{a.title}</p>
                    <p className="text-xs text-background/40 mt-1">
                      {new Date(a.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="relative rounded-3xl bg-primary overflow-hidden p-10 md:p-16 text-center">
          <FlaskConical className="absolute -top-6 -right-6 w-40 h-40 text-primary-foreground/10" />
          <Users className="absolute -bottom-8 -left-8 w-44 h-44 text-primary-foreground/10" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground relative">
            Ready to begin your research journey?
          </h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto relative">
            Join a community of curious minds. Access mentors, grants, and opportunities to publish your work.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 relative">
            <Link to="/research" className="px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:brightness-110 transition flex items-center gap-2">
              <Microscope className="w-4 h-4" /> Research Portal
            </Link>
            <Link to="/events" className="px-6 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground font-medium hover:bg-primary-foreground/20 transition flex items-center gap-2">
              <Award className="w-4 h-4" /> Browse Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}