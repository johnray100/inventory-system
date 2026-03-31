import { Box, CircularProgress, Typography } from "@mui/material";
import { useKeycloak } from "@react-keycloak/web";

// 🛡️ Keycloak-based protected route
export default function ProtectedRoute({ children }) {
    const { keycloak, initialized } = useKeycloak();

    // ⏳ Wait for Keycloak to finish — show loading screen
    if (!initialized) {
        return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    background:
                        "linear-gradient(135deg, #3d3d9cff 0%, #2c2c66ff 100%)",
                    gap: 3,
                }}
            >
                <CircularProgress
                    size={70}
                    thickness={4.5}
                    sx={{
                        color: "white",
                        filter: "drop-shadow(0 0 8px rgba(255,255,255,0.4))",
                    }}
                />
                <Typography
                    variant="h5"
                    sx={{
                        color: "white",
                        fontWeight: 600,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        opacity: 0.9,
                    }}
                >
                    Loading...
                </Typography>
            </Box>
        );
    }

    // ✅ Keycloak handles login-required automatically via initOptions
    if (!keycloak.authenticated) {
        keycloak.login();
        return null;
    }

    return children;
}
