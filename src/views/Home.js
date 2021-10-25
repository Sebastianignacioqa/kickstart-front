import React from 'react';
import logo from '../image2.png';
import '../styles/Home.css'
import Carousel from '../components/Carousel';
import SellerSpace from '../components/SellerSpace';
import BuyerSpace from '../components/BuyerSpace';
import Footer from '../components/Footer';

const Home = () => {
    return(<div className="container">
    <img src={logo} className="img-fluid w-25" alt="kickstart"/><br></br><br></br>
    <div className="container-btn">
        <div className="row">
            <div className= "col-6">
                <a className="btn btn-primary leftbtn" href="/login">Ingreso Vendedor</a>
            </div>
            <div className= "col-6">
                <a className="btn btn-primary rightbtn" href="/login2">Ingreso Comprador</a>
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