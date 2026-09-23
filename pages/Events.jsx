import React, { useState } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  ArrowRight,
  GraduationCap,
  Microscope,
  Users,
  Trophy,
} from "lucide-react";

const events = [
  {
    title: "Research & Innovation Workshop",
    date: "Upcoming",
    category: "Research",
    icon: Microscope,
    description:
      "Interactive sessions designed to help medical students explore research methodology, scientific writing, and evidence-based medicine.",
    details: ["Research methodology", "Scientific writing", "Evidence-based medicine"],
  },
  {
    title: "Clinical Skills Workshop",
    date: "Upcoming",
    category: "Clinical Skills",
    icon: GraduationCap,
    description:
      "Hands-on learning sessions focused on developing practical clinical skills beyond the classroom.",
    details: ["Hands-on demonstrations", "Clinical skills", "Interactive learning"],
  },
  {
    title: "Student Scientific Quiz",
    date: "Coming Soon",
    category: "Quiz",
    icon: Trophy,
    description:
      "Test your medical knowledge through engaging academic quizzes covering multiple disciplines.",
    details: ["Medical sciences", "Competitive quiz", "Certificates"],
  },
  {
    title: "Student Research Meet",
    date: "Coming Soon",
    category: "Community",
    icon: Users,
    description:
      "Connect with fellow students, researchers, and mentors to exchange ideas and build research collaborations.",
    details: ["Networking", "Research ideas", "Mentorship"],
  },
];

const categories = ["All", "Research", "Clinical Skills", "Quiz", "Community"];

export default function Events() {
  const [filter, setFilter] = useState("All");

  const filteredEvents =
    filter === "All"
      ? events
      : events.filter((event) => event.category === filter);

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Events & Activities
          </span>

          <h1 className="font-display text-4xl md:text-5xl font-semibold mt-3 max-w-3xl leading-tight">
            Learn. Connect. Explore.
          </h1>

          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            Workshops, scientific quizzes, research meets, and academic
            activities organised by the AIIMS Kalyani Medical Student Society.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <CalendarDays className="w-6 h-6 text-primary" />
              <h2 className="font-display text-2xl md:text-3xl font-semibold">
                Upcoming Events
              </h2>
            </div>

            <p className="text-muted-foreground max-w-2xl">
              Discover opportunities to learn new skills, participate in
              academic activities, and connect with the student research
              community.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${
                  filter === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border bg-card hover:bg-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Event cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredEvents.map((event, index) => {
            const Icon = event.icon;

            return (
              <article
                key={index}
                className="rounded-2xl border border-border bg-card p-7 hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                    {event.category}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold mt-5">
                  {event.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {event.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-primary" />
                    {event.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Details soon
                  </div>
                </div>

                <div className="border-t border-border mt-6 pt-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                    What to expect
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {event.details.map((detail) => (
                      <span
                        key={detail}
                        className="px-2.5 py-1 rounded-lg bg-secondary text-xs text-muted-foreground"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="mt-6 inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all">
                  View event details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* Participate */}
      <section className="bg-secondary/40 py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Get Involved
                </span>

                <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3">
                  Be part of the next event.
                </h2>

                <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
                  From attending workshops to organising academic activities,
                  there are plenty of ways to contribute to the scientific
                  community at AIIMS Kalyani.
                </p>
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                AIIMS Kalyani
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}