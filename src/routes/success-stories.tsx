import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SuccessStories } from "@/components/SuccessStories";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories & Patient Transformations — Kinetic" },
      {
        name: "description",
        content:
          "Real stories of transformation from athletes, seniors, and everyday people who recovered with Kinetic's home-based physiotherapy.",
      },
    ],
  }),
  component: SuccessStoriesPage,
});

function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <SuccessStories />
      </main>
      <SiteFooter />
    </div>
  );
}
