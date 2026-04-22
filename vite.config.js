import React from "react";
import { ArrowRight, ChevronRight, Check } from "lucide-react";
import { COLORS, IMG, Eyebrow, Button } from "../shared";

const SOLUTIONS_LIST = [
  { route: "sol-cataract", brand: "Sightpath", specialty: "Ophthalmology", title: "Cataract Surgery", body: "Mobile and fixed phacoemulsification programs for cataract removal and IOL implantation.", img: IMG.eyeClose, color: COLORS.amber },
  { route: "sol-femto", brand: "Sightpath", specialty: "Ophthalmology", title: "Femtosecond Surgery", body: "Bladeless, computer-guided laser for precision corneal incisions during cataract surgery.", img: IMG.laser, color: COLORS.amber },
  { route: "sol-refractive", brand: "Sightpath", specialty: "Ophthalmology", title: "Refractive / LASIK", body: "Complete LASIK and refractive surgery solutions with excimer and IntraLase platforms.", img: IMG.surgery, color: COLORS.amber },
  { route: "sol-urs", brand: "UMS", specialty: "Urology", title: "URS / V-URS", body: "Laser-based ureteroscopic lithotripsy, including vacuum-assisted (V-URS) technology.", img: IMG.laser, color: COLORS.blue },
  { route: "sol-eswl", brand: "UMS", specialty: "Urology", title: "ESWL Lithotripsy", body: "Non-invasive shockwave kidney stone treatment with industry-leading platforms.", img: IMG.lithotripsy, color: COLORS.blue },
  { route: "sol-mrfusion", brand: "UMS", specialty: "Urology", title: "MR Fusion Biopsy", body: "Targeted prostate biopsy with real-time 3D MR/ultrasound fusion imaging.", img: IMG.equipment, color: COLORS.blue },
];

export const SOLUTIONS_DATA = {
  "sol-cataract": {
    brand: "Sightpath", specialty: "Ophthalmology", title: "Cataract Surgery",
    heroLine: "The leading mobile cataract access provider in the U.S.",
    overview: "Cataract surgery removes the clouded natural lens of the eye and replaces it with an artificial intraocular lens. It's the most frequently performed surgery in the United States and among the safest. Sightpath is the leading mobile access provider, partnering with hospitals and ASCs that need cataract surgical capacity without the capital or staffing requirements of owning equipment.",
    stats: [["90k+", "procedures annually"], ["444", "ophthalmologists served"], ["40", "states served"], ["75", "mobile units"]],
    features: [
      { h: "Turnkey surgical solution", p: "Certified Surgical Technician, phacoemulsification system, microscope, IOLs, and all supply packs delivered to your facility." },
      { h: "Mobile and fixed deployment", p: "Mobile customers typically schedule 1–2 stops per month with an 8-case minimum. Fixed sites receive on-site equipment with dedicated technicians." },
      { h: "Current-generation technology", p: "Alcon Centurion and UNITY phacoemulsification platforms configured to the preferences of the operating surgeon." },
      { h: "Per-procedure pricing", p: "Predictable cost structure with no equipment purchase, no maintenance contracts, and no capital commitment." },
    ],
    img: IMG.eyeClose,
  },
  "sol-femto": {
    brand: "Sightpath", specialty: "Ophthalmology", title: "Femtosecond Surgery",
    heroLine: "Femtosecond laser-assisted cataract surgery, delivered.",
    overview: "Femtosecond laser-assisted cataract surgery (FLACS) uses a computer-guided laser to make bladeless corneal incisions that are more precise than traditional cuts. Sightpath is the leading mobile femto provider, with over 75,000 procedures supported to date. Our proprietary mobile transport system — patent-protected through 2034 — keeps equipment calibrated in transit.",
    stats: [["25k+", "procedures annually"], ["281", "ophthalmologists served"], ["33", "states served"], ["40", "active femto systems"]],
    features: [
      { h: "LenSx and current-gen platforms", p: "Alcon LenSx femtosecond laser platforms with certified Laser Engineer support on every case." },
      { h: "Proprietary mobile transport", p: "Patented air suspension system cushions the laser drive train and maintains optimal balance during transit." },
      { h: "Add-on to existing cataract", p: "Traditional cataract customers can add femto capability without separate equipment investment or staffing." },
      { h: "Full procedural support", p: "Turnkey: laser engineer, patient interface, clinical support, and all necessary supplies." },
    ],
    img: IMG.laser,
  },
  "sol-refractive": {
    brand: "Sightpath", specialty: "Ophthalmology", title: "Refractive / LASIK",
    heroLine: "Complete refractive and LASIK solutions.",
    overview: "Sightpath is a market-leading mobile refractive access provider, serving ophthalmology practices across the country with excimer and IntraLase laser platforms. Our patented transport device ensures seamless movement of refractive technology while adhering to manufacturer specifications — patent-protected through 2034.",
    stats: [["6k+", "procedures annually"], ["278", "ophthalmologists served"], ["45", "states served"], ["32", "mobile units"]],
    features: [
      { h: "Dual-platform vans", p: "All mobile units are equipped with both excimer and IntraLase laser platforms, ready for a complete refractive case." },
      { h: "Patent-protected transport", p: "Patented mobile transport system maintains laser calibration and performance in transit." },
      { h: "Mobile and fixed sites", p: "Mobile customers typically schedule 1–2 stops per month with 8–10 cases per stop. Fixed sites available for higher volume." },
      { h: "Contracted per-procedure rate", p: "Predictable billing with direct contracts to practices — no capital investment or technician hiring required." },
    ],
    img: IMG.surgery,
  },
  "sol-urs": {
    brand: "UMS", specialty: "Urology", title: "URS / V-URS",
    heroLine: "Ureteroscopic lithotripsy, including V-URS.",
    overview: "URS uses a laser beam applied directly to kidney stones via a ureteroscope inserted through the urinary tract. It's become the dominant stone treatment procedure. V-URS (vacuum ureteroscopy) adds vacuum irrigation and aspiration, and is increasingly becoming the standard of care. UMS supports both — with certified technologists, laser platforms, and scopes required.",
    stats: [["30k+", "procedures annually"], ["317", "urologists served"], ["17", "states served"], ["91", "active laser systems"]],
    features: [
      { h: "Current-gen laser platforms", p: "Quanta Litho 60, Lumenis Powersuite, and Richard Wolf scope systems configured for URS and V-URS cases." },
      { h: "V-URS capability", p: "Vacuum ureteroscopy with navigable disposable high-resolution scopes and guide sheaths — positioned as the emerging standard of care." },
      { h: "On-site equipment storage", p: "Equipment is typically stored at the hospital or surgery center; technologist arrives the morning of the procedure." },
      { h: "Certified technologist support", p: "Every case is supported by a technologist trained specifically in urology laser workflows." },
    ],
    img: IMG.laser,
  },
  "sol-eswl": {
    brand: "UMS", specialty: "Urology", title: "ESWL Lithotripsy",
    heroLine: "Non-invasive kidney stone treatment at scale.",
    overview: "Extracorporeal shock wave lithotripsy (ESWL) transmits high-energy shock waves to break down kidney stones non-invasively. It remains the clinically preferred procedure for kidney stones of certain sizes and positions, and for patients who prefer a non-invasive approach. UMS is a leading national ESWL provider, supporting approximately 10% of all ESWL procedures nationwide.",
    stats: [["23k+", "procedures annually"], ["840", "urologists served"], ["27", "states served"], ["92", "lithotripter systems"]],
    features: [
      { h: "Industry-leading platforms", p: "Wolf P3000 and Dornier Compact Delta 3 lithotripter systems with full procedural support." },
      { h: "Next-day delivery", p: "Technologist delivers the lithotripter to the hospital or surgery center the evening before a procedure day." },
      { h: "Certified technologist support", p: "Every case is run by a certified technologist who operates the lithotripter and supports the urologist." },
      { h: "Mobile and fixed deployment", p: "Flexible deployment models to match your facility's case volume and scheduling preferences." },
    ],
    img: IMG.lithotripsy,
  },
  "sol-mrfusion": {
    brand: "UMS", specialty: "Urology", title: "MR Fusion Biopsy",
    heroLine: "Targeted prostate biopsy with real-time 3D imaging.",
    overview: "MR Fusion biopsy integrates MRI scans with real-time transrectal and transperineal ultrasound imaging, creating 3D HD color images that help urologists accurately target visible lesions during prostate cancer biopsies. It offers superior rates of detecting clinically significant prostate cancer compared to traditional biopsy techniques.",
    stats: [["5k+", "service days annually"], ["306", "urologists served"], ["17", "states served"], ["35", "MR Fusion systems"]],
    features: [
      { h: "Eigen Artemis platforms", p: "State-of-the-art MR Fusion biopsy technology with enhanced lesion target accuracy and real-time 3D imaging." },
      { h: "Clinical accuracy", p: "Offers superior rates of detecting clinically significant prostate cancer compared to standard biopsy methods." },
      { h: "Hospital and office workflows", p: "Built for both hospital systems and private urology practice environments." },
      { h: "Technologist-supported", p: "Equipment is delivered the morning of the procedure; technologist sterilizes and supports the physician during the biopsy." },
    ],
    img: IMG.equipment,
  },
};

