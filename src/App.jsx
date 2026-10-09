import { Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

// Dashboard
import Overview from "./pages/dashboard/Overview";
import MyProperties from "./pages/dashboard/MyProperties";
import Wishlist from "./pages/dashboard/Wishlist";
import Messages from "./pages/dashboard/Messages";
import Notifications from "./pages/dashboard/Notifications";
import Settings from "./pages/dashboard/Settings";
import PropertyDetails from "./pages/dashboard/PropertyDetails";

// Public
import Home from "./pages/public/Home";
import Search from "./pages/public/Search";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Safety from "./pages/public/Safety";
import ReportScam from "./pages/public/ReportScam";
import PropertyMap from "./pages/public/PropertyMap";
import InternationalRental from "./pages/public/InternationalRental";
import CountryDetails from "./pages/public/countryDetails";
import VisaGuide from "./pages/public/VisaGuide";
import BookInspection from "./pages/public/bookInspection";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import AdminLogin from "./pages/auth/AdminLogin";

// Verify
import Verify from "./pages/verify/Verify";
import ScanDocuments from "./pages/verify/ScanDocuments";
import ScamDetector from "./pages/verify/ScamDetector";
import VerifyAgent from "./pages/verify/VerifyAgent";
import VerificationRequest from "./pages/verify/VerificationRequest";

// AI
import FinderAI from "./pages/ai/FinderAI";
import HomeDNA from "./pages/ai/HomeDNA";
import CostCalculator from "./pages/ai/CostCalculator";

// Admin
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRoute from "./components/auth/AdminRoute";

function App() {
    return (
        <Routes>
            {/* Public */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/report" element={<ReportScam />} />
            <Route path="/propertyMap" element={<PropertyMap />} />
            <Route
                path="/international-rental"
                element={<InternationalRental />}
            />
            <Route
                path="/international/:countryId"
                element={<CountryDetails />}
            />
            <Route path="/visa-guide" element={<VisaGuide />} />

            {/* Authentication */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<Forgot />} />
            <Route path="/admin-login" element={<AdminLogin />} />

            {/* Verification */}
            <Route path="/verify" element={<Verify />} />
            <Route path="/verify-agent" element={<VerifyAgent />} />
            <Route
                path="/verification-request"
                element={<VerificationRequest />}
            />
            <Route
                path="/scan-documents"
                element={<ScanDocuments />}
            />
            <Route
                path="/scam-detector"
                element={<ScamDetector />}
            />

            {/* AI */}
            <Route path="/finder-ai" element={<FinderAI />} />
            <Route path="/home-dna" element={<HomeDNA />} />
            <Route
                path="/cost-calculator"
                element={<CostCalculator />}
            />

            {/* Property */}
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route
                path="/book-inspection/:id"
                element={<BookInspection />}
            />

            {/* Dashboard */}
            <Route
                path="/overview"
                element={
                    <DashboardLayout>
                        <Overview />
                    </DashboardLayout>
                }
            />
            <Route
                path="/myProperties"
                element={
                    <DashboardLayout>
                        <MyProperties />
                    </DashboardLayout>
                }
            />
            <Route
                path="/wishlist"
                element={
                    <DashboardLayout>
                        <Wishlist />
                    </DashboardLayout>
                }
            />
            <Route
                path="/messages"
                element={
                    <DashboardLayout>
                        <Messages />
                    </DashboardLayout>
                }
            />
            <Route
                path="/notifications"
                element={
                    <DashboardLayout>
                        <Notifications />
                    </DashboardLayout>
                }
            />
            <Route
                path="/settings"
                element={
                    <DashboardLayout>
                        <Settings />
                    </DashboardLayout>
                }
            />

            {/* Admin - only reachable by a logged-in ADMIN */}
            <Route
                path="/admin"
                element={
                    <AdminRoute>
                        <DashboardLayout>
                            <AdminDashboard />
                        </DashboardLayout>
                    </AdminRoute>
                }
            />
        </Routes>
    );
}

export default App;
