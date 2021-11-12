import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import CardProduct from '../components/CardProduct';
import { Link } from "react-router-dom";
import logo from '../image2.png';

const ProfileTienda = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12">
                    <img className="img-fluid mb-3" src={logo} alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12">
                    <h2>Nombre Tienda</h2>
                    <Link className="btn btn-primary btn-sm mt-3" to="/categorias">Volver a Categorías</Link>
                </div>
            </div>
            <CardProduct/>     
        </div>
    )
};

export default ProfileTienda;