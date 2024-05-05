import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <h1 className="text-center mt-5 home-title">BudgEAT</h1>
      <p className="lead text-center mt-3 home-subtitle">
        Where Flavour meets Affordability
      </p>
      <div className="text-center mt-5">
        <button className="btn btn-primary get-started-btn">
          <a href="/getstarted" className="text-white">
            Get Started
          </a>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
