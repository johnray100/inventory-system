import {
    AddRounded as AddRoundedIcon,
    BlockRounded as BlockRoundedIcon,
    EditRounded as EditRoundedIcon,
    SaveRounded as SaveRoundedIcon,
    SearchRounded as SearchRoundedIcon,
    VisibilityRounded as VisibilityRoundedIcon,
} from "@mui/icons-material";
import {
    Box,
    Button,
    Card,
    CardContent,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";

// Dummy data
const INITIAL_INVENTORY = [
    {
        id: "INV-001",
        name: "Office Chair",
        category: "Furniture",
        price: "₱ 4,500",
        stock: 124,
        status: "In Stock",
    },
    {
        id: "INV-002",
        name: "Standing Desk",
        category: "Furniture",
        price: "₱ 12,800",
        stock: 12,
        status: "Low Stock",
    },
    {
        id: "INV-003",
        name: "Webcam HD",
        category: "Electronics",
        price: "₱ 2,100",
        stock: 0,
        status: "Out of Stock",
    },
    {
        id: "INV-004",
        name: "Wireless Keyboard",
        category: "Electronics",
        price: "₱ 1,750",
        stock: 45,
        status: "In Stock",
    },
    {
        id: "INV-005",
        name: 'Monitor 27"',
        category: "Electronics",
        price: "₱ 18,500",
        stock: 8,
        status: "Low Stock",
    },
    {
        id: "INV-006",
        name: "Ergonomic Mouse",
        category: "Electronics",
        price: "₱ 2,300",
        stock: 26,
        status: "In Stock",
    },
];

export default function InventoryPage() {
    const [inventory, setInventory] = useState(INITIAL_INVENTORY);
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    
    // View Modal State
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    // Edit Modal State
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    // Disable Modal State
    const [isDisableModalOpen, setIsDisableModalOpen] = useState(false);
    const [itemToDisable, setItemToDisable] = useState(null);

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        category: "",
        price: "",
        stock: "",
        status: "In Stock",
    });

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleOpenViewModal = (item) => {
        setSelectedItem(item);
        setIsViewModalOpen(true);
    };
    
    const handleCloseViewModal = () => {
        setIsViewModalOpen(false);
        setSelectedItem(null);
    };

    const handleOpenEditModal = (item) => {
        setFormData(item);
        setIsEditModalOpen(true);
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
        setFormData({ id: "", name: "", category: "", price: "", stock: "", status: "In Stock" });
    };

    const handleUpdateItem = async () => {
        setIsSaving(true);
        // Mock async update logic
        await new Promise((resolve) => setTimeout(resolve, 800));
        console.log("Updating item:", formData);
        setIsEditModalOpen(false);
        setFormData({ id: "", name: "", category: "", price: "", stock: "", status: "In Stock" });
        setIsSaving(false);
    };

    const handleOpenDisableModal = (item) => {
        setItemToDisable(item);
        setIsDisableModalOpen(true);
    };

    const handleCloseDisableModal = () => {
        setIsDisableModalOpen(false);
        setItemToDisable(null);
    };

    const handleConfirmDisable = async () => {
        setIsSaving(true);
        await new Promise((resolve) => setTimeout(resolve, 800));
        
        // Actually disable it in the local state
        setInventory((prev) => 
            prev.map((p) => p.id === itemToDisable.id ? { ...p, status: "Disabled" } : p)
        );

        setIsDisableModalOpen(false);
        setItemToDisable(null);
        setIsSaving(false);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSaveItem = async () => {
        setIsSaving(true);
        // Mock async save logic
        await new Promise((resolve) => setTimeout(resolve, 800));
        console.log("Saving new item:", formData);
        setIsModalOpen(false);
        setFormData({
            id: "",
            name: "",
            category: "",
            price: "",
            stock: "",
            status: "In Stock",
        });
        setIsSaving(false);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "In Stock":
                return "#4caf50";
            case "Low Stock":
                return "#ff9800";
            case "Out of Stock":
                return "#f44336";
            case "Disabled":
                return "#9e9e9e";
            default:
                return "#9e9e9e";
        }
    };

    const filteredInventory = inventory.filter(
        (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return (
        <Box>
            {/* Header Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "stretch", sm: "center" },
                    justifyContent: "space-between",
                    mb: 4,
                    gap: 2,
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1.5 }}>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                        Inventory
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={<AddRoundedIcon />}
                        sx={{ 
                            borderRadius: 2, 
                            px: 2.5,
                            background: "#2563eb",
                            color: "white",
                            boxShadow: "none",
                            "&:hover": {
                                background: "#1d4ed8", // slightly darker blue on hover
                                boxShadow: "none",
                            }
                        }}
                        onClick={handleOpenModal}
                    >
                        Create
                    </Button>
                </Box>

                <TextField
                    placeholder="Search products..."
                    size="small"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{ width: { xs: "100%", sm: 300 } }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchRoundedIcon
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: 20,
                                    }}
                                />
                            </InputAdornment>
                        ),
                        sx: { borderRadius: 2, bgcolor: "background.paper" },
                    }}
                />
            </Box>

            {/* Table Section */}
            <Card sx={{ borderRadius: 2 }}>
                <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                    <TableContainer component={Paper} elevation={0}>
                        <Table>
                            <TableHead>
                                <TableRow
                                    sx={{ bgcolor: "background.default" }}
                                >
                                    <TableCell sx={{ fontWeight: 600 }}>
                                        Item ID
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 600 }}>
                                        Product Name
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 600 }}>
                                        Category
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 600 }}>
                                        Price
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 600 }}>
                                        Stock
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 600 }}>
                                        Status
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        Actions
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredInventory.length > 0 ? (
                                    filteredInventory.map((item) => (
                                        <TableRow key={item.id} hover>
                                            <TableCell>{item.id}</TableCell>
                                            <TableCell sx={{ fontWeight: 500 }}>
                                                {item.name}
                                            </TableCell>
                                            <TableCell>
                                                {item.category}
                                            </TableCell>
                                            <TableCell>{item.price}</TableCell>
                                            <TableCell>{item.stock}</TableCell>
                                            <TableCell>
                                                <Box
                                                    sx={{
                                                        display: "inline-block",
                                                        px: 1.5,
                                                        py: 0.5,
                                                        borderRadius: 1,
                                                        bgcolor: `${getStatusColor(item.status)}20`,
                                                        color: getStatusColor(
                                                            item.status,
                                                        ),
                                                        fontSize: "0.75rem",
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {item.status}
                                                </Box>
                                            </TableCell>
                                            <TableCell align="right">
                                                <IconButton
                                                    size="small"
                                                    color="primary"
                                                    sx={{ mr: 0.5 }}
                                                    onClick={() => handleOpenViewModal(item)}
                                                >
                                                    <VisibilityRoundedIcon fontSize="small" />
                                                </IconButton>
                                                <IconButton
                                                    size="small"
                                                    color="warning"
                                                    sx={{ mr: 0.5 }}
                                                    onClick={() => handleOpenEditModal(item)}
                                                >
                                                    <EditRoundedIcon fontSize="small" />
                                                </IconButton>
                                                <IconButton
                                                    size="small"
                                                    color="error"
                                                    onClick={() => handleOpenDisableModal(item)}
                                                >
                                                    <BlockRoundedIcon fontSize="small" />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={7}
                                            align="center"
                                            sx={{ py: 4 }}
                                        >
                                            <Typography color="text.secondary">
                                                No inventory items match your
                                                search.
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>

            {/* Create Item Modal */}
            <Dialog
                open={isModalOpen}
                onClose={handleCloseModal}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                    sx: { borderTop: "4px solid #2563eb" }
                }}
            >
                <DialogTitle sx={{ fontWeight: 600, color: "#000" }}>
                    Create New Item
                </DialogTitle>
                <DialogContent>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2.5,
                            mt: 1,
                        }}
                    >
                        <TextField
                            label="Item ID"
                            name="id"
                            size="small"
                            fullWidth
                            value={formData.id}
                            onChange={handleFormChange}
                            placeholder="e.g. INV-007"
                        />
                        <TextField
                            label="Product Name"
                            name="name"
                            size="small"
                            fullWidth
                            value={formData.name}
                            onChange={handleFormChange}
                        />
                        <TextField
                            label="Category"
                            name="category"
                            size="small"
                            fullWidth
                            value={formData.category}
                            onChange={handleFormChange}
                        />
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <TextField
                                label="Price"
                                name="price"
                                size="small"
                                fullWidth
                                value={formData.price}
                                onChange={handleFormChange}
                                placeholder="₱ 0.00"
                            />
                            <TextField
                                label="Stock"
                                name="stock"
                                size="small"
                                type="number"
                                fullWidth
                                value={formData.stock}
                                onChange={handleFormChange}
                            />
                        </Box>
                        <FormControl fullWidth size="small">
                            <InputLabel>Status</InputLabel>
                            <Select
                                label="Status"
                                name="status"
                                value={formData.status}
                                onChange={handleFormChange}
                            >
                                <MenuItem value="In Stock">In Stock</MenuItem>
                                <MenuItem value="Low Stock">Low Stock</MenuItem>
                                <MenuItem value="Out of Stock">
                                    Out of Stock
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions sx={{ p: 2, pt: 0 }}>
                    <Button
                        onClick={handleCloseModal}
                        variant="contained"
                        sx={{
                            borderRadius: 2,
                            px: 2.5,
                            background: "#ef4444",
                            color: "white",
                            boxShadow: "none",
                            "&:hover": {
                                background: "#dc2626",
                                boxShadow: "none",
                            }
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSaveItem}
                        variant="contained"
                        disabled={isSaving}
                        startIcon={isSaving ? <CircularProgress size={20} color="inherit" /> : <SaveRoundedIcon />}
                        sx={{
                            borderRadius: 2,
                            px: 2.5,
                            background: "#2563eb",
                            color: "white",
                            boxShadow: "none",
                            "&:hover": {
                                background: "#1d4ed8",
                                boxShadow: "none",
                            },
                            "&.Mui-disabled": {
                                background: "#9ca3af",
                                color: "white"
                            }
                        }}
                    >
                        {isSaving ? "Saving..." : "Save Item"}
                    </Button>
                </DialogActions>
            </Dialog>

            {/* View Item Modal */}
            <Dialog
                open={isViewModalOpen}
                onClose={handleCloseViewModal}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                    sx: { borderTop: "4px solid #10b981" } // Green top border to differentiate View from Create
                }}
            >
                <DialogTitle sx={{ fontWeight: 600, color: "#000" }}>
                    View Item Details
                </DialogTitle>
                <DialogContent>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2.5,
                            mt: 1,
                        }}
                    >
                        <TextField
                            label="Item ID"
                            size="small"
                            fullWidth
                            value={selectedItem?.id || ""}
                            disabled
                        />
                        <TextField
                            label="Product Name"
                            size="small"
                            fullWidth
                            value={selectedItem?.name || ""}
                            disabled
                        />
                        <TextField
                            label="Category"
                            size="small"
                            fullWidth
                            value={selectedItem?.category || ""}
                            disabled
                        />
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <TextField
                                label="Price"
                                size="small"
                                fullWidth
                                value={selectedItem?.price || ""}
                                disabled
                            />
                            <TextField
                                label="Stock"
                                size="small"
                                fullWidth
                                value={selectedItem?.stock || ""}
                                disabled
                            />
                        </Box>
                        <TextField
                            label="Status"
                            size="small"
                            fullWidth
                            value={selectedItem?.status || ""}
                            disabled
                        />
                    </Box>
                </DialogContent>
                <DialogActions sx={{ p: 2, pt: 0 }}>
                    <Button
                        onClick={handleCloseViewModal}
                        variant="contained"
                        sx={{
                            borderRadius: 2,
                            px: 2.5,
                            background: "#6b7280", // Standard Gray Button
                            color: "white",
                            boxShadow: "none",
                            "&:hover": {
                                background: "#4b5563",
                                boxShadow: "none",
                            }
                        }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Edit Item Modal */}
            <Dialog
                open={isEditModalOpen}
                onClose={handleCloseEditModal}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                    sx: { borderTop: "4px solid #f59e0b" } // Amber top border for Edit
                }}
            >
                <DialogTitle sx={{ fontWeight: 600, color: "#000" }}>
                    Edit Item Details
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, mt: 1 }}>
                        <TextField
                            label="Item ID"
                            name="id"
                            size="small"
                            fullWidth
                            value={formData.id || ""}
                            onChange={handleFormChange}
                            InputProps={{ readOnly: true }} // ID typically shouldn't be strictly editable
                            disabled
                        />
                        <TextField
                            label="Product Name"
                            name="name"
                            size="small"
                            fullWidth
                            value={formData.name || ""}
                            onChange={handleFormChange}
                        />
                        <TextField
                            label="Category"
                            name="category"
                            size="small"
                            fullWidth
                            value={formData.category || ""}
                            onChange={handleFormChange}
                        />
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <TextField
                                label="Price"
                                name="price"
                                size="small"
                                fullWidth
                                value={formData.price || ""}
                                onChange={handleFormChange}
                            />
                            <TextField
                                label="Stock"
                                name="stock"
                                size="small"
                                type="number"
                                fullWidth
                                value={formData.stock || ""}
                                onChange={handleFormChange}
                            />
                        </Box>
                        <FormControl fullWidth size="small">
                            <InputLabel>Status</InputLabel>
                            <Select
                                label="Status"
                                name="status"
                                value={formData.status || "In Stock"}
                                onChange={handleFormChange}
                            >
                                <MenuItem value="In Stock">In Stock</MenuItem>
                                <MenuItem value="Low Stock">Low Stock</MenuItem>
                                <MenuItem value="Out of Stock">Out of Stock</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions sx={{ p: 2, pt: 0 }}>
                    <Button
                        onClick={handleCloseEditModal}
                        variant="contained"
                        sx={{
                            borderRadius: 2,
                            px: 2.5,
                            background: "#ef4444",
                            color: "white",
                            boxShadow: "none",
                            "&:hover": { background: "#dc2626", boxShadow: "none" }
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleUpdateItem}
                        variant="contained"
                        disabled={isSaving}
                        startIcon={isSaving ? <CircularProgress size={20} color="inherit" /> : <SaveRoundedIcon />}
                        sx={{
                            borderRadius: 2,
                            px: 2.5,
                            background: "#f59e0b", // Amber/Yellow
                            color: "white",
                            boxShadow: "none",
                            "&:hover": { background: "#d97706", boxShadow: "none" },
                            "&.Mui-disabled": { background: "#9ca3af", color: "white" }
                        }}
                    >
                        {isSaving ? "Updating..." : "Update Item"}
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Disable Confirmation Modal */}
            <Dialog
                open={isDisableModalOpen}
                onClose={handleCloseDisableModal}
                maxWidth="xs"
                fullWidth
                PaperProps={{
                    sx: { borderTop: "4px solid #ef4444" } // Red top border for Danger
                }}
            >
                <DialogTitle sx={{ fontWeight: 600, color: "#000" }}>
                    Disable Item
                </DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure you want to disable <strong>{itemToDisable?.name}</strong>? 
                        This item will be marked as Disabled and might not be available for new transactions.
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ p: 2, pt: 0 }}>
                    <Button
                        onClick={handleCloseDisableModal}
                        color="inherit"
                        sx={{ borderRadius: 2 }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleConfirmDisable}
                        variant="contained"
                        disabled={isSaving}
                        startIcon={isSaving ? <CircularProgress size={20} color="inherit" /> : <BlockRoundedIcon />}
                        sx={{
                            borderRadius: 2,
                            px: 2.5,
                            background: "#ef4444",
                            color: "white",
                            boxShadow: "none",
                            "&:hover": { background: "#dc2626", boxShadow: "none" },
                            "&.Mui-disabled": { background: "#9ca3af", color: "white" }
                        }}
                    >
                        {isSaving ? "Disabling..." : "Disable"}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
