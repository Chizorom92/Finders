import Student from "../../assets/visa/student.jpg";
import Tourist from "../../assets/visa/tourist.jpg";
import Business from "../../assets/visa/business.jpg";
import Work from "../../assets/visa/work.jpg";
import Family from "../../assets/visa/family.jpg";

import {
    GraduationCap,
    Plane,
    BriefcaseBusiness,
    Building2,
    Users,
    ArrowRight,
} from "lucide-react";

const visas = [
    {
        title: "Student Visa",
        image: Student,
        icon: GraduationCap,
        description:
            "Find university housing, accommodation proof and student relocation support.",
        countries: "Canada • UK • Australia",
    },
    {
        title: "Tourist / Visitor",
        image: Tourist,
        icon: Plane,
        description:
            "Short-term apartments, holiday rentals and verified vacation stays.",
        countries: "USA • Italy • France",
    },
    {
        title: "Business Travel",
        image: Business,
        icon: BriefcaseBusiness,
        description:
            "Executive apartments and furnished homes for professionals.",
        countries: "USA • UK • UAE",
    },
    {
        title: "Work Visa",
        image: Work,
        icon: Building2,
        description:
            "Long-term rentals near business districts and employment hubs.",
        countries: "Canada • Germany • Australia",
    },
    {
        title: "Family Relocation",
        image: Family,
        icon: Users,
        description:
            "Safe neighbourhoods, schools and spacious family homes.",
        countries: "Canada • Australia • UK",
    },
];

const VisaCategories = () => {
    return (
        <section className="space-y-6">
            <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    RELOCATION PATHS
                </p>

                <h2 className="mt-2 font-serif text-4xl font-bold text-[var(--text)]">
                    Choose your visa journey
                </h2>

                <p className="mt-3 leading-7 text-[var(--text-light)]">
                    Whether you're studying, visiting, working or relocating with your
                    family, Finders guides you to the right housing pathway.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {visas.map((visa) => {
                    const Icon = visa.icon;

                    return (
                        <div
                            key={visa.title}
                            className="group overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={visa.image}
                                    alt={visa.title}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                                <div className="absolute left-4 top-4 rounded-2xl bg-white/90 p-3 text-[var(--primary)] backdrop-blur">
                                    <Icon size={22} />
                                </div>
                            </div>

                            <div className="space-y-3 p-5">
                                <h3 className="text-xl font-bold text-[var(--text)]">
                                    {visa.title}
                                </h3>

                                <p className="text-sm leading-6 text-[var(--text-light)]">
                                    {visa.description}
                                </p>

                                <div className="rounded-xl bg-[var(--surface-2)] px-3 py-2 text-xs font-medium text-[var(--primary)]">
                                    {visa.countries}
                                </div>

                                <button className="flex items-center gap-2 pt-1 font-semibold text-[var(--primary)] transition group-hover:gap-3">
                                    Explore Guide
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default VisaCategories;