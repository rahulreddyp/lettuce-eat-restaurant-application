import React from "react";
import { useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap"

function OrderElement(props) {
  const navigator = useNavigate();
  return (
    <>
      <div class="container1">
        <div class="Image">
          <img
            align="right"
            width="300px"
            height="100%"
            src="https://www.cookwithmanali.com/wp-content/uploads/2019/05/Paneer-Butter-Masala.jpg"
          ></img>
        </div>
        <div class="Order-Details">
          <h3>Paneer Tikka Masala</h3>
          <h3>Quantity : 2</h3>
          <h3>Order Status:</h3>
          <h3>- Order Confirmed.</h3>
          <h3>- Delivery boy has picked up your order.</h3>
        </div>
        <div class="Button">
          <Button
            type="button"
            align="center"
            onClick={() => {
              navigator(-1);
            }}
          >
            Go back!
          </Button>
        </div>
      </div>
    </>
  );
}

export default OrderElement;
