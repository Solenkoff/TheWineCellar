import request from "../utils/request"

export const getAll = (itemId) => {
    return request(`/comments?item_id=eq.${itemId}&order=created_at.desc`);
}

export const create = (itemId, text, author) => {
    return request("/comments", "POST", {
        item_id: itemId,
        text,
        author,
    });
}

export const remove = (commentId) => {
    return request(`/comments?id=eq.${commentId}`, "DELETE");
};

