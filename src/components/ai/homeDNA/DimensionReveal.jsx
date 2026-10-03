
import { useState } from "react";
import {
    ShieldCheck,
    Waves,
    Car,
    Zap,
    DollarSign,
    Trees,
    ChevronDown,
} from "lucide-react";

const dimensions = [
    {
        title: "Trust DNA",
        score: 88,
        color: "#22C55E",
        icon: ShieldCheck,
        confidence: "96%",
        summary: "Ownership & identity verified",
        evidence: [
            "Registered title document verified",
            "Licensed real estate agent confirmed",
            "No duplicate listing detected",
            "14 successful rental history records",
        ],
    },
    {
        title: "Flood DNA",
        score: 32,
        color: "#EF4444",
        icon: Waves,
        confidence: "91%",
        summary: "Very low flood exposure",
        evidence: [
            "Outside major flood-risk zones",
            "Good drainage infrastructure",
            "No reported flood claims nearby",
            "Elevation reduces seasonal risk",
        ],
    },
    {
        title: "Commute DNA",
        score: 91,
        color: "#3B82F6",
        icon: Car,
        confidence: "98%",
        summary: "Excellent transport network",
        evidence: [
            "6 mins to nearest bus route",
            "18 mins to city centre",
            "Multiple transport alternatives",
            "Low average traffic delay",
        ],
    },
    {
        title: "Utilities DNA",
        score: 84,
        color: "#06B6D4",
        icon: Zap,
        confidence: "94%",
        summary: "Reliable power & water",
        evidence: [
            "Stable electricity supply",
            "Reliable water availability",
            "Fiber internet accessible",
            "Backup infrastructure nearby",
        ],
    },
    {
        title: "Price DNA",
        score: 76,
        color: "#F97316",
        icon: DollarSign,
        confidence: "90%",
        summary: "Competitive market pricing",
        evidence: [
            "Below neighbourhood average",
            "Strong long-term value",
            "Healthy rental demand",
            "Fair landlord pricing history",
        ],
    },
    {
        title: "Lifestyle DNA",
        score: 72,
        color: "#EC4899",
        icon: Trees,
        confidence: "89%",
        summary: "Great for young professionals",
        evidence: [
            "Parks within walking distance",
            "Restaurants & cafés nearby",
            "Quiet evening environment",
            "Strong community amenities",
        ],
    },
];

const DimensionReveal = () => {
    const [active, setActive] = useState(0);

    return (
        <section className="space-y-4">
            <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    AI Evidence
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold">
                    Why Finder AI gave this score
                </h2>
            </div>

            {dimensions.map((item, index) => {
                const Icon = item.icon;
                const open = active === index;

                return (
                    <div
                        key={item.title}
                        className="overflow-hidden rounded-[26px] border border-[var(--border)] bg-[var(--surface)] transition-all duration-500"
                    >
                        <button
                            onClick={() => setActive(open ? -1 : index)}
                            className="flex w-full items-center justify-between p-5 text-left"
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                                    style={{ backgroundColor: `${item.color}18` }}
                                >
                                    <Icon color={item.color} size={24} />
                                </div>

                                <div>
                                    <h3 className="font-serif text-xl font-bold">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-[var(--text-light)]">
                                        {item.summary}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div
                                    className="rounded-full px-3 py-1 text-sm font-bold text-white"
                                    style={{ backgroundColor: item.color }}
                                >
                                    {item.score}
                                </div>

                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-300 ${
                                        open ? "rotate-180" : ""
                                    }`}
                                />
                            </div>
                        </button>

                        {open && (
                            <div className="border-t border-[var(--border)] px-5 pb-5">
                                <div className="mt-4 flex items-center justify-between">
                                    <p className="text-sm font-semibold">AI Confidence</p>

                                    <span
                                        className="rounded-full px-3 py-1 text-xs font-bold text-white"
                                        style={{ backgroundColor: item.color }}
                                    >
                    {item.confidence}
                  </span>
                                </div>

                                <div className="mt-4 space-y-3">
                                    {item.evidence.map((point) => (
                                        <div key={point} className="flex items-start gap-3">
                                            <div
                                                className="mt-1 h-2.5 w-2.5 rounded-full"
                                                style={{ backgroundColor: item.color }}
                                            />

                                            <p className="text-[15px]">{point}</p>
                                        </div>
                                    ))}
                                </div>

                                <div
                                    className="mt-5 rounded-2xl p-4"
                                    style={{ backgroundColor: `${item.color}10` }}
                                >
                                    <p
                                        className="text-sm font-semibold"
                                        style={{ color: item.color }}
                                    >
                                        Finder AI Insight
                                    </p>

                                    <p className="mt-2 text-sm leading-6">
                                        This dimension performed strongly because multiple verified
                                        data points aligned with public records and neighbourhood
                                        analysis.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default DimensionReveal;
