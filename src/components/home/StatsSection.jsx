import {
    House,
    BadgeCheck,
    ShieldCheck,
    MapPinned,
} from "lucide-react";

import Counter from "../ui/Counter";

const stats = [
    {
        icon: House,
        end: 12000,
        suffix: "+",
        label: "Verified Homes",
    },
    {
        icon: BadgeCheck,
        end: 3500,
        suffix: "+",
        label: "Trusted Agents",
    },
    {
        icon: ShieldCheck,
        end: 98,
        suffix: "%",
        label: "Scam Detection",
    },
    {
        icon: MapPinned,
        end: 15,
        suffix: "+",
        label: "Cities Covered",
    },
];

const StatsSection = () => {
    return (
        <section className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <div
                        key={stat.label}
                        className="group rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:p-6"
                    >
                        {/* Icon */}
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3E7D4] transition group-hover:scale-110 md:mb-5 md:h-14 md:w-14">
                            <Icon size={22} className="text-[var(--primary)]" />
                        </div>

                        {/* Number */}
                        <h2 className="mb-1 text-2xl font-bold text-[var(--primary)] md:mb-2 md:text-4xl">
                            <Counter end={stat.end} suffix={stat.suffix} />
                        </h2>

                        {/* Label */}
                        <p className="text-xs leading-relaxed text-[var(--text-light)] md:text-sm">
                            {stat.label}
                        </p>
                    </div>
                );
            })}
        </section>
    );
};

export default StatsSection;