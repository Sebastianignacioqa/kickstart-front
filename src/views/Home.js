import React from 'react';
import logo from '../image.png';
import '../styles/Home.css'

const Home = () => {
    return(<div className="container">
    <img src={logo} class="img-fluid w-50 p-2" alt="kickstart"/>
    <h4>Los duendes están trabajando para que pronto puedas disfrutar de nuestra plataforma</h4>
    </div>)
}
export default Home