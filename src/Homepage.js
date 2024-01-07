import React from 'react';
import imgSrc from './flowerlavender.jpg';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="welcome">
      Welcome to PhoolWala
      <div className="aajao">
        Please login or sign up to continue buying fresh flowers and <br />
        Get them delievered to your doorsteps.
      </div>
      <div className="App">
         <img src={imgSrc} alt="phool" className="phoolwala" />
         <nav>
              <div className='smjhA'>
              <button className="smjh">
              <Link to="/signup">Signup</Link>
              </button>
             </div>
              <div className="haveacc">
              You already have an account? 
              <Link to="/login">Login</Link>
              </div>
             </nav>
      </div>
    </div>
  );
}

export default Homepage;
