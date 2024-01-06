import React from 'react';

function Login() {
  return (
    <div className="login-container">
      <div className='loginkrlo'>
        <h2>Login</h2>
      </div>
      <div className='formhai'>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" className='loginbutton'>Login</button>
      </form>
      </div>
    </div>
  );
}

export default Login;
