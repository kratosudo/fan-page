import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import Login from './components/Login'; // Import Login component
import HomePage from './components/HomePage'; // Import HomePage component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} /> {/* Add route for HomePage */}
          {/* Add other routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;