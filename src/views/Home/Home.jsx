import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <span>Welcome to Acme!</span>
      <Link to="/login">Sign in here!</Link>
      <Link to="/register">Sign Up here!</Link>
    </div>
  );
}
