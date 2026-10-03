import {
    Search,
    ShieldCheck,
    FileText,
    Globe,
} from "lucide-react";

const actions = [
    {
        title: "Analyze Listing",
        subtitle: "Check if a property looks suspicious",
        icon: Search,
        prompt:
            "Analyze this property listing and tell me if it has scam warning signs.",
    },
    {
        title: "Check Agent",
        subtitle: "Verify a landlord or real estate agent",
        icon: ShieldCheck,
        prompt:
            "Help me verify whether this real estate agent is trustworthy.",
    },
    {
        title: "Scan Document",
        subtitle: "Explain tenancy agreements and contracts",
        icon: FileText,
        prompt:
            "Explain this tenancy agreement in simple English.",
    },
    {
        title: "Compare Countries",
        subtitle: "Compare rent, safety and living costs",
        icon: Globe,
        prompt:
            "Compare Canada, UK and Australia for someone relocating.",
    },
];

const QuickActions = ({ onSelect }) => {
    return (
        <section className="space-y-5">
            <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    Quick Actions
                </p>

                <h2 className="mt-1 font-serif text-3xl font-bold">
                    What do you need help with?
                </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                        <button
                            key={action.title}
                            onClick={() => onSelect(action.prompt)}
                            className="group rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 text-left transition-all hover:-translate-y-1 hover:border-[#A14B60] hover:shadow-xl"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A14B60]/10 text-[#A14B60] transition group-hover:bg-[#A14B60] group-hover:text-white">
                                <Icon size={24} />
                            </div>

                            <h3 className="text-lg font-semibold">
                                {action.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-[var(--text-light)]">
                                {action.subtitle}
                            </p>
                        </button>
                    );
                })}
            </div>
        </section>
    );
};

export default QuickActions;