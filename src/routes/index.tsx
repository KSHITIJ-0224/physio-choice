import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { TherapistDirectory } from "@/components/TherapistDirectory";
import { HowItWorks } from "@/components/HowItWorks";
import { Conditions } from "@/components/Conditions";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kinetic — Elite Physiotherapy, Delivered Home" },
      {
        name: "description",
        content:
          "Choose your physiotherapist by specialty, experience and real-time availability. Vetted clinicians, in-home sessions, transparent pricing.",
      },
      { property: "og:title", content: "Kinetic — Elite Physiotherapy at Home" },
      {
        property: "og:description",
        content: "Browse vetted physiotherapists and book the one that fits — in your living room, on your terms.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <TherapistDirectory />
        <HowItWorks />
        <Conditions />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <SiteFooter />
    </div>
  );
}
