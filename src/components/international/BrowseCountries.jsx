import { useState, useMemo } from "react";
import { Search, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Tokyo from "../../assets/international/Tokyo.jpg";
import Paris from "../../assets/international/paris.jpg";
import Dubai from "../../assets/international/dubai.jpg";
import Berlin from "../../assets/international/berlin.jpg";
import Spain from "../../assets/international/spain.jpg";
import Capetown from "../../assets/international/capetown.jpg";
import Switzerland from "../../assets/international/switzerland.jpg";
import Singapore from "../../assets/international/singapore.jpg";

const featuredCountries = [
    {
        id: "japan",
        name: "Japan",
        continent: "Asia",
        image: Tokyo,
        cities: "Tokyo • Osaka",
    },
    {
        id: "france",
        name: "France",
        continent: "Europe",
        image: Paris,
        cities: "Paris • Lyon",
    },
    {
        id: "uae",
        name: "UAE",
        continent: "Middle East",
        image: Dubai,
        cities: "Dubai • Abu Dhabi",
    },
    {
        id: "germany",
        name: "Germany",
        continent: "Europe",
        image: Berlin,
        cities: "Berlin • Munich",
    },
    {
        id: "spain",
        name: "Spain",
        continent: "Europe",
        image: Spain,
        cities: "Barcelona • Madrid",
    },
    {
        id: "south-africa",
        name: "South Africa",
        continent: "Africa",
        image: Capetown,
        cities: "Cape Town • Johannesburg",
    },
    {
        id: "switzerland",
        name: "Switzerland",
        continent: "Europe",
        image: Switzerland,
        cities: "Zurich • Geneva",
    },
    {
        id: "singapore",
        name: "Singapore",
        continent: "Asia",
        image: Singapore,
        cities: "Marina Bay • Orchard",
    },
];

const allCountries = [
    "Argentina","Australia","Austria","Belgium","Brazil","Canada",
    "China","Denmark","Finland","France","Germany","Ghana",
    "India","Ireland","Italy","Japan","Kenya","Malaysia",
    "Mexico","Netherlands","New Zealand","Nigeria","Norway",
    "Portugal","Qatar","Singapore","South Africa","South Korea",
    "Spain","Sweden","Switzerland","UAE","United Kingdom",
    "United States"
];

const BrowseCountries = () => {
    const navigate = useNavigate();

    const [query, setQuery] = useState("");
    const [continent, setContinent] = useState("All");
    const [showAll, setShowAll] = useState(false);

    const filteredFeatured = useMemo(() => {
        return featuredCountries.filter((country) => {
            const matchesSearch = country.name
                .toLowerCase()
                .includes(query.toLowerCase());

            const matchesContinent =
                continent === "All" || country.continent === continent;

            return matchesSearch && matchesContinent;
        });
    }, [query, continent]);

    const filteredCountries = useMemo(() => {
        return allCountries.filter((country) =>
            country.toLowerCase().includes(query.toLowerCase())
        );
    }, [query]);

    const goToCountry = (id) => navigate(`/international/${id}`);

    return (
        <section className="space-y-7">

            <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    Global Search
                </p>

                <h2 className="mt-2 font-serif text-4xl font-bold">
                    Browse 100+ Countries
                </h2>

                <p className="mt-2 text-[var(--text-light)]">
                    Discover verified homes across Europe, Asia, North America,
                    Africa and the Middle East.
                </p>
            </div>

            {/* Search */}
            <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 shadow-sm">
                <Search className="text-[var(--primary)]" size={20} />

                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search Japan, France, UAE..."
                    className="w-full bg-transparent outline-none"
                />
            </div>

            {/* Continent Filters */}
            <div className="flex gap-3 overflow-x-auto pb-1">
                {["All","Europe","Asia","Africa","Middle East"].map((item) => (
                    <button
                        key={item}
                        onClick={() => setContinent(item)}
                        className={`rounded-full px-4 py-2 text-sm whitespace-nowrap transition ${
                            continent === item
                                ? "bg-[var(--primary)] text-white"
                                : "bg-[var(--surface)] text-[var(--text)] border border-[var(--border)]"
                        }`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Featured Image Cards */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {filteredFeatured.map((country) => (
                    <div
                        key={country.id}
                        onClick={() => goToCountry(country.id)}
                        className="group cursor-pointer overflow-hidden rounded-3xl bg-[var(--surface)] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={country.image}
                                alt={country.name}
                                className="h-52 w-full object-cover transition duration-700 group-hover:scale-110"
                            />
                        </div>

                        <div className="space-y-2 p-4">
                            <h3 className="text-xl font-bold">{country.name}</h3>

                            <p className="text-sm text-[var(--text-light)]">
                                {country.cities}
                            </p>

                            <div className="flex items-center gap-2 pt-2 font-medium text-[var(--primary)]">
                                Explore
                                <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Countries */}
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h3 className="text-2xl font-bold">
                            100+ Country Directory
                        </h3>

                        <p className="mt-1 text-[var(--text-light)]">
                            Browse every available relocation destination.
                        </p>
                    </div>

                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="rounded-2xl bg-[var(--primary)] px-5 py-3 font-medium text-white transition hover:opacity-90"
                    >
                        {showAll ? "Show Less" : "View All Countries"}
                    </button>
                </div>

                {showAll && (
                    <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                        {filteredCountries.map((country) => (
                            <button
                                key={country}
                                className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4 text-left transition hover:border-[var(--primary)] hover:shadow-md"
                            >
                                <p className="font-semibold">{country}</p>

                                <p className="mt-1 text-xs text-[var(--text-light)]">
                                    Explore rentals
                                </p>
                            </button>
                        ))}
                    </div>
                )}
            </div>

        </section>
    );
};

export default BrowseCountries;