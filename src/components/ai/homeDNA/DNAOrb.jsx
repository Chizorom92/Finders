import { Dna } from "lucide-react";

const DNAOrb = () => {
    return (
        <section className="flex justify-center py-10">
            <div className="relative h-72 w-72">
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-[var(--primary)]/20 blur-3xl animate-pulse" />

                {/* Orbit Ring */}
                <div className="absolute inset-3 rounded-full border border-[var(--primary)]/30 animate-spin-slow" />

                <div className="absolute inset-8 rounded-full border border-white/10 animate-spin-reverse" />

                {/* Floating particles */}
                {[...Array(12)].map((_, i) => (
                    <span
                        key={i}
                        className="dna-particle absolute h-2 w-2 rounded-full bg-[var(--primary)]"
                        style={{
                            left: `${20 + (i % 4) * 18}%`,
                            top: `${15 + Math.floor(i / 4) * 22}%`,
                            animationDelay: `${i * 0.2}s`,
                        }}
                    />
                ))}

                {/* Main Orb */}
                <div className="absolute inset-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#7C2338] via-[#9D3451] to-[#C06C81] shadow-[0_0_60px_rgba(124,35,56,.45)] dna-orb">
                    <Dna size={68} color="white" strokeWidth={1.5} />
                </div>

                {/* Scan pulse */}
                <div className="absolute inset-10 rounded-full border-2 border-white/30 animate-ping" />
            </div>
        </section>
    );
};

export default DNAOrb;