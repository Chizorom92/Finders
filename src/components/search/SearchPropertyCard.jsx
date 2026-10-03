import { useState } from "react";
import {
    Heart,
    MapPin,
    BedDouble,
    Bath,
    Ruler,
} from "lucide-react";

import {
    isInWishlist,
    toggleWishlist,
} from "../property/wishlistStorage";

const SearchPropertyCard = ({ property, onClick }) => {
    const [wishlisted, setWishlisted] = useState(() =>
        isInWishlist(property.id)
    );
    return (
        <article
            onClick={onClick}
            className="group cursor-pointer overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={property.image || property.images?.[0]}
                    alt={property.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Badges */}
                <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-[#8B5A2B] px-3 py-1 text-xs font-semibold text-white">
            ✓ Verified
          </span>

                    <span className="rounded-full bg-[#CFF7E3] px-3 py-1 text-xs font-semibold text-[#0F7A4F]">
            Low Risk
          </span>
                </div>

                {/* Wishlist */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();

                        const updated = toggleWishlist(property.id);
                        setWishlisted(updated.includes(property.id));

                        window.dispatchEvent(
                            new CustomEvent("finders:wishlist-updated", {
                                detail: updated,
                            })
                        );
                    }}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow transition hover:scale-105"
                >
                    <Heart
                        size={18}
                        className={
                            wishlisted
                                ? "fill-[var(--primary)] text-[var(--primary)]"
                                : "text-[var(--primary)]"
                        }
                    />
                </button>
            </div>

            {/* Content */}
            <div className="space-y-4 p-5">
                <div>
                    <h3 className="font-serif text-2xl font-bold text-[var(--text)]">
                        {property.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-1 text-sm text-[var(--text-light)]">
                        <MapPin size={15} />
                        {property.location}
                    </div>
                </div>

                {/* Specs */}
                <div className="flex flex-wrap gap-4 text-sm text-[var(--text-light)]">
          <span className="flex items-center gap-1">
            <BedDouble size={16} />
              {property.bedrooms} Beds
          </span>

                    <span className="flex items-center gap-1">
            <Bath size={16} />
                        {property.bathrooms} Baths
          </span>

                    <span className="flex items-center gap-1">
            <Ruler size={16} />
                        {property.area}
          </span>
                </div>

                <div className="h-px bg-[var(--border)]" />

                {/* Bottom */}
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-xs text-[var(--text-light)]">Starting from</p>

                        <h2 className="text-2xl font-bold text-[var(--accent)]">
                            ₦{property.price.toLocaleString()}
                        </h2>
                    </div>

                    <button className="rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
                        View →
                    </button>
                </div>
            </div>
        </article>
    );
};

export default SearchPropertyCard;