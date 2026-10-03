import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { featuredProperties } from "../../data/properties";
import PropertyCard from "../property/PropertyCard";

const FeaturedOpportunities = () => {
    const scrollRef = useRef(null);
    const navigate = useNavigate();

    const scroll = (direction) => {
        const container = scrollRef.current;
        if (!container) return;

        const amount = 360;

        container.scrollBy({
            left: direction === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    return (
        <section className="mt-16">
            {/* Header */}
            <div className="mb-8 flex items-end justify-between">
                <div>
                    <p className="mb-2 text-sm font-bold uppercase tracking-[0.28em] text-[#8B2337]">
                        Featured Opportunities
                    </p>

                    <h2 className="font-serif text-5xl font-bold text-[#1F1F1F] dark:text-[#E8D8C8] ">
                        Verified Premium Homes
                    </h2>
                </div>

                {/* Desktop arrows */}
                <div className="hidden gap-3 md:flex">
                    <button
                        onClick={() => scroll("left")}
                        className="rounded-full border border-[#E7DDD2] bg-white p-3 transition hover:bg-[#8B2337] hover:text-white"
                    >
                        <ChevronLeft size={22} />
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="rounded-full border border-[#E7DDD2] bg-white p-3 transition hover:bg-[#8B2337] hover:text-white"
                    >
                        <ChevronRight size={22} />
                    </button>
                </div>
            </div>

            {/* Carousel */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory no-scrollbar"
            >
                {featuredProperties.map((property) => (
                    <div key={property.id} className="snap-start">
                        <PropertyCard
                            property={property}
                            onClick={() => navigate(`/property/${property.id}`)}
                        />
                    </div>
                ))}
            </div>

            {/* Mobile arrows */}
            <div className="mt-6 flex justify-center gap-4 md:hidden">
                <button
                    onClick={() => scroll("left")}
                    className="rounded-full border border-[#E7DDD2] bg-white p-3"
                >
                    <ChevronLeft size={20} />
                </button>

                <button
                    onClick={() => scroll("right")}
                    className="rounded-full border border-[#E7DDD2] bg-white p-3"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </section>
    );
};

export default FeaturedOpportunities;