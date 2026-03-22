import { Box, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function AuthLayout({ children }) {
    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                minHeight: "100vh",
                bgcolor: "#F1F5F9",
            }}
        >
            {/* LEFT PANEL - NORMAL SIZE */}
            <Box
                sx={{
                    width: "60%",
                    display: { xs: "none", md: "flex" },
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                        "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #312E81 100%)",
                    position: "relative",
                    p: 8,
                }}
            >
                {/* Decorative Background */}
                <Box
                    sx={{
                        position: "absolute",
                        width: "80%",
                        height: "80%",
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.1)",
                        top: -100,
                        left: -100,
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        width: "60%",
                        height: "60%",
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.08)",
                        bottom: -80,
                        right: -80,
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        width: "40%",
                        height: "40%",
                        borderRadius: "50%",
                        background: "rgba(79, 70, 229, 0.2)",
                        top: "30%",
                        left: "10%",
                        filter: "blur(60px)",
                    }}
                />

                {/* Content */}
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        width: "100%",
                        maxWidth: "85%",
                        textAlign: "center",
                    }}
                >
                    {/* Icon */}
                    <Box
                        sx={{
                            width: 80,
                            height: 80,
                            borderRadius: 3,
                            background:
                                "linear-gradient(135deg, #4F46E5, #818CF8)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mx: "auto",
                            mb: 3,
                        }}
                    >
                        <Typography sx={{ fontSize: 40 }}>📦</Typography>
                    </Box>

                    {/* Title */}
                    <Typography
                        variant="h4"
                        sx={{
                            color: "white",
                            mb: 2,
                            fontWeight: 700,
                        }}
                    >
                        Inventory System
                    </Typography>

                    {/* Description */}
                    <Typography
                        sx={{
                            color: "rgba(255,255,255,0.7)",
                            fontSize: "0.9rem",
                            lineHeight: 1.6,
                            maxWidth: "90%",
                            mx: "auto",
                            mb: 4,
                        }}
                    >
                        A comprehensive inventory management platform. Track
                        products, manage users, and monitor your business in
                        real time.
                    </Typography>

                    {/* Features */}
                    <Box sx={{ width: "100%" }}>
                        {[
                            "📊 Real-time analytics dashboard",
                            "👥 Multi-user role management",
                            "📦 Smart inventory tracking",
                            "🔔 Instant notifications",
                        ].map((feature) => (
                            <Box
                                key={feature}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                    mb: 1.8,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: "50%",
                                        background:
                                            "linear-gradient(135deg, #4F46E5, #818CF8)",
                                        flexShrink: 0,
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "rgba(255,255,255,0.8)",
                                        fontSize: "0.85rem",
                                        textAlign: "left",
                                    }}
                                >
                                    {feature}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* RIGHT PANEL */}
            <Box
                sx={{
                    width: { xs: "100%", md: "40%" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "#F1F5F9",
                    p: { xs: 2, sm: 3, md: 4 },
                }}
            >
                <Box sx={{ width: "100%", maxWidth: 420 }}>{children}</Box>
            </Box>
        </Box>
    );
}
