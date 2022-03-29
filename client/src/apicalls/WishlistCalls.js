import { API } from "../API";
import axios from 'axios'
import { useNavigate } from 'react-router'
const navigate = useNavigate

export const deleteWishlistItem = async (item) => {
    
    try {
        const res = await fetch(`${API}/wishlist/${item}`, {
            method: "DELETE",
            //body: JSON.stringify(item), 
            headers: {
                Accept: "application/json"
            }
        });
        return await res.json();
    }catch (err) {
        return console.log(err);
    };
        

};

export const moveItemtoCart = async(item)=> {
    console.log(item.body.name)
    try{
        const res = await fetch(`${API}/wishlist`, {
            method: 'POST',
            headers: {
                Accept: "application/json"
            },
            body: JSON.stringify(item)
        });
        return await res.json();
    }catch (err) {
        return console.log(err);
    }
};
export const getWishlist = async () => {
    return fetch(`${API}/wishlist`, {
        method: "GET"
    })
    .then(res => {
        return res.json();
    })
    .catch(err => console.log(err));
};

export const getWishlistItem = async (ItemId) => {
    try {
        const res = await fetch(`${API}/wishlist/${ItemId}`, {
            method: "GET",
        });
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
  };
export const putItem = async (item) => {
     try{
        const result = await fetch(`${API}/menuitem`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(item)
     }) 
     return await result.json();
    }catch (err) {
        return console.log(err);
    }
   
  
     
};