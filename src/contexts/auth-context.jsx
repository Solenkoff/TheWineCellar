
import { createContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import { authApi } from "../api";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext({
    accessToken: '',
    user: {},
    isAuthenticated: false,
    register() {},
    login() {},
    logout() {},
});

export function AuthProvider({ children }) {
    const navigate = useNavigate();

    const [auth, setAuth] = usePersistedState('auth', null);

    const register = async (userData) => {
        try {
            const result = await authApi.register(userData);

            setAuth(result);
            toast.success("Registration successful! Welcome to FurniShelter!");

            navigate('/');
        } catch (error) {
            toast.error(error.message || "Registration failed. Please try again.");
        }
    };

    const login = async (userData) => {
        try {
            const result = await authApi.login(userData);

            setAuth(result);
            toast.success("Welcome back!");

            navigate('/');
        } catch (error) {
            toast.error(error.message || "Login failed. Please try again.");
        }
    };

    const logoutAction = async () => {
        try {
            await authApi.logout(auth?.access_token);
        } catch (error) {
            console.error("Logout request failed:", error);
        } finally {
            setAuth(null);
        }
    };

    const contextValue = {
        accessToken: auth?.access_token,
        user: auth?.user,
        isAuthenticated: !!auth,
        register,
        login,
        logout: logoutAction,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
