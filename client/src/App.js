import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Login from './components/pages/Login';
import SendMail from "./components/pages/SendMail";
import VerifyOtp from "./components/pages/VerifyOtp";
import ResetPassword from "./components/pages/ResetPassword";
import Footer from './components/Footer'
import HomePage from './components/pages/HomeScreen';
import Profile from './components/pages/Userprofile'
import Editprofile from './components/pages/Editprofile';
import Signup from './components/pages/Signup';
import Menu from './components/pages/Menu';
import MenuItem from './components/pages/MenuItem';
import Payments from './components/pages/Payments';
import AddCard from './components/paymentscomponents/AddCard';
import Wishlist from './components/pages/Wishlist';
import Cart from './components/pages/Cart';
import Admin from './components/pages/Admin';
import AdminRoute from './components/pages/AdminRoute';
import MenuForm from './components/pages/MenuForm';
import ManageMenu from './components/pages/ManageMenu';
import UpdateMenu from './components/pages/UpdateMenu';
import GetOrderStatus from "./components/pages/GetOrderStatus";
import Order from "./components/pages/Order";
import OrderStatus from "./components/pages/OrderStatus";
import UpdateOrder from "./components/pages/UpdateOrder";
import UpdateOrderFinalScreen from "./components/pages/UpdateOrderFinalScreen";
import UpdateOrderStatus from "./components/pages/UpdateOrderStatus";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route  path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sendmail" element={<SendMail/>}/> 
          <Route path="/verifyotp" element={<VerifyOtp/>}/>
          <Route path="/resetpassword" element={<ResetPassword/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>          
          <Route path="/getOrders/" element={<OrderStatus />} />
          <Route path="/updateOrder/:id" element={<UpdateOrder />} />
          <Route path="/editprofile" element={<Editprofile />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menuitem" element={<MenuItem />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/addCard" element={<AddCard />} />
          <Route path="/cart" element={<Cart />} />
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
          <Route path="/orders" element={<Order />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
