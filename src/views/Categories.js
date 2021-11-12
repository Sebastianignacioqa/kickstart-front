import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import Card from '../components/Card';
import logo from '../image2.png';
import '../styles/Categories.css'
import { Link } from "react-router-dom";

const Categories = () => {
    const { store } = useContext(Context);

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <Link to="/" className="btn btn-primary btn-sm mt-4">Volver a Página principal</Link>
                    </div>
                    <div className="col-4">
                        <img className="img-fluid" src={logo} alt=""/>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
            
            <h3 className="my-4">¿Qué estás buscando?</h3>
            <Card />
        </div>
    )
};

export default Categories;