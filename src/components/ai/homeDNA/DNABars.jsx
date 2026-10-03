import { useEffect, useState } from "react";
import {
    ShieldCheck,
    Waves,
    Car,
    Zap,
    DollarSign,
    Trees,
} from "lucide-react";

const dnaScores = [
    {
        title: "Trust DNA",
        score: 88,
        color: "#22C55E",
        icon: ShieldCheck,
        insight: "Ownership & agent verified",
    },
    {
        title: "Flood DNA",
        score: 32,
        color: "#EF4444",
        icon: Waves,
        insight: "Low seasonal flood exposure",
    },
    {
        title: "Commute DNA",
        score: 91,
        color: "#3B82F6",
        icon: Car,
        insight: "Excellent transport network",
    },
    {
        title: "Utilities DNA",
        score: 84,
        color: "#06B6D4",
        icon: Zap,
        insight: "Reliable power & water",
    },
    {
        title: "Price DNA",
        score: 76,
        color: "#F97316",
        icon: DollarSign,
        insight: "Competitive market pricing",
    },
    {
        title: "Lifestyle DNA",
        score: 72,
        color: "#EC4899",
        icon: Trees,
        insight: "Great for young professionals",
    },
];

const DNABars = ({ animate }) => {
    const [displayScore, setDisplayScore] = useState(
        dnaScores.map(() => 0)
    );

    useEffect(() => {
        if (!animate) {
            setDisplayScore(dnaScores.map(() => 0));
            return;
        }

        const timers = dnaScores.map((item, index) => {
            let current = 0;

            return setInterval(() => {
                current++;

                setDisplayScore((prev) => {
                    const updated = [...prev];
                    updated[index] = Math.min(current, item.score);
                    return updated;
                });

                if (current >= item.score) clearInterval(timers[index]);
            }, 18 + index * 3);
        });

        return () => timers.forEach(clearInterval);
    }, [animate]);

    return (
        <section className="space-y-6">
            <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    Living Genome
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold">
                    Property DNA Analysis
                </h2>

                <p className="mt-2 max-w-2xl text-[var(--text-light)]">
                    Finder AI creates a living DNA fingerprint for every property across
                    trust, flooding, commute, utilities, pricing and lifestyle.
                </p>
            </div>

            <div className="space-y-5">
                {dnaScores.map((item, index) => {
                    const Icon = item.icon;
                    const percent = displayScore[index];

                    return (
                        <div
                            key={item.title}
                            className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition duration-500 hover:shadow-xl"
                        >
                            {/* Header */}
                            <div className="mb-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="flex h-11 w-11 items-center justify-center rounded-2xl"
                                        style={{ backgroundColor: `${item.color}18` }}
                                    >
                                        <Icon color={item.color} size={22} />
                                    </div>

                                    <div>
                                        <h3 className="font-serif text-xl font-bold">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-[var(--text-light)]">
                                            {item.insight}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="rounded-full px-3 py-1 text-sm font-bold text-white"
                                    style={{ backgroundColor: item.color }}
                                >
                                    {percent}
                                </div>
                            </div>

                            {/* DNA Strand */}
                            <div className="relative h-20">
                                <svg
                                    viewBox="0 0 300 70"
                                    className="absolute inset-0 h-full w-full"
                                    preserveAspectRatio="none"
                                >
                                    {/* Beige strand */}
                                    <path
                                        d="M10 22 C45 5,75 40,110 22 S175 5,240 22 S280 40,290 22"
                                        fill="none"
                                        stroke="#E8D8C5"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M10 48 C45 65,75 30,110 48 S175 65,240 48 S280 30,290 48"
                                        fill="none"
                                        stroke="#E8D8C5"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                    />

                                    {/* Colored animated strand */}
                                    <g
                                        style={{
                                            clipPath: `inset(0 ${100 - percent}% 0 0)`,
                                            transition: "clip-path .25s linear",
                                        }}
                                    >
                                        <path
                                            d="M10 22 C45 5,75 40,110 22 S175 5,240 22 S280 40,290 22"
                                            fill="none"
                                            stroke={item.color}
                                            strokeWidth="6"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M10 48 C45 65,75 30,110 48 S175 65,240 48 S280 30,290 48"
                                            fill="none"
                                            stroke={item.color}
                                            strokeWidth="6"
                                            strokeLinecap="round"
                                        />
                                    </g>

                                    {/* DNA connectors */}
                                    {Array.from({ length: 16 }).map((_, i) => (
                                        <line
                                            key={i}
                                            x1={18 + i * 17}
                                            y1="22"
                                            x2={18 + i * 17}
                                            y2="48"
                                            stroke="#D7C5A8"
                                            strokeWidth="2"
                                            className="dna-pulse"
                                            style={{ animationDelay: `${i * 0.08}s` }}
                                        />
                                    ))}
                                </svg>

                                {/* Moving score bubble */}
                                <div
                                    className="absolute top-1/2 -translate-y-1/2 transition-all duration-150 ease-linear"
                                    style={{ left: `calc(${percent}% - 18px)` }}
                                >
                                    <div
                                        className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-white text-xs font-bold text-white shadow-xl"
                                        style={{ backgroundColor: item.color }}
                                    >
                                        {percent}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default DNABars;