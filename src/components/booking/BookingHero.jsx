import { ShieldCheck, MapPin, BedDouble, Bath, Square } from "lucide-react";

const BookingHero = ({ property }) => {
    return (
        <section className="rounded-[32px] overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
            <div className="grid lg:grid-cols-2">
                {/* Property Image */}
                <div className="relative h-72 lg:h-full">
                    <img
                        src={property.images[0]}
                        alt={property.title}
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute bottom-5 left-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white">
              <ShieldCheck size={14} />
              Verified Property
            </span>
                    </div>
                </div>

                {/* Details */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--primary)]">
                        Book Inspection
                    </p>

                    <h1 className="mt-3 font-serif text-4xl font-bold text-[var(--text)]">
                        {property.title}
                    </h1>

                    <div className="mt-3 flex items-center gap-2 text-[var(--text-light)]">
                        <MapPin size={18} />
                        {property.location}
                    </div>

                    <h2 className="mt-6 text-4xl font-bold text-[var(--primary)]">
                        ₦{Number(property.price).toLocaleString()}
                    </h2>

                    <div className="mt-6 flex flex-wrap gap-5 text-[var(--text-light)]">
                        <div className="flex items-center gap-2">
                            <BedDouble size={18} />
                            {property.beds} Beds
                        </div>

                        <div className="flex items-center gap-2">
                            <Bath size={18} />
                            {property.baths} Baths
                        </div>

                        <div className="flex items-center gap-2">
                            <Square size={18} />
                            {property.area}
                        </div>
                    </div>

                    <p className="mt-6 leading-7 text-[var(--text-light)]">
                        Schedule a private viewing with a verified Finders agent. Your request
                        is confirmed only after the agent accepts your preferred time.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BookingHero;