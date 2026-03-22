import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    Divider,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------

export default function Navbar({ onToggleSidebar, sidebarOpen }) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const handleLogout = () => {
        localStorage.removeItem("inv_auth_token");
        localStorage.removeItem("inv_user");
        navigate("/login");
    };

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                bgcolor: "background.paper",
                borderBottom: "1px solid",
                borderColor: "divider",
                color: "text.primary",
                zIndex: (theme) => theme.zIndex.drawer - 1,
            }}
        >
            <Toolbar
                sx={{ gap: 1, minHeight: { xs: 64 }, px: { xs: 2, sm: 3 } }}
            >
                {/* Sidebar toggle */}
                <Tooltip
                    title={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
                >
                    <IconButton
                        edge="start"
                        onClick={onToggleSidebar}
                        sx={{ color: "text.secondary" }}
                    >
                        {sidebarOpen ? (
                            <MenuOpenRoundedIcon />
                        ) : (
                            <MenuRoundedIcon />
                        )}
                    </IconButton>
                </Tooltip>

                {/* Page title */}
                <Box sx={{ flexGrow: 1 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            color: "text.primary",
                            fontSize: { xs: "1.1rem", sm: "1.25rem" },
                        }}
                    >
                        Inventory Management System
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{
                            color: "text.secondary",
                            display: { xs: "none", sm: "block" },
                        }}
                    >
                        {new Date().toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </Typography>
                </Box>

                {/* Theme toggle (decorative for now) */}
                <Tooltip title="Toggle theme">
                    <IconButton
                        sx={{
                            color: "text.secondary",
                            display: { xs: "none", sm: "inline-flex" },
                        }}
                    >
                        <LightModeRoundedIcon />
                    </IconButton>
                </Tooltip>

                {/* Notifications */}
                <Tooltip title="Notifications">
                    <IconButton sx={{ color: "text.secondary" }}>
                        <Badge badgeContent={3} color="primary">
                            <NotificationsRoundedIcon />
                        </Badge>
                    </IconButton>
                </Tooltip>

                {/* User avatar */}
                <Tooltip title="Account">
                    <IconButton onClick={handleMenuOpen} sx={{ p: 0.5 }}>
                        <Avatar
                            sx={{
                                width: 36,
                                height: 36,
                                background:
                                    "linear-gradient(135deg, #4F46E5, #818CF8)",
                                fontSize: 14,
                                fontWeight: 700,
                                cursor: "pointer",
                            }}
                        >
                            A
                        </Avatar>
                    </IconButton>
                </Tooltip>

                {/* User dropdown menu */}
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            mt: 1,
                            minWidth: 200,
                            border: "1px solid",
                            borderColor: "divider",
                            borderRadius: 2,
                            "& .MuiMenuItem-root": {
                                borderRadius: 1,
                                mx: 1,
                                px: 1.5,
                            },
                        },
                    }}
                >
                    <Box sx={{ px: 2, py: 1.5 }}>
                        <Typography variant="subtitle2" fontWeight={700}>
                            Admin User
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            admin@inventory.com
                        </Typography>
                    </Box>
                    <Divider />
                    <MenuItem onClick={handleMenuClose} sx={{ mt: 0.5 }}>
                        <ListItemIcon>
                            <AccountCircleRoundedIcon fontSize="small" />
                        </ListItemIcon>
                        My Profile
                    </MenuItem>
                    <Divider />
                    <MenuItem
                        onClick={handleLogout}
                        sx={{ color: "error.main", mb: 0.5 }}
                    >
                        <ListItemIcon>
                            <LogoutRoundedIcon fontSize="small" color="error" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}
