import React from 'react';
import imgSrc from './imageimage.jpg';
import { Link } from 'react-router-dom';
function Login() {
  return (
  
      <div className='loginkrlo'>
        Login Now
      <div className= "desc">
          Please login to continue using PhoolWala
      </div>
     <div className="App">
         <img src={imgSrc} alt="phool" className="imageimage" />
          <div className='formhai'>
          <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" className='loginbutton'>Login</button>
        </form>
      <nav>
      <div className="haveacc">
              Don't have an account? 
              <Link to="/signup">Signup</Link>
              </div>
      </nav>
      </div>
      </div>
      </div>
  );
}

export default Login;
