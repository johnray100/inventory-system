import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
    const { login } = useAuth();

    useEffect(() => {
        login();
    }, []);

    return <div>Redirecting to Keycloak...</div>;
};

export default LoginPage;
