const conditions = [
  { n: "01", title: "Sports Injury", body: "ACL tears, ligament sprains, and recurring athletic strain." },
  { n: "02", title: "Workplace Pain", body: "Repetitive strain from desks, tech-neck, and lumbar stiffness." },
  { n: "03", title: "Elderly Care", body: "Balance training, fall prevention, geriatric mobility." },
  { n: "04", title: "Post-Surgical", body: "Managed rehab after joint replacements and procedures." },
  { n: "05", title: "Neurological", body: "Stroke recovery, vestibular therapy, and motor relearning." },
  { n: "06", title: "Pediatric", body: "Developmental support and early intervention for kids." },
];

export function Conditions() {
  return (
    <section id="conditions" className="py-28 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
          <div className="animate-fade">
            <h2 className="font-display text-5xl md:text-6xl font-extrabold uppercase leading-[0.9] tracking-tighter animate-fade animate-delay-100">
              What we <span className="text-primary italic font-medium">Solve.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md lg:pt-4 animate-fade animate-delay-200">
            Comprehensive in-home care across musculoskeletal, neurological, and post-operative recovery.
            If movement is the question, we have a specialist trained to answer it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {conditions.map((c, idx) => (
            <div 
              key={c.n} 
              className="bg-surface p-10 group hover:bg-background transition-smooth cursor-pointer overflow-hidden animate-fade"
              style={{ animationDelay: `${(idx + 1) * 80}ms` }}
            >
              <div className="flex items-center gap-3 text-primary mb-8 group-hover:gap-5 transition-all duration-500">
                <span className="text-xs font-bold group-hover:scale-125 transition-transform">{c.n}</span>
                <span className="h-px flex-1 bg-primary/30 group-hover:bg-primary transition-colors" />
              </div>
              <h4 className="font-display text-2xl font-bold uppercase tracking-tight group-hover:text-primary transition-smooth">{c.title}</h4>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-smooth">{c.body}</p>
              <div className="mt-8 text-[10px] uppercase tracking-[0.25em] font-bold text-muted-foreground group-hover:text-primary transition-smooth flex items-center gap-2">
                <span>Explore Specialists</span>
                <span className="inline-block transform group-hover:translate-x-1 transition-transform">→</span>
              </div>

              {/* Animated background glow on hover */}
              <div className="absolute inset-0 bg-primary/5 -z-10 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
