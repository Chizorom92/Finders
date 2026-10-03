import { useNavigate } from "react-router-dom";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

const items = [
    "Verify the landlord's identity",
    "Never pay before property verification",
    "Request a virtual or physical viewing",
    "Confirm the property's registration number",
    "Use secure payment methods",
    "Read the tenancy agreement carefully",
];

const SafetyChecklist = () => {
    const navigate = useNavigate();

    return (
        <section className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-8">
            <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#A14B60]/10 p-3">
                    <ShieldCheck className="text-[#A14B60]" size={26} />
                </div>

                <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[var(--primary)]">
                        Safety First
                    </p>

                    <h2 className="font-serif text-3xl font-bold">
                        Rental Safety Checklist
                    </h2>
                </div>
            </div>

            <p className="mt-5 max-w-2xl leading-8 text-[var(--text-light)]">
                Before paying for any international apartment, complete these checks to
                protect yourself from rental scams.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
                {items.map((item) => (
                    <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl bg-[var(--surface-2)] p-4"
                    >
                        <CheckCircle2
                            className="mt-0.5 text-emerald-600"
                            size={20}
                        />
                        <span>{item}</span>
                    </div>
                ))}
            </div>

            <button
                onClick={() => navigate("/safety")}
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#A14B60] px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
                Open Safety Guide
                <ArrowRight size={18} />
            </button>
        </section>
    );
};

export default SafetyChecklist;