import { useState } from "react";
import { ArrowRight, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import canada from "../../assets/international/canada.jpg";
import UK from "../../assets/international/uk.jpg";
import Australia from "../../assets/international/australlia.jpg";
import NewYork from "../../assets/international/NewYork.jpg";
import Korea from "../../assets/international/korea.jpg";
import Italy from "../../assets/international/italy.jpg";

const countries = [
    {
        id: "canada",
        name: "Canada",
        image: canada,
        flag: "🇨🇦",
        cities: "Toronto • Vancouver",
        homes: "1,240 homes",

    },
    {
        id: "uk",
        name: "United Kingdom",
        image: UK,
        flag: "🇬🇧",
        cities: "London • Manchester",
        homes: "980 homes",

    },
    {
        id: "australia",
        name: "Australia",
        image: Australia,
        flag: "🇦🇺",
        cities: "Sydney • Melbourne",
        homes: "720 homes",

    },
    {
        id: "usa",
        name: "United States",
        image: NewYork,
        flag: "🇺🇸",
        cities: "New York • Houston",
        homes: "1,870 homes",

    },
    {
        id: "korea",
        name: "South Korea",
        image: Korea,
        flag: "KR",
        cities: "Seoul • Busan",
        homes: "650 homes",

    },
    {
        id: "italy",
        name: "Italy",
        image: Italy,
        flag: "IT",
        cities: "Milan • Rome",
        homes: "540 homes",

    },
];

const CountryGrid = () => {
    const [selected, setSelected] = useState(1);
    const navigate = useNavigate();

    return (
        <section className="space-y-5">
            <div className="flex items-end justify-between">
                <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                        Popular Destinations
                    </p>

                    <h2 className="mt-1 font-serif text-3xl font-bold text-[var(--text)]">
                        Choose Your Destination
                    </h2>
                </div>

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
                {countries.map((country) => (
                    <div
                        key={country.id}
                        onClick={() => navigate(`/international/${country.id}`)}
                        className="group cursor-pointer overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >
                        {/* Top Banner */}
                        <div className="relative h-40 overflow-hidden">
                            <img
                                src={country.image}
                                alt={country.name}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10" />

                            <span className="relative text-6xl drop-shadow-lg">
                {country.flag}
              </span>
                        </div>

                        {/* Content */}
                        <div className="space-y-3 p-5">
                            <div>
                                <h3 className="font-serif text-2xl font-bold text-[var(--text)]">
                                    {country.name}
                                </h3>

                                <p className="mt-1 text-sm text-[var(--text-light)]">
                                    {country.cities}
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-[var(--text-light)]">
                                <Building2 size={16} />
                                {country.homes}
                            </div>

                            <div className="pt-2">
                <span
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                        selected === country.id
                            ? "bg-[var(--primary)] text-white"
                            : "bg-[var(--surface-2)] text-[var(--text)] group-hover:bg-[var(--primary)] group-hover:text-white"
                    }`}
                >
                  Explore
                  <ArrowRight size={15} />
                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default CountryGrid;