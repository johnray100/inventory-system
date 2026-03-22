import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import FiberNewRoundedIcon from "@mui/icons-material/FiberNewRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Chip,
    Grid,
    LinearProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

// ----------------------------------------------------------------------

const STAT_CARDS = [
    {
        label: "Critical Items",
        value: "12",
        change: "Needs attention",
        positive: false,
        icon: <ErrorOutlineRoundedIcon />,
        color: "#EF4444",
        bg: "linear-gradient(135deg, #EF4444 0%, #FCA5A5 100%)", // Red
    },
    {
        label: "Total Stock",
        value: "4,284",
        change: "Healthy level",
        positive: true,
        icon: <Inventory2RoundedIcon />,
        color: "#3B82F6",
        bg: "linear-gradient(135deg, #3B82F6 0%, #93C5FD 100%)", // Blue
    },
    {
        label: "Low Stock Warning",
        value: "34",
        change: "Restock soon",
        positive: false,
        icon: <WarningAmberRoundedIcon />,
        color: "#F59E0B",
        bg: "linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)", // Yellow
    },
    {
        label: "New Items",
        value: "15",
        change: "Added this week",
        positive: true,
        icon: <FiberNewRoundedIcon />,
        color: "#10B981",
        bg: "linear-gradient(135deg, #10B981 0%, #6EE7B7 100%)", // Green
    },
];

const RECENT_ORDERS = [
    { id: "#ORD-001", product: "Office Chair",    user: "Maria Santos",   status: "Completed", amount: "₱ 4,500" },
    { id: "#ORD-002", product: "Standing Desk",   user: "Juan Dela Cruz", status: "Pending",   amount: "₱ 12,800" },
    { id: "#ORD-003", product: "Webcam HD",        user: "Ana Reyes",      status: "Completed", amount: "₱ 2,100" },
    { id: "#ORD-004", product: "Wireless Keyboard",user: "Pedro Lim",      status: "Cancelled", amount: "₱ 1,750" },
    { id: "#ORD-005", product: "Monitor 27\"",     user: "Lisa Cruz",      status: "Pending",   amount: "₱ 18,500" },
];

const TOP_PRODUCTS = [
    { name: "Office Chair",     sold: 84,  total: 100 },
    { name: "Standing Desk",    sold: 61,  total: 100 },
    { name: "Monitor 27\"",     sold: 52,  total: 100 },
    { name: "Wireless Keyboard",sold: 45,  total: 100 },
];

const STATUS_COLORS = {
    Completed: "success",
    Pending:   "warning",
    Cancelled: "error",
};

// ----------------------------------------------------------------------

function StatCard({ card }) {
    return (
        <Card sx={{ height: "100%", position: "relative", overflow: "hidden" }}>
            <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                    <Avatar
                        sx={{
                            width: 52, height: 52, borderRadius: 2.5,
                            background: card.bg,
                            boxShadow: `0 8px 16px ${card.color}40`,
                            "& svg": { fontSize: 26, color: "white" },
                        }}
                    >
                        {card.icon}
                    </Avatar>
                    <Chip
                        icon={<TrendingUpRoundedIcon sx={{ fontSize: "14px !important", transform: card.positive ? "none" : "rotate(180deg)" }} />}
                        label={card.change}
                        size="small"
                        sx={{
                            bgcolor: card.positive ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)",
                            color: card.positive ? "#10B981" : "#EF4444",
                            fontWeight: 600, fontSize: 12,
                            "& .MuiChip-icon": { color: "inherit" },
                        }}
                    />
                </Box>
                <Typography variant="h4" fontWeight={800} sx={{ mb: 0.5, fontSize: { xs: "1.5rem", md: "2rem" } }} noWrap>
                    {card.value}
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                    {card.label}
                </Typography>
            </CardContent>
            {/* decorative shape */}
            <Box sx={{
                position: "absolute", bottom: -20, right: -20,
                width: 100, height: 100, borderRadius: "50%",
                background: card.bg, opacity: 0.06,
            }} />
        </Card>
    );
}

