import { useMemo, useState } from "react";
import {
    Bell,
    BadgeCheck,
    CheckCheck,
    MessageSquare,
    Trash2,
    Search,
    WalletCards,
    Settings,
    X,
} from "lucide-react";

import { useMySpace } from "../../context/MySpaceContext";

const notificationTypes = [
    {
        key: "all",
        label: "All",
    },
    {
        key: "unread",
        label: "Unread",
    },
    {
        key: "verification",
        label: "Verification",
    },
    {
        key: "message",
        label: "Messages",
    },
    {
        key: "price",
        label: "Property",
    },
];

const notificationConfig = {
    verification: {
        icon: BadgeCheck,
        label: "Verification",
        iconClass: "bg-[var(--surface-2)] text-[var(--primary)]",
    },

    message: {
        icon: MessageSquare,
        label: "Message",
        iconClass: "bg-[var(--surface-2)] text-[var(--primary)]",
    },

    price: {
        icon: WalletCards,
        label: "Property update",
        iconClass: "bg-amber-100 text-amber-700",
    },

    system: {
        icon: Settings,
        label: "System",
        iconClass: "bg-slate-100 text-slate-600",
    },
};

export default function Notifications() {
    const {
        notifications,
        unreadNotificationCount,
        markNotificationRead,
        markAllNotificationsRead,
        removeNotification,
        clearNotifications,
    } = useMySpace();

    const [activeFilter, setActiveFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredNotifications = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        return notifications.filter((notification) => {
            const type = notification.type || "system";

            const matchesSearch =
                !query ||
                notification.text?.toLowerCase().includes(query) ||
                type.toLowerCase().includes(query);

            let matchesFilter = true;

            if (activeFilter === "unread") {
                matchesFilter = !notification.read;
            } else if (activeFilter !== "all") {
                matchesFilter = type === activeFilter;
            }

            return matchesSearch && matchesFilter;
        });
    }, [notifications, activeFilter, searchQuery]);

    return (
        <div className="min-h-full bg-[var(--background)] px-5 py-6 md:px-8 lg:px-10">

            {/* Header */}
            <section className="mb-7">

                <p className="mb-1 text-sm font-medium tracking-wide text-[var(--primary)]">
                    MY SPACE
                </p>

                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight text-[var(--text)] md:text-3xl">
                            Notifications
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm text-[var(--text-light)] md:text-base">
                            Stay updated about your properties, messages,
                            verification and account.
                        </p>
                    </div>

                    {notifications.length > 0 && (
                        <button
                            type="button"
                            onClick={clearNotifications}
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--text-light)] transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                        >
                            <Trash2 size={16} />
                            Clear all
                        </button>
                    )}

                </div>

            </section>

            {/* Summary */}
            <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

                {/* Total */}
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">

                    <div className="flex items-center gap-4">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--primary)]">
                            <Bell size={20} />
                        </div>

                        <div>
                            <p className="text-sm text-[var(--text-light)]">
                                Total notifications
                            </p>

                            <p className="mt-1 text-2xl font-semibold text-[var(--text)]">
                                {notifications.length}
                            </p>
                        </div>

                    </div>

                </div>

                {/* Unread */}
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">

                    <div className="flex items-center gap-4">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)] text-white">
                            <CheckCheck size={20} />
                        </div>

                        <div>
                            <p className="text-sm text-[var(--text-light)]">
                                Unread
                            </p>

                            <p className="mt-1 text-2xl font-semibold text-[var(--text)]">
                                {unreadNotificationCount}
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            {/* Controls */}
            <section className="mb-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm md:p-5">

                {/* Search */}
                <div className="relative">

                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
                    />

                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(event) =>
                            setSearchQuery(event.target.value)
                        }
                        placeholder="Search notifications..."
                        className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] py-3 pl-10 pr-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]"
                    />

                </div>

                {/* Filters */}
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex gap-2 overflow-x-auto pb-1">

                        {notificationTypes.map((filter) => {

                            const isActive =
                                activeFilter === filter.key;

                            return (
                                <button
                                    key={filter.key}
                                    type="button"
                                    onClick={() =>
                                        setActiveFilter(filter.key)
                                    }
                                    className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition ${
                                        isActive
                                            ? "bg-[var(--primary)] text-white shadow-sm"
                                            : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text-light)] hover:border-[var(--primary-light)] hover:text-[var(--primary)]"
                                    }`}
                                >
                                    {filter.label}
                                </button>
                            );
                        })}

                    </div>

                    {unreadNotificationCount > 0 && (
                        <button
                            type="button"
                            onClick={markAllNotificationsRead}
                            className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-[var(--primary)] transition hover:bg-[var(--surface-2)]"
                        >
                            <CheckCheck size={16} />
                            Mark all as read
                        </button>
                    )}

                </div>

            </section>

            {/* Notification List */}
            <section>

                <div className="mb-4 flex items-center justify-between">

                    <div>
                        <h2 className="text-lg font-semibold text-[var(--text)]">
                            Recent Notifications
                        </h2>

                        <p className="mt-1 text-sm text-[var(--text-light)]">
                            {filteredNotifications.length}{" "}
                            {filteredNotifications.length === 1
                                ? "notification"
                                : "notifications"}
                        </p>
                    </div>

                </div>

                {filteredNotifications.length > 0 ? (

                    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">

                        {filteredNotifications.map(
                            (notification, index) => {

                                const type =
                                    notification.type || "system";

                                const config =
                                    notificationConfig[type] ||
                                    notificationConfig.system;

                                const Icon = config.icon;

                                return (
                                    <article
                                        key={notification.id}
                                        onClick={() =>
                                            markNotificationRead(
                                                notification.id
                                            )
                                        }
                                        className={`group relative flex gap-4 p-5 transition ${
                                            index !==
                                            filteredNotifications.length - 1
                                                ? "border-b border-[var(--border)]"
                                                : ""
                                        } ${
                                            !notification.read
                                                ? "bg-[var(--surface-2)]/40"
                                                : "hover:bg-[var(--surface-2)]"
                                        }`}
                                    >

                                        {/* Unread Indicator */}
                                        {!notification.read && (
                                            <span className="absolute left-0 top-0 h-full w-1 bg-[var(--primary)]" />
                                        )}

                                        {/* Icon */}
                                        <div
                                            className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${config.iconClass}`}
                                        >
                                            <Icon size={20} />
                                        </div>

                                        {/* Content */}
                                        <div className="min-w-0 flex-1">

                                            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">

                                                <div className="flex items-center gap-2">

                                                    <span className="text-sm font-semibold text-[var(--text)]">
                                                        {config.label}
                                                    </span>

                                                    {!notification.read && (
                                                        <span className="rounded-full bg-[var(--primary)] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white">
                                                            New
                                                        </span>
                                                    )}

                                                </div>

                                                <span className="text-[11px] text-[var(--text-light)]">
                                                    {notification.time}
                                                </span>

                                            </div>

                                            <p className="mt-2 text-sm leading-6 text-[var(--text-light)]">
                                                {notification.text}
                                            </p>

                                        </div>

                                        {/* Actions */}
                                        <div className="flex flex-shrink-0 items-start gap-1 opacity-100 sm:opacity-0 sm:transition group-hover:opacity-100">

                                            {!notification.read && (
                                                <button
                                                    type="button"
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        markNotificationRead(
                                                            notification.id
                                                        );
                                                    }}
                                                    title="Mark as read"
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--text-light)] transition hover:bg-[var(--surface-2)] hover:text-[var(--primary)]"
                                                >
                                                    <CheckCheck size={16} />
                                                </button>
                                            )}

                                            <button
                                                type="button"
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    removeNotification(
                                                        notification.id
                                                    );
                                                }}
                                                title="Delete notification"
                                                className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--text-light)] transition hover:bg-red-50 hover:text-red-600"
                                            >
                                                <X size={16} />
                                            </button>

                                        </div>

                                    </article>
                                );
                            }
                        )}

                    </div>

                ) : (

                    /* Empty State */
                    <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)] px-6 py-16 text-center">

                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface-2)] text-[var(--primary)]">
                            <Bell size={25} />
                        </div>

                        <h3 className="mt-5 text-lg font-semibold text-[var(--text)]">
                            You're all caught up
                        </h3>

                        <p className="mx-auto mt-2 max-w-md text-sm text-[var(--text-light)]">
                            {searchQuery
                                ? "No notifications match your search."
                                : activeFilter !== "all"
                                    ? "There are no notifications in this category."
                                    : "You don't have any notifications right now."}
                        </p>

                        {(searchQuery ||
                            activeFilter !== "all") && (
                            <button
                                type="button"
                                onClick={() => {
                                    setSearchQuery("");
                                    setActiveFilter("all");
                                }}
                                className="mt-5 rounded-xl bg-[var(--primary)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--primary-light)]"
                            >
                                View all notifications
                            </button>
                        )}

                    </div>
                )}

            </section>

        </div>
    );
}