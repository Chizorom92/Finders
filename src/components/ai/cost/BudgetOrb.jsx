import { useEffect, useMemo, useState } from "react";

const BudgetOrb = ({ expenses, currency }) => {
    const total = useMemo(() => {
        return Object.values(expenses).reduce((sum, value) => sum + Number(value || 0), 0);
    }, [expenses]);

    const [displayTotal, setDisplayTotal] = useState(total);

    useEffect(() => {
        const start = displayTotal;
        const end = total;
        const duration = 700;

        let frame;
        let startTime;

        const animate = (time) => {
            if (!startTime) startTime = time;

            const progress = Math.min((time - startTime) / duration, 1);

            const value = Math.round(start + (end - start) * progress);

            setDisplayTotal(value);

            if (progress < 1) {
                frame = requestAnimationFrame(animate);
            }
        };

        frame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frame);
    }, [total]);

    const format = (num) => new Intl.NumberFormat().format(num);

    return (
        <section className="rounded-[32px] bg-gradient-to-br from-[#240710] via-[#4B1326] to-[#7C2338] p-8 text-white shadow-2xl">
            <div className="text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-pink-200">
                    Total Housing Budget
                </p>

                <h2 className="mt-3 font-serif text-3xl font-bold">
                    Move-in Cost
                </h2>
            </div>

            {/* Orb */}
            <div className="relative mt-10 flex justify-center">
                <div className="absolute h-52 w-52 rounded-full bg-[#A14B60]/20 blur-3xl" />

                <div className="absolute h-40 w-40 animate-pulse rounded-full border border-white/20" />

                <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-[#D39A6A] via-[#7C2338] to-[#2B0914] shadow-[0_0_60px_rgba(124,35,56,0.45)]">
                    <div className="text-center">
                        <p className="text-xs tracking-[0.2em] text-pink-100">
                            TOTAL
                        </p>

                        <h3 className="mt-2 text-3xl font-bold">
                            {currency}
                        </h3>

                        <p className="mt-1 text-lg font-semibold">
                            {format(displayTotal)}
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="rounded-2xl bg-white/10 p-3 text-center backdrop-blur">
                    <p className="text-xs text-pink-100">Housing</p>
                    <p className="mt-1 font-bold">
                        {currency}{format(expenses.rent)}
                    </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-3 text-center backdrop-blur">
                    <p className="text-xs text-pink-100">Fees</p>
                    <p className="mt-1 font-bold">
                        {currency}
                        {format(expenses.agency + expenses.agreement)}
                    </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-3 text-center backdrop-blur">
                    <p className="text-xs text-pink-100">Furniture</p>
                    <p className="mt-1 font-bold">
                        {currency}{format(expenses.furniture)}
                    </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-3 text-center backdrop-blur">
                    <p className="text-xs text-pink-100">Moving</p>
                    <p className="mt-1 font-bold">
                        {currency}
                        {format(expenses.moving + expenses.utilities)}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BudgetOrb;