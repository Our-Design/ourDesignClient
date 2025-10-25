import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Riya Malhotra",
    city: "Gurugram",
    avatar: "/placeholder-avatar.jpg",
    quote:
      "Absolutely loved the design and execution! The team handled everything smoothly and finished on time.",
  },
  {
    name: "Arjun Mehta",
    city: "Bengaluru",
    avatar: "/placeholder-avatar.jpg",
    quote:
      "Our 3BHK makeover turned out better than we imagined. Transparent pricing and great communication.",
  },
  {
    name: "Sara Khan",
    city: "Mumbai",
    avatar: "/placeholder-avatar.jpg",
    quote:
      "The 3D designs made it easy to decide. The final space matches the renders perfectly!",
  },
  {
    name: "Vikram Iyer",
    city: "Noida",
    avatar: "/placeholder-avatar.jpg",
    quote:
      "Professional designers and hassle‑free execution. We love our new modular kitchen.",
  },
];

export default function CustomerTestimonials() {
  return (
    <section className="relative overflow-hidden text-accent">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary to-white" />
      <div className="relative px-8 lg:px-32 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-amber-400 stroke-amber-500"
              />
            ))}
            <span className="text-sm text-gray-600 ml-2">
              Loved by homeowners
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-primary mt-3">
            What homeowners say about us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-6 bg-white/90 backdrop-blur rounded-2xl border border-default shadow-default"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-heading">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.city}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                  “{t.quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
