import { useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";

const VisaGuideCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="overflow-hidden rounded-[32px] bg-gradient-to-r from-[#5C1324] via-[#7C2338] to-[#A14B60] p-8 text-white">
            <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
                    <BookOpen size={16} />
                    Visa & Immigration Guide
                </div>

                <h2 className="font-serif text-4xl font-bold">
                    Everything you need before relocating abroad
                </h2>

                <p className="mt-4 leading-8 text-white/90">
                    Student visas, tourist entry, work permits, business travel,
                    family relocation and accommodation requirements.
                </p>

                <button
                    onClick={() => navigate("/visa-guide")}
                    className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-[#7C2338]"
                >
                    Open Visa Guide
                    <ArrowRight size={18} />
                </button>
            </div>
        </section>
    );
};

export default VisaGuideCTA;