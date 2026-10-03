import HeroImage from "../../assets/international/hero.jpg";
import { Search } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative min-h-[500px] overflow-hidden rounded-[32px]">

            {/* Background Image */}
            <img
                src={HeroImage}
                alt="Move Abroad"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#5C1324]/90 via-[#7C2338]/65 to-black/25" />

            {/* Content */}
            <div className="relative z-10 grid h-full gap-10 p-8 md:p-12 lg:grid-cols-2 lg:items-center">

                {/* Left */}
                <div>
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md">
                        ✈ International Rental
                    </div>

                    <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
                        Move Abroad with Confidence
                    </h1>

                    <p className="mt-5 max-w-xl text-lg leading-8 text-white/90">
                        Find verified homes, executive apartments, student housing,
                        tourist stays and family rentals before you even land.
                    </p>

                    {/* Search */}
                    <div className="mt-8 flex overflow-hidden rounded-2xl bg-white shadow-2xl">
                        <div className="flex flex-1 items-center gap-3 px-5">
                            <Search size={20} className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search country, city or university..."
                                className="h-16 w-full bg-transparent text-gray-700 outline-none"
                            />
                        </div>

                        <button className="m-2 rounded-xl bg-[#A14B60] px-8 font-semibold text-white transition hover:bg-[#8D3D52]">
                            Search
                        </button>
                    </div>

                    {/* Features */}
                    <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/90">
                        <span>✓ Verified Homes</span>
                        <span>✓ Trusted Agents</span>
                        <span>✓ Global Listings</span>
                        <span>✓ 24/7 AI Support</span>
                    </div>
                </div>
                <div />
            </div>
        </section>
    );
};

export default HeroSection