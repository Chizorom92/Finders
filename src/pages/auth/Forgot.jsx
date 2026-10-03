import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Mail,
    ArrowLeft,
    ArrowRight,
    ShieldCheck,
    CheckCircle2,
} from "lucide-react";

function Forgot() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setSubmitted(true);

        console.log("Password reset requested for:", email);
    };

    return (
        <main className="min-h-screen bg-[var(--background)]">
            <div className="grid min-h-screen lg:grid-cols-2">

                {/* Left Side */}
                <section className="hidden bg-[var(--primary)] lg:flex lg:flex-col lg:justify-between lg:p-12 xl:p-16">

                    <div>
                        <Link
                            to="/"
                            className="text-2xl font-bold tracking-tight text-white"
                        >
                            FINDERS
                        </Link>
                    </div>

                    <div className="max-w-xl">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                            <ShieldCheck size={28} />
                        </div>

                        <h1 className="text-4xl font-semibold leading-tight text-white xl:text-5xl">
                            Your account, protected.
                        </h1>

                        <p className="mt-5 max-w-lg text-base leading-7 text-white/75">
                            Keep your Finders account secure and get back to
                            discovering verified properties with confidence.
                        </p>
                    </div>

                    <p className="text-sm text-white/60">
                        © {new Date().getFullYear()} Finders. Find better. Live safer.
                    </p>

                </section>

                {/* Right Side */}
                <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 lg:px-12">
                    <div className="w-full max-w-md">

                        {/* Mobile Logo */}
                        <div className="mb-10 lg:hidden">
                            <Link
                                to="/"
                                className="text-2xl font-bold tracking-tight text-[var(--primary)]"
                            >
                                FINDERS
                            </Link>
                        </div>

                        {!submitted ? (
                            <>
                                {/* Heading */}
                                <div className="mb-8">
                                    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--primary)]">
                                        Account recovery
                                    </p>

                                    <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)]">
                                        Forgot your password?
                                    </h2>

                                    <p className="mt-3 text-sm leading-6 text-[var(--text-light)]">
                                        Enter the email address associated with
                                        your Finders account and we'll help you
                                        reset your password.
                                    </p>
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-5"
                                >

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
                                                value={email}
                                                onChange={(event) =>
                                                    setEmail(event.target.value)
                                                }
                                                placeholder="you@example.com"
                                                required
                                                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 pl-10 pr-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                                            />
                                        </div>
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--primary-light)] hover:shadow-md"
                                    >
                                        Send reset link
                                        <ArrowRight size={17} />
                                    </button>

                                </form>

                                {/* Back to Login */}
                                <Link
                                    to="/login"
                                    className="mt-7 flex items-center justify-center gap-2 text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--primary-light)]"
                                >
                                    <ArrowLeft size={16} />
                                    Back to login
                                </Link>
                            </>
                        ) : (
                            /* Success State */
                            <div className="text-center">

                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--surface-2)] text-[var(--primary)]">
                                    <CheckCircle2 size={32} />
                                </div>

                                <p className="mt-7 text-sm font-semibold uppercase tracking-wider text-[var(--primary)]">
                                    Check your email
                                </p>

                                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text)]">
                                    Reset link sent
                                </h2>

                                <p className="mt-4 text-sm leading-6 text-[var(--text-light)]">
                                    If an account exists for{" "}
                                    <span className="font-semibold text-[var(--text)]">
                                        {email}
                                    </span>
                                    , you'll receive instructions to reset
                                    your password.
                                </p>

                                <Link
                                    to="/login"
                                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--primary-light)] hover:shadow-md"
                                >
                                    Back to login
                                    <ArrowLeft size={17} />
                                </Link>

                            </div>
                        )}

                    </div>
                </section>
            </div>
        </main>
    );
}

export default Forgot;