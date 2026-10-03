import { ShieldCheck, ScanSearch, Sparkles } from "lucide-react";
import documentHero from "../../../assets/ai/safety/scanhero.jpg";

const ScanHero = () => {
    return (
        <section className="relative overflow-hidden rounded-[32px] min-h-[500px]">
            {/* Background Image */}
            <img
                src={documentHero}
                alt="Document Verification"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Burgundy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2A0612]/90 via-[#5A1025]/75 to-[#7C2338]/40" />

            {/* Soft Glow */}
            <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#A14B60]/30 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#E6C27A]/10 blur-3xl" />

            {/* Floating particles */}
            <div className="scan-particles">
                <span />
                <span />
                <span />
                <span />
                <span />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                        <Sparkles size={16} className="text-[#E6C27A]" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
              AI Document Intelligence
            </span>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-2">
                        <ShieldCheck size={16} className="text-emerald-300" />
                        <span className="text-xs font-medium text-emerald-100">
              Registry Ready
            </span>
                    </div>
                </div>

                <div className="max-w-3xl space-y-5">
                    <h1 className="font-serif text-5xl leading-tight text-white md:text-6xl">
                        Scan Property Documents
                    </h1>

                    <p className="max-w-2xl text-lg leading-8 text-white/85">
                        Upload title deeds, Certificates of Occupancy, tenancy agreements,
                        survey plans or IDs. Finder AI verifies authenticity, detects
                        forgery and validates official records in seconds.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <button className="rounded-2xl bg-white px-6 py-4 font-semibold text-[#7C2338] transition hover:scale-[1.02]">
                            Browse Documents
                        </button>

                        <button className="rounded-2xl border border-white/30 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
                            Try Sample Scan
                        </button>
                    </div>
                </div>

                {/* Bottom Glass Stats */}
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                        <div className="mb-2 flex items-center gap-2 text-[#E6C27A]">
                            <ScanSearch size={18} />
                            <span className="text-sm font-medium">Supported Files</span>
                        </div>
                        <p className="text-lg font-bold text-white">PDF • JPG • PNG • DOCX</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                        <div className="mb-2 flex items-center gap-2 text-emerald-300">
                            <ShieldCheck size={18} />
                            <span className="text-sm font-medium">Forgery Detection</span>
                        </div>
                        <p className="text-lg font-bold text-white">98.7% AI Accuracy</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                        <div className="mb-2 flex items-center gap-2 text-sky-300">
                            <Sparkles size={18} />
                            <span className="text-sm font-medium">Checks Performed</span>
                        </div>
                        <p className="text-lg font-bold text-white">Signature • Seal • Registry</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScanHero;