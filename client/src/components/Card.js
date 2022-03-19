import React from "react";
import { useNavigate, withRouter } from "react-router-dom";
import foodImage from "../images/food_image.jpg";

const Card = ({ item }) => {
    const navigate = useNavigate();

    const redirectToItemDetails = () => {
        navigate("/menuitem", {state: {itemId: item._id}})
    //    history.push({
    //     pathname: `/menu/${item._id}`
    //    })
    };

  return (
    <div className="card">
      <div className="card-body" onClick={()=>{redirectToItemDetails()}}>
          {/* {redirectToItemDetails()} */}
        <div>
          <img
            src={foodImage}
            alt="Menu Item"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            className="mb-3 rounded"
          />
          <h2 className="card-title">{item.name}</h2>
          <p className="card-description">{item.description}</p>
          <span className="text-white bg-success rounded p-2">{item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
