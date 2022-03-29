/**
 * @author Arpan Nayankumar Bhatt <ar205025@dal.ca>
 */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Container, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Order() {
  const navigator = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigator("/login");
    }
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/createOrder", {
        items: ["624343f2f8848fb4c2e5c94a", "62434490f8848fb4c2e5c960"],
        user: {
          _id: JSON.parse(localStorage.getItem("user")).id,
        },
        total:
          items.burger.price * items.burger.quantity +
          items.pizza.price * items.pizza.quantity,
        quantity: [items.pizza.quantity, items.burger.quantity],
        orderStatus: "PREPARING",
      });
      console.log(res.data);
      navigator("/");
    } catch (error) {
      console.log(error);
    }
  };

  const [items, setItems] = useState({
    pizza: {
      price: 8.99,
      quantity: 1,
    },
    burger: {
      price: 2.99,
      quantity: 1,
    },
  });
  return (
    <Container style={{ height: "100vh", marginTop: "1%" }}>
      <Container style={{ marginLeft: "38%" }}>
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header>Item 1</Card.Header>
          <Card.Body>
            <Card.Title>French Fries</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>$8.99</Card.Text>

            <Dropdown>
              <Dropdown.Toggle>Quantity:{items.pizza.quantity}</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    setItems({
                      ...items,
                      pizza: { ...items.pizza, quantity: 1 },
                    });
                  }}
                >
                  1
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setItems({
                      ...items,
                      pizza: { ...items.pizza, quantity: 2 },
                    });
                  }}
                >
                  2
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setItems({
                      ...items,
                      pizza: { ...items.pizza, quantity: 3 },
                    });
                  }}
                >
                  3
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>
        <br />
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header>Item 2</Card.Header>
          <Card.Body>
            <Card.Title>Chicken Wings</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>$2.99</Card.Text>

            <Dropdown>
              <Dropdown.Toggle>
                Quantity:{items.burger.quantity}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    setItems({
                      ...items,
                      burger: { ...items.burger, quantity: 1 },
                    });
                  }}
                >
                  1
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setItems({
                      ...items,
                      burger: { ...items.burger, quantity: 2 },
                    });
                  }}
                >
                  2
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setItems({
                      ...items,
                      burger: { ...items.burger, quantity: 3 },
                    });
                  }}
                >
                  3
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>
      </Container>
      <p>
        Total:
        {items.burger.price * items.burger.quantity +
          items.pizza.price * items.pizza.quantity}
      </p>
      <Button onClick={handleSubmit}>Place Order</Button>
    </Container>
  );
}
