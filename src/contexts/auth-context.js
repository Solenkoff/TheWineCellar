import { createContext } from "react";

const AuthContext = createContext({
    accessToken: '',
    user: {},
    isAuthenticated: false,
    registerAction() {},
    loginAction() {},
});

export default AuthContext;