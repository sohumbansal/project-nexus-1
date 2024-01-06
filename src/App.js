import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import imgSrc from './flowerlavender.jpg';
import './App.css';

function App() {
  return (
    <Router>
       <div className="welcome">
         Welcome
        </div>
        <div className="aajao">
          Please login or sign up to continue
        </div>
      <div className="App">
        <img src={imgSrc} alt="phool" className="phoolwala" />
        <nav>
          <div><button className="smjh">
          <Link to="/login">Login</Link>
          </button>
         </div>
         <div className="haveacc">
          You already have an account? 
          <Link to="/signup">Signup</Link>
          </div>
        </nav>
       
        
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;