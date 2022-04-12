import React, { useEffect, useState } from "react";
import axios from "axios";
import GenericNotLoggedInComponent from "./GenericNotLoggedInComponent";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Input } from "@mui/material";
import { API } from "../../API";
import { Button } from "@mui/material";

function SendNotification() {
  const [users, setUsers] = useState([]);
  const user = localStorage.getItem("user");
  useEffect(() => {
    axios
      .get(`${API}/getallusers`)
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = () => {
    var cont = document.getElementById("content").value;
    if(cont.length<=0 || name.length<=0){
      alert("Please enter the required values")
    }
    else{
    const data = {
      userid: name,
      content: cont,
    };
    axios
      .post(`${API}/createNotification`, data)
      .then((res) => {
        console.log(res);
        alert("Notification sent successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Some error occured.");
      });
    }
  };

 if (user === null) {
    return <GenericNotLoggedInComponent />;
  } 
  

  return (
    <>
      <h1>Select a user to send a notification:</h1>
      <Box
        sx={{
          m: 3,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <FormControl>
          <InputLabel id="demo-simple-select-label">Select A Users</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={name}
            label="Select a User"
            onChange={handleChange}
          >
            {users.map((user) => {
              return (
                <MenuItem value={user._id}>
                  {user.firstName + " " + user.lastName}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 3 }}>
          <InputLabel>Content of notification:</InputLabel>
          <Input id="content"></Input>
        </FormControl>
        <Button variant="contained" sx={{ m: 2 }} onClick={handleSubmit}>
          Send notification
        </Button>
      </Box>
    </>
  );
}

export default SendNotification;
