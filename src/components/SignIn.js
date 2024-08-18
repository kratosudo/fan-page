import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

function SignIn() {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);

    // Redirect to the Login page after a short delay
    setTimeout(() => {
      navigate('/login');
    }, 2000); // 2 seconds delay
  };

  return (
    <div className="signIn-container">
      <h2 className="signIn-title">Sign In</h2>
      {showSuccess && <p className="signIn-success">Sign In Successful</p>}
      <form className="signIn-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" className="signIn-input" required />
        <input type="text" placeholder="Username" className="signIn-input" required />
        <input type="password" placeholder="Password" className="signIn-input" required />
        <button type="submit" className="signIn-submit">Sign In</button>
      </form>
      <p className="signIn-login-link">
        Already have an account? <a href="/login">Log in here</a>
      </p>
    </div>
  );
}

export default SignIn;