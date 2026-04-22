import React from "react";
import { ArrowRight, ChevronRight, Users } from "lucide-react";
import { COLORS, IMG, Eyebrow, Button } from "../shared";

const LEADERS = [
  { name: "Paul Hajjar", title: "Chief Executive Officer", bio: "Paul leads FinnitivHealth with deep experience across healthcare services and specialty medical businesses. He previously served as CFO of the company before being appointed CEO, and brings a focus on operational execution and long-term customer partnerships." },
  { name: "Dan Robins", title: "Chief Operating Officer", bio: "Dan oversees clinical and field operations across Sightpath and UMS, with decades of experience in specialty mobile surgical services. His focus is reliability, service quality, and the operational standards that keep our customer tenure above nine years." },
  { name: "Sam Lubeck", title: "Chief Strategy Officer", bio: "Sam leads strategy, partnerships, and new service offering development across the platform. He works closely with operating teams to identify and launch new capabilities that expand what customers can offer their patients." },
  { name: "Charice Anderson", title: "Chief Legal Officer", bio: "Charice leads legal, compliance, and regulatory affairs across FinnitivHealth. She brings extensive experience in healthcare law and oversees contracting, compliance programs, and the regulatory infrastructure that supports a platform operating in 48 states." },
  { name: "Dolores Urban", title: "Head of Human Resources", bio: "Dolores leads talent and people operations across FinnitivHealth. She focuses on the hiring, training, and development programs that build our base of certified technologists and field teams — a core driver of our service quality." },
];

