import React from 'react';

function Signup() {
  return (
    <div className="signup-container">
      <div className='signupkrlo'>
      <h2>Signup</h2>
      </div>
      <form className='formhai'>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" className='signbutton'>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
