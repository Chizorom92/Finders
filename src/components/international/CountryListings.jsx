import internationalListings from "../../data/internationalListings";
import { BedDouble, Bath, ShieldCheck, Heart } from "lucide-react";

const CountryListings = ({ countryId }) => {
    const listings = internationalListings[countryId] || [];

    return (
        <section className="mt-14">
            <div className="mb-7 flex items-end justify-between">
                <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-[#A14B60]">
                        VERIFIED LISTINGS
                    </p>

                    <h2 className="mt-2 font-serif text-4xl font-bold text-[var(--text)]">
                        Homes Available Now
                    </h2>
                </div>

                <button className="rounded-full border border-[var(--border)] px-5 py-2 text-sm font-medium hover:bg-[var(--surface-2)]">
                    View All
                </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                {listings.map((home) => (
                    <div
                        key={home.id}
                        className="group overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={home.image}
                                alt={home.title}
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                            />

                            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#7C2338] backdrop-blur">
                                <ShieldCheck size={14} />
                                Verified
                            </div>

                            <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 backdrop-blur hover:bg-white">
                                <Heart size={18} className="text-[#7C2338]" />
                            </button>
                        </div>

                        <div className="space-y-4 p-5">
                            <div>
                                <h3 className="text-xl font-bold text-[var(--text)]">
                                    {home.title}
                                </h3>

                                <p className="mt-1 text-sm text-[var(--text-light)]">
                                    {home.city}
                                </p>
                            </div>

                            <div className="flex items-center gap-5 text-sm text-[var(--text-light)]">
                                <div className="flex items-center gap-2">
                                    <BedDouble size={16} />
                                    {home.beds} Beds
                                </div>

                                <div className="flex items-center gap-2">
                                    <Bath size={16} />
                                    {home.baths} Baths
                                </div>
                            </div>

                            <div className="flex items-center justify-between border-t border-[var(--border)] pt-4">
                                <div>
                                    <p className="text-xs text-[var(--text-light)]">
                                        Starting from
                                    </p>

                                    <p className="text-2xl font-bold text-[#7C2338]">
                                        {home.price}
                                    </p>
                                </div>

                                <button className="rounded-xl bg-[#A14B60] px-5 py-3 font-medium text-white transition hover:bg-[#8D3D52]">
                                    View Home
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CountryListings;