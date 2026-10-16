import request from "../utils/request"

export const getAll = () => request("/items?order=added_on.desc", "GET", null);

export const addItem = (data) => request("/items", "POST", data);

export const update = (itemId, data) => request(`/items?id=eq.${itemId}`, "PUT", data);

export const remove = async (itemId) => request(`/items?id=eq.${itemId}`, "DELETE", null);


