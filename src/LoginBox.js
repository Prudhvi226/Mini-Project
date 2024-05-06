// LoginBox.js

import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import './LoginBox.css'; // Importing the CSS file for styling

function LoginBox() {
  const history = useHistory();

  const handleSignUp = () => {
    // Navigate to the sign-up page or display sign-up form
    history.push('/signup'); // Navigate to the /signup route
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="text" name="username" required />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" required />
          <label>Password</label>
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="signup-link">
        <p>New user? <button onClick={handleSignUp}>Sign Up</button></p> {/* Button for Sign Up */}
      </div>
    </div>
  );
}

export default LoginBox;
