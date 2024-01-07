import React from 'react';
import imgSrc from './signupflower.jpg';
import { Link } from 'react-router-dom';
function Signup() {
  return (
    
      <div className='signupkrlo'>
      Sign Up
      <div className= "desc">
          Please register and SignUp to continue 
      </div>
      <img src={imgSrc} alt="phool" className="imagesignup" />
      <form className='formhai'>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" className='signbutton'>Signup</button>
      </form>
      <nav>
      <div className="haveacc">
              Already have an account? 
              <Link to="/login">Login</Link>
              </div>
      </nav>
    </div>
  );
}

export default Signup;
