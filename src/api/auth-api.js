import { authRequest } from "../utils/request";

export const register = async ({ username, email, password }) => {
    return authRequest("/signup", "POST", {
        email,
        password,
        data: {
            username
        }
    });
};

export const login = async ({ email, password }) => {
    return authRequest("/token?grant_type=password", "POST", { email, password });
};

export const logout = async () => {
    return authRequest("/logout", "POST", null);
}; 