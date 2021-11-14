import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import formatCurrency from 'format-currency'


const CardProduct = () => {

    const { store, actions } = useContext(Context);
    useEffect(() => {
        console.log(store.productos)
    }, [])

    return (
        
        <div className="container">
            {store.productos.map((producto, index) => <div className="card mx-auto mt-4" style={{ width: "22em" }} key={index}>
                <img src="https://http2.mlstatic.com/D_NQ_NP_960055-MLC43655552847_102020-O.jpg" className="card-img-top" alt="..." />
                <div className="card-body"> 
                    <h4 className="card-title mb-4">{producto.item_title}</h4>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h5 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Descripción del producto
                                </button>
                            </h5>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">{producto.item_description}</div>
                            </div>
                        </div>
                    </div>
                    <h4 className="my-2">${producto.item_price}</h4>
                    <p className="my-3">Stock: {producto.item_stock}</p>

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
                                            <img src="https://http2.mlstatic.com/D_NQ_NP_960055-MLC43655552847_102020-O.jpg" alt="..." />
                                        </div>
                                        <div className="col-12 col-sm-12">
                                            <img src="https://http2.mlstatic.com/D_NQ_NP_960055-MLC43655552847_102020-O.jpg" alt="..." />
                                        </div>
                                        <div className="col-12 col-sm-12">
                                            <img src="https://http2.mlstatic.com/D_NQ_NP_960055-MLC43655552847_102020-O.jpg" alt="..." />
                                        </div>
                                        <div className="col-12 col-sm-12">
                                            <img src="https://http2.mlstatic.com/D_NQ_NP_960055-MLC43655552847_102020-O.jpg" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => actions.addProduct(producto)} className="btn btn-primary">Agregar al carrito</button>
                </div>
            </div>)}
        </div>
    )
};

export default CardProduct;