import { CarFront, Bus, Footprints, MapPin } from "lucide-react";
import { Navigation as NavigationIcon } from "lucide-react";
const TravelPreview = ({ property }) => {
    return (
        <section className="rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    Travel Preview
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold text-[var(--text)]">
                    Plan your journey
                </h2>

                <p className="mt-2 text-[var(--text-light)]">
                    Estimate how long it will take to reach your inspection before leaving.
                </p>
            </div>

            {/* Route Card */}
            <div className="rounded-2xl bg-[var(--surface-2)] p-5">
                <div className="flex items-start gap-3">
                    <div className="mt-1 h-3 w-3 rounded-full bg-[#7C2338]" />

                    <div className="flex-1">
                        <p className="text-xs uppercase tracking-wider text-[var(--text-light)]">
                            From
                        </p>
                        <h3 className="font-semibold text-[var(--text)]">
                            Your Current Location
                        </h3>
                    </div>
                </div>

                <div className="ml-1 mt-1 h-8 border-l-2 border-dashed border-[#7C2338]/30" />

                <div className="flex items-start gap-3">
                    <div className="mt-1 h-3 w-3 rounded-full bg-emerald-500" />

                    <div className="flex-1">
                        <p className="text-xs uppercase tracking-wider text-[var(--text-light)]">
                            Destination
                        </p>

                        <h3 className="font-semibold text-[var(--text)]">
                            {property.title}
                        </h3>

                        <div className="mt-1 flex items-center gap-1 text-sm text-[var(--text-light)]">
                            <MapPin size={15} />
                            {property.location}
                        </div>
                    </div>
                </div>
            </div>


            {/* Transport Options */}
            <div className="mt-6 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl bg-[var(--surface-2)] p-4 text-center">
                    <CarFront className="mx-auto text-[#7C2338]" size={26} />
                    <p className="mt-2 text-sm text-[var(--text-light)]">Drive</p>
                    <h3 className="mt-1 text-2xl font-bold text-[var(--text)]">
                        12 min
                    </h3>
                </div>

                <div className="rounded-2xl bg-[var(--surface-2)] p-4 text-center">
                    <Bus className="mx-auto text-[#7C2338]" size={26} />
                    <p className="mt-2 text-sm text-[var(--text-light)]">Bus</p>
                    <h3 className="mt-1 text-2xl font-bold text-[var(--text)]">
                        20 min
                    </h3>
                </div>

                <div className="rounded-2xl bg-[var(--surface-2)] p-4 text-center">
                    <Footprints className="mx-auto text-[#7C2338]" size={26} />
                    <p className="mt-2 text-sm text-[var(--text-light)]">Walk</p>
                    <h3 className="mt-1 text-2xl font-bold text-[var(--text)]">
                        38 min
                    </h3>
                </div>
            </div>

            {/* Arrival Suggestion */}
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-[#7C2338] p-4 text-white">
                <NavigationIcon size={22} />

                <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                        Suggested Departure
                    </p>

                    <h3 className="font-semibold">
                        Leave at 11:18 AM • Arrive by 11:30 AM
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default TravelPreview;