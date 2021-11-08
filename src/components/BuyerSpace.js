import React from "react";
import { Link } from "react-router-dom";

const BuyerSpace = () => {
    return (
        <div className="mt-3 mb-3">
            <h3>¿Interesado en comprar?</h3>
            <p>Tenemos todo un bazar digital de tiendas con cientos de artículos para ti.</p>
            <p>¿Te gustaría hechar un vistazo?</p>

            <div className="d-grid gap-2 col-6 mx-auto">
                <Link className="btn btn-primary" to="/registrocomprador">Crear una cuenta y comenzar a mirar</Link>
                <Link className="btn btn-primary" to="/categorias">Continuar como invitado</Link>
            </div>
        </div>  
    )
};

export default BuyerSpace;