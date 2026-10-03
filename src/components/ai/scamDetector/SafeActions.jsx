import { useNavigate } from "react-router-dom";

import {
    Download,
    Shield,
    Flag,
    Heart,
    PhoneCall,
    MapPinned,
    AlertTriangle,
} from "lucide-react";


const SafeActions = () => {
    const navigate = useNavigate();
    return (
        <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2A0612] via-[#4A1024] to-[#7C2338] p-8 text-white">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#E6C27A]/10 blur-3xl" />
            <div className="absolute -left-16 bottom-0 h-52 w-52 rounded-full bg-white/5 blur-3xl" />

            <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.3em] text-[#F8D6DC]">
                    Safe Action Center
                </p>

                <h2 className="mt-2 font-serif text-4xl font-bold">
                    What should you do next?
                </h2>

                <p className="mt-4 max-w-2xl text-white/85 leading-7">
                    Finder AI has completed its investigation. These actions help you stay
                    protected before making any payment or signing documents.
                </p>

                {/* Warning Banner */}
                <div className="mt-8 rounded-2xl border border-red-300/20 bg-red-500/10 p-5 backdrop-blur-md">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="mt-1 text-red-300" size={24} />

                        <div>
                            <h3 className="font-semibold text-red-100">
                                Do not send money yet
                            </h3>

                            <p className="mt-1 text-sm leading-6 text-red-50/90">
                                Finder recommends completing physical verification and confirming
                                ownership before making any transfer or paying an agency fee.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Primary Actions */}
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <button className="group rounded-2xl bg-white p-5 text-left text-[#7C2338] transition hover:scale-[1.02]">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8E7EB]">
                            <Download />
                        </div>

                        <h3 className="font-semibold">Download Investigation Report</h3>

                        <p className="mt-1 text-sm text-[#6B5B4D]">
                            Export the complete AI fraud analysis as a PDF.
                        </p>
                    </button>

                    <button className="group rounded-2xl bg-white p-5 text-left text-[#7C2338] transition hover:scale-[1.02]">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8E7EB]">
                            <MapPinned />
                        </div>

                        <h3 className="font-semibold">Request Physical Inspection</h3>

                        <p className="mt-1 text-sm text-[#6B5B4D]">
                            Schedule an in-person property verification before payment.
                        </p>
                    </button>

                    <button className="group rounded-2xl bg-white p-5 text-left text-[#7C2338] transition hover:scale-[1.02]">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8E7EB]">
                            <Heart />
                        </div>

                        <h3 className="font-semibold">Save to Evidence Locker</h3>

                        <p className="mt-1 text-sm text-[#6B5B4D]">
                            Keep this investigation together with future evidence and reports.
                        </p>
                    </button>

                    <button className="group rounded-2xl border border-red-300/20 bg-red-500/10 p-5 text-left transition hover:scale-[1.02]">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/15">
                            <Flag className="text-red-200" />
                        </div>

                        <h3 className="font-semibold text-red-100">
                            Report This Listing
                        </h3>

                        <p className="mt-1 text-sm text-red-100/80">
                            Help protect other renters and buyers by reporting suspicious
                            activity.
                        </p>
                    </button>
                </div>

                {/* Emergency Card */}
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                                <PhoneCall className="text-[#E6C27A]" size={26} />
                            </div>

                            <div>
                                <p className="text-sm text-white/70">
                                    Emergency Fraud Helpline
                                </p>
                                <h3 className="text-xl font-bold">24/7 Safety Team</h3>
                            </div>
                        </div>

                        <button
                            onClick={()=> navigate("/contact")}
                            className="rounded-xl bg-[#E6C27A] px-5 py-3 font-semibold text-[#2A0612] transition hover:brightness-105">


                            Contact Support
                        </button>
                    </div>
                </div>

                {/* Trust Footer */}
                <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/70">
                    <Shield size={16} className="text-emerald-300" />
                    <span>AI Verified Investigation</span>

                    <span className="opacity-40">•</span>

                    <span>Evidence Encrypted</span>

                    <span className="opacity-40">•</span>

                    <span>Privacy Protected</span>
                </div>
            </div>
        </section>
    );
};

export default SafeActions;