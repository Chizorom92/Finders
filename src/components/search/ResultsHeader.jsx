import { SlidersHorizontal } from "lucide-react";

const ResultsHeader = ({
                           count,
                           total,
                           sortBy,
                           setSortBy,
                           onOpenFilters,
                           onClear,
                       }) => {
    return (
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
                <h2 className="font-serif text-3xl font-bold text-[var(--text)]">
                    Showing {count} of {total} homes
                </h2>

                <p className="mt-1 text-[var(--text-light)]">
                    Verified homes matching your filters
                </p>
            </div>

            <div className="flex items-center gap-3">
                {/* Mobile Filter Button */}
                <button
                    onClick={onOpenFilters}
                    className="flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 lg:hidden"
                >
                    <SlidersHorizontal size={18} />
                    Filters
                </button>

                {/* Sort */}
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 outline-none"
                >
                    <option value="recommended">Recommended</option>
                    <option value="low">Lowest Price</option>
                    <option value="high">Highest Price</option>
                </select>

                <button
                    onClick={onClear}
                    className="rounded-2xl border border-[var(--border)] px-4 py-3 text-sm font-medium transition hover:bg-[var(--surface-2)]"
                >
                    Clear
                </button>
            </div>
        </div>
    );
};

export default ResultsHeader;