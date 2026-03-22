import React from "react";
import {
    Box, Typography, Grid, Card, Paper, Stack, 
    Divider, Button, IconButton, Breadcrumbs, Link,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip
} from "@mui/material";
import {
    FileDownload as DownloadIcon,
    MoreVert as MoreVertIcon,
    CalendarMonth as CalendarIcon
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const STATS = [
    { label: "Total Sales", value: "$45,285", growth: "+12.5%", color: "#4f46e5", icon: "💰" },
    { label: "Net Profit", value: "$12,450", growth: "+8.2%", color: "#10b981", icon: "📈" },
    { label: "Total Orders", value: "1,245", growth: "-3.1%", color: "#f59e0b", icon: "📦" },
    { label: "New Customers", value: "48", growth: "+15.3%", color: "#ef4444", icon: "👤" },
];

const RECENT_REPORTS = [
    { date: "2026-03-21", name: "Monthly Sales Report", status: "Generated", size: "1.2 MB" },
    { date: "2026-03-20", name: "Inventory Audit Q1", status: "Archive", size: "4.5 MB" },
    { date: "2026-03-18", name: "Supplier Performance", status: "Generated", size: "850 KB" },
    { date: "2026-03-15", name: "Expense Tracking", status: "Pending", size: "-" },
];

export default function ReportPage() {
    const navigate = useNavigate();

    return (
        <Box sx={{ p: 3 }}>
            {/* Header */}
            <Paper 
                sx={{ 
                    p: 4, mb: 4, borderRadius: 3, 
                    background: "linear-gradient(135deg, #eef2ff 0%, #e0f2fe 100%)",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    position: "relative", overflow: "hidden"
                }}
            >
                <Box>
                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, color: "#1e293b" }}>
                        Analytics & Reports
                    </Typography>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: 14 }}>
                        <Link underline="hover" color="inherit" onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>Home</Link>
                        <Typography color="text.primary">Reports</Typography>
                    </Breadcrumbs>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button variant="outlined" startIcon={<CalendarIcon />} sx={{ borderRadius: 2, bgcolor: "white", textTransform: "none" }}>
                        March 2026
                    </Button>
                    <Button variant="contained" startIcon={<DownloadIcon />} sx={{ borderRadius: 2, bgcolor: "#4f46e5", textTransform: "none", "&:hover": { bgcolor: "#4338ca" } }}>
                        Export
                    </Button>
                </Box>
            </Paper>

            {/* Stats Grid */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                {STATS.map((stat, index) => (
                    <Grid item xs={12} sm={6} lg={3} key={index}>
                        <Card sx={{ p: 3, borderRadius: 4, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                                <Box sx={{ fontSize: 24, p: 1.5, bgcolor: `${stat.color}15`, borderRadius: 3 }}>{stat.icon}</Box>
                                <Typography variant="caption" sx={{ color: stat.growth.startsWith("+") ? "#10b981" : "#ef4444", fontWeight: "bold", mt: 1 }}>
                                    {stat.growth}
                                </Typography>
                            </Box>
                            <Typography variant="h5" fontWeight="bold" sx={{ mb: 0.5 }}>{stat.value}</Typography>
                            <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Grid container spacing={3}>
                {/* Visual Placeholder (Simulated Chart) */}
                <Grid item xs={12} lg={8}>
                    <Card sx={{ p: 4, borderRadius: 4, boxShadow: "0 4px 20px rgba(0,0,0,0.05)", height: "100%" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
                            <Typography variant="h6" fontWeight="bold">Sales Overview</Typography>
                            <IconButton><MoreVertIcon /></IconButton>
                        </Box>
                        
                        {/* Simulated Bar Chart */}
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", height: 220, gap: 1, px: 2 }}>
                            {[40, 70, 45, 90, 65, 80, 55, 75, 50, 85].map((h, i) => (
                                <Box key={i} sx={{ width: "8%", height: `${h}%`, bgcolor: i === 3 ? "#4f46e5" : "#e2e8f0", borderRadius: "4px 4px 0 0", transition: "all 0.3s", "&:hover": { bgcolor: "#4f46e5", opacity: 0.8 } }} />
                            ))}
                        </Box>
                        <Stack direction="row" justifyContent="space-between" sx={{ mt: 2, px: 2 }}>
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map(m => (
                                <Typography key={m} variant="caption" color="text.secondary">{m}</Typography>
                            ))}
                        </Stack>
                    </Card>
                </Grid>

                {/* Recent Activities */}
                <Grid item xs={12} lg={4}>
                    <Card sx={{ p: 4, borderRadius: 4, boxShadow: "0 4px 20px rgba(0,0,0,0.05)", height: "100%" }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>Recent Activity</Typography>
                        <Stack spacing={3}>
                            {[
                                { title: "New order placed", time: "5 min ago", color: "#4f46e5" },
                                { title: "Inventory stock alert", time: "2 hrs ago", color: "#ef4444" },
                                { title: "System backup complete", time: "5 hrs ago", color: "#10b981" },
                                { title: "New user registered", time: "Yesterday", color: "#f59e0b" },
                            ].map((item, i) => (
                                <Box key={i} sx={{ display: "flex", gap: 2 }}>
                                    <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: item.color, mt: 0.5, flexShrink: 0 }} />
                                    <Box>
                                        <Typography variant="body2" fontWeight="600">{item.title}</Typography>
                                        <Typography variant="caption" color="text.secondary">{item.time}</Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Stack>
                        <Button fullWidth variant="outlined" sx={{ mt: 4, borderRadius: 2, textTransform: "none", borderColor: "#e2e8f0", color: "#64748b" }}>View All</Button>
                    </Card>
                </Grid>

                {/* Reports Table */}
                <Grid item xs={12}>
                    <Card sx={{ borderRadius: 4, boxShadow: "0 4px 20px rgba(0,0,0,0.05)", mt: 1 }}>
                        <Box sx={{ p: 3 }}>
                            <Typography variant="h6" fontWeight="bold">Downloadable Reports</Typography>
                        </Box>
                        <TableContainer>
                            <Table>
                                <TableHead sx={{ bgcolor: "#f8fafc" }}>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: "700", color: "#64748b" }}>Date</TableCell>
                                        <TableCell sx={{ fontWeight: "700", color: "#64748b" }}>Report Name</TableCell>
                                        <TableCell sx={{ fontWeight: "700", color: "#64748b" }}>Size</TableCell>
                                        <TableCell sx={{ fontWeight: "700", color: "#64748b" }}>Status</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: "700", color: "#64748b" }}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {RECENT_REPORTS.map((report, index) => (
                                        <TableRow key={index} hover sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                            <TableCell sx={{ color: "text.secondary" }}>{report.date}</TableCell>
                                            <TableCell sx={{ fontWeight: "600" }}>{report.name}</TableCell>
                                            <TableCell sx={{ color: "text.secondary" }}>{report.size}</TableCell>
                                            <TableCell>
                                                <Chip 
                                                    label={report.status} 
                                                    size="small" 
                                                    sx={{ 
                                                        bgcolor: report.status === "Generated" ? "#f0fdf4" : report.status === "Pending" ? "#fffbeb" : "#f1f5f9",
                                                        color: report.status === "Generated" ? "#16a34a" : report.status === "Pending" ? "#d97706" : "#475569",
                                                        fontWeight: "600",
                                                        borderRadius: 1.5
                                                    }} 
                                                />
                                            </TableCell>
                                            <TableCell align="right">
                                                <IconButton size="small" color="primary" sx={{ bgcolor: "#f1f5f9", "&:hover": { bgcolor: "#e2e8f0" } }}><DownloadIcon fontSize="small" /></IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
