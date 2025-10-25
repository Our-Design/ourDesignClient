import Link from "next/link";
import {
  CalendarCheck2,
  BadgeCheck,
  Palette,
  Wallet,
  ShieldCheck,
  Home,
} from "lucide-react";

export default function CustomerServices() {
  const features = [
    {
      title: "Free Design Consultation",
      desc: "Talk to an expert designer and explore styles, layouts, and budgets that fit you.",
      Icon: Palette,
    },
    {
      title: "Personalized 3D Designs",
      desc: "Visualize your home before execution with photorealistic renders.",
      Icon: Home,
    },
    {
      title: "Verified Designers",
      desc: "Work only with trusted, vetted professionals with proven portfolios.",
      Icon: BadgeCheck,
    },
    {
      title: "Transparent Pricing",
      desc: "Clear itemized estimates. No hidden costs. Milestone-based payments.",
      Icon: Wallet,
    },
    {
      title: "End‑to‑End Execution",
      desc: "Design, materials, and site work coordinated for you — stress free.",
      Icon: CalendarCheck2,
    },
    {
      title: "Quality & Timelines",
      desc: "Standardized quality checks and on-time delivery you can rely on.",
      Icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative overflow-hidden text-accent">
      {/* soft background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-20%,rgba(1,22,64,0.15),transparent_70%)]" />
      <div className="relative px-8 lg:px-32 py-24">
        <div className="max-w-6xl mx-auto">
          <span className="inline-flex items-center rounded-full border border-default bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-600">
            For Homeowners
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-primary mt-4">
            Get your dream interiors, delivered end‑to‑end
          </h2>
          <p className="mt-4 text-base lg:text-lg text-gray-700 max-w-3xl">
            From free consultation to final handover — we match you with
            verified designers, craft stunning 3D designs, and manage execution
            with transparent pricing and on‑time delivery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {features.map(({ title, desc, Icon }) => (
              <div
                key={title}
                className="group relative p-6 rounded-2xl border border-default bg-white/80 backdrop-blur hover:shadow-default transition"
              >
                <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-60" />
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-heading">
                    {title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-12">
            <Link
              href="/enquire"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary text-white hover:opacity-90 shadow-default"
            >
              Book a free consultation
            </Link>
            <Link
              href="/design-ideas"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-primary text-primary hover:bg-primary/5"
            >
              Browse design ideas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
