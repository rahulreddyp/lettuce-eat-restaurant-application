// Author: Deeksha Sareen

import React, { useState, useEffect } from "react";
import WishlistCard from "./WishlistCard";
import { getWishlist } from "../../apicalls/WishlistCalls";
import GenericNotLoggedInComponent from "./GenericNotLoggedInComponent";

const Wishlist = () => {
  const [wishlistItem, setWishlistItem] = useState([]);

  const user = localStorage.getItem("user");
  const [reload, setReload] = useState(false);
  const loadWishlist = () => {
    getWishlist().then((data) => {
    
      {
        console.log(data);
        setWishlistItem(data);
      }
    });
  };

 
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      return <GenericNotLoggedInComponent />;
    } else {
      loadWishlist();
    }
  }, [reload]);
  return (
    <div> 
    <div  className="container d-flex justify-content-center ">
      <div className="row">
        <div className="col-12">
          <div className="jumbotron text-center">
            <h1>WHAT'S ON OUR Wishlist ?</h1>
            <p>Best food, best served, Best Loved</p>
          </div>
        </div>
        {wishlistItem.map((item, index) => {
          return (
            <div key={index} className="col-md-4 mb-4">
              <WishlistCard item={item}/>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  );
};

export default Wishlist;
