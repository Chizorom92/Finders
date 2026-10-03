import { useState } from "react";
import { MapPin } from "lucide-react";

import property1 from "../../../assets/ai/homeDNA/property1.jpg";
import property2 from "../../../assets/ai/homeDNA/property2.jpg";
import property3 from "../../../assets/ai/homeDNA/property3.jpg";

const properties = [
    {
        id: 1,
        name: "Luxury Villa",
        location: "Lekki Phase 1",
        score: 91,
        image: property1,
    },
    {
        id: 2,
        name: "Modern Terrace",
        location: "Victoria Island",
        score: 84,
        image: property2,
    },
    {
        id: 3,
        name: "Garden Apartment",
        location: "Ikoyi",
        score: 78,
        image: property3,
    },
];

const PropertySelector = () => {
    const [selected, setSelected] = useState(1);

    return (
        <section className="space-y-5">
            <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    Select Property
                </p>

                <h2 className="mt-1 font-serif text-3xl font-bold">
                    Choose a home to analyze
                </h2>
            </div>

            <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
                {properties.map((property) => (
                    <button
                        key={property.id}
                        onClick={() => setSelected(property.id)}
                        className={`group min-w-[280px] snap-start overflow-hidden rounded-[28px] border transition-all duration-500 md:min-w-[340px] ${
                            selected === property.id
                                ? "scale-[1.02] border-[var(--primary)] shadow-2xl"
                                : "border-[var(--border)] hover:border-[var(--primary)]"
                        }`}
                    >
                        <div className="relative h-52 overflow-hidden">
                            <img
                                src={property.image}
                                alt={property.name}
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                            <div className="absolute right-4 top-4 rounded-full bg-[var(--primary)] px-3 py-1 text-sm font-semibold text-white">
                                DNA {property.score}
                            </div>
                        </div>

                        <div className="bg-[var(--surface)] p-5 text-left">
                            <h3 className="font-serif text-xl font-bold">
                                {property.name}
                            </h3>

                            <div className="mt-2 flex items-center gap-2 text-sm text-[var(--text-light)]">
                                <MapPin size={15} />
                                <span>{property.location}</span>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default PropertySelector;