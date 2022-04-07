// Author: Deeksha Sareen

import { API } from "../API";
import axios from 'axios'
import { useNavigate } from 'react-router'
const navigate = useNavigate

export const getCart = async () => {
    
    return fetch(`${API}/cart`, {
        method: "GET"
    })
    .then(res => {
        return res.json();
    })
    .catch(err => console.log(err));
};

export const deleteCartItem = async (item) => {
    
    try {
        const res = await fetch(`${API}/cart/${item}`, {
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

export const deleteCartAll= async () => {
    
    try {
        const res = await fetch(`${API}/payments`, {
            method: "DELETE",
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
    console.log("Step2"+ item.name)
    try{
        const res = await fetch(`${API}/menuitem`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        return await res.json();
    }catch (err) {
        return console.log(err);
    }
};