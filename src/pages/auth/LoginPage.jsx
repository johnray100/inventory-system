import LockRoundedIcon from "@mui/icons-material/LockRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import {
    Alert,
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

// ----------------------------------------------------------------------

export default function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: "",
        password: "",
        remember: false,
    });
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.username || !form.password) {
            setError("Please fill in all fields.");
            return;
        }
        setLoading(true);

        await new Promise((r) => setTimeout(r, 800));
        
        login({ username: form.username, name: "Admin User" }, "mock-token-" + Date.now());
        
        navigate("/two-step");
    };

    return (
        <Box sx={{ width: "100%" }}>
            {/* Header */}
            <Box sx={{ mb: 4, textAlign: "center" }}>
                <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>
                    Welcome back
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Sign in to your account to continue
                </Typography>
            </Box>

            {/* Form */}
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2.5,
                    "& input:-webkit-autofill": {
                        WebkitBoxShadow: "0 0 0 1000px #F1F5F9 inset !important",
                        WebkitTextFillColor: "inherit !important",
                    },
                }}
            >
                {error && (
                    <Alert severity="error" sx={{ borderRadius: 2 }}>
                        {error}
                    </Alert>
                )}

                {/* Username Field */}
                <TextField
                    fullWidth
                    label="Username"
                    name="username"
                    type="text"
                    value={form.username}
                    onChange={handleChange}
                    autoComplete="username"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonRoundedIcon
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: 20,
                                    }}
                                />
                            </InputAdornment>
                        ),
                    }}
                />

                {/* Password Field - ISA LANG, WAG DUPLICATE */}
                <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type={showPass ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockRoundedIcon
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: 20,
                                    }}
                                />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowPass(!showPass)}
                                    edge="end"
                                    size="small"
                                >
                                    {showPass ? (
                                        <VisibilityOffRoundedIcon fontSize="small" />
                                    ) : (
                                        <VisibilityRoundedIcon fontSize="small" />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                {/* Remember me + Forgot password */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 0.5,
                    }}
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="remember"
                                checked={form.remember}
                                onChange={handleChange}
                                size="small"
                                color="primary"
                            />
                        }
                        label={
                            <Typography variant="body2">Remember me</Typography>
                        }
                    />
                    <Typography
                        variant="body2"
                        component={Link}
                        to="/forgot-password"
                        sx={{
                            color: "primary.main",
                            cursor: "pointer",
                            fontWeight: 500,
                            textDecoration: "none",
                            "&:hover": { textDecoration: "underline" },
                        }}
                    >
                        Forgot password?
                    </Typography>
                </Box>

                {/* Sign In Button */}
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    disabled={loading}
                    sx={{ py: 1.5, mt: 1 }}
                >
                    {loading ? "Signing in..." : "Sign In"}
                </Button>

                {/* Divider */}
                <Divider sx={{ my: 1.5 }}>
                    <Typography variant="caption" color="text.secondary">
                        Don't have an account?
                    </Typography>
                </Divider>

                {/* Create Account Button */}
                <Button
                    component={Link}
                    to="/signup"
                    variant="outlined"
                    fullWidth
                    size="large"
                    sx={{ py: 1.2, borderRadius: 2 }}
                >
                    Create an Account
                </Button>
            </Box>
        </Box>
    );
}
