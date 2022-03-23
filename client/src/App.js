import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomeScreen from "./components/pages/HomeScreen";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Menu from "./components/pages/Menu";
import MenuItem from "./components/pages/MenuItem";
import Footer from "./components/Footer";
import GetOrderStatus from "./components/pages/GetOrderStatus";
import OrderStatus from "./components/pages/OrderStatus";
import UpdateOrderStatus from "./components/pages/UpdateOrderStatus";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menuitem" element={<MenuItem />} />
          <Route path="/getorderstatus" element={<GetOrderStatus />} />
          <Route path="/getorderstatus/:orderid" element={<OrderStatus />} />
          <Route path="/updateorderstatus" element={<UpdateOrderStatus />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
