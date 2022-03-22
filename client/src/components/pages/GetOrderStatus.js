import React, { useState } from 'react';
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import content from "../static/LoginElements";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from 'react-router';



function GetOrderStatus() {

    const navigator = useNavigate();
    
    const schema = yup.object().shape({
        oid: yup.string().required().email(),
      });
    const oid = useState("")
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
        navigator("/getorderstatus/123")
      };
  return (
    <Container style={{height: "100vh"}} >
      <h1 style={{ fontSize: "70px" }}>Get Order Status</h1>
      <Container style={{width: "75vh", marginTop: "50px"}}>
        <form onSubmit={onSubmit}>
              <Row>                
                  <label>Order ID: </label>
                <Col>
                <Form.Control type="text" placeholder="Please enter your order ID"/>
                </Col>
                  {/* <Form.Control
                    oid = {oid}
                    type = {String}
                    {...register(oid, { required: true })}
                  /> */}
                <p>
                  {/* <ErrorMessage errors={errors} name={oid} /> */}
                </p>
                </Row>
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    </Container>
  );
}

export default GetOrderStatus