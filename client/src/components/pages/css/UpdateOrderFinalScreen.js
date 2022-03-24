import React from "react";
import { Button } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Dropdown, DropdownButton } from "react-bootstrap";

function UpdateOrderFinalScreen(props) {
  var name = "";
  var item_map = new Map();
  var status = "";
  var user_address = "";
  var url_str = window.location.href;
  var c = url_str[url_str.length - 1];
  console.log(c);
  if (c == 1) {
    name = "Alex McCarthy";
    status = "Confirmed";
    user_address = "1333 South Park St";
    item_map.set("Paneer Tikka", 2);
    item_map.set("Burger", 3);
  }
  return (
    <>
      <div class="container" align="center">
        <h1>Update Order Status for :</h1>
        <Card sx={{ maxWidth: 500 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
              <br></br>
              {user_address}
            </Typography>
            <Typography>Items: {item_map}</Typography>
            <Typography>Current Status : {status}</Typography>
          </CardContent>
        </Card>
        <DropdownButton id="dropdown-basic-button" title="Select Status">
          <Dropdown.Item
            onClick={() => {
              status = "Out for delivery";
            }}
          >
            Out for delivery
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              status = "Expecting Delay";
            }}
          >
            Expecting Delay
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
      </div>
    </>
  );
}

export default UpdateOrderFinalScreen;
