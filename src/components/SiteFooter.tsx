export function SiteFooter() {
  return (
    <footer className="py-20 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <div className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tighter">
              Kinetic<span className="text-primary">.</span>
            </div>
            <p className="text-muted-foreground max-w-sm mt-6 leading-relaxed">
              The modern platform for elite home physiotherapy. Choose your clinician.
              Recover on your terms.
            </p>
            <form className="mt-10 flex border-b border-foreground/30 pb-3 max-w-sm focus-within:border-primary transition-colors">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-none outline-none text-sm w-full py-1 placeholder:text-muted-foreground"
              />
              <button className="text-primary font-bold uppercase text-[10px] tracking-[0.25em]">
                Join →
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 lg:col-start-8">
            <h5 className="text-[10px] font-black uppercase tracking-[0.25em] mb-6">Platform</h5>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#specialists" className="hover:text-primary transition-colors">Find a Therapist</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">For Clinicians</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Corporate Care</a></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h5 className="text-[10px] font-black uppercase tracking-[0.25em] mb-6">Support</h5>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Safety</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press Kit</a></li>
            </ul>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="border-t border-border pt-12 mb-12">
          <div className="font-display text-[clamp(4rem,18vw,14rem)] font-extrabold uppercase tracking-tighter leading-[0.85] text-foreground/[0.04] select-none">
            Recover.
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-bold">
          <span>© 2026 Kinetic Health · All rights reserved</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
