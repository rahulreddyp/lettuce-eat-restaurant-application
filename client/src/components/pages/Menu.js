// Author: Rahul Reddy Puchakayala

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MenuCard from "./MenuCard";
import { getMenu } from "../../apicalls/MenuCalls";
import MenuSidebar from "./MenuSidebar";
import { FaSortAmountDownAlt, FaFilter } from "react-icons/fa";
import { Navigate, Outlet } from 'react-router-dom';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState("");
  const [reload, setReload] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const [State, setState] = useState({
    sidebarOpen: false,
    specType: ""
  });
  
  const { state } = useLocation();
  var { specification } = state || {};

  const loadMenu = () => {
    // const reloadCount = sessionStorage.getItem('reloadCount');
    // if(reloadCount < 2) {
    //   sessionStorage.setItem('reloadCount', String(reloadCount + 1));
    //   window.location.reload();
    // } else {
    //   sessionStorage.removeItem('reloadCount');
    // }

    const userSpecification = (specification && State.specType!== "") ? specification : {};

    getMenu(userSpecification).then((data) => {

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
    setSidebarVisible(false);
    State.specType = "";
  }, [reload]);

 
  return (
    <div>
    <div className="container d-flex justify-content-center" >
      <div className="row">
        <div className="col-12">
        <span className="text-danger text-center">{error}</span>
          <div className="jumbotron text-center">
            <h1>WHAT'S ON OUR MENU ?</h1>
            <p>Best food, best served</p>
          </div>
        </div>
        <div>{sidebarVisible? <MenuSidebar setReload={setReload} specType={State.specType} reload={reload} />: <></>} </div>       
        <div>
<button
          className="btn btn-default"
          onClick={
            () => {setSidebarVisible(true)
              State.specType = "sort";
          }}
      >
        Sort <FaSortAmountDownAlt />
      </button>

      <button
          className="btn btn-default"
          onClick={
            () => {setSidebarVisible(true)
              State.specType = "filter"; 
          }}
      >   
       Filter <FaFilter />
        </button>
        </div>
       
        {(menuItems.length !==0) ? 
        (menuItems.map((item, index) => {
          return (
            <div key={index} className="col-md-4 mb-4">
              <MenuCard item={item} isAdmin={false} title="Click to view item details" />
            </div>
          );
        })):

        (<h3 className="alert alert-warning"> No menu items found, We will update the menu soon </h3>)
        }
      </div>
    </div>
    </div>
  );
};

export default Menu;
