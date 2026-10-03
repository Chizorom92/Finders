import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, LockKeyhole, ArrowRight, ShieldCheck } from "lucide-react";

function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await fetch("http://localhost:8085/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const text = await res.text();
            let data;
            try {
                data = JSON.parse(text);
            } catch {
                data = { message: text };
            }

            if (!res.ok) {
                alert(data.message || "Invalid email or password.");
                return;
            }

            if (data.user?.role !== "ADMIN") {
                alert("This account does not have admin access.");
                return;
            }

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            navigate("/admin");
        } catch (err) {
            console.error(err);
            alert("Could not connect to the server.");
        }
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-5 py-10">
            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)] text-white">
                        <ShieldCheck size={28} />
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">
                        Admin sign in
                    </h2>
                    <p className="mt-2 text-sm text-[var(--text-light)]">
                        Restricted access for Finders administrators.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--text)]">
                            Email address
                        </label>
                        <div className="relative">
                            <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]" />
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="admin@example.com"
                                required
                                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 pl-10 pr-4 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="mb-2 block text-sm font-medium text-[var(--text)]">
                            Password
                        </label>
                        <div className="relative">
                            <LockKeyhole size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]" />
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 pl-10 pr-12 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((current) => !current)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-light)] transition hover:text-[var(--primary)]"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--primary-light)] hover:shadow-md"
                    >
                        Sign in
                        <ArrowRight size={17} />
                    </button>
                </form>

                <p className="mt-7 text-center text-sm text-[var(--text-light)]">
                    Not an admin?{" "}
                    <Link to="/login" className="font-semibold text-[var(--primary)] hover:text-[var(--primary-light)]">
                        Back to regular sign in
                    </Link>
                </p>
            </div>
        </main>
    );
}

export default AdminLogin;