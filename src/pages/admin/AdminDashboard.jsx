import { useState, useEffect } from "react";
import { ShieldCheck, Flag, Home, CheckCircle2, XCircle } from "lucide-react";
// No DashboardLayout import/wrap here - App.jsx wraps this route
// in <DashboardLayout> itself, same as Overview, MyProperties, etc.

const API_BASE = "http://localhost:8081";

// Reads the saved JWT and attaches it as a Bearer header - every admin
// action (verifying a property, resolving a report) needs this.
function authHeaders() {
    const token = localStorage.getItem("token");
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
}

function AdminDashboard() {
    const [properties, setProperties] = useState([]);
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);

    // Which property's checklist is currently open for editing
    const [openPropertyId, setOpenPropertyId] = useState(null);
    const [checklist, setChecklist] = useState({
        addressChecked: false,
        propertyExistenceChecked: false,
        agentVerified: false,
        ownerAuthorizationChecked: false,
        listingReviewed: false,
    });

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setLoading(true);
        try {
            const [propsRes, reportsRes] = await Promise.all([
                fetch(`${API_BASE}/api/properties`),
                fetch(`${API_BASE}/api/reports/open`, { headers: authHeaders() }),
            ]);
            setProperties(await propsRes.json());
            setReports(await reportsRes.json());
        } catch (err) {
            console.error("Failed to load admin data:", err);
        } finally {
            setLoading(false);
        }
    };

    const openChecklistFor = (propertyId) => {
        setOpenPropertyId(propertyId);
        // Reset to blank each time - a real version would fetch the
        // existing check record first, but this keeps it simple for now.
        setChecklist({
            addressChecked: false,
            propertyExistenceChecked: false,
            agentVerified: false,
            ownerAuthorizationChecked: false,
            listingReviewed: false,
        });
    };

    const toggleCheck = (key) => {
        setChecklist((current) => ({ ...current, [key]: !current[key] }));
    };

    const submitChecklist = async (propertyId) => {
        try {
            const res = await fetch(
                `${API_BASE}/api/verification-checks/${propertyId}`,
                {
                    method: "PUT",
                    headers: authHeaders(),
                    body: JSON.stringify(checklist),
                }
            );

            if (!res.ok) {
                alert("Could not update verification - are you logged in as an admin?");
                return;
            }

            setOpenPropertyId(null);
            loadData(); // refresh so the new risk level shows immediately
        } catch (err) {
            console.error(err);
            alert("Could not connect to the server.");
        }
    };

    const resolveReport = async (reportId, status) => {
        try {
            const res = await fetch(
                `${API_BASE}/api/reports/${reportId}/status?status=${status}`,
                { method: "PUT", headers: authHeaders() }
            );

            if (!res.ok) {
                alert("Could not update report - are you logged in as an admin?");
                return;
            }

            loadData();
        } catch (err) {
            console.error(err);
            alert("Could not connect to the server.");
        }
    };

    const riskBadgeClass = (risk) => {
        if (risk === "LOW") return "bg-green-100 text-green-700";
        if (risk === "MEDIUM") return "bg-yellow-100 text-yellow-700";
        return "bg-red-100 text-red-700";
    };

    return (
        <div className="min-h-full bg-[var(--background)] px-5 py-6 md:px-8 lg:px-10">

            <section className="mb-7">
                <p className="mb-1 text-sm font-medium tracking-wide text-[var(--primary)]">
                    ADMIN
                </p>
                <h1 className="text-2xl font-semibold tracking-tight text-[var(--text)] md:text-3xl">
                    Admin Dashboard
                </h1>
                <p className="mt-2 text-sm text-[var(--text-light)] md:text-base">
                    Verify properties and resolve scam reports.
                </p>
            </section>

            {loading ? (
                <p className="text-[var(--text-light)]">Loading...</p>
            ) : (
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

                    {/* Properties + verification */}
                    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
                        <div className="flex items-center gap-2 border-b border-[var(--border)] p-5">
                            <Home size={18} className="text-[var(--primary)]" />
                            <h2 className="text-lg font-semibold text-[var(--text)]">
                                Properties ({properties.length})
                            </h2>
                        </div>

                        <div className="divide-y divide-[var(--border)]">
                            {properties.map((property) => (
                                <div key={property.id} className="p-4">
                                    <div className="flex items-center justify-between gap-3">
                                        <div>
                                            <p className="font-medium text-[var(--text)]">
                                                {property.title}
                                            </p>
                                            <p className="text-xs text-[var(--text-light)]">
                                                {property.address}
                                            </p>
                                        </div>

                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-semibold ${riskBadgeClass(
                                                property.riskLevel
                                            )}`}
                                        >
                                                {property.riskLevel}
                                            </span>
                                    </div>

                                    {openPropertyId === property.id ? (
                                        <div className="mt-3 space-y-2 rounded-xl bg-[var(--surface-2)] p-3">
                                            {[
                                                ["addressChecked", "Address checked"],
                                                ["propertyExistenceChecked", "Property existence checked"],
                                                ["agentVerified", "Agent verified"],
                                                ["ownerAuthorizationChecked", "Owner authorization checked"],
                                                ["listingReviewed", "Listing reviewed"],
                                            ].map(([key, label]) => (
                                                <label
                                                    key={key}
                                                    className="flex cursor-pointer items-center gap-2 text-sm text-[var(--text)]"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={checklist[key]}
                                                        onChange={() => toggleCheck(key)}
                                                        className="h-4 w-4 accent-[var(--primary)]"
                                                    />
                                                    {label}
                                                </label>
                                            ))}

                                            <div className="flex gap-2 pt-2">
                                                <button
                                                    onClick={() => submitChecklist(property.id)}
                                                    className="rounded-lg bg-[var(--primary)] px-3 py-1.5 text-xs font-semibold text-white"
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    onClick={() => setOpenPropertyId(null)}
                                                    className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-xs"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => openChecklistFor(property.id)}
                                            className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)] hover:underline"
                                        >
                                            <ShieldCheck size={14} />
                                            Verify this property
                                        </button>
                                    )}
                                </div>
                            ))}

                            {properties.length === 0 && (
                                <p className="p-4 text-sm text-[var(--text-light)]">
                                    No properties yet.
                                </p>
                            )}
                        </div>
                    </section>

                    {/* Open reports */}
                    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
                        <div className="flex items-center gap-2 border-b border-[var(--border)] p-5">
                            <Flag size={18} className="text-[var(--primary)]" />
                            <h2 className="text-lg font-semibold text-[var(--text)]">
                                Open Reports ({reports.length})
                            </h2>
                        </div>

                        <div className="divide-y divide-[var(--border)]">
                            {reports.map((report) => (
                                <div key={report.id} className="p-4">
                                    <p className="text-sm font-semibold text-[var(--text)]">
                                        {report.reason.replaceAll("_", " ")}
                                    </p>
                                    <p className="mt-1 text-xs text-[var(--text-light)]">
                                        {report.details}
                                    </p>
                                    {report.property && (
                                        <p className="mt-1 text-xs text-[var(--text-light)]">
                                            On: {report.property.title}
                                        </p>
                                    )}

                                    <div className="mt-3 flex gap-2">
                                        <button
                                            onClick={() => resolveReport(report.id, "REVIEWED")}
                                            className="flex items-center gap-1 rounded-lg bg-green-600 px-3 py-1.5 text-xs font-semibold text-white"
                                        >
                                            <CheckCircle2 size={14} />
                                            Mark Reviewed
                                        </button>
                                        <button
                                            onClick={() => resolveReport(report.id, "DISMISSED")}
                                            className="flex items-center gap-1 rounded-lg border border-[var(--border)] px-3 py-1.5 text-xs font-semibold"
                                        >
                                            <XCircle size={14} />
                                            Dismiss
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {reports.length === 0 && (
                                <p className="p-4 text-sm text-[var(--text-light)]">
                                    No open reports.
                                </p>
                            )}
                        </div>
                    </section>

                </div>
            )}
        </div>
    );
}

export default AdminDashboard;
