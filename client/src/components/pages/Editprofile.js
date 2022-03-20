import React from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import content from "../static/EditprofileElements";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/updateprofile";
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
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log(data);
    const updatedData = {
      id: user.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      address: data.address,
    };
    console.log(updatedData.id);
    console.log(URL)
    console.log(data.token)
    const res = await axios.put("http://localhost:5000/updateprofile", updatedData, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": user.token,
      },
    });
    if (res.data.success === true) {
      navigate("/login");
    }
  };

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
