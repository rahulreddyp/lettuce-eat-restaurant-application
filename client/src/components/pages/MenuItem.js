// Author: Rahul Reddy Puchakayala, Deeksha Sareen

import { API } from "../../API";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { putItem } from "../../apicalls/WishlistCalls";
import { getMenuItem, getItemCategory } from "../../apicalls/MenuCalls";
import MenuOptions from "./MenuOptions";
import Heart from "react-animated-heart";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { moveItemtoCart } from "../../apicalls/CartCalls";

const MenuItem = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [customizations, setCustomizations] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [flag, setFlag] = useState(false);
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
    setCartItem({ ...cartItem, [customization_type]: userChoice ,id: item._id,
      name: item.name,
      price: item.price,
      category: item.category,
      description: item.description,
      quantity: 1,
      });
      setFlag(true);
      console.log(cartItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if(flag!==true){
      alert("Please select a customization option!!!");
    }else{
       moveItemtoCart(cartItem).then((data)=>{
      
      if (data.error) {
        alert(data.error);
      } else {
        alert(data.message);
        console.log(data);
      }
    }) 
    }
   
    
  };

  const addtoWishlist = async () => {
    console.log(item.id)
    console.log("Item to be added "+ item.name)
    putItem(item).then((data)=>{
      if (data.error) {
        alert(data.error)
      } else {
        // setSuccess(data.message);
        alert("Item added to wishlist");
        console.log(data);
      }
    }) 
    };

    var image = `${API}/menu/photo/${item._id}`;

  return (
    <div style={{backgroundColor: "#e7e393"}}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="carousel-fill w-100"
                  alt="Food Item"
                  src={image}
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
          <div className="col-md-6">
            <p>{item.dietary}</p>
          </div> 
          <div className="col-md-2">
            {/* <h3>{item.price}</h3> */}
          </div>    
          <div className="col-md-2">
          <Button onClick={addtoWishlist}>Add to Wishlist</Button>
          </div>
          <div className="col-md-2">{/* rating */}</div>
        </div>   
      </div>
     
      <div className="row">
      <span className="text-danger text-center">{success}</span>
        <span className="text-danger text-center">{error}</span>
        <form onSubmit={handleSubmit} method="POST">
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
                    required
                    
                  />
                </div>
              );
            })}
          <button  type= "submit" onClick={handleSubmit} class = "btn btn-secondary">Add to Cart</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default MenuItem;
