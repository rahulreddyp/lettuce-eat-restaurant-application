import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router";
import { getOrderById } from "../../apicalls/UpdateOrderStatusCalls";

function UpdateOrderFinalScreen(props) {
  var name = "";
  var status = "";
  var user_address = "";
  var key = "";
  var len = 0;
  var item_map = [];
  // for (let i = 0; i < len; i++) {
  //   item_map.push(order.items[i].name);
  // }
  const [order, setOrder] = useState([]);

  const loadOrder = () => {
    var url_str = window.location.href;
    var c = url_str.substring(40);
    console.log(c);

    getOrderById(c)
      .then((data) => {
        if (!data.error) {
          // setError(data.error);
          setOrder(data[0]);
        } else {
          //SOmething
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    loadOrder();
  }, []);

  const navigator = useNavigate();

  if (order.length != 0) {
    console.log(order);
    var name = order.user.firstName + " " + order.user.lastName;
    var status = order.orderStatus;
    var user_address = order.user.address;
    var key = order._id;
    var len = order.items.length;
    var item_map = [];
    for (let i = 0; i < len; i++) {
      item_map.push(order.items[i].name);
    }
  }
  // if (c == "623bcd44ba09b9a255134dff") {
  // var name = "Alex McCarthy";
  // var status = "Confirmed";
  // var user_address = "1333 South Park St";
  // item_map.set("Paneer Tikka", 2);
  // item_map.set("Burger", 3);
  // }

  return (
    <>
      <div class="container" align="center">
        <h1>Update Order Status for :</h1>
        <Card sx={{ maxWidth: 500, m: 2, bgcolor: "#f5f5f5" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
              <br></br>
              {user_address}
            </Typography>
            <Typography>Items: {item_map} </Typography>
            <Typography>Current Status : {status}</Typography>
          </CardContent>
        </Card>
        <DropdownButton id="dropdown-basic-button" title="Select Status">
          <Dropdown.Item
            onClick={() => {
              status = "Confirmed";
            }}
          >
            Confirmed
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              status = "Preparing";
            }}
          >
            Preparing
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              status = "Delivered";
            }}
          >
            Delivered
          </Dropdown.Item>
        </DropdownButton>
        <br></br>

        <Button
          size="small"
          onClick={() => {
            alert("Status Updated Successfully :" + status);
          }}
        >
          Update Order Status
        </Button>

        <Button
          size="small"
          onClick={() => {
            navigator(-1);
          }}
        >
          Go back
        </Button>
      </div>
    </>
  );
}

export default UpdateOrderFinalScreen;
