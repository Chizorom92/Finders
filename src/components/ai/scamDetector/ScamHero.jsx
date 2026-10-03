import { ShieldAlert, SearchCheck, Sparkles } from "lucide-react";
import hero from "../../../assets/ai/safety/investigationHero.jpg";

const ScamHero = () => {
    return (
        <section className="relative overflow-hidden rounded-[32px] min-h-[500px]">
            <img
                src={hero}
                alt="AI Scam Detector"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#18040C]/95 via-[#3A0A18]/80 to-[#7C2338]/45" />

            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#7C2338]/25 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#E6C27A]/10 blur-3xl" />

            <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-12">
                <div className="flex flex-wrap gap-3">
                    <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                        <div className="flex items-center gap-2">
                            <Sparkles size={16} className="text-[#E6C27A]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
                AI Fraud Intelligence
              </span>
                        </div>
                    </div>

                    <div className="rounded-full bg-red-500/20 px-4 py-2">
                        <div className="flex items-center gap-2">
                            <ShieldAlert size={16} className="text-red-300" />
                            <span className="text-xs font-medium text-red-100">
                Live Risk Analysis
              </span>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl">
                    <h1 className="font-serif text-5xl leading-tight text-white md:text-6xl">
                        Scam Detector
                    </h1>

                    <p className="mt-5 text-lg leading-8 text-white/85">
                        Paste a property link, WhatsApp number, agent name or address.
                        Finder AI investigates suspicious pricing, duplicate listings,
                        fake agents and common rental scams before you send money.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="rounded-2xl bg-white px-6 py-4 font-semibold text-[#7C2338] transition hover:scale-[1.02]">
                            Start Investigation
                        </button>

                        <button className="rounded-2xl border border-white/30 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
                            Try Demo Case
                        </button>
                    </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                        <div className="mb-2 flex items-center gap-2 text-red-300">
                            <ShieldAlert size={18} />
                            <span className="text-sm font-medium">Scam Signals</span>
                        </div>
                        <p className="text-lg font-bold text-white">Price • Photos • Agent</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                        <div className="mb-2 flex items-center gap-2 text-[#E6C27A]">
                            <SearchCheck size={18} />
                            <span className="text-sm font-medium">AI Checks</span>
                        </div>
                        <p className="text-lg font-bold text-white">12 Investigation Layers</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                        <div className="mb-2 flex items-center gap-2 text-emerald-300">
                            <Sparkles size={18} />
                            <span className="text-sm font-medium">Output</span>
                        </div>
                        <p className="text-lg font-bold text-white">Fraud Risk Report</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScamHero;