import { CheckCircle2, Calendar, Clock, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BookingSuccess = ({
                            property,
                            selectedTime,
                            open,
                            setOpen,
                        }) => {
    const navigate = useNavigate();

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="w-full max-w-md rounded-[28px] bg-[var(--surface)] p-7 shadow-2xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle2 size={42} className="text-emerald-600" />
                </div>

                <h2 className="mt-5 text-center font-serif text-3xl font-bold">
                    Inspection Booked!
                </h2>

                <p className="mt-2 text-center text-[var(--text-light)]">
                    Your appointment has been reserved successfully.
                </p>

                <div className="mt-6 rounded-2xl bg-[var(--surface-2)] p-4">
                    <h3 className="font-bold">{property.title}</h3>

                    <div className="mt-3 space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            27 September 2026
                        </div>

                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            {selectedTime}
                        </div>

                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            {property.location}
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => navigate("/messages")}
                    className="mt-6 w-full rounded-xl bg-[#7C2338] py-3 font-semibold text-white"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default BookingSuccess;