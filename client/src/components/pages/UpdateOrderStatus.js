import React from "react";
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

function UpdateOrderStatus() {
  const name = "Alex McCarthy";
  const item_map = new Map();
  const status = "Confirmed";
  const user_address = "1333 South Park St";
  item_map.set("Paneer Tikka", 2);
  item_map.set("Burger", 3);
  return (
    <>
      <Grid>
        <UserElement
          name={name}
          item_map={item_map}
          status={status}
          user_address={user_address}
        />
      </Grid>
    </>
  );
}

export default UpdateOrderStatus;
