import { Sparkles, Dna, ShieldCheck, BrainCircuit } from "lucide-react";
import hero from "../../../assets/ai/homeDNA/dnahero.jpg";

const DNAHero = ({onAnalyze}) => {
    return (
        <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#2A0B16]">

            {/* Background image */}
            <img
                src={hero}
                alt="Luxury property"
                className="absolute inset-0 h-full w-full object-cover opacity-35"
            />

            {/* Burgundy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#18060D]/95 via-[#55172A]/88 to-[#A14B60]/70" />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 22 }).map((_, i) => (
                    <span
                        key={i}
                        className="absolute text-white/20 animate-pulse"
                        style={{
                            left: `${(i * 13) % 100}%`,
                            top: `${(i * 19) % 100}%`,
                            animationDelay: `${i * 0.25}s`,
                        }}
                    >
            •
          </span>
                ))}
            </div>

            {/* Scan line */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="scan-line absolute left-0 h-24 w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-20">

                {/* Top badges */}
                <div className="flex flex-wrap items-center gap-3">

                    <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
                        <Dna size={16} className="text-pink-200" />
                        <span className="text-sm text-white">Home DNA AI</span>
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2">
                        <ShieldCheck size={16} className="text-emerald-300" />
                        <span className="text-sm text-emerald-100">
              96% AI Confidence
            </span>
                    </div>

                </div>

                {/* Heading */}
                <div className="mt-8 max-w-3xl">

                    <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
                        Every Home
                        <span className="block text-[#F4C7D3]">Has a DNA.</span>
                    </h1>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                        Finder AI analyzes over 60 housing signals—from flood history,
                        trust score and utilities to commute intelligence and price
                        fairness—to reveal the true personality of a property.
                    </p>

                </div>

                {/* Bottom cards */}
                <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

                    <button
                        onClick={onAnalyze}
                        className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-[#7C2338] transition hover:scale-[1.02] lg:w-auto"
                    >
                        <Sparkles size={18} />
                        Run DNA Analysis
                    </button>

                    <div className="grid w-full grid-cols-2 gap-3 lg:w-auto">

                        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                            <p className="text-xs uppercase tracking-widest text-white/60">
                                Signals
                            </p>
                            <h3 className="mt-2 text-3xl font-bold text-white">67</h3>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                            <div className="flex items-center gap-2">
                                <BrainCircuit size={15} className="text-pink-200" />
                                <p className="text-xs uppercase tracking-widest text-white/60">
                                    Live AI
                                </p>
                            </div>
                            <h3 className="mt-2 text-2xl font-bold text-white">ACTIVE</h3>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default DNAHero;