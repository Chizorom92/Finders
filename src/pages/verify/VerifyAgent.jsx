import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout.jsx";
import {
    BadgeCheck,
    Building2,
    CheckCircle2,
    FileText,
    Mail,
    Phone,
    Upload,
    User,
    ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

function VerifyAgent() {
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        agencyName: "",
        email: "",
        phone: "",
        experience: "",
        licenseNumber: "",
        officeAddress: "",
        description: "",
        identityDocument: null,
        agencyDocument: null,
    });

    const handleChange = (event) => {
        const { name, value, files } = event.target;

        if (files) {
            const file = files[0];

            if (!file) return;

            const allowedTypes = [
                "application/pdf",
                "image/jpeg",
                "image/png",
            ];

            const maxSize = 5 * 1024 * 1024; // 5MB

            if (!allowedTypes.includes(file.type)) {
                alert("Please upload a PDF, JPG, or PNG file.");
                event.target.value = "";
                return;
            }

            if (file.size > maxSize) {
                alert("File size must not exceed 5MB.");
                event.target.value = "";
                return;
            }

            setFormData((current) => ({
                ...current,
                [name]: file,
            }));

            return;
        }

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Agent verification request:", formData);

        setSubmitted(true);
    };

    if (submitted) {
        return (
            <DashboardLayout>
                <div className="min-h-full bg-[var(--background)] px-5 py-8 md:px-8 lg:px-10">
                    <div className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center">
                        <div className="w-full rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-12 text-center shadow-sm md:px-10">

                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--surface-2)] text-[var(--primary)]">
                                <CheckCircle2 size={32} />
                            </div>

                        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-[var(--primary)]">
                            Request submitted
                        </p>

                        <h1 className="mt-2 text-2xl font-semibold text-[var(--text)] md:text-3xl">
                            Agent verification request received
                        </h1>

                        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[var(--text-light)]">
                            Your agent verification request has been submitted
                            successfully. The Finders team will review your
                            information and supporting documents.
                        </p>

                        <div className="mt-7 rounded-2xl bg-[var(--surface-2)] p-4 text-left">
                            <p className="text-sm font-semibold text-[var(--text)]">
                                What happens next?
                            </p>

                            <p className="mt-2 text-sm leading-6 text-[var(--text-light)]">
                                Your information and documents will be reviewed
                                before your account receives a verified agent
                                status.
                            </p>
                        </div>

                        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                            <Link
                                to="/overview"
                                className="rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-light)]"
                            >
                                Go to My Space
                            </Link>

                            <button
                                type="button"
                                onClick={() => setSubmitted(false)}
                                className="rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--surface-2)]"
                            >
                                Submit another request
                            </button>
                        </div>

                    </div>
                </div>
            </div>
                </DashboardLayout>
        );

    }

    return (
        <DashboardLayout>
        <div className="min-h-full bg-[var(--background)] px-5 py-6 md:px-8 lg:px-10">

            {/* Header */}
            <section className="mb-8">
                <p className="mb-1 text-sm font-medium tracking-wide text-[var(--primary)]">
                    AGENT VERIFICATION
                </p>

                <h1 className="text-2xl font-semibold tracking-tight text-[var(--text)] md:text-3xl">
                    Verify Agent
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-light)] md:text-base">
                    Submit your professional details and supporting documents
                    to become a verified agent on Finders.
                </p>
            </section>

            <form
                onSubmit={handleSubmit}
                className="mx-auto max-w-4xl space-y-6"
            >

                {/* Personal Information */}
                <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm md:p-6">

                    <div className="mb-6 flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--primary)]">
                            <User size={20} />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-[var(--text)]">
                                Personal information
                            </h2>

                            <p className="mt-1 text-sm text-[var(--text-light)]">
                                Provide the personal details associated with
                                your professional profile.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">

                        {/* Full Name */}
                        <div>
                            <label
                                htmlFor="fullName"
                                className="mb-2 block text-sm font-medium text-[var(--text)]"
                            >
                                Full name
                            </label>

                            <div className="relative">
                                <User
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
                                />

                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    required
                                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3 pl-10 pr-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                                />
                            </div>
                        </div>

                        {/* Agency Name */}
                        <div>
                            <label
                                htmlFor="agencyName"
                                className="mb-2 block text-sm font-medium text-[var(--text)]"
                            >
                                Agency name
                            </label>

                            <div className="relative">
                                <Building2
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
                                />

                                <input
                                    id="agencyName"
                                    name="agencyName"
                                    type="text"
                                    value={formData.agencyName}
                                    onChange={handleChange}
                                    placeholder="e.g. Prime Homes Ltd."
                                    required
                                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3 pl-10 pr-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-[var(--text)]"
                            >
                                Email address
                            </label>

                            <div className="relative">
                                <Mail
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
                                />

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    required
                                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3 pl-10 pr-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label
                                htmlFor="phone"
                                className="mb-2 block text-sm font-medium text-[var(--text)]"
                            >
                                Phone number
                            </label>

                            <div className="relative">
                                <Phone
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
                                />

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="0801 234 5678"
                                    required
                                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3 pl-10 pr-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                                />
                            </div>
                        </div>

                    </div>
                </section>

                {/* Professional Information */}
                <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm md:p-6">

                    <div className="mb-6 flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--primary)]">
                            <BadgeCheck size={20} />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-[var(--text)]">
                                Professional information
                            </h2>

                            <p className="mt-1 text-sm text-[var(--text-light)]">
                                Tell us about your experience and professional
                                credentials.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">

                        {/* Experience */}
                        <div>
                            <label
                                htmlFor="experience"
                                className="mb-2 block text-sm font-medium text-[var(--text)]"
                            >
                                Years of experience
                            </label>

                            <select
                                id="experience"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                required
                                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                            >
                                <option value="">
                                    Select experience
                                </option>
                                <option value="less-than-1">
                                    Less than 1 year
                                </option>
                                <option value="1-3">
                                    1–3 years
                                </option>
                                <option value="4-6">
                                    4–6 years
                                </option>
                                <option value="7-10">
                                    7–10 years
                                </option>
                                <option value="10-plus">
                                    10+ years
                                </option>
                            </select>
                        </div>

                        {/* License */}
                        <div>
                            <label
                                htmlFor="licenseNumber"
                                className="mb-2 block text-sm font-medium text-[var(--text)]"
                            >
                                License / registration number
                            </label>

                            <input
                                id="licenseNumber"
                                name="licenseNumber"
                                type="text"
                                value={formData.licenseNumber}
                                onChange={handleChange}
                                placeholder="Enter license or registration number"
                                required
                                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                            />
                        </div>

                        {/* Office Address */}
                        <div className="md:col-span-2">
                            <label
                                htmlFor="officeAddress"
                                className="mb-2 block text-sm font-medium text-[var(--text)]"
                            >
                                Office address
                            </label>

                            <input
                                id="officeAddress"
                                name="officeAddress"
                                type="text"
                                value={formData.officeAddress}
                                onChange={handleChange}
                                placeholder="Enter your agency or office address"
                                required
                                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                            />
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <label
                                htmlFor="description"
                                className="mb-2 block text-sm font-medium text-[var(--text)]"
                            >
                                Professional description
                            </label>

                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Tell us briefly about your real estate experience and services..."
                                rows={4}
                                required
                                className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                            />
                        </div>

                    </div>
                </section>

                {/* Documents */}
                <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm md:p-6">

                    <div className="mb-6 flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--primary)]">
                            <FileText size={20} />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-[var(--text)]">
                                Supporting documents
                            </h2>

                            <p className="mt-1 text-sm text-[var(--text-light)]">
                                Upload documents that can help us verify your
                                professional identity and agency.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">

                        {/* Identity Document */}
                        <label className="cursor-pointer rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface-2)]/40 p-5 transition hover:border-[var(--primary-light)] hover:bg-[var(--surface-2)]">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)]">
                                <Upload size={19} />
                            </div>

                            <p className="mt-4 text-sm font-semibold text-[var(--text)]">
                                Identity document
                            </p>

                            <p className="mt-1 text-xs leading-5 text-[var(--text-light)]">
                                Upload a valid government-issued identity
                                document.
                            </p>

                            <p className="mt-3 text-xs font-medium text-[var(--primary)]">
                                {formData.identityDocument
                                    ? formData.identityDocument.name
                                    : "Choose a file"}
                            </p>

                            <input
                                type="file"
                                name="identityDocument"
                                accept=".pdf,.jpg,.jpeg,.png"
                                onChange={handleChange}
                                className="hidden"
                            />
                        </label>

                        {/* Agency Document */}
                        <label className="cursor-pointer rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface-2)]/40 p-5 transition hover:border-[var(--primary-light)] hover:bg-[var(--surface-2)]">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)]">
                                <Upload size={19} />
                            </div>

                            <p className="mt-4 text-sm font-semibold text-[var(--text)]">
                                Agency document
                            </p>

                            <p className="mt-1 text-xs leading-5 text-[var(--text-light)]">
                                Upload a document proving your agency or
                                professional registration.
                            </p>

                            <p className="mt-3 text-xs font-medium text-[var(--primary)]">
                                {formData.agencyDocument
                                    ? formData.agencyDocument.name
                                    : "Choose a file"}
                            </p>

                            <input
                                type="file"
                                name="agencyDocument"
                                accept=".pdf,.jpg,.jpeg,.png"
                                onChange={handleChange}
                                className="hidden"
                            />
                        </label>

                    </div>
                </section>

                {/* Verification Notice */}
                <div className="flex gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-4">

                    <ShieldCheck
                        size={20}
                        className="mt-0.5 shrink-0 text-[var(--primary)]"
                    />

                    <p className="text-sm leading-6 text-[var(--text-light)]">
                        Submitting an agent verification request does not
                        guarantee verification. Finders will review the
                        information and supporting documents before assigning
                        a verified agent status.
                    </p>

                </div>

                {/* Submit */}
                <div className="flex justify-end pb-6">
                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--primary-light)] hover:shadow-md"
                    >
                        Submit verification request
                        <BadgeCheck size={18} />
                    </button>
                </div>

            </form>
        </div>
    < /DashboardLayout>
    );
}

export default VerifyAgent;