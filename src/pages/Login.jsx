import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="form-box">
        <div className="icon-circle">👤</div>
        <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        <p className="subtitle">{isLogin ? 'Sign in to continue' : 'Get started with CareerPath'}</p>
        
        <div className="tab-buttons">
          <button 
            className={`tab-btn ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>
          <button 
            className={`tab-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" required />
          <label>Password</label>
          <input type="password" required />
          {!isLogin && (
            <>
              <label>Confirm Password</label>
              <input type="password" required />
            </>
          )}
          <button type="submit" className="submit-btn">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;