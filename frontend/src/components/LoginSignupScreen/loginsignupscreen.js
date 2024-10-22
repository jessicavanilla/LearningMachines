import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/LoginSignupScreen/loginsignupscreen.css';

const LoginSignupScreen = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const navigate = useNavigate();

  // Handler for form submission (just simulates navigation)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (!isLogin) {
      // Simulate account creation and redirect to login page
      console.log('Account created successfully! Redirecting to login...');
      setIsLogin(true); // Simulate switching back to login mode
      navigate('/loginsignup'); // Redirect to the login page
    } else {
      // Simulate login and redirect to homepage
      console.log('Login successful! Redirecting to homepage...');
      navigate('/homepage'); // Redirect to the homepage
    }
  };

  const handleToggle = () => {
    setIsLogin(!isLogin); // Toggle between login and signup
  };

  return (
    <div className="login-signup-container">
      <div className="stars-background"></div> {/* Star background effect */}
      
      <div className="form-container">
        <h1>{isLogin ? 'Login' : 'Create an Account'}</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          
          {!isLogin && (
            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm your password" required />
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>

        <div className="toggle-option">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span onClick={handleToggle}>
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupScreen;
