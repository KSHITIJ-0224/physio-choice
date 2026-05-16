import { useState } from 'react';

const successStories = [
  {
    name: "Maya Rodriguez",
    role: "Marathon Runner · NYC",
    condition: "ACL Tear Recovery",
    story: "Six weeks post-ACL surgery, I was terrified I'd never run again. Julian came to my apartment, brought everything I needed, and through 8 weeks of targeted rehabilitation, not only did he help me recover—he helped me understand my body better. I ran my first 10K pain-free last month.",
    improvement: "100%",
    metric: "Return to running",
  },
  {
    name: "Dr. Eleanor Cross",
    role: "Retired Academic · San Francisco",
    condition: "Geriatric Mobility",
    story: "At 76, I was losing confidence in my ability to stay active. Dr. Grey came twice a week for three months. The home environment made all the difference—no rushing between appointments, no anxiety about transportation. I now take walks daily and feel genuinely independent again.",
    improvement: "89%",
    metric: "Mobility improvement",
  },
  {
    name: "Priya Sharma",
    role: "Product Designer · LA",
    condition: "Tech Neck & Postural Issues",
    story: "My chronic neck and shoulder pain from desk work was destroying my quality of life. Elena didn't just treat symptoms—she rebuilt my entire posture routine. Working from home meant sessions happened during my breaks, seamlessly. Pain-free for 6 months straight.",
    improvement: "95%",
    metric: "Pain reduction",
  },
  {
    name: "James Mitchell",
    role: "Accountant · Boston",
    condition: "Lower Back Pain",
    story: "After 10 years of chronic back pain and failed treatments, I was skeptical. Thomas took time to really understand my lifestyle and built a program around my constraints. Three months of consistent home sessions completely changed my life. I'm off pain medication.",
    improvement: "100%",
    metric: "Medication-free",
  },
  {
    name: "Sofia Santos",
    role: "Physical Therapist · Miami",
    condition: "Post-Shoulder Surgery",
    story: "Being a PT myself, I was critical. But David's approach was refreshing—he listened, adapted, and pushed me just right. Home sessions meant I could rest immediately after, no commute stress. My shoulder has never felt better.",
    improvement: "98%",
    metric: "Full range of motion",
  },
  {
    name: "Robert Chen",
    role: "Retired Construction · Seattle",
    condition: "Fall Prevention & Elderly Care",
    story: "My kids were worried about me falling. Coach Maria didn't just do exercises—she transformed my home environment and my confidence. I went from shuffling around to leading my grandkids on hiking trips. I feel 15 years younger.",
    improvement: "92%",
    metric: "Activity level increase",
  },
];

export function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedMetric, setSelectedMetric] = useState(0);

  const story = successStories[activeIndex];

  return (
    <section className="py-28 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-fade">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary animate-fade animate-delay-100">
            Real Results
          </span>
          <h1 className="heading-lg animate-fade animate-delay-200">
            Stories of <span className="italic text-muted-foreground font-medium">Transformation</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed animate-fade animate-delay-300">
            From athletes returning to sport, to seniors reclaiming independence. These are the real stories of people who chose Kinetic and transformed their lives.
          </p>
        </div>

        {/* Main Story Display */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Story Content */}
          <div className="lg:col-span-2 animate-fade animate-delay-200">
            <div className="space-y-8">
              {/* Condition Badge */}
              <div className="inline-block">
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  {story.condition}
                </span>
              </div>

              {/* Story Text */}
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl leading-relaxed font-light italic text-foreground">
                  "{story.story}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-border">
                  <h3 className="font-display font-bold text-2xl tracking-tight">{story.name}</h3>
                  <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] mt-2">
                    {story.role}
                  </p>
                </div>
              </div>

              {/* Improvement Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-background rounded-sm border border-primary/30">
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                    {story.improvement}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    {story.metric}
                  </div>
                </div>
                <div className="p-6 bg-background rounded-sm border border-border">
                  <div className="text-2xl font-display font-bold text-foreground mb-2">
                    8-12 weeks
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    Time to recovery
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4 animate-fade animate-delay-300">
            <h4 className="font-display font-bold uppercase tracking-tight text-lg mb-6">
              More Success Stories
            </h4>
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              {successStories.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-4 rounded-sm transition-all duration-300 group ${
                    idx === activeIndex
                      ? "bg-primary text-primary-foreground"
                      : "bg-background hover:bg-surface border border-border hover:border-primary"
                  }`}
                >
                  <div className="font-display font-bold uppercase tracking-tight">
                    {s.name.split(' ')[0]}
                  </div>
                  <div className={`text-[11px] uppercase tracking-[0.2em] mt-1 ${
                    idx === activeIndex ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}>
                    {s.condition}
                  </div>
                  <div className={`text-xs mt-2 ${
                    idx === activeIndex ? "text-primary-foreground/60" : "text-muted-foreground"
                  } group-hover:text-foreground transition-smooth`}>
                    {s.role}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { stat: "4,200+", label: "Patients Served" },
            { stat: "4.9/5", label: "Average Rating" },
            { stat: "96%", label: "Recovery Rate" },
            { stat: "98%", label: "Would Recommend" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-background border border-border rounded-sm hover:border-primary transition-smooth group animate-fade text-center"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="text-5xl font-display font-bold text-primary group-hover:scale-110 transition-transform">
                {item.stat}
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-3 group-hover:text-foreground transition-smooth">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-12 bg-background border-2 border-primary rounded-sm text-center overflow-hidden group animate-fade">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <h3 className="heading-md mb-4">Ready to write your own success story?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of people who have transformed their lives through personalized, expert physiotherapy from the comfort of home.
            </p>
            <a
              href="#specialists"
              className="inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-[0.25em] hover:brightness-110 transition-smooth btn-interactive"
            >
              Start Your Journey
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--primary);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--primary);
          opacity: 0.8;
        }
      `}</style>
    </section>
  );
}
