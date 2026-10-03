import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import {
    FaInstagram,
    FaFacebookF,
    FaXTwitter,
    FaLinkedinIn,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer
            className="mt-24 border-t"
            style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
            }}
        >
            <div className="mx-auto max-w-7xl px-8 py-16">
                <div className="grid gap-12 lg:grid-cols-12">
                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <h2
                            className="font-serif text-4xl font-bold"
                            style={{ color: "var(--primary)" }}
                        >
                            Finders
                        </h2>

                        <p
                            className="mt-5 leading-8"
                            style={{ color: "var(--text-light)" }}
                        >
                            Nigeria's transparent housing platform connecting people with
                            verified homes, trusted agents and scam-free property experiences.
                        </p>

                        <div className="mt-8 flex gap-3">
                            {[
                                FaInstagram,
                                FaFacebookF,
                                FaXTwitter,
                                FaLinkedinIn,
                            ].map((Icon, index) => (
                                <button
                                    key={index}
                                    className="flex h-11 w-11 items-center justify-center rounded-2xl transition hover:scale-105"
                                    style={{ background: "var(--surface-2)" }}
                                >
                                    <Icon size={18} color="var(--primary)" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Platform */}
                    <div className="lg:col-span-2">
                        <h3
                            className="mb-5 text-lg font-bold"
                            style={{ color: "var(--text)" }}
                        >
                            Platform
                        </h3>

                        <div
                            className="flex flex-col gap-3"
                            style={{ color: "var(--text-light)" }}
                        >
                            <Link to="/search">Buy</Link>
                            <Link to="/search">Rent</Link>
                            <Link to="/search">Commercial</Link>
                            <Link to="/map">Property Map</Link>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-2">
                        <h3
                            className="mb-5 text-lg font-bold"
                            style={{ color: "var(--text)" }}
                        >
                            Company
                        </h3>

                        <div
                            className="flex flex-col gap-3"
                            style={{ color: "var(--text-light)" }}
                        >
                            <Link to="/about">About</Link>
                            <Link to="/safety">Safety</Link>
                            <Link to="/verify">Verify</Link>
                            <Link to="/report">Report Scam</Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-4">
                        <h3
                            className="mb-5 text-lg font-bold"
                            style={{ color: "var(--text)" }}
                        >
                            Stay Connected
                        </h3>

                        <div className="mb-6 space-y-4">
                            <div className="flex items-center gap-3">
                                <Mail size={18} color="var(--primary)" />
                                <span style={{ color: "var(--text-light)" }}>
                  hello@finders.com
                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={18} color="var(--primary)" />
                                <span style={{ color: "var(--text-light)" }}>
                  +234 800 FINDERS
                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <MapPin size={18} color="var(--primary)" />
                                <span style={{ color: "var(--text-light)" }}>
                  Abuja • Lagos • Enugu
                </span>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <p
                                className="mb-3 font-medium"
                                style={{ color: "var(--text)" }}
                            >
                                Get new verified listings
                            </p>

                            <div className="flex overflow-hidden rounded-2xl border">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 outline-none"
                                    style={{
                                        background: "var(--surface)",
                                        color: "var(--text)",
                                    }}
                                />

                                <button
                                    className="px-5 transition hover:opacity-90"
                                    style={{ background: "var(--primary)" }}
                                >
                                    <ArrowRight size={20} color="white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className="mt-14 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm lg:flex-row"
                    style={{
                        borderColor: "var(--border)",
                        color: "var(--text-light)",
                    }}
                >
                    <p>© 2026 Finders. All rights reserved.</p>

                    <div className="flex gap-6">
                        <Link to="/about">Privacy</Link>
                        <Link to="/about">Terms</Link>
                        <Link to="/safety">Safety Guide</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;