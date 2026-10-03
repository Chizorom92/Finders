import { useState } from "react";
import {
    User,
    ShieldCheck,
    Bell,
    Palette,
    Lock,
    Smartphone,
    Mail,
    Phone,
    MapPin,
    CheckCircle2,
    ChevronRight,
    Eye,
    EyeOff,
} from "lucide-react";

import ThemeToggle from "../../components/ui/ThemeToggle";

const tabs = [
    {
        id: "profile",
        label: "Profile",
        icon: User,
    },
    {
        id: "account",
        label: "Account",
        icon: ShieldCheck,
    },
    {
        id: "security",
        label: "Security",
        icon: Lock,
    },
    {
        id: "notifications",
        label: "Notifications",
        icon: Bell,
    },
    {
        id: "appearance",
        label: "Appearance",
        icon: Palette,
    },
];

export default function Settings() {
    const [activeTab, setActiveTab] = useState("profile");

    // Pulls in whoever actually logged in, set by Login.jsx/Register.jsx.
    // Falls back to guest placeholders only if nobody is logged in.
    const [profile, setProfile] = useState(() => {
        const stored = localStorage.getItem("user");
        if (stored) {
            try {
                const parsedUser = JSON.parse(stored);
                return {
                    fullName: parsedUser.fullName || "Guest User",
                    email: parsedUser.email || "guest@example.com",
                    phone: parsedUser.phoneNumber || "+234 800 000 0000",
                    location: "Lagos, Nigeria", // backend doesn't store this yet
                };
            } catch {
                // fall through to default below
            }
        }
        return {
            fullName: "Guest User",
            email: "guest@example.com",
            phone: "+234 800 000 0000",
            location: "Lagos, Nigeria",
        };
    });

    // Same initials logic as the Sidebar - "Inioluwa Soola" -> "IS"
    const initials = profile.fullName
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    const [showPassword, setShowPassword] = useState(false);

    const [preferences, setPreferences] = useState({
        propertyAlerts: true,
        messages: true,
        priceChanges: true,
        securityAlerts: true,
    });

    const updateProfile = (field, value) => {
        setProfile((current) => ({
            ...current,
            [field]: value,
        }));
    };

    const togglePreference = (key) => {
        setPreferences((current) => ({
            ...current,
            [key]: !current[key],
        }));
    };

    const handleSaveProfile = () => {
        // NOTE: no backend endpoint exists yet to persist profile edits
        // (only GET /api/users, no PUT). This currently only logs -
        // add PUT /api/users/{id} on the backend to make this real.
        console.log("Profile updated:", profile);
    };

    return (
        <div className="min-h-full bg-[var(--background)] px-5 py-6 md:px-8 lg:px-10">

            {/* Header */}
            <section className="mb-7">

                <p className="mb-1 text-sm font-medium tracking-wide text-[var(--primary)]">
                    MY SPACE
                </p>

                <h1 className="text-2xl font-semibold tracking-tight text-[var(--text)] md:text-3xl">
                    Settings
                </h1>

                <p className="mt-2 max-w-2xl text-sm text-[var(--text-light)] md:text-base">
                    Manage your Finders account, preferences and security.
                </p>

            </section>

            {/* Settings layout */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">

                {/* Navigation */}
                <aside className="h-fit rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-sm">

                    <p className="mb-2 px-3 py-2 text-[11px] font-semibold tracking-[0.18em] text-[var(--text-light)]">
                        SETTINGS
                    </p>

                    <nav className="space-y-1">

                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            const active = activeTab === tab.id;

                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                                        active
                                            ? "bg-[var(--primary)] text-white shadow-sm"
                                            : "text-[var(--text-light)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]"
                                    }`}
                                >
                                    <Icon size={18} />

                                    <span>{tab.label}</span>

                                    {active && (
                                        <ChevronRight
                                            size={16}
                                            className="ml-auto"
                                        />
                                    )}
                                </button>
                            );
                        })}

                    </nav>

                </aside>

                {/* Content */}
                <main>

                    {/* PROFILE */}
                    {activeTab === "profile" && (
                        <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">

                            <div className="border-b border-[var(--border)] p-5 md:p-6">

                                <h2 className="text-lg font-semibold text-[var(--text)]">
                                    Profile information
                                </h2>

                                <p className="mt-1 text-sm text-[var(--text-light)]">
                                    Update the personal information associated
                                    with your Finders account.
                                </p>

                            </div>

                            <div className="p-5 md:p-6">

                                {/* Profile avatar */}
                                <div className="mb-7 flex items-center gap-4">

                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary)] text-lg font-semibold text-white">
                                        {initials}
                                    </div>

                                    <div>
                                        <p className="font-semibold text-[var(--text)]">
                                            {profile.fullName}
                                        </p>

                                        <p className="mt-1 text-xs text-[var(--text-light)]">
                                            Finders member
                                        </p>
                                    </div>

                                </div>

                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                                    {/* Name */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-[var(--text)]">
                                            Full name
                                        </label>

                                        <div className="relative">

                                            <User
                                                size={17}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
                                            />

                                            <input
                                                value={profile.fullName}
                                                onChange={(event) =>
                                                    updateProfile(
                                                        "fullName",
                                                        event.target.value
                                                    )
                                                }
                                                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] py-3 pl-10 pr-4 text-sm text-[var(--text)] outline-none focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]"
                                            />

                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-[var(--text)]">
                                            Email address
                                        </label>

                                        <div className="relative">

                                            <Mail
                                                size={17}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
                                            />

                                            <input
                                                type="email"
                                                value={profile.email}
                                                onChange={(event) =>
                                                    updateProfile(
                                                        "email",
                                                        event.target.value
                                                    )
                                                }
                                                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] py-3 pl-10 pr-4 text-sm text-[var(--text)] outline-none focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]"
                                            />

                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-[var(--text)]">
                                            Phone number
                                        </label>

                                        <div className="relative">

                                            <Phone
                                                size={17}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
                                            />

                                            <input
                                                value={profile.phone}
                                                onChange={(event) =>
                                                    updateProfile(
                                                        "phone",
                                                        event.target.value
                                                    )
                                                }
                                                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] py-3 pl-10 pr-4 text-sm text-[var(--text)] outline-none focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]"
                                            />

                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-[var(--text)]">
                                            Location
                                        </label>

                                        <div className="relative">

                                            <MapPin
                                                size={17}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
                                            />

                                            <input
                                                value={profile.location}
                                                onChange={(event) =>
                                                    updateProfile(
                                                        "location",
                                                        event.target.value
                                                    )
                                                }
                                                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] py-3 pl-10 pr-4 text-sm text-[var(--text)] outline-none focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]"
                                            />

                                        </div>
                                    </div>

                                </div>

                                <div className="mt-7 flex justify-end">

                                    <button
                                        type="button"
                                        onClick={handleSaveProfile}
                                        className="rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-light)]"
                                    >
                                        Save changes
                                    </button>

                                </div>

                            </div>

                        </section>
                    )}

                    {/* ACCOUNT */}
                    {activeTab === "account" && (
                        <section className="space-y-5">

                            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">

                                <div className="border-b border-[var(--border)] p-5 md:p-6">

                                    <h2 className="text-lg font-semibold text-[var(--text)]">
                                        Account
                                    </h2>

                                    <p className="mt-1 text-sm text-[var(--text-light)]">
                                        View your Finders account information.
                                    </p>

                                </div>

                                <div className="divide-y divide-[var(--border)]">

                                    <div className="flex items-center justify-between gap-4 p-5">

                                        <div>
                                            <p className="text-sm font-medium text-[var(--text)]">
                                                Account type
                                            </p>

                                            <p className="mt-1 text-xs text-[var(--text-light)]">
                                                Personal account
                                            </p>
                                        </div>

                                        <span className="rounded-full bg-[var(--surface-2)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">
                                            Free Plan
                                        </span>

                                    </div>

                                    <div className="flex items-center justify-between gap-4 p-5">

                                        <div>
                                            <p className="text-sm font-medium text-[var(--text)]">
                                                Identity verification
                                            </p>

                                            <p className="mt-1 text-xs text-[var(--text-light)]">
                                                Verification status for your
                                                account.
                                            </p>
                                        </div>

                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--surface-2)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">
                                            <CheckCircle2 size={14} />
                                            Not verified
                                        </span>

                                    </div>

                                    <div className="flex items-center justify-between gap-4 p-5">

                                        <div>
                                            <p className="text-sm font-medium text-[var(--text)]">
                                                Member since
                                            </p>

                                            <p className="mt-1 text-xs text-[var(--text-light)]">
                                                Your Finders account creation
                                                date.
                                            </p>
                                        </div>

                                        <span className="text-sm text-[var(--text-light)]">
                                            2026
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </section>
                    )}

                    {/* SECURITY */}
                    {activeTab === "security" && (
                        <section className="space-y-5">

                            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">

                                <div className="border-b border-[var(--border)] p-5 md:p-6">

                                    <h2 className="text-lg font-semibold text-[var(--text)]">
                                        Security
                                    </h2>

                                    <p className="mt-1 text-sm text-[var(--text-light)]">
                                        Keep your Finders account secure.
                                    </p>

                                </div>

                                <div className="p-5 md:p-6">

                                    <label className="mb-2 block text-sm font-medium text-[var(--text)]">
                                        Current password
                                    </label>

                                    <div className="relative">

                                        <Lock
                                            size={17}
                                            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
                                        />

                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Enter current password"
                                            className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] py-3 pl-10 pr-12 text-sm text-[var(--text)] outline-none focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(
                                                    (current) => !current
                                                )
                                            }
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-light)] hover:text-[var(--text)]"
                                        >
                                            {showPassword ? (
                                                <EyeOff size={17} />
                                            ) : (
                                                <Eye size={17} />
                                            )}
                                        </button>

                                    </div>

                                    <button
                                        type="button"
                                        className="mt-4 rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-light)]"
                                    >
                                        Change password
                                    </button>

                                </div>

                            </div>

                            {/* 2FA */}
                            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm md:p-6">

                                <div className="flex items-start gap-4">

                                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--primary)]">
                                        <Smartphone size={20} />
                                    </div>

                                    <div className="flex-1">

                                        <h3 className="text-sm font-semibold text-[var(--text)]">
                                            Two-factor authentication
                                        </h3>

                                        <p className="mt-1 text-sm leading-6 text-[var(--text-light)]">
                                            Add an extra layer of protection
                                            to your account.
                                        </p>

                                        <button
                                            type="button"
                                            className="mt-4 rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--primary-light)] hover:text-[var(--primary)]"
                                        >
                                            Enable 2FA
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </section>
                    )}

                    {/* NOTIFICATIONS */}
                    {activeTab === "notifications" && (
                        <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">

                            <div className="border-b border-[var(--border)] p-5 md:p-6">

                                <h2 className="text-lg font-semibold text-[var(--text)]">
                                    Notification preferences
                                </h2>

                                <p className="mt-1 text-sm text-[var(--text-light)]">
                                    Choose which updates you'd like to receive.
                                </p>

                            </div>

                            <div className="divide-y divide-[var(--border)]">

                                {[
                                    {
                                        key: "propertyAlerts",
                                        title: "Property alerts",
                                        description:
                                            "Get updates about properties matching your interests.",
                                    },
                                    {
                                        key: "messages",
                                        title: "Messages",
                                        description:
                                            "Receive notifications when an agent or owner sends you a message.",
                                    },
                                    {
                                        key: "priceChanges",
                                        title: "Price changes",
                                        description:
                                            "Get notified when a wishlisted property changes price.",
                                    },
                                    {
                                        key: "securityAlerts",
                                        title: "Security alerts",
                                        description:
                                            "Important account and security notifications.",
                                    },
                                ].map((item) => (

                                    <div
                                        key={item.key}
                                        className="flex items-center justify-between gap-5 p-5 md:p-6"
                                    >

                                        <div>

                                            <p className="text-sm font-semibold text-[var(--text)]">
                                                {item.title}
                                            </p>

                                            <p className="mt-1 max-w-xl text-xs leading-5 text-[var(--text-light)]">
                                                {item.description}
                                            </p>

                                        </div>

                                        <button
                                            type="button"
                                            role="switch"
                                            aria-checked={
                                                preferences[item.key]
                                            }
                                            onClick={() =>
                                                togglePreference(item.key)
                                            }
                                            className={`relative h-6 w-11 flex-shrink-0 rounded-full transition ${
                                                preferences[item.key]
                                                    ? "bg-[var(--primary)]"
                                                    : "bg-[var(--border)]"
                                            }`}
                                        >

                                            <span
                                                className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                                                    preferences[item.key]
                                                        ? "left-6"
                                                        : "left-1"
                                                }`}
                                            />

                                        </button>

                                    </div>

                                ))}

                            </div>

                        </section>
                    )}

                    {/* APPEARANCE */}
                    {activeTab === "appearance" && (
                        <section className="space-y-5">

                            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">

                                <div className="border-b border-[var(--border)] p-5 md:p-6">

                                    <h2 className="text-lg font-semibold text-[var(--text)]">
                                        Appearance
                                    </h2>

                                    <p className="mt-1 text-sm text-[var(--text-light)]">
                                        Customize how Finders looks on your
                                        device.
                                    </p>

                                </div>

                                <div className="flex items-center justify-between gap-5 p-5 md:p-6">

                                    <div className="flex items-start gap-4">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--primary)]">
                                            <Palette size={20} />
                                        </div>

                                        <div>

                                            <h3 className="text-sm font-semibold text-[var(--text)]">
                                                Theme
                                            </h3>

                                            <p className="mt-1 text-xs leading-5 text-[var(--text-light)]">
                                                Switch between light and dark
                                                appearance.
                                            </p>

                                        </div>

                                    </div>

                                    <ThemeToggle />

                                </div>

                            </div>

                        </section>
                    )}

                </main>

            </div>

        </div>
    );
}