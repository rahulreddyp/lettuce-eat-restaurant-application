import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import HomeScreen from './components/pages/HomeScreen';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Menu from './components/pages/Menu';
import MenuItem from './components/pages/MenuItem';
import Footer from './components/Footer';
import Admin from './components/pages/Admin';
import AdminRoute from './components/pages/AdminRoute';
import MenuForm from './components/pages/MenuForm';
import ManageMenu from './components/pages/ManageMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route  path="/" element={<HomeScreen/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/menuitem" element={<MenuItem/>}/>
          <Route path="admin" element={<AdminRoute/>}>
            <Route path="home" element={<Admin/>}/>
            <Route index path="menu/add" element={<MenuForm />} />
            <Route index path="menu/manage" element={<ManageMenu />} />
            </Route>
        </Routes>
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;
