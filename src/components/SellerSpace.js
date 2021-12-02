import React from "react";
import { Link } from "react-router-dom";
import '../styles/SellerSpace.css';

const SellerSpace = () => {
    return (
        <div className="border border-dark rounded mt-4 mb-3 p-2 seller-space">
            <h3><strong>¡Bienvenido a Kickstart!</strong></h3>
            <p><strong>Kickstart</strong> es la nueva plataforma creada para pequeños emprendedores, donde hemos puesto nuestro enfoque en <br/>ofrecer la mejor experiencia para la venta de artículos de forma <strong>simple, rápida y ordenada.</strong></p>
            <p>En Kickstart te ofrecemos un espacio único para que puedas abrirte paso en el mercado con todas las comodidades <br/>y facilidades del pago en línea.</p>
            <p><strong>¡Queremos ser tu <i>puntapié</i> inicial en el comienzo de tu camino como emprendedor! <br/>¿Qué esperas para ser parte de nuestra familia? :) </strong></p>
            <Link className= "btn btn-primary mb-3" to="/registrotienda">Registra tu tienda</Link>
        </div>  
    )
};

export default SellerSpace;