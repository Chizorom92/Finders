import {
    ShieldCheck,
    CheckCircle2,
    AlertTriangle,
    FileBadge,
    Stamp,
    Download,
} from "lucide-react";

const findings = [
    {
        title: "Registry Record",
        status: "Verified",
        ok: true,
        icon: FileBadge,
    },
    {
        title: "Official Stamp",
        status: "Authentic",
        ok: true,
        icon: Stamp,
    },
    {
        title: "Digital Alteration",
        status: "None detected",
        ok: true,
        icon: ShieldCheck,
    },
    {
        title: "Signature Match",
        status: "Requires manual review",
        ok: false,
        icon: AlertTriangle,
    },
];

const AuthenticityReport = ({ score = 92, onOpenScamDetector }) => {

    return (
        <section className="space-y-6">
            {/* Score Card */}
            <div className="rounded-[30px] border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 dark:border-emerald-900 dark:from-[#0F241A] dark:to-[#15241F]">
                <div className="flex flex-col items-center text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                        <ShieldCheck size={42} className="text-emerald-600" />
                    </div>

                    <p className="mt-5 text-xs uppercase tracking-[0.3em] text-emerald-600">
                        Finder AI Result
                    </p>

                    <h2 className="mt-2 font-serif text-3xl font-bold text-[var(--text)]">
                        Authentic Document
                    </h2>

                    <div className="mt-5">
                        <div className="text-6xl font-black text-emerald-600">
                            {score}
                        </div>
                        <p className="text-sm text-[var(--text-light)]">
                            Authenticity Score
                        </p>
                    </div>

                    <p className="mt-5 max-w-xl text-[var(--text-light)]">
                        This document passed the majority of Finder AI's forgery,
                        registry and alteration checks. One item still benefits from
                        manual verification before purchase.
                    </p>
                </div>
            </div>

            {/* Findings */}
            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6">
                <h3 className="font-serif text-2xl font-bold text-[var(--text)]">
                    AI Verification Findings
                </h3>

                <div className="mt-6 space-y-4">
                    {findings.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="flex items-center justify-between rounded-2xl bg-[var(--surface-2)] p-4"
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                                            item.ok
                                                ? "bg-emerald-100 dark:bg-emerald-900"
                                                : "bg-amber-100 dark:bg-amber-900"
                                        }`}
                                    >
                                        <Icon
                                            size={22}
                                            className={
                                                item.ok ? "text-emerald-600" : "text-amber-500"
                                            }
                                        />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-[var(--text)]">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-[var(--text-light)]">
                                            {item.status}
                                        </p>
                                    </div>
                                </div>

                                {item.ok ? (
                                    <CheckCircle2 className="text-emerald-600" />
                                ) : (
                                    <AlertTriangle className="text-amber-500" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Recommendation */}
            <div
                className={`rounded-[28px] p-6 text-white ${
                    score >= 80
                        ? "bg-gradient-to-r from-[#7C2338] to-[#A14B60]"
                        : score >= 60
                            ? "bg-gradient-to-r from-[#B45309] to-[#D97706]"
                            : "bg-gradient-to-r from-[#991B1B] to-[#DC2626]"
                }`}
            >
                <p className="text-xs uppercase tracking-[0.3em] opacity-80">
                    Finder Recommendation
                </p>

                <h3 className="mt-2 font-serif text-2xl font-bold">
                    {score >= 80
                        ? "Proceed with confidence"
                        : score >= 60
                            ? "Manual verification recommended"
                            : "High scam risk detected"}
                </h3>

                <p className="mt-3 max-w-2xl text-white/90">
                    {score >= 80
                        ? "The document appears authentic, but Finder recommends confirming the owner's signature during physical verification."
                        : score >= 60
                            ? "Some inconsistencies require a physical inspection before any payment is made."
                            : "Finder AI detected multiple inconsistencies commonly associated with forged property documents. Investigate the listing before proceeding."}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                    <button className="rounded-2xl bg-white px-5 py-3 font-semibold text-[#7C2338]">
                        Download Report
                    </button>

                    {score < 60 && (
                        <button
                            onClick={onOpenScamDetector}
                            className="rounded-2xl border border-white/30 bg-white/10 px-5 py-3 font-semibold backdrop-blur"
                        >
                            Open Scam Detector
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AuthenticityReport;