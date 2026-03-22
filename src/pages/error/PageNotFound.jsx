import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import error404 from "../../assets/404.png";

export default function PageNotFound() {
    const navigate = useNavigate();

    return (
        <>
            <title>404 page not found! | Error - Inventory System</title>

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
                {/* 404 Text */}
                <Typography
                    variant="h1"
                    fontWeight="bold"
                    color="primary"
                    sx={{ mb: 1 }}
                >
                    404
                </Typography>

                {/* Illustration */}
                <Box
                    component="img"
                    src={error404}
                    alt="404 Illustration"
                    sx={{ maxWidth: 400, width: "100%", height: "auto", mb: 2 }}
                />

                {/* Message */}
                <Typography variant="h5" sx={{ mt: 2 }}>
                    Page Not Found
                </Typography>

                <Typography variant="body1" sx={{ mt: 1, opacity: 0.7 }}>
                    Sorry, the page you are looking for does not exist.
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
