import React, { useState } from "react";
import { Image } from "@/components/ui/image";
import { Play, Newspaper, Youtube, Camera } from "lucide-react";

// Reuses the same locally-hosted images as Home.jsx (Base44 reused these
// across pages too). Swap in dedicated gallery images whenever you have them.
const albums = [
  { name: "Annual Fest 2025", count: 42, image: "/images/hero-3.jpg" },
  { name: "Workshops", count: 28, image: "/images/hero-2.jpg" },
  { name: "Quiz Finals", count: 19, image: "/images/hero-1.jpg" },
  { name: "Guest Lectures", count: 15, image: "/images/hero-3.jpg" },
];

const galleryImages = [
  "/images/hero-3.jpg",
  "/images/hero-2.jpg",
  "/images/hero-1.jpg",
  "/images/hero-3.jpg",
  "/images/about-snippet.jpg",
  "/images/hero-2.jpg",
];

const videos = [
  { title: "Synapse 2025 — Event Recap", duration: "4:12" },
  { title: "Guest Lecture: Precision Oncology — Highlights", duration: "8:45" },
  { title: "Student Testimonials: Life in Research", duration: "3:20" },
];

const pressItems = [
  { title: "The Telegraph — AIIMS Kalyani students shine at national symposium", source: "The Telegraph", date: "Nov 2025" },
  { title: "Campus newsletter features society's ICMR-STS success", source: "AIIMS Kalyani Newsletter", date: "Oct 2025" },
  { title: "Regional daily covers BLS workshop for community health workers", source: "Anandabazar Patrika", date: "Aug 2025" },
];

export default function Gallery() {
  const [active, setActive] = useState("Annual Fest 2025");

  return (
    <div>
      <section className="pt-32 pb-12 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Gallery</span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mt-3 max-w-3xl leading-tight">
            Moments that define our community
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            Photo albums, event recaps, and press coverage from across the years.
          </p>
        </div>
      </section>

      {/* Albums */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Camera className="w-6 h-6 text-primary" />
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Photo Albums</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {albums.map((a, i) => (
            <button
              key={i}
              onClick={() => setActive(a.name)}
              className={`group relative aspect-[4/3] rounded-2xl overflow-hidden border-2 transition-all ${
                active === a.name ? "border-primary shadow-lg" : "border-transparent hover:border-primary/30"
              }`}
            >
              <Image src={a.image} fittingType="fill" alt={a.name} className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <h3 className="font-display font-semibold text-background">{a.name}</h3>
                <p className="text-xs text-background/70">{a.count} photos</p>
              </div>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10">
          <p className="text-sm text-muted-foreground mb-4">Showing: <span className="font-medium text-foreground">{active}</span></p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden border border-border group cursor-pointer">
                <Image src={img} fittingType="fill" alt={`Gallery ${i + 1}`} className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="bg-secondary/40 py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Youtube className="w-6 h-6 text-primary" />
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Video Showcase</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all cursor-pointer">
                <div className="relative aspect-video bg-foreground flex items-center justify-center">
                  <Image src={galleryImages[i % galleryImages.length]} fittingType="fill" alt={v.title} className="w-full h-full absolute inset-0 opacity-60" />
                  <div className="relative w-14 h-14 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-accent-foreground ml-0.5" fill="currentColor" />
                  </div>
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-foreground/80 text-background text-xs font-medium">{v.duration}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold">{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Newspaper className="w-6 h-6 text-primary" />
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Press & Media Coverage</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {pressItems.map((p, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-colors">
              <Newspaper className="w-7 h-7 text-primary mb-3" />
              <h3 className="font-display font-semibold leading-snug">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{p.source} · {p.date}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2.5 transition-all">
                Read coverage →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}