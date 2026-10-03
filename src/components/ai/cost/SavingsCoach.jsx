import SavingsBreakdown from "./SavingsBreakdown";
import {
    Sparkles, ArrowRight } from "lucide-react";

const SavingsCoach = ({
                           expenses,
                           currency,
                           open,
                           setOpen,
                       }) => {

    const rent = Number(expenses.rent || 0);
    const agency = Number(expenses.agency || 0);
    const furniture = Number(expenses.furniture || 0);
    const renovation = Number(expenses.renovation || 0);
    const utilities = Number(expenses.utilities || 0);
    const moving = Number(expenses.moving || 0);

    const total =
        rent +
        agency +
        renovation +
        furniture +
        utilities +
        Number(expenses.moving || 0);

    let insight;

    if (utilities > rent) {
        insight = {
            title: "Utility cost is unrealistic",
            message:
                "Your utility setup is higher than the property's value. Double-check this figure—it may have been entered incorrectly.",
            saving: 0,
            color: "#EF4444",
        };
    }

    else if (agency > rent * 0.12) {
        insight = {
            title: "Agency fee looks unusually high",
            message:
                "This agency fee is well above the recommended range. Negotiate before making payment.",
            saving: Math.round(agency * 0.25),
            color: "#F59E0B",
        };
    }

    else if (renovation > rent * 0.2) {
        insight = {
            title: "Renovation needs attention",
            message:
                "Your renovation budget is consuming a large part of the property value.",
            saving: Math.round(renovation * 0.15),
            color: "#8B5CF6",
        };
    }

    else if (furniture > 2000000) {
        insight = {
            title: "Furniture budget is high",
            message:
                "A semi-furnished apartment could significantly reduce your furniture expenses.",
            saving: 800000,
            color: "#2563EB",
        };
    }

    else {
        insight = {
            title: "Excellent budget structure",
            message:
                "Your housing budget is balanced across the major expense categories. Keep a small emergency buffer before moving in.",
            saving: Math.round(total * 0.03),
            color: "#16A34A",
        };
    }
    const format = (value) => new Intl.NumberFormat().format(value);

    return (
        <section className="overflow-hidden rounded-[30px] bg-gradient-to-br from-[#2B0914] via-[#4A1326] to-[#7C2338] text-white shadow-xl">
            <div className="p-7 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                            <Sparkles size={20} />
                        </div>

                        <div>
                            <p className="font-semibold">Finder AI</p>
                            <p className="text-sm text-white/70">Savings Coach</p>
                        </div>
                    </div>

                    <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur">
            AI Generated
          </span>
                </div>

                <div className="mt-8">
                    <div
                        className="mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                            backgroundColor: `${insight.color}22`,
                            color: "#fff",
                            border: `1px solid ${insight.color}`,
                        }}
                    >
                        {insight.title}
                    </div>

                    <h2 className="font-serif text-3xl font-bold leading-snug">
                        {insight.title}
                    </h2>

                    <p className="mt-4 max-w-2xl text-base leading-8 text-white/85">
                        {insight.message}
                    </p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                        <p className="text-sm text-white/70">Potential Saving</p>

                        <h3 className="mt-2 text-3xl font-bold">
                            {currency}
                            {format(insight.saving)}
                        </h3>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                        <p className="text-sm text-white/70">Best Next Step</p>

                        <p className="mt-2 font-semibold">
                            Review this category before making payment.
                        </p>
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                    <button className="rounded-full bg-white px-5 py-3 font-semibold text-[#7C2338] transition hover:scale-105">
                        Save This Advice
                    </button>

                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
                    >
                        {open ? "Hide Breakdown" : "View Breakdown"}
                    </button>
                </div>
            </div>

            {open && (
                <div className="mt-8 border-t border-white/10 pt-8">
                    <SavingsBreakdown
                        expenses={expenses}
                        currency={currency}
                        open={open}
                    />
                </div>
            )}

        </section>
    );
};

export default SavingsCoach;