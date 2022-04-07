// Author: Rahul Reddy Puchakayala

import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import GenericNotLoggedInComponent from "./GenericNotLoggedInComponent";

const AdminRoute = () => {

    const user = JSON.parse(localStorage.getItem("user"));
    
    return (user && user.email === "group01@gmail.com")
      ? <Outlet />
      : <GenericNotLoggedInComponent/>;
  };

export default AdminRoute;  
