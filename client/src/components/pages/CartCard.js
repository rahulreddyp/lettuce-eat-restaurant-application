// Author: Deeksha Sareen

import React,{ useState} from "react";
import { useNavigate, withRouter } from "react-router-dom";
import "../styles/Menu.css";
import { API } from "../../API";
import { deleteCartItem } from "../../apicalls/CartCalls";
import {Dropdown } from "react-bootstrap";

const CartCard = ({ item , amount,itemname}) => {
    //const [total, setTotal] = useState('');
    const [error, setError] = useState("");
    const [Quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState();
    const navigate = useNavigate();

    // const redirectToItemDetails = () => {

    //     navigate("/menuitem", {state: {itemId: item._id}})
  
    // };
   
    const CardImage = `${API}/menu/photo/${item._id}`;
    const holder = new Map();
    const [items, setItems] = useState({item});
    const removefromcart = async () => {
      const deletemessage = "";
        deleteCartItem(item._id).then((data)=>{
          if (data.error) {
            setError(data.error);
            deletemessage = data.error;
          } else {
            console.log(data);
            deletemessage = data.message;
            navigate("/cart", { state: { deletemessage } });
          }
        }) 
      };
  let sum = 0;
  return (
<div className="container">
 <div className = "container">
    <div className="card shadow" style={{ width: "20rem" }}>
       <div className="overflow">
       {/* <img
            src={CardImage}
            alt="Cart Item"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            className="card-img-top mb-3 rounded"
            onClick={() => {
              redirectToItemDetails();
            }}
         /> */}
      <div class="card-body" style={{ width: "20rem" }}>
        <h3 class="card-title">{item.name}</h3>
        <p className="card-description">{item.description}</p>
      </div> 
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Price:  <span className="text-white bg-success rounded p-2">{item.price} </span></li>
        <span className="text-danger text-center">{error}</span>
        
      </ul>
      <div class="card-body">
        <Dropdown>
              <Dropdown.Toggle>Quantity:{Quantity}</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    setQuantity(1);
                    setItems({
                      ...items,
                      quantity: 1 
                    });
                  }}
                >
                  1
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setQuantity(2);
                    setItems({
                      ...items,
                      quantity: 2
                    });
                  }}
                >
                  2
                </Dropdown.Item>
                <Dropdown.Item
                   onClick={() => {
                    setQuantity(3);
                    setItems({
                      ...items,
                      quantity: 3
                    });
                  }}

                >
                  3
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <a href="/cart"  style={{margin: '0.3rem'}}  onClick={removefromcart} class="btn btn-outline-danger">Remove from Cart</a>
     
      </div>
      </div>
    </div>
    <p>
      </p>
    </div>
         
         Item Total: $ {(sum = item.price * Quantity).toFixed(2)} 
         
         {/* {amount(item.price * Quantity)} */}
         {amount(sum)}
         {itemname(item.name)}
         
         <br/>
         
    </div>
  );

};

export default CartCard;
