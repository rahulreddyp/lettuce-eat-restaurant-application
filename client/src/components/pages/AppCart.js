// Author: Deeksha Sareen

import React, { useState, useEffect } from "react";
import { getCart } from "../../apicalls/CartCalls";
import CartCard from "./CartCard";
const AppCart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [final, setFinal] = useState(0);
   var cartElementMap = new Map();
  const loadCart = () => {
    getCart().then((data) => {
  
      {
        console.log(data);
        setCartItem(data);
      }
    });
  };
  var finaltotal = 0;
  
  useEffect(() => {
    loadCart();
  }, []);


  const holder = new Map();
  const amount = (sum)=>{
    finaltotal = sum
    var total = 0;
    console.log(cartElementMap)
    var get_values = cartElementMap.values();
    for(var ele of get_values)
       total+=ele;
       console.log(total);
       setFinal(total)
  }
  const itemname = (name)=>{  
    holder.set(name,finaltotal)
    cartElementMap = holder  
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
        <div className="card "  style={{ width: "30rem" }}>
        <div class="card-body" >
        <h3 class="card-title"> Cart Summary: </h3>
        <p className="card-description">Total: $ {final.toFixed(2)}</p>
        <p> HST: $ {0.15* final.toFixed(2)}</p>
        <p> Cart total: $ {(0.15* final + final).toFixed(2)}</p>
      </div> 
        </div>
        
      </div>
     
    </div>
  );
};

export default AppCart;
