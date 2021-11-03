import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const NavbarTiendas = () => {

    const { store, actions } = useContext(Context);

    return (<nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                </ul>
                <div className="d-flex">
                    <div className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle btn bg-warning bg-opacity-75 text-dark rounded" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favoritos</Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {store.favorites.map((item, index) => { 
                                return <li className="dropdown-item" key={index}>{item}<button className="btn btn-danger w-25 h-25 ps-2 ms-3" onClick={() => actions.deleteElement(index)}>Borrar</button></li>})}
                        </ul>
                    </div>
               </div>
        </div>
        </div>
    </nav>)

};

export default NavbarTiendas;