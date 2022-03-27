import { API } from "../API";

export const createMenuItem = (item) => {
    return fetch(`${API}/menu/add`, {
            method: "POST", 
            body: item,   
            headers: {
                Accept: "application/json",             
            }               
        })
        .then(resp => {
            return resp.json()
        })
        .catch(err => console.log(err));
}

export const deleteMenuItem = async (item) => {
    try {
        const resp = await fetch(`${API}/menu/${item}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json"
            }
        });
        return await resp.json();
    } catch (err) {
        return console.log(err);
    }
}

export const getAllCategories = () => {
    return fetch(`${API}/menu/categories`, {
        method: "GET"
    })
    .then(resp => {
        return resp.json()
    })
    .catch(err => console.log(err))
}