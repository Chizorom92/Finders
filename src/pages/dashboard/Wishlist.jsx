import { useMemo, useState } from "react";
import {
    Heart,
    Search,
    ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import propertyData from "../../components/property/propertyData.jsx";
import PropertyCard from "../../components/property/PropertyCard.jsx";
import { getWishlist } from "../../components/property/wishlistStorage";

export default function Wishlist() {
    const [wishlistIds, setWishlistIds] = useState(() => getWishlist());
    const [searchQuery, setSearchQuery] = useState("");

    const wishlistProperties = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        return propertyData.filter((property) => {
            const isWishlisted = wishlistIds.includes(property.id);

            const matchesSearch =
                !query ||
                property.title.toLowerCase().includes(query) ||
                property.location.toLowerCase().includes(query);

            return isWishlisted && matchesSearch;
        });
    }, [wishlistIds, searchQuery]);

    return (
        <div className="min-h-full bg-[var(--background)] px-5 py-6 md:px-8 lg:px-10">

            {/* Header */}
            <section className="mb-8">

                <p className="mb-1 text-sm font-medium tracking-wide text-[var(--primary)]">
                    MY SPACE
                </p>

                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight text-[var(--text)] md:text-3xl">
                            Wishlist
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm text-[var(--text-light)] md:text-base">
                            Keep track of properties you're interested in.
                        </p>
                    </div>

                    <Link
                        to="/search"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--primary-light)] hover:shadow-md"
                    >
                        Explore Properties
                        <ArrowRight size={17} />
                    </Link>

                </div>

            </section>

            {/* Wishlist Summary */}
            <section className="mb-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">

                <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--primary)]">
                        <Heart
                            size={22}
                            className="fill-[var(--primary)]"
                        />
                    </div>

                    <div>
                        <p className="text-sm text-[var(--text-light)]">
                            Saved to wishlist
                        </p>

                        <p className="text-2xl font-semibold text-[var(--text)]">
                            {wishlistIds.length}
                        </p>
                    </div>

                </div>

            </section>

            {/* Search */}
            <section className="mb-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm md:p-5">

                <div className="relative w-full">

                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
                    />

                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(event) =>
                            setSearchQuery(event.target.value)
                        }
                        placeholder="Search your wishlist..."
                        className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] py-3 pl-10 pr-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]"
                    />

                </div>

            </section>

            {/* Heading */}
            <section className="mb-4">

                <h2 className="text-lg font-semibold text-[var(--text)]">
                    Your Wishlist
                </h2>

                <p className="mt-1 text-sm text-[var(--text-light)]">
                    {wishlistProperties.length}{" "}
                    {wishlistProperties.length === 1
                        ? "property"
                        : "properties"}
                </p>

            </section>

            {/* Properties */}
            {wishlistProperties.length > 0 ? (

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

                    {wishlistProperties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                            initialWishlisted={true}
                        />
                    ))}

                </div>

            ) : (

                <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)] px-6 py-16 text-center">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface-2)] text-[var(--primary)]">
                        <Heart size={25} />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-[var(--text)]">
                        Your wishlist is empty
                    </h3>

                    <p className="mx-auto mt-2 max-w-md text-sm text-[var(--text-light)]">
                        Save properties you're interested in and they'll appear
                        here for easy access.
                    </p>

                    <Link
                        to="/search"
                        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--primary-light)]"
                    >
                        Find Properties
                        <ArrowRight size={16} />
                    </Link>

                </div>

            )}

        </div>
    );
}