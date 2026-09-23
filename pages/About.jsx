import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import {
  Target, Eye, FileText, Download, Mail, GraduationCap,
  Award, BookOpen, Stethoscope, CheckCircle2
} from "lucide-react";

const executives = [
  { name: "Dr. Ananya Roy", role: "President", bio: "Final-year MBBS with three ICMR-STS projects and a PubMed publication in cardiology.", email: "president@aiimskalyani.edu.in" },
  { name: "Rahul Verma", role: "Vice President", bio: "Coordinates academic competitions and inter-college quiz partnerships.", email: "vp@aiimskalyani.edu.in" },
  { name: "Sneha Gupta", role: "General Secretary", bio: "Manages society operations, minutes, and institutional correspondence.", email: "secretary@aiimskalyani.edu.in" },
  { name: "Arjun Nair", role: "Research Lead", bio: "Leads the student research portal and publication mentoring program.", email: "research@aiimskalyani.edu.in" },
  { name: "Priya Sharma", role: "Events Lead", bio: "Curates the annual symposium calendar and workshop logistics.", email: "events@aiimskalyani.edu.in" },
  { name: "Karthik Menon", role: "Outreach Lead", bio: "Handles alumni relations, guest lectures, and media partnerships.", email: "outreach@aiimskalyani.edu.in" },
];

const advisors = [
  { name: "Prof. (Dr.) Ramesh Iyer", role: "Faculty Advisor & Patron", bio: "Professor & Head, Department of General Medicine" },
  { name: "Prof. (Dr.) Lakshmi Pillai", role: "Faculty Advisor", bio: "Professor, Department of Physiology" },
  { name: "Dr. Vikram Singh", role: "Research Mentor", bio: "Associate Professor, Department of Community Medicine" },
];

const timeline = [
  { year: "2019", title: "Inception", text: "AIIMS Kalyani admits its first MBBS batch; the society is founded within months." },
  { year: "2020", title: "First Research Grant", text: "Five students secure ICMR-STS short-term studentships in the inaugural cycle." },
  { year: "2021", title: "Virtual Symposium", text: "Synapse goes online, hosting 400+ delegates from 30 institutions nationwide." },
  { year: "2023", title: "First PubMed Publication", text: "A student-led systematic review is published in an indexed international journal." },
  { year: "2025", title: "Annual Fest Returns", text: "On-ground Synapse resumes with hands-on workshops and a national quiz finale." },
];

const objectives = [
  { icon: BookOpen, title: "Scientific Temperament", text: "Encourage evidence-based thinking and a questioning mindset among undergraduates." },
  { icon: Stethoscope, title: "Clinical Acumen", text: "Sharpen diagnostic reasoning through case presentations and clinical role-plays." },
  { icon: Award, title: "Research Ethics", text: "Instill integrity, transparency, and responsible conduct in all scholarly work." },
  { icon: GraduationCap, title: "Academic Mentorship", text: "Connect students with faculty mentors and senior researchers for guided projects." },
];

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-12 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">About Us</span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mt-3 max-w-3xl leading-tight">
            Building physician-scientists, one curious mind at a time
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            The Medical Student Society is the academic and research heartbeat of AIIMS Kalyani's undergraduate community.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border p-8 bg-card">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-semibold">Our Vision</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To cultivate a generation of medical professionals who lead with inquiry, practice with empathy,
              and contribute to science with integrity — making AIIMS Kalyani a recognised hub of undergraduate research.
            </p>
          </div>
          <div className="rounded-2xl border border-border p-8 bg-card">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-accent-foreground" />
            </div>
            <h2 className="font-display text-2xl font-semibold">Our Mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To foster scientific temperament, clinical acumen, and research ethics among medical undergraduates
              through structured mentorship, academic competitions, hands-on workshops, and platforms for publication.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {objectives.map((o, i) => (
            <div key={i} className="rounded-2xl bg-secondary/40 p-6">
              <o.icon className="w-7 h-7 text-primary mb-4" />
              <h3 className="font-display font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{o.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Executive Board */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">The Team</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-2">Executive Board 2025–26</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Elected student leaders who steer the society's initiatives throughout the academic year.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {executives.map((m, i) => (
            <div key={i} className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-display text-xl font-semibold shrink-0">
                  {m.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">{m.name}</h3>
                  <span className="text-sm text-primary font-medium">{m.role}</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              <a href={`mailto:${m.email}`} className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> {m.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Faculty Advisors */}
      <section className="bg-secondary/40 py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Guidance</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-2">Faculty Advisors & Patrons</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {advisors.map((a, i) => (
              <div key={i} className="rounded-2xl bg-card border border-border p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <GraduationCap className="w-9 h-9 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg">{a.name}</h3>
                <span className="text-sm text-primary font-medium block mt-1">{a.role}</span>
                <p className="mt-3 text-sm text-muted-foreground">{a.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Constitution */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <FileText className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold">Constitution & Guidelines</h3>
              <p className="mt-1 text-sm text-muted-foreground">The society's charter, code of conduct, and operational rulebook.</p>
            </div>
          </div>
          <a href="#" className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition flex items-center gap-2 shrink-0">
            <Download className="w-4 h-4" /> Download PDF
          </a>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Journey</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-2">Milestones Since Inception</h2>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          {timeline.map((t, i) => (
            <div key={i} className={`relative flex md:items-center mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="hidden md:block flex-1" />
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1.5 ring-4 ring-background" />
              <div className={`ml-12 md:ml-0 md:flex-1 ${i % 2 === 0 ? "md:pl-10" : "md:pr-10 md:text-right"}`}>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <span className="text-primary font-display font-semibold text-lg">{t.year}</span>
                  <h3 className="font-semibold mt-1">{t.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{t.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}