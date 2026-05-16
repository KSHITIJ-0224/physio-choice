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
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4 animate-fade">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tighter leading-none animate-fade animate-delay-100">
            From the <span className="italic text-muted-foreground font-medium">Recovered.</span>
          </h2>
          <span className="hidden md:block text-[11px] uppercase tracking-[0.25em] text-muted-foreground animate-fade animate-delay-200">
            Verified patients · 2024
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className="border-t border-foreground pt-8 flex flex-col gap-8 group cursor-pointer animate-fade hover:border-primary transition-all duration-500"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-6xl font-extrabold text-primary leading-none group-hover:scale-125 transition-transform duration-500 origin-top-left">"</span>
                <div className="size-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse" />
              </div>
              <blockquote className="text-lg leading-relaxed group-hover:text-foreground transition-smooth italic">{q.quote}</blockquote>
              <figcaption className="mt-auto pt-8 border-t border-border group-hover:border-primary transition-smooth">
                <div className="font-display font-bold uppercase tracking-tight group-hover:text-primary transition-smooth">{q.author}</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1 group-hover:text-primary/60 transition-smooth">
                  {q.role}
                </div>
              </figcaption>
              
              {/* Bottom accent line animation */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
