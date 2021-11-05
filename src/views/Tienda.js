import React from "react";
import { useParams } from "react-router-dom";

const Tienda = () => {
    const params = useParams()
    return (
        <h1>Hola {params.name}! Estamos trabajando en tu Tienda!</h1>
    )
}

export default Tienda