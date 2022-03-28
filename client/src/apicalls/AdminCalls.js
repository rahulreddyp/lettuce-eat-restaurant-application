import { API } from "../API";

export const createMenuItem = (item) => {
    return fetch(`${API}/menu/add`, {
            method: "POST", 
            body: item,   
            headers: {
                Accept: "application/json",             
            }               
        })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err));
}

export const deleteMenuItem = async (item) => {
    try {
        const res = await fetch(`${API}/menu/${item}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json"
            }
        });
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
}

// update menu item details
export const updateMenutem = async (itemId, item) => {
    try {
        const res = await fetch(`${API}/menu/${itemId}`, {
            method: "PUT",
            body: item,
            headers: {
                Accept: "application/json"
            }
        });
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
}

export const getAllCategories = () => {
    return fetch(`${API}/menu/categories`, {
        method: "GET"
    })
    .then(res => {
        return res.json();
    })
    .catch(err => console.log(err))
}