import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import { countries } from "../../data/countries";
import CountryListings from "../../components/International/CountryListings.jsx"
import {
    ArrowLeft,
    MapPin,
    Home,
    Building2,
    GraduationCap,
    Heart,
} from "lucide-react";

const CountryDetails = () => {
    const { countryId } = useParams();
    const navigate = useNavigate();

    const country = countries.find((c) => c.id === countryId);

    if (!country) {
        return (
            <DashboardLayout>
                <div className="flex h-[60vh] items-center justify-center">
                    <h1 className="text-3xl font-bold">Country not found</h1>
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="space-y-8 p-4 md:p-6 lg:p-8">

                {/* Back Button */}
                <button
                    onClick={() => navigate("/international-rental")}
                    className="flex items-center gap-2 text-[var(--text-light)] transition hover:text-[var(--primary)]"
                >
                    <ArrowLeft size={18} />
                    Back to International Rental
                </button>

                {/* HERO */}
                <section className="relative h-[460px] overflow-hidden rounded-[32px]">
                    <img
                        src={country.hero}
                        alt={country.name}
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />

                    <div className="relative z-10 flex h-full items-end p-8 md:p-12">
                        <div className="max-w-2xl text-white">

                            <div className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
                                {country.code}
                            </div>

                            <h1 className="font-serif text-5xl font-bold md:text-6xl">
                                Live in {country.name}
                            </h1>

                            <p className="mt-4 text-lg leading-8 text-white/90">
                                {country.description}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {country.cities.map((city) => (
                                    <span
                                        key={city}
                                        className="rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur"
                                    >
                    {city}
                  </span>
                                ))}
                            </div>

                        </div>
                    </div>
                </section>

                {/* STATS */}
                <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">

                    <div className="rounded-3xl bg-[var(--surface)] p-5 shadow-sm">
                        <p className="text-sm text-[var(--text-light)]">Verified Homes</p>
                        <h3 className="mt-2 text-3xl font-bold">{country.homes}+</h3>
                    </div>

                    <div className="rounded-3xl bg-[var(--surface)] p-5 shadow-sm">
                        <p className="text-sm text-[var(--text-light)]">Currency</p>
                        <h3 className="mt-2 text-3xl font-bold">{country.currency}</h3>
                    </div>

                    <div className="rounded-3xl bg-[var(--surface)] p-5 shadow-sm">
                        <p className="text-sm text-[var(--text-light)]">Popular Cities</p>
                        <h3 className="mt-2 text-3xl font-bold">{country.cities.length}</h3>
                    </div>

                    <div className="rounded-3xl bg-[var(--surface)] p-5 shadow-sm">
                        <p className="text-sm text-[var(--text-light)]">Safety Rating</p>
                        <h3 className="mt-2 text-3xl font-bold text-emerald-600">High</h3>
                    </div>

                </section>

                {/* GALLERY */}
                <section className="space-y-4">
                    <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                            Discover
                        </p>

                        <h2 className="mt-1 font-serif text-3xl font-bold">
                            Explore {country.name}
                        </h2>
                    </div>

                    <div className="grid gap-4 md:grid-cols-12">

                        <div className="overflow-hidden rounded-3xl md:col-span-8">
                            <img
                                src={country.gallery[0]}
                                alt=""
                                className="h-[360px] w-full object-cover transition duration-700 hover:scale-105"
                            />
                        </div>

                        <div className="grid gap-4 md:col-span-4">
                            {country.gallery.slice(1).map((image, index) => (
                                <div key={index} className="overflow-hidden rounded-3xl">
                                    <img
                                        src={image}
                                        alt=""
                                        className="h-[172px] w-full object-cover transition duration-700 hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                <CountryListings countryId={countryId} />

                {/* HOUSING TYPES */}
                <section className="space-y-4">
                    <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                            Rental Options
                        </p>

                        <h2 className="mt-1 font-serif text-3xl font-bold">
                            Find the perfect stay
                        </h2>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                        <div className="rounded-3xl bg-[var(--surface)] p-5 shadow-sm">
                            <GraduationCap className="mb-4 text-[var(--primary)]" size={28} />
                            <h3 className="font-semibold">Student Housing</h3>
                            <p className="mt-2 text-sm text-[var(--text-light)]">
                                Affordable verified residences near universities.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-[var(--surface)] p-5 shadow-sm">
                            <Building2 className="mb-4 text-[var(--primary)]" size={28} />
                            <h3 className="font-semibold">Business Stay</h3>
                            <p className="mt-2 text-sm text-[var(--text-light)]">
                                Executive apartments for professionals and remote workers.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-[var(--surface)] p-5 shadow-sm">
                            <Heart className="mb-4 text-[var(--primary)]" size={28} />
                            <h3 className="font-semibold">Family Rental</h3>
                            <p className="mt-2 text-sm text-[var(--text-light)]">
                                Spacious homes in safe residential neighbourhoods.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-[var(--surface)] p-5 shadow-sm">
                            <Home className="mb-4 text-[var(--primary)]" size={28} />
                            <h3 className="font-semibold">Tourist Apartment</h3>
                            <p className="mt-2 text-sm text-[var(--text-light)]">
                                Short-term furnished apartments for vacations and visits.
                            </p>
                        </div>

                    </div>
                </section>

                {/* FINDER AI CTA */}
                <section className="overflow-hidden rounded-[32px] bg-gradient-to-r from-[var(--primary)] to-[#A14B60] p-8 text-white">
                    <div className="max-w-2xl">
                        <p className="text-sm uppercase tracking-[0.25em] text-white/80">
                            Finder AI
                        </p>

                        <h2 className="mt-2 font-serif text-4xl font-bold">
                            Need help relocating?
                        </h2>

                        <p className="mt-4 leading-8 text-white/90">
                            Ask Finder AI about renting in {country.name}, visa housing,
                            neighbourhoods, living costs, safety, and the best city for your
                            lifestyle.
                        </p>

                        <button onClick={() => navigate("/finder-ai ")}
                            className="mt-6 rounded-2xl bg-white px-6 py-3 font-semibold text-[var(--primary)] transition hover:scale-105"
                        >
                            Ask Finder AI
                        </button>
                    </div>
                </section>

            </div>
        </DashboardLayout>
    );
};

export default CountryDetails;