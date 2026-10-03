import {
    Building2,
    Heart,
    MessageSquare,
    Bell,
    ArrowUpRight,
    ShieldCheck,
    Search,
    Flag,
} from "lucide-react";

import { Link } from "react-router-dom";

import { dashboardStats, recentActivity } from "./mockData";
import propertyData from "../../components/property/propertyData.jsx";
import PropertyCard from "../../components/property/PropertyCard.jsx";
import { useMySpace } from "../../context/MySpaceContext";

export default function Overview() {
    const { unreadNotificationCount } = useMySpace();

    const statCards = [
        {
            label: "My Properties",
            value: dashboardStats.properties,
            icon: Building2,
            path: "/myProperties",
        },
        {
            label: "Wishlist",
            value: dashboardStats.wishlist,
            icon: Heart,
            path: "/wishlist",
        },
        {
            label: "Messages",
            value: dashboardStats.messages,
            icon: MessageSquare,
            path: "/messages",
        },
        {
            label: "Notifications",
            value: unreadNotificationCount,
            icon: Bell,
            path: "/notifications",
        },
    ];

    const activityIcons = {
        verification: ShieldCheck,
        message: MessageSquare,
        wishlist: Heart,
    };

    return (
        <div className="min-h-full bg-[var(--background)] px-5 py-6 md:px-8 lg:px-10">

            {/* Header */}
            <section className="mb-8">
                <p className="mb-1 text-sm font-medium text-[var(--primary)]">
                    MY SPACE
                </p>

                <h1 className="text-2xl font-semibold tracking-tight text-[var(--text)] md:text-3xl">
                    Welcome back 👋
                </h1>

                <p className="mt-2 text-sm text-[var(--text-light)] md:text-base">
                    Here's what's happening with your Finders account.
                </p>
            </section>

            {/* Statistics */}
            <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                {statCards.map((card) => {
                    const Icon = card.icon;

                    return (
                        <Link
                            key={card.label}
                            to={card.path}
                            className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <div className="flex items-start justify-between">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--primary)]">
                                    <Icon size={20} />
                                </div>

                                <ArrowUpRight
                                    size={18}
                                    className="text-[var(--text-light)] transition group-hover:text-[var(--primary)]"
                                />

                            </div>

                            <div className="mt-5">

                                <p className="text-sm text-[var(--text-light)]">
                                    {card.label}
                                </p>

                                <p className="mt-1 text-2xl font-semibold text-[var(--text)]">
                                    {card.value}
                                </p>

                            </div>
                        </Link>
                    );
                })}

            </section>

            {/* Main Content */}
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.8fr)]">

                {/* Recent Properties */}
                <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm md:p-6">

                    <div className="mb-5 flex items-center justify-between gap-4">

                        <div>
                            <h2 className="text-lg font-semibold text-[var(--text)]">
                                Recent Properties
                            </h2>

                            <p className="mt-1 text-sm text-[var(--text-light)]">
                                Properties you've recently interacted with.
                            </p>
                        </div>

                        <Link
                            to="/search"
                            className="hidden text-sm font-medium text-[var(--primary)] hover:underline sm:block"
                        >
                            View all
                        </Link>

                    </div>

                    {/* Property Cards */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">

                        {propertyData.slice(0, 3).map((property) => (
                            <PropertyCard
                                key={property.id}
                                property={property}
                            />
                        ))}

                    </div>

                </section>

                {/* Right Column */}
                <div className="space-y-6">

                    {/* Quick Actions */}
                    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">

                        <h2 className="text-lg font-semibold text-[var(--text)]">
                            Quick Actions
                        </h2>

                        <div className="mt-4 space-y-3">

                            {/* Find Property */}
                            <Link
                                to="/search"
                                className="flex items-center gap-3 rounded-xl border border-[var(--border)] p-3 transition hover:border-[var(--primary-light)] hover:bg-[var(--surface-2)]"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)] text-white">
                                    <Search size={18} />
                                </span>

                                <div>
                                    <p className="text-sm font-medium text-[var(--text)]">
                                        Find a Property
                                    </p>

                                    <p className="text-xs text-[var(--text-light)]">
                                        Explore verified homes
                                    </p>
                                </div>
                            </Link>

                            {/* Verify Property */}
                            <Link
                                to="/verify"
                                className="flex items-center gap-3 rounded-xl border border-[var(--border)] p-3 transition hover:border-[var(--primary-light)] hover:bg-[var(--surface-2)]"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary-light)] text-white">
                                    <ShieldCheck size={18} />
                                </span>

                                <div>
                                    <p className="text-sm font-medium text-[var(--text)]">
                                        Verify a Property
                                    </p>

                                    <p className="text-xs text-[var(--text-light)]">
                                        Check before you pay
                                    </p>
                                </div>
                            </Link>

                            {/* Report Scam */}
                            <Link
                                to="/report"
                                className="flex items-center gap-3 rounded-xl border border-[var(--border)] p-3 transition hover:border-[var(--accent)] hover:bg-[var(--surface-2)]"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] text-white">
                                    <Flag size={18} />
                                </span>

                                <div>
                                    <p className="text-sm font-medium text-[var(--text)]">
                                        Report a Scam
                                    </p>

                                    <p className="text-xs text-[var(--text-light)]">
                                        Help keep Finders safe
                                    </p>
                                </div>
                            </Link>

                        </div>

                    </section>

                    {/* Recent Activity */}
                    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">

                        <div className="mb-5">

                            <h2 className="text-lg font-semibold text-[var(--text)]">
                                Recent Activity
                            </h2>

                            <p className="mt-1 text-sm text-[var(--text-light)]">
                                Your latest account activity.
                            </p>

                        </div>

                        <div className="space-y-5">

                            {recentActivity.map((activity) => {
                                const Icon =
                                    activityIcons[activity.type] ||
                                    ShieldCheck;

                                return (
                                    <div
                                        key={activity.id}
                                        className="flex gap-3"
                                    >

                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--surface-2)] text-[var(--primary)]">
                                            <Icon size={16} />
                                        </div>

                                        <div>

                                            <p className="text-sm font-medium text-[var(--text)]">
                                                {activity.title}
                                            </p>

                                            <p className="mt-1 text-xs text-[var(--text-light)]">
                                                {activity.time}
                                            </p>

                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                    </section>

                </div>

            </div>

        </div>
    );
}