import { Menu, Home, Phone, MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-900/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-lg shadow-cyan-500/20">
            <Home className="w-5 h-5" />
          </span>
          <span className="text-xl font-semibold tracking-tight">BlueRealty</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#buy" className="hover:text-white transition">Buy</a>
          <a href="#rent" className="hover:text-white transition">Rent</a>
          <a href="#sell" className="hover:text-white transition">Sell</a>
          <a href="#agents" className="hover:text-white transition">Agents</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+1800123456" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition">
            <Phone className="w-4 h-4" />
            <span>1-800-123-456</span>
          </a>
          <a href="#explore" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 text-white shadow-lg shadow-cyan-500/30">
            <MapPin className="w-4 h-4" />
            <span>Explore</span>
          </a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-white">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
