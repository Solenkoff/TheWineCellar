import request from "../utils/request"

export const getAll = (itemId) => {
    return request(`/comments?item_id=eq.${itemId}&order=created_at.desc`);
}

export const create = (itemId, text, author, accessToken) => {
    return request("/comments", "POST", {
        item_id: itemId,
        text,
        author,
    } ,{
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
