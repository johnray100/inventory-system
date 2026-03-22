import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AuthProvider } from "./context/AuthContext.jsx";
import App from "./App.jsx";
import "./index.css";

// ----------------------------------------------------------------------

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </StrictMode>,
);
