import {
    ScrollText,
    Home,
    Map,
    FileText,
    BadgeCheck,
    UserSquare,
} from "lucide-react";

const documents = [
    {
        id: "cofo",
        title: "Certificate of Occupancy",
        icon: ScrollText,
        description: "Government land ownership document",
    },
    {
        id: "deed",
        title: "Title Deed",
        icon: Home,
        description: "Property ownership transfer",
    },
    {
        id: "survey",
        title: "Survey Plan",
        icon: Map,
        description: "Land measurement & coordinates",
    },
    {
        id: "tenancy",
        title: "Tenancy Agreement",
        icon: FileText,
        description: "Rental legal agreement",
    },
    {
        id: "receipt",
        title: "Payment Receipt",
        icon: BadgeCheck,
        description: "Proof of transaction",
    },
    {
        id: "id",
        title: "Owner ID",
        icon: UserSquare,
        description: "Identity verification",
    },
];

const DocumentTypeSelector = ({ selectedType, setSelectedType }) => {
    return (
        <section className="rounded-[30px] bg-[var(--surface)] p-6">
            <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
                    Choose Document Type
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold">
                    What are you verifying?
                </h2>

                <p className="mt-2 text-[var(--text-light)]">
                    Selecting the correct document helps Finder AI perform more accurate
                    authenticity checks.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {documents.map((doc) => {
                    const Icon = doc.icon;
                    const active = selectedType === doc.id;

                    return (
                        <button
                            key={doc.id}
                            onClick={() => setSelectedType(doc.id)}
                            className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                                active
                                    ? "border-[#7C2338] bg-[#7C2338] text-white shadow-lg"
                                    : "border-[var(--border)] bg-[var(--surface-2)] hover:border-[#7C2338]"
                            }`}
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                                <Icon size={24} />
                            </div>

                            <h3 className="font-semibold leading-snug">{doc.title}</h3>

                            <p
                                className={`mt-2 text-sm ${
                                    active ? "text-white/80" : "text-[var(--text-light)]"
                                }`}
                            >
                                {doc.description}
                            </p>
                        </button>
                    );
                })}
            </div>
        </section>
    );
};

export default DocumentTypeSelector;