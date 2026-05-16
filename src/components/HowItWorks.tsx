const steps = [
  {
    n: "01",
    title: "Browse & Choose",
    body: "Read full bios, watch intro clips, and pick the clinician whose style fits yours. No assignment lottery.",
  },
  {
    n: "02",
    title: "Book a Slot",
    body: "Real-time availability down to the hour. Instant confirmation — no phone tag, no waitlists.",
  },
  {
    n: "03",
    title: "Recover at Home",
    body: "Your therapist arrives with portable clinic-grade kit. One-on-one care in your living room.",
  },
  {
    n: "04",
    title: "Track Progress",
    body: "Session notes, home exercises, and milestones logged in your private dashboard.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary">
              The Process
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tighter leading-[0.9] mt-6">
              Four steps. <br />
              <span className="text-muted-foreground italic font-medium">Zero friction.</span>
            </h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border">
            {steps.map((s) => (
              <div key={s.n} className="bg-background p-8 group hover:bg-surface transition-colors">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-display text-5xl font-extrabold text-primary">{s.n}</span>
                  <span className="size-2 rounded-full bg-border group-hover:bg-primary transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
