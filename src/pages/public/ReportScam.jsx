import { useState } from "react";
import {
    AlertTriangle,
    Building2,
    CheckCircle2,
    FileText,
    Mail,
    Phone,
    Upload,
    User,
} from "lucide-react";
import DashboardLayout from "../../layouts/DashboardLayout.jsx";
import { Link } from "react-router-dom";

function ReportScam() {
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        reportType: "",
        propertyName: "",
        agentName: "",
        email: "",
        phone: "",
        description: "",
        evidence: null,
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

        console.log("Scam report:", formData);

        setSubmitted(true);
    };

    if (submitted) {
        <DashboardLayout>
        return (
            <div className="min-h-full bg-[var(--background)] px-5 py-8 md:px-8 lg:px-10">
                <div className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center">
                    <div className="w-full rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-12 text-center shadow-sm md:px-10">

                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--surface-2)] text-[var(--primary)]">
                            <CheckCircle2 size={32} />
                        </div>

                        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-[var(--primary)]">
                            Report received
                        </p>

                        <h1 className="mt-2 text-2xl font-semibold text-[var(--text)] md:text-3xl">
                            Thank you for reporting this
                        </h1>

                        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[var(--text-light)]">
                            Your report has been submitted to the Finders
                            safety team. We will review the information and
                            take appropriate action based on our findings.
                        </p>

                        <div className="mt-7 rounded-2xl bg-[var(--surface-2)] p-4 text-left">
                            <p className="text-sm font-semibold text-[var(--text)]">
                                Please stay safe
                            </p>

                            <p className="mt-2 text-sm leading-6 text-[var(--text-light)]">
                                Do not send additional money or personal
                                information if you believe you are dealing
                                with a suspicious listing or individual.
                            </p>
                        </div>

                        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                            <Link
                                to="/"
                                className="rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-light)]"
                            >
                                Back to Finders
                            </Link>

                            <button
                                type="button"
                                onClick={() => setSubmitted(false)}
                                className="rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--surface-2)]"
                            >
                                Submit another report
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </DashboardLayout>
    }

    return (
        <DashboardLayout>
        <div className="min-h-full bg-[var(--background)] px-5 py-6 md:px-8 lg:px-10">

            {/* Header */}
            <section className="mb-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--primary)]">
                    <AlertTriangle size={24} />
                </div>

                <p className="mb-1 text-sm font-medium tracking-wide text-[var(--primary)]">
                    FINDERS SAFETY
                </p>

                <h1 className="text-2xl font-semibold tracking-tight text-[var(--text)] md:text-3xl">
                    Report a Scam
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-light)] md:text-base">
                    Think you've encountered a suspicious property, agent, or
                    housing transaction? Tell us what happened so we can
                    investigate.
                </p>
            </section>

            <form
                onSubmit={handleSubmit}
                className="mx-auto max-w-4xl space-y-6"
            >

                {/* Report Details */}
                <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm md:p-6">

                    <div className="mb-6 flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--primary)]">
                            <AlertTriangle size={20} />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-[var(--text)]">
                                What are you reporting?
                            </h2>

                            <p className="mt-1 text-sm text-[var(--text-light)]">
                                Give us some information about the issue.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">

                        {/* Report Type */}
                        <div className="md:col-span-2">
                            <label
                                htmlFor="reportType"
                                className="mb-2 block text-sm font-medium text-[var(--text)]"
                            >
                                Report type
                            </label>

                            <select
                                id="reportType"
                                name="reportType"
                                value={formData.reportType}
                                onChange={handleChange}
                                required
                                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                            >
                                <option value="">
                                    Select an issue
                                </option>

                                <option value="fake-listing">
                                    Fake or misleading property listing
                                </option>

                                <option value="fake-agent">
                                    Fake or suspicious agent
                                </option>

                                <option value="payment-scam">
                                    Payment or money scam
                                </option>

                                <option value="identity-fraud">
                                    Identity fraud
                                </option>

                                <option value="property-fraud">
                                    Property ownership fraud
                                </option>

                                <option value="other">
                                    Other scam or suspicious activity
                                </option>
                            </select>
                        </div>

                        {/* Property */}
                        <div>
                            <label
                                htmlFor="propertyName"
                                className="mb-2 block text-sm font-medium text-[var(--text)]"
                            >
                                Property / listing
                            </label>

                            <div className="relative">
                                <Building2
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
                                />

                                <input
                                    id="propertyName"
                                    name="propertyName"
                                    type="text"
                                    value={formData.propertyName}
                                    onChange={handleChange}
                                    placeholder="Property or listing name"
                                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3 pl-10 pr-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                                />
                            </div>
                        </div>

                        {/* Agent */}
                        <div>
                            <label
                                htmlFor="agentName"
                                className="mb-2 block text-sm font-medium text-[var(--text)]"
                            >
                                Agent / person involved
                            </label>

                            <div className="relative">
                                <User
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
                                />

                                <input
                                    id="agentName"
                                    name="agentName"
                                    type="text"
                                    value={formData.agentName}
                                    onChange={handleChange}
                                    placeholder="Name of agent or person"
                                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3 pl-10 pr-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <label
                                htmlFor="description"
                                className="mb-2 block text-sm font-medium text-[var(--text)]"
                            >
                                What happened?
                            </label>

                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Describe what happened and why you believe it may be a scam..."
                                rows={6}
                                required
                                className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                            />
                        </div>

                    </div>
                </section>

                {/* Contact Information */}
                <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm md:p-6">

                    <div className="mb-6 flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--primary)]">
                            <Mail size={20} />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-[var(--text)]">
                                Your contact information
                            </h2>

                            <p className="mt-1 text-sm text-[var(--text-light)]">
                                Give us a way to contact you if we need more
                                information.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">

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

                {/* Evidence */}
                <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm md:p-6">

                    <div className="mb-6 flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--primary)]">
                            <FileText size={20} />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-[var(--text)]">
                                Supporting evidence
                            </h2>

                            <p className="mt-1 text-sm text-[var(--text-light)]">
                                Upload a screenshot, document, or other
                                evidence that may help us investigate.
                            </p>
                        </div>
                    </div>

                    <label className="block cursor-pointer rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface-2)]/40 p-6 transition hover:border-[var(--primary-light)] hover:bg-[var(--surface-2)]">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)]">
                            <Upload size={20} />
                        </div>

                        <p className="mt-4 text-sm font-semibold text-[var(--text)]">
                            Upload evidence
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[var(--text-light)]">
                            Add a screenshot or document that supports your
                            report.
                        </p>

                        <p className="mt-3 text-xs font-medium text-[var(--primary)]">
                            {formData.evidence
                                ? formData.evidence.name
                                : "Choose a file"}
                        </p>

                        <input
                            type="file"
                            name="evidence"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleChange}
                            className="hidden"
                        />
                    </label>
                </section>

                {/* Safety Notice */}
                <div className="flex gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-4">

                    <AlertTriangle
                        size={20}
                        className="mt-0.5 shrink-0 text-[var(--primary)]"
                    />

                    <p className="text-sm leading-6 text-[var(--text-light)]">
                        Only submit information that you believe is accurate.
                        Do not include passwords, PINs, or other highly
                        sensitive account credentials in your report.
                    </p>

                </div>

                {/* Submit */}
                <div className="flex justify-end pb-6">
                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--primary-light)] hover:shadow-md"
                    >
                        Submit report
                        <AlertTriangle size={18} />
                    </button>
                </div>

            </form>
        </div>
        </DashboardLayout>
    );
}

export default ReportScam;