export function SolutionsHub({ navigate }) {
  return (
    <div>
      <section className="relative min-h-[60vh] flex items-end pt-32 pb-16" style={{ backgroundColor: COLORS.ink }}>
        <div className="absolute inset-0">
          <img src={IMG.heroSolutions} alt="" className="w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${COLORS.ink}D0 0%, ${COLORS.ink}55 40%, ${COLORS.ink}F5 100%)` }} />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 w-full text-white">
          <Eyebrow color="rgba(255,255,255,0.7)">Solutions by procedure</Eyebrow>
          <h1 className="font-display text-[44px] md:text-[72px] lg:text-[88px] font-light leading-[0.98] mt-5 max-w-[1100px]">
            Six procedure-specific solutions. <em style={{ color: COLORS.sand, fontWeight: 300 }}>One managed service model.</em>
          </h1>
          <p className="mt-6 text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.75)" }}>
            Explore how each procedure is supported — from the equipment to the technologist to the schedule.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS_LIST.map((s) => (
              <button key={s.route} onClick={() => navigate(s.route)} className="group text-left hover-lift"
                style={{ backgroundColor: COLORS.mist, border: `1px solid ${COLORS.line}` }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105" />
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs tracking-wider uppercase font-medium"
                      style={{ backgroundColor: "#fff", color: s.color }}>
                      {s.brand} · {s.specialty}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl leading-tight">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed" style={{ color: COLORS.muted }}>{s.body}</p>
                  <div className="mt-5 inline-flex items-center gap-2 font-medium text-sm">
                    Explore solution <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function SolutionPage({ navigate, route }) {
  const data = SOLUTIONS_DATA[route];
  if (!data) return null;
  const isUrology = data.specialty === "Urology";
  const accent = isUrology ? COLORS.blue : COLORS.amber;
  const parentRoute = isUrology ? "ums" : "sightpath";
  return (
    <div>
      <section className="relative min-h-[80vh] flex items-end" style={{ backgroundColor: COLORS.ink }}>
        <div className="absolute inset-0">
          <img src={data.img} alt="" className="w-full h-full object-cover opacity-55" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${COLORS.ink}D0 0%, ${COLORS.ink}44 40%, ${COLORS.ink}F0 100%)` }} />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pb-20 pt-40 w-full text-white">
          <div className="flex items-center gap-3 opacity-80">
            <button onClick={() => navigate("home")} className="text-xs tracking-wider uppercase hover:underline">FinnitivHealth</button>
            <ChevronRight size={14} />
            <button onClick={() => navigate(parentRoute)} className="text-xs tracking-wider uppercase hover:underline">{data.brand}</button>
            <ChevronRight size={14} />
            <span className="text-xs tracking-wider uppercase">{data.title}</span>
          </div>
          <div className="mt-8"><Eyebrow color="rgba(255,255,255,0.7)">{data.brand} · {data.specialty}</Eyebrow></div>
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[88px] font-light leading-[0.98] mt-4 max-w-[1100px]">{data.title}</h1>
          <p className="mt-6 text-xl max-w-2xl font-display" style={{ color: "rgba(255,255,255,0.9)" }}>{data.heroLine}</p>
        </div>
      </section>

      <section style={{ backgroundColor: accent, color: "#fff" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.stats.map(([n, l], i) => (
            <div key={i}>
              <div className="font-display text-4xl lg:text-5xl font-light">{n}</div>
              <div className="text-sm mt-2 opacity-85">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 lg:py-36" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>The procedure</Eyebrow>
            <h2 className="font-display text-4xl lg:text-5xl font-light mt-5 leading-[1.05]">
              What it is, and <em style={{ color: accent }}>how we support it</em>.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed" style={{ color: COLORS.navy }}>{data.overview}</p>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36" style={{ backgroundColor: COLORS.mist }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Eyebrow>What's included</Eyebrow>
          <h2 className="font-display text-4xl lg:text-5xl font-light mt-5 mb-16 leading-[1.05] max-w-3xl">
            A complete, <em style={{ color: accent }}>fully managed</em> service model.
          </h2>
          <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: COLORS.line }}>
            {data.features.map((f, i) => (
              <div key={i} className="p-10 bg-white">
                <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: isUrology ? COLORS.blueLight : COLORS.sand, color: accent }}>
                  <Check size={18} strokeWidth={2.5} />
                </div>
                <h3 className="font-display text-2xl mt-6">{f.h}</h3>
                <p className="mt-3 text-[15px] leading-relaxed" style={{ color: COLORS.muted }}>{f.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32" style={{ backgroundColor: COLORS.ink }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-white">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <Eyebrow color="rgba(255,255,255,0.7)">Bring this to your facility</Eyebrow>
              <h2 className="font-display text-4xl lg:text-6xl font-light mt-5 leading-[1.02]">
                Let's schedule a <em style={{ color: COLORS.sand }}>program review</em>.
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
              <Button variant="light" onClick={() => navigate("contact")}>Request scheduling</Button>
              <Button variant="ghost" onClick={() => navigate(parentRoute)}>
                <span style={{ color: "#fff" }}>Back to {data.brand}</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
