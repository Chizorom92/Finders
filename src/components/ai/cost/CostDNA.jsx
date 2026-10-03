const CostDNA = ({ expenses, currency }) => {
    const housing = Number(expenses.rent || 0);
    const fees = Number(expenses.agency || 0) + Number(expenses.agreement || 0);
    const furniture =
        Number(expenses.furniture || 0) + Number(expenses.renovation || 0);
    const other =
        Number(expenses.utilities || 0) + Number(expenses.moving || 0);

    const total = housing + fees + furniture + other;

    const width = (value) => {
        if (total === 0) return "0%";
        return `${(value / total) * 100}%`;
    };

    const format = (value) => new Intl.NumberFormat().format(value);

    const items = [
        { name: "Housing", value: housing, color: "#7C2338" },
        { name: "Fees", value: fees, color: "#B56576" },
        { name: "Furniture", value: furniture, color: "#D39A6A" },
        { name: "Other", value: other, color: "#E8D7B9" },
    ];

    return (
        <section className="rounded-[30px] bg-[var(--surface)] p-6 shadow-sm">
            <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    Cost DNA
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold">
                    Where your budget goes
                </h2>

                <p className="mt-2 text-[var(--text-light)]">
                    A live visual breakdown of your housing expenses.
                </p>
            </div>

            {/* DNA Ribbon */}
            <div className="overflow-hidden rounded-full bg-[var(--surface-2)] h-5 flex">
                <div
                    className="transition-all duration-700"
                    style={{ width: width(housing), background: "#7C2338" }}
                />
                <div
                    className="transition-all duration-700"
                    style={{ width: width(fees), background: "#B56576" }}
                />
                <div
                    className="transition-all duration-700"
                    style={{ width: width(furniture), background: "#D39A6A" }}
                />
                <div
                    className="transition-all duration-700"
                    style={{ width: width(other), background: "#E8D7B9" }}
                />
            </div>

            {/* Legend */}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
                {items.map((item) => (
                    <div
                        key={item.name}
                        className="flex items-center gap-3 rounded-2xl bg-[var(--surface-2)] p-4"
                    >
                        <div
                            className="h-5 w-5 rounded-full"
                            style={{ backgroundColor: item.color }}
                        />

                        <div className="flex-1">
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-[var(--text-light)]">
                                {currency}
                                {format(item.value)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CostDNA;