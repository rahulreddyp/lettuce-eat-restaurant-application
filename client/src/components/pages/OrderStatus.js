import React, { useEffect, useState } from "react";
import "./css/orderstatus.css";
import { useNavigate } from "react-router-dom";
import OrderElement from "./OrderElement";
import Grid from "@mui/material/Grid";
import { borders } from "@mui/system";
import { Button } from "react-bootstrap";
import { getOrderById } from "../../apicalls/UpdateOrderStatusCalls";
import { Typography } from "@mui/material";

function OrderStatus() {
  const [order, setOrder] = useState([]);
  const [error, setError] = useState("");

  const loadOrder = () => {
    var url_str = window.location.href;
    var c = url_str.substring(37);
    console.log(c);

    getOrderById(c)
      .then((data) => {
        console.log(data);
        if (data.success) {
          // setError(data.error);
          console.log(data["order"][0]);
          setOrder(data["order"][0]);
        } else {
          //SOmething
          setError("Order does not exist for the given Order ID.");
          console.log("error");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    loadOrder();
  }, []);

  var name = "";
  if (order.length != 0) {
    console.log(order);
    var name = order.user.firstName + " " + order.user.lastName;
    var status = order.orderStatus;
    var user_address = order.user.address;
    var key = order._id;
    var len = order.items.length;
    var item_map = [];
    var image_map = [];
    for (let i = 0; i < len; i++) {
      item_map.push(order.items[i].name);
      image_map.push(order.items[i].photo);
    }
  }

  const navigator = useNavigate();
  const image_url =
    "https://www.cookwithmanali.com/wp-content/uploads/2019/05/Paneer-Butter-Masala.jpg";
  const dish_name = "Paneer Tikka Masala";
  const quantity = "2";
  const order_status = "Confirmed";
  return (
    <>
      {name.length > 0 ? (
        <>
          <h1 align="center">Your order details!</h1>
          <Grid>
            <OrderElement
              sx={{ border: 1 }}
              item_map={item_map}
              quantity={quantity}
              user_address={user_address}
              order_status={status}
            />
          </Grid>
        </>
      ) : (
        <>
          <Typography error="true">{error}</Typography>
        </>
      )}
      <Button
        size="small"
        onClick={() => {
          navigator(-1);
        }}
      >
        Go back
      </Button>
    </>
  );
}

export default OrderStatus;
