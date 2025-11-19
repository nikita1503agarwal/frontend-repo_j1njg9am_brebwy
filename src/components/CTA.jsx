import { Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(120deg,rgba(15,23,42,0.6)_0%,rgba(15,23,42,0.6)_100%)]">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 blur-xl" />
          <div className="relative p-10 md:p-14">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 border border-white/10">
                  <Sparkles className="w-4 h-4" />
                  Matchmaking service
                </div>
                <h3 className="mt-4 text-3xl font-bold text-white">Get personalized home matches in your inbox</h3>
                <p className="text-slate-300 mt-2">Tell us what you’re looking for and we’ll send you curated options every week.</p>
              </div>

              <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input type="email" placeholder="Your email" className="w-full sm:w-80 h-12 rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder-slate-400 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button className="h-12 px-6 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 text-white shadow-lg shadow-cyan-500/30">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
