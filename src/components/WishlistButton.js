import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const WishlistButton = () => {

    const { store, actions } = useContext(Context)
    {console.log(store.wishlist)}

    return (
        <div>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Ver Carrito de Compras</button>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Carrito de compras</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
                </div>
                <div className="offcanvas-body">
                    {<ul>
                        {store.wishlist.map((wish, index) => { 
                            return <li className="dropdown-item" key={index}>{wish.id} {wish.item_title} ${`${wish.item_price}`}<button className="btn-sm btndel btn-primary w-2 h-2 mx-2" onClick={() => actions.deleteProduct(index)}>X</button></li>})}
                    </ul>}
                </div>
            </div>
        </div>
    )
};

export default WishlistButton;