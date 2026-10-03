import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import finderIcon from "../../assets/logo/finder-icon/Logo/Primary.svg";
import finderLight from "../../assets/logo/finder-logo-light/Logo/Light Banner.svg";
import finderDark from "../../assets/logo/finder-logo-dark/Logo/Dark Banner.svg";
import { useLocation } from "react-router-dom";
import {
    Search,
    LogIn,
    LogOut,
    UserPlus,
    Settings,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import ThemeToggle from "../ui/ThemeToggle";
import { useTheme } from "../../context/ThemeContext";
import { sidebarMenu } from "./sidebarData";
import { useMySpace } from "../../context/MySpaceContext";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { unreadNotificationCount } = useMySpace();
    const { dark } = useTheme();
    const [searchQuery, setSearchQuery] = useState("");
    const location = useLocation();
    const menuRef = useRef(null);

    // Reads whoever is actually logged in from localStorage, set by
    // Login.jsx/Register.jsx after a successful backend response.
    const [user, setUser] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem("user");
        if (stored) {
            try {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setUser(JSON.parse(stored));
            } catch {
                setUser(null);
            }
        }
    }, [location.pathname]); // re-check whenever the route changes (e.g. right after login redirects)

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        window.location.href = "/login";
    };

    // Builds initials from the real name, e.g. "Inioluwa Soola" -> "IS".
    // Falls back to "GU" only when nobody is actually logged in.
    const initials = user?.fullName
        ? user.fullName
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()
        : "GU";

    const filteredMenu = sidebarMenu.map((section) => ({
        ...section,
        items: section.items.filter((item) =>
            item.label.toLowerCase().includes(searchQuery.toLowerCase())
        ),
    }));

    useEffect(() => {
        const stored = localStorage.getItem("user");
        if (stored) {
            try {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setUser(JSON.parse(stored));
            } catch {
                setUser(null);
            }
        } else {
            setUser(null);
        }
    }, [location.pathname]);
    return (
        <aside
            className={`${
                collapsed ? "w-20" : "w-64"
            } sticky top-0 h-screen transition-all duration-300 bg-[var(--surface)] border-r border-[var(--border)]`}
        >
            <div
                className="
          flex h-full flex-col
          overflow-hidden
          rounded-[28px]
          border border-[var(--border)]
          bg-[var(--surface)]
        "
            >
                {/* Header */}
                <div className="p-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">

                            {collapsed ? (
                                <img
                                    src={finderIcon}
                                    alt="Finders Icon"
                                    className="h-12 w-12 object-contain"
                                />
                            ) : (
                                <img
                                    src={dark ? finderDark : finderLight}
                                    alt="Finders Logo"
                                    className="h-12 w-auto object-contain"
                                />
                            )}

                        </div>

                        {!collapsed && <ThemeToggle />}
                    </div>


                    {/* Collapse button */}
                    <div className="mt-4 flex justify-end">
                        <button
                            onClick={() => setCollapsed(!collapsed)}
                            className="rounded-lg p-2 hover:bg-[var(--surface-2)]"
                        >
                            {collapsed ? (
                                <ChevronRight size={18} />
                            ) : (
                                <ChevronLeft size={18} />
                            )}
                        </button>
                    </div>

                    {/* Search */}
                    {!collapsed && (
                        <div className="relative mt-5">
                            <Search
                                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-light)]"
                            />

                            <input
                                type="text"
                                placeholder="Search menu..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-xl bg-[var(--surface-2)] py-3 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-[var(--primary)]"
                            />
                        </div>
                    )}
                </div>


                {/* Scrollable Area */}
                <div
                    ref={menuRef}
                    className="finders-scrollbar flex-1 overflow-y-auto">
                    {/* Menu */}
                    <div className="px-3">
                        {filteredMenu
                            .filter((section) => section.items.length > 0)
                            .map((section) => (
                                <div key={section.title} className="mb-6">
                                    {!collapsed && (
                                        <p className="mb-2 px-2 text-[11px] font-semibold tracking-[0.18em] text-[var(--text-light)]">
                                            {section.title}
                                        </p>
                                    )}

                                    <div className="space-y-1">
                                        {section.items.map((item) => {
                                            const Icon = item.icon;

                                            const badgeCount =
                                                item.label === "Notifications"
                                                    ? unreadNotificationCount
                                                    : item.badge;

                                            return (
                                                <NavLink
                                                    key={item.label}
                                                    to={item.path}
                                                    className={({ isActive }) =>
                                                        `flex items-center rounded-xl px-3 py-3 text-sm transition ${
                                                            isActive
                                                                ? "bg-[var(--primary)] text-white shadow-md"
                                                                : "text-[var(--text)] hover:bg-[var(--surface-2)]"
                                                        } ${
                                                            collapsed
                                                                ? "justify-center"
                                                                : "justify-between"
                                                        }`
                                                    }
                                                >
                                                    {({ isActive }) => (
                                                        <>
                                                            <div className="flex items-center gap-3">
                                                                <Icon size={18} />
                                                                {!collapsed && <span>{item.label}</span>}
                                                            </div>

                                                            {!collapsed && badgeCount > 0 && (
                                                                <span
                                                                    className={`rounded-full px-2 py-0.5 text-xs ${
                                                                        isActive
                                                                            ? "bg-white/20 text-white"
                                                                            : "bg-[var(--primary)] text-white"
                                                                    }`}
                                                                >
                                {badgeCount}
                              </span>
                                                            )}
                                                        </>
                                                    )}
                                                </NavLink>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Bottom Section (scrolls with content) */}
                    <div className="border-t border-[var(--border)] p-4">
                        {!collapsed ? (
                            <>
                                {!user ? (
                                    <>
                                        <NavLink
                                            to="/login"
                                            className={({ isActive }) =>
                                                `mb-1 flex items-center gap-3 rounded-lg px-3 py-2 ${
                                                    isActive
                                                        ? "bg-[var(--surface-2)]"
                                                        : "hover:bg-[var(--surface-2)]"
                                                }`
                                            }
                                        >
                                            <LogIn size={18} />
                                            Login
                                        </NavLink>

                                        <NavLink
                                            to="/register"
                                            className={({ isActive }) =>
                                                `mb-1 flex items-center gap-3 rounded-lg px-3 py-2 ${
                                                    isActive
                                                        ? "bg-[var(--surface-2)]"
                                                        : "hover:bg-[var(--surface-2)]"
                                                }`
                                            }
                                        >
                                            <UserPlus size={18} />
                                            Register
                                        </NavLink>
                                    </>
                                ) : (
                                    <button
                                        onClick={handleLogout}
                                        className="mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-[var(--surface-2)]"
                                    >
                                        <LogOut size={18} />
                                        Logout
                                    </button>
                                )}

                                <NavLink
                                    to="/settings"
                                    className={({ isActive }) =>
                                        `mb-3 flex items-center gap-3 rounded-lg px-3 py-2 ${
                                            isActive
                                                ? "bg-[var(--primary)] text-white"
                                                : "hover:bg-[var(--surface-2)]"
                                        }`
                                    }
                                >
                                    <Settings size={18} />
                                    Settings
                                </NavLink>

                                <div className="rounded-2xl bg-[var(--surface-2)] p-3">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)] font-semibold text-white">
                                            {initials}
                                        </div>

                                        <div>
                                            <p className="font-medium">
                                                {user?.fullName || "Guest User"}
                                            </p>
                                            <p className="text-xs text-[var(--text-light)]">
                                                {user?.role
                                                    ? user.role.charAt(0) + user.role.slice(1).toLowerCase()
                                                    : "Free Plan"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="flex flex-col items-center gap-3">
                                {!user ? (
                                    <>
                                        <NavLink
                                            to="/login"
                                            className="rounded-lg p-2 hover:bg-[var(--surface-2)]"
                                        >
                                            <LogIn size={20} />
                                        </NavLink>

                                        <NavLink
                                            to="/register"
                                            className="rounded-lg p-2 hover:bg-[var(--surface-2)]"
                                        >
                                            <UserPlus size={20} />
                                        </NavLink>
                                    </>
                                ) : (
                                    <button
                                        onClick={handleLogout}
                                        className="rounded-lg p-2 hover:bg-[var(--surface-2)]"
                                    >
                                        <LogOut size={20} />
                                    </button>
                                )}

                                <NavLink
                                    to="/settings"
                                    className={({ isActive }) =>
                                        `rounded-lg p-2 ${
                                            isActive
                                                ? "bg-[var(--primary)] text-white"
                                                : "hover:bg-[var(--surface-2)]"
                                        }`
                                    }
                                >
                                    <Settings size={20} />
                                </NavLink>

                                <div className="mt-2 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)] font-semibold text-white">
                                    {initials}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;