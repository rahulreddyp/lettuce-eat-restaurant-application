import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Login from './components/pages/Login';
import Footer from './components/Footer'
import Profile from './components/pages/Userprofile'
import Editprofile from './components/pages/Editprofile';
import Signup from './components/pages/Signup';
import Menu from './components/pages/Menu';
import MenuItem from './components/pages/MenuItem';
import Footer from './components/Footer';
import Wishlist from './components/pages/Wishlist';
import Cart from './components/pages/Cart';
import Admin from './components/pages/Admin';
import AdminRoute from './components/pages/AdminRoute';
import MenuForm from './components/pages/MenuForm';
import ManageMenu from './components/pages/ManageMenu';
import UpdateMenu from './components/pages/UpdateMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route  path="/" element={<Profile/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/editprofile" element={<Editprofile/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/menuitem" element={<MenuItem/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="admin" element={<AdminRoute/>}>
            <Route path="home" element={<Admin/>}/>
            <Route index path="menu/add" element={<MenuForm />} />
            <Route index path="menu/manage" element={<ManageMenu />} />
            <Route path="menu/update" element={<UpdateMenu />}/>
            </Route>
        </Routes>
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;
