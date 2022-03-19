import React, { useState, useEffect } from "react";
import { Row, Col, Figure } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { getMenuItem } from "../../apicalls/MenuCalls";
import foodImage from "../../images/food_image.jpg";

const MenuItem = () => {
  const [item, setItem] = useState([]);

  const { state } = useLocation();
  const { itemId } = state || {};

  const getMenuItemDetails = () => {
    getMenuItem(itemId).then((data) => {
      if (data.error) {
        // setError(data.error);
      } else {
        console.log(data);
        setItem(data);
      }
    });
  };

  useEffect(() => {
    getMenuItemDetails();
  }, [itemId]);

  return (
    // <div className="container">
    //     <img
    //         src={foodImage}
    //         alt="Menu item"
    //         style={{ width: "100%", float: "left", paddingRight: "1cm" }}
    //       />
    //     <h1>{item.name}</h1>
    //     <p>{item.description}</p>
    // </div>
    <div>
      <div className="row">
        <div className="col-12">
          <div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  alt="Food Item"
                  src={foodImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h1>{item.name}</h1>
        <p>{item.description}</p>
      </div>
      <div className="row">
      <form>
    <div className="radio">
      <label>
        <input type="radio" value={item.sizes} checked={true} />
        {item.sizes} 
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="option2" />
        Option 2
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="option3" />
        Option 3
      </label>
    </div>
  </form>                      
        </div>
    </div>
  );
};

export default MenuItem;
