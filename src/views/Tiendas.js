import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link, useParams } from "react-router-dom";
import '../styles/Tiendas.css'
import NavbarFavs from '../components/NavbarFavs'

const Tiendas = () => {
    const {store, actions} = useContext(Context);
    const {id} = useParams()
    useEffect(() => {
        actions.showTienda(id)
    }, [])

    return (
        <>
            <NavbarFavs/> <br></br>
            <Link to="/login2" className="btn btn-primary" onClick={localStorage.clear()}>Cerrar sesion</Link><br></br><br></br>
            {store.tiendas && store.tiendas.map((nombretienda, index) => <div className="card mx-auto mb-2" style={{ width: "16rem" }} key={index}>
                <div className="card-body">
                    <h5 className="card-title">{nombretienda}</h5>
                    <div>
                        <Link to="/categorias" className="btn btn-primary mt-1 mx-1">Ver tienda</Link>
                        <button className="btn btn-primary mt-4 mx-1 btnfav" onClick={() => actions.addFav(nombretienda)}>Fav ♥</button>
                    </div>
                </div>
            </div>)}
        </>
    );
};

export default Tiendas;