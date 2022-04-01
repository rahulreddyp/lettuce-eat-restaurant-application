// Author: Deeksha Sareen

import React, { useState, useEffect } from "react";
import { getCart } from "../../apicalls/CartCalls";
import CartCard from "./CartCard";
import Card from "./totalcard";
const AppCart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [total, setTotal] = useState();
  const [final, setFinal] = useState(0);
   var jj = new Map();
  const [map, setMap] = useState();
 
  const loadCart = () => {
    getCart().then((data) => {
  
      {
        console.log(data);
        setCartItem(data);
      }
    });
  };
  var finaltotal = 0;
  let sum = 0;
  useEffect(() => {
    loadCart();
  }, []);


  const holder = new Map();
  const amount = (sum)=>{
    finaltotal = sum
    var sm = 0;
    console.log(jj)
    var get_values = jj.values();
    for(var ele of get_values)
       sm+=ele;
       console.log(sm);
       setFinal(sm)
  }
  const itemname = (name)=>{  
    holder.set(name,finaltotal)
    jj = holder  
  }


  return (
    <div className="container d-flex justify-content-center">
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
         {jj}
        <p> Total: $ {final} </p>
        <p> HST: $ {0.15* final}</p>
        <p> Cart total: $ {0.15* final + final}</p>
      </div>
     
    </div>
  );
};

export default AppCart;
