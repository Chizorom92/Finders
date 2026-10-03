import DashboardLayout from "../../layouts/DashboardLayout.jsx";
import { useState } from "react";
import {
    BadgeCheck,
    Building2,
    FileText,
    Mail,
    MapPin,
    Phone,
    Upload,
    User,
    CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

function VerificationRequest() {
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        propertyTitle: "",
        propertyType: "",
        address: "",
        city: "",
        state: "",
        price: "",
        description: "",
        ownerName: "",
        phone: "",
        email: "",
        ownershipDocument: null,
        supportingDocument: null,
        notes: "",
    });

    const handleChange = (event) => {
        const { name, value, files } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Verification request:", formData);

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
                            Verification request received
                        </h1>

                        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[var(--text-light)]">
                            Your property verification request has been
                            submitted successfully. The Finders team will
                            review the information and supporting documents.
                        </p>

                        <div className="mt-7 rounded-2xl bg-[var(--surface-2)] p-4 text-left">
                            <p className="text-sm font-semibold text-[var(--text)]">
                                What happens next?
                            </p>

                            <p className="mt-2 text-sm leading-6 text-[var(--text-light)]">
                                Your request will be reviewed before the
                                property receives a verified status.
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
                    PROPERTY VERIFICATION
                </p>

                <h1 className="text-2xl font-semibold tracking-tight text-[var(--text)] md:text-3xl">
                    Verification Request
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-light)] md:text-base">
                    Submit your property details and supporting documents for
                    verification by Finders.
                </p>
            </section>

            <form
                onSubmit={handleSubmit}
                className="mx-auto max-w-4xl space-y-6"
            >

                {/* Property Information */}
                <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm md:p-6">

                    <div className="mb-6 flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--primary)]">
                            <Building2 size={20} />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-[var(--text)]">
                                Property information
                            </h2>

                            <p className="mt-1 text-sm text-[var(--text-light)]">
                                Tell us about the property you want to verify.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">

                        {/* Property Title */}
                        <div className="md:col-span-2">
                            <label
                                htmlFor="propertyTitle"
                                className="mb-2 block text-sm font-medium text-[var(--text)]"
                            >
                                Property title
                            </label>

                            <input
                                id="propertyTitle"
                                name="propertyTitle"
                                type="text"
                                value={formData.propertyTitle}
                                onChange={handleChange}
                                placeholder="e.g. 3 Bedroom Duplex in Lekki"
                                required
                                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                            />
                        </div>

                        {/* Property Type */}
                        <div>
                            <label
                                htmlFor="propertyType"
                                className="mb-2 block text-sm font-medium text-[var(--text)]"
                            >
                                Property type
                            </label>

                            <select
                                id="propertyType"
                                name="propertyType"
                                value={formData.propertyType}
                                onChange={handleChange}
                                required
                                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                            >
                                <option value="">
                                    Select property type
                                </option>
                                <option value="apartment">Apartment</option>
                                <option value="duplex">Duplex</option>
                                <option value="house">House</option>
                                <option value="bungalow">Bungalow</option>
                                <option value="land">Land</option>
                                <option value="commercial">
                                    Commercial property
                                </option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Price */}
                        <div>
                            <label
                                htmlFor="price"
                                className="mb-2 block text-sm font-medium text-[var(--text)]"
                            >
                                Asking price
                            </label>

                            <input
                                id="price"
                                name="price"
                                type="text"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="e.g. ₦5,000,000"
                                required
                                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                            />
                        </div>

                        {/* Address */}
                        <div className="md:col-span-2">
                            <label
                                htmlFor="address"
                                className="mb-2 block text-sm font-medium text-[var(--text)]"
                            >
                                Property address
                            </label>

                            <div className="relative">
                                <MapPin
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
                                />

                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Enter the full property address"
                                    required
                                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3 pl-10 pr-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                                />
                            </div>
                        </div>

                        {/* City */}
                        <div>
                            <label
                                htmlFor="city"
                                className="mb-2 block text-sm font-medium text-[var(--text)]"
                            >
                                City
                            </label>

                            <input
                                id="city"
                                name="city"
                                type="text"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="e.g. Lagos"
                                required
                                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                            />
                        </div>

                        {/* State */}
                        <div>
                            <label
                                htmlFor="state"
                                className="mb-2 block text-sm font-medium text-[var(--text)]"
                            >
                                State
                            </label>

                            <input
                                id="state"
                                name="state"
                                type="text"
                                value={formData.state}
                                onChange={handleChange}
                                placeholder="e.g. Lagos State"
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
                                Property description
                            </label>

                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Provide a brief description of the property..."
                                rows={4}
                                required
                                className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                            />
                        </div>

                    </div>
                </section>

                {/* Applicant Information */}
                <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm md:p-6">

                    <div className="mb-6 flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--primary)]">
                            <User size={20} />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-[var(--text)]">
                                Your information
                            </h2>

                            <p className="mt-1 text-sm text-[var(--text-light)]">
                                Provide the contact details we can use during
                                the verification process.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">

                        {/* Name */}
                        <div>
                            <label
                                htmlFor="ownerName"
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
                                    id="ownerName"
                                    name="ownerName"
                                    type="text"
                                    value={formData.ownerName}
                                    onChange={handleChange}
                                    placeholder="Your full name"
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

                        {/* Email */}
                        <div className="md:col-span-2">
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
                                Upload documents that can help us verify the
                                property.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">

                        {/* Ownership Document */}
                        <label className="cursor-pointer rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface-2)]/40 p-5 transition hover:border-[var(--primary-light)] hover:bg-[var(--surface-2)]">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)]">
                                <Upload size={19} />
                            </div>

                            <p className="mt-4 text-sm font-semibold text-[var(--text)]">
                                Proof of ownership
                            </p>

                            <p className="mt-1 text-xs leading-5 text-[var(--text-light)]">
                                Upload a relevant ownership document.
                            </p>

                            <p className="mt-3 text-xs font-medium text-[var(--primary)]">
                                {formData.ownershipDocument
                                    ? formData.ownershipDocument.name
                                    : "Choose a file"}
                            </p>

                            <input
                                type="file"
                                name="ownershipDocument"
                                onChange={handleChange}
                                className="hidden"
                            />
                        </label>

                        {/* Supporting Document */}
                        <label className="cursor-pointer rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface-2)]/40 p-5 transition hover:border-[var(--primary-light)] hover:bg-[var(--surface-2)]">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)]">
                                <Upload size={19} />
                            </div>

                            <p className="mt-4 text-sm font-semibold text-[var(--text)]">
                                Supporting document
                            </p>

                            <p className="mt-1 text-xs leading-5 text-[var(--text-light)]">
                                Upload any additional relevant document.
                            </p>

                            <p className="mt-3 text-xs font-medium text-[var(--primary)]">
                                {formData.supportingDocument
                                    ? formData.supportingDocument.name
                                    : "Choose a file"}
                            </p>

                            <input
                                type="file"
                                name="supportingDocument"
                                onChange={handleChange}
                                className="hidden"
                            />
                        </label>

                    </div>
                </section>

                {/* Additional Notes */}
                <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm md:p-6">

                    <label
                        htmlFor="notes"
                        className="mb-2 block text-sm font-medium text-[var(--text)]"
                    >
                        Additional notes
                    </label>

                    <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Is there anything else you want the verification team to know?"
                        rows={4}
                        className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                    />

                </section>

                {/* Notice */}
                <div className="flex gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-4">

                    <BadgeCheck
                        size={20}
                        className="mt-0.5 shrink-0 text-[var(--primary)]"
                    />

                    <p className="text-sm leading-6 text-[var(--text-light)]">
                        Submitting a verification request does not guarantee
                        verification. Finders will review the information and
                        supporting documents before assigning a verified
                        status.
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
        </DashboardLayout>
    );
}

export default VerificationRequest;