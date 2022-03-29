/**
 * @author Arpan Nayankumar Bhatt <ar205025@dal.ca>
 */
import React, { useState } from "react";
import { Button, Card, Container, Dropdown } from "react-bootstrap";

export default function OrderCard({ idx, item, quantityArray, setQuantity }) {
  console.log(quantityArray);

  return (
    <>
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header>Item {idx + 1}</Card.Header>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Text>{item.price}</Card.Text>

          <Dropdown>
            <Dropdown.Toggle>Quantity:{quantityArray[idx]}</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  setQuantity(idx, 0);
                }}
              >
                0
              </Dropdown.Item>

              <Dropdown.Item
                onClick={() => {
                  setQuantity(idx, 1);
                }}
              >
                1
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setQuantity(idx, 2);
                }}
              >
                2
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setQuantity(idx, 3);
                }}
              >
                3
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    </>
  );
}
