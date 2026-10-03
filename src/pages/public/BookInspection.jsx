import { useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import BookingHero from "../../components/booking/BookingHero";
import DateTimeSelector from "../../components/booking/DateTimeSelector.jsx"
import ViewingType from "../../components/booking/ViewingType.jsx";
import TravelPreview from "../../components/booking/TravelPreview.jsx";
import InteractiveMap from "../../components/map/InteractiveMap.jsx";
import { Navigation as NavigationIcon } from "lucide-react";
import ContactCard from "../../components/booking/ContactCard.jsx";
import BookingSummary from "../../components/booking/BookingSummary.jsx";
import BookingSuccess from "../../components/booking/BookingSuccess.jsx";


import { featuredProperties } from "../../data/properties";

const BookInspection = () => {
    const { id } = useParams();

    const property =
        featuredProperties.find((item) => String(item.id) === id) ||
        featuredProperties[0];

    const [selectedDay, setSelectedDay] = useState("27");
    const [selectedTime, setSelectedTime] = useState("11:30 AM");
    const [viewingType, setViewingType] = useState("physical");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [note, setNote] = useState("");
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [bookingComplete, setBookingComplete] = useState(false);

    const handleBooking = () => {
        setBookingSuccess(true);
    };

    return (
        <DashboardLayout>
            <div className="space-y-8 p-4 md:p-6 lg:p-8">
                <BookingHero property={property} />

                <DateTimeSelector
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                    selectedTime={selectedTime}
                    setSelectedTime={setSelectedTime}
                />

                <ViewingType
                    viewingType={viewingType}
                    setViewingType={setViewingType}
                />


                <section className="rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-6">
                    <div className="mb-5">
                        <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                            Property Location
                        </p>

                        <h2 className="mt-2 font-serif text-3xl font-bold">
                            Navigate to the inspection
                        </h2>
                    </div>

                    <div className="overflow-hidden rounded-3xl">
                        <InteractiveMap
                            properties={[property]}
                            selectedProperty={property}
                            setSelectedProperty={() => {}}
                        />
                    </div>

                    {/* BUTTON */}
                    <button
                        onClick={() =>
                            window.open(
                                `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                    property.location
                                )}`,
                                "_blank"
                            )
                        }
                        className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#7C2338] px-5 py-4 font-semibold text-white transition hover:bg-[#8B2941]"
                    >
                        <NavigationIcon size={20} />
                        Open in Maps
                    </button>
                </section>

                <ContactCard
                    fullName={fullName}
                    setFullName={setFullName}
                    phone={phone}
                    setPhone={setPhone}
                    note={note}
                    setNote={setNote}
                />

                <BookingSummary
                    property={property}
                    selectedDay={selectedDay}
                    selectedTime={selectedTime}
                    viewingType={viewingType}
                    fullName={fullName}
                    phone={phone}
                    onConfirm={handleBooking}
                />

                <BookingSuccess
                    open={bookingComplete}
                    setOpen={setBookingComplete}
                    property={property}
                    selectedTime={selectedTime}
                />

            </div>

            {bookingSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div className="w-[92%] max-w-md rounded-[32px] bg-[var(--surface)] p-8 text-center">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                            <div className="text-4xl">✓</div>
                        </div>

                        <h2 className="mt-6 font-serif text-3xl font-bold text-[var(--text)]">
                            Inspection Requested
                        </h2>

                        <p className="mt-3 text-[var(--text-light)]">
                            Your request has been sent to the verified Finders agent. You'll receive
                            a confirmation message shortly.
                        </p>

                        <div className="mt-6 rounded-2xl bg-[var(--surface-2)] p-4 text-left">
                            <p className="text-xs uppercase tracking-wider text-[var(--text-light)]">
                                Appointment
                            </p>

                            <h3 className="mt-1 font-semibold">
                                27 Sept • {selectedTime}
                            </h3>

                            <p className="text-sm text-[var(--text-light)]">
                                {property.title}
                            </p>
                        </div>

                        <button
                            onClick={() => setBookingSuccess(false)}
                            className="mt-6 w-full rounded-2xl bg-[#7C2338] py-3 font-semibold text-white"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}
        </DashboardLayout>
    );
};

export default BookInspection;