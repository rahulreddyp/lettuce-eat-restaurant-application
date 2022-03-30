import React, { useState, useEffect } from "react";
import { getCart } from "../../apicalls/CartCalls";
import CartCard from "./CartCard";
const AppCart = () => {
  const [cartItem, setCartItem] = useState([]);

  const loadCart = () => {
    getCart().then((data) => {
      // if (data) {
      //   // setError(data.error);
      // } else 
      {
        console.log(data);
        setCartItem(data);
      }
    });
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-12">
          <div className="jumbotron text-center">
            <h1>WHAT'S ON YOUR Cart ?</h1>
            <p>Best food, Best served, Best Loved</p>
          </div>
        </div>
        {cartItem.map((item, index) => {
          return (
            <div key={index} className="col-md-4 mb-4">
             <CartCard item={item}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppCart;
