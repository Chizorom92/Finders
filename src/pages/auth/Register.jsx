import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Eye,
    EyeOff,
    User,
    Mail,
    Phone,
    LockKeyhole,
    ArrowRight,
    ShieldCheck,
} from "lucide-react";

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (!formData.terms) {
            alert("Please accept the Terms and Conditions.");
            return;
        }

        try {
            const res = await fetch("http://localhost:8085/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    phoneNumber: formData.phone,
                    password: formData.password,
                    role: "TENANT",
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message || data || "Registration failed.");
                return;
            }

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            navigate("/");
        } catch (err) {
            console.error(err);
            alert("Could not connect to the server.");
        }
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
                            Find a home you can trust.
                        </h1>

                        <p className="mt-5 max-w-lg text-base leading-7 text-white/75">
                            Create your Finders account and discover verified
                            properties, trusted agents, and safer housing
                            opportunities.
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
                        <div className="mb-8 lg:hidden">
                            <Link
                                to="/"
                                className="text-2xl font-bold tracking-tight text-[var(--primary)]"
                            >
                                FINDERS
                            </Link>
                        </div>

                        {/* Heading */}
                        <div className="mb-7">
                            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--primary)]">
                                Get started
                            </p>

                            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)]">
                                Create your account
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-[var(--text-light)]">
                                Join Finders and start finding properties with
                                greater confidence.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >

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
                                        placeholder="Enter your full name"
                                        required
                                        className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 pl-10 pr-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
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
                                        className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 pl-10 pr-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
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
                                        className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 pl-10 pr-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-medium text-[var(--text)]"
                                >
                                    Password
                                </label>

                                <div className="relative">
                                    <LockKeyhole
                                        size={18}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
                                    />

                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Create a password"
                                        required
                                        minLength={8}
                                        className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 pl-10 pr-12 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword((current) => !current)
                                        }
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-light)] transition hover:text-[var(--primary)]"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>

                                <p className="mt-1.5 text-xs text-[var(--text-light)]">
                                    Password must be at least 8 characters.
                                </p>
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="mb-2 block text-sm font-medium text-[var(--text)]"
                                >
                                    Confirm password
                                </label>

                                <div className="relative">
                                    <LockKeyhole
                                        size={18}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
                                    />

                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm your password"
                                        required
                                        className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 pl-10 pr-12 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                (current) => !current
                                            )
                                        }
                                        aria-label={
                                            showConfirmPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-light)] transition hover:text-[var(--primary)]"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Terms */}
                            <div className="pt-1">
                                <label className="flex cursor-pointer items-start gap-3 text-sm text-[var(--text-light)]">
                                    <input
                                        type="checkbox"
                                        name="terms"
                                        checked={formData.terms}
                                        onChange={handleChange}
                                        required
                                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-[var(--border)] accent-[var(--primary)]"
                                    />

                                    <span className="leading-5">
                                        I agree to the{" "}
                                        <Link
                                            to="/"
                                            className="font-semibold text-[var(--primary)] hover:text-[var(--primary-light)]"
                                        >
                                            Terms and Conditions
                                        </Link>{" "}
                                        and Finders' privacy practices.
                                    </span>
                                </label>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--primary-light)] hover:shadow-md"
                            >
                                Create account
                                <ArrowRight size={17} />
                            </button>

                        </form>

                        {/* Login */}
                        <p className="mt-7 text-center text-sm text-[var(--text-light)]">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="font-semibold text-[var(--primary)] transition hover:text-[var(--primary-light)]"
                            >
                                Sign in
                            </Link>
                        </p>

                    </div>
                </section>
            </div>
        </main>
    );
}

export default Register;