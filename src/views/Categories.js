import React from 'react';

const Categories = () => {
    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-12">
                    <a className="btn btn-primary" href="/tiendas_artesania">Artesanías</a>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12">
                    <a className="btn btn-primary" href="/tiendas_belleza">Belleza</a>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12">
                    <a className="btn btn-primary" href="/tiendas_joyeria">Joyería</a>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12">
                    <a className="btn btn-primary" href="/tiendas_musica">Música</a>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12">
                    <a className="btn btn-primary" href="/tiendas_papeleria">Papelería</a>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12">
                    <a className="btn btn-primary" href="/tiendas_vestuarioycalzado">Vestuario y Calzado</a>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12">
                    <a className="btn btn-primary" href="/otras_categorias">Otros</a>
                </div>
            </div>   
        </div>
    )
};

export default Categories;