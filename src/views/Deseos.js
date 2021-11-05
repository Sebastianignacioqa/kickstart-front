import React, { useContext } from 'react';
import logo from '../image.png';
import '../styles/Deseos.css'

const Deseos = () => {

    

    return (<div className="containter carrito">
        <img src={logo} className="img-fluid w-50 p-2" alt="kickstart" />
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <img src={logo} className="imagen" alt="kickstart" />  
                    <td className= "tableproduct">Ejemplo articulo 1</td>
                    <td className = "tableprice"><p>$5000</p></td>
                    <td classname><input className="amount" type="number" min="1" value="1"/>
                    <button className="delete btn btn-danger">x</button>
                    </td>
                </tr>
                <tr>
                <th scope="row">1</th>
                    <td className= "tableproduct">Ejemplo icono Kickstart</td>
                    <img src={logo} className="imagen" alt="kickstart" />   
                    <td className = "tableprice"><p>$5000</p></td>
                    <td classname><input className="amount" type="number" min="1" value="1"/>
                    <button className="delete btn btn-danger">x</button>
                    </td>
                </tr>
                <tr>
                <th scope="row">1</th>
                    <td className= "tableproduct">Ejemplo icono Kickstart</td>
                    <img src={logo} className="imagen" alt="kickstart" />   
                    <td className = "tableprice"><p>$5000</p></td>
                    <td classname><input className="amount" type="number" min="1" value="1"/>
                    <button className="delete btn btn-danger">x</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <br></br><br></br>
        <div className="row mx-4">
            <div className="col">
                <h3 className="carttotal">Total: $15000 </h3>
            </div>
            <div className="col d-flex justify content-end"></div>
            <button className="btn btn-primary">Ir a pagar</button>
        </div>
        <footer className="bg-primary mt-5"><p className="text-center m-0"></p>© 2021 Copyright: Kickstart</footer>
    </div>)

}

export default Deseos