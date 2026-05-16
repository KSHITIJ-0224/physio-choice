import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { ResourcesHub } from "@/components/ResourcesHub";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources & Learning Center — Kinetic" },
      {
        name: "description",
        content:
          "Expert guides, exercises, and resources to support your physiotherapy recovery journey. Learn from our specialists.",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <ResourcesHub />
      </main>
      <SiteFooter />
    </div>
  );
}
