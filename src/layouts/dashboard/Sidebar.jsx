import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import {
    Avatar,
    Box,
    Collapse,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Tooltip,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

// ----------------------------------------------------------------------

const NAV_ITEMS = [
    { label: "Dashboard", icon: <DashboardRoundedIcon />, path: "/" },
    { label: "Inventory", icon: <Inventory2RoundedIcon />, path: "/inventory" },
    {
        label: "Invoice",
        icon: <ReceiptLongRoundedIcon />,
        path: "/invoices",
        children: [
            { label: "List", path: "/invoices/list" },
            { label: "Details", path: "/invoices/details" },
            { label: "Create", path: "/invoices/create" },
            { label: "Edit", path: "/invoices/edit" },
        ],
    },
    {
        label: "Users",
        icon: <PeopleRoundedIcon />,
        path: "/users",
        children: [
            { label: "Profile", path: "/users/profile" },
            { label: "List", path: "/users/list" },
            { label: "Edit", path: "/users/edit" },
        ],
    },
    { label: "Reports", icon: <BarChartRoundedIcon />, path: "/reports" },
    { label: "Settings", icon: <SettingsRoundedIcon />, path: "/settings" },
];

const SIDEBAR_STYLES = {
    bg: "#0F172A",
    text: "#94A3B8",
    activeText: "#FFFFFF",
    activeBg: "#4F46E5",
    hoverBg: "#1E293B",
};

// ----------------------------------------------------------------------

export default function Sidebar({ open, width, collapsedWidth }) {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [openMenus, setOpenMenus] = useState({ Invoice: true });

    const handleToggleMenu = (label) => {
        setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
    };

    const renderNavItem = (item, isChild = false) => {
        const hasChildren = item.children && item.children.length > 0;
        const isMenuOpen = openMenus[item.label];
        const isActive =
            item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path);

        // Use active color for children if parent is active but another child is selected
        const isChildActive = isChild && pathname === item.path;

        return (
            <Box key={item.label}>
                <Tooltip title={!open ? item.label : ""} placement="right">
                    <ListItem disablePadding sx={{ mb: 0.5 }}>
                        <ListItemButton
                            onClick={() =>
                                hasChildren
                                    ? handleToggleMenu(item.label)
                                    : navigate(item.path)
                            }
                            sx={{
                                borderRadius: 2,
                                px: isChild ? 2.5 : 1.5,
                                py: isChild ? 0.8 : 1,
                                minHeight: 44,
                                justifyContent: open ? "flex-start" : "center",
                                bgcolor:
                                    (isActive && !hasChildren) ||
                                    (isActive && hasChildren && open)
                                        ? SIDEBAR_STYLES.activeBg
                                        : "transparent",
                                color:
                                    (isActive && !hasChildren) ||
                                    (isActive && hasChildren && open) ||
                                    isChildActive
                                        ? SIDEBAR_STYLES.activeText
                                        : SIDEBAR_STYLES.text,
                                transition: "all 0.2s",
                                "&:hover": {
                                    bgcolor:
                                        (isActive && !hasChildren) ||
                                        (isActive && hasChildren && open)
                                            ? SIDEBAR_STYLES.activeBg
                                            : SIDEBAR_STYLES.hoverBg,
                                    color: "white",
                                },
                                ...(((isActive && !hasChildren) ||
                                    (isActive && hasChildren && open)) && {
                                    boxShadow:
                                        "0 4px 12px rgba(79,70,229,0.35)",
                                }),
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 1.5 : 0,
                                    color: "inherit",
                                    "& svg": { fontSize: isChild ? 8 : 20 },
                                }}
                            >
                                {isChild ? (
                                    <FiberManualRecordIcon />
                                ) : (
                                    item.icon
                                )}
                            </ListItemIcon>
                            {open && (
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{
                                        fontSize: isChild ? 13 : 14,
                                        fontWeight:
                                            (isActive && !hasChildren) ||
                                            isChildActive
                                                ? 600
                                                : 400,
                                    }}
                                />
                            )}
                            {open &&
                                hasChildren &&
                                (isMenuOpen ? (
                                    <ExpandLess sx={{ fontSize: 18 }} />
                                ) : (
                                    <ExpandMore sx={{ fontSize: 18 }} />
                                ))}
                        </ListItemButton>
                    </ListItem>
                </Tooltip>

                {hasChildren && open && (
                    <Collapse in={isMenuOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding sx={{ pl: 0 }}>
                            {item.children.map((child) =>
                                renderNavItem(child, true),
                            )}
                        </List>
                    </Collapse>
                )}
            </Box>
        );
    };
    const drawerContent = (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                bgcolor: SIDEBAR_STYLES.bg,
                overflow: "hidden",
            }}
        >
            {/* Logo */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 2.5,
                    py: 3,
                    minHeight: 72,
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        width: 38,
                        height: 38,
                        borderRadius: 2,
                        flexShrink: 0,
                        background: "linear-gradient(135deg, #4F46E5, #818CF8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 20,
                    }}
                >
                    📦
                </Box>
                {open && (
                    <Box sx={{ overflow: "hidden" }}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: "white",
                                fontWeight: 700,
                                lineHeight: 1.2,
                                whiteSpace: "nowrap",
                            }}
                        >
                            Inventory
                        </Typography>
                        <Typography
                            sx={{
                                color: SIDEBAR_STYLES.text,
                                fontSize: 11,
                                whiteSpace: "nowrap",
                            }}
                        >
                            Management System
                        </Typography>
                    </Box>
                )}
            </Box>

            <Divider sx={{ borderColor: "#1E293B" }} />

            {/* Nav items */}
            <List sx={{ px: 1.5, pt: 2, flexGrow: 1 }}>
                {NAV_ITEMS.map((item) => renderNavItem(item))}
            </List>

            <Divider sx={{ borderColor: "#1E293B" }} />

            {/* User mini profile */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 2,
                    py: 2,
                    overflow: "hidden",
                    justifyContent: open ? "flex-start" : "center",
                }}
            >
                <Avatar
                    sx={{
                        width: 36,
                        height: 36,
                        flexShrink: 0,
                        background: "linear-gradient(135deg, #4F46E5, #818CF8)",
                        fontSize: 14,
                        fontWeight: 700,
                    }}
                >
                    {user?.name?.charAt(0) || "A"}
                </Avatar>
                {open && (
                    <Box sx={{ overflow: "hidden", flexGrow: 1 }}>
                        <Typography
                            sx={{
                                color: "white",
                                fontSize: 13,
                                fontWeight: 600,
                                whiteSpace: "nowrap",
                            }}
                        >
                            {user?.name || "Admin User"}
                        </Typography>
                        <Typography
                            sx={{
                                color: SIDEBAR_STYLES.text,
                                fontSize: 11,
                                whiteSpace: "nowrap",
                            }}
                        >
                            {user?.username || "admin"}@inventory.com
                        </Typography>
                    </Box>
                )}
                {open && (
                    <Tooltip title="Logout">
                        <IconButton
                            size="small"
                            onClick={() => {
                                logout();
                                navigate("/login");
                            }}
                            sx={{
                                color: SIDEBAR_STYLES.text,
                                "&:hover": { color: "#ef4444" },
                            }}
                        >
                            <LogoutRoundedIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                )}
            </Box>
        </Box>
    );

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: open ? width : collapsedWidth,
                flexShrink: 0,
                transition: "width 0.3s ease",
                "& .MuiDrawer-paper": {
                    width: open ? width : collapsedWidth,
                    transition: "width 0.3s ease",
                    overflowX: "hidden",
                    boxSizing: "border-box",
                    border: "none",
                    boxShadow: "4px 0 24px rgba(0,0,0,0.15)",
                },
            }}
        >
            {drawerContent}
        </Drawer>
    );
}
