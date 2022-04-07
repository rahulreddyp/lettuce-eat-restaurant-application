//Authors: Pavan Abburi
//This component renders navigation bar of the application
import React, { useContext } from "react";
import { UserContext } from "../App";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import {
  FaPizzaSlice,
  FaOpencart,
  FaPercentage,
  FaHeart,
  FaShoppingBasket,
  FaMoneyBill,
} from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { padding } from "@mui/system";
import { useState } from "react";
import styled from "styled-components";

const NewNavBar = styled(NavDropdown)`
  margin-left: -500px;

  .dropdown-menu {
    margin-left: -75px;
  }
`;
const Header = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {}, [user]);

  const clearStorage = async () => {
    localStorage.clear();
  };
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand
          style={{
            fontFamily: "Garamond",
            fontSize: "0.65cm",
            textAlign: "left",
          }}
          href="/"
        >
          Lettuce EAT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={{ fontWeight: "normal", fontVariant: "-moz-initial" }}
          >
            <Nav.Link href="/menu">
              Menu <FaPizzaSlice />
            </Nav.Link>
            <Nav.Link href="/wishlist">
              Wishlist <FaHeart />
            </Nav.Link>
            <Nav.Link href="/orders">
              Orders <FaOpencart />
            </Nav.Link>
            <Nav.Link href="/coupons">
              Coupons <FaPercentage />
            </Nav.Link>
            <Nav.Link href="/payments">
              Payments <FaMoneyBill />
            </Nav.Link>
            <Nav.Link href="/createOrder">
              Create Order Demo <FaMoneyBill />
            </Nav.Link>
            <Nav.Link href="/Cart">
              Cart <FaShoppingBasket />
            </Nav.Link>
            <Nav.Link href="/getorderstatus">Track Your Order</Nav.Link>
            <Nav.Link href="/feedbacks">See Feedbacks</Nav.Link>
            <Nav.Link href="/updateorderstatus">Update Order Status</Nav.Link>
            <Nav.Link href="/sendnotification">Send Notifications</Nav.Link>
            <Nav.Link href="/notifications">Notifications</Nav.Link>
          </Nav>

          {user ? (
            <NewNavBar
              title={
                <img
                  className="thumbnail-image"
                  src="https://t4.ftcdn.net/jpg/01/97/15/87/360_F_197158744_1NBB1dEAHV2j9xETSUClYqZo7SEadToU.jpg"
                  alt="User"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "100%",
                    paddingmarginLeft: "1000px",
                  }}
                />
              }
            >
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={clearStorage}>
                Signout
              </NavDropdown.Item>
            </NewNavBar>
          ) : (
            <Button
              variant="outline-light"
              onClick={() => {
                console.log("login");
                window.location = "/login";
              }}
            >
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
