import { useMemo, useState } from "react";
import {
    Building2,
    CheckCircle2,
    Clock3,
    XCircle,
    Search,
    Plus,
    SlidersHorizontal,
} from "lucide-react";

import DashboardLayout from "../../layouts/DashboardLayout.jsx";
import propertyData from "../../components/property/propertyData.jsx";
import PropertyCard from "../../components/property/PropertyCard.jsx";

const filters = [
    {
        key: "all",
        label: "All",
    },
    {
        key: "verified",
        label: "Verified",
    },
    {
        key: "pending",
        label: "Pending",
    },
    {
        key: "rejected",
        label: "Rejected",
    },
];

export default function MyProperties() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState("all");

    const statistics = useMemo(() => {
        return {
            total: propertyData.length,

            verified: propertyData.filter(
                (property) => property.status === "verified"
            ).length,

            pending: propertyData.filter(
                (property) => property.status === "pending"
            ).length,

            rejected: propertyData.filter(
                (property) => property.status === "rejected"
            ).length,
        };
    }, []);

    const filteredProperties = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        return propertyData.filter((property) => {
            const matchesSearch =
                !query ||
                property.title.toLowerCase().includes(query) ||
                property.location.toLowerCase().includes(query) ||
                property.agent.toLowerCase().includes(query);

            const matchesFilter =
                activeFilter === "all" ||
                property.status === activeFilter;

            return matchesSearch && matchesFilter;
        });
    }, [searchQuery, activeFilter]);

    const statCards = [
        {
            label: "Total Properties",
            value: statistics.total,
            icon: Building2,
            iconClass:
                "bg-[var(--surface-2)] text-[var(--primary)]",
        },
        {
            label: "Verified",
            value: statistics.verified,
            icon: CheckCircle2,
            iconClass:
                "bg-[var(--surface-2)] text-[var(--primary)]",
        },
        {
            label: "Pending Review",
            value: statistics.pending,
            icon: Clock3,
            iconClass:
                "bg-amber-100 text-amber-700",
        },
        {
            label: "Rejected",
            value: statistics.rejected,
            icon: XCircle,
            iconClass:
                "bg-red-100 text-red-700",
        },
    ];

    return (
        <div className="min-h-full bg-[var(--background)] px-5 py-6 md:px-8 lg:px-10">

            {/* Header */}
            <section className="mb-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                    <div>
                        <p className="mb-1 text-sm font-medium tracking-wide text-[var(--primary)]">
                            MY SPACE
                        </p>

                        <h1 className="text-2xl font-semibold tracking-tight text-[var(--text)] md:text-3xl">
                            My Properties
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm text-[var(--text-light)] md:text-base">
                            Manage and track the properties you've listed on
                            Finders.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--primary-light)] hover:shadow-md"
                    >
                        <Plus size={18} />
                        Add Property
                    </button>

                </div>
            </section>

            {/* Statistics */}
            <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                {statCards.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <div
                            key={stat.label}
                            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm"
                        >
                            <div className="flex items-center justify-between">

                                <div
                                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconClass}`}
                                >
                                    <Icon size={20} />
                                </div>

                            </div>

                            <p className="mt-4 text-sm text-[var(--text-light)]">
                                {stat.label}
                            </p>

                            <p className="mt-1 text-2xl font-semibold text-[var(--text)]">
                                {stat.value}
                            </p>
                        </div>
                    );
                })}

            </section>

            {/* Search and Filters */}
            <section className="mb-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm md:p-5">

                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                    {/* Search */}
                    <div className="relative w-full lg:max-w-md">

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
                            placeholder="Search by property, location or agent..."
                            className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] py-3 pl-10 pr-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-light)] focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20"
                        />

                    </div>

                    {/* Filter Label */}
                    <div className="hidden items-center gap-2 text-sm text-[var(--text-light)] lg:flex">
                        <SlidersHorizontal size={17} />
                        Filter properties
                    </div>

                </div>

                {/* Filter Buttons */}
                <div className="mt-4 flex gap-2 overflow-x-auto pb-1">

                    {filters.map((filter) => {
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

            </section>

            {/* Results Heading */}
            <section className="mb-4 flex items-center justify-between">

                <div>
                    <h2 className="text-lg font-semibold text-[var(--text)]">
                        Your Properties
                    </h2>

                    <p className="mt-1 text-sm text-[var(--text-light)]">
                        {filteredProperties.length}{" "}
                        {filteredProperties.length === 1
                            ? "property"
                            : "properties"}{" "}
                        found
                    </p>
                </div>

            </section>

            {/* Property Grid */}
            {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

                    {filteredProperties.map((property) => (
                        <div key={property.id}>

                            <PropertyCard
                                property={property}
                                showStats={true}
                                showStatus={true}
                            />

                            {/* Management Actions */}
                            <div className="flex gap-2 rounded-b-2xl border-x border-b border-[var(--border)] bg-[var(--surface)] px-4 pb-4">

                                <button
                                    type="button"
                                    className="flex-1 rounded-xl border border-[var(--border)] px-3 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[var(--primary-light)] hover:text-[var(--primary)]"
                                >
                                    Edit
                                </button>

                                <button
                                    type="button"
                                    className="flex-1 rounded-xl bg-[var(--primary)] px-3 py-2 text-sm font-medium text-white transition hover:bg-[var(--primary-light)]"
                                >
                                    Manage
                                </button>

                            </div>

                        </div>
                    ))}

                </div>
            ) : (

                /* Empty State */
                <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)] px-6 py-16 text-center">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface-2)] text-[var(--primary)]">
                        <Building2 size={24} />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-[var(--text)]">
                        No properties found
                    </h3>

                    <p className="mx-auto mt-2 max-w-md text-sm text-[var(--text-light)]">
                        We couldn't find any properties matching your search
                        or selected filter.
                    </p>

                    {searchQuery && (
                        <button
                            type="button"
                            onClick={() => setSearchQuery("")}
                            className="mt-4 text-sm font-semibold text-[var(--primary)] hover:underline"
                        >
                            Clear search
                        </button>
                    )}

                </div>
            )}

        </div>
    );
}