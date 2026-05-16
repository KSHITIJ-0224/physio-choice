import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { InsuranceGuide } from "@/components/InsuranceGuide";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/insurance")({
  head: () => ({
    meta: [
      { title: "Insurance Coverage & Billing Guide — Kinetic" },
      {
        name: "description",
        content:
          "Learn how insurance works with Kinetic, get reimbursed for your physiotherapy sessions, and understand your coverage options.",
      },
    ],
  }),
  component: InsurancePage,
});

function InsurancePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <InsuranceGuide />
      </main>
      <SiteFooter />
    </div>
  );
}
