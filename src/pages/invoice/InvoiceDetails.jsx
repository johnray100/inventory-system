import React from "react";
import {
    Box, Typography, Button, Card, CardContent, Grid,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Paper, Chip, Breadcrumbs, Link, Stack, Divider
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function InvoiceDetails() {
    const navigate = useNavigate();

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
                        Invoice Detail
                    </Typography>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: 14 }}>
                        <Link underline="hover" color="inherit" onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>Home</Link>
                        <Link underline="hover" color="inherit" onClick={() => navigate("/invoices/list")} sx={{ cursor: "pointer" }}>Invoice List</Link>
                        <Typography color="text.primary">Invoice Details</Typography>
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
                    📄
                </Box>
            </Paper>

            <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                {/* ID and Logo Section */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 5 }}>
                    <Box>
                        <Typography variant="h6" fontWeight="bold" color="text.primary">
                            # 101
                        </Typography>
                        <Chip 
                            label="Sunday, March 22, 2026" 
                            size="small" 
                            sx={{ mt: 1, bgcolor: "#f1f5f9", color: "#64748b", fontWeight: 500 }} 
                        />
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                            <Box sx={{ width: 32, height: 32, bgcolor: "#4f46e5", borderRadius: 1, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 16 }}>📦</Box>
                            <Typography variant="h6" fontWeight="bold">Modernize</Typography>
                        </Box>
                        <Chip label="Shipped" color="primary" size="small" sx={{ fontWeight: 600 }} />
                    </Box>
                </Box>

                {/* Addresses Section */}
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    <Grid item xs={12} md={6}>
                        <Card variant="outlined" sx={{ borderRadius: 2, height: "100%", boxShadow: "none", borderColor: "#e2e8f0" }}>
                            <CardContent sx={{ p: 3 }}>
                                <Typography variant="subtitle2" fontWeight="bold" color="text.secondary" gutterBottom>
                                    From :
                                </Typography>
                                <Typography variant="body1" fontWeight="bold" sx={{ mt: 1.5 }}>
                                    PineappleInc.
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                                    first@xabz.com
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Ganesh glory, Godrej garden city, Ahmedabad.
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontWeight: 500 }}>
                                    979796786
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card variant="outlined" sx={{ borderRadius: 2, height: "100%", boxShadow: "none", borderColor: "#e2e8f0" }}>
                            <CardContent sx={{ p: 3 }}>
                                <Typography variant="subtitle2" fontWeight="bold" color="text.secondary" gutterBottom>
                                    To :
                                </Typography>
                                <Typography variant="body1" fontWeight="bold" sx={{ mt: 1.5 }}>
                                    Redq Inc.
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                                    toFirst@agth.com
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Godrej garden city, Ahmedabad.
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontWeight: 500 }}>
                                    757575233
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Items Table */}
                <TableContainer component={Paper} elevation={0} variant="outlined" sx={{ borderRadius: 2, mb: 4, borderColor: "#e2e8f0" }}>
                    <Table>
                        <TableHead sx={{ bgcolor: "#f8fafc" }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: "bold", color: "#64748b" }}>Item Name</TableCell>
                                <TableCell align="right" sx={{ fontWeight: "bold", color: "#64748b" }}>Unit Price</TableCell>
                                <TableCell align="right" sx={{ fontWeight: "bold", color: "#64748b" }}>Unit</TableCell>
                                <TableCell align="right" sx={{ fontWeight: "bold", color: "#64748b" }}>Total Cost</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell sx={{ fontWeight: 500 }}>Courge</TableCell>
                                <TableCell align="right">$10</TableCell>
                                <TableCell align="right">9</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 600 }}>$90</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* Totals Section */}
                <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 6 }}>
                    <Box sx={{ width: { xs: "100%", sm: 300 } }}>
                        <Stack spacing={2}>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography color="text.secondary">Sub Total:</Typography>
                                <Typography fontWeight="600">$90</Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography color="text.secondary">Vat:</Typography>
                                <Typography fontWeight="600">$9</Typography>
                            </Box>
                            <Divider />
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant="h6" fontWeight="bold">Grand Total:</Typography>
                                <Typography variant="h6" fontWeight="bold" color="primary">$99</Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Box>

                {/* Footer Buttons */}
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="flex-end">
                    <Button 
                        variant="contained" 
                        color="primary" 
                        sx={{ 
                            borderRadius: 2, 
                            textTransform: "none", 
                            px: 3, 
                            height: 44,
                            bgcolor: "#4f46e5",
                            fontWeight: 600,
                            "&:hover": { bgcolor: "#4338ca" }
                        }}
                        onClick={() => navigate("/invoices/edit")}
                    >
                        Edit Invoice
                    </Button>
                    <Button 
                        variant="outlined" 
                        color="inherit" 
                        sx={{ 
                            borderRadius: 2, 
                            textTransform: "none", 
                            px: 3, 
                            height: 44,
                            borderColor: "#e2e8f0", 
                            fontWeight: 600,
                            color: "#64748b",
                            "&:hover": { borderColor: "#cbd5e1", bgcolor: "#f8fafc" }
                        }}
                        onClick={() => navigate("/invoices/list")}
                    >
                        Back to Invoice List
                    </Button>
                </Stack>
            </Paper>
        </Box>
    );
}
