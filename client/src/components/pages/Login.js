// Author : Pavan Abburi
//This component is used to login in to the application
import React, { useContext, useState } from "react";
import Wrapper from "../styles/usermanagementstyles";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import content from "../static/LoginElements";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../../API";
import Header from "../Header";
import { UserContext } from "../../App";
import { Spinner } from "react-bootstrap";

const headers = {
  "Content-Type": "application/json",
};

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);

    localStorage.clear();
    const res = await axios
      .post(API + "/login", data, { headers: headers })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        setUser(localStorage.getItem("user"));
        navigate("/menu");
      })
      .catch((err) => {
        setLoading(false);
        alert("Check your credentials. No account found.");
      });
  };

  return (
    <Wrapper>
      <Container className="Container">
        <h1 style={{ fontSize: "40px" }}>LOG IN</h1>
        <br></br>
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
            <p>
              Don't have an account? <a href="/signup">SignUp</a>
            </p>
            <p>
              Forgot or Reset password? <a href="/sendmail">Reset here</a>
            </p>
            <br></br>
            {loading ? (
              <Spinner animation="border" role="status"></Spinner>
            ) : (
              <Button type="submit">Submit</Button>
            )}
          </form>
        </Container>
      </Container>
    </Wrapper>
  );
};

export default Login;
