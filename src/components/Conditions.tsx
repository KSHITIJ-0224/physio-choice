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
          <div>
            <h2 className="font-display text-5xl md:text-6xl font-extrabold uppercase leading-[0.9] tracking-tighter">
              What we <span className="text-primary italic font-medium">Solve.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md lg:pt-4">
            Comprehensive in-home care across musculoskeletal, neurological, and post-operative recovery.
            If movement is the question, we have a specialist trained to answer it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {conditions.map((c) => (
            <div key={c.n} className="bg-surface p-10 group hover:bg-background transition-colors">
              <div className="flex items-center gap-3 text-primary mb-8">
                <span className="text-xs font-bold">{c.n}</span>
                <span className="h-px flex-1 bg-primary/30" />
              </div>
              <h4 className="font-display text-2xl font-bold uppercase tracking-tight">{c.title}</h4>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              <div className="mt-8 text-[10px] uppercase tracking-[0.25em] font-bold text-muted-foreground group-hover:text-primary transition-colors">
                Explore Specialists →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
