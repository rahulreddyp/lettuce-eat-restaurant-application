import React, { useEffect, useState } from "react";
import axios from "axios";
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
  };

  return (
    <>
      <h1>Select a user to send a notification:</h1>
      <Box sx={{ minWidth: 120, m: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Users</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={name}
            label="Users"
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
        <FormControl sx={{ m: 2 }}>
          <InputLabel>Content of notification:</InputLabel>
          <Input id="content"></Input>
        </FormControl>
        <Button sx={{ m: 2 }} onClick={handleSubmit}>
          Send notification
        </Button>
      </Box>
    </>
  );
}

export default SendNotification;
