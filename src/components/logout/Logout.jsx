import { useContext, useEffect } from "react";
import { Navigate } from "react-router";
import AuthContext from "../../contexts/auth-context";

export default function Logout() {
    const { logoutAction } = useContext(AuthContext);

    useEffect(() => {
        logoutAction();
    }, [logoutAction]);

    return (
        <Navigate to="/" />
    );
}