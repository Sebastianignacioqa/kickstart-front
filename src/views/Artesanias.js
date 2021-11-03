import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";

const Artesanias = () => {
    const {store, actions} = useContext(Context);

    useEffect (() => {
        actions.showArtesania();
    }, []);

    return (
        <>
            {store.tiendas && store.tiendas.map((nombretienda, index) => <div className="card mx-auto mb-2" style={{ width: "17rem" }} key={index}>
                <div className="card-body">
                    <h5 className="card-title">{nombretienda}</h5>
                    {console.log(nombretienda)}
                    <div>
                        <a href="#" className="btn btn-primary mt-2">Ver tienda</a>
                    </div>
                </div>
            </div>)}
        </>
    );
};

export default Artesanias;