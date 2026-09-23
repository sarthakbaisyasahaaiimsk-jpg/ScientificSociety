import React, { useState, useMemo } from "react";
import {
  Microscope, FileText, Award, Users, Search, ExternalLink,
  BookOpen, FlaskConical, PenLine, ArrowRight, Lightbulb, Mail
} from "lucide-react";

const resources = [
  { icon: FileText, title: "Case Report Templates", text: "Structured templates for writing medical case reports following CARE guidelines." },
  { icon: BookOpen, title: "Systematic Review Guides", text: "Step-by-step protocols for PRISMA-compliant systematic reviews and meta-analyses." },
  { icon: FlaskConical, title: "Original Research Framework", text: "From hypothesis to manuscript — a framework for designing and writing original studies." },
  { icon: PenLine, title: "Reference & Citation Tools", text: "Mendeley/Zotero setup guides and Vancouver/APA citation quick references." },
];

const grants = [
  { title: "ICMR Short-Term Studentship (STS)", desc: "Annual summer studentship for MBBS students to complete a short research project with a stipend. Applications open around April–May.", points: ["Submit a 300-word synopsis with your guide", "Project duration: 2 months during vacation", "Final report submission by October", "Eligible for ICMR-STS certificate"] },
  { title: "Institutional Research Grants", desc: "AIIMS Kalyani intramural grants supporting undergraduate pilot studies and conference travel.", points: ["Up to ₹25,000 per project", "Requires faculty co-PI endorsement", "Rolling submissions, reviewed quarterly"] },
  { title: "External Conference Travel Support", desc: "Partial funding for presenting accepted abstracts at national and international conferences.", points: ["Requires acceptance proof", "Covers registration + partial travel", "Apply at least 30 days before the event"] },
];

const publications = [
  { title: "Prevalence of metabolic syndrome among young adults in West Bengal", authors: "Roy A, Verma R, Iyer S", journal: "Indian J Endocrinol Metab", year: 2025, type: "Original Research", indexed: "PubMed" },
  { title: "Awareness of organ donation among medical students: a cross-sectional study", authors: "Gupta S, Menon K", journal: "J Family Med Prim Care", year: 2025, type: "Cross-sectional", indexed: "Scopus" },
  { title: "A rare presentation of Guillain-Barré syndrome post-viral illness", authors: "Nair A, Sharma P", journal: "BMJ Case Rep", year: 2024, type: "Case Report", indexed: "PubMed" },
  { title: "Telemedicine adoption in rural West Bengal: a systematic review", authors: "Roy A, Singh V, Gupta S", journal: "J Telemed Telecare", year: 2024, type: "Systematic Review", indexed: "Scopus" },
  { title: "Hand hygiene compliance in a tertiary care setting", authors: "Verma R, Menon K, Nair A", journal: "J Hosp Infect", year: 2024, type: "Original Research", indexed: "PubMed" },
  { title: "Anatomical variations of the median nerve: a cadaveric study", authors: "Sharma P, Iyer S", journal: "Clin Anat", year: 2023, type: "Original Research", indexed: "PubMed" },
];

const collabPosts = [
  { title: "Looking for co-investigators: AI in diabetic retinopathy screening", author: "Ananya R.", tags: ["AI", "Ophthalmology"], status: "Open" },
  { title: "Need a mentor for a community medicine survey on vaccination hesitancy", author: "Rahul V.", tags: ["Community Medicine", "Survey"], status: "Open" },
  { title: "Systematic review team forming — antibiotic stewardship", author: "Priya S.", tags: ["Systematic Review", "Pharmacology"], status: "Open" },
];

export default function Research() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    return publications.filter((p) => {
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase()) || p.authors.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = filter === "All" || p.indexed === filter;
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <div>
      <section className="pt-32 pb-12 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Research & Publications</span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mt-3 max-w-3xl leading-tight">
            From hypothesis to publication — the student research engine
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            Resources, grants, a searchable publication archive, and a collaboration board to find your next project.
          </p>
        </div>
      </section>

      {/* Research Portal */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="flex items-center gap-3 mb-8">
          <Microscope className="w-6 h-6 text-primary" />
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Student Research Portal</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map((r, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 hover:shadow-md hover:border-primary/30 transition-all">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.text}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2.5 transition-all">
                Access <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Grants */}
      <section className="bg-secondary/40 py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-primary" />
            <h2 className="font-display text-2xl md:text-3xl font-semibold">ICMR-STS & Institutional Grants</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {grants.map((g, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-7">
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
                <ul className="mt-4 space-y-2">
                  {g.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications archive */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-6 h-6 text-primary" />
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Published Works Showcase</h2>
        </div>
        <p className="text-muted-foreground mb-6 max-w-2xl">
          A searchable archive of papers published by AIIMS Kalyani students in indexed journals.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title or author..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex gap-2">
            {["All", "PubMed", "Scopus"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-colors ${
                  filter === f ? "bg-primary text-primary-foreground border-primary" : "border-border bg-card hover:bg-secondary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {filtered.map((p, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-medium">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.authors} · <span className="italic">{p.journal}</span> · {p.year}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="px-2.5 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground">{p.type}</span>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">{p.indexed}</span>
                <a href="#" className="w-8 h-8 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <p className="text-center text-muted-foreground py-10">No publications match your search.</p>}
        </div>
      </section>

      {/* Collaboration board */}
      <section className="bg-secondary/40 py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Collaboration Board</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Pitch a research idea, find co-investigators, or connect with a mentor. The board is open to all members.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {collabPosts.map((p, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-medium flex items-center gap-1.5">
                    <Lightbulb className="w-3 h-3" /> {p.status}
                  </span>
                </div>
                <h3 className="font-display font-semibold leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">Posted by {p.author}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-secondary text-xs text-muted-foreground">{t}</span>
                  ))}
                </div>
                <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2.5 transition-all">
                  <Mail className="w-3.5 h-3.5" /> Reach out
                </a>
              </div>
            ))}
          </div>
          <button className="mt-8 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition flex items-center gap-2">
            <PenLine className="w-4 h-4" /> Post a new idea
          </button>
        </div>
      </section>
    </div>
  );
}