import React, { useEffect } from "react";
import GenericNotLoggedInComponent from "./GenericNotLoggedInComponent";
import axios from "axios";
import { useState } from "react";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Divider } from "@mui/material";
import { Typography } from "@mui/material";

function Notifications() {
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (user !== null) {
      console.log(JSON.parse(user).email);
      var id = JSON.parse(user).id;
      axios
        .get(`http://localhost:5000/getNotification/${id}`)
        .then((res) => {
          console.log(res);
          setnotif(res.data.notification);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  const [notif, setnotif] = useState([]);

  if (user === null) {
    return <GenericNotLoggedInComponent />;
  } else {
    const style = {
      width: "100%",
      bgcolor: "background.paper",
    };
    return (
      <>
        <Typography variant="h3">Your notifications</Typography>
        <List sx={style} component="nav" aria-label="mailbox folders">
          {notif.map((notification) => {
            console.log(notification);
            return (
              <>
                <ListItem button>
                  <ListItemText>{notification.content}</ListItemText>
                </ListItem>
                <Divider />
              </>
            );
          })}
        </List>
        ;
      </>
    );
  }
}

export default Notifications;
