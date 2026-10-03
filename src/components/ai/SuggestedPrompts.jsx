import { Lightbulb } from "lucide-react";

const prompts = [
    "Is this rental listing a scam?",
    "Compare Canada vs UK for students",
    "Explain this tenancy agreement",
    "Best city under ₦4,000,000 budget",
    "Safest neighbourhoods in Toronto",
    "What documents do I need before renting?",
];

const SuggestedPrompts = ({ onSelect }) => {
    return (
        <section className="space-y-4">
            <div className="flex items-center gap-2">
                <Lightbulb className="text-[#A14B60]" size={20} />
                <h2 className="font-serif text-2xl font-bold">
                    Suggested Prompts
                </h2>
            </div>

            <div className="flex flex-wrap gap-3">
                {prompts.map((prompt) => (
                    <button
                        key={prompt}
                        onClick={() => onSelect(prompt)}
                        className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm transition hover:border-[#A14B60] hover:bg-[#A14B60] hover:text-white"
                    >
                        {prompt}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default SuggestedPrompts;