// Author : Pavan Abburi
//This component is used to render profile details of logged in user
import React from "react";
import { Col, Container, Row, Figure, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { FaUser, FaVolumeUp } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../../API";

const Userprofile = () => {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("user"));
  const editProfile = () => {
      navigate("/editprofile")
  }

  const deleteProfile = async() => {
    console.log(data.id);
    const res = await axios.post(`${API}/deleteprofile`, data, { headers: {'Content-Type': 'application/json','x-access-token':data.token} });
    if (res.data.success === true) {
        localStorage.clear();
        navigate("/");
      }
  };

  return (
    <div  style={{backgroundColor: "#e7e393"}}>
      <Container>
        <Row style={{ display: "flex" }}>
          <Col sm={8}>
            <Figure>
              <Figure.Image
                src="https://cdn.dribbble.com/users/1068771/screenshots/10002765/media/45479ca7977fd87588f6ddc4f8099653.jpg?compress=1&resize=1200x900&vertical=top"
                alt="userprofileimage"
                style={{
                  width: "100%",
                  height: "100%",
                  float: "left",
                  paddingRight: "1cm",
                }}
              />
            </Figure>
          </Col>
          <Col sm={3} style={{ textAlign: "left", paddingTop: "1cm" }}>
            <h1>
              <FaUser /> User Profile
            </h1>
            <br></br>
            <p>
              First Name : {data.firstName}
              <br></br>
              <br></br>
              Last Name : {data.lastName}
              <br></br>
              <br></br>
              Email : {data.email}
              <br></br>
              <br></br>
              Address : {data.address}
              <br></br>
              <br></br>
            </p>
            <Row>
              <Col>
                <Button onClick={editProfile}>Edit Profile</Button>
              </Col>
              <Col>
                <Button onClick={deleteProfile}>Delete Profile</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Userprofile;
