import { CalendarDays, Clock3, Home } from "lucide-react";

const BookingSummary = ({
                            property,
                            selectedDay,
                            selectedTime,
                            viewingType,
                            fullName,
                            phone,
                            onConfirm,
                        }) => {
    return (
        <section className="rounded-[30px] bg-gradient-to-br from-[#7C2338] to-[#531626] p-7 text-white">
            <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                Booking Summary
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold">
                Ready to request inspection?
            </h2>

            <div className="mt-6 space-y-4 rounded-2xl bg-white/10 p-5 backdrop-blur">
                <div className="flex items-start gap-3">
                    <Home size={20} className="mt-1" />

                    <div>
                        <p className="text-xs text-white/60">Property</p>
                        <h3 className="font-semibold">{property.title}</h3>
                        <p className="text-sm text-white/70">{property.location}</p>
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                        <CalendarDays size={18} />
                        <span>27 Sept 2026</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Clock3 size={18} />
                        <span>{selectedTime}</span>
                    </div>
                </div>

                <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-xs text-white/60">Viewing</p>

                    <h4 className="mt-1 font-semibold capitalize">
                        {viewingType} Inspection
                    </h4>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                        <p className="text-xs text-white/60">Name</p>
                        <h4 className="font-medium">{fullName || "Not entered"}</h4>
                    </div>

                    <div>
                        <p className="text-xs text-white/60">Phone</p>
                        <h4 className="font-medium">{phone || "Not entered"}</h4>
                    </div>
                </div>
            </div>

            <button
                onClick={onConfirm}
                disabled={!fullName || !phone}
                className="mt-6 w-full rounded-2xl bg-[#E6C27A] py-4 text-lg font-semibold text-[#4A2E24] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
            >
                Request Inspection
            </button>

            <p className="mt-3 text-center text-xs text-white/60">
                You'll receive confirmation in your Messages within a few minutes.
            </p>
        </section>
    );
};

export default BookingSummary;