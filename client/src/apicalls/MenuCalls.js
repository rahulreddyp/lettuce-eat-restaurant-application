// Author: Rahul Reddy Puchakayala

import { API } from "../API";

export const getMenu = (specification) => {
    var url = `${API}/menu`;
    if(specification !== "") {
        
        // console.log(Object.entries(specification));
        Object.entries(specification).map((key) => { url += "?" + key[0] + "=" + key[1]})
    }

    console.log(url);
    return fetch(url, {
            method: "GET"
        })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err));
};

export const getSortedMenu = () => {
    return fetch(`${API}/products`, {
        method: "GET"
    })
    .then(resp => {
        return resp.json()
    })
    .catch(err => console.log(err))
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