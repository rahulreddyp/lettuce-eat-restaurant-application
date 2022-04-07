// Author : Pavan Abburi
//This component is used to provide signup form for the user to register in the application
import React from "react";
import Wrapper from "../styles/usermanagementstyles";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import content from "../static/SignupElements";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { API } from "../../API";

const headers = {
  "Content-Type": "application/json",
};

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  retypepassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  address: yup.string().required(),
});

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    return axios
      .post(API + "/register", data, { headers: headers })
      .then((res) => {
        if (res.data.success === true) {
          navigate("/login");
        }
      });
  };

  return (
    <Wrapper>
      <Container className="Container">
        <h1 style={{ fontSize: "40px" }}>SIGN UP</h1>
        <Container style={{ width: "50%" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {content.inputs.map((input, key) => {
              return (
                <Row key={key}>
                  <Col sm={4} md={4} style={{ textAlign: "left" }}>
                    <label>{input.label}</label>
                  </Col>
                  <Col sm={8} md={8}>
                    <Form.Control
                      name={input.name}
                      type={input.type}
                      {...register(input.name, { required: true })}
                    />
                  </Col>
                  <p>
                    <ErrorMessage errors={errors} name={input.name} />
                  </p>
                </Row>
              );
            })}
            <br></br>
            <Button style={{ width: "150px" }} type="submit">
              Submit
            </Button>
          </form>
        </Container>
      </Container>
    </Wrapper>
  );
};

export default Signup;
