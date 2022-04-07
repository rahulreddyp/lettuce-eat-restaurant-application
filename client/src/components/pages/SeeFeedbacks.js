import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import FeedbackElement from "./FeedbackElement";
import { useNavigate } from "react-router-dom";
import { API } from "../../API";

export default function SeeFeedbacks() {
  const [feedbacks, setFeedbacks] = useState();
  const navigator = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigator("/login");
    } else {
      const getData = async () => {
        const res = await axios.get(`${API}/getFeedbacks`);
        setFeedbacks(res.data);
        console.log(res.data);
      };
      getData();
    }
  }, []);

  return (
    <div>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        style={{ margin: "1%" }}
      >
        All Feedbacks
      </Typography>
      {feedbacks &&
        feedbacks?.map((feedback) => (
          <FeedbackElement
            feedBack={feedback.text}
            orderDetails={feedback.order}
          />
        ))}
    </div>
  );
}
