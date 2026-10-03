import { Navigate } from "react-router-dom";

// Wraps any route that should only be reachable by a logged-in admin.
// Checks the saved user from localStorage (set by Login.jsx/Register.jsx)
// and bounces anyone who isn't an ADMIN back to the home page.
function AdminRoute({ children }) {
    const stored = localStorage.getItem("user");

    if (!stored) {
        return <Navigate to="/login" replace />;
    }

    try {
        const user = JSON.parse(stored);
        if (user.role !== "ADMIN") {
            return <Navigate to="/" replace />;
        }
    } catch {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default AdminRoute;
