import { Link } from "@tanstack/react-router";
import heroPortrait from "@/assets/therapist-hero.jpg";

export function Hero() {
  return (
    <section className="relative pt-24 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
        <div className="lg:col-span-8 animate-reveal">
          <div className="flex items-center gap-3 mb-8">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-muted-foreground">
              Live · 24 specialists available in your city
            </span>
          </div>
          <h1 className="font-display text-[clamp(3.25rem,10vw,7.5rem)] font-extrabold leading-[0.85] tracking-tighter uppercase">
            Recovery
            <br />
            <span className="text-muted-foreground italic font-medium">On Your</span>
            <br />
            Terms.
          </h1>
          <p className="mt-10 max-w-[48ch] text-lg text-muted-foreground font-light leading-relaxed">
            Elite physiotherapy delivered to your doorstep. Browse our vetted clinicians, read the room,
            and book the one that fits — by specialty, experience, and real-time availability.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href="#specialists"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-[0.25em] hover:brightness-110 transition-all"
            >
              Choose Your Therapist
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="size-11 rounded-full border-2 border-background bg-surface-2 overflow-hidden" />
                <div className="size-11 rounded-full border-2 border-background bg-surface overflow-hidden" />
                <div className="size-11 rounded-full border-2 border-background bg-primary/20 grid place-items-center text-[10px] font-bold">
                  +4k
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Trusted by 4,200+ patients
                </span>
                <span className="text-sm font-semibold">4.9 / 5 Recovery Rating</span>
              </div>
            </div>
          </div>
        </div>

        <Link
          to="/therapists/$slug"
          params={{ slug: "aris-thorne" }}
          className="lg:col-span-4 relative group block"
        >
          <img
            src={heroPortrait}
            alt="Featured physiotherapist Dr. Aris Thorne"
            width={800}
            height={1000}
            className="w-full aspect-[4/5] object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
          />
          <div className="absolute -bottom-6 -left-6 bg-primary p-6 max-w-[240px]">
            <div className="font-display text-2xl font-bold uppercase leading-none text-primary-foreground">
              Dr. Aris Thorne
            </div>
            <div className="text-primary-foreground/80 text-[10px] uppercase tracking-[0.2em] mt-2">
              Sports Medicine · Featured this week
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
