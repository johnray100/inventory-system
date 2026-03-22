import React from "react";
import {
    Box, Typography, Card, Grid, Avatar, Stack, Button,
    Divider, IconButton, Tab, Tabs, Breadcrumbs, Link
} from "@mui/material";
import {
    Email as EmailIcon,
    Phone as PhoneIcon,
    LocationOn as LocationOnIcon,
    Work as WorkIcon,
    Edit as EditIcon,
    CameraAlt as CameraIcon
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
    const navigate = useNavigate();

    return (
        <Box sx={{ p: 3 }}>
            {/* Header / Breadcrumbs */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>User Profile</Typography>
                <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: 14 }}>
                    <Link underline="hover" color="inherit" onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>Home</Link>
                    <Typography color="text.primary">Profile</Typography>
                </Breadcrumbs>
            </Box>

            <Grid container spacing={4}>
                {/* Profile Card */}
                <Grid item xs={12} md={4}>
                    <Card sx={{ p: 4, textAlign: "center", borderRadius: 4, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
                        <Box sx={{ position: "relative", width: 120, height: 120, mx: "auto", mb: 3 }}>
                            <Avatar sx={{ width: 120, height: 120, bgcolor: "#4f46e5", fontSize: 40, fontWeight: "bold" }}>MA</Avatar>
                            <IconButton 
                                size="small" 
                                sx={{ position: "absolute", bottom: 0, right: 0, bgcolor: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", "&:hover": { bgcolor: "#f8fafc" } }}
                            >
                                <CameraIcon fontSize="small" color="primary" />
                            </IconButton>
                        </Box>
                        <Typography variant="h6" fontWeight="bold">Mathew Anderson</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>Administrator</Typography>
                        
                        <Button 
                            variant="contained" 
                            fullWidth 
                            startIcon={<EditIcon />}
                            sx={{ bgcolor: "#4f46e5", borderRadius: 2, textTransform: "none", fontWeight: 600, py: 1 }}
                            onClick={() => navigate("/users/edit")}
                        >
                            Edit Profile
                        </Button>
                    </Card>
                </Grid>

                {/* Details Tab Section */}
                <Grid item xs={12} md={8}>
                    <Card sx={{ borderRadius: 4, boxShadow: "0 4px 20px rgba(0,0,0,0.05)", overflow: "hidden" }}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <Tabs value={0} textColor="primary" indicatorColor="primary">
                                <Tab label="Personal Details" sx={{ textTransform: "none", fontWeight: "bold" }} />
                                <Tab label="Security" sx={{ textTransform: "none", fontWeight: "bold" }} />
                            </Tabs>
                        </Box>
                        <Box sx={{ p: 4 }}>
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>User Information</Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Box sx={{ p: 1.5, bgcolor: "#f1f5f9", borderRadius: 2, color: "#4f46e5" }}><EmailIcon fontSize="small" /></Box>
                                        <Box>
                                            <Typography variant="caption" color="text.secondary">Email Address</Typography>
                                            <Typography variant="body2" fontWeight="600">mathew@modernize.com</Typography>
                                        </Box>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Box sx={{ p: 1.5, bgcolor: "#f1f5f9", borderRadius: 2, color: "#4f46e5" }}><PhoneIcon fontSize="small" /></Box>
                                        <Box>
                                            <Typography variant="caption" color="text.secondary">Phone Number</Typography>
                                            <Typography variant="body2" fontWeight="600">+1 (234) 567 890</Typography>
                                        </Box>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Box sx={{ p: 1.5, bgcolor: "#f1f5f9", borderRadius: 2, color: "#4f46e5" }}><WorkIcon fontSize="small" /></Box>
                                        <Box>
                                            <Typography variant="caption" color="text.secondary">Occupation</Typography>
                                            <Typography variant="body2" fontWeight="600">System Administrator</Typography>
                                        </Box>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Box sx={{ p: 1.5, bgcolor: "#f1f5f9", borderRadius: 2, color: "#4f46e5" }}><LocationOnIcon fontSize="small" /></Box>
                                        <Box>
                                            <Typography variant="caption" color="text.secondary">Location</Typography>
                                            <Typography variant="body2" fontWeight="600">New York, USA</Typography>
                                        </Box>
                                    </Stack>
                                </Grid>
                            </Grid>

                            <Divider sx={{ my: 4 }} />

                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>About Me</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                                Hello, I am Mathew Anderson. I love to work in the technology field. I am a system administrator with 5 years of experience in managing high-traffic websites and complex infrastructure. I am passionate about learning new technologies and improving system performance.
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
