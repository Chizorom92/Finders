import {
    ShieldCheck,
    ScanSearch,
    FileCheck,
    MapPinned,
} from "lucide-react";

const features = [
    {
        title: "AI Scam Detection",
        description:
            "Our AI identifies suspicious listings and unusual pricing before you contact an agent.",
        icon: ShieldCheck,
    },
    {
        title: "Document Scanner",
        description:
            "Instantly verify leases, title documents and ownership records for authenticity.",
        icon: ScanSearch,
    },
    {
        title: "Verified Properties",
        description:
            "Every verified listing goes through identity and property ownership confirmation.",
        icon: FileCheck,
    },
    {
        title: "Live Location Check",
        description:
            "Confirm the exact building and neighbourhood before making any payment.",
        icon: MapPinned,
    },
];

const ProtectionSection = () => {
    return (
        <section className="mt-24">
            {/* Heading */}
            <div className="mb-12 text-center">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary)]">
                    Why Finders
                </p>

                <h2 className="font-serif text-5xl font-bold text-[var(--text)]">
                    How Finders Protects You
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-lg text-[var(--text-light)]">
                    Every feature is designed to help you rent, buy and relocate with
                    confidence—without falling victim to scams.
                </p>
            </div>

            {/* Cards */}
            <div className="grid gap-6 md:grid-cols-2">
                {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                        <div
                            key={feature.title}
                            className="group rounded-[32px] border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            style={{
                                background: "var(--surface)",
                                borderColor: "var(--border)",
                            }}
                        >
                            <div
                                className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:bg-[var(--primary)]"
                                style={{ background: "var(--surface-2)" }}
                            >
                                <Icon
                                    size={30}
                                    className="text-[var(--primary)] transition-all duration-300 group-hover:text-white"
                                />
                            </div>

                            <h3 className="mb-3 font-serif text-3xl font-bold text-[var(--text)]">
                                {feature.title}
                            </h3>

                            <p className="leading-8 text-[var(--text-light)]">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ProtectionSection;