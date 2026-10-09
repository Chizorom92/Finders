import { useState } from "react";
import {
    Clock3,
    Wallet,
    Home,
    MapPin,
    CheckCircle2,
} from "lucide-react";

const countries = {
    canada: {
        flag: "🇨🇦",
        name: "Canada",
        processing: "4–10 weeks",
        funds: "Required",
        housing: "Recommended",
        rent: "CA$1,300 – 2,500/mo",
        cities: ["Toronto", "Vancouver", "Calgary"],
    },
    uk: {
        flag: "🇬🇧",
        name: "United Kingdom",
        processing: "3–8 weeks",
        funds: "Required",
        housing: "Recommended",
        rent: "£950 – 1,900/mo",
        cities: ["London", "Manchester", "Birmingham"],
    },
    usa: {
        flag: "🇺🇸",
        name: "United States",
        processing: "3–12 weeks",
        funds: "Required",
        housing: "Recommended",
        rent: "$1,600 – 3,200/mo",
        cities: ["New York", "Chicago", "Houston"],
    },
    australia: {
        flag: "🇦🇺",
        name: "Australia",
        processing: "4–8 weeks",
        funds: "Required",
        housing: "Recommended",
        rent: "A$1,500 – 2,700/mo",
        cities: ["Sydney", "Melbourne", "Brisbane"],
    },
    italy: {
        flag: "🇮🇹",
        name: "Italy",
        processing: "2–6 weeks",
        funds: "Required",
        housing: "Optional",
        rent: "€900 – 2,000/mo",
        cities: ["Milan", "Rome", "Florence"],
    },
    korea: {
        flag: "🇰🇷",
        name: "South Korea",
        processing: "2–5 weeks",
        funds: "Required",
        housing: "Recommended",
        rent: "₩1.2M – 2.4M/mo",
        cities: ["Seoul", "Busan", "Incheon"],
    },
};

const CountryRequirements = () => {
    const [selected, setSelected] = useState("canada");

    const country = countries[selected];

    return (
        <section className="space-y-6">
            <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    COUNTRY REQUIREMENTS
                </p>

                <h2 className="mt-2 font-serif text-4xl font-bold text-[var(--text)]">
                    Choose your destination
                </h2>

                <p className="mt-3 leading-7 text-[var(--text-light)]">
                    Compare visa timelines, housing requirements and rental expectations
                    before relocating.
                </p>
            </div>

            {/* Country Buttons */}
            <div className="flex flex-wrap gap-3">
                {Object.entries(countries).map(([key, item]) => (
                    <button
                        key={key}
                        onClick={() => setSelected(key)}
                        className={`rounded-full px-5 py-3 font-medium transition ${
                            selected === key
                                ? "bg-[#7C2338] text-white"
                                : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--surface-2)]"
                        }`}
                    >
                        {item.flag} {item.name}
                    </button>
                ))}
            </div>

            {/* Dynamic Card */}
            <div className="rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                    <div className="text-4xl">{country.flag}</div>

                    <div>
                        <h3 className="text-2xl font-bold text-[var(--text)]">
                            {country.name}
                        </h3>

                        <p className="text-sm text-[var(--text-light)]">
                            Relocation & rental overview
                        </p>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-start gap-3 rounded-2xl bg-[var(--surface-2)] p-4">
                        <Clock3 className="mt-1 text-[var(--primary)]" size={20} />
                        <div>
                            <p className="text-xs text-[var(--text-light)]">
                                Processing Time
                            </p>
                            <p className="font-semibold">{country.processing}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl bg-[var(--surface-2)] p-4">
                        <Wallet className="mt-1 text-[var(--primary)]" size={20} />
                        <div>
                            <p className="text-xs text-[var(--text-light)]">
                                Proof of Funds
                            </p>
                            <p className="font-semibold">{country.funds}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl bg-[var(--surface-2)] p-4">
                        <Home className="mt-1 text-[var(--primary)]" size={20} />
                        <div>
                            <p className="text-xs text-[var(--text-light)]">
                                Housing Proof
                            </p>
                            <p className="font-semibold">{country.housing}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl bg-[var(--surface-2)] p-4">
                        <MapPin className="mt-1 text-[var(--primary)]" size={20} />
                        <div>
                            <p className="text-xs text-[var(--text-light)]">
                                Typical Rent
                            </p>
                            <p className="font-semibold">{country.rent}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/20">
                    <div className="mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                        <CheckCircle2 size={18} />
                        <span className="font-semibold">Popular relocation cities</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {country.cities.map((city) => (
                            <span
                                key={city}
                                className="rounded-full bg-white px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                            >
                {city}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CountryRequirements;