import React from "react";
import { useNavigate, withRouter } from "react-router-dom";
import foodImage from "../../images/food_image.jpg";
import "../styles/Menu.css";

const MenuCard = ({ item }) => {
    const navigate = useNavigate();

    const redirectToItemDetails = () => {
        navigate("/menuitem", {state: {itemId: item._id}})
    //    history.push({
    //     pathname: `/menu/${item._id}`
    //    })
    };

    const CardImage = item.photo ? item.photo : "No Image";

  return (
    <div className="card shadow" onClick={()=>{redirectToItemDetails()}}>
      <div className="overflow">
          <img
            src={CardImage}
            alt="Menu Item"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            className="card-img-top mb-3 rounded"
          />
      <div className="card-body" >
          {/* {redirectToItemDetails()} */}        
          <h3 className="card-title">{item.name}</h3>
          <p className="card-description">{item.description}</p>
          <span className="text-white bg-success rounded p-2">{item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
