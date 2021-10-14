import React from 'react';
import logo from '../image2.png';
import '../styles/Home.css'
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const Home = () => {
    return(<div className="container-fluid">
    <img src={logo} className="img-fluid w-25" alt="kickstart"/><br></br><br></br>
    <Carousel />
    <Footer />
    </div>)
}
export default Home