import React from "react";

const BuyerSpace = () => {
    return (
        <div className="mt-3 mb-3">
            <h3>¿Interesado en comprar?</h3>
            <p>Tenemos todo un bazar digital de tiendas con cientos de artículos para ti.</p>
            <p>¿Te gustaría hechar un vistazo?</p>

            <div className="d-grid gap-2 col-6 mx-auto">
                <a className="btn btn-primary" href="/registrocomprador">Crear una cuenta y comenzar a mirar</a>
                <a className="btn btn-primary" href="/categorias">Continuar como invitado</a>
            </div>
        </div>  
    )
};

export default BuyerSpace;