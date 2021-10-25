import React from 'react';

const Categories = () => {
    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-12">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Artesanías</h5>
                                    <a href="/tiendas_artesania" className="btn btn-primary">Ver tiendas</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Belleza</h5>
                                    <a href="/tiendas_belleza" class="btn btn-primary">Ver tiendas</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Joyería</h5>
                                    <a href="/tiendas_joyeria" className="btn btn-primary">Ver tiendas</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Música</h5>
                                    <a href="/tiendas_musica" class="btn btn-primary">Ver tiendas</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Papelería</h5>
                                    <a href="/tiendas_papeleria" className="btn btn-primary">Ver tiendas</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Vestuario y Calzado</h5>
                                    <a href="/tiendas_vestuarioycalzado" class="btn btn-primary">Ver tiendas</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Otras Categorías</h5>
                                <a href="/otras_categorias" class="btn btn-primary">Ver tiendas</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Categories;