import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import HomeScreen from './components/pages/HomeScreen';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup'
import Footer from './components/Footer'

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