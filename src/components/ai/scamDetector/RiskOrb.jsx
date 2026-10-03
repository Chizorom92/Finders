import { ShieldCheck, ShieldAlert, ShieldX } from "lucide-react";

const RiskOrb = ({ score = 78 }) => {
    const getRisk = () => {
        if (score <= 30) {
            return {
                label: "Low Risk",
                color: "#16A34A",
                bg: "from-emerald-500 to-green-700",
                Icon: ShieldCheck,
            };
        }

        if (score <= 60) {
            return {
                label: "Moderate Risk",
                color: "#D97706",
                bg: "from-amber-500 to-orange-700",
                Icon: ShieldAlert,
            };
        }

        return {
            label: "High Risk",
            color: "#DC2626",
            bg: "from-red-500 to-red-800",
            Icon: ShieldX,
        };
    };

    const risk = getRisk();
    const Icon = risk.Icon;

    return (
        <section className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-8">
            <div className="text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--primary)]">
                    Fraud Risk Score
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold text-[var(--text)]">
                    AI Investigation Complete
                </h2>
            </div>

            {/* Orb */}
            <div className="relative mx-auto mt-10 flex h-72 w-72 items-center justify-center">
                {/* Outer Rings */}
                <div
                    className="absolute h-full w-full animate-pulse rounded-full border opacity-20"
                    style={{ borderColor: risk.color }}
                />
                <div
                    className="absolute h-56 w-56 animate-pulse rounded-full border opacity-30"
                    style={{
                        borderColor: risk.color,
                        animationDelay: "0.5s",
                    }}
                />
                <div
                    className="absolute h-44 w-44 animate-pulse rounded-full border opacity-40"
                    style={{
                        borderColor: risk.color,
                        animationDelay: "1s",
                    }}
                />

                {/* Core */}
                <div
                    className={`relative flex h-40 w-40 flex-col items-center justify-center rounded-full bg-gradient-to-br ${risk.bg} shadow-2xl`}
                >
                    <Icon size={30} className="mb-2 text-white" />

                    <p className="text-xs uppercase tracking-widest text-white/80">
                        {risk.label}
                    </p>

                    <h3 className="text-5xl font-black text-white">
                        {score}
                    </h3>
                </div>
            </div>

            {/* Confidence */}
            <div className="mx-auto mt-8 max-w-lg">
                <div className="mb-2 flex justify-between text-sm">
          <span className="text-[var(--text-light)]">
            AI Confidence
          </span>
                    <span className="font-semibold">96%</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-[var(--surface-2)]">
                    <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                            width: "96%",
                            background: risk.color,
                        }}
                    />
                </div>
            </div>

            {/* Summary */}
            <div
                className="mt-8 rounded-2xl p-5"
                style={{
                    background: `${risk.color}12`,
                    border: `1px solid ${risk.color}33`,
                }}
            >
                <div className="flex items-start gap-3">
                    <Icon size={24} style={{ color: risk.color }} />

                    <div>
                        <h4 className="font-semibold text-[var(--text)]">
                            {risk.label === "High Risk"
                                ? "Multiple fraud indicators detected"
                                : risk.label === "Moderate Risk"
                                    ? "Proceed with caution"
                                    : "No major fraud signals detected"}
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-[var(--text-light)]">
                            {risk.label === "High Risk"
                                ? "Finder AI found abnormal pricing, suspicious listing patterns and inconsistencies that require further investigation before payment."
                                : risk.label === "Moderate Risk"
                                    ? "Some investigation layers returned unusual results. Verify ownership and conduct a physical inspection."
                                    : "The investigation did not detect significant scam patterns, although physical verification is always recommended."}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RiskOrb;