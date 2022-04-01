// Author: Deeksha Sareen

import React,{ useState} from "react";
import { useNavigate, withRouter } from "react-router-dom";
import "../styles/Menu.css";
import { API } from "../../API";

import {Dropdown } from "react-bootstrap";

const Card = ({item, total}) => {
    const [error, setError] = useState("");
    const [Quantity, setQuantity] = useState([]);
   
    const navigate = useNavigate();

    const redirectToItemDetails = () => {

        navigate("/menuitem", {state: {itemId: item._id}})
  
    };
   
    const CardImage = `${API}/menu/photo/${item._id}`;
    const holder = new Map();
    const [items, setItems] = useState({item});
    const removefromcart = async () => {
      const deletemessage = "";
        // deleteWishlistItem(item._id).then((data)=>{
        //   if (data.error) {
        //     setError(data.error);
        //     deletemessage = data.error;
        //   } else {
        //     console.log(data);
        //     deletemessage = data.message;
        //     navigate("/wishlist", { state: { deletemessage } });
        //   }
        // } ,window.location.reload(false)) 
      };
  let sum = 0;
  return (
<div className="container">
 <div className = "container">
    <div className="card shadow" style={{ width: "20rem" }}>
       <div className="overflow">
     
      <ul class="list-group list-group-flush">
        <span className="text-danger text-center">{error}</span>
        
      </ul>
      <div class="card-body">
    
            <a href="/cart"  style={{margin: '0.3rem'}}  onClick={removefromcart} class="btn btn-outline-danger">Remove from Cart</a>
     
      </div>
      </div>
    </div>
    <p>
      </p>
    </div>

        total
         
         Item Total: $ {sum = item.price * Quantity} 
         
        
         
         <br/>
         
    </div>
  );

};

export default Card;
