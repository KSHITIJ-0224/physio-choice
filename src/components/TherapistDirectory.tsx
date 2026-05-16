import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { BookingDialog } from "@/components/BookingDialog";
import { therapists, type Therapist, type TherapistCategory } from "@/data/therapists";

const filters: ("All" | TherapistCategory)[] = [
  "All",
  "Sports Rehab",
  "Post-Op",
  "Chronic Pain",
  "Neuro",
  "Geriatric",
];
const sorts = ["Top Rated", "Soonest", "Lowest Price"] as const;

export function TherapistDirectory() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [sort, setSort] = useState<(typeof sorts)[number]>("Top Rated");
  const [booking, setBooking] = useState<Therapist | null>(null);

  const list = useMemo(() => {
    const filtered =
      active === "All" ? therapists : therapists.filter((t) => t.category === active);
    const sorted = [...filtered].sort((a, b) => {
      if (sort === "Top Rated")
        return b.rating * 100 + b.reviews / 1000 - (a.rating * 100 + a.reviews / 1000);
      if (sort === "Lowest Price") return a.price - b.price;
      return a.next.localeCompare(b.next);
    });
    return sorted;
  }, [active, sort]);

  return (
    <>
      {/* Sticky filter rail */}
      <section
        id="specialists"
        className="sticky top-16 z-40 bg-background/90 backdrop-blur-xl border-y border-border py-4"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center gap-6">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-muted-foreground">
            Find Your Expert
          </span>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const on = active === f;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-4 py-1.5 border text-[11px] font-bold uppercase tracking-tight transition-colors ${
                    on
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
          <div className="ml-auto flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>Sort:</span>
            {sorts.map((s) => (
              <button
                key={s}
                onClick={() => setSort(s)}
                className={`font-semibold transition-colors ${
                  sort === s ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
                {s !== sorts[sorts.length - 1] && <span className="mx-2 text-border">/</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tighter leading-none">
              Hand-Picked{" "}
              <span className="text-muted-foreground italic font-medium">Clinicians.</span>
            </h2>
            <span className="hidden md:block text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              {list.length} specialists · vetted in-person
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {list.map((t, i) => (
              <article
                key={t.slug}
                className="group animate-reveal"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <Link
                  to="/therapists/$slug"
                  params={{ slug: t.slug }}
                  className="block relative overflow-hidden"
                >
                  <img
                    src={t.image}
                    alt={`${t.name} portrait`}
                    width={1000}
                    height={1200}
                    loading="lazy"
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {t.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-[9px] font-black uppercase px-2.5 py-1 tracking-tight">
                        {t.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-background/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Next available
                    </div>
                    <div className="text-sm font-semibold text-primary">{t.next}</div>
                  </div>
                </Link>

                <div className="mt-6 flex justify-between items-start gap-4">
                  <div>
                    <Link
                      to="/therapists/$slug"
                      params={{ slug: t.slug }}
                      className="font-display text-2xl font-bold uppercase leading-tight hover:text-primary transition-colors"
                    >
                      {t.name}
                    </Link>
                    <p className="text-muted-foreground text-[11px] uppercase tracking-[0.18em] mt-1.5">
                      {t.specialty} · {t.experience} yrs
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-lg font-bold">${t.price}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
                      per session
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold text-primary">
                    ★ {t.rating.toFixed(1)}
                  </span>
                  <span className="text-[10px] text-muted-foreground">({t.reviews})</span>
                  <span className="mx-1 text-border">·</span>
                  {t.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] border border-border px-2 py-0.5 uppercase font-medium tracking-tight"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-[1fr_auto] gap-2">
                  <button
                    onClick={() => setBooking(t)}
                    className="py-4 bg-foreground text-background text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Book Session
                  </button>
                  <Link
                    to="/therapists/$slug"
                    params={{ slug: t.slug }}
                    className="px-5 py-4 border border-border text-[11px] font-bold uppercase tracking-[0.25em] hover:border-foreground transition-all grid place-items-center"
                  >
                    Profile
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BookingDialog
        therapist={booking}
        open={!!booking}
        onOpenChange={(o) => !o && setBooking(null)}
      />
    </>
  );
}
