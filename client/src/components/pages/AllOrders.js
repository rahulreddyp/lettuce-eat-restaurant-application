import React from "react";
import "./css/orderstatus.css";
import { useNavigate } from "react-router-dom";
import OrderElement from "./OrderElementUser";
import Grid from "@mui/material/Grid";
import { borders } from "@mui/system";
import { Button } from "react-bootstrap";

function OrderStatus() {
  const navigator = useNavigate();
  const image_url =
    "https://www.cookwithmanali.com/wp-content/uploads/2019/05/Paneer-Butter-Masala.jpg";
  const dish_name = "Paneer Tikka Masala";
  const quantity = "2";
  const order_status = "Confirmed";
  return (
    <>
      <h1 align="center">Your order details!</h1>
      <Grid>
        <OrderElement
          sx={{ border: 1 }}
          image_url={image_url}
          dish_name={dish_name}
          quantity={quantity}
          order_status={order_status}
          total="$30"
        />
        <OrderElement
          image_url="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg"
          dish_name="Burger"
          quantity="2"
          order_status="OUT_FOR_DELIVERY"
          total="$20"
        />
        <Button
          size="small"
          onClick={() => {
            navigator(-1);
          }}
        >
          Go back
        </Button>
      </Grid>
    </>
  );
}

export default OrderStatus;
