import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function OrderElement(props) {
  const navigator = useNavigate();
  const { image_url, dish_name, quantity, order_status, total } = props;
  return (
    <>
      <div class="content" align="center">
        <Card
          style={
            order_status === "OUT_FOR_DELIVERY" ? { pointerEvents: "none" } : {}
          }
          sx={{ maxWidth: 300, maxHeight: 900, m: 2 }}
          onClick={() => {
            navigator("/updateOrder/" + dish_name);
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="170"
              image={image_url}
              alt="Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {dish_name}
              </Typography>
              {/* variant="body2" color="text.secondary" */}
              <Typography>Quantity : {quantity}</Typography>
              <Typography>Total : {total}</Typography>
              <Typography>
                Order Status:{" "}
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
