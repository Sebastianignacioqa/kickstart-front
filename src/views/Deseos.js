import React, { useContext, useEffect } from 'react';
import logo from '../image.png';
import '../styles/Deseos.css'
import { Context } from '../store/appContext'
import { Link, useParams } from "react-router-dom";


const Deseos = () => {

    const {store, actions} = useContext(Context);
    
    useEffect(() => {
        console.log(store.productos)
        console.log(store.categories)
    }, [])

    return (<div className="container carrito">
        <img src={logo} className="img-fluid w-50 p-2" alt="kickstart" />
        <h1>{store.tienda}</h1>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col-3">#</th>
                    <th scope="col-3">Producto</th>
                    <th scope="col-3">Precio</th>
                    <th scope="col-3">Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" className="pt-3">{store.wishlist.map((product, index) => <option required value={product.id} key={product.id}>{product.id}</option>)}</th>
                    <td className= "tableproduct"><p>{store.wishlist.map((product, index) => <option required value={product.id} key={product.id}>{product.item_title}</option>)}</p></td>
                    <td className = "tableprice pt-3"><p>{store.wishlist.map((product, index) => <option required value={product.id} key={product.id}>${product.item_price}</option>)}</p></td>
                    <td className="pt-3">{store.wishlist.map((product, index) => <option required value={product.id} key={product.id}>1</option>)}</td>
                    <button className="delete btn btn-danger mt-3 ms-6 px-1">x</button>
                </tr>
            </tbody>
        </table>
        <br></br><br></br>
        <div className="row mx-4">
            <div className="col">
                <h3 className="carttotal">Total: $</h3>
            </div>
            <div className="col d-flex justify content-end"></div>
            <button className="btn btn-primary">Ir a pagar</button>
        </div>
        <footer className="bg-primary mt-5"><p className="text-center m-0"></p>© 2021 Copyright: Kickstart</footer>
    </div>)

}

export default Deseos;