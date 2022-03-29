// Author: Rahul Reddy Puchakayala

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

  export const getItemCategory = (categoryId) => {
    return fetch(`${API}/menu/category/${categoryId}`, {
        method: "GET"
    })
    .then(resp => {
        return resp.json()
    })
    .catch(err => console.log(err))
};