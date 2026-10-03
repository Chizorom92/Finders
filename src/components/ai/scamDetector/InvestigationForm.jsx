import { Globe, Phone, User, MapPin, Wallet } from "lucide-react";

const methods = [
    { id: "url", label: "Property URL", icon: Globe },
    { id: "whatsapp", label: "WhatsApp", icon: Phone },
    { id: "agent", label: "Agent Name", icon: User },
    { id: "address", label: "Address", icon: MapPin },
    { id: "price", label: "Asking Price", icon: Wallet },
];

const InvestigationForm = ({
                               method,
                               setMethod,
                               query,
                               setQuery,
                               price,
                               setPrice,
                               onInvestigate,
                           }) => {
    return (
        <section className="rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    Start Investigation
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold text-[var(--text)]">
                    Investigate a Property
                </h2>

                <p className="mt-2 text-[var(--text-light)]">
                    Choose the information you have. Finder AI only needs one strong clue to begin its investigation.
                </p>
            </div>

            {/* Method Selector */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {methods.map((item) => {
                    const Icon = item.icon;
                    const active = method === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => setMethod(item.id)}
                            className={`rounded-2xl border p-4 transition-all ${
                                active
                                    ? "border-[#7C2338] bg-[#7C2338] text-white"
                                    : "border-[var(--border)] bg-[var(--surface-2)] hover:border-[#7C2338]"
                            }`}
                        >
                            <div className="flex flex-col items-center gap-2">
                                <Icon size={22} />
                                <span className="text-xs font-medium">{item.label}</span>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Dynamic Input */}
            <div className="mt-8 space-y-4">
                <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--text)]">
                        {method === "url" && "Paste Property URL"}
                        {method === "whatsapp" && "Enter WhatsApp Number"}
                        {method === "agent" && "Enter Agent Name"}
                        {method === "address" && "Enter Property Address"}
                        {method === "price" && "Enter Property Name or Description"}
                    </label>

                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={
                            method === "url"
                                ? "https://..."
                                : method === "whatsapp"
                                    ? "+234..."
                                    : method === "agent"
                                        ? "John Homes Ltd"
                                        : method === "address"
                                            ? "Lekki Phase 1..."
                                            : "3 Bedroom Apartment..."
                        }
                        className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-4 outline-none transition focus:border-[#7C2338]"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--text)]">
                        Asking Price (optional)
                    </label>

                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="₦ 45,000,000"
                        className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-4 outline-none transition focus:border-[#7C2338]"
                    />
                </div>
            </div>

            <button
                onClick={onInvestigate}
                disabled={!query}
                className="mt-8 w-full rounded-2xl bg-[#7C2338] py-4 text-lg font-semibold text-white transition hover:bg-[#8B2941] disabled:cursor-not-allowed disabled:opacity-50"
            >
                Start AI Investigation
            </button>
        </section>
    );
};

export default InvestigationForm;