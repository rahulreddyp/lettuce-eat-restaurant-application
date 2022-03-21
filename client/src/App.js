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
import Wishlist from './components/pages/Wishlist';
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
          <Route path="/wishlist" element={<Wishlist/>}/>
        </Routes>
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;
