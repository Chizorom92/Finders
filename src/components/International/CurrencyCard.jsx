import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ArrowRightLeft,
    Wallet,
    TrendingUp,
    Calculator,
    Globe,
} from "lucide-react";

const rates = {
    NGN: { USD: 0.00062, CAD: 0.00085, GBP: 0.00046, EUR: 0.00054, AUD: 0.00095, KRW: 0.87 },
    USD: { NGN: 1610, CAD: 1.37, GBP: 0.74, EUR: 0.87, AUD: 1.53, KRW: 1398 },
    CAD: { NGN: 1175, USD: 0.73, GBP: 0.54, EUR: 0.63, AUD: 1.12, KRW: 1020 },
    GBP: { NGN: 2175, USD: 1.35, CAD: 1.84, EUR: 1.17, AUD: 2.06, KRW: 1885 },
    EUR: { NGN: 1860, USD: 1.15, CAD: 1.58, GBP: 0.86, AUD: 1.76, KRW: 1605 },
    AUD: { NGN: 1050, USD: 0.65, CAD: 0.89, GBP: 0.49, EUR: 0.57, KRW: 915 },
    KRW: { NGN: 1.15, USD: 0.00072, CAD: 0.00098, GBP: 0.00053, EUR: 0.00062, AUD: 0.00109 },
};

const symbols = {
    NGN: "₦",
    USD: "$",
    CAD: "CA$",
    GBP: "£",
    EUR: "€",
    AUD: "A$",
    KRW: "₩",
};



const CurrencyCard = () => {
    const [amount, setAmount] = useState(2000000);
    const [from, setFrom] = useState("NGN");
    const [to, setTo] = useState("CAD");

    const result =
        from === to ? amount : amount * rates[from][to];

    const swap = () => {
        const temp = from;
        setFrom(to);
        setTo(temp);
    };
    const navigate = useNavigate();
    return (
        <section className="space-y-6">

            {/* Heading */}
            <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    Live Currency Exchange
                </p>

                <h2 className="mt-2 font-serif text-4xl font-bold">
                    Compare your money globally
                </h2>

                <p className="mt-2 text-[var(--text-light)]">
                    Instantly estimate rent, deposits and relocation costs before moving abroad.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

                {/* Converter */}
                <div className="rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">

                    <div className="mb-6 flex items-center gap-3">
                        <div className="rounded-2xl bg-[#A14B60]/10 p-3">
                            <Wallet className="text-[#A14B60]" />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold">Quick Converter</h3>
                            <p className="text-sm text-[var(--text-light)]">
                                7 international currencies
                            </p>
                        </div>
                    </div>

                    {/* Amount */}
                    <div className="space-y-5">

                        <div>
                            <label className="mb-2 block text-sm text-[var(--text-light)]">
                                Amount
                            </label>

                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                className="w-full rounded-2xl border border-[var(--border)] bg-transparent p-4 text-3xl font-bold outline-none focus:border-[#A14B60]"
                            />
                        </div>

                        {/* Currency selectors */}
                        <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-3">

                            <div>
                                <label className="mb-2 block text-sm text-[var(--text-light)]">
                                    From
                                </label>

                                <select
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                    className="w-full rounded-2xl border border-[var(--border)] bg-transparent p-4"
                                >
                                    {Object.keys(symbols).map((currency) => (
                                        <option key={currency}>{currency}</option>
                                    ))}
                                </select>
                            </div>

                            <button
                                onClick={swap}
                                className="mb-1 rounded-full bg-[var(--surface-2)] p-3 transition hover:bg-[#A14B60] hover:text-white"
                            >
                                <ArrowRightLeft size={20} />
                            </button>

                            <div>
                                <label className="mb-2 block text-sm text-[var(--text-light)]">
                                    To
                                </label>

                                <select
                                    value={to}
                                    onChange={(e) => setTo(e.target.value)}
                                    className="w-full rounded-2xl border border-[var(--border)] bg-transparent p-4"
                                >
                                    {Object.keys(symbols).map((currency) => (
                                        <option key={currency}>{currency}</option>
                                    ))}
                                </select>
                            </div>

                        </div>

                        {/* Result */}
                        <div className="rounded-3xl bg-gradient-to-r from-[#7C2338] to-[#A14B60] p-6 text-white">

                            <p className="text-sm text-white/80">
                                You receive
                            </p>

                            <h2 className="mt-2 text-4xl font-bold">
                                {symbols[to]}
                                {result.toLocaleString(undefined, {
                                    maximumFractionDigits: 2,
                                })}
                            </h2>

                            <div className="mt-4 flex items-center gap-2 text-sm text-white/90">
                                <Globe size={16} />
                                Updated exchange estimate
                            </div>

                        </div>

                    </div>

                </div>

                {/* Right cards */}
                <div className="space-y-5">

                    {/* Popular */}
                    <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">

                        <div className="mb-4 flex items-center gap-2">
                            <TrendingUp className="text-[#A14B60]" size={18} />
                            <h3 className="font-bold">Popular Conversions</h3>
                        </div>

                        {[
                            ["₦1,000,000", "CA$850"],
                            ["₦2,000,000", "$1,240"],
                            ["₦3,500,000", "£1,610"],
                            ["₦5,000,000", "€2,700"],
                        ].map(([from, to]) => (
                            <div
                                key={from}
                                className="flex items-center justify-between border-b border-[var(--border)] py-3 last:border-0"
                            >
                                <span>{from}</span>
                                <strong>{to}</strong>
                            </div>
                        ))}

                    </div>

                    {/* Cost Calculator */}
                    <div className="rounded-[28px] bg-gradient-to-br from-[#5C1324] to-[#A14B60] p-6 text-white">

                        <div className="mb-3 flex items-center gap-2">
                            <Calculator size={18} />
                            <h3 className="font-bold">Need a full relocation budget?</h3>
                        </div>

                        <p className="text-sm leading-7 text-white/90">
                            Estimate rent, food, transport, utilities and monthly living costs
                            using Finders' Cost Calculator.
                        </p>

                        <button
                            onClick={()=> navigate("/cost-calculator")}
                            className="mt-5 w-full rounded-2xl bg-white py-3 font-semibold text-[#7C2338] transition hover:scale-[1.02]"
                        >
                            Open Cost Calculator
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default CurrencyCard;