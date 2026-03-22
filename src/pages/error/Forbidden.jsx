// src/pages/error/Forbidden.jsx
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import forbiddenImg from "../../assets/403.png";

export default function Forbidden() {
    const navigate = useNavigate();

    return (
        <>
            <title>403 Forbidden | Error - Inventory System</title>

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
                {/* 403 Text */}
                <Typography variant="h1" fontWeight="bold" color="warning.main">
                    403
                </Typography>

                {/* Illustration */}
                <Box
                    component="img"
                    src={forbiddenImg}
                    alt="403 Illustration"
                    sx={{ maxWidth: 400, width: "100%", height: "auto", mb: 2 }}
                />

                {/* Message */}
                <Typography variant="h5" sx={{ mt: 2 }}>
                    Access Forbidden
                </Typography>

                <Typography variant="body1" sx={{ mt: 1, opacity: 0.7 }}>
                    Sorry, you don't have permission to access this page.
                </Typography>

                {/* Button */}
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 4 }}
                    onClick={() => navigate("/")}
                >
                    Go Back Home
                </Button>
            </Box>
        </>
    );
}
