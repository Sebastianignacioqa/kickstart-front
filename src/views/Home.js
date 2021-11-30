import React from 'react';
import logo from '../image2.png';
import { Link } from "react-router-dom";
import '../styles/Home.css'
import Carousel from '../components/Carousel';
import SellerSpace from '../components/SellerSpace';
import BuyerSpace from '../components/BuyerSpace';
import Footer from '../components/Footer';

const Home = () => {
    return(<div className="container">
    <img src={logo} className="img-fluid w-50" alt="kickstart"/><br></br><br></br>
    <div className="container-btn">
        <div className="row">
            <div className= "col-6">
                <Link className="btn btn-primary leftbtn" to="/login">Ingreso Vendedor</Link>
            </div>
            <div className= "col-6">
                <Link className="btn btn-primary rightbtn" to="/login2">Ingreso Comprador</Link>
            </div>
        </div>  
    </div>
    <Carousel />
    <SellerSpace />
    <BuyerSpace />
    <Footer />
    </div>)
}
export default Home