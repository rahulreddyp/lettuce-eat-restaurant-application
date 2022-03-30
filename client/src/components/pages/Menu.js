// Author: Rahul Reddy Puchakayala

import React, { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import { getMenu } from "../../apicalls/MenuCalls";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState("");
  const [reload, setReload] = useState(false);

  const loadMenu = () => {
    getMenu().then((data) => {

      console.log(data);
      if (data.error) {
        setError(data.error);
        console.log(data.error);
      } else {
        setMenuItems(data);
      }
    });
  };

  useEffect(() => {
    loadMenu();
  }, [reload]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-12">
          <div className="jumbotron text-center">
            <h1>WHAT'S ON OUR MENU ?</h1>
            <p>Best food, best served</p>
          </div>
        </div>
        {menuItems.map((item, index) => {
          return (
            <div key={index} className="col-md-4 mb-4">
              <MenuCard item={item} isAdmin={false} title="Click to view item details" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
