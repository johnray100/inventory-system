import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import maintenanceImg from "../../assets/website-under-maintenance.png";

export default function UnderMaintenance() {
    const navigate = useNavigate();

    return (
        <>
            <title>Under Maintenance | Inventory System</title>

            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    backgroundColor: "#0f172a",
                    color: "#fff",
                    px: 2,
                }}
            >
                {/* Illustration */}
                <Box
                    component="img"
                    src={maintenanceImg}
                    alt="Under Maintenance Illustration"
                    sx={{ maxWidth: 500, width: "100%", height: "auto", mb: 4 }}
                />

                {/* Text */}
                <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
                    Under Maintenance
                </Typography>

                <Typography variant="h6" sx={{ mb: 2, opacity: 0.8 }}>
                    We'll be back soon!
                </Typography>

                <Typography variant="body1" sx={{ maxWidth: 600, opacity: 0.7, mb: 4 }}>
                    Our system is currently undergoing scheduled maintenance to improve your experience. 
                    We apologize for any inconvenience caused.
                </Typography>

                {/* Button */}
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => navigate("/")}
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                >
                    Retrying Connection
                </Button>
            </Box>
        </>
    );
}
