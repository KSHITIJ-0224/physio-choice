const plans = [
  {
    name: "Single Session",
    price: "$120",
    unit: "/ session",
    desc: "One-time visit. No commitment. Perfect for assessment or acute issues.",
    features: ["60-minute home visit", "Full clinical assessment", "Personalised home plan", "Session report"],
    cta: "Book a Session",
    highlight: false,
  },
  {
    name: "Recovery Plan",
    price: "$540",
    unit: "/ 5 sessions",
    desc: "Structured program with the same therapist throughout. Most chosen.",
    features: ["5 home visits over 4–6 weeks", "Continuity with one clinician", "Progress dashboard", "WhatsApp check-ins"],
    cta: "Start Recovery",
    highlight: true,
  },
  {
    name: "Care Continuum",
    price: "Custom",
    unit: "monthly",
    desc: "Ongoing care for chronic or post-surgical journeys. Pair-of-clinicians model.",
    features: ["Weekly visits", "Multi-disciplinary team", "Insurance assistance", "24/7 priority booking"],
    cta: "Talk to Care Team",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl animate-fade">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary animate-fade animate-delay-100">Plans</span>
          <h2 className="font-display text-5xl md:text-6xl font-extrabold uppercase tracking-tighter leading-[0.9] mt-6 animate-fade animate-delay-200">
            Honest <span className="italic text-muted-foreground font-medium">pricing.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed animate-fade animate-delay-300">
            One transparent rate. No hidden travel charges. Cancel up to 4 hours before any visit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {plans.map((p, idx) => (
            <div
              key={p.name}
              className={`p-10 flex flex-col transition-smooth relative overflow-hidden group animate-fade ${
                p.highlight 
                  ? "bg-foreground text-background hover:scale-105 origin-center" 
                  : "bg-surface hover:bg-background"
              }`}
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Animated background glow for highlight */}
              {p.highlight && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              )}
              
              <div className="flex items-start justify-between">
                <h3 className="font-display text-xl font-bold uppercase tracking-tight group-hover:text-primary transition-smooth">{p.name}</h3>
                {p.highlight && (
                  <span className="bg-primary text-primary-foreground text-[9px] font-black uppercase px-2 py-1 tracking-tight animate-bounce-in">
                    Most Chosen
                  </span>
                )}
              </div>
              <div className="mt-10 flex items-baseline gap-2">
                <span className={`font-display text-6xl font-extrabold tracking-tighter group-hover:scale-110 transition-transform duration-500 origin-left ${
                  p.highlight ? "group-hover:text-primary" : "group-hover:text-primary"
                }`}>
                  {p.price}
                </span>
                <span className={`text-xs uppercase tracking-widest ${p.highlight ? "text-background/60" : "text-muted-foreground"}`}>
                  {p.unit}
                </span>
              </div>
              <p className={`mt-4 text-sm leading-relaxed group-hover:opacity-100 transition-smooth ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>
                {p.desc}
              </p>
              <ul className={`mt-8 space-y-3 text-sm ${p.highlight ? "text-background/90" : ""}`}>
                {p.features.map((f, fidx) => (
                  <li 
                    key={f} 
                    className="flex gap-3 transform transition-all duration-300 group-hover:translate-x-1"
                    style={{ transitionDelay: `${fidx * 50}ms` }}
                  >
                    <span className={`${p.highlight ? "text-primary" : "text-primary"} group-hover:animate-pulse`}>—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-10 py-4 text-[11px] font-bold uppercase tracking-[0.25em] transition-all relative overflow-hidden btn-interactive ${
                  p.highlight
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
