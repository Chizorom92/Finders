import { Star, ShieldCheck, Phone, MessageCircle } from "lucide-react";

import agent1 from "../../assets/agents/agent1.jpg";
import agent2 from "../../assets/agents/agent2.jpg";
import agent3 from "../../assets/agents/agent3.jpg";

const agents = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Luxury Property Specialist",
        rating: 4.9,
        sales: "186 Homes Sold",
        image: agent1,
    },
    {
        id: 2,
        name: "Daniel Okafor",
        role: "Verified Abuja Consultant",
        rating: 4.8,
        sales: "142 Homes Sold",
        image: agent2,
    },
    {
        id: 3,
        name: "Grace Williams",
        role: "Family Home Advisor",
        rating: 5.0,
        sales: "203 Happy Clients",
        image: agent3,
    },
];

const VerifiedAgentsSection = () => {
    return (
        <section className="mt-24">
            {/* Heading */}
            <div className="mb-12 text-center">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary)]">
                    Trusted Professionals
                </p>

                <h2 className="font-serif text-5xl font-bold text-[var(--text)]">
                    Top Verified Agents
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-lg text-[var(--text-light)]">
                    Every Finders agent is identity verified to ensure a safer buying and
                    renting experience.
                </p>
            </div>

            {/* Agent Cards */}
            <div className="grid gap-7 lg:grid-cols-3">
                {agents.map((agent) => (
                    <div
                        key={agent.id}
                        className="group overflow-hidden rounded-[32px] border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        style={{
                            background: "var(--surface)",
                            borderColor: "var(--border)",
                        }}
                    >
                        {/* Image */}
                        <div className="relative h-80 overflow-hidden">
                            <img
                                src={agent.image}
                                alt={agent.name}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />

                            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                                <ShieldCheck size={14} />
                                Verified
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="mb-3 flex items-center justify-between">
                                <h3 className="font-serif text-2xl font-bold text-[var(--text)]">
                                    {agent.name}
                                </h3>

                                <div className="flex items-center gap-1 text-amber-500">
                                    <Star size={16} fill="currentColor" />
                                    <span className="text-sm font-semibold">{agent.rating}</span>
                                </div>
                            </div>

                            <p className="mb-2 text-[var(--text-light)]">{agent.role}</p>

                            <p className="mb-6 text-sm font-medium text-[var(--primary)]">
                                {agent.sales}
                            </p>

                            <div className="flex gap-3">
                                <button className="flex-1 rounded-2xl bg-[var(--primary)] py-3 font-semibold text-white transition hover:opacity-90">
                                    Contact
                                </button>

                                <button
                                    className="flex h-12 w-12 items-center justify-center rounded-2xl border transition hover:bg-[var(--surface-2)]"
                                    style={{ borderColor: "var(--border)" }}
                                >
                                    <MessageCircle size={20} className="text-[var(--primary)]" />
                                </button>

                                <button
                                    className="flex h-12 w-12 items-center justify-center rounded-2xl border transition hover:bg-[var(--surface-2)]"
                                    style={{ borderColor: "var(--border)" }}
                                >
                                    <Phone size={20} className="text-[var(--primary)]" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VerifiedAgentsSection;