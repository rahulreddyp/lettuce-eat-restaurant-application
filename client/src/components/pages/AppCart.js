// Author: Deeksha Sareen

import React, { useState, useEffect } from "react";
import { getCart } from "../../apicalls/CartCalls";
import CartCard from "./CartCard";
import { Badge, CloseButton, ListGroup } from "react-bootstrap"
import {FaShoppingCart} from "react-icons/fa";
const AppCart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [final, setFinal] = useState(0);
  const [reload, setReload] = useState(false);
   var cartElementMap = new Map();

  const loadCart = () => {
    getCart().then((data) => {
      {
        setCartItem(data);
      }
    });
  };
  var finaltotal = 0;
  
  useEffect(() => {
    loadCart();
  }, [reload]);


  useEffect(()=>{
    amount();
  },[final])

  const holder = new Map();

  const amount = (sum)=>{
    finaltotal = sum
    var total = 0;
    var get_values = cartElementMap.values();
    for(var ele of get_values)
       total+=ele;
       setFinal(total)
  }
  const itemname = (name)=>{  
    holder.set(name,finaltotal)
    cartElementMap = holder  
  }


  return (
  <div style ={{backgroundColor: "#e7e393"}}> 
    <div className="container d-flex justify-content-center" >
      <div className="row">
        <div className="col-12">
          <div className="jumbotron text-center  ">
            <h1>WHAT'S ON YOUR Cart ?</h1>
            <p>Best food, Best served, Best Loved</p>
          </div>
        </div>
        {cartItem.map((item, index) => {
         finaltotal = index
          return (
            <div key={index} className="col-md-4 mb-4">
             <CartCard item={item} amount = {amount} itemname = {itemname} index = {index}/>    
            </div>
          );
        })
        }
           <div style={{ width: "30rem" ,height:"30rem"}}>
            <h4 className="d-flex justify-content-between align-items-center mb-4">
                <span className="text-muted">Cart summary</span>
                <Badge bg="secondary" pill><FaShoppingCart /> </Badge>
               
            </h4>
            <ListGroup as="ul" className="mb-3">
                {
                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" >
                            <div className="ms-2 me-auto" key="unique">
                                Items Total: 
                            </div>
                            <Badge bg="secondary" pill>$ {final.toFixed(2)}</Badge>
                        </ListGroup.Item>
                    
                }
                {
                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start ">
                            <div className="ms-2 me-auto ">
                              HST Total: 
                            </div>
                            <Badge bg="secondary" pill>$ {0.15* final.toFixed(2)}</Badge>
                        </ListGroup.Item>
                        
                }
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start bg-light">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Total Amount</div>
                    </div>
                    <Badge bg="primary" pill>$ {(0.15* final + final).toFixed(2)}</Badge>
                </ListGroup.Item>
            </ListGroup>
        </div>  
      </div>
     </div>
    </div>
  );
};

export default AppCart;
