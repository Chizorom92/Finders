import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout.jsx";

const contactChannels = [
    {
        label: "General support",
        email: "support@finders.ng",
        description: "Questions about searching, accounts, or using Finders.",
    },
    {
        label: "Report a scam",
        email: "safety@finders.ng",
        description: "Tell us about a suspicious listing, agent, or owner.",
    },
    {
        label: "Partnerships",
        email: "partners@finders.ng",
        description: "Work with Finders to reach more genuine property seekers.",
    },
];

function Contact() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((currentForm) => ({
            ...currentForm,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!form.fullName.trim() || !form.email.trim() || !form.message.trim()) {
            return;
        }

        // Replace this confirmation with the real backend request when the contact API is ready.
        setSubmitted(true);
    };

    return (
        <DashboardLayout activeKey="contact" user={{ name: "Guest User" }}>
            <main className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                    <section>
                        <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-[var(--primary)]">
                            CONTACT FINDERS
                        </p>
                        <h1 className="max-w-xl text-4xl leading-tight tracking-tight text-[var(--text)] sm:text-5xl">
                            We&apos;re here to help.
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-light)] sm:text-lg">
                            Have a question, feedback, or need more information about Finders? We&apos;d love to hear from you.
                        </p>
                        <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--text-light)] sm:text-base">
                            Whether you&apos;re a property seeker looking for assistance, an agent or owner interested in listing properties, or simply want to share suggestions, our team is ready to help.
                        </p>

                        <div className="mt-10 space-y-4" aria-label="Contact channels">
                            {contactChannels.map((channel) => (
                                <a
                                    key={channel.label}
                                    href={`mailto:${channel.email}`}
                                    className="block rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                                >
                                    <p className="text-sm font-semibold text-[var(--text)]">
                                        {channel.label}
                                    </p>
                                    <p className="mt-2 text-sm font-medium text-[var(--primary)]">
                                        {channel.email}
                                    </p>
                                    <p className="mt-2 text-sm leading-6 text-[var(--text-light)]">
                                        {channel.description}
                                    </p>
                                </a>
                            ))}
                        </div>

                        <div className="mt-8 border-t border-[var(--border)] pt-6 text-sm leading-7 text-[var(--text-light)]">
                            <p>
                                <span className="font-semibold text-[var(--text)]">Phone / WhatsApp:</span>{" "}
                                <a className="text-[var(--primary)]" href="tel:+2348123456789">
                                    +234 812 345 6789
                                </a>
                            </p>
                            <p>
                                <span className="font-semibold text-[var(--text)]">Office hours:</span>{" "}
                                Monday – Friday, 9:00 AM – 5:00 PM (WAT)
                            </p>
                        </div>
                    </section>

                    <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-9">
                        {submitted ? (
                            <div className="flex min-h-[26rem] flex-col justify-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface-2)] text-xl text-[var(--primary)]">
                                    ✓
                                </div>
                                <h2 className="mt-6 text-3xl leading-tight tracking-tight text-[var(--text)]">
                                    Thanks, we&apos;ll reply within one business day.
                                </h2>
                                <p className="mt-4 max-w-md text-sm leading-7 text-[var(--text-light)]">
                                    Your message is with the Finders team. For property-specific questions, use the inquiry option on the listing for a faster response from the verified agent or owner.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSubmitted(false);
                                        setForm({ fullName: "", email: "", message: "" });
                                    }}
                                    className="mt-7 w-fit rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-semibold text-[var(--primary)] transition hover:bg-[var(--surface-2)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <>
                                <p className="text-xs font-semibold tracking-[0.18em] text-[var(--primary)]">
                                    GET IN TOUCH
                                </p>
                                <h2 className="mt-3 text-3xl leading-tight tracking-tight text-[var(--text)]">
                                    Send us a message.
                                </h2>
                                <p className="mt-4 text-sm leading-7 text-[var(--text-light)]">
                                    We aim to respond to all inquiries within 24–48 hours.
                                </p>

                                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="text-sm font-semibold text-[var(--text)]" htmlFor="fullName">
                                            Full name
                                        </label>
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            value={form.fullName}
                                            onChange={handleChange}
                                            required
                                            autoComplete="name"
                                            className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/15"
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-semibold text-[var(--text)]" htmlFor="email">
                                            Email address
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            autoComplete="email"
                                            className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/15"
                                            placeholder="you@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-semibold text-[var(--text)]" htmlFor="message">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="mt-2 w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm leading-6 text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/15"
                                            placeholder="How can we help?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-light)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
                                    >
                                        Send message
                                    </button>
                                </form>
                            </>
                        )}
                    </section>
                </div>

                <p className="mt-12 text-center text-sm leading-7 text-[var(--text-light)]">
                    Finders is built for people everywhere. We’re committed to making property search safer and easier no matter where you are in the world.


                </p>
            </main>
        </DashboardLayout>
    );
}

export default Contact;


