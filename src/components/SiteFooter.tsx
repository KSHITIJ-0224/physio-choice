export function SiteFooter() {
  return (
    <footer className="py-20 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5 animate-fade">
            <div className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tighter animate-fade animate-delay-100">
              Kinetic<span className="text-primary">.</span>
            </div>
            <p className="text-muted-foreground max-w-sm mt-6 leading-relaxed animate-fade animate-delay-200">
              The modern platform for elite home physiotherapy. Choose your clinician.
              Recover on your terms.
            </p>
            <form className="mt-10 flex border-b border-foreground/30 pb-3 max-w-sm focus-within:border-primary transition-smooth group animate-fade animate-delay-300">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-none outline-none text-sm w-full py-1 placeholder:text-muted-foreground group-focus-within:text-primary transition-smooth"
              />
              <button className="text-primary font-bold uppercase text-[10px] tracking-[0.25em] hover:text-primary/80 transition-smooth">
                Join →
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 lg:col-start-8 animate-fade animate-delay-100">
            <h5 className="text-[10px] font-black uppercase tracking-[0.25em] mb-6 text-primary">Platform</h5>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Find a Therapist", "Pricing", "For Clinicians", "Corporate Care"].map((item, i) => (
                <li key={i} className="hover:translate-x-1 transition-transform">
                  <a href="#" className="hover:text-primary transition-smooth">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 animate-fade animate-delay-200">
            <h5 className="text-[10px] font-black uppercase tracking-[0.25em] mb-6 text-primary">Learn</h5>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                { label: "Resources", href: "/resources" },
                { label: "Insurance Guide", href: "/insurance" },
                { label: "Recovery Guide", href: "#" },
                { label: "Press Kit", href: "#" },
              ].map((item, i) => (
                <li key={i} className="hover:translate-x-1 transition-transform">
                  <a href={item.href} className="hover:text-primary transition-smooth">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Oversized wordmark with parallax effect */}
        <div className="border-t border-border pt-12 mb-12 overflow-hidden">
          <div className="font-display text-[clamp(4rem,18vw,14rem)] font-extrabold uppercase tracking-tighter leading-[0.85] text-foreground/[0.04] select-none hover:text-foreground/[0.08] transition-all duration-700 cursor-default animate-fade">
            Recover.
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-bold animate-fade animate-delay-300">
          <span className="hover:text-primary transition-smooth">© 2026 Kinetic Health · All rights reserved</span>
          <div className="flex gap-8">
            {["Privacy", "Terms", "License"].map((item, i) => (
              <a 
                key={i}
                href="#" 
                className="hover:text-foreground transition-smooth hover:translate-x-0.5"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
