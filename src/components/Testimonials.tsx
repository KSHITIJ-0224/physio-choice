const quotes = [
  {
    quote:
      "Six weeks post-ACL. Julian came to my apartment, brought every piece of kit I needed, and rebuilt my confidence before he rebuilt my knee.",
    author: "Maya R.",
    role: "Marathoner · NYC",
  },
  {
    quote:
      "My mother refused to go to a clinic. Dr. Grey changed her week. Patient, precise, and genuinely kind — exactly what geriatric care should be.",
    author: "Theo W.",
    role: "Family member · SF",
  },
  {
    quote:
      "Booked Elena at 9pm, she was in my living room by lunch the next day. The platform makes specialist care feel embarrassingly easy.",
    author: "Priya S.",
    role: "Product Designer · LA",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tighter leading-none">
            From the <span className="italic text-muted-foreground font-medium">Recovered.</span>
          </h2>
          <span className="hidden md:block text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Verified patients · 2024
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className="border-t border-foreground pt-8 flex flex-col gap-8 group"
            >
              <span className="font-display text-6xl font-extrabold text-primary leading-none">"</span>
              <blockquote className="text-lg leading-relaxed">{q.quote}</blockquote>
              <figcaption className="mt-auto pt-8 border-t border-border">
                <div className="font-display font-bold uppercase tracking-tight">{q.author}</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {q.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
