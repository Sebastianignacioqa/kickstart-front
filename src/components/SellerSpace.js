import React from "react";
import { Link } from "react-router-dom";
import '../styles/SellerSpace.css';

const SellerSpace = () => {
    return (
        <div className="mt-3 mb-4 seller-space">
            <h3>¡Bienvenido a Kickstart!</h3>
            <p>En Kickstart queremos ofrecerte la mejor experiencia para que vendas tus artículos de forma simple, rápida y ordenada.</p>
            <p>[Texto convincente]</p>
            <p><strong>Queremos ser tu <i>puntapié</i> inicial en el comienzo de tu camino como emprendedor. ¿Nos permites? :)</strong></p>
            <Link className= "btn btn-primary" to="/registrotienda">Registra tu tienda</Link>
        </div>  
    )
};

export default SellerSpace;