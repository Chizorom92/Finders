import { useMemo, useState } from "react";
import {
    ChevronDown,
    AlertTriangle,
    Lightbulb,
    Sofa,
    Hammer,
    Wallet,
} from "lucide-react";

const SavingsBreakdown = ({ expenses, currency, open }) => {

    const insights = useMemo(() => {
        const rent = Number(expenses.rent || 0);
        const agency = Number(expenses.agency || 0);
        const furniture = Number(expenses.furniture || 0);
        const renovation = Number(expenses.renovation || 0);
        const utilities = Number(expenses.utilities || 0);

        const data = [];

        if (agency > rent * 0.08) {
            data.push({
                icon: Wallet,
                color: "text-yellow-400",
                title: "Agency fee is above the recommended range",
                body: "Most Nigerian agency fees fall between 5–8%. Try negotiating before making payment.",
                save: Math.round(agency * 0.2),
            });
        }

        if (renovation > 1000000) {
            data.push({
                icon: Hammer,
                color: "text-violet-400",
                title: "Renovation estimate needs verification",
                body: "Request at least three contractor quotations. Prices vary significantly.",
                save: Math.round(renovation * 0.15),
            });
        }

        if (furniture > 2000000) {
            data.push({
                icon: Sofa,
                color: "text-sky-400",
                title: "Consider a semi-furnished apartment",
                body: "Buying every appliance immediately may not be necessary.",
                save: 800000,
            });
        }

        if (utilities < 30000) {
            data.push({
                icon: Lightbulb,
                color: "text-orange-300",
                title: "Utility setup looks underestimated",
                body: "Include internet installation, electricity deposits and water connection fees.",
                save: 0,
            });
        }

        if (data.length === 0) {
            data.push({
                icon: AlertTriangle,
                color: "text-green-400",
                title: "Your budget looks well balanced",
                body: "No unusual spending patterns were detected.",
                save: 0,
            });
        }

        return data;
    }, [expenses]);

    const format = (value) => new Intl.NumberFormat().format(value);


    return (
        <section
            id="ai-breakdown"
            className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] overflow-hidden"
        >
            <div className="w-full p-6 border-t border-white/10">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    AI View Breakdown
                </p>

                <h2 className="mt-2 font-serif text-2xl font-bold">
                    {insights.length} Intelligent Insights
                </h2>
            </div>

            {open && (
                <div className="border-t border-[var(--border)] p-6 space-y-4">
                    {insights.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="rounded-2xl bg-[var(--surface-2)] p-5"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`mt-1 ${item.color}`}>
                                        <Icon size={22} />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-[var(--text-light)] leading-7">
                                            {item.body}
                                        </p>

                                        {item.save > 0 && (
                                            <div className="mt-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                                                Potential saving: {currency}{format(item.save)}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default SavingsBreakdown;