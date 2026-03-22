import useAuth from "../hooks/useAuth";

// ----------------------------------------------------------------------

export default function ProtectedRoute({ children }) {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return null;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
