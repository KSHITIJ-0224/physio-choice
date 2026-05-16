import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function SiteNav() {
  const [isHoveredLink, setIsHoveredLink] = useState<string | null>(null);

  const navLinks = [
    { label: "Specialists", href: "#specialists" },
    { label: "How it works", href: "#how" },
    { label: "Programs", href: "#conditions" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "/resources" },
    { label: "Insurance", href: "/insurance" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/75 backdrop-blur-xl border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          to="/" 
          className="font-display text-xl font-extrabold tracking-tighter uppercase hover:text-primary transition-smooth"
        >
          Kinetic<span className="text-primary">.</span>
        </Link>
        <div className="hidden md:flex gap-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/80">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group transition-smooth hover:text-primary"
              onMouseEnter={() => setIsHoveredLink(link.href)}
              onMouseLeave={() => setIsHoveredLink(null)}
            >
              {link.label}
              {/* Animated underline */}
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500 ${
                  isHoveredLink === link.href ? "right-0" : "right-full"
                }`}
              />
            </a>
          ))}
        </div>
        <a
          href="#specialists"
          className="px-5 py-2.5 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all hover:shadow-lg hover:shadow-primary/50 btn-interactive"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}
