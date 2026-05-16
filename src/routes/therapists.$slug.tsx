import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { BookingDialog } from "@/components/BookingDialog";
import {
  getTherapist,
  getAvailability,
  formatDay,
  therapists,
} from "@/data/therapists";

export const Route = createFileRoute("/therapists/$slug")({
  loader: ({ params }) => {
    const t = getTherapist(params.slug);
    if (!t) throw notFound();
    return { therapist: t };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.therapist.name} — Kinetic Physiotherapy` },
          { name: "description", content: loaderData.therapist.bio },
          { property: "og:title", content: `${loaderData.therapist.name} · Kinetic` },
          { property: "og:description", content: loaderData.therapist.bio },
          { property: "og:image", content: loaderData.therapist.image },
        ]
      : [],
  }),
  component: TherapistProfile,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center text-center px-6">
      <div>
        <h1 className="font-display text-5xl font-extrabold uppercase tracking-tighter">
          Not found
        </h1>
        <p className="mt-4 text-muted-foreground">This therapist isn't in our directory.</p>
        <Link
          to="/"
          className="inline-block mt-8 px-6 py-3 border border-foreground text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-all"
        >
          ← Back to directory
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen grid place-items-center text-center px-6">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function TherapistProfile() {
  const { therapist } = Route.useLoaderData();
  const [open, setOpen] = useState(false);

  const availability = useMemo(() => getAvailability(therapist), [therapist]);
  const upcoming = availability.filter((d) => d.slots.length > 0).slice(0, 5);
  const related = therapists.filter((t) => t.slug !== therapist.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="pt-12">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 mb-10 text-[10px] uppercase tracking-[0.25em] font-bold text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            Specialists
          </Link>
          <span className="mx-3 text-border">/</span>
          <span className="text-foreground">{therapist.name}</span>
        </div>

        {/* Hero */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <img
                src={therapist.image}
                alt={therapist.name}
                width={1000}
                height={1200}
                className="w-full aspect-[4/5] object-cover"
              />
              {therapist.badge && (
                <div className="-mt-4 inline-block bg-primary text-primary-foreground text-[9px] font-black uppercase px-3 py-1.5 tracking-tight">
                  {therapist.badge}
                </div>
              )}
            </div>
            <div className="lg:col-span-7 lg:pt-4">
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary mb-6">
                {therapist.category}
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-extrabold uppercase leading-[0.88] tracking-tighter">
                {therapist.name}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-[55ch]">
                {therapist.bio}
              </p>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border-y border-border">
                <Stat label="Experience" value={`${therapist.experience} yrs`} />
                <Stat label="Rating" value={`★ ${therapist.rating.toFixed(1)}`} />
                <Stat label="Reviews" value={`${therapist.reviews}`} />
                <Stat label="Session" value={`$${therapist.price}`} />
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setOpen(true)}
                  className="px-7 py-4 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-[0.25em] hover:brightness-110 transition-all"
                >
                  Book Session
                </button>
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Next available ·{" "}
                  <span className="text-primary font-semibold">{therapist.next}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations + meta */}
        <section className="px-6 py-16 border-t border-border bg-surface">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
            <Block title="Specializations">
              <div className="flex flex-wrap gap-2">
                {therapist.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-tight font-medium border border-border px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Block>
            <Block title="Credentials">
              <ul className="space-y-2">
                {therapist.credentials.map((c: string) => (
                  <li key={c} className="text-sm text-muted-foreground flex gap-3">
                    <span className="text-primary">—</span>
                    {c}
                  </li>
                ))}
              </ul>
            </Block>
            <Block title="Practice">
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground uppercase text-[10px] tracking-[0.2em] font-bold">
                    Service area
                  </dt>
                  <dd>{therapist.location}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground uppercase text-[10px] tracking-[0.2em] font-bold">
                    Languages
                  </dt>
                  <dd>{therapist.languages.join(", ")}</dd>
                </div>
              </dl>
            </Block>
          </div>
        </section>

        {/* Availability */}
        <section className="px-6 py-24 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tighter leading-none">
                Next <span className="italic text-muted-foreground font-medium">openings.</span>
              </h2>
              <button
                onClick={() => setOpen(true)}
                className="hidden md:block text-[11px] uppercase tracking-[0.25em] font-bold text-primary hover:underline"
              >
                See full calendar →
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border border-y border-border">
              {upcoming.map((d, i) => (
                <div key={i} className="bg-background p-6">
                  <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-muted-foreground">
                    {formatDay(d.date)}
                  </div>
                  <div className="mt-4 space-y-2">
                    {d.slots.slice(0, 4).map((s) => (
                      <button
                        key={s.hour}
                        onClick={() => setOpen(true)}
                        className="w-full text-left px-3 py-2 border border-border text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
                      >
                        {s.label}
                      </button>
                    ))}
                    {d.slots.length > 4 && (
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground pt-1">
                        +{d.slots.length - 4} more
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="px-6 py-24 border-t border-border bg-surface">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tighter leading-none mb-12">
              Other <span className="italic text-muted-foreground font-medium">specialists.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/therapists/$slug"
                  params={{ slug: r.slug }}
                  className="group block"
                >
                  <div className="overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.name}
                      loading="lazy"
                      className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-tight">
                    {r.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                    {r.specialty}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />

      <BookingDialog therapist={therapist} open={open} onOpenChange={setOpen} />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background p-5">
      <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
        {label}
      </div>
      <div className="font-display text-2xl font-bold mt-2 tracking-tight">{value}</div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary mb-6">
        {title}
      </h3>
      {children}
    </div>
  );
}
