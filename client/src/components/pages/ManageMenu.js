// Author: Rahul Reddy Puchakayala

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MenuCard from "./MenuCard";
import { getMenu } from "../../apicalls/MenuCalls";

const ManageMenu = () => {

  const [menuItems, setMenuItems] = useState([]);
  const [reload, setReload] = useState(false);

  const { state } = useLocation();
  var { deletemessage } = state || {};

  const loadMenu = () => {   
    getMenu().then((data) => {
      if (data.error) {
        // setError(data.error);
      } else {
        setMenuItems(data);  
        
      }
    });
  };  

  useEffect(() => {
    loadMenu();    
    
    const interval=setInterval(() => {
        loadMenu();
       },20000)
                  
       return() => clearInterval(interval);
  }, [reload]);

  const deleteMessage = () => (
    <div className="alert alert-warning alert-dismissable fade show" role="alert">
      <strong>{deletemessage}</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        color="none"  
      >
      </button>
    </div>
  );


  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-12">
          <div className="jumbotron text-center">
            <h1>MANAGE YOUR MENU</h1>
            {deletemessage ? deleteMessage() : null}
          </div>
        </div>
        {menuItems.map((item, index) => {
          return (
            <div key={index} className="col-md-4 mb-4">
              <MenuCard item={item} isAdmin={true} setReload={setReload} title="Click to update" reload={reload} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageMenu;
