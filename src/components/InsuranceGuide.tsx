export function InsuranceGuide() {
  const faqs = [
    {
      q: "Will my insurance cover Kinetic sessions?",
      a: "Most major insurance plans recognize physiotherapy as a covered service. Kinetic provides itemized receipts for all sessions, making it easy to submit claims to your provider. Our Care Continuum plan includes dedicated claims assistance.",
    },
    {
      q: "Do you have in-network providers?",
      a: "While Kinetic is currently out-of-network, many of our clients successfully receive reimbursement. We provide all documentation needed for your claims.",
    },
    {
      q: "What information do I need to submit a claim?",
      a: "We provide comprehensive session receipts including CPT codes, provider credentials, and clinical notes. Contact our support team and we'll help you navigate your specific plan.",
    },
    {
      q: "How much can I expect to be reimbursed?",
      a: "Reimbursement varies by plan. Most plans cover 50-80% of physiotherapy costs after deductibles. Check your plan's benefits or contact your insurer for specific coverage details.",
    },
    {
      q: "Are there pre-authorization requirements?",
      a: "Some plans require pre-authorization for physiotherapy. We recommend contacting your insurance provider before booking. We can provide provider information to support your pre-auth request.",
    },
  ];

  const planComparison = [
    { name: "Single Session", coverage: "Full receipts", reimbursement: "Flexible" },
    { name: "Recovery Plan", coverage: "Batched receipts", reimbursement: "Better bundle rates" },
    { name: "Care Continuum", coverage: "Claims assistance included", reimbursement: "Dedicated support" },
  ];

  return (
    <section className="py-28 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-20 animate-fade">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary animate-fade animate-delay-100">
            Insurance & Billing
          </span>
          <h1 className="heading-lg animate-fade animate-delay-200">
            Insurance <span className="italic text-muted-foreground font-medium">Coverage Guide</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed animate-fade animate-delay-300">
            Understanding how insurance works with Kinetic sessions. We've made it simple.
          </p>
        </div>

        {/* Coverage Comparison */}
        <div className="mb-20">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight mb-8 animate-fade animate-delay-100">
            Plan Comparison
          </h2>
          <div className="grid md:grid-cols-3 gap-4 animate-fade animate-delay-200">
            {planComparison.map((plan, idx) => (
              <div
                key={plan.name}
                className="p-6 border border-border bg-surface hover:bg-surface-2 transition-smooth rounded-sm cursor-pointer transform hover:scale-105 origin-center"
              >
                <h3 className="font-display font-bold uppercase tracking-tight text-lg mb-4">
                  {plan.name}
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Coverage:</span>
                    <p className="text-foreground mt-1">{plan.coverage}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Reimbursement:</span>
                    <p className="text-primary mt-1 font-semibold">{plan.reimbursement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="mb-20">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight mb-8 animate-fade animate-delay-100">
            How to Get Reimbursed
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Book Your Session",
                desc: "Choose your therapist and schedule sessions through our platform.",
              },
              {
                step: "02",
                title: "Attend & Receive Receipt",
                desc: "After your session, download your itemized receipt with all billing codes.",
              },
              {
                step: "03",
                title: "Submit to Insurance",
                desc: "Send the receipt to your insurance provider via their online portal or mail.",
              },
              {
                step: "04",
                title: "Receive Reimbursement",
                desc: "Insurance processes your claim and sends reimbursement to you (typically 10-30 days).",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-6 p-6 border border-border bg-surface hover:bg-background transition-smooth rounded-sm group cursor-pointer animate-fade"
                style={{ animationDelay: `${(idx + 1) * 80}ms` }}
              >
                <div className="flex-shrink-0">
                  <span className="flex-shrink-0 inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground font-display font-bold">
                    {item.step}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-display font-bold text-lg tracking-tight group-hover:text-primary transition-smooth">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-1 group-hover:text-foreground/80 transition-smooth">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight mb-8 animate-fade animate-delay-100">
            Common Questions
          </h2>
          <div className="border-t border-border">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border-b border-border p-6 hover:bg-surface/50 transition-smooth animate-fade"
                style={{ animationDelay: `${(idx + 1) * 80}ms` }}
              >
                <details className="group cursor-pointer">
                  <summary className="flex items-center justify-between font-display font-bold text-lg uppercase tracking-tight group-hover:text-primary transition-smooth">
                    {faq.q}
                    <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed text-sm group-open:text-foreground/80 transition-smooth">
                    {faq.a}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>

        {/* Support CTA */}
        <div className="mt-16 p-12 bg-surface border border-border rounded-sm text-center overflow-hidden group animate-fade animate-delay-300">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <h3 className="heading-md mb-4">Need help with your insurance?</h3>
            <p className="text-muted-foreground mb-8">
              Our claims specialists are ready to guide you through the process.
            </p>
            <a
              href="mailto:insurance@kinetic.health"
              className="inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-[0.25em] hover:brightness-110 transition-smooth btn-interactive"
            >
              Contact Insurance Team
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
