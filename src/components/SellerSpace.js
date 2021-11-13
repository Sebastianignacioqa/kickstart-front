import React from "react";
import { Link } from "react-router-dom";
import '../styles/SellerSpace.css';

const SellerSpace = () => {
    return (
        <div className="border border-dark rounded mt-4 mb-3 p-2 seller-space">
            <h3><strong>¡Bienvenido a Kickstart!</strong></h3>
            <p>En Kickstart queremos ofrecerte la mejor experiencia para que vendas tus artículos de forma simple, rápida y ordenada.</p>
            <p>Kickstart es la nueva plataforma creada para pequeños emprendedores ¿Que esperas para ser parte de nuestra familia?</p>
            <p><strong>Queremos ser tu <i>puntapié</i> inicial en el comienzo de tu camino como emprendedor. ¿Nos permites? :)</strong></p>
            <Link className= "btn btn-primary mb-3" to="/registrotienda">Registra tu tienda</Link>
        </div>  
    )
};

export default SellerSpace;