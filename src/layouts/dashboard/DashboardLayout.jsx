import { Box } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// ----------------------------------------------------------------------

const SIDEBAR_WIDTH = 260;
const SIDEBAR_COLLAPSED_WIDTH = 80;

export default function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => setSidebarOpen((prev) => !prev);

    return (
        <Box
            sx={{
                display: "flex",
                minHeight: "100vh",
                bgcolor: "background.default",
            }}
        >
            {/* Sidebar */}
            <Sidebar
                open={sidebarOpen}
                width={SIDEBAR_WIDTH}
                collapsedWidth={SIDEBAR_COLLAPSED_WIDTH}
            />

            {/* Main area */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                }}
            >
                <Navbar
                    onToggleSidebar={toggleSidebar}
                    sidebarOpen={sidebarOpen}
                />

                {/* Page content */}
                <Box sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}
