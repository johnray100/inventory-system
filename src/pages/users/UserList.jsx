import React, { useState } from "react";
import {
    Box, Typography, Button, Card, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Paper, Chip, IconButton,
    TextField, InputAdornment, Avatar, Stack, Breadcrumbs, Link
} from "@mui/material";
import {
    Search as SearchIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Add as AddIcon
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const MOCK_USERS = [
    { id: 1, name: "Mathew Anderson", email: "mathew@modernize.com", role: "Admin", status: "Active", avatar: "MA" },
    { id: 2, name: "Micheal Doe", email: "micheal@modernize.com", role: "Editor", status: "Pending", avatar: "MD" },
    { id: 3, name: "Jane Smith", email: "jane@modernize.com", role: "Subscriber", status: "Banned", avatar: "JS" },
    { id: 4, name: "Robert Fox", email: "robert@modernize.com", role: "Admin", status: "Active", avatar: "RF" },
    { id: 5, name: "Esther Howard", email: "esther@modernize.com", role: "Editor", status: "Active", avatar: "EH" },
];

const getStatusColor = (status) => {
    switch (status) {
        case "Active": return "success";
        case "Pending": return "warning";
        case "Banned": return "error";
        default: return "default";
    }
};

export default function UserList() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const filteredUsers = MOCK_USERS.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

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
                        User List
                    </Typography>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: 14 }}>
                        <Link underline="hover" color="inherit" onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>Home</Link>
                        <Typography color="text.primary">User List</Typography>
                    </Breadcrumbs>
                </Box>
                <Box sx={{ position: "absolute", right: 40, top: -10, fontSize: 80, opacity: 0.2, display: { xs: "none", md: "block" } }}>
                    👥
                </Box>
            </Paper>

            <Card sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.05)", overflow: "hidden" }}>
                <Box sx={{ p: 3, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
                    <TextField
                        placeholder="Search users..."
                        size="small"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{ width: { xs: "100%", sm: 300 } }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: "text.secondary", fontSize: 20 }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        sx={{ bgcolor: "#4f46e5", borderRadius: 2, textTransform: "none", fontWeight: 600, px: 3, "&:hover": { bgcolor: "#4338ca" } }}
                    >
                        Add User
                    </Button>
                </Box>

                <TableContainer>
                    <Table>
                        <TableHead sx={{ bgcolor: "#f8fafc" }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: "700", color: "#64748b" }}>User</TableCell>
                                <TableCell sx={{ fontWeight: "700", color: "#64748b" }}>Role</TableCell>
                                <TableCell sx={{ fontWeight: "700", color: "#64748b" }}>Status</TableCell>
                                <TableCell align="right" sx={{ fontWeight: "700", color: "#64748b" }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredUsers.map((user) => (
                                <TableRow key={user.id} hover sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                    <TableCell>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Avatar sx={{ bgcolor: "#4f46e5", fontWeight: "bold", fontSize: 14, cursor: "pointer" }} onClick={() => navigate("/users/profile")}>{user.avatar}</Avatar>
                                            <Box>
                                                <Typography 
                                                    variant="subtitle2" 
                                                    fontWeight="bold" 
                                                    sx={{ cursor: "pointer", "&:hover": { color: "#4f46e5" } }}
                                                    onClick={() => navigate("/users/profile")}
                                                >
                                                    {user.name}
                                                </Typography>
                                                <Typography variant="caption" color="text.secondary">{user.email}</Typography>
                                            </Box>
                                        </Stack>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="body2" color="text.secondary">{user.role}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Chip 
                                            label={user.status} 
                                            size="small" 
                                            color={getStatusColor(user.status)}
                                            sx={{ fontWeight: "600", borderRadius: 1.5, px: 0.5 }}
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton size="small" onClick={() => navigate("/users/edit")} sx={{ color: "#64748b" }}>
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                        <IconButton size="small" sx={{ color: "#ef4444" }}>
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    );
}
