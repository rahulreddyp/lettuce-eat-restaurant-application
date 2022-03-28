import { API } from "../API";
import axios from 'axios'
import { useNavigate } from 'react-router'
const navigate = useNavigate

export const putItem = (item) => {
    
    return fetch(`${API}/menuitem`, {
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