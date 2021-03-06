
import React, { useEffect, useContext, useParams } from 'react';
import { Context } from '../store/appContext';
import CardProduct from '../components/CardProduct';
import { Link } from "react-router-dom";
import logo from '../image2.png';
import WishlistButton from '../components/WishlistButton';


const ProfileTienda = () => {

    const {store, actions} = useContext(Context);
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12">
                    <img className="img-fluid mb-3" src={logo} alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="col-9 col-sm-9"></div>
                <div className="col-3 col-sm-3">
                    <WishlistButton/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12">
                    <Link className="btn btn-primary btn-sm mt-3" to="/categorias">Volver a Categorías</Link>
                </div>
            </div>
            <CardProduct/>    
        </div>
    )
};

export default ProfileTienda;