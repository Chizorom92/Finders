import { useEffect, useState } from "react";
import { Bot, Sparkles } from "lucide-react";

const fullText = `Home DNA analysis complete.

This property demonstrates exceptional Trust DNA, meaning the ownership history and listing authenticity are highly reliable.

Commute DNA scored 91, placing it among the strongest transport-connected homes in this neighbourhood.

Flood DNA remains low-risk, while Utilities DNA suggests stable electricity and water availability.

Overall, Finder AI considers this property an excellent match for students, professionals and small families seeking long-term rental security.`;

const AIInsight = () => {
    const [displayed, setDisplayed] = useState("");
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        let index = 0;

        const timer = setInterval(() => {
            index++;

            setDisplayed(fullText.slice(0, index));

            if (index >= fullText.length) {
                clearInterval(timer);
                setFinished(true);
            }
        }, 18);

        return () => clearInterval(timer);
    }, []);

    const highlight = (text) => {
        return text
            .replace(/Trust DNA/g, "§Trust DNA§")
            .replace(/Commute DNA/g, "§Commute DNA§")
            .replace(/Flood DNA/g, "§Flood DNA§")
            .replace(/Utilities DNA/g, "§Utilities DNA§")
            .split("§")
            .map((part, i) => {
                const highlighted = [
                    "Trust DNA",
                    "Commute DNA",
                    "Flood DNA",
                    "Utilities DNA",
                ].includes(part);

                return highlighted ? (
                    <span
                        key={i}
                        className="rounded-md bg-[#7C2338]/10 px-1 font-semibold text-[#7C2338]"
                    >
            {part}
          </span>
                ) : (
                    <span key={i}>{part}</span>
                );
            });
    };

    return (
        <section className="rounded-[32px] bg-gradient-to-br from-[#2B0914] via-[#471526] to-[#7C2338] p-6 text-white shadow-2xl md:p-8">
            <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                    <Bot size={26} />
                </div>

                <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-pink-200">
                        Finder AI
                    </p>

                    <h3 className="text-2xl font-bold">Intelligent Property Insight</h3>
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur">
                <div className="mb-4 flex items-center gap-2 text-pink-200">
                    <Sparkles size={16} />
                    <span className="text-sm">Generating analysis...</span>
                </div>

                <div className="min-h-[190px] whitespace-pre-wrap leading-8 text-white/95">
                    {highlight(displayed)}

                    {!finished && (
                        <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-white" />
                    )}
                </div>

                {finished && (
                    <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
            <span className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold">
              Excellent Match
            </span>

                        <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              Confidence 96%
            </span>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AIInsight;