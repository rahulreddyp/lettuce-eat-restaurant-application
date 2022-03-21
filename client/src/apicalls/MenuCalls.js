import { API } from "../API";

export const getMenu = () => {
    return fetch(`${API}/menu`, {
        method: "GET"
    })
    .then(res => {
        return res.json();
    })
    .catch(err => console.log(err));
};

export const getMenuItem = async (ItemId) => {
    try {
        const res = await fetch(`${API}/menu/${ItemId}`, {
            method: "GET",
        });
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
  };