// ----------------------------------------------------------------------

export default function DashboardPage() {
    const user = JSON.parse(localStorage.getItem("inv_user") || "{}");
    const userName = user.name || "Admin";

    return (
        <Box>
            {/* Welcome header */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" fontWeight={800}>
                    Good {getGreeting()}, {userName}! 👋
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    Here's what's happening with your inventory today.
                </Typography>
            </Box>

            {/* Stat Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                {STAT_CARDS.map((card) => (
                    <Grid item xs={12} sm={6} lg={3} key={card.label}>
                        <StatCard card={card} />
                    </Grid>
                ))}
            </Grid>

            <Grid container spacing={3}>
                {/* Recent Orders Table */}
                <Grid item xs={12} lg={8}>
                    <Card>
                        <CardContent sx={{ p: 3 }}>
                            <Typography variant="h6" fontWeight={700} sx={{ mb: 2.5 }}>
                                Recent Orders
                            </Typography>
                            <TableContainer component={Paper} elevation={0} sx={{ bgcolor: "transparent" }}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            {["Order ID", "Product", "Customer", "Status", "Amount"].map((h) => (
                                                <TableCell
                                                    key={h}
                                                    sx={{ fontWeight: 700, color: "text.secondary", fontSize: 13, borderBottom: "2px solid", borderColor: "divider", pb: 1.5 }}
                                                >
                                                    {h}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {RECENT_ORDERS.map((row) => (
                                            <TableRow
                                                key={row.id}
                                                sx={{
                                                    "&:last-child td": { border: 0 },
                                                    "&:hover": { bgcolor: "action.hover" },
                                                    transition: "background 0.15s",
                                                }}
                                            >
                                                <TableCell sx={{ fontWeight: 600, color: "primary.main", fontSize: 14 }}>{row.id}</TableCell>
                                                <TableCell sx={{ fontSize: 14 }}>{row.product}</TableCell>
                                                <TableCell sx={{ fontSize: 14, color: "text.secondary" }}>{row.user}</TableCell>
                                                <TableCell>
                                                    <Chip
                                                        label={row.status}
                                                        size="small"
                                                        color={STATUS_COLORS[row.status]}
                                                        sx={{ fontWeight: 600, fontSize: 12 }}
                                                    />
                                                </TableCell>
                                                <TableCell sx={{ fontWeight: 600, fontSize: 14 }}>{row.amount}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Top Products */}
                <Grid item xs={12} lg={4}>
                    <Card sx={{ height: "100%" }}>
                        <CardContent sx={{ p: 3 }}>
                            <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
                                Top Products
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                                {TOP_PRODUCTS.map((p, i) => (
                                    <Box key={p.name}>
                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                                            <Typography variant="body2" fontWeight={600} noWrap sx={{ pr: 2 }}>{p.name}</Typography>
                                            <Typography variant="body2" fontWeight={700} color="primary" sx={{ flexShrink: 0 }}>{p.sold}%</Typography>
                                        </Box>
                                        <LinearProgress
                                            variant="determinate"
                                            value={p.sold}
                                            sx={{
                                                height: 8, borderRadius: 4,
                                                bgcolor: "divider",
                                                "& .MuiLinearProgress-bar": {
                                                    borderRadius: 4,
                                                    background: [
                                                        "linear-gradient(90deg, #4F46E5, #818CF8)",
                                                        "linear-gradient(90deg, #06B6D4, #67E8F9)",
                                                        "linear-gradient(90deg, #10B981, #6EE7B7)",
                                                        "linear-gradient(90deg, #F59E0B, #FCD34D)",
                                                    ][i],
                                                },
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

function getGreeting() {
    const h = new Date().getHours();
    if (h < 12) return "morning";
    if (h < 18) return "afternoon";
    return "evening";
}
