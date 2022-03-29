import React from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/";
const headers = {
  "Content-Type": "application/json",
};

const content = {
  inputs: [
    {
      label: "Email",
      name: "email",
      type: "text",
    },
  ],
};

const schema = yup.object().shape({
  email: yup.string().required().email(),
});

const SendMail = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    // console.log(data);
    const res = await axios.post(URL + "resetmail", data, { headers: headers });
    if (res.data.success === true) {
      navigate("/verifyotp");
    }
  };

  return (
    <Container style={{ height: "100vh" }}>
      <h1 style={{ fontSize: "70px" }}>Verify Email</h1>
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
                    {...register(input.name, { required: true })}
                  />
                </Col>
                <p>
                  <ErrorMessage errors={errors} name={input.name} />
                </p>
              </Row>
            );
          })}
          <p>
            Don't have an account? <a href="/signup">SignUp</a>
          </p>
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    </Container>
  );
};

export default SendMail;
