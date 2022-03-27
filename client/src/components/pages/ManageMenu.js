import React, { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import { getMenu } from "../../apicalls/MenuCalls";

const ManageMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  const loadMenu = () => {
    getMenu().then((data) => {
      if (data.error) {
        // setError(data.error);
      } else {
        console.log(data);
        setMenuItems(data);
      }
    });
  };

  useEffect(() => {
    loadMenu();
  }, []);

  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-12">
          <div className="jumbotron text-center">
            <h1>MANAGE YOUR MENU</h1>
            <p></p>
          </div>
        </div>
        {menuItems.map((item, index) => {
          return (
            <div key={index} className="col-md-4 mb-4">
              <MenuCard item={item} isAdmin={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageMenu;
