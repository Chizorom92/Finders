import { useEffect, useState } from "react";
import { Search, ShieldAlert } from "lucide-react";

const stages = [
    "Searching duplicate property listings...",
    "Comparing property photos across the internet...",
    "Verifying WhatsApp identity...",
    "Analyzing asking price against market value...",
    "Checking agent reputation...",
    "Building fraud probability model...",
];

const evidenceItems = [
    "Duplicate Listing Database",
    "Reverse Image Search",
    "WhatsApp Identity",
    "Market Price Engine",
    "Agent Watchlist",
    "Registry Cross-check",
];

const RiskScanner = ({ visible, onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [stage, setStage] = useState(0);

    useEffect(() => {
        if (!visible) {
            setProgress(0);
            setStage(0);
            return;
        }

        let value = 0;

        const timer = setInterval(() => {
            value += 2;
            setProgress(value);

            const nextStage = Math.min(
                Math.floor(value / 18),
                stages.length - 1
            );

            setStage(nextStage);

            if (value >= 100) {
                clearInterval(timer);

                setTimeout(() => {
                    onComplete();
                }, 700);
            }
        }, 75);

        return () => clearInterval(timer);
    }, [visible]);

    if (!visible) return null;

    return (
        <section className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-8">
            <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-950/40">
                    <Search size={40} className="animate-pulse text-red-500" />
                </div>

                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-red-500">
                    Finder AI Investigation
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold text-[var(--text)]">
                    Investigating Property
                </h2>

                <p className="mt-3 text-[var(--text-light)]">
                    {stages[stage]}
                </p>
            </div>

            {/* Progress */}
            <div className="mt-8">
                <div className="mb-2 flex justify-between text-sm">
                    <span>Investigation Progress</span>
                    <span>{progress}%</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-[var(--surface-2)]">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-red-600 via-[#7C2338] to-[#E6C27A] transition-all duration-100"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Evidence Locker */}
            <div className="mt-8 rounded-2xl bg-[var(--surface-2)] p-5">
                <div className="mb-4 flex items-center gap-2">
                    <ShieldAlert size={18} className="text-[#7C2338]" />
                    <h3 className="font-semibold text-[var(--text)]">
                        Evidence Locker
                    </h3>
                </div>

                <div className="space-y-3">
                    {evidenceItems.map((item, index) => {
                        const unlocked = progress >= (index + 1) * 16;

                        return (
                            <div
                                key={item}
                                className="flex items-center justify-between rounded-xl bg-[var(--surface)] px-4 py-3"
                            >
                <span className="text-sm font-medium text-[var(--text)]">
                  {item}
                </span>

                                {unlocked ? (
                                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                    Collected
                  </span>
                                ) : (
                                    <span className="text-xs text-[var(--text-light)]">
                    Waiting...
                  </span>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default RiskScanner;