import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import CardProduct from '../components/CardProduct';
import { Link, useParams } from "react-router-dom";
import logo from '../image2.png';
import WishlistButton from '../components/WishlistButton';


const ProfileTienda = () => {

    const { store, actions } = useContext(Context);
    const { idtienda } = useParams();
    useEffect(() => {
        actions.showTienda(idtienda)
    }, [])



    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12">
                    <Link to="/"><img className="img-fluid mb-3" src={logo} alt="" /></Link>
                </div>
            </div>
            <div className="row">
                <div className="col-9 col-sm-9"></div>
                <div className="col-3 col-sm-3">
                    <WishlistButton />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12">
                    <Link className="btn btn-primary btn-sm mt-3 mb-4" to="/categorias">Volver a Categorías</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12">
                    <h2 className="my-4"><strong>{!!store.tienda && store.tienda.storename}</strong></h2>
                </div>
            </div>
            <CardProduct idtienda={idtienda} />
        </div>
    )
};

export default ProfileTienda;