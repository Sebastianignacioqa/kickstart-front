import React, { useContext, useEffect } from "react";
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";
import logo from '../image2.png';

const Profile = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <Link to="/"><img className="img-fluid mb-4" src={logo} alt=""/></Link>
            <h3>¡Hola [insertar nombre]!</h3>
            <br/><br/><br/>
            <h4>¿Qué te gustaría hacer?</h4>
            <br/><br/>
            <span className="mx-2"><Link className="btn btn-primary">Vender producto</Link></span>
            <span className="mx-2"><Link to="/categorias" className="btn btn-primary">Ver tiendas</Link></span>
        </div>
    )
}

export default Profile;