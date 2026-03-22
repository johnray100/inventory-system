import React, { useState } from "react";
import {
    Box, Typography, Button, Grid, TextField,
    Paper, MenuItem, Avatar, IconButton, Stack, Divider, Breadcrumbs, Link
} from "@mui/material";
import {
    Save as SaveIcon,
    Close as CloseIcon,
    CameraAlt as CameraIcon
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function UserEdit() {
    const navigate = useNavigate();
    const [status, setStatus] = useState("Active");
    const [role, setRole] = useState("Admin");

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
                        Edit User
                    </Typography>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: 14 }}>
                        <Link underline="hover" color="inherit" onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>Home</Link>
                        <Link underline="hover" color="inherit" onClick={() => navigate("/users/list")} sx={{ cursor: "pointer" }}>User List</Link>
                        <Typography color="text.primary">Edit User</Typography>
                    </Breadcrumbs>
                </Box>
                <Box sx={{ position: "absolute", right: 40, top: -10, fontSize: 80, opacity: 0.2, display: { xs: "none", md: "block" } }}>
                    👤
                </Box>
            </Paper>

            <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, flexWrap: "wrap", gap: 2 }}>
                    <Typography variant="h6" fontWeight="bold" color="text.primary">User #1234</Typography>
                    <Stack direction="row" spacing={2}>
                        <Button 
                            variant="contained" 
                            startIcon={<SaveIcon />}
                            sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600, bgcolor: "#4f46e5", px: 3, "&:hover": { bgcolor: "#4338ca" } }}
                            onClick={() => navigate("/users/list")}
                        >
                            Save Changes
                        </Button>
                        <Button 
                            variant="outlined" 
                            color="error" 
                            startIcon={<CloseIcon />}
                            sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600, px: 3 }}
                            onClick={() => navigate("/users/list")}
                        >
                            Cancel
                        </Button>
                    </Stack>
                </Box>

                <Divider sx={{ mb: 5 }} />

                <Grid container spacing={5}>
                    {/* Avatar Section */}
                    <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                        <Box sx={{ position: "relative", width: 140, height: 140, mx: "auto", mb: 3 }}>
                            <Avatar sx={{ width: 140, height: 140, bgcolor: "#4f46e5", fontSize: 50, fontWeight: "bold" }}>MA</Avatar>
                            <IconButton 
                                size="small" 
                                sx={{ position: "absolute", bottom: 5, right: 5, bgcolor: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.15)", "&:hover": { bgcolor: "#f8fafc" } }}
                            >
                                <CameraIcon fontSize="small" color="primary" />
                            </IconButton>
                        </Box>
                        <Typography variant="body2" color="text.secondary">Allowed JPG, GIF or PNG. Max size of 800K</Typography>
                    </Grid>

                    {/* Inputs Section */}
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Full Name" size="small" defaultValue="Mathew Anderson" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Email Address" size="small" defaultValue="mathew@modernize.com" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    select fullWidth label="Role" size="small"
                                    value={role} onChange={(e) => setRole(e.target.value)}
                                    variant="outlined"
                                >
                                    <MenuItem value="Admin">Admin</MenuItem>
                                    <MenuItem value="Editor">Editor</MenuItem>
                                    <MenuItem value="Subscriber">Subscriber</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    select fullWidth label="Status" size="small"
                                    value={status} onChange={(e) => setStatus(e.target.value)}
                                    variant="outlined"
                                >
                                    <MenuItem value="Active">Active</MenuItem>
                                    <MenuItem value="Pending">Pending</MenuItem>
                                    <MenuItem value="Banned">Banned</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    fullWidth label="About User" 
                                    defaultValue="Hello, I am Mathew Anderson. I love to work in the technology field." 
                                    multiline rows={3} size="small" 
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}
