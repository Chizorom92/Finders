import { useEffect, useState } from "react";

const DNAScanner = ({ visible, onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!visible) {
            setProgress(0);
            return;
        }

        let value = 0;

        const timer = setInterval(() => {
            value += 2;
            setProgress(value);

            if (value >= 100) {
                clearInterval(timer);

                setTimeout(() => {
                    onComplete?.();
                }, 500);
            }
        }, 45);

        return () => clearInterval(timer);
    }, [visible, onComplete]);

    if (!visible) return null;

    return (
        <section
            id="dna-scanner"
            className="rounded-[32px] bg-[var(--surface)] p-8"
        >
            <div className="space-y-3 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)]">
                    Sequencing Genome
                </p>

                <h2 className="font-serif text-3xl font-bold">
                    Analyzing Property DNA...
                </h2>

                <p className="text-[var(--text-light)]">
                    Trust • Flood • Commute • Utilities • Lifestyle
                </p>
            </div>

            <div className="mt-10">
                <div className="relative h-4 overflow-hidden rounded-full bg-[var(--surface-2)]">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-[#7C2338] via-[#B14B65] to-[#E7B8C6] transition-all duration-75"
                        style={{ width: `${progress}%` }}
                    />

                    <div
                        className="absolute top-1/2 h-7 w-7 -translate-y-1/2 rounded-full bg-white shadow-xl transition-all duration-75"
                        style={{ left: `calc(${progress}% - 14px)` }}
                    >
                        <div className="m-1 h-5 w-5 animate-pulse rounded-full bg-[var(--primary)]" />
                    </div>
                </div>

                <div className="mt-3 flex justify-between text-sm">
                    <span>Scanning...</span>
                    <span>{progress}%</span>
                </div>
            </div>
        </section>
    );
};

export default DNAScanner;