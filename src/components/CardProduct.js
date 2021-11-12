import React from 'react';
import { Link } from "react-router-dom";

const CardProduct = () => {

    return (
        <div className="container">
            <div className="card mx-auto mt-4" style={{ width: "22em" }}>
                <img src="https://asdeimagen.com/wp-content/uploads/2020/07/Polera-negra-hombre-4.jpeg?x77271" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title mb-4">Nombre del producto</h4>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h5 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Descripción del producto
                                </button>
                            </h5>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="my-2">$10000</h4>
                    <p className="my-3">Stock: 20</p>

                    <div className="row">
                        <div className="col-12 col-sm-12">
                            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Ver más fotos</button>
                            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Más fotos</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
                                </div>
                                <div className="offcanvas-body">
                                    <div className="row">
                                        <div className="col-12 col-sm-12">
                                            <img src="https://asdeimagen.com/wp-content/uploads/2020/07/Polera-negra-hombre-4.jpeg?x77271" alt="..." />
                                        </div>
                                        <div className="col-12 col-sm-12">
                                            <img src="https://asdeimagen.com/wp-content/uploads/2020/07/Polera-negra-hombre-4.jpeg?x77271" alt="..." />
                                        </div>
                                        <div className="col-12 col-sm-12">
                                            <img src="https://asdeimagen.com/wp-content/uploads/2020/07/Polera-negra-hombre-4.jpeg?x77271" alt="..." />
                                        </div>
                                        <div className="col-12 col-sm-12">
                                            <img src="https://asdeimagen.com/wp-content/uploads/2020/07/Polera-negra-hombre-4.jpeg?x77271" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="#" className="btn btn-primary">Agregar al carrito</Link>
                </div>
            </div>
        </div>
    )
};

export default CardProduct;