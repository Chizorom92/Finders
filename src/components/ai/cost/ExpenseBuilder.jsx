import {
    Home,
    BriefcaseBusiness,
    Scale,
    Shield,
    Zap,
    KeyRound,
    FileText,
    Landmark,
    Truck,
    Package,
    Users,
    Warehouse,
    Hammer,
    Paintbrush,
    PanelsTopLeft,
    ChefHat,
    Bath,
    Sofa,
    Bed,
    Tv,
    Utensils,
    Lamp,
    Wifi,
    Droplet,
    Flame,
    Plug,
} from "lucide-react";

const plannerFields = {
    rent: [
        { key: "rent", label: "Annual Rent", icon: Home },
        { key: "agency", label: "Agency Fee", icon: BriefcaseBusiness },
        { key: "agreement", label: "Agreement", icon: Scale },
        { key: "caution", label: "Caution Fee", icon: Shield },
        { key: "utilities", label: "Utility Setup", icon: Zap },
    ],

    buy: [
        { key: "rent", label: "House Price", icon: KeyRound },
        { key: "survey", label: "Survey", icon: FileText },
        { key: "legal", label: "Legal Fee", icon: Landmark },
        { key: "stamp", label: "Stamp Duty", icon: FileText },
        { key: "mortgage", label: "Mortgage Deposit", icon: Home },
    ],

    move: [
        { key: "moving", label: "Moving Truck", icon: Truck },
        { key: "packing", label: "Packing", icon: Package },
        { key: "labour", label: "Labour", icon: Users },
        { key: "storage", label: "Storage", icon: Warehouse },
        { key: "distance", label: "Distance Cost", icon: Truck },
    ],

    renovate: [
        { key: "painting", label: "Painting", icon: Paintbrush },
        { key: "pop", label: "POP Ceiling", icon: PanelsTopLeft },
        { key: "flooring", label: "Flooring", icon: Hammer },
        { key: "kitchen", label: "Kitchen", icon: ChefHat },
        { key: "bathroom", label: "Bathroom", icon: Bath },
    ],

    furnish: [
        { key: "bedroom", label: "Bedroom", icon: Bed },
        { key: "living", label: "Living Room", icon: Sofa },
        { key: "appliances", label: "Appliances", icon: Tv },
        { key: "dining", label: "Dining", icon: Utensils },
        { key: "decor", label: "Décor", icon: Lamp },
    ],

    utilities: [
        { key: "electricity", label: "Electricity", icon: Plug },
        { key: "internet", label: "Internet", icon: Wifi },
        { key: "water", label: "Water", icon: Droplet },
        { key: "gas", label: "Gas", icon: Flame },
        { key: "deposit", label: "Utility Deposit", icon: Zap },
    ],
};

const ExpenseBuilder = ({
                            selectedType,
                            currency,
                            expenses,
                            setExpenses,
                        }) => {
    const fields = plannerFields[selectedType];

    const format = (value) =>
        new Intl.NumberFormat().format(Number(value || 0));

    return (
        <section className="rounded-[30px] bg-[var(--surface)] p-6">
            <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    Smart Expense Builder
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold capitalize">
                    {selectedType} Planner
                </h2>

                <p className="mt-2 text-[var(--text-light)]">
                    Enter the expenses for this planning mode.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {fields.map((field) => {
                    const Icon = field.icon;

                    return (
                        <div
                            key={field.key}
                            className="rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-4 hover:border-[var(--primary)] transition"
                        >
                            <div className="mb-3 flex items-center gap-2">
                                <Icon size={18} className="text-[var(--primary)]" />
                                <p className="font-semibold">{field.label}</p>
                            </div>

                            <div className="flex items-center rounded-xl bg-[var(--surface)] px-3 py-3">
                <span className="mr-2 font-bold text-[var(--primary)]">
                  {currency}
                </span>

                                <input
                                    type="number"
                                    value={expenses[field.key] || ""}
                                    onChange={(e) =>
                                        setExpenses({
                                            ...expenses,
                                            [field.key]: Number(e.target.value),
                                        })
                                    }
                                    className="w-full bg-transparent outline-none text-lg font-semibold"
                                    placeholder="0"
                                />
                            </div>

                            <p className="mt-2 text-xs text-[var(--text-light)]">
                                {currency} {format(expenses[field.key] || 0)}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ExpenseBuilder;