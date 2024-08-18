import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here if needed
    navigate('/home'); // Redirect to HomePage
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" className="login-input" required />
        <input type="password" placeholder="Password" className="login-input" required />
        <button type="submit" className="login-submit">Login</button>
      </form>
    </div>
  );
}

export default Login;