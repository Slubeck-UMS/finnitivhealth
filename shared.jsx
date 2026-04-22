import React from "react";
import { ArrowRight } from "lucide-react";
import { COLORS, IMG, Eyebrow, Button } from "../shared";

const NEWS = [
  {
    cat: "Service Launch",
    date: "May 2025",
    title: "FinnitivHealth launches V-URS service offering nationwide",
    body: "Vacuum ureteroscopy (V-URS) represents the next generation of stone treatment, and UMS is among the first to offer it at scale across partner facilities.",
    img: IMG.news1,
  },
  {
    cat: "Leadership",
    date: "2026",
    title: "Paul Hajjar appointed Chief Executive Officer",
    body: "Paul Hajjar has been appointed CEO of FinnitivHealth, continuing a focus on operational excellence and long-term customer partnerships across Sightpath and UMS.",
    img: IMG.news2,
  },
  {
    cat: "Milestone",
    date: "2025",
    title: "FinnitivHealth surpasses 3 million eyes treated",
    body: "A milestone reflecting three decades of mobile ophthalmic surgical service across Sightpath's national footprint.",
    img: IMG.news3,
  },
  {
    cat: "Company Update",
    date: "2024",
    title: "The company rebrands as FinnitivHealth",
    body: "Sightpath and UMS unify under a new parent platform brand — FinnitivHealth — while preserving each operating brand's specialty identity.",
    img: IMG.clinicians,
  },
  {
    cat: "Service Launch",
    date: "Jan 2026",
    title: "New MR Fusion CPT codes take effect",
    body: "Updated reimbursement codes for MRI-ultrasound fusion prostate biopsy support continued expansion of MR Fusion programs at UMS partner facilities.",
    img: IMG.equipment,
  },
  {
    cat: "Recognition",
    date: "2025",
    title: "Named a top specialty mobile surgical services provider",
    body: "Recognized for operational reliability and specialty depth in ophthalmology and urology procedural support.",
    img: IMG.surgery,
  },
];

export default function News({ navigate }) {
  return (
    <div>
      <section className="relative min-h-[50vh] flex items-end pt-32 pb-16" style={{ backgroundColor: COLORS.ink }}>
        <div className="absolute inset-0 opacity-25">
          <img src={IMG.dataBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 w-full text-white">
          <Eyebrow color="rgba(255,255,255,0.7)">News &amp; Announcements</Eyebrow>
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[80px] font-light leading-[0.98] mt-5 max-w-[1000px]">
            The latest from <em style={{ color: COLORS.sand, fontWeight: 300 }}>FinnitivHealth</em>.
          </h1>
          <p className="mt-6 text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.8)" }}>
            Press releases, service launches, leadership announcements, and company updates from FinnitivHealth, Sightpath, and UMS.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEWS.map((a, i) => (
              <a key={i} href="#" className="group hover-lift" style={{ border: `1px solid ${COLORS.line}`, backgroundColor: "#fff" }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <img src={a.img} alt="" className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 text-xs tracking-wider uppercase" style={{ color: COLORS.blue }}>
                    <span>{a.cat}</span>
                    <span style={{ color: COLORS.muted }}>·</span>
                    <span style={{ color: COLORS.muted }}>{a.date}</span>
                  </div>
                  <h3 className="font-display text-2xl mt-4 leading-tight">{a.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed" style={{ color: COLORS.muted }}>{a.body}</p>
                  <div className="mt-5 inline-flex items-center gap-2 font-medium text-sm">
                    Read more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button variant="ghost" onClick={() => {}}>Load more announcements</Button>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: COLORS.mist }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <Eyebrow>Media inquiries</Eyebrow>
            <h3 className="font-display text-3xl lg:text-4xl font-light leading-tight mt-4">
              For press, partnerships, and media requests, please <em style={{ color: COLORS.blue }}>reach out directly</em>.
            </h3>
          </div>
          <div className="lg:col-span-4">
            <Button variant="primary" onClick={() => navigate("contact")}>Contact FinnitivHealth</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
