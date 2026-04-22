import React from "react";
import { ArrowRight, Eye, Stethoscope, Users, Shield, TrendingUp, Zap, Wrench, Clock } from "lucide-react";
import {
  COLORS, IMG, FACILITY_NAMES, OEM_NAMES,
  Eyebrow, Button, LogoMarquee, SightpathMark, UMSMark
} from "../shared";

export default function Home({ navigate }) {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-end" style={{ backgroundColor: COLORS.ink }}>
        <div className="absolute inset-0">
          <img src={IMG.heroHome} alt="" className="w-full h-full object-cover opacity-55" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${COLORS.ink}CC 0%, ${COLORS.ink}55 40%, ${COLORS.ink}F0 100%)` }} />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pb-20 pt-40 w-full">
          <div className="reveal" style={{ animationDelay: "0.1s" }}>
            <Eyebrow color="rgba(255,255,255,0.7)">FinnitivHealth · Partnerships That Drive Results</Eyebrow>
          </div>
          <h1 className="font-display font-light text-[44px] md:text-[72px] lg:text-[96px] leading-[0.95] mt-6 max-w-[1100px] reveal"
            style={{ color: "#fff", animationDelay: "0.2s" }}>
            Perform more procedures.<br />
            <em style={{ color: COLORS.sand, fontWeight: 300 }}>Without the capital, the maintenance, or the burden.</em>
          </h1>
          <div className="mt-10 grid md:grid-cols-12 gap-8 reveal" style={{ animationDelay: "0.35s" }}>
            <p className="md:col-span-6 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
              FinnitivHealth gives hospitals, ASCs, and physicians access to the latest surgical technology and highly trained technologists — delivered on your schedule, without the cost of ownership. Two specialized platforms: <strong style={{ color: "#fff" }}>Sightpath</strong> for ophthalmology and <strong style={{ color: "#fff" }}>UMS</strong> for urology.
            </p>
            <div className="md:col-span-6 flex flex-col sm:flex-row gap-3 items-start md:justify-end md:items-end">
              <Button variant="light" onClick={() => navigate("contact")}>Request a utilization plan</Button>
              <Button variant="ghost" onClick={() => navigate("solutions")}>
                <span style={{ color: "#fff" }}>Explore solutions</span>
              </Button>
            </div>
          </div>
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            {[["2,000+", "surgeons supported"], ["1,100+", "healthcare facilities"], ["48", "states served"], ["99%", "equipment uptime"]].map(([n, l], i) => (
              <div key={i} className="reveal" style={{ animationDelay: `${0.5 + i * 0.08}s` }}>
                <div className="font-display text-5xl lg:text-6xl font-light" style={{ color: "#fff" }}>{n}</div>
                <div className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.6)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITY LOGOS */}
      <section style={{ backgroundColor: "#fff" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-12 pb-6">
          <div className="text-center"><Eyebrow>Trusted by leading U.S. health systems</Eyebrow></div>
        </div>
        <LogoMarquee items={FACILITY_NAMES} />
      </section>

      {/* TWO PLATFORMS */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <Eyebrow>Two specialized service platforms</Eyebrow>
              <h2 className="font-display text-4xl lg:text-5xl font-light mt-5 leading-[1.05]">
                One partner. <em style={{ color: COLORS.teal }}>Two specialties.</em>
              </h2>
            </div>
            <p className="text-base max-w-md" style={{ color: COLORS.muted }}>
              Each brand brings deep specialty focus, shared infrastructure, and the same standard of clinical service.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <button onClick={() => navigate("sightpath")} className="group text-left hover-lift"
              style={{ backgroundColor: COLORS.sand, border: `1px solid ${COLORS.line}` }}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <img src={IMG.truckField} alt="" className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 50%, ${COLORS.navy}AA 100%)` }} />
                <div className="absolute top-6 left-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs tracking-wider uppercase font-medium"
                    style={{ backgroundColor: "#fff", color: COLORS.ink }}>
                    <Eye size={12} /> Ophthalmology
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <SightpathMark />
                <h3 className="font-display text-3xl lg:text-4xl mt-5 leading-tight">
                  Mobile eye surgery,<br />
                  <em style={{ color: COLORS.amber }}>delivered with precision.</em>
                </h3>
                <p className="mt-5 leading-relaxed" style={{ color: COLORS.navy }}>
                  Cataract, femto, and refractive surgical support — mobile units and fixed-site programs for ASCs, hospitals, and office-based suites.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Cataract", "Femto", "Refractive"].map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5" style={{ border: `1px solid ${COLORS.ink}20`, color: COLORS.ink }}>{t}</span>
                  ))}
                </div>
                <div className="mt-8 inline-flex items-center gap-2 font-medium text-sm">
                  Explore Sightpath <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </button>

            <button onClick={() => navigate("ums")} className="group text-left hover-lift"
              style={{ backgroundColor: COLORS.ink, color: "#fff" }}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <img src={IMG.equipment} alt="" className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${COLORS.blue}55 0%, transparent 40%, ${COLORS.ink} 100%)` }} />
                <div className="absolute top-6 left-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs tracking-wider uppercase font-medium"
                    style={{ backgroundColor: COLORS.blueBright, color: "#fff" }}>
                    <Stethoscope size={12} /> Urology
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <UMSMark color="#fff" />
                <h3 className="font-display text-3xl lg:text-4xl mt-5 leading-tight">
                  Urology technology,<br />
                  <em style={{ color: COLORS.blueBright }}>when you need it.</em>
                </h3>
                <p className="mt-5 leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Lithotripsy, laser systems, and MR fusion biopsy — delivered with certified technologists to hospitals, ASCs, and office urology practices.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["URS / V-URS", "ESWL", "MR Fusion"].map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5"
                      style={{ border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.9)" }}>{t}</span>
                  ))}
                </div>
                <div className="mt-8 inline-flex items-center gap-2 font-medium text-sm">
                  Explore UMS <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: COLORS.mist }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16 mb-16">
            <div className="lg:col-span-6">
              <Eyebrow>National scale. Reliable service.</Eyebrow>
              <h2 className="font-display text-4xl lg:text-6xl font-light mt-5 leading-[1.02]">
                A nationwide platform, <em style={{ color: COLORS.blue }}>engineered for reliability.</em>
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-lg leading-relaxed" style={{ color: COLORS.navy }}>
                FinnitivHealth operates one of the largest specialty mobile surgical fleets in the United States. Our route density, service infrastructure, and trained technologists mean your facility gets the equipment it needs — when it's scheduled, calibrated, and ready.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-px" style={{ backgroundColor: COLORS.line }}>
            {[
              ["226", "Vehicle fleet"], ["429", "Active equipment units"], ["364", "Trained technologists"],
              ["48", "Service engineers"], ["14", "Service / storage locations"], ["9+ yrs", "Average customer tenure"],
            ].map(([n, l], i) => (
              <div key={i} className="p-8 bg-white">
                <div className="font-display text-4xl font-light" style={{ color: COLORS.blue }}>{n}</div>
                <div className="text-xs mt-2 tracking-wider uppercase" style={{ color: COLORS.muted }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16 mb-20">
            <div className="lg:col-span-5">
              <Eyebrow>Why FinnitivHealth</Eyebrow>
              <h2 className="font-display text-4xl lg:text-5xl font-light mt-5 leading-[1.05]">
                Surgical technology, <em style={{ color: COLORS.teal }}>without the ownership.</em>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-relaxed" style={{ color: COLORS.navy }}>
                We exist for one reason: hospitals and physicians need access to specialized surgical equipment — but not every day, and rarely at a scale that justifies the purchase price, maintenance contract, or full-time technical staffing required to run it. We bridge that gap with a fully managed service model built over three decades.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: COLORS.line }}>
            {[
              { icon: TrendingUp, h: "No capital investment", p: "Access the latest surgical technology without purchasing equipment or carrying it on your balance sheet." },
              { icon: Wrench, h: "No maintenance burden", p: "Equipment service, preventive maintenance, and repairs are handled by our team — not yours." },
              { icon: Users, h: "No staffing constraints", p: "Trained, certified technologists arrive with every deployment. No dedicated hires required." },
              { icon: Zap, h: "Increase case volume", p: "Add procedural capacity on days that work for your OR. Scale up without scaling overhead." },
              { icon: Clock, h: "Predictable cost structure", p: "Pay per procedure or per service day. No unexpected capital expenses or service contracts." },
              { icon: Shield, h: "Reliability you can schedule", p: "99% equipment uptime. Weekly routed service. Redundant fleet to protect your case list." },
            ].map(({ icon: Icon, h, p }, i) => (
              <div key={i} className="p-10 hover:bg-stone-50 transition-colors" style={{ backgroundColor: "#fff" }}>
                <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: COLORS.mist, color: COLORS.blue }}>
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-2xl mt-6 leading-tight">{h}</h3>
                <p className="mt-3 text-[15px] leading-relaxed" style={{ color: COLORS.muted }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM PARTNERS */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: COLORS.navy, color: "#fff" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-12">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <Eyebrow color="rgba(255,255,255,0.7)">Equipment partners</Eyebrow>
              <h2 className="font-display text-4xl lg:text-5xl font-light mt-5 leading-[1.05]">
                The <em style={{ color: COLORS.tealSoft }}>most trusted names</em> in surgical technology.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                We maintain longstanding relationships with the leading OEMs in ophthalmology and urology — giving our customers direct access to current-generation platforms without the capital commitment.
              </p>
            </div>
          </div>
        </div>
        <LogoMarquee items={OEM_NAMES} dark slow />
      </section>

      {/* VISUAL */}
      <section className="relative py-28 lg:py-36 overflow-hidden" style={{ backgroundColor: COLORS.mist }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-16 max-w-2xl">
            <Eyebrow>In the field</Eyebrow>
            <h2 className="font-display text-4xl lg:text-5xl font-light mt-5 leading-[1.05]">
              Equipment, technologists, logistics — <em style={{ color: COLORS.blue }}>all of it</em>.
            </h2>
          </div>
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 lg:row-span-2">
              <div className="relative overflow-hidden h-[480px] lg:h-[640px]" style={{ backgroundColor: COLORS.navy }}>
                <img src={IMG.truckDetail} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 50%, ${COLORS.ink}CC 100%)` }} />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <Eyebrow color="rgba(255,255,255,0.7)">Nationwide fleet</Eyebrow>
                  <div className="font-display text-3xl lg:text-4xl mt-3 leading-tight">
                    Purpose-built mobile surgical units covering 48 states.
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="relative overflow-hidden h-[240px] lg:h-[310px]" style={{ backgroundColor: COLORS.ink }}>
                <img src={IMG.laser} alt="" className="w-full h-full object-cover opacity-90" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <Eyebrow color="rgba(255,255,255,0.7)">Technology</Eyebrow>
                  <div className="font-display text-xl mt-2">Current-generation equipment from leading OEMs</div>
                </div>
              </div>
              <div className="relative overflow-hidden h-[240px] lg:h-[310px]" style={{ backgroundColor: COLORS.sand }}>
                <img src={IMG.surgery} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 40%, ${COLORS.ink}BB 100%)` }} />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <Eyebrow color="rgba(255,255,255,0.7)">Clinical support</Eyebrow>
                  <div className="font-display text-xl mt-2">Certified technologists on every case</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 lg:py-40 overflow-hidden" style={{ backgroundColor: COLORS.ink }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${IMG.dataBg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${COLORS.ink}F0 0%, ${COLORS.blue}30 100%)` }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <Eyebrow color="rgba(255,255,255,0.7)">Start the conversation</Eyebrow>
              <h2 className="font-display text-5xl lg:text-7xl font-light mt-6 leading-[1.02]" style={{ color: "#fff" }}>
                Let's map your <em style={{ color: COLORS.sand }}>utilization plan</em>.
              </h2>
              <p className="mt-6 text-lg max-w-xl" style={{ color: "rgba(255,255,255,0.75)" }}>
                Tell us about your case mix. We'll model the schedule, equipment, and clinical support required — with a clear, outsourced cost structure.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <Button variant="light" onClick={() => navigate("contact")}>Contact our team</Button>
              <Button variant="ghost" onClick={() => navigate("careers")}>
                <span style={{ color: "#fff" }}>Careers at FinnitivHealth</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
