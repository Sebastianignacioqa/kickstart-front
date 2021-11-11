import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";

const NavbarFavs = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="btn btn-transparent" style={{ border: "1px" }} to="/categorias">Volver a Categorías</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <button className="btn btn-primary btnnav dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tiendas Favoritas
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {store.favoritos.map((item, index) => { 
                                return <li className="dropdown-item" key={index}>{item}<button className="btn-sm btn-primary w-2 h-2 mx-2" onClick={() => actions.deleteElement(index)}>X</button></li>})}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavbarFavs;