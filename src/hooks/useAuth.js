import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom"; // If using React Router

const useAuth = () => {
    const { keycloak, initialized } = useKeycloak();
    const navigate = useNavigate(); // Optional: for React Router navigation

    // Debug function to check Keycloak state
    const debugAuth = () => {
        console.log("🔍 Auth Debug:");
        console.log("  - Initialized:", initialized);
        console.log("  - Authenticated:", keycloak.authenticated);
        console.log("  - Token exists:", !!keycloak.token);
        console.log("  - Token expired:", keycloak.isTokenExpired?.());
        console.log("  - Keycloak instance:", keycloak);
    };

    // Enhanced logout with proper redirect
    const handleLogout = async () => {
        try {
            console.log("🚪 Logging out...");

            // Option 1: Standard logout with redirect to your app's home page
            const logoutUrl = window.location.origin + "/";

            // Option 2: If using React Router, navigate first then logout
            // navigate("/"); // Navigate to home first

            // Perform Keycloak logout
            await keycloak.logout({
                redirectUri: logoutUrl, // Explicitly set redirect URI
                // Or if you want to redirect to Keycloak's login page:
                // redirectUri: window.location.origin + "/login"
            });
        } catch (error) {
            console.error("❌ Logout failed:", error);
            // Fallback: clear local session and redirect
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = "/";
        }
    };

    // Enhanced login with options
    const handleLogin = (options = {}) => {
        console.log("🔐 Logging in...");
        keycloak.login({
            redirectUri: window.location.origin + "/dashboard", // Where to go after login
            ...options,
        });
    };

    // Check if token is expired and refresh if needed
    const refreshToken = async () => {
        if (keycloak.authenticated && keycloak.isTokenExpired?.()) {
            try {
                await keycloak.updateToken(30); // Refresh token if expiring in < 30 sec
                console.log("🔄 Token refreshed");
                return true;
            } catch (error) {
                console.error("❌ Token refresh failed:", error);
                handleLogout(); // Force logout if refresh fails
                return false;
            }
        }
        return true;
    };

    return {
        // 👤 User info
        user: keycloak.tokenParsed ?? null,

        // ✅ Auth state
        isAuthenticated: keycloak.authenticated ?? false,
        loading: !initialized,

        // 🔐 Actions
        login: handleLogin,
        logout: handleLogout,
        refreshToken,

        // 🎫 Token
        token: keycloak.token ?? null,

        // 🛠️ Debug
        debug: debugAuth,
    };
};

export default useAuth;
