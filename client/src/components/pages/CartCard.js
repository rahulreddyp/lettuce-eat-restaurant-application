import React,{ useState} from "react";
import { Button } from "react-bootstrap";
import { useNavigate, withRouter } from "react-router-dom";
import "../styles/Menu.css";
import { API } from "../../API";


const CartCard = ({ item }) => {
  
    const [error, setError] = useState("");
 
    const navigate = useNavigate();

    const redirectToItemDetails = () => {

        navigate("/menuitem", {state: {itemId: item._id}})
  
    };

    const CardImage = `${API}/menu/photo/${item._id}`;


  return (

    <div class="card">
       <div className="overflow">
       <img
            src={CardImage}
            alt="Cart Item"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            className="card-img-top mb-3 rounded"
            onClick={() => {
              redirectToItemDetails();
            }}
         />
      <div class="card-body">
        <h3 class="card-title">{item.name}</h3>
        <p className="card-description">{item.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Price:  <span className="text-white bg-success rounded p-2">{item.price} </span></li>
        <span className="text-danger text-center">{error}</span>
        
      </ul>
      </div>
    </div>

  );
};

export default CartCard;
