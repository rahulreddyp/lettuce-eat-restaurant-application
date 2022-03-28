import React from "react";
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
    // return isAuthenticated()?.role === 1 
    return 1===1
      ? <Outlet />
      : <Navigate to='/login' replace />;
  };

export default AdminRoute;  
