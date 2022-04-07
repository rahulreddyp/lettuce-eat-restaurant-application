//Author : Aadil Shaikh
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  CardActionArea,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { getOrderById } from "../../apicalls/UpdateOrderStatusCalls";
import axios from "axios";
import { API } from "../../API";

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
  const { id } = useParams();
  var c = id;
  console.log(c);

  const handleChange = (event) => {
    setS(event.target.value);
  };

  const loadOrder = () => {
    // var url_str = window.location.href;
    // var c = url_str.substring(56);

    getOrderById(c)
      .then((data) => {
        if (!data.error) {
          // setError(data.error);
          setOrder(data["order"][0]);
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
  const [s, setS] = useState("");

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
            <Typography variant="h5">Items: </Typography>
            {item_map.map((item, key) => {
              return (
                <div key={key}>
                  <Paper
                    sx={{
                      bgcolor: "#0d47a1",
                      color: "white",
                      m: 1,
                      width: "30%",
                    }}
                  >
                    <Typography>{item} </Typography>
                    {console.log(item)}
                  </Paper>
                </div>
              );
            })}

            <Typography>Current Status : {status}</Typography>
          </CardContent>
        </Card>

        <InputLabel id="demo-simple-select-filled-label">
          Order Status:
        </InputLabel>
        <Select
          sx={{ m: 2 }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={s}
          onChange={handleChange}
        >
          <MenuItem value={"CONFIRMED"}>Confirmed</MenuItem>
          <MenuItem value={"PREPARING"}>Preparing</MenuItem>
          <MenuItem value={"DELIVERED"}>Delivered</MenuItem>
        </Select>

        <br></br>

        <Box sx={{ m: 1 }}>
          <Button
            size="small"
            onClick={() => {
              if (s !== "") {
                axios
                  .post(`${API}/updateOrderStatus/${key}`, {
                    orderStatus: s,
                  })
                  .then((result) => {
                    console.log(result);
                    alert(result.data.message);
                    window.location.reload(true);
                  })
                  .catch((err) => {
                    console.error(err);
                  });
              } else {
                alert("Please select a valid status");
              }
            }}
          >
            Update Order Status
          </Button>
        </Box>

        <Button
          sx={{ m: 1 }}
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
