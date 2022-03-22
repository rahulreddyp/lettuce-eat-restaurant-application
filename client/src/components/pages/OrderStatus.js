import React from "react";
import "./css/orderstatus.css";
import { useNavigate } from "react-router-dom";
import OrderElement from "./OrderElement";

function OrderStatus() {
  return (
    <>
      <h1 align="center">Your order details!</h1>
      <OrderElement />
    </>
  );
}

export default OrderStatus;
