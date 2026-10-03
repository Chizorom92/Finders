const countries = [
    {
        id: "nigeria",
        name: "Nigeria",
        currency: "₦",
        cities: ["Lagos", "Abuja", "Port Harcourt", "Enugu"],
    },
    {
        id: "canada",
        name: "Canada",
        currency: "CA$",
        cities: ["Toronto", "Vancouver", "Calgary", "Montreal"],
    },
    {
        id: "uk",
        name: "United Kingdom",
        currency: "£",
        cities: ["London", "Manchester", "Birmingham"],
    },
    {
        id: "uae",
        name: "UAE",
        currency: "AED",
        cities: ["Dubai", "Abu Dhabi"],
    },
    {
        id: "germany",
        name: "Germany",
        currency: "€",
        cities: ["Berlin", "Munich", "Frankfurt"],
    },
];

const CountrySelector = ({
                             selectedCountry,
                             setSelectedCountry,
                             selectedCity,
                             setSelectedCity,
                         }) => {
    const active = countries.find((c) => c.id === selectedCountry);

    return (
        <section className="rounded-[30px] bg-[var(--surface)] p-6 shadow-sm">
            <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    Location
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold">
                    Where is the property?
                </h2>
                <p className="mt-2 text-[var(--text-light)]">
                    Your location determines the currency and housing market.
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                {/* Country */}
                <div>
                    <label className="mb-2 block text-sm font-semibold">Country</label>

                    <select
                        value={selectedCountry}
                        onChange={(e) => {
                            const next = e.target.value;
                            setSelectedCountry(next);

                            const firstCity =
                                countries.find((c) => c.id === next)?.cities[0] || "";
                            setSelectedCity(firstCity);
                        }}
                        className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-4 outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    >
                        {countries.map((country) => (
                            <option key={country.id} value={country.id}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* City */}
                <div>
                    <label className="mb-2 block text-sm font-semibold">City</label>

                    <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-4 outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    >
                        {active?.cities.map((city) => (
                            <option key={city}>{city}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Currency Preview */}
            <div className="mt-6 rounded-2xl bg-[var(--surface-2)] p-5">
                <p className="text-sm text-[var(--text-light)]">Currency</p>

                <div className="mt-2 flex items-center justify-between">
                    <h3 className="text-3xl font-bold">{active?.currency}</h3>

                    <span className="rounded-full bg-[var(--primary)]/10 px-4 py-2 text-sm font-semibold text-[var(--primary)]">
            {active?.name}
          </span>
                </div>
            </div>
        </section>
    );
};

export default CountrySelector;