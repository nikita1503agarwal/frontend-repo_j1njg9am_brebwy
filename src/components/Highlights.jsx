import { ShieldCheck, Clock3, Handshake, MapPin } from "lucide-react";

export default function Highlights() {
  const items = [
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Trusted Advisors",
      desc: "Experienced local agents guiding every step of your journey.",
    },
    {
      icon: <Clock3 className="w-5 h-5" />,
      title: "Fast Closings",
      desc: "Streamlined process and digital documents to move quickly.",
    },
    {
      icon: <Handshake className="w-5 h-5" />,
      title: "Best Deals",
      desc: "Negotiation experts securing the right price for you.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Neighborhood Intel",
      desc: "School ratings, commute times, and walk scores built‑in.",
    },
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 text-white grid place-items-center mb-3">
                {it.icon}
              </div>
              <div className="text-white font-semibold">{it.title}</div>
              <p className="text-sm mt-1 text-slate-300/80">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
