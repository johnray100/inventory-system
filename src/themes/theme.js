import { createTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#4F46E5",
            light: "#818CF8",
            dark: "#3730A3",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#06B6D4",
            light: "#67E8F9",
            dark: "#0E7490",
        },
        background: {
            default: "#F1F5F9",
            paper: "#FFFFFF",
        },
        text: {
            primary: "#0F172A",
            secondary: "#64748B",
        },
        divider: "#E2E8F0",
        success: { main: "#10B981" },
        warning: { main: "#F59E0B" },
        error:   { main: "#EF4444" },
        sidebar: {
            bg: "#0F172A",
            text: "#94A3B8",
            activeText: "#FFFFFF",
            activeBg: "#4F46E5",
            hoverBg: "#1E293B",
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h4: { fontWeight: 700 },
        h5: { fontWeight: 700 },
        h6: { fontWeight: 600 },
        subtitle1: { fontWeight: 600 },
        button: { textTransform: "none", fontWeight: 600 },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                    borderRadius: 16,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    padding: "10px 20px",
                },
                containedPrimary: {
                    background: "linear-gradient(135deg, #4F46E5 0%, #818CF8 100%)",
                    boxShadow: "0 4px 15px 0 rgba(79, 70, 229, 0.4)",
                    "&:hover": {
                        background: "linear-gradient(135deg, #3730A3 0%, #4F46E5 100%)",
                        boxShadow: "0 6px 20px 0 rgba(79, 70, 229, 0.5)",
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 10,
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: { borderRadius: 8 },
            },
        },
    },
});

export default theme;
