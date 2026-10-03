import {
    Building2,
    Home,
    Landmark,
    Hotel,
    Store,
} from "lucide-react";

const propertyTypes = [
    { name: "Villa", icon: Landmark, count: "124 Homes" },
    { name: "Duplex", icon: Home, count: "218 Homes" },
    { name: "Apartment", icon: Building2, count: "341 Homes" },
    { name: "Bungalow", icon: Home, count: "89 Homes" },
    { name: "Penthouse", icon: Hotel, count: "42 Homes" },
    { name: "Commercial", icon: Store, count: "96 Spaces" },
];

const PropertyTypeSection = () => {
    return (
        <section className="mt-20">
            {/* Heading */}
            <div className="mb-12 text-center">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary)]">
                    Browse Categories
                </p>

                <h2 className="font-serif text-5xl font-bold text-[var(--text)]">
                    Find Your Perfect Property
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-light)]">
                    Explore verified homes by property type across Nigeria and
                    internationally.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
                {propertyTypes.map((type) => {
                    const Icon = type.icon;

                    return (
                        <button
                            key={type.name}
                            className="group rounded-[28px] border p-7 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            style={{
                                background: "var(--surface)",
                                borderColor: "var(--border)",
                            }}
                        >
                            {/* Icon */}
                            <div
                                className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:bg-[var(--primary)]"
                                style={{ background: "var(--surface-2)" }}
                            >
                                <Icon
                                    size={30}
                                    className="text-[var(--primary)] transition-all duration-300 group-hover:text-white"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="font-serif text-2xl font-bold text-[var(--text)]">
                                {type.name}
                            </h3>

                            {/* Count */}
                            <p className="mt-2 text-base text-[var(--text-light)]">
                                {type.count}
                            </p>
                        </button>
                    );
                })}
            </div>
        </section>
    );
};

export default PropertyTypeSection;