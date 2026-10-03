import { Home, Video } from "lucide-react";

const ViewingType = ({ viewingType, setViewingType }) => {
    const Card = ({ type, title, desc, Icon }) => {
        const active = viewingType === type;

        return (
            <button
                onClick={() => setViewingType(type)}
                className={`rounded-[24px] border p-6 text-left transition-all duration-300 ${
                    active
                        ? "border-[#7C2338] bg-[#7C2338] text-white shadow-xl scale-[1.02]"
                        : "border-[var(--border)] bg-[var(--surface)] hover:border-[#7C2338]"
                }`}
            >
                <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                        active ? "bg-white/15" : "bg-[#F8E7EB]"
                    }`}
                >
                    <Icon size={28} className={active ? "text-white" : "text-[#7C2338]"} />
                </div>

                <h3 className="mt-5 text-xl font-bold">{title}</h3>

                <p
                    className={`mt-2 leading-6 ${
                        active ? "text-white/80" : "text-[var(--text-light)]"
                    }`}
                >
                    {desc}
                </p>

                {active && (
                    <div className="mt-5 inline-flex rounded-full bg-[#E6C27A] px-3 py-1 text-xs font-semibold text-[#4A2E24]">
                        Selected
                    </div>
                )}
            </button>
        );
    };

    return (
        <section className="rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    Viewing Type
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold text-[var(--text)]">
                    How would you like to inspect?
                </h2>

                <p className="mt-2 text-[var(--text-light)]">
                    Choose between visiting the property in person or scheduling a live
                    virtual walkthrough.
                </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
                <Card
                    type="physical"
                    title="Physical Inspection"
                    desc="Visit the property with a verified Finders agent."
                    Icon={Home}
                />

                <Card
                    type="virtual"
                    title="Virtual Tour"
                    desc="A live video walkthrough if you're outside the city."
                    Icon={Video}
                />
            </div>
        </section>
    );
};

export default ViewingType;