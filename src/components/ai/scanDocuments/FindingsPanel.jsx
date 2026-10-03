
import { useState } from "react";
import {
    CheckCircle2,
    AlertTriangle,
    ChevronDown,
    ChevronUp,
    FileBadge,
    Stamp,
    ShieldCheck,
} from "lucide-react";

const findings = [
    {
        id: 1,
        title: "Registry Verification",
        status: "Verified",
        ok: true,
        icon: FileBadge,
        details:
            "Finder AI matched the registry number with the official government record. The property identifier follows the expected formatting pattern.",
    },
    {
        id: 2,
        title: "Official Stamp",
        status: "Authentic",
        ok: true,
        icon: Stamp,
        details:
            "The embossed stamp dimensions and seal placement are consistent with genuine Certificates of Occupancy issued by the registry.",
    },
    {
        id: 3,
        title: "Digital Alteration",
        status: "None detected",
        ok: true,
        icon: ShieldCheck,
        details:
            "Image compression, metadata and pixel consistency show no obvious signs of editing or manipulation.",
    },
    {
        id: 4,
        title: "Signature Analysis",
        status: "Manual review recommended",
        ok: false,
        icon: AlertTriangle,
        details:
            "The signature shape differs slightly from archived samples. This does not confirm fraud, but Finder AI recommends verifying it physically before payment.",
    },
];

const FindingsPanel = () => {
    const [open, setOpen] = useState(1);

    return (
        <section className="rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    AI Investigation
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold text-[var(--text)]">
                    Verification Findings
                </h2>

                <p className="mt-2 text-[var(--text-light)]">
                    Every result below includes the reason Finder AI reached its conclusion.
                </p>
            </div>

            <div className="space-y-4">
                {findings.map((item) => {
                    const Icon = item.icon;
                    const expanded = open === item.id;

                    return (
                        <div
                            key={item.id}
                            className={`
                overflow-hidden rounded-2xl border transition-all duration-300
                ${
                                expanded
                                    ? item.ok
                                        ? "border-emerald-300 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/20"
                                        : "border-amber-300 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20"
                                    : "border-[var(--border)] bg-[var(--surface-2)]"
                            }
              `}
                        >
                            <button
                                onClick={() => setOpen(expanded ? null : item.id)}
                                className="flex w-full items-center justify-between p-5 text-left"
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`
                      flex h-12 w-12 items-center justify-center rounded-xl
                      ${
                                            item.ok
                                                ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900"
                                                : "bg-amber-100 text-amber-600 dark:bg-amber-900"
                                        }
                    `}
                                    >
                                        <Icon size={22} />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-[var(--text)]">
                                            {item.title}
                                        </h3>

                                        <div className="mt-1 flex items-center gap-2">
                                            {item.ok ? (
                                                <CheckCircle2 size={15} className="text-emerald-600" />
                                            ) : (
                                                <AlertTriangle size={15} className="text-amber-500" />
                                            )}

                                            <span
                                                className={`text-sm font-medium ${
                                                    item.ok ? "text-emerald-600" : "text-amber-600"
                                                }`}
                                            >
                        {item.status}
                      </span>
                                        </div>
                                    </div>
                                </div>

                                {expanded ? (
                                    <ChevronUp className="text-[var(--text-light)]" />
                                ) : (
                                    <ChevronDown className="text-[var(--text-light)]" />
                                )}
                            </button>

                            {expanded && (
                                <div className="border-t border-black/5 px-5 pb-5 pt-4 dark:border-white/10">
                                    <p className="leading-7 text-[var(--text-light)]">
                                        {item.details}
                                    </p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FindingsPanel;