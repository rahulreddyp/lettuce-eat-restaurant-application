//Author : Aadil Shaikh

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import UserElement from "./UserElement";
import GenericNotLoggedInComponent from "./GenericNotLoggedInComponent";
import { getAllOrders } from "../../apicalls/UpdateOrderStatusCalls";

function UpdateOrderStatus() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getAllOrders().then((data) => {
      if (data.error) {
        // setError(data.error);
      } else {
        setOrders(data);
      }
    });
  }, []);

  const navigator = useNavigate();
  var name = "";
  var status = "";
  var user_address = "";
  var key = "";

  const user = localStorage.getItem("user");
 if (user === null) {
    return <GenericNotLoggedInComponent />;
  } 

  if(orders===null || orders.length===0){
    return(
      <>
      <h1 align="center"> No orders </h1>
      </>
    )
  }
  
  return (
    <>
      <Grid>
        {console.log(orders)}
        {orders.map((order) => {
          name = order.user.firstName + " " + order.user.lastName;
          status = order.orderStatus;
          user_address = order.user.address;
          key = order._id;
          var len = order.items.length;
          var item_map = [];
          for (let i = 0; i < len; i++) {
            item_map.push(order.items[i].name + ", ");
          }
          console.log(len);
          return (
            <UserElement
              key={key}
              name={name}
              item_map={item_map}
              status={status}
              user_address={user_address}
              id={key}
            />
          );
        })}
      </Grid>
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

export default UpdateOrderStatus;
