import { useState } from "react";
import {
    Search,
    MapPin,
    Building2,
    Wallet,
    Globe,
} from "lucide-react";

const SearchCard = () => {
    const [purpose, setPurpose] = useState("buy");

    const tabs = [
        { id: "buy", label: "Buy" },
        { id: "rent", label: "Rent" },
        { id: "land", label: "Land" },
        { id: "commercial", label: "Commercial" },
    ];

    return (
        <div className="rounded-[28px] border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">

            {/* Property Purpose Tabs */}
            <div className="mb-6 flex flex-wrap gap-3">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setPurpose(tab.id)}
                        className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                            purpose === tab.id
                                ? "bg-[var(--primary)] text-white"
                                : "bg-[var(--surface-2)] text-[var(--text)] hover:bg-[#F3E7D4]"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Search Grid */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">

                {/* Location */}
                <div className="flex items-center gap-3 rounded-2xl bg-[var(--surface-2)] p-4">
                    <MapPin size={20} className="text-[var(--primary)]" />
                    <div>
                        <p className="text-xs text-[var(--text-light)]">Location</p>
                        <input
                            type="text"
                            placeholder="City or Area"
                            className="w-full bg-transparent text-sm font-medium outline-none"
                        />
                    </div>
                </div>

                {/* Property Type */}
                <div className="flex items-center gap-3 rounded-2xl bg-[var(--surface-2)] p-4">
                    <Building2 size={20} className="text-[var(--primary)]" />
                    <div>
                        <p className="text-xs text-[var(--text-light)]">
                            Property Type
                        </p>

                        <select className="bg-transparent text-sm font-medium outline-none">
                            <option>Any</option>
                            <option>Apartment</option>
                            <option>Duplex</option>
                            <option>Villa</option>
                            <option>Studio</option>
                            <option>Land</option>
                        </select>
                    </div>
                </div>

                {/* Budget */}
                <div className="flex items-center gap-3 rounded-2xl bg-[var(--surface-2)] p-4">
                    <Wallet size={20} className="text-[var(--primary)]" />
                    <div>
                        <p className="text-xs text-[var(--text-light)]">Budget</p>

                        <select className="bg-transparent text-sm font-medium outline-none">
                            <option>Any</option>
                            <option>₦5M+</option>
                            <option>₦20M+</option>
                            <option>$100K+</option>
                        </select>
                    </div>
                </div>

                {/* Country */}
                <div className="flex items-center gap-3 rounded-2xl bg-[var(--surface-2)] p-4">
                    <Globe size={20} className="text-[var(--primary)]" />
                    <div>
                        <p className="text-xs text-[var(--text-light)]">Country</p>

                        <select className="bg-transparent text-sm font-medium outline-none">
                            <option>Nigeria</option>
                            <option>Canada</option>
                            <option>United Kingdom</option>
                            <option>UAE</option>
                            <option>Australia</option>
                        </select>
                    </div>
                </div>

                {/* Search Button */}
                <button className="flex items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] text-white transition hover:scale-[1.02] hover:bg-[#681D30]">
                    <Search size={18} />
                    Search
                </button>

            </div>

            {/* Active Search Mode */}
            <div className="mt-4 text-sm text-[var(--text-light)]">
                Searching for:{" "}
                <span className="font-semibold capitalize text-[var(--primary)]">
          {purpose}
        </span>{" "}
                properties
            </div>
        </div>
    );
};

export default SearchCard;