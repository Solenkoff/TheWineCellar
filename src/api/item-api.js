import request from "../utils/request"

export const getAll = (accessToken) => {
    return request("/items?order=added_on.desc", "GET", null, {
        headers: {
            ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
        }
    });
}