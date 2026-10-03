import { Sparkles, ShieldCheck } from "lucide-react";

const AIHero = () => {
    return (
        <section className="overflow-hidden rounded-[28px] bg-gradient-to-br from-[#3D0A16] via-[#5A1423] to-[#7C2338] p-8 text-white shadow-2xl">
            <div className="flex items-start justify-between gap-6">
                <div>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">
                        <Sparkles size={16} />
                        <span className="text-sm font-medium">Finder AI</span>
                    </div>

                    <h1 className="max-w-2xl font-serif text-4xl font-bold leading-tight md:text-5xl">
                        Your intelligent housing & relocation assistant
                    </h1>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
                        Ask about renting abroad, verify listings, understand property
                        documents, compare countries, and make safer housing decisions.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <div className="rounded-full border border-[#E8CFAF]/20 bg-[#F5E6D3]/12 px-4 py-2 text-sm text-[#F7EBDD]">
                            ● Online
                        </div>

                        <div className="rounded-full bg-white/15 px-4 py-2 text-sm">
                            GPT Powered
                        </div>

                        <div className="rounded-full bg-white/15 px-4 py-2 text-sm">
                            Housing Intelligence
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex h-20 w-20 items-center justify-center rounded-3xl border border-[#E8CFAF]/20 bg-[#F5E6D3]/10 backdrop-blur">
                    <ShieldCheck size={38} />
                </div>
            </div>
        </section>
    );
};

export default AIHero;