import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/LoginSignupScreen/loginsignupscreen.css';

const LoginSignupScreen = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value; // Get email input
    const password = e.target[1].value; // Get password input
    const confirmPassword = isLogin ? null : e.target[2].value; // Get confirm password

    const apiEndpoint = isLogin 
      ? 'http://127.0.0.1:8000/api/users/login/' 
      : 'http://127.0.0.1:8000/api/users/signup/';

    const payload = isLogin 
      ? { email, password } 
      : { email, password, confirmPassword }; 

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();

        // Store token in local storage
        if (isLogin) {
          localStorage.setItem('authToken', data.token); 
          navigate('/homepage'); // Navigate to dashboard on successful login
        } else {
          setIsLogin(true); 
          navigate('/loginsignup'); // Navigate back to login page after signup
        }
      } else {
        const errorData = await response.json();
        setError(errorData.error); // Set error message to display
        console.error(errorData.error); // Handle error as needed
      }
    } catch (error) {
      console.error('Error:', error); 
      setError('An unexpected error occurred.'); 
    }
  };

  // Define handleToggle function to switch between login and signup
  const handleToggle = () => {
    setIsLogin(!isLogin);
    setError(null); 
  };

  return (
    <div className="login-signup-container">
      <div className="stars-background"></div> 
      
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

          {error && <div className="error-message">{error}</div>} {/* Display error message if exists */}

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
