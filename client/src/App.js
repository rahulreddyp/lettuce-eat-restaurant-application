import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Admin from "./components/pages/Admin";
import AdminRoute from "./components/pages/AdminRoute";
import { default as AllOrders } from "./components/pages/AllOrders";
import { default as OrderStatus } from "./components/pages/OrderStatus";
import Cart from "./components/pages/Cart";
import Editprofile from "./components/pages/Editprofile";
import GetOrderStatus from "./components/pages/GetOrderStatus";
import HomePage from "./components/pages/HomeScreen";
import Login from "./components/pages/Login";
import ManageMenu from "./components/pages/ManageMenu";
import Menu from "./components/pages/Menu";
import Aboutus from "./components/pages/Aboutus";
import MenuForm from "./components/pages/MenuForm";
import MenuItem from "./components/pages/MenuItem";
import Payments from "./components/pages/Payments";
import ResetPassword from "./components/pages/ResetPassword";
import SendMail from "./components/pages/SendMail";
import Signup from "./components/pages/Signup";
import UpdateMenu from "./components/pages/UpdateMenu";
import UpdateOrder from "./components/pages/UpdateOrder";
import UpdateOrderFinalScreen from "./components/pages/UpdateOrderFinalScreen";
import UpdateOrderStatus from "./components/pages/UpdateOrderStatus";
import Profile from "./components/pages/Userprofile";
import VerifyOtp from "./components/pages/VerifyOtp";
import Wishlist from "./components/pages/Wishlist";
import AddCard from "./components/paymentscomponents/AddCard";
import AppCart from "./components/pages/AppCart";
import userEvent from "@testing-library/user-event";
import { useEffect } from "react";

export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/orders" element={<AllOrders />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sendmail" element={<SendMail />} />
            <Route path="/verifyotp" element={<VerifyOtp />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/createOrder" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/getOrders/" element={<OrderStatus />} />
            <Route path="/updateOrder/:id" element={<UpdateOrder />} />
            <Route path="/editprofile" element={<Editprofile />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menuitem" element={<MenuItem />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/addCard" element={<AddCard />} />
            <Route path="/cart" element={<AppCart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="admin" element={<AdminRoute />}>
              <Route path="home" element={<Admin />} />
              <Route index path="menu/add" element={<MenuForm />} />
              <Route index path="menu/manage" element={<ManageMenu />} />
              <Route path="menu/update" element={<UpdateMenu />} />
            </Route>
            <Route path="/getorderstatus" element={<GetOrderStatus />} />
            <Route path="/getorderstatus/:orderid" element={<OrderStatus />} />
            <Route path="/updateorderstatus" element={<UpdateOrderStatus />} />
            <Route
              path="/updateorderstatus/:id"
              element={<UpdateOrderFinalScreen />}
            />
            {/* <Route path="/cart" element={<Cart />} /> */}
          </Routes>
        </Router>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
