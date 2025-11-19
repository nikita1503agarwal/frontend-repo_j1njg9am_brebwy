import { MapPin, BedDouble, Bath, Ruler, Heart } from "lucide-react";

const listings = [
  {
    id: 1,
    title: "Contemporary Family Home",
    location: "Seattle, WA",
    price: "$1,250,000",
    beds: 4,
    baths: 3,
    area: 2450,
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Skyline Penthouse Suite",
    location: "Austin, TX",
    price: "$2,980,000",
    beds: 3,
    baths: 3,
    area: 2100,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Coastal Modern Retreat",
    location: "Miami, FL",
    price: "$1,890,000",
    beds: 5,
    baths: 4,
    area: 3200,
    image:
      "https://images.unsplash.com/photo-1472220625704-91e1462799b2?q=80&w=1800&auto=format&fit=crop",
  },
];

export default function FeaturedListings() {
  return (
    <section id="explore" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured listings</h2>
            <p className="text-slate-400 mt-1">Handpicked homes you’ll love</p>
          </div>
          <a href="#" className="text-cyan-300 hover:text-white">See all</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {listings.map((home) => (
            <article key={home.id} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="relative">
                <img src={home.image} alt={home.title} className="h-60 w-full object-cover" />
                <button className="absolute top-3 right-3 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/70 text-white opacity-0 group-hover:opacity-100 transition">
                  <Heart className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-slate-900/70 text-white text-sm">
                  {home.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold">{home.title}</h3>
                <div className="mt-1 flex items-center gap-2 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4" /> {home.location}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-slate-300 text-sm">
                  <div className="inline-flex items-center gap-2">
                    <BedDouble className="w-4 h-4" /> {home.beds} Beds
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Bath className="w-4 h-4" /> {home.baths} Baths
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Ruler className="w-4 h-4" /> {home.area.toLocaleString()} sqft
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
