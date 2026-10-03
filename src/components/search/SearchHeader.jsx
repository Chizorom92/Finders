import { Search } from "lucide-react";

const SearchHeader = ({ searchQuery, setSearchQuery }) => {
    return (
        <section className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6">
            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[var(--surface-2)] p-3">
                    <Search className="text-[var(--primary)]" size={24} />
                </div>

                <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                        Finders Search
                    </p>

                    <h1 className="mt-1 font-serif text-2xl font-bold text-[var(--text)] md:text-3xl">
                        Search Verified Properties
                    </h1>
                </div>
            </div>

            {/* Description */}
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--text-light)] md:text-base">
                Explore verified homes across Nigeria and international locations using
                smart filters, neighbourhood intelligence, and AI scam protection.
            </p>

            {/* Smart Search Bar */}
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-4 shadow-sm">
                <Search className="text-[var(--primary)]" size={20} />

                <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    placeholder="Search by property, city or neighbourhood..."
                    className="w-full bg-transparent text-[var(--text)] outline-none placeholder:text-[var(--text-light)]"
                />
            </div>
        </section>
    );
};

export default SearchHeader;