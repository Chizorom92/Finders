const days = [
    { day: "26", month: "SEP" },
    { day: "27", month: "SEP" },
    { day: "28", month: "SEP" },
    { day: "29", month: "SEP" },
    { day: "30", month: "SEP" },
];

const slots = [
    "9:00 AM",
    "11:30 AM",
    "1:00 PM",
    "3:30 PM",
];

const DateTimeSelector = ({
                              selectedDay,
                              setSelectedDay,
                              selectedTime,
                              setSelectedTime,
                          }) => {
    return (
        <section className="rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    Inspection Schedule
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold text-[var(--text)]">
                    Choose Date & Time
                </h2>

                <p className="mt-2 text-[var(--text-light)]">
                    Select your preferred inspection day. The verified agent will confirm
                    availability.
                </p>
            </div>

            {/* Days */}
            <div className="grid grid-cols-5 gap-3">
                {days.map((item) => {
                    const active = selectedDay === item.day;

                    return (
                        <button
                            key={item.day}
                            onClick={() => setSelectedDay(item.day)}
                            className={`rounded-2xl border p-3 transition-all ${
                                active
                                    ? "border-[#7C2338] bg-[#7C2338] text-white"
                                    : "border-[var(--border)] bg-[var(--surface-2)] hover:border-[#7C2338]"
                            }`}
                        >
                            <p className="text-[10px] tracking-widest">{item.month}</p>

                            <h3 className="mt-1 text-2xl font-bold">{item.day}</h3>
                        </button>
                    );
                })}
            </div>

            {/* Time */}
            <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold text-[var(--text)]">
                    Available Time
                </h3>

                <div className="grid gap-3 sm:grid-cols-2">
                    {slots.map((time) => {
                        const active = selectedTime === time;

                        return (
                            <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`rounded-2xl border p-4 font-medium transition-all ${
                                    active
                                        ? "border-[#7C2338] bg-[#7C2338] text-white"
                                        : "border-[var(--border)] bg-[var(--surface-2)] hover:border-[#7C2338]"
                                }`}
                            >
                                {time}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Summary */}
            <div className="mt-8 rounded-2xl bg-[#7C2338] p-4 text-white">
                <p className="text-xs uppercase tracking-[0.2em] opacity-80">
                    Selected Appointment
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                    Sep {selectedDay} • {selectedTime}
                </h3>

                <p className="mt-2 text-sm text-white/80">
                    Your request will be sent instantly to the verified agent.
                </p>
            </div>
        </section>
    );
};

export default DateTimeSelector;