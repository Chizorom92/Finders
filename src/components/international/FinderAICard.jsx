import { useNavigate } from "react-router-dom";
import {
    Sparkles,
    GraduationCap,
    BriefcaseBusiness,
    Wallet,
    Users,
    ArrowRight,
} from "lucide-react";

const FinderAICard = () => {
    const navigate = useNavigate();

    const openAI = (prompt) => {
        navigate("/finder-ai", { state: { prompt } });
    };

    return (
        <section className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#5C1324] via-[#7C2338] to-[#A14B60] p-8 text-white md:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
                        <Sparkles size={16} />
                        Finder AI
                    </div>

                    <h2 className="mt-5 font-serif text-4xl font-bold leading-tight">
                        Your relocation assistant
                    </h2>

                    <p className="mt-4 leading-8 text-white/90">
                        Compare countries, estimate living costs, discover safer cities
                        and receive personalized relocation suggestions.
                    </p>

                    <button
                        onClick={() => navigate("/finder-ai")}
                        className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-[#7C2338] transition hover:scale-105"
                    >
                        Open Finder AI
                        <ArrowRight size={18} />
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={() =>
                            openAI("Best countries for studying abroad with affordable rent")
                        }
                        className="rounded-2xl bg-white/10 p-5 text-left backdrop-blur transition hover:bg-white/20"
                    >
                        <GraduationCap className="mb-3" />
                        <h3 className="font-semibold">Study Abroad</h3>
                        <p className="mt-1 text-xs text-white/70">
                            Best student cities
                        </p>
                    </button>

                    <button
                        onClick={() =>
                            openAI("I have ₦3,000,000. Which countries fit my budget?")
                        }
                        className="rounded-2xl bg-white/10 p-5 text-left backdrop-blur transition hover:bg-white/20"
                    >
                        <Wallet className="mb-3" />
                        <h3 className="font-semibold">Budget Match</h3>
                        <p className="mt-1 text-xs text-white/70">
                            Compare living costs
                        </p>
                    </button>

                    <button
                        onClick={() =>
                            openAI("Recommend the best countries for professionals")
                        }
                        className="rounded-2xl bg-white/10 p-5 text-left backdrop-blur transition hover:bg-white/20"
                    >
                        <BriefcaseBusiness className="mb-3" />
                        <h3 className="font-semibold">Work Relocation</h3>
                        <p className="mt-1 text-xs text-white/70">
                            Remote & executive living
                        </p>
                    </button>

                    <button
                        onClick={() =>
                            openAI("Safest countries for relocating with my family")
                        }
                        className="rounded-2xl bg-white/10 p-5 text-left backdrop-blur transition hover:bg-white/20"
                    >
                        <Users className="mb-3" />
                        <h3 className="font-semibold">Family Move</h3>
                        <p className="mt-1 text-xs text-white/70">
                            Safe neighbourhoods
                        </p>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FinderAICard;