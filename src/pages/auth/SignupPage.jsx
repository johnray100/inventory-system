import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import {
    Alert,
    Box,
    Button,
    Divider,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------

export default function SignupPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.password || !form.confirm) {
            setError("Please fill in all fields.");
            return;
        }
        if (form.password !== form.confirm) {
            setError("Passwords do not match.");
            return;
        }
        if (form.password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }
        setLoading(true);
        await new Promise((r) => setTimeout(r, 800));
        navigate("/login");
    };

    return (
        <Box>
            {/* Header */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>
                    Create account 🚀
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Fill in your details to get started
                </Typography>
            </Box>

            {/* Form */}
            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                {error && <Alert severity="error" sx={{ borderRadius: 2 }}>{error}</Alert>}

                <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonRoundedIcon sx={{ color: "text.secondary", fontSize: 20 }} />
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailRoundedIcon sx={{ color: "text.secondary", fontSize: 20 }} />
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type={showPass ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockRoundedIcon sx={{ color: "text.secondary", fontSize: 20 }} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPass(!showPass)} edge="end" size="small">
                                    {showPass ? <VisibilityOffRoundedIcon fontSize="small" /> : <VisibilityRoundedIcon fontSize="small" />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    fullWidth
                    label="Confirm Password"
                    name="confirm"
                    type={showConfirm ? "text" : "password"}
                    value={form.confirm}
                    onChange={handleChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockRoundedIcon sx={{ color: "text.secondary", fontSize: 20 }} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowConfirm(!showConfirm)} edge="end" size="small">
                                    {showConfirm ? <VisibilityOffRoundedIcon fontSize="small" /> : <VisibilityRoundedIcon fontSize="small" />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    disabled={loading}
                    sx={{ py: 1.5, mt: 0.5 }}
                >
                    {loading ? "Creating account..." : "Create Account"}
                </Button>

                <Divider>
                    <Typography variant="caption" color="text.secondary">
                        Already have an account?
                    </Typography>
                </Divider>

                <Button
                    component={Link}
                    to="/login"
                    variant="outlined"
                    fullWidth
                    size="large"
                    sx={{ borderRadius: 2.5 }}
                >
                    Sign In Instead
                </Button>
            </Box>
        </Box>
    );
}
