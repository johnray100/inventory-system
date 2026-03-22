import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
    const navigate = useNavigate();

    return (
        <Box sx={{ p: 4, bgcolor: "white", borderRadius: 4, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, color: "#1e293b" }}>
                Forgot your password?
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
                Please enter the email address associated with your account and we will email you a link to reset your password.
            </Typography>

            <Box component="form" noValidate>
                <Typography variant="subtitle2" fontWeight="600" sx={{ mb: 1, color: "#1e293b" }}>
                    Email Address
                </Typography>
                <TextField
                    fullWidth
                    placeholder="Enter your email"
                    variant="outlined"
                    size="small"
                    sx={{ mb: 3 }}
                />

                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        py: 1.2,
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: 600,
                        bgcolor: "#4f46e5",
                        mb: 2,
                        "&:hover": { bgcolor: "#4338ca" },
                    }}
                >
                    Forgot Password
                </Button>

                <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                        py: 1.2,
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: 600,
                        borderColor: "#e2e8f0",
                        color: "#64748b",
                        "&:hover": { borderColor: "#cbd5e1", bgcolor: "#f8fafc" },
                    }}
                    onClick={() => navigate("/login")}
                >
                    Back to Login
                </Button>
            </Box>
        </Box>
    );
}
