import React from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../../API";

const headers = {
  'Content-Type': 'application/json'
}

const savedData = JSON.parse(localStorage.getItem("otpemail"));

const content = {
    inputs: [
        {
            label:'Password',
            name: 'password',
            type: 'password'
        },
        {
            label:'Re-type Password',
            name: 'retypepassword',
            type: 'password'
        }
    ]
};

const schema = yup.object().shape({
    password: yup.string().required().min(8),
    retypepassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match")
});

const ResetPassword = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    console.log(data.password)
    const finalData = {email:savedData,password:data.password}
    const res = await axios.post(API + "/resetpassword", finalData, { headers: headers });
    if (res.data.success === true) {
        localStorage.clear();
        navigate("/login");
      }
  };

  return (
    <Container style={{height: "100vh"}} >
      <h1 style={{ fontSize: "70px" }}>Reset Password</h1>
      <Container style={{width: "75vh", marginTop: "50px"}}>
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
          <p>Don't have an account? <a href="/signup">SignUp</a></p>
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    </Container>
  );
};

export default ResetPassword;