import React from 'react';
import { Link } from "react-router-dom";

const CardArticulo = () => {

    return (
        <div className="card mx-auto mt-4" style={{ width: "18rem" }}>
            <img src="https://cdn.shopify.com/s/files/1/0012/3283/0511/products/076A8593_400x.jpg?v=1617837056" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{"{product.item_title}"}</h5>
                <Link to="#" className="btn btn-primary">Ver artículo</Link>
            </div>
        </div>
    )
};

export default CardArticulo;