import Hero from "../../assets/visa/hero (2).jpg";
import { Search, Plane } from "lucide-react";

const VisaHero = () => {
    return (
        <section className="relative overflow-hidden rounded-[32px]">

            {/* Background Image */}
            <img
                src={Hero}
                alt="Visa Guide"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-[#5C1324]/55 to-[#7C2338]/35" />

            {/* Content */}
            <div className="relative z-10 grid min-h-[470px] items-center gap-10 p-8 md:p-12 lg:grid-cols-2">

                <div>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur">
                        <Plane size={16}/>
                        Visa & Immigration Guide
                    </div>

                    <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-6xl">
                        Begin Your Relocation Journey
                    </h1>

                    <p className="mt-5 text-lg leading-8 text-white/90">
                        Find verified accommodation requirements, visa pathways,
                        student housing, tourist stays, business relocation and
                        family immigration support across 100+ countries.
                    </p>

                    {/* Search */}
                    <div className="mt-8 flex rounded-2xl bg-white p-2 shadow-2xl">

                        <div className="flex flex-1 items-center gap-3 px-4">
                            <Search className="text-gray-400" size={20}/>
                            <input
                                type="text"
                                placeholder="Search country, visa or city..."
                                className="w-full bg-transparent outline-none"
                            />
                        </div>

                        <button className="rounded-xl bg-[#A14B60] px-6 py-4 font-semibold text-white transition hover:bg-[#8D3D52]">
                            Search
                        </button>

                    </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 gap-4">

                    <div className="rounded-3xl bg-white/10 p-5 text-white backdrop-blur-md">
                        <h3 className="text-3xl font-bold">100+</h3>
                        <p className="mt-1 text-white/80">Countries</p>
                    </div>

                    <div className="rounded-3xl bg-white/10 p-5 text-white backdrop-blur-md">
                        <h3 className="text-3xl font-bold">5</h3>
                        <p className="mt-1 text-white/80">Visa Categories</p>
                    </div>

                    <div className="rounded-3xl bg-white/10 p-5 text-white backdrop-blur-md">
                        <h3 className="text-3xl font-bold">24/7</h3>
                        <p className="mt-1 text-white/80">Finder AI</p>
                    </div>

                    <div className="rounded-3xl bg-white/10 p-5 text-white backdrop-blur-md">
                        <h3 className="text-3xl font-bold">4.8k</h3>
                        <p className="mt-1 text-white/80">Verified Homes</p>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default VisaHero;