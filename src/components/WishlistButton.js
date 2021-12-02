import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import '../styles/WishlistButton.css'
import { Link } from "react-router-dom";

const WishlistButton = () => {

    const { store, actions } = useContext(Context)
    {console.log(store.wishlist)}
    const total = store.wishlist.reduce((sum, value) => (typeof value.item_price == "number" ? sum + value.item_price : sum), 0);
    console.log(total);

    const formatter = new Intl.NumberFormat("ES-CL", {
        style: 'currency',
        currency: 'CLP'
    });


    return (
        <div>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Ver Carrito de Compras <span className="badge bg-danger">{store.wishlist.length > 0 && (store.wishlist.length)}</span></button>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">¡Lo quiero!</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
                </div>
                <div className="offcanvas-body">
                    {store.wishlist.length === 0 ? (<h6>Tu carrito de compras está vacío.</h6>) : (
                    <div className="container wishtable">
                        <div className="row">
                            <div className="col-7 col-sm-7"><strong>Producto</strong></div>
                            <div className="col-5 col-sm-5"><strong>Precio</strong></div>
                        </div>
                        <div className="row">
                            <div className="col-7 col-sm-7">
                                {store.wishlist.map((wish, index) => {
                                    return <div className="dropdown-item my-4" key={index}>{wish.item_title}</div>})}
                            </div>
                            <div className="col-5 col-sm-5 mt-3">
                                {store.wishlist.map((wish, index) => { 
                                    return <div className="dropdown-item my-1" key={index}> ${`${wish.item_price}`}<button className="btn-sm btndel btn-primary mx-3" onClick={() => actions.deleteProduct(index)}>X</button></div>})}
                            </div>
                        </div>
                        <div className="row">
                            <h5>Total: {formatter.format(`${total}`)}  </h5>
                            <p></p>
                            <Link to="/deseos" className="btn btn-primary">Continuar con la compra</Link>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
};

export default WishlistButton;