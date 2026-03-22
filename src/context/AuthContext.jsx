import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage on initial load
        const storedUser = localStorage.getItem("inv_user");
        const token = localStorage.getItem("inv_auth_token");
        
        if (storedUser && token) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Failed to parse stored user", error);
                localStorage.removeItem("inv_user");
            }
        }
        setLoading(false);
    }, []);

    const login = (userData, token) => {
        localStorage.setItem("inv_user", JSON.stringify(userData));
        localStorage.setItem("inv_auth_token", token);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("inv_user");
        localStorage.removeItem("inv_auth_token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
