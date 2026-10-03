
import AI from "../../assets/visa/ai.jpg";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, MessageCircle } from "lucide-react";

const VisaAICTA = () => {
    const navigate = useNavigate();

    return (
        <section className="relative overflow-hidden rounded-[32px]">

            {/* Background */}
            <img
                src={AI}
                alt="Finder AI"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B0B17]/90 via-[#5C1324]/70 to-black/30" />

            <div className="relative z-10 grid min-h-[420px] items-center gap-10 p-8 md:p-10 lg:grid-cols-2">

                <div>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur">
                        <Sparkles size={16} />
                        Finder AI Relocation Assistant
                    </div>

                    <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
                        Ask anything before you relocate
                    </h2>

                    <p className="mt-5 leading-8 text-white/90">
                        Finder AI helps you compare countries, estimate living costs,
                        choose neighborhoods, understand visa housing requirements,
                        and find the best city based on your budget.
                    </p>

                    <button
                        onClick={() => navigate("/finder-ai")}
                        className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-[#7C2338] transition hover:scale-105"
                    >
                        Open Finder AI
                        <ArrowRight size={18} />
                    </button>
                </div>

                {/* Example chat */}
                <div className="rounded-[28px] border border-white/15 bg-white/10 p-5 text-white backdrop-blur-xl">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-full bg-white/20 p-2">
                            <MessageCircle size={18} />
                        </div>

                        <div>
                            <p className="font-semibold">Example Questions</p>
                            <p className="text-sm text-white/70">
                                Natural conversation
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3">

                        <div className="rounded-2xl bg-white/10 p-3">
                            “I have ₦3 million. Which Canadian city can I realistically afford?”
                        </div>

                        <div className="rounded-2xl bg-white/10 p-3">
                            “Best city in Australia for software developers?”
                        </div>

                        <div className="rounded-2xl bg-white/10 p-3">
                            “Can I rent a house before my student visa is approved?”
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default VisaAICTA;
