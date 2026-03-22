import React, { useState } from "react";
import {
    Box, Typography, Button, Card, CardContent, Grid,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Paper, Chip, IconButton, TextField, InputAdornment,
    Breadcrumbs, Link, Stack
} from "@mui/material";
import {
    Add as AddIcon,
    Search as SearchIcon,
    Edit as EditIcon,
    Visibility as VisibilityIcon,
    Delete as DeleteIcon,
    Description as DescriptionIcon,
    LocalShipping as ShippedIcon,
    CheckCircle as DeliveredIcon,
    Pending as PendingIcon
} from "@mui/icons-material";

const MOCK_INVOICES = [
    { id: "101", billFrom: "PineappleInc.", billTo: "Redq Inc.", totalCost: 90, status: "Shipped" },
    { id: "102", billFrom: "Pineapple.", billTo: "ME Inc.", totalCost: 90, status: "Delivered" },
    { id: "103", billFrom: "Incorporation.", billTo: "RedIncved.", totalCost: 90, status: "Pending" },
    { id: "104", billFrom: "PineappleTimes.", billTo: "RFc.", totalCost: 90, status: "Shipped" },
    { id: "105", billFrom: "FortuneCreation", billTo: "Soft solution.", totalCost: 90, status: "Delivered" },
    { id: "106", billFrom: "PineappleTimes.", billTo: "RFc.", totalCost: 90, status: "Shipped" },
    { id: "107", billFrom: "FortuneCreation", billTo: "Soft solution.", totalCost: 90, status: "Delivered" },
];

const STATS = [
    { label: "Total", count: "7 Invoices", icon: <DescriptionIcon />, color: "#eef2ff", iconColor: "#4f46e5" },
    { label: "Shipped", count: "3 Invoices", icon: <ShippedIcon />, color: "#e0f2fe", iconColor: "#0ea5e9" },
    { label: "Delivered", count: "3 Invoices", icon: <DeliveredIcon />, color: "#f0fdf4", iconColor: "#22c55e" },
    { label: "Pending", count: "1 Invoices", icon: <PendingIcon />, color: "#fffbeb", iconColor: "#f59e0b" },
];

export default function InvoiceList() {
    const [searchTerm, setSearchTerm] = useState("");

    const getStatusColor = (status) => {
        switch (status) {
            case "Shipped": return "primary";
            case "Delivered": return "success";
            case "Pending": return "warning";
            default: return "default";
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            {/* Header */}
            <Paper 
                sx={{ 
                    p: 4, 
                    mb: 4, 
                    borderRadius: 3, 
                    background: "linear-gradient(135deg, #eef2ff 0%, #e0f2fe 100%)",
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    position: "relative",
                    overflow: "hidden"
                }}
            >
                <Box>
                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, color: "#1e293b" }}>
                        Invoice List
                    </Typography>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: 14 }}>
                        <Link underline="hover" color="inherit" href="/">Home</Link>
                        <Typography color="text.primary">Invoice List</Typography>
                    </Breadcrumbs>
                </Box>
                <Box sx={{ 
                    position: "absolute", 
                    right: 40, 
                    top: -10, 
                    fontSize: 80, 
                    opacity: 0.2,
                    display: { xs: "none", md: "block" }
                }}>
                    🧾
                </Box>
            </Paper>

            {/* Stats Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                {STATS.map((stat) => (
                    <Grid item xs={12} sm={6} md={3} key={stat.label}>
                        <Card sx={{ bgcolor: stat.color, boxShadow: "none", borderRadius: 3 }}>
                            <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <Box
                                    sx={{
                                        p: 1.5,
                                        borderRadius: 2,
                                        bgcolor: "white",
                                        color: stat.iconColor,
                                        display: "flex",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                                    }}
                                >
                                    {stat.icon}
                                </Box>
                                <Box>
                                    <Typography variant="subtitle2" fontWeight="bold" color="text.primary">
                                        {stat.label}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {stat.count}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Table Area */}
            <Paper sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.05)", overflow: "hidden" }}>
                <Box sx={{ p: 2.5, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
                    <TextField
                        size="small"
                        placeholder="Search Invoices..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ fontSize: 20 }} />
                                </InputAdornment>
                            ),
                        }}
                        sx={{ width: { xs: "100%", sm: 250 } }}
                    />
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        sx={{ 
                            borderRadius: 2, 
                            textTransform: "none",
                            bgcolor: "#4f46e5",
                            height: 40,
                            "&:hover": { bgcolor: "#4338ca" }
                        }}
                    >
                        New Invoice
                    </Button>
                </Box>

                <TableContainer>
                    <Table>
                        <TableHead sx={{ bgcolor: "#f8fafc" }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: "bold", color: "#64748b" }}>Id</TableCell>
                                <TableCell sx={{ fontWeight: "bold", color: "#64748b" }}>Bill From</TableCell>
                                <TableCell sx={{ fontWeight: "bold", color: "#64748b" }}>Bill To</TableCell>
                                <TableCell sx={{ fontWeight: "bold", color: "#64748b" }}>Total Cost</TableCell>
                                <TableCell sx={{ fontWeight: "bold", color: "#64748b" }}>Status</TableCell>
                                <TableCell sx={{ fontWeight: "bold", color: "#64748b" }} align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {MOCK_INVOICES.map((row) => (
                                <TableRow key={row.id} hover sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                    <TableCell fontWeight="500">{row.id}</TableCell>
                                    <TableCell sx={{ fontWeight: 500 }}>{row.billFrom}</TableCell>
                                    <TableCell>{row.billTo}</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }}>${row.totalCost}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={row.status}
                                            color={getStatusColor(row.status)}
                                            size="small"
                                            sx={{ fontWeight: 600, fontSize: 11, borderRadius: 1.5 }}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        <Stack direction="row" spacing={0.5} justifyContent="center">
                                            <IconButton size="small" color="primary" title="Edit"><EditIcon fontSize="small" /></IconButton>
                                            <IconButton size="small" color="info" title="View"><VisibilityIcon fontSize="small" /></IconButton>
                                            <IconButton size="small" color="error" title="Delete"><DeleteIcon fontSize="small" /></IconButton>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}
