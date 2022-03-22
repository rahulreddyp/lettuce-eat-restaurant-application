import React from 'react'
import {Navbar,Nav,NavDropdown,Container, Button} from 'react-bootstrap';
import {FaPizzaSlice ,FaOpencart ,FaPercentage} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

const Header = () => {

  //const navigate = useNavigate();

  return (
   
    <Navbar  bg="dark" expand="lg" variant='dark'>
    <Container fluid>
    <Navbar.Brand style={{fontFamily:'Garamond',fontSize:'0.65cm', textAlign:'left'}} href="/">Lettuce EAT</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" style={{fontWeight:'normal',fontVariant:'-moz-initial'}}>
        <Nav.Link href="/menu">Menu <FaPizzaSlice /></Nav.Link>      
        <Nav.Link href="/orders">Orders <FaOpencart/></Nav.Link>
        <Nav.Link href="/Coupons">Coupons <FaPercentage/></Nav.Link>

        <Nav.Link href="/getorderstatus">Track Your Order</Nav.Link>
        
        
      </Nav>
      <Button variant="outline-light" href="/login" >Login</Button>
    </Navbar.Collapse>
    </Container>
</Navbar>

       
    
  )
}

export default Header;