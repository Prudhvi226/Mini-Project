import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      {/* Image container */}
      {/* Text content container */}
      <div className='body'>
        <h1 className="text-center mt-5 home-title"><span className='budg'>Budg</span><span className='eat'>EAT</span></h1>
        <p className="lead text-center mt-3 home-subtitle">
          Where Flavour meets Affordability
        </p>
        <div className="text-center mt-5">
          <div className='btn'>
            <button className="btn btn-primary get-started-btn">
              <a href="/getstarted" className="text-white">
                Get Started
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
