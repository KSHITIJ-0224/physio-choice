const resources = [
  {
    category: "Getting Started",
    icon: "📚",
    items: [
      { title: "How to prepare for your first session", read: "8 min" },
      { title: "Understanding your assessment", read: "6 min" },
      { title: "Home exercises explained", read: "10 min" },
    ],
  },
  {
    category: "Common Conditions",
    icon: "🏥",
    items: [
      { title: "Lower back pain recovery guide", read: "12 min" },
      { title: "Sports injuries 101", read: "9 min" },
      { title: "Post-surgical rehabilitation timeline", read: "11 min" },
    ],
  },
  {
    category: "Wellness & Prevention",
    icon: "💪",
    items: [
      { title: "Desk posture optimization", read: "7 min" },
      { title: "Injury prevention for athletes", read: "14 min" },
      { title: "Age-specific mobility maintenance", read: "10 min" },
    ],
  },
];

export function ResourcesHub() {
  return (
    <section className="py-28 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl animate-fade">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary animate-fade animate-delay-100">
            Learning Center
          </span>
          <h1 className="heading-lg animate-fade animate-delay-200">
            Expert <span className="italic text-muted-foreground font-medium">Resources</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed animate-fade animate-delay-300">
            Access guides, exercises, and expert insights to support your recovery journey. From pre-session preparation to long-term wellness strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((category, idx) => (
            <div
              key={category.category}
              className="space-y-6 animate-fade"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{category.icon}</span>
                <h2 className="font-display font-bold uppercase tracking-tight text-lg">
                  {category.category}
                </h2>
              </div>

              <div className="space-y-4">
                {category.items.map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="group block p-4 border border-border rounded-sm hover:border-primary hover:bg-surface transition-smooth cursor-pointer animate-fade"
                    style={{ animationDelay: `${(idx * 3 + i + 1) * 80}ms` }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold text-sm group-hover:text-primary transition-smooth leading-snug">
                        {item.title}
                      </h3>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-smooth whitespace-nowrap">
                        {item.read}
                      </span>
                    </div>
                    <div className="mt-3 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-12 bg-surface border border-border rounded-sm overflow-hidden relative group animate-fade animate-delay-300">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <h3 className="heading-md mb-4">Ready to start your recovery?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Our expert physiotherapists are available for personalized guidance based on your specific needs and goals.
            </p>
            <a
              href="#specialists"
              className="inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-[0.25em] hover:brightness-110 transition-smooth btn-interactive"
            >
              Find Your Therapist
              <span className="inline-block">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
