import React from 'react';
import { Link } from 'react-router-dom';
import './Get.css';

function Get() {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Get Started</h1>
      <p className="lead text-center mt-3">
        Choose your college to view the store details and budget options.
      </p>
      <div className="card-group d-flex justify-content-center">
        <div className="card text-center">
          <Link to="/vit" className="text-decoration-none">
            <div className="card-body">
              <h5 className="card-title">VIT</h5>
            </div>
          </Link>
        </div>
        <div className="card text-center">
          <Link to="/svecw" className="text-decoration-none">
            <div className="card-body">
              <h5 className="card-title">SVECW</h5>
            </div>
          </Link>
        </div>
        <div className="card text-center">
          <Link to="/Dental" className="text-decoration-none">
            <div className="card-body">
              <h5 className="card-title">Dental</h5>
            </div>
          </Link>
        </div>
        <div className="card text-center">
          <Link to="/degree" className="text-decoration-none">
            <div className="card-body">
              <h5 className="card-title">Degree</h5>
            </div>
         </Link>
        </div>
        <div className="card text-center">
          <Link to="/diploma" className="text-decoration-none">
            <div className="card-body">
              <h5 className="card-title">Diploma</h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Get;
