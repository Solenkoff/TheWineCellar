import request from "../utils/request"

export const getAll = (accessToken) => {
    return request("/items?order=added_on.desc", "GET", null, {
        headers: {
            ...getAuthHeader(accessToken)
        }
    });
}

export const addItem = (data, accessToken) => {
    return request("/items", "POST", data, {
        headers: {
            ...getAuthHeader(accessToken)
        }
    });
}


function getAuthHeader(accessToken) {
    return {
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
    }
} 