import { SlidersHorizontal, MapPin } from "lucide-react";

const types = ["Any", "Apartment", "House", "Villa", "Studio", "Duplex", "Penthouse"];
const beds = ["Any", "1", "2", "3", "4", "5+"];

const FilterSidebar = ({
                           location,
                           setLocation,
                           propertyType,
                           setPropertyType,
                           bedrooms,
                           setBedrooms,
                           maxPrice,
                           setMaxPrice,
                       }) => {
    return (
        <div className="sticky top-24 rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6">
            {/* Header */}
            <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-[var(--surface-2)] p-3">
                    <SlidersHorizontal className="text-[var(--primary)]" size={22} />
                </div>

                <div>
                    <h2 className="font-serif text-3xl font-bold">Filters</h2>
                    <p className="text-sm text-[var(--text-light)]">
                        Refine your search
                    </p>
                </div>
            </div>

            {/* LOCATION */}
            <div className="mb-6">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-light)]">
                    Location
                </label>

                <div className="flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-3 py-3">
                    <MapPin size={18} className="text-[var(--primary)]" />

                    <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="City or Area"
                        className="w-full bg-transparent outline-none"
                    />
                </div>
            </div>

            {/* PRICE */}
            <div className="mb-6">
                <div className="mb-2 flex items-center justify-between">
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-light)]">
                        Max Budget
                    </label>

                    <span className="font-semibold text-[var(--primary)]">
  ₦{(maxPrice ?? 1000000000).toLocaleString()}
</span>
                </div>

                <input
                    type="range"
                    min="10000000"
                    max="1000000000"
                    step="10000000"
                    value={maxPrice ?? 1000000000}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-[#8B2337]"
                />
            </div>

            {/* PROPERTY TYPE */}
            <div className="mb-6">
                <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-light)]">
                    Property Type
                </label>

                <div className="flex flex-wrap gap-2">
                    {types.map((type) => (
                        <button
                            key={type}
                            onClick={() => setPropertyType(type)}
                            className={`rounded-full border px-4 py-2 text-sm transition ${
                                propertyType === type
                                    ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                                    : "border-[var(--border)] hover:bg-[var(--surface-2)]"
                            }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            {/* BEDROOMS */}
            <div>
                <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-light)]">
                    Bedrooms
                </label>

                <div className="flex flex-wrap gap-2">
                    {beds.map((bed) => (
                        <button
                            key={bed}
                            onClick={() => setBedrooms(bed)}
                            className={`h-11 w-11 rounded-xl border transition ${
                                bedrooms === bed
                                    ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                                    : "border-[var(--border)] hover:bg-[var(--surface-2)]"
                            }`}
                        >
                            {bed}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;