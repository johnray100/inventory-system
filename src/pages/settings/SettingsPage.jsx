import React, { useState } from "react";
import {
    Box, Typography, Grid, Card, Stack, 
    Divider, Button, TextField, Switch, FormControlLabel,
    Breadcrumbs, Link, Avatar, IconButton, Tab, Tabs
} from "@mui/material";
import {
    Person as PersonIcon,
    Notifications as NotificationsIcon,
    Security as SecurityIcon,
    Save as SaveIcon,
    CameraAlt as CameraIcon
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function SettingsPage() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [tab, setTab] = useState(0);

    return (
        <Box sx={{ p: 4 }}>
            {/* Header */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>Account Settings</Typography>
                <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: 14 }}>
                    <Link underline="hover" color="inherit" onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>Home</Link>
                    <Typography color="text.primary">Settings</Typography>
                </Breadcrumbs>
            </Box>

            <Grid container spacing={4}>
                {/* Profile Section */}
                <Grid item xs={12} md={4}>
                    <Card sx={{ p: 4, borderRadius: 4, boxShadow: "0 4px 24px rgba(0,0,0,0.06)", textAlign: "center" }}>
                        <Box sx={{ position: "relative", width: 120, height: 120, mx: "auto", mb: 3 }}>
                            <Avatar sx={{ width: 120, height: 120, bgcolor: "#4f46e5", fontSize: 40, fontWeight: "bold" }}>
                                {user?.name?.charAt(0) || "A"}
                            </Avatar>
                            <IconButton 
                                size="small" 
                                sx={{ position: "absolute", bottom: 0, right: 0, bgcolor: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", "&:hover": { bgcolor: "#f8fafc" } }}
                            >
                                <CameraIcon fontSize="small" color="primary" />
                            </IconButton>
                        </Box>
                        <Typography variant="h6" fontWeight="bold">{user?.name || "Admin User"}</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>Administrator</Typography>
                        <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>Allowed JPG, GIF or PNG. Max size of 800K</Typography>
                    </Card>

                    <Card sx={{ mt: 3, p: 2, borderRadius: 4, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                        <Tabs 
                            value={tab} 
                            onChange={(e, v) => setTab(v)} 
                            orientation="vertical"
                            sx={{
                                "& .MuiTabs-indicator": { left: 0, width: 3, borderRadius: "0 4px 4px 0" },
                                "& .MuiTab-root": { alignItems: "flex-start", textTransform: "none", fontWeight: 600, minHeight: 48, px: 2, borderRadius: 2 }
                            }}
                        >
                            <Tab icon={<PersonIcon sx={{ fontSize: 20, mr: 1.5 }} />} iconPosition="start" label="Account Details" />
                            <Tab icon={<NotificationsIcon sx={{ fontSize: 20, mr: 1.5 }} />} iconPosition="start" label="Notifications" />
                            <Tab icon={<SecurityIcon sx={{ fontSize: 20, mr: 1.5 }} />} iconPosition="start" label="Security" />
                        </Tabs>
                    </Card>
                </Grid>

                {/* Form Section */}
                <Grid item xs={12} md={8}>
                    <Card sx={{ p: 4, borderRadius: 4, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                        {tab === 0 && (
                            <Box>
                                <Typography variant="h6" fontWeight="bold" sx={{ mb: 4 }}>Profile Details</Typography>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="First Name" defaultValue="Mathew" size="small" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="Last Name" defaultValue="Anderson" size="small" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="Email" defaultValue="mathew@modernize.com" size="small" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="Phone" defaultValue="+1 (234) 567 890" size="small" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField fullWidth label="Address" defaultValue="123 Modernize St, New York" size="small" variant="outlined" />
                                    </Grid>
                                </Grid>
                            </Box>
                        )}

                        {tab === 1 && (
                            <Box>
                                <Typography variant="h6" fontWeight="bold" sx={{ mb: 4 }}>Notification Preferences</Typography>
                                <Stack spacing={3}>
                                    <FormControlLabel control={<Switch defaultChecked />} label={<Typography variant="body2" fontWeight="600">Email Notifications</Typography>} />
                                    <Typography variant="caption" color="text.secondary" sx={{ mt: -1, display: "block", ml: 7 }}>Get emails about critical inventory updates and order alerts.</Typography>
                                    
                                    <Divider />
                                    
                                    <FormControlLabel control={<Switch defaultChecked />} label={<Typography variant="body2" fontWeight="600">Desktop Push Notifications</Typography>} />
                                    <Typography variant="caption" color="text.secondary" sx={{ mt: -1, display: "block", ml: 7 }}>Show notifications directly on your screen.</Typography>

                                    <Divider />

                                    <FormControlLabel control={<Switch />} label={<Typography variant="body2" fontWeight="600">Monthly Reports</Typography>} />
                                    <Typography variant="caption" color="text.secondary" sx={{ mt: -1, display: "block", ml: 7 }}>Automatically receive monthly performance summaries.</Typography>
                                </Stack>
                            </Box>
                        )}

                        {tab === 2 && (
                            <Box>
                                <Typography variant="h6" fontWeight="bold" sx={{ mb: 4 }}>Security Settings</Typography>
                                <Stack spacing={3}>
                                    <TextField fullWidth label="Current Password" type="password" size="small" variant="outlined" />
                                    <TextField fullWidth label="New Password" type="password" size="small" variant="outlined" />
                                    <TextField fullWidth label="Confirm Password" type="password" size="small" variant="outlined" />
                                    
                                    <Divider sx={{ my: 1 }} />
                                    
                                    <Typography variant="subtitle2" fontWeight="bold" color="error">Danger Zone</Typography>
                                    <Button variant="outlined" color="error" sx={{ textTransform: "none", borderRadius: 2, fontWeight: 600, width: "fit-content" }}>
                                        Deactivate Account
                                    </Button>
                                </Stack>
                            </Box>
                        )}

                        <Box sx={{ mt: 5, display: "flex", gap: 2 }}>
                            <Button 
                                variant="contained" 
                                startIcon={<SaveIcon />}
                                sx={{ borderRadius: 2, bgcolor: "#4f46e5", textTransform: "none", fontWeight: 600, px: 3, "&:hover": { bgcolor: "#4338ca" } }}
                            >
                                Save Changes
                            </Button>
                            <Button variant="outlined" sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600, px: 3, borderColor: "#e2e8f0", color: "#64748b" }}>
                                Reset
                            </Button>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
