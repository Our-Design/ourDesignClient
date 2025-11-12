const faqs = [
  {
    q: "How does the process work?",
    a: "Start with a free consultation, get personalized 3D designs, confirm scope and pricing, and we execute end‑to‑end with regular updates.",
  },
  {
    q: "How much does interior design cost?",
    a: "Costs depend on size, materials, and scope. We share an itemized estimate upfront with milestone-based payments.",
  },
  {
    q: "How long will my project take?",
    a: "Most projects complete in 4–10 weeks depending on scope and site readiness. We commit clear timelines before we start.",
  },
  {
    q: "Are your designers verified?",
    a: "Yes. We onboard only vetted designers with proven portfolios and client references.",
  },
  {
    q: "Do you provide warranty or after‑support?",
    a: "Yes. We provide post‑handover support and brand warranties as applicable.",
  },
  {
    q: "Can I see design ideas first?",
    a: "Absolutely — browse our design ideas and book a free consultation to get personalized concepts for your home.",
  },
];

export default function FAQs() {
  return (
    <section className="px-8 lg:px-32 py-24 bg-white text-accent">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm tracking-wide uppercase text-accent">FAQs</p>
        <h2 className="text-3xl lg:text-4xl font-semibold text-primary mt-3">
          Frequently asked questions
        </h2>

        <div className="mt-8 border rounded-2xl border-default bg-muted/40 overflow-hidden">
          {faqs.map((item, idx) => (
            <details
              key={idx}
              className="group px-5 py-4 border-b last:border-b-0"
            >
              <summary className="flex cursor-pointer items-center justify-between text-heading font-medium border border-red-300">
                <span>{item.q}</span>
                <span
                  aria-hidden
                  className="ml-4 inline-flex min-h-6 min-w-6 h-6 w-6 items-center justify-center rounded-full border border-primary text-primary transition-transform group-open:rotate-45 "
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
