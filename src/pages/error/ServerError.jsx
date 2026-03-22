// src/pages/error/ServerError.jsx
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import serverErrorImg from "../../assets/500.png";

export default function ServerError() {
    const navigate = useNavigate();

    return (
        <>
            <title>500 Internal Server Error | Error - Inventory System</title>

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
                {/* 500 Text */}
                <Typography variant="h1" fontWeight="bold" color="error">
                    500
                </Typography>

                {/* Illustration */}
                <Box
                    component="img"
                    src={serverErrorImg}
                    alt="500 Illustration"
                    sx={{ maxWidth: 400, width: "100%", height: "auto", mb: 2 }}
                />

                {/* Message */}
                <Typography variant="h5" sx={{ mt: 2 }}>
                    Internal Server Error
                </Typography>

                <Typography variant="body1" sx={{ mt: 1, opacity: 0.7 }}>
                    Sorry, something went wrong on our end. We are working to
                    fix it.
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
