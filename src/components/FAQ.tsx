import { useState } from "react";

const faqs = [
  { q: "How quickly can a therapist arrive?", a: "Most cities have same-day availability. The directory shows live next-available slots — book and your therapist confirms instantly." },
  { q: "Are your physiotherapists licensed?", a: "Every clinician on Kinetic is licensed, background-checked, and interviewed in-person. We verify credentials annually." },
  { q: "What equipment do they bring?", a: "Portable treatment table, resistance bands, percussion tools, ultrasound, and dry-needling kit where applicable. Your living room becomes a clinic." },
  { q: "Can I keep the same therapist?", a: "Absolutely. The Recovery Plan locks you with one clinician across all visits — continuity is what drives outcomes." },
  { q: "Do you take insurance?", a: "We provide itemised receipts for reimbursement. The Care Continuum plan includes claims assistance with your provider." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary">FAQ</span>
          <h2 className="font-display text-5xl md:text-6xl font-extrabold uppercase tracking-tighter leading-[0.9] mt-6">
            The <span className="italic text-muted-foreground font-medium">Fine print.</span>
          </h2>
        </div>
        <div className="border-t border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full py-7 flex items-center justify-between gap-6 text-left group"
                >
                  <span className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors">
                    {f.q}
                  </span>
                  <span className={`text-2xl font-light transition-transform ${isOpen ? "rotate-45 text-primary" : ""}`}>
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
