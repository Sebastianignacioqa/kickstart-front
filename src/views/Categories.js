   
import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import Card from '../components/Card';
import logo from '../image2.png';
import '../styles/Categories.css'
import { Link } from 'react-router-dom';

const Categories = () => {
    const { store } = useContext(Context);

    return (
        <div><br></br><br></br>
            <Link to="/login2" className="btn btn-primary" onClick={localStorage.clear()}>Cerrar sesion</Link><br></br><br></br>
            <img className="img-fluid" src={logo} alt=""/>
            <Card />
        </div>
    )
};

export default Categories;