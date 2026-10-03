import Sidebar from "../components/navigation/Sidebar";
import TopNavbar from "../components/navigation/TopNavbar";
import { Menu } from "lucide-react";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-[var(--background)]">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
                <Sidebar />
            </div>

            {/* Mobile Sidebar Drawer */}
            {menuOpen && (
                <>
                    {/* Overlay */}
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    />

                    {/* Drawer */}
                    <div className="fixed left-0 top-0 z-50 h-full w-[280px] lg:hidden">
                        <Sidebar />
                    </div>
                </>
            )}

            {/* Main Content */}
            <main className="min-w-0 flex-1">
                {/* Top Navigation */}
                <div className="sticky top-0 z-30 flex items-center bg-[var(--surface)]">
                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="ml-2 rounded-xl p-2 lg:hidden"
                    >
                        <Menu size={24} />
                    </button>

                    {/* Existing Navbar */}
                    <div className="flex-1">
                        <TopNavbar />
                    </div>
                </div>

                {/* Page Content */}
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;