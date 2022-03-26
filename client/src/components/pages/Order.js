import React, { useState } from "react";
import { Button, Card, Container, Dropdown } from "react-bootstrap";

export default function Order() {
  const [items, setItems] = useState({
    pizza: {
      price: 15,
      quantity: 1,
    },
    burger: {
      price: 10,
      quantity: 1,
    },
  });
  return (
    <Container style={{ height: "100vh", marginTop: "1%" }}>
      <Container style={{ marginLeft: "38%" }}>
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header>Item 1</Card.Header>
          <Card.Body>
            <Card.Title>Pizza</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>$15</Card.Text>

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
            <Card.Title>Burger</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>$10</Card.Text>

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
      <Button>Place Order</Button>
    </Container>
  );
}
