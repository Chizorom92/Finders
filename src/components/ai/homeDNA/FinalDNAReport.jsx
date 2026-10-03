import {
    ShieldCheck,
    TriangleAlert,
    Wallet,
    Home,
    Download,
    Share2,
} from "lucide-react";

const FinalDNAReport = () => {
    return (
        <section className="space-y-6">
            {/* Heading */}
            <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    Final AI Report
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold">
                    Your Home DNA Verdict
                </h2>

                <p className="mt-2 max-w-2xl text-[var(--text-light)]">
                    Finder AI combines neighborhood intelligence, verification, lifestyle
                    and affordability into one final recommendation.
                </p>
            </div>

            {/* Overall Score */}
            <div className="overflow-hidden rounded-[34px] bg-gradient-to-br from-[#2B0914] via-[#471526] to-[#7C2338] p-8 text-white shadow-2xl">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-pink-200 uppercase tracking-[0.25em] text-sm">
                            Overall DNA Grade
                        </p>

                        <h3 className="mt-2 text-5xl font-bold">A+</h3>

                        <p className="mt-3 text-white/80">
                            Exceptional match for long-term renting
                        </p>
                    </div>

                    <div className="flex h-36 w-36 items-center justify-center rounded-full border-8 border-white/20 bg-white/10 backdrop-blur">
                        <div className="text-center">
                            <p className="text-4xl font-bold">91</p>
                            <p className="text-xs tracking-widest text-pink-100">DNA SCORE</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Strengths & Risks */}
            <div className="grid gap-5 lg:grid-cols-2">
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                    <div className="mb-4 flex items-center gap-3">
                        <ShieldCheck className="text-emerald-600" size={28} />

                        <h3 className="text-xl font-bold text-emerald-800">
                            Strongest Areas
                        </h3>
                    </div>

                    <ul className="space-y-3 text-emerald-900">
                        <li>• Verified ownership & licensed agent</li>
                        <li>• Excellent commute (91/100)</li>
                        <li>• Reliable utilities & internet</li>
                        <li>• Great student & family environment</li>
                    </ul>
                </div>

                <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                    <div className="mb-4 flex items-center gap-3">
                        <TriangleAlert className="text-amber-600" size={28} />

                        <h3 className="text-xl font-bold text-amber-800">
                            Things to Consider
                        </h3>
                    </div>

                    <ul className="space-y-3 text-amber-900">
                        <li>• Peak-hour traffic around 5–6 PM</li>
                        <li>• Lifestyle cost slightly above average</li>
                        <li>• Rental demand is high in this district</li>
                        <li>• Early reservation recommended</li>
                    </ul>
                </div>
            </div>

            {/* Living Cost */}
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <div className="mb-6 flex items-center gap-3">
                    <Wallet className="text-[var(--primary)]" size={28} />

                    <h3 className="text-2xl font-bold">Estimated Monthly Living Cost</h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        ["Rent", "$1,280"],
                        ["Utilities", "$120"],
                        ["Transport", "$85"],
                        ["Food", "$310"],
                    ].map(([label, value]) => (
                        <div
                            key={label}
                            className="rounded-2xl bg-[var(--surface-2)] p-4 text-center"
                        >
                            <p className="text-sm text-[var(--text-light)]">{label}</p>

                            <p className="mt-2 text-2xl font-bold">{value}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 rounded-2xl bg-[var(--primary)] p-5 text-white">
                    <div className="flex items-center justify-between">
                        <span className="text-lg">Estimated Total</span>

                        <span className="text-3xl font-bold">$1,795</span>
                    </div>
                </div>
            </div>

            {/* AI Recommendation */}
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <div className="mb-4 flex items-center gap-3">
                    <Home className="text-[var(--primary)]" size={28} />

                    <h3 className="text-2xl font-bold">Finder AI Recommendation</h3>
                </div>

                <p className="leading-8 text-[var(--text-light)]">
                    This property is an excellent choice for international students,
                    professionals and small families. Its strongest advantages are trust,
                    transport connectivity and long-term neighborhood stability, making it
                    one of the highest-rated verified rentals in its district.
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] px-6 py-4 font-semibold text-white transition hover:scale-[1.02]">
                    <Download size={20} />
                    Download DNA Report
                </button>

                <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-4 font-semibold transition hover:bg-[var(--surface-2)]">
                    <Share2 size={20} />
                    Share Analysis
                </button>
            </div>
        </section>
    );
};

export default FinalDNAReport;