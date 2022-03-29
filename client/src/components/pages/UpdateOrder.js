import React, { useEffect, useState } from "react";
import { Button, Card, Container, Dropdown } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { API } from "../../API";

import OrderCard from "./OrderCard";

export default function UpdateOrder() {
  const { id } = useParams();
  console.log(id);
  const navigator = useNavigate();

  const [orderDetail, setOrderDetail] = useState();

  const updateOrder = async () => {
    try {
      const updatedOrder = await axios.post(
        `${API}/updateOrder/` + id,
        {
          quantity: orderDetail.quantity,
          total: countTotal(),
        }
      );
      console.log(updatedOrder);
      alert("Order updated sucessfully!");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${API}/getOrder/` + id);
      console.log(res.data);
      setOrderDetail(res.data);
    };
    getData();
  }, []);

  const countTotal = () => {
    let total = 0;
    orderDetail.items.map((item, idx) => {
      total += item["price"] * orderDetail.quantity[idx];
    });
    return total;
  };

  const setQuantity = (i, val) => {
    const newQuantity = orderDetail.quantity;
    newQuantity[i] = val;
    setOrderDetail({ ...orderDetail, quantity: newQuantity });
  };

  return orderDetail ? (
    <Container style={{ height: "100vh", marginTop: "1%" }}>
      <Container style={{ marginLeft: "38%" }}>
        {orderDetail.items.map((item, idx) => (
          <>
            <OrderCard
              setQuantity={setQuantity}
              idx={idx}
              item={item}
              quantityArray={orderDetail.quantity}
            ></OrderCard>
            <br></br>
          </>
        ))}
      </Container>
      <p>Total: ${countTotal().toFixed(2)}</p>
      <Button onClick={updateOrder}>Update Order</Button>
    </Container>
  ) : (
    <p>Loading</p>
  );
}
