// Author: Deeksha Sareen

import React, { useState, useEffect } from "react";
import { getCart } from "../../apicalls/CartCalls";
import CartCard from "./CartCard";
import GenericNotLoggedInComponent from "./GenericNotLoggedInComponent";
import { Badge, CloseButton, ListGroup } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import axios from "axios";
import { API } from "../../API";

const AppCart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [final, setFinal] = useState(0);
  const [reload, setReload] = useState(false);
  var cartElementMap = new Map();
  var quantityMap = [];

  const loadCart = () => {
    getCart().then((data) => {
      {
        console.log(data);
        setCartItem(data);
      }
    });
  };
  const navigator = useNavigate();
  const placeOrder = async () => {
    const itemIds = [];
    const quantities = [];
    console.log(cartItem)
    cartItem.map((i, idx) => {
      itemIds.push(i["id"]);
      quantities.push(i["quantity"]);
    });
    const totalBill = final.toFixed(2);

    const params = {
      items: itemIds,
      user: {
        _id: JSON.parse(localStorage.getItem("user")).id,
      },
      total: totalBill,
      quantity: quantities,
      orderStatus: "PREPARING",
    };
    //const res = await axios.post(`${API}/createOrder/`, params);
    //console.log(res.data);
    //alert("Order created!");
    localStorage.setItem("orderParams", JSON.stringify(params))
    localStorage.setItem("cartItem", JSON.stringify(cartItem))
    navigator("/payments");
    
  };

  var finaltotal = 0;
  

   useEffect(() => {
    if (!localStorage.getItem("user")) {
      return <GenericNotLoggedInComponent />;
    } 
    else {
      loadCart();
    }
  }, [reload]);

  useEffect(()=>{
    amount();
  }, [final]);
  console.log(cartItem);
  const holder = new Map();

  const amount = (sum) => {
    finaltotal = sum;
    var total = 0;
    var get_values = cartElementMap.values();
    for (var ele of get_values) total += ele;
    setFinal(total);
  };
  const itemname = (name) => {
    holder.set(name, finaltotal);
    cartElementMap = holder;
  };

  const quantity = (q) => {
    quantityMap.push(q);
    console.log(quantityMap);
  };
  // console.log(cartItem);
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="jumbotron text-center  ">
            <h1>WHAT'S ON YOUR Cart ?</h1>
            <p>Best food, Best served, Best Loved</p>
          </div>
          {cartItem.map((item, index) => {
            finaltotal = index;
            return (
              <div
                key={index}
                className="col-md-3 "
                style={{ display: "flex" }}
              >
                <CartCard
                  item={item}
                  amount={amount}
                  itemname={itemname}
                  quantity={quantity}
                  index={index}
                  setCartItem={setCartItem}
                  cartItem={cartItem}
                />
              </div>
            );
          })}
          <div
            style={{
              width: "20rem",
              margin: "2rem",
              bottom: 0,
              float: "right",
            }}
          >
            <h4 className="d-flex justify-content-between align-items-center mb-4">
              <span className="text-muted">Cart summary</span>
              <Badge bg="secondary" pill>
                <FaShoppingCart />{" "}
              </Badge>
            </h4>
            <ListGroup as="ul" className="mb-3">
              {
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto" key="unique">
                    Items Total:
                  </div>
                  <Badge bg="secondary" pill>
                    $ {final.toFixed(2)}
                  </Badge>
                </ListGroup.Item>
              }
              {
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start "
                >
                  <div className="ms-2 me-auto ">HST Total:</div>
                  <Badge bg="secondary" pill>
                    $ {0.15 * final.toFixed(2)}
                  </Badge>
                </ListGroup.Item>
              }
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start bg-light"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Total Amount</div>
                </div>
                <Badge bg="primary" pill>
                  $ {(0.15 * final + final).toFixed(2)}
                </Badge>
              </ListGroup.Item>
            </ListGroup>

            <Button variant="contained" onClick={placeOrder}>
              Proceed to payments
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCart;
