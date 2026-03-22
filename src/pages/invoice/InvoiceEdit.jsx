import React, { useState } from "react";
import {
    Box, Typography, Button, Card, CardContent, Grid,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Paper, TextField, IconButton, Stack, Divider, MenuItem,
    Breadcrumbs, Link, InputAdornment
} from "@mui/material";
import {
    Add as AddIcon,
    Delete as DeleteIcon,
    Save as SaveIcon,
    Close as CloseIcon
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function InvoiceEdit() {
    const navigate = useNavigate();
    
    // Initial data from the screenshot
    const [status, setStatus] = useState("Shipped");
    const [billFrom, setBillFrom] = useState("PineappleInc.");
    const [billTo, setBillTo] = useState("Redq Inc.");
    const [fromAddress, setFromAddress] = useState("Ganesh glory, Godrej garden city, Ahmedabad");
    const [toAddress, setToAddress] = useState("Godrej garden city, Ahmedabad");
    const [items, setItems] = useState([
        { name: "Courge", price: 10, units: 9, total: 90 }
    ]);

    const addItem = () => {
        setItems([...items, { name: "", price: 0, units: 1, total: 0 }]);
    };

    const removeItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    const updateItem = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;
        if (field === "price" || field === "units") {
            newItems[index].total = (newItems[index].price || 0) * (newItems[index].units || 0);
        }
        setItems(newItems);
    };

    const subTotal = items.reduce((sum, item) => sum + (item.total || 0), 0);
    const vat = subTotal * 0.1;
    const grandTotal = subTotal + vat;

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
                        Edit Invoice
                    </Typography>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: 14 }}>
                        <Link underline="hover" color="inherit" onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>Home</Link>
                        <Link underline="hover" color="inherit" onClick={() => navigate("/invoices/list")} sx={{ cursor: "pointer" }}>Invoice List</Link>
                        <Typography color="text.primary">Invoice Edit</Typography>
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
                    📝
                </Box>
            </Paper>

            <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                {/* Top Actions */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, flexWrap: "wrap", gap: 2 }}>
                    <Typography variant="h6" fontWeight="bold" color="text.primary"># 101</Typography>
                    <Stack direction="row" spacing={2}>
                        <Button 
                            variant="contained" 
                            startIcon={<SaveIcon />}
                            sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600, bgcolor: "#4f46e5", px: 3, "&:hover": { bgcolor: "#4338ca" } }}
                            onClick={() => navigate("/invoices/list")}
                        >
                            Save
                        </Button>
                        <Button 
                            variant="outlined" 
                            color="error" 
                            startIcon={<CloseIcon />}
                            sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600, px: 3 }}
                            onClick={() => navigate("/invoices/list")}
                        >
                            Cancel
                        </Button>
                    </Stack>
                </Box>

                <Divider sx={{ mb: 4 }} />

                {/* Form Section */}
                <Grid container spacing={3} sx={{ mb: 5 }}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            select
                            fullWidth
                            label="Order Status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            variant="outlined"
                            size="small"
                        >
                            <MenuItem value="Pending">Pending</MenuItem>
                            <MenuItem value="Shipped">Shipped</MenuItem>
                            <MenuItem value="Delivered">Delivered</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: { md: "right" } }}>
                        <Typography variant="subtitle2" color="text.secondary">Order Date</Typography>
                        <Typography variant="body1" fontWeight="600">Sunday, March 22, 2026</Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField 
                            fullWidth label="Bill From" variant="outlined" size="small" 
                            value={billFrom} 
                            onChange={(e) => setBillFrom(e.target.value)} 
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField 
                            fullWidth label="Bill To" variant="outlined" size="small" 
                            value={billTo} 
                            onChange={(e) => setBillTo(e.target.value)} 
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField 
                            fullWidth label="From Address" multiline rows={3} variant="outlined" size="small" 
                            value={fromAddress} 
                            onChange={(e) => setFromAddress(e.target.value)} 
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField 
                            fullWidth label="Bill To Address" multiline rows={3} variant="outlined" size="small" 
                            value={toAddress} 
                            onChange={(e) => setToAddress(e.target.value)} 
                        />
                    </Grid>
                </Grid>

                {/* Items Section */}
                <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="h6" fontWeight="bold" color="text.primary">Items Details :</Typography>
                    <Button 
                        startIcon={<AddIcon />} 
                        variant="contained" 
                        size="small" 
                        sx={{ bgcolor: "#4f46e5", borderRadius: 1.5, textTransform: "none", py: 0.8, px: 2, "&:hover": { bgcolor: "#4338ca" } }}
                        onClick={addItem}
                    >
                        Add Item
                    </Button>
                </Box>

                <TableContainer component={Paper} elevation={0} variant="outlined" sx={{ borderRadius: 2, mb: 4, borderColor: "#e2e8f0", overflow: "hidden" }}>
                    <Table size="medium">
                        <TableHead sx={{ bgcolor: "#f8fafc" }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: "700", color: "#64748b", py: 2 }}>Item Name</TableCell>
                                <TableCell sx={{ fontWeight: "700", color: "#64748b", py: 2 }} align="right">Unit Price</TableCell>
                                <TableCell sx={{ fontWeight: "700", color: "#64748b", py: 2 }} align="right">Units</TableCell>
                                <TableCell sx={{ fontWeight: "700", color: "#64748b", py: 2 }} align="right">Total Cost</TableCell>
                                <TableCell sx={{ fontWeight: "700", color: "#64748b", py: 2 }} align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((item, index) => (
                                <TableRow key={index} sx={{ "&:hover": { bgcolor: "#f1f5f9" } }}>
                                    <TableCell sx={{ minWidth: 250 }}>
                                        <TextField 
                                            fullWidth size="small" 
                                            placeholder="Enter item name"
                                            value={item.name}
                                            onChange={(e) => updateItem(index, "name", e.target.value)}
                                            variant="outlined"
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <TextField 
                                            type="number" size="small" sx={{ width: 120 }}
                                            value={item.price}
                                            onChange={(e) => updateItem(index, "price", parseFloat(e.target.value))}
                                            InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                                            variant="outlined"
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <TextField 
                                            type="number" size="small" sx={{ width: 80 }}
                                            value={item.units}
                                            onChange={(e) => updateItem(index, "units", parseInt(e.target.value))}
                                            variant="outlined"
                                        />
                                    </TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 600, color: "#1e293b" }}>
                                        ${item.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton size="small" color="error" onClick={() => removeItem(index)} disabled={items.length === 1} sx={{ bgcolor: "#fff1f2", "&:hover": { bgcolor: "#ffe4e6" } }}>
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* Totals Section */}
                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
                    <Box sx={{ width: { xs: "100%", sm: 320 }, p: 3, bgcolor: "#f8fafc", borderRadius: 3 }}>
                        <Stack spacing={2}>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography color="text.secondary">Sub Total:</Typography>
                                <Typography fontWeight="600">${subTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography color="text.secondary">VAT (10%):</Typography>
                                <Typography fontWeight="600">${vat.toLocaleString(undefined, { minimumFractionDigits: 2 })}</Typography>
                            </Box>
                            <Divider sx={{ my: 1 }} />
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant="h6" fontWeight="bold" color="text.primary">Grand Total:</Typography>
                                <Typography variant="h6" fontWeight="bold" color="primary">${grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}
