// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import { AuthProvider } from "./context/AuthContext.jsx";
// import App from "./App.jsx";
// import "./index.css";

// // ----------------------------------------------------------------------

// const root = createRoot(document.getElementById("root"));

// root.render(
//     <StrictMode>
//         <AuthProvider>
//             <App />
//         </AuthProvider>
//     </StrictMode>,
// );
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import keycloak from "./utils/keycloak";

// ----------------------------------------------------------------------

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <ReactKeycloakProvider
            authClient={keycloak}
            initOptions={{
                onLoad: "login-required", // 🔐 Auto-redirect to Keycloak if not logged in
                checkLoginIframe: false, // 🚫 Avoid iframe issues
            }}
        >
            <App />
        </ReactKeycloakProvider>
    </StrictMode>,
);
