import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/pages/Login";
import Footer from "./components/Footer";
import Profile from "./components/pages/Userprofile";
import Editprofile from "./components/pages/Editprofile";
import Signup from "./components/pages/Signup";
import Menu from "./components/pages/Menu";
import MenuItem from "./components/pages/MenuItem";
import HomePage from "./components/pages/HomeScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<Editprofile />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menuitem" element={<MenuItem />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
