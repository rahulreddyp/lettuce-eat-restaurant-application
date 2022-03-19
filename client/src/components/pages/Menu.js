import React, { useState, useEffect } from "react";
import Card from "../Card";
import {getMenu} from "../../apicalls/MenuCalls";

const Menu = () => {

  const [menuItems, setMenuItems] = useState([])

  const loadMenu = () => {
    getMenu().then(data => {
      if(data.error){
          // setError(data.error);
      }else{
        console.log(data);
        setMenuItems(data);
      }
  })
  };

  useEffect(() => {
    loadMenu();
}, [])

  return (
      <div className="container mb-5">
        <div className="row">
        {menuItems.map((item, index) => {
                        return(
                            <div key={index} className="col-4 mb-4">
                                <Card item={item}/>
                            </div>
                        )
                    })}

          
          {/* {Array.from({ length: 9 }).map((_, idx) => (
            <div className="col-4 mb-4">
              <div className="card border border-info">
                <div className="rounded border p-2">
                  <img
                    className="card-img-top"
                    alt="Food Item"
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                    src={foodImage}
                  />
                </div>
                <div className="card-header lead">Menu Item</div>

                <div className="card-body">
                  <p className="card-text text-wrap">
                    Lorem ipsum dolor sit amet
                  </p>
                  <span className="text-white bg-success rounded p-2">$ 12.99</span>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
  );
};

export default Menu;
