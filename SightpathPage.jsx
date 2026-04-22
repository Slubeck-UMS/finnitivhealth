import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { COLORS, IMG, Eyebrow, Button, Field } from "../shared";

export default function Contact({ navigate }) {
  const [form, setForm] = useState({
    name: "",
    org: "",
    role: "",
    email: "",
    interest: "platform",
    message: "",
  });
  const [sent, setSent] = useState(false);

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <section className="relative min-h-[50vh] flex items-end pt-32 pb-16" style={{ backgroundColor: COLORS.ink }}>
        <div className="absolute inset-0 opacity-30">
          <img src={IMG.dataBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 w-full text-white">
          <Eyebrow color="rgba(255,255,255,0.7)">Contact FinnitivHealth</Eyebrow>
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[80px] font-light leading-[0.98] mt-5 max-w-[1000px]">
            Let's map a <em style={{ color: COLORS.sand, fontWeight: 300 }}>utilization plan</em>.
          </h1>
          <p className="mt-6 text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.8)" }}>
            Reach out about scheduling, new service programs, or any question about working with FinnitivHealth, Sightpath, or UMS.
          </p>
        </div>
      </section>

      <section className="py-28 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Reach the platform</Eyebrow>
            <h2 className="font-display text-3xl lg:text-4xl font-light mt-5 leading-tight">
              Tell us about your case mix. We'll model the schedule, equipment, and clinical support required.
            </h2>
            <div className="mt-10 space-y-6">
              {[
                { icon: Mail, l: "Email", v: "info@finnitivhealth.com" },
                { icon: Phone, l: "Phone", v: "800-516-9425" },
                { icon: MapPin, l: "Headquarters", v: "Minneapolis, MN" },
              ].map(({ icon: Icon, l, v }, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: COLORS.mist, color: COLORS.blue }}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <Eyebrow>{l}</Eyebrow>
                    <div className="mt-1">{v}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6" style={{ backgroundColor: COLORS.mist }}>
              <Eyebrow>Media &amp; partnerships</Eyebrow>
              <div className="mt-2 text-sm" style={{ color: COLORS.navy }}>
                For press and partnership inquiries, please write to{" "}
                <span className="font-medium">partnerships@finnitivhealth.com</span>.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {sent ? (
              <div className="p-12" style={{ backgroundColor: COLORS.mist, border: `1px solid ${COLORS.line}` }}>
                <Eyebrow color={COLORS.blue}>Thank you</Eyebrow>
                <h3 className="font-display text-3xl mt-4">We'll be in touch shortly.</h3>
                <p className="mt-4" style={{ color: COLORS.muted }}>
                  A member of the FinnitivHealth team will respond within one business day.
                </p>
                <div className="mt-8">
                  <Button onClick={() => navigate("home")}>Back to FinnitivHealth</Button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <Field label="Organization" value={form.org} onChange={(v) => setForm({ ...form, org: v })} />
                  <Field label="Role / title" value={form.role} onChange={(v) => setForm({ ...form, role: v })} />
                  <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                </div>
                <div>
                  <Eyebrow>Area of interest</Eyebrow>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { k: "platform", l: "FinnitivHealth platform" },
                      { k: "sightpath", l: "Sightpath · Ophthalmology" },
                      { k: "ums", l: "UMS · Urology" },
                      { k: "careers", l: "Careers" },
                    ].map((o) => (
                      <button
                        key={o.k}
                        onClick={() => setForm({ ...form, interest: o.k })}
                        className="px-4 py-2 text-sm transition-all"
                        style={{
                          backgroundColor: form.interest === o.k ? COLORS.ink : "transparent",
                          color: form.interest === o.k ? "#fff" : COLORS.ink,
                          border: `1px solid ${COLORS.ink}`,
                        }}
                      >
                        {o.l}
                      </button>
                    ))}
                  </div>
                </div>
                <Field
                  label="Tell us about your case mix or question"
                  value={form.message}
                  onChange={(v) => setForm({ ...form, message: v })}
                  textarea
                />
                <div className="pt-4">
                  <Button onClick={() => setSent(true)} variant="primary">
                    Send to FinnitivHealth
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
