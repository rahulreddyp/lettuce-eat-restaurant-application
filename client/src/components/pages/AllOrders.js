/**
 * @author Arpan Nayankumar Bhatt <ar205025@dal.ca>
 */

import React, { useEffect, useState } from "react";
import "./css/orderstatus.css";
import { useNavigate } from "react-router-dom";
import OrderElement from "./OrderElementUser";
import Grid from "@mui/material/Grid";
import { borders } from "@mui/system";
import { Button } from "react-bootstrap";
import axios from "axios";

function AllOrders() {
  const [orders, setOrders] = useState();

  const navigator = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigator("/login");
    }
    console.log(JSON.parse(localStorage.getItem("user")));
    const getData = async () => {
      const res = await axios.get(
        "http://localhost:5000/getAllOrders/" +
          JSON.parse(localStorage.getItem("user")).id
      );
      console.log(res);
      setOrders(res.data);
    };
    getData();
  }, []);

  const image_url =
    "https://www.cookwithmanali.com/wp-content/uploads/2019/05/Paneer-Butter-Masala.jpg";
  const dish_name = "Paneer Tikka Masala";
  const quantity = "2";
  const order_status = "Confirmed";
  // console.log(orders);
  return orders ? (
    <>
      <h1 align="center">Your order details!</h1>
      <Grid>
        {orders.map((order, idx) => (
          <>
            <OrderElement
              sx={{ border: 1 }}
              // image_url={image_url}
              quantity={order.items.length}
              total={order.total}
              order_status={order.orderStatus}
              dish_name={order._id}
              orderId={order._id}
            ></OrderElement>
          </>
        ))}
        {/* <OrderElement
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
        /> */}
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
  ) : (
    <p>Loading</p>
  );
}

export default AllOrders;
