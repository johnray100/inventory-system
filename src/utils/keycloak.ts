import Keycloak from "keycloak-js";

// 🔐 Keycloak configuration
const keycloak = new Keycloak({
    url: "https://192.168.100.14:8443", // 🌐 Nginx → Keycloak
    realm: "inventory", // 🏰 Realm
    clientId: "inventory-app", // 📱 Client ID
});

export default keycloak;
