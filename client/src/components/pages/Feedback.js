import { Grid } from "@mui/material";
import { TextareaAutosize } from "@mui/material";
import Button from "@mui/material/Button";

import { Box } from "@mui/system";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";

import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { API } from "../../API";

export default function Feedback() {
  const { id } = useParams();

  const [feedBack, setFeedBack] = useState("No feedback yet!");
  const [content, setContent] = useState("");
  const [orderDetails, setOrderDetails] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${API}/getFeedbacks/` + id);
        if (res.data !== null) {
          console.log(res.data);
          setFeedBack(res.data.text);
          setOrderDetails(res.data.order);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        `${API}/createFeedBack/` + id,
        {
          content,
        }
      );
      console.log(res.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };
  return (
    <>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        style={{ margin: "1%" }}
      >
        Enter Feedback
      </Typography>
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
      <Box
      // sx={{
      //   height: "86vh",
      // }}
      >
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Enter your feedback"
          onChange={handleChange}
          style={{ width: 600 }}
        />
      </Box>
      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={content?.trim().length == 0}
        style={{ marginBottom: "31vh" }}
      >
        Submit
      </Button>
    </>
  );
}
