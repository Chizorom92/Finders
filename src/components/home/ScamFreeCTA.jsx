import { ArrowRight, ShieldCheck, Flag } from "lucide-react";
import { useNavigate } from "react-router-dom";

import ctaHouse from "../../assets/home/cta-house.jpg";

const ScamFreeCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="mt-24 mb-20">
            <div className="relative overflow-hidden rounded-[36px]">
                {/* Background Image */}
                <img
                    src={ctaHouse}
                    alt="Luxury Home"
                    className="h-[560px] w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-2xl px-10 lg:px-16">

                        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-white backdrop-blur-md">
                            <ShieldCheck size={18} />

                            <span className="text-sm font-semibold">
                                Scam-Free Housing Platform
                            </span>
                        </div>

                        <h2 className="font-serif text-5xl font-bold leading-tight text-white lg:text-6xl">
                            Find Your Next Home With Confidence.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-white/85">
                            Join thousands of verified buyers and renters using Finders to
                            discover authentic properties, trusted agents and safer housing
                            opportunities across Nigeria.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">

                            {/* Create Account */}
                            <button
                                onClick={() => navigate("/register")}
                                className="flex items-center gap-2 rounded-2xl bg-[var(--primary)] px-7 py-4 text-base font-semibold text-white transition hover:scale-105"
                            >
                                Create Free Account
                                <ArrowRight size={18} />
                            </button>

                            {/* Browse Properties */}
                            <button
                                onClick={() => navigate("/search")}
                                className="rounded-2xl border border-white/40 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                            >
                                Browse Properties
                            </button>

                            {/* Report Scam */}
                            <button
                                onClick={() => navigate("/report")}
                                className="flex items-center gap-2 rounded-2xl border border-white/40 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                            >
                                <Flag size={18} />
                                Report a Scam
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScamFreeCTA;