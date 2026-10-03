import hero from "../../../assets/ai/homeDNA/hereo.jpg";
import { Sparkles, Home, KeyRound, Truck, Hammer, Sofa, Zap } from "lucide-react";

const plans = [
    { id: "rent", label: "Rent", icon: Home },
    { id: "buy", label: "Buy", icon: KeyRound },
    { id: "move", label: "Move", icon: Truck },
    { id: "renovate", label: "Renovate", icon: Hammer },
    { id: "furnish", label: "Furnish", icon: Sofa },
    { id: "utilities", label: "Utilities", icon: Zap },
];

const CostHero = ({ selectedType, setSelectedType }) => {
    return (
        <section className="relative overflow-hidden rounded-[32px]">
            {/* Hero Image */}
            <img
                src={hero}
                alt="Housing Cost Calculator"
                className="h-[430px] w-full object-cover md:h-[520px]"
            />

            {/* Burgundy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2B0914]/90 via-[#471526]/70 to-black/25" />

            {/* Hero Content */}
            <div className="absolute inset-0 flex items-center">
                <div className="max-w-2xl px-6 pt-8 pb-28 text-white md:px-10 md:pt-12 md:pb-32">
                    <div className="mb-4 flex items-center gap-2">
                        <Sparkles size={16} />
                        <span className="text-sm uppercase tracking-[0.25em]">
              Finder AI
            </span>
                    </div>

                    <h1 className="font-serif text-4xl font-bold leading-tight md:text-6xl">
                        Housing Cost Calculator
                    </h1>

                    <p className="mt-4 text-sm leading-7 text-white/90 md:text-lg">
                        Plan your rent, buying budget, renovation, moving expenses,
                        furniture and utility setup in one intelligent place.
                    </p>
                </div>
            </div>

            {/* Planning Cards */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/30 p-4 backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                    {plans.map((plan) => {
                        const Icon = plan.icon;

                        return (
                            <button
                                key={plan.id}
                                onClick={() => setSelectedType(plan.id)}
                                className={`rounded-2xl p-3 transition-all duration-300 ${
                                    selectedType === plan.id
                                        ? "bg-white text-[#7C2338] shadow-lg scale-[1.02]"
                                        : "bg-white/10 text-white hover:bg-white/20"
                                }`}
                            >
                                <div className="flex flex-col items-center gap-2">
                                    <Icon size={22} />
                                    <span className="text-xs font-semibold">{plan.label}</span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CostHero;