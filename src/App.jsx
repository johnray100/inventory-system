import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./themes/theme";

import AuthLayout from "./layouts/auth/AuthLayout";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ForgotPassword from "./pages/auth/ForgotPassword";
import TwoStep from "./pages/auth/TwoStep";
import DashboardPage from "./pages/dashboard/DashboardPage";
import Forbidden from "./pages/error/Forbidden";
import PageNotFound from "./pages/error/PageNotFound";
import ServerError from "./pages/error/ServerError";
import InventoryPage from "./pages/inventory/InventoryPage";
import UnderMaintenance from "./pages/error/UnderMaintenance";
import InvoiceList from "./pages/invoice/InvoiceList";
import InvoiceDetails from "./pages/invoice/InvoiceDetails";
import InvoiceCreate from "./pages/invoice/InvoiceCreate";
import InvoiceEdit from "./pages/invoice/InvoiceEdit";
import UserList from "./pages/users/UserList";
import UserProfile from "./pages/users/UserProfile";
import UserEdit from "./pages/users/UserEdit";
import ReportPage from "./pages/reports/ReportPage";
import SettingsPage from "./pages/settings/SettingsPage";

// ----------------------------------------------------------------------

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    {/* Auth routes */}
                    <Route
                        path="/login"
                        element={
                            <AuthLayout>
                                <LoginPage />
                            </AuthLayout>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <AuthLayout>
                                <SignupPage />
                            </AuthLayout>
                        }
                    />
                    <Route
                        path="/forgot-password"
                        element={
                            <AuthLayout>
                                <ForgotPassword />
                            </AuthLayout>
                        }
                    />
                    <Route
                        path="/two-step"
                        element={
                            <AuthLayout>
                                <TwoStep />
                            </AuthLayout>
                        }
                    />

                    {/* Protected dashboard routes */}
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <DashboardLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route index element={<DashboardPage />} />
                        <Route path="/inventory" element={<InventoryPage />} />
                        <Route path="/invoices/list" element={<InvoiceList />} />
                        <Route path="/invoices/details" element={<InvoiceDetails />} />
                        <Route path="/invoices/create" element={<InvoiceCreate />} />
                        <Route path="/invoices/edit" element={<InvoiceEdit />} />
                        <Route path="/users/profile" element={<UserProfile />} />
                        <Route path="/users/list" element={<UserList />} />
                        <Route path="/users/edit" element={<UserEdit />} />
                        <Route path="/reports" element={<ReportPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                    </Route>

                    {/* Redirect root to login if needed */}
                    <Route path="/404" element={<PageNotFound />} />
                    <Route path="/500" element={<ServerError />} />
                    <Route path="/403" element={<Forbidden />} />
                    <Route path="/maintenance" element={<UnderMaintenance />} />
                    <Route path="*" element={<Navigate to="/404" replace />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
