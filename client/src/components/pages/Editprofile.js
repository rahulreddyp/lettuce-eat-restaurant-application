// Author : Pavan Abburi
//This component is used to render the edit profile page of logged in user
import React from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import content from "../static/EditprofileElements";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { API } from "../../API";

const URL = `${API}/updateprofile`;
const headers = {
  "Content-Type": "application/json",
};

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required().email(),
  address: yup.string().required(),
});

const Editprofile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [newUserDetails, setNewUserDetails] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const updatedData = {
      id: user.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      address: data.address,
    };

    const res = await axios.put(
      `${API}/updateprofile`,
      updatedData,
      {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": user.token,
        },
      }
    );
    if (res.data.success === true) {
      Object.keys(data).forEach((key) => {
        user[key] = data[key];
      });
      console.log(user);
      window.localStorage.setItem("user", JSON.stringify(user));
      navigate("/menu");
    }
  };
  useEffect(() => {
    console.log("user updated");
  }, [user]);

  return (
    <Container
      style={{
        height: "100vh",
      }}
    >
      <h1 style={{ fontSize: "70px" }}>Edit Profile</h1>
      <Container style={{ width: "75vh", marginTop: "50px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {content.inputs.map((input, key) => {
            return (
              <Row key={key}>
                <Col style={{ textAlign: "left" }}>
                  <label>{input.label}</label>
                </Col>
                <Col>
                  <Form.Control
                    name={input.name}
                    type={input.type}
                    defaultValue={input.default}
                    {...register(input.name, { required: true })}
                  />
                </Col>
                <p>
                  <ErrorMessage errors={errors} name={input.name} />
                </p>
              </Row>
            );
          })}
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    </Container>
  );
};

export default Editprofile;
