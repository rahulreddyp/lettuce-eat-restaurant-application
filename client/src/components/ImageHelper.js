import React from 'react';
import { API } from '../../backend';
import foodImage from "/images/food_image.jpg";

const ImageHelper = ({item}) => {
    const imageURL = item ? `${API}/menu/item/${item._id}` : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
    
    return (
        <div>
            <img
            src={imageURL}
            alt="Menu Item"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            className="mb-3 rounded"
        />
        </div>
    )
}

export default ImageHelper; 