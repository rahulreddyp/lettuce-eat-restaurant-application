import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import HomeScreen from './Components/pages/HomeScreen';
import Login from './Components/pages/Login';
import Signup from './Components/pages/Signup'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route  path="/" element={<HomeScreen/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>

        </Routes>
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;
