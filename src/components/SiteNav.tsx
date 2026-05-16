import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/75 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-extrabold tracking-tighter uppercase">
          Kinetic<span className="text-primary">.</span>
        </Link>
        <div className="hidden md:flex gap-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/80">
          <a href="#specialists" className="hover:text-primary transition-colors">Specialists</a>
          <a href="#how" className="hover:text-primary transition-colors">How it works</a>
          <a href="#conditions" className="hover:text-primary transition-colors">Programs</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
        </div>
        <a
          href="#specialists"
          className="px-5 py-2.5 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}
