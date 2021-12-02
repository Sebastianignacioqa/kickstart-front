import React from 'react';
import { BuyerSignUp } from '../components/BuyerSignUp';
import logo from '../image2.png';
import '../styles/FormBuyer.css';
import { Link } from "react-router-dom";

const FormBuyer = () => {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-sm-3 col-md-3 col-3"></div>
        <div className="col-sm-6 col-md-6 col-6 text-center">
          <Link to="/"><img className="img-fluid" src={logo} alt=""/></Link>
        </div>
        <div className="col-sm-3 col-md-3 col-3"></div>
      </div>
      <div className="row">
        <div className="col-sm-3 col-md-3 col-3"></div>
        <div className="col-sm-6 col-md-6 col-6">
          <BuyerSignUp/>
        </div>
        <div className="col-sm-3 col-md-3 col-3"></div>
      </div>
    </div>
  );
};

export default FormBuyer;