export function Leadership({ navigate }) {
  return (
    <div>
      <section className="relative min-h-[60vh] flex items-end pt-32 pb-16" style={{ backgroundColor: COLORS.ink }}>
        <div className="absolute inset-0">
          <img src={IMG.officeTeam} alt="" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${COLORS.ink}D0 0%, ${COLORS.ink}55 40%, ${COLORS.ink}F5 100%)` }} />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 w-full text-white">
          <Eyebrow color="rgba(255,255,255,0.7)">Leadership</Eyebrow>
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[80px] font-light leading-[0.98] mt-5 max-w-[1100px]">
            Experienced operators. <em style={{ color: COLORS.sand, fontWeight: 300 }}>Focused on execution.</em>
          </h1>
          <p className="mt-6 text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.8)" }}>
            FinnitivHealth is led by a team with deep experience in specialty healthcare services, mobile surgical logistics, and the operational disciplines required to run a reliable nationwide platform.
          </p>
        </div>
      </section>

      <section className="py-28 lg:py-36" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {LEADERS.map((l, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-28 h-28 flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: COLORS.mist, border: `1px solid ${COLORS.line}` }}>
                  <span className="font-display text-3xl" style={{ color: COLORS.blue }}>
                    {l.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl">{l.name}</h3>
                  <Eyebrow color={COLORS.blue}>{l.title}</Eyebrow>
                  <p className="mt-4 text-[15px] leading-relaxed" style={{ color: COLORS.navy }}>{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: COLORS.mist }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <h3 className="font-display text-3xl lg:text-4xl font-light leading-tight">
              Meet the <em style={{ color: COLORS.blue }}>field and operating teams</em> behind each brand.
            </h3>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row gap-3">
            <Button variant="primary" onClick={() => navigate("team-sightpath")}>Sightpath team</Button>
            <Button variant="blue" onClick={() => navigate("team-ums")}>UMS team</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export function TeamPage({ navigate, brand }) {
  const isUMS = brand === "ums";
  const config = isUMS ? {
    title: "The UMS Team",
    sub: "Urology operations, clinical, and field teams across 31 states.",
    hero: IMG.careersUMS,
    parent: "ums", parentLabel: "UMS", accent: COLORS.blue,
    groups: [
      { h: "Sales Leadership", body: "Our urology sales team partners with facilities and practices to scope, schedule, and launch new service offerings." },
      { h: "Operations Leadership", body: "Regional operations leaders manage equipment logistics, route scheduling, and service standards that support over 1,000 urologists." },
      { h: "Technologists", body: "Hundreds of trained urology technologists operate lithotripters, laser systems, and MR fusion platforms — the clinical backbone of every case." },
      { h: "Field Service Engineers", body: "Our service engineering team keeps equipment at 99% uptime with scheduled PM, repairs, and compliance documentation." },
      { h: "Clinical Educators", body: "Our clinical education team leads onboarding, continuous certification, and OEM-sponsored training programs." },
      { h: "Compliance & Quality", body: "A dedicated compliance team supports HIPAA, AdvaMed, and accreditation standards across every facility partnership." },
    ],
  } : {
    title: "The Sightpath Team",
    sub: "Ophthalmic surgical logistics, clinical, and field teams across 47 states.",
    hero: IMG.careersSight,
    parent: "sightpath", parentLabel: "Sightpath", accent: COLORS.amber,
    groups: [
      { h: "Sales Leadership", body: "Our ophthalmology sales team partners with hospitals, ASCs, and ophthalmology groups to launch and expand surgical programs." },
      { h: "Operations Leadership", body: "Regional operations leaders manage cataract, femto, and refractive program scheduling and logistics nationwide." },
      { h: "Ophthalmic Technicians", body: "Certified Surgical Technicians trained specifically in phaco, femto, and refractive workflows — working alongside surgeons every case." },
      { h: "Laser Engineers", body: "Specialized engineers support femto and refractive laser platforms, ensuring calibration and performance on every deployment." },
      { h: "Clinical Educators", body: "Training and ongoing certification programs with dedicated education facilities and OEM-certified curriculum." },
      { h: "Compliance & Quality", body: "HIPAA, AdvaMed, and HFAP-aligned quality programs covering every facility partnership." },
    ],
  };

  return (
    <div>
      <section className="relative min-h-[60vh] flex items-end pt-32 pb-16" style={{ backgroundColor: COLORS.ink }}>
        <div className="absolute inset-0">
          <img src={config.hero} alt="" className="w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${COLORS.ink}D0 0%, ${COLORS.ink}55 40%, ${COLORS.ink}F5 100%)` }} />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 w-full text-white">
          <div className="flex items-center gap-3 opacity-80">
            <button onClick={() => navigate(config.parent)} className="text-xs tracking-wider uppercase hover:underline">{config.parentLabel}</button>
            <ChevronRight size={14} /><span className="text-xs tracking-wider uppercase">Team</span>
          </div>
          <Eyebrow color="rgba(255,255,255,0.7)">Team</Eyebrow>
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[80px] font-light leading-[0.98] mt-5 max-w-[1100px]">{config.title}</h1>
          <p className="mt-6 text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.8)" }}>{config.sub}</p>
        </div>
      </section>

      <section className="py-28 lg:py-36" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-16 max-w-2xl">
            <Eyebrow>Who's behind every case</Eyebrow>
            <h2 className="font-display text-4xl lg:text-5xl font-light mt-5 leading-[1.05]">
              The people who make it <em style={{ color: config.accent }}>reliable</em>.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: COLORS.line }}>
            {config.groups.map((g, i) => (
              <div key={i} className="p-10 bg-white">
                <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: isUMS ? COLORS.blueLight : COLORS.sand, color: config.accent }}>
                  <Users size={18} />
                </div>
                <h3 className="font-display text-2xl mt-6 leading-tight">{g.h}</h3>
                <p className="mt-3 text-[15px] leading-relaxed" style={{ color: COLORS.muted }}>{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: COLORS.mist }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <h3 className="font-display text-3xl lg:text-4xl font-light leading-tight">
              Join the team. <em style={{ color: config.accent }}>Build a career in specialty surgical services.</em>
            </h3>
          </div>
          <div className="lg:col-span-4">
            <Button variant="primary" onClick={() => navigate(isUMS ? "careers-ums" : "careers-sightpath")}>View open roles</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
