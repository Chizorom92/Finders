import { useEffect, useState } from "react";
import { ShieldCheck, ScanSearch } from "lucide-react";

const messages = [
    "Reading document metadata...",
    "Detecting digital alterations...",
    "Verifying official stamps...",
    "Checking registry patterns...",
    "Matching signature integrity...",
    "Generating authenticity report..."
];

const ScanAnalyzer = ({ visible, onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!visible) {
            setProgress(0);
            setStep(0);
            return;
        }

        let value = 0;

        const timer = setInterval(() => {
            value += 2;
            setProgress(value);

            const index = Math.min(
                Math.floor(value / 18),
                messages.length - 1
            );
            setStep(index);

            if (value >= 100) {
                clearInterval(timer);

                setTimeout(() => {
                    onComplete();
                }, 600);
            }
        }, 70);

        return () => clearInterval(timer);
    }, [visible]);

    if (!visible) return null;

    return (
        <section className="rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-8">
            <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#7C2338]/10">
                    <ScanSearch
                        size={40}
                        className="animate-pulse text-[#7C2338]"
                    />
                </div>

                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[var(--primary)]">
                    Finder AI
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold text-[var(--text)]">
                    Authenticity Scan
                </h2>

                <p className="mt-2 text-[var(--text-light)]">
                    {messages[step]}
                </p>
            </div>

            <div className="mt-10">
                <div className="mb-2 flex justify-between text-sm">
                    <span>Scanning document</span>
                    <span>{progress}%</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-[var(--surface-2)]">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-[#7C2338] via-[#A14B60] to-[#E6C27A] transition-all duration-100"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl bg-[var(--surface-2)] p-4">
                    <div className="flex items-center gap-2">
                        <ShieldCheck
                            size={18}
                            className="text-emerald-600"
                        />
                        <span className="font-medium">Encryption</span>
                    </div>
                    <p className="mt-1 text-sm text-[var(--text-light)]">
                        Securely processing locally
                    </p>
                </div>

                <div className="rounded-2xl bg-[var(--surface-2)] p-4">
                    <div className="flex items-center gap-2">
                        <ScanSearch
                            size={18}
                            className="text-[#7C2338]"
                        />
                        <span className="font-medium">Forgery Detection</span>
                    </div>
                    <p className="mt-1 text-sm text-[var(--text-light)]">
                        Pixel & signature analysis
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ScanAnalyzer;