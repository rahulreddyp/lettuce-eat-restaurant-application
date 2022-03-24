import React from "react";
import { Button } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router";

function UserElement(props) {
  const { name, item_map, status, user_address } = props;
  const id = 1;
  const navigator = useNavigate();
  return (
    <>
      <div class="container" align="center">
        <Card sx={{ maxWidth: 500 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
              <br></br>
              {user_address}
            </Typography>
            <Typography>Items: {item_map}</Typography>
            <Typography>Current Status : {status} </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "center" }}>
            {/* <DropdownButton id="dropdown-basic-button" title="No Status">
              <Dropdown.Item href="#/action-1">Out for delivery</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Expecting Delay</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Delivered</Dropdown.Item>
            </DropdownButton> */}
            <br></br>
            <Button
              size="small"
              onClick={() => {
                navigator(`/updateorderstatus/${id}`);
              }}
            >
              Update Order Status
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

export default UserElement;
