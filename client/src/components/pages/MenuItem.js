// Author: Rahul Reddy Puchakayala

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { putItem } from "../../apicalls/WishlistCalls";
import { getMenuItem, getItemCategory } from "../../apicalls/MenuCalls";
import MenuOptions from "./MenuOptions";
import Heart from "react-animated-heart";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const URL = "http://localhost:5000/";

const MenuItem = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState([]);
  const [error, setError] = useState("");
  const [customizations, setCustomizations] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [wishlistitems, setwishlistitems] = useState([]);
  const { state } = useLocation();
  const { itemId } = state || {};
  const [isClick, setClick] = useState(false);
  const data = JSON.parse(localStorage.getItem("item"));
  //const{item , onAdd} = props;
  
  const getMenuItemDetails = () => {
    if (itemId) {
      getMenuItem(itemId).then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          console.log(data);
          setItem(data);      
          setCustomizations(data.customization);

          // getItemCategory(data.category).then((item_catgory) => {
          //   setItem({...item, category: item_catgory.category_name});
          //   });
        }
      });
    } else {
      setError("Something went wrong..Item not found in Menu");
    }
  };

  useEffect(() => {
    getMenuItemDetails();
  }, [itemId]);

  const handleChange = (customization_type, e) => {
    const userChoice = e.target.value;
    setCartItem({ ...cartItem, [customization_type]: userChoice });

    console.log(cartItem);
  };

  const addtoCart = (e) => {
    e.preventDefault();
    setCartItem({
      ...cartItem,
      id: item._id,
      name: item.name,
      price: item.price,
      category: item.category,
    });
    console.log(cartItem);
    
  };

  const addtoWishlist = async () => {
    const result = await fetch(URL+'menuitem',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(item)
    })
    const resultinjson = await result.json();
    console.log(resultinjson)
    };


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="carousel-fill w-100"
                  alt="Food Item"
                  src={item.photo}
                />
              </div>
              <div className="carousel-caption">
              <h1>{item.name}</h1>
              <p>{item.description}</p>
            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <h1>{item.name}</h1>
          </div>
          <div className="col-md-2">
          <Button onClick={addtoWishlist}>Add to Wishlist</Button>
          </div>
          {/* <div className="col-md-2"><Heart isClick={isClick} onClick={updateWishlist} /></div> */}
          <div className="col-md-2">{/* rating */}</div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>{item.description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <ul className="list-group align-items-left">
              <li className="list-group-item border-0">{item.category}</li>
              <li className="list-group-item border-0">{}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <span className="text-danger text-center">{error}</span>
        <form onSubmit={(e) => addtoCart(e)}>
          {item.customization &&
            Object.keys(customizations).map((options, index) => {
              return (
                <div className="form-group mb-3" key={index}>
                  <p>Please choose your food {options}:</p>
                  <MenuOptions
                    index={index}
                    customizations={customizations}
                    options={options}
                    onChange={(e) => handleChange(options, e)}
                  />
                </div>
              );
            })}
          <button type="submit">Add to Cart</button>
        </form>
      </div>
    </div>
  );
};

export default MenuItem;
