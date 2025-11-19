import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import FeaturedListings from "./components/FeaturedListings";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <Hero />
      <Highlights />
      <FeaturedListings />
      <CTA />
      <footer className="py-10 border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400">© {new Date().getFullYear()} BlueRealty. All rights reserved.</p>
          <div className="flex items-center gap-6 text-slate-400">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
