//Author : Aadil Shaikh

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Paper } from "@mui/material";

function OrderElement(props) {
  const navigator = useNavigate();
  const { item_map, quantity, user_address, order_status } = props;
  return (
    <>
      <div class="content" align="center">
        <Card sx={{ maxWidth: 300, maxHeight: 900, m: 2 }}>
          <CardActionArea>
            {/* <CardMedia
              component="img"
              height="170"
              image={image_url}
              alt="Image"
            /> */}
            <CardContent>
              {/* <Typography gutterBottom variant="h5" component="div">
                {dish_name}
              </Typography> */}
              <Typography>Items: </Typography>
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
              {/* variant="body2" color="text.secondary" */}
              <Typography>Quantity : {quantity}</Typography>
              <Typography>Your Address : {user_address} </Typography>
              <Typography>
                Your Order Status:{" "}
                <Typography variant="body" color="text.primary">
                  {" "}
                  {order_status}
                </Typography>
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}></CardActions>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}

export default OrderElement;

// <>
//   <div class="container1">
//     <div class="Image">
//       <img
//         align="right"
//         width="300px"
//         height="100%"
//         src="https://www.cookwithmanali.com/wp-content/uploads/2019/05/Paneer-Butter-Masala.jpg"
//       ></img>
//     </div>
//     <div class="Order-Details">
//       <h3>Paneer Tikka Masala</h3>
//       <h3>Quantity : 2</h3>
//       <h3>Order Status:</h3>
//       <h3>- Order Confirmed.</h3>
//       <h3>- Delivery boy has picked up your order.</h3>
//     </div>
//     <div class="Button">
//       <Button
//         type="button"
//         align="center"
//         onClick={() => {
//           navigator(-1);
//         }}
//       >
//         Go back!
//       </Button>
//     </div>
//   </div>
// </>
