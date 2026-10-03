import {
    Heart,
    MapPin,
    BedDouble,
    Bath,
    Ruler,
    BadgeCheck,
} from "lucide-react";
import { useState } from "react";
import { isInWishlist, toggleWishlist } from "./wishlistStorage";

export default function PropertyCard({
                                         property,
                                         initialWishlisted = false,
                                         onClick,
                                         showStatus = false,
                                         showStats = false,
                                     }) {
    const [wishlisted, setWishlisted] = useState(() => {
        if (property?.id) return isInWishlist(property.id);
        return initialWishlisted;
    });

    if (!property) return null;

    const statusStyles = {
        verified: "bg-[var(--surface-2)] text-[var(--primary)]",
        pending: "bg-amber-100 text-amber-700",
        rejected: "bg-red-100 text-red-700",
    };

    const handleWishlistToggle = (e) => {
        e.stopPropagation();

        const updated = toggleWishlist(property.id);
        setWishlisted(updated.includes(property.id));

        window.dispatchEvent(
            new CustomEvent("finders:wishlist-updated", {
                detail: updated,
            })
        );
    };

    return (
        <article
            onClick={onClick}
            className="group w-[220px] min-w-[220px] md:w-[250px] md:min-w-[250px] lg:w-[270px] lg:min-w-[270px]
      cursor-pointer overflow-hidden rounded-[28px] border shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
            }}
        >
            {/* Image */}
            <div className="relative h-[280px] overflow-hidden">
                <img
                    src={property.images?.[0] || property.image}
                    alt={property.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Verification / Status */}
                <div className="absolute left-4 top-4">
                    {property.verified ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[var(--primary)] shadow-sm">
              <BadgeCheck size={14} />
              Verified
            </span>
                    ) : showStatus ? (
                        <span
                            className={`rounded-full px-3 py-1.5 text-xs font-semibold capitalize shadow-sm ${
                                statusStyles[property.status] ||
                                "bg-white text-[var(--text)]"
                            }`}
                        >
              {property.status}
            </span>
                    ) : null}
                </div>

                {/* Wishlist */}
                <button
                    type="button"
                    onClick={handleWishlistToggle}
                    aria-label={
                        wishlisted ? "Remove from wishlist" : "Add to wishlist"
                    }
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[var(--primary)] shadow-sm backdrop-blur-sm transition hover:scale-105"
                >
                    <Heart
                        size={19}
                        className={
                            wishlisted
                                ? "fill-[var(--primary)] text-[var(--primary)]"
                                : ""
                        }
                    />
                </button>
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Title */}
                <h3 className="font-semibold text-[var(--text)] truncate">
                    {property.title}
                </h3>

                {/* Location */}
                <div className="mt-1 flex items-center gap-1 text-sm text-[var(--text-light)]">
                    <MapPin size={14} />
                    <span className="truncate">{property.location}</span>
                </div>

                {/* Price */}
                <div className="mt-4">
          <span className="text-lg font-bold text-[var(--primary)]">
            {property.priceLabel}
          </span>

                    {property.period && (
                        <span className="ml-1 text-xs text-[var(--text-light)]">
              / {property.period}
            </span>
                    )}
                </div>

                {/* Features */}
                <div className="mt-4 flex flex-wrap gap-3 border-t border-[var(--border)] pt-4 text-xs text-[var(--text-light)]">
          <span className="flex items-center gap-1">
            <BedDouble size={14} />
              {property.bedrooms} Beds
          </span>

                    <span className="flex items-center gap-1">
            <Bath size={14} />
                        {property.bathrooms} Baths
          </span>

                    <span className="flex items-center gap-1">
            <Ruler size={14} />
                        {property.area}
          </span>
                </div>

                {/* Agent */}
                {property.agent && (
                    <div className="mt-4 flex items-center justify-between">
                        <div>
                            <p className="text-[10px] uppercase tracking-wider text-[var(--text-light)]">
                                Listed by
                            </p>
                            <p className="mt-0.5 text-xs font-medium text-[var(--text)]">
                                {property.agent}
                            </p>
                        </div>

                        {property.verified && (
                            <span className="text-xs font-medium text-[var(--primary-light)]">
                Verified agent
              </span>
                        )}
                    </div>
                )}

                {/* Dashboard stats (Fosh's feature) */}
                {showStats && (
                    <div className="mt-4 flex items-center gap-4 border-t border-[var(--border)] pt-4 text-xs text-[var(--text-light)]">
                        <span>👁 {property.views} views</span>
                        <span>💬 {property.inquiries} inquiries</span>
                    </div>
                )}

                {/* View button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick?.();
                    }}
                    className="mt-4 w-full rounded-xl bg-[var(--primary)] py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                    View Property
                </button>
            </div>
        </article>
    );
}