// Author: Rahul Reddy Puchakayala

import React, { useState, useEffect, Fragment } from "react";
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
    <div className="alert alert-info alert-dismissable fade show" role="alert">
      {deletemessage}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );


  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-12">
          <div className="jumbotron text-center">
            <h1>MANAGE YOUR MENU</h1>
            <Fragment>{deletemessage ? deleteMessage() : null}</Fragment>
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
