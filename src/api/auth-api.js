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