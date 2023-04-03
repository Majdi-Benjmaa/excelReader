import React, { useState } from 'react';
import './Login.css';
import logo from './logo.png';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic with email and password
    console.log(`Email: ${email}, Password: ${password}`);
    onLogin();
  };

  return (
    <div className="container">
      <div className="login-container">
        <img src={logo} alt="Logo" className="logo" />
        <form onSubmit={handleSubmit}>
          <h2 className="form-title">Welcome Back!</h2>
          <div className="form-group">
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control" placeholder="Password" required />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
        </form>
        <div className="footer">
          <a href="#" className="forgot-password">Forgot Password?</a>
          <span className="separator">|</span>
          <a href="#" className="register">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
