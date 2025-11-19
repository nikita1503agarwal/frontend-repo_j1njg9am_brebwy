import { Search, MapPin, Building2, BedDouble, Bath, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 border border-white/10">
              <Building2 className="w-4 h-4" />
              Award‑winning real estate experience
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Find your next home with confidence
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Browse expertly curated homes, see neighborhood insights, and tour in person or virtually. All in one beautiful, lightning‑fast experience.
            </p>

            <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search city, address, ZIP"
                    className="w-full h-12 pl-10 pr-4 rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 sm:flex gap-3">
                  <button className="inline-flex items-center gap-2 px-4 h-12 rounded-xl bg-white/10 text-white hover:bg-white/20 transition">
                    <BedDouble className="w-4 h-4" /> 3+
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 h-12 rounded-xl bg-white/10 text-white hover:bg-white/20 transition">
                    <Bath className="w-4 h-4" /> 2+
                  </button>
                  <button className="inline-flex items-center gap-2 px-5 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 text-white shadow-lg shadow-cyan-500/30">
                    Search
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="mt-3 text-slate-400 text-sm">
                Popular: Seattle, Austin, Miami, New York
              </div>
            </div>

            <div className="mt-8 flex items-center gap-6 text-slate-300">
              <div>
                <div className="text-3xl font-bold text-white">12k+</div>
                Verified Listings
              </div>
              <div>
                <div className="text-3xl font-bold text-white">4.9</div>
                Average Rating
              </div>
              <div>
                <div className="text-3xl font-bold text-white">72</div>
                Cities Covered
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 blur-2xl rounded-3xl" />
            <img
              src="https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1800&auto=format&fit=crop"
              alt="Modern home"
              className="relative rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
