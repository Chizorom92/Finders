import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Eye,
    EyeOff,
    Mail,
    LockKeyhole,
    ArrowRight,
    ShieldCheck,
} from "lucide-react";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let res;
        try {
            res = await fetch("http://localhost:8085/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });
        } catch (err) {
            // only real network failures land here
            alert("Could not connect to the server.");
            return;
        }

        // handle JSON or plain-text responses
        const text = await res.text();
        let data;
        try {
            data = JSON.parse(text);
        } catch {
            data = text;
        }

        if (!res.ok) {
            alert(
                typeof data === "string"
                    ? data
                    : data.message || "Invalid email or password."
            );
            return;
        }

        console.log("login response:", data); // check the real shape

        const user = data.user ?? data; // fallback if fields are flat
        const role = user.role ?? data.role;

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(user));

        navigate(role === "ADMIN" ? "/admin" : "/overview");
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
                            Find your next home with confidence.
                        </h1>

                        <p className="mt-5 max-w-lg text-base leading-7 text-white/75">
                            Finders helps you discover verified properties,
                            connect with trusted agents, and make safer
                            housing decisions.
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

                        <div className="mb-8">
                            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--primary)]">
                                Welcome back
                            </p>

                            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)]">
                                Sign in to your account
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-[var(--text-light)]">
                                Access your saved properties, messages, and
                                other Finders features.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">

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

                            {/* Password */}
                            <div>
                                <div className="mb-2 flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-[var(--text)]"
                                    >
                                        Password
                                    </label>

                                    <Link
                                        to="/forgot-password"
                                        className="text-xs font-semibold text-[var(--primary)] transition hover:text-[var(--primary-light)]"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>

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
                                        placeholder="Enter your password"
                                        required
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
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center">
                                <label className="flex cursor-pointer items-center gap-2 text-sm text-[var(--text-light)]">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        checked={formData.remember}
                                        onChange={handleChange}
                                        className="h-4 w-4 rounded border-[var(--border)] accent-[var(--primary)]"
                                    />
                                    Remember me
                                </label>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--primary-light)] hover:shadow-md"
                            >
                                Sign in
                                <ArrowRight size={17} />
                            </button>
                        </form>

                        {/* Register */}
                        <p className="mt-8 text-center text-sm text-[var(--text-light)]">
                            Don't have an account?{" "}
                            <Link
                                to="/register"
                                className="font-semibold text-[var(--primary)] transition hover:text-[var(--primary-light)]"
                            >
                                Create one
                            </Link>
                        </p>

                        {/* Admin */}
                        <p className="mt-3 text-center text-sm text-[var(--text-light)]">
                            Are you an admin?{" "}
                            <Link
                                to="/admin-login"
                                className="font-semibold text-[var(--primary)] transition hover:text-[var(--primary-light)]"
                            >
                                Sign in here
                            </Link>
                        </p>

                    </div>
                </section>
            </div>
        </main>
    );
}

export default Login;