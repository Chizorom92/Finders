import {
    CheckCircle2,
    AlertTriangle,
    XCircle,
    Image,
    Wallet,
    Phone,
    MapPin,
} from "lucide-react";

const signals = [
    {
        title: "Reverse Image Search",
        status: "Safe",
        icon: Image,
        color: "green",
        description:
            "Finder AI found no duplicate property photos across known listing databases.",
    },
    {
        title: "Price Analysis",
        status: "Warning",
        icon: Wallet,
        color: "amber",
        description:
            "The asking price is approximately 42% below similar verified properties in the area.",
    },
    {
        title: "Agent Reputation",
        status: "Critical",
        icon: Phone,
        color: "red",
        description:
            "The WhatsApp number appears in multiple previously reported scam conversations.",
    },
    {
        title: "Location Consistency",
        status: "Safe",
        icon: MapPin,
        color: "green",
        description:
            "The property address matches nearby roads and known geographical records.",
    },
];

const ScamSignals = () => {
    const getStyles = (color) => {
        switch (color) {
            case "green":
                return {
                    bg: "bg-emerald-50 dark:bg-emerald-950/20",
                    border: "border-emerald-200 dark:border-emerald-900",
                    iconBg: "bg-emerald-100 dark:bg-emerald-900",
                    icon: "text-emerald-600",
                    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
                    StatusIcon: CheckCircle2,
                };

            case "amber":
                return {
                    bg: "bg-amber-50 dark:bg-amber-950/20",
                    border: "border-amber-200 dark:border-amber-900",
                    iconBg: "bg-amber-100 dark:bg-amber-900",
                    icon: "text-amber-600",
                    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
                    StatusIcon: AlertTriangle,
                };

            default:
                return {
                    bg: "bg-red-50 dark:bg-red-950/20",
                    border: "border-red-200 dark:border-red-900",
                    iconBg: "bg-red-100 dark:bg-red-900",
                    icon: "text-red-600",
                    badge: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
                    StatusIcon: XCircle,
                };
        }
    };

    return (
        <section className="rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    AI Investigation
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold text-[var(--text)]">
                    Scam Signals Report
                </h2>

                <p className="mt-2 text-[var(--text-light)]">
                    These signals explain exactly how Finder AI calculated the fraud risk score.
                </p>
            </div>

            <div className="space-y-4">
                {signals.map((signal) => {
                    const styles = getStyles(signal.color);
                    const Icon = signal.icon;
                    const StatusIcon = styles.StatusIcon;

                    return (
                        <div
                            key={signal.title}
                            className={`rounded-2xl border p-5 ${styles.bg} ${styles.border}`}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex gap-4">
                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.iconBg}`}
                                    >
                                        <Icon className={styles.icon} size={22} />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-[var(--text)]">
                                            {signal.title}
                                        </h3>

                                        <p className="mt-2 leading-7 text-[var(--text-light)]">
                                            {signal.description}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}
                                >
                                    <StatusIcon size={14} />
                                    {signal.status}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ScamSignals;