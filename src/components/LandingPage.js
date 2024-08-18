import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signIn');
  };

  return (
    <div className="landing-container">
      <div className="message">
        Welcome to My Anime Fan Page!
      </div>
      <button className="sign-in-button" onClick={handleSignInClick}>
        Sign In
      </button>
      <div className="bubbles">
        
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`bubble bubble-${i}`}></div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
