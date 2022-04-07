import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function FeedbackElement({ orderDetails, feedBack }) {
  console.log(feedBack);
  return (
    <div>
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2%",
          marginBottom: "1%",
        }}
      >
        <Card sx={{ maxWidth: 400, width: "100%" }}>
          <CardActionArea style={{ pointerEvents: "none" }}>
            {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
            <Typography gutterBottom variant="h5" component="div">
              Order No: {orderDetails?._id}
            </Typography>{" "}
            <Typography gutterBottom variant="h5" component="div">
              Total: ${orderDetails?.total}
            </Typography>{" "}
            <Typography gutterBottom variant="h5" component="div">
              Items: {orderDetails?.quantity.length}
            </Typography>{" "}
            <CardContent>
              <Typography variant="body2" color="text.primary">
                Feedback:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feedBack}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </div>
  );
}
