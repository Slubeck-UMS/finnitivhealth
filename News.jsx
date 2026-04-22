import React from "react";
import { ArrowRight, ArrowUpRight, ChevronRight, Heart, Shield, Users, TrendingUp } from "lucide-react";
import { COLORS, IMG, Eyebrow, Button, SightpathMark, UMSMark } from "../shared";

export function CareersHub({ navigate }) {
  return (
    <div>
      <section className="relative min-h-[80vh] flex items-end" style={{ backgroundColor: COLORS.ink }}>
        <div className="absolute inset-0">
          <img src={IMG.careers} alt="" className="w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${COLORS.ink}D0 0%, ${COLORS.ink}55 40%, ${COLORS.ink}F5 100%)` }} />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pb-20 pt-40 w-full text-white">
          <Eyebrow color="rgba(255,255,255,0.7)">Careers at FinnitivHealth</Eyebrow>
          <h1 className="font-display text-[44px] md:text-[72px] lg:text-[92px] font-light leading-[0.98] mt-6 max-w-[1100px]">
            Build a career in <em style={{ color: COLORS.sand, fontWeight: 300 }}>specialty surgical services</em>.
          </h1>
          <p className="mt-8 text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.8)" }}>
            FinnitivHealth is the platform behind Sightpath and UMS — two brands with a national footprint and clinical teams that are among the best in their specialties. We hire ophthalmic and urology technicians, surgical logistics professionals, clinical educators, and operators.
          </p>
        </div>
      </section>

      <section className="py-28 lg:py-36" style={{ backgroundColor: COLORS.mist }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <Eyebrow>Where you'll work</Eyebrow>
            <h2 className="font-display text-4xl lg:text-5xl font-light mt-5 leading-[1.05] max-w-3xl">
              Two brands. One platform. <em style={{ color: COLORS.blue }}>Many paths.</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <button onClick={() => navigate("careers-sightpath")} className="group text-left hover-lift" style={{ backgroundColor: COLORS.sand }}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img src={IMG.careersSight} alt="" className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105" />
              </div>
              <div className="p-10">
                <SightpathMark />
                <h3 className="font-display text-4xl mt-4">Careers at Sightpath</h3>
                <p className="mt-4" style={{ color: COLORS.navy }}>
                  Ophthalmic technicians, mobile surgical logistics, clinical educators, and operations roles.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 font-medium">
                  View Sightpath roles <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </button>
            <button onClick={() => navigate("careers-ums")} className="group text-left hover-lift" style={{ backgroundColor: COLORS.ink, color: "#fff" }}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img src={IMG.careersUMS} alt="" className="w-full h-full object-cover opacity-85 transition-transform duration-[900ms] group-hover:scale-105" />
              </div>
              <div className="p-10">
                <UMSMark color="#fff" />
                <h3 className="font-display text-4xl mt-4">Careers at UMS</h3>
                <p className="mt-4" style={{ color: "rgba(255,255,255,0.78)" }}>
                  Urology technologists, equipment specialists, regional managers, and clinical operations.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 font-medium">
                  View UMS roles <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>What we value</Eyebrow>
              <h2 className="font-display text-4xl lg:text-5xl font-light mt-5 leading-[1.05]">
                A platform built by <em style={{ color: COLORS.blue }}>people who care about the case</em>.
              </h2>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10">
              {[
                { icon: Heart, h: "Clinical-first", p: "Every decision is measured against what's best for the surgeon and the patient in front of us." },
                { icon: Shield, h: "Safety as a baseline", p: "Not a value to celebrate — a floor we never fall below. Compliance, PM, infection control." },
                { icon: Users, h: "Deeply collaborative", p: "Our clinical and operational teams work together across brands. Silos don't serve patients." },
                { icon: TrendingUp, h: "Built for growth", p: "Scaling nationally. The people who build this platform will build long careers on it." },
              ].map(({ icon: Icon, h, p }, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: COLORS.mist, color: COLORS.blue }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="font-display text-xl">{h}</div>
                    <p className="mt-2 text-[15px]" style={{ color: COLORS.muted }}>{p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function CareersBrand({ navigate, brand }) {
  const isUMS = brand === "ums";
  const theme = isUMS ? {
    bg: COLORS.ink, fg: "#fff", accent: COLORS.blueBright,
    hero: IMG.careersUMS, title: "Careers at UMS", Mark: UMSMark,
    summary: "UMS brings specialty urology technology to hundreds of practices across the country. Our team includes certified urology technologists, laser and lithotripsy specialists, regional operations leaders, and field service professionals.",
    roles: [
      { t: "Urology Technologist", loc: "Multiple regions · Full-time", tag: "Clinical" },
      { t: "Lithotripsy Specialist", loc: "Regional · Full-time", tag: "Clinical" },
      { t: "MR Fusion Biopsy Specialist", loc: "Regional · Full-time", tag: "Clinical" },
      { t: "Regional Operations Manager", loc: "Midwest · Full-time", tag: "Operations" },
      { t: "Field Service Engineer", loc: "Remote, national travel", tag: "Service" },
      { t: "Clinical Educator · Urology", loc: "Remote · Full-time", tag: "Clinical" },
    ],
  } : {
    bg: COLORS.sand, fg: COLORS.ink, accent: COLORS.amber,
    hero: IMG.careersSight, title: "Careers at Sightpath", Mark: SightpathMark,
    summary: "Sightpath is the national mobile ophthalmic surgery partner for hospitals, ASCs, and office practices. We hire ophthalmic technicians, certified surgical scrub techs, mobile surgical logistics professionals, and clinical educators.",
    roles: [
      { t: "Ophthalmic Technician", loc: "Multiple regions · Full-time", tag: "Clinical" },
      { t: "Certified Surgical Scrub", loc: "Regional · Full-time", tag: "Clinical" },
      { t: "Femto Laser Specialist", loc: "Regional · Full-time", tag: "Clinical" },
      { t: "Mobile Surgical Coordinator", loc: "Regional · Full-time", tag: "Operations" },
      { t: "Clinical Educator · Ophthalmology", loc: "Remote · Full-time", tag: "Clinical" },
      { t: "CDL Driver · Mobile Unit", loc: "Regional · Full-time", tag: "Logistics" },
    ],
  };

  return (
    <div>
      <section className="relative min-h-[75vh] flex items-end" style={{ backgroundColor: COLORS.ink }}>
        <div className="absolute inset-0">
          <img src={theme.hero} alt="" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${COLORS.ink}D5 0%, ${COLORS.ink}55 40%, ${COLORS.ink}F5 100%)` }} />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pb-20 pt-40 w-full text-white">
          <div className="flex items-center gap-3 opacity-80">
            <button onClick={() => navigate("careers")} className="text-xs tracking-wider uppercase hover:underline">Careers</button>
            <ChevronRight size={14} />
            <span className="text-xs tracking-wider uppercase">{isUMS ? "UMS" : "Sightpath"}</span>
          </div>
          <div className="mt-8"><theme.Mark color="#fff" /></div>
          <h1 className="font-display text-[44px] md:text-[72px] lg:text-[88px] font-light leading-[0.98] mt-6 max-w-[1100px]">{theme.title}</h1>
          <p className="mt-8 text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.8)" }}>{theme.summary}</p>
        </div>
      </section>

      <section className="py-28 lg:py-36" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <Eyebrow>Open roles</Eyebrow>
              <h2 className="font-display text-4xl lg:text-5xl font-light mt-5 leading-[1.05]">Where you might fit.</h2>
            </div>
            <Button variant="primary" onClick={() => navigate("contact")}>View all open roles</Button>
          </div>
          <div style={{ borderTop: `1px solid ${COLORS.line}` }}>
            {theme.roles.map((r, i) => (
              <a key={i} href="#" className="group block py-8 flex items-center justify-between gap-8" style={{ borderBottom: `1px solid ${COLORS.line}` }}>
                <div className="flex-1">
                  <div className="text-xs tracking-wider uppercase" style={{ color: theme.accent }}>{r.tag}</div>
                  <div className="font-display text-2xl lg:text-3xl mt-2 group-hover:translate-x-2 transition-transform duration-500">{r.t}</div>
                </div>
                <div className="hidden md:block text-sm" style={{ color: COLORS.muted }}>{r.loc}</div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  Apply <ArrowUpRight size={16} />
                </div>
              </a>
            ))}
          </div>
          <div className="mt-10 p-6" style={{ backgroundColor: COLORS.mist }}>
            <div className="text-sm" style={{ color: COLORS.muted }}>
              Application portal coming soon — external ATS integration (e.g., Greenhouse, Workday) will live here.
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36" style={{ backgroundColor: theme.bg, color: theme.fg }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <Eyebrow color={theme.fg === "#fff" ? "rgba(255,255,255,0.6)" : COLORS.muted}>Why join {isUMS ? "UMS" : "Sightpath"}</Eyebrow>
              <h2 className="font-display text-4xl lg:text-5xl font-light mt-5 leading-[1.05]">
                Specialty depth. National footprint. Room to grow.
              </h2>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10">
              {[
                { h: "A real clinical culture", p: "Our technicians, specialists, and field teams are the core of this company — not a cost center." },
                { h: "Career mobility across brands", p: "Move between Sightpath and UMS, across clinical and operations tracks, as you grow." },
                { h: "Competitive compensation", p: "Strong base, comprehensive benefits, 401(k) match, travel and per-diem support." },
                { h: "Purpose-built training", p: "Every clinical role includes structured onboarding and ongoing specialty certification." },
              ].map((c, i) => (
                <div key={i}>
                  <div className="font-display text-xl" style={{ color: theme.accent }}>{c.h}</div>
                  <p className="mt-2 text-[15px] leading-relaxed" style={{ color: theme.fg === "#fff" ? "rgba(255,255,255,0.75)" : COLORS.navy }}>{c.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
