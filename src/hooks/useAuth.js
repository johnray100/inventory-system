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
            console.log("🚪 [1] Starting logout process...");
            console.log("   📍 Current origin:", window.location.origin);

            // Prepare logout URL
            const logoutUrl = window.location.origin + "/";
            console.log("   🔗 Redirect URI:", logoutUrl);

            // Check Keycloak state before logout
            console.log("   🔐 Keycloak state before logout:");
            console.log("      - Authenticated:", keycloak.authenticated);
            console.log("      - Token exists:", !!keycloak.token);
            console.log("      - Realm:", keycloak.realm);
            console.log("      - ClientId:", keycloak.clientId);

            await new Promise((resolve) => setTimeout(resolve, 5000));

            // Perform Keycloak logout
            console.log("🚪 [2] Calling keycloak.logout()...");
            await keycloak.logout({
                redirectUri: logoutUrl,
            });

            console.log("✅ [3] Logout successful!");
            console.log("   🔐 Keycloak state after logout:");
            console.log("      - Authenticated:", keycloak.authenticated);
        } catch (error) {
            console.error("❌ [ERROR] Logout failed:", error);
            console.error("   Error details:", {
                name: error.name,
                message: error.message,
                stack: error.stack,
            });

            // Fallback: clear local session and redirect
            console.log(
                "🔄 [FALLBACK] Clearing local storage and redirecting...",
            );
            localStorage.clear();
            sessionStorage.clear();
            console.log("   ✅ Local storage cleared");

            console.log("🔀 Redirecting to homepage...");
            window.location.href = "/";
        }

        console.log("🏁 [END] Logout process completed");
    };

    // Enhanced login with options
    const handleLogin = (options = {}) => {
        console.log("🔐 [1] Starting login process...");
        console.log("   📍 Current origin:", window.location.origin);

        const redirectUrl = window.location.origin + "/dashboard";
        console.log("   🔗 Redirect URI after login:", redirectUrl);

        console.log("   🔐 Keycloak state before login:");
        console.log("      - Authenticated:", keycloak.authenticated);
        console.log("      - Realm:", keycloak.realm);
        console.log("      - ClientId:", keycloak.clientId);

        console.log("🔐 [2] Calling keycloak.login()...");
        keycloak.login({
            redirectUri: redirectUrl,
            ...options,
        });

        console.log(
            "🔐 [3] Login redirect initiated - waiting for Keycloak...",
        );
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
