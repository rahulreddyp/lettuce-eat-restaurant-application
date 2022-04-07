/**
 * @author Arpan Nayankumar Bhatt <ar205025@dal.ca>
 */
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
  const { image_url, dish_name, quantity, order_status, total, orderId } =
    props;
  return (
    <>
      <div class="content" align="center">
        <Card
          sx={{ maxWidth: 400, maxHeight: 900, m: 2 }}
          onClick={() => {
            if (order_status === "DELIVERED") {
              navigator("/feedback/" + orderId);
            }
            if (order_status === "PREPARING") {
              navigator("/updateOrder/" + orderId);
            }
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Order Number: {dish_name}
              </Typography>
              {/* variant="body2" color="text.secondary" */}
              <Typography>Items : {quantity}</Typography>
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
