import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Card = () => {
    const { store, actions } = useContext(Context);

    const redirectPage = () => {
        if(store.categories === "Artesanía"){
            return "/tiendas_artesania"
        }
        if(store.categories === "Belleza"){
            return "/tiendas_belleza"
        }
        if(store.categories === "Joyería"){
            return "/tiendas_joyeria"
        }
        if(store.categories === "Música"){
            return "/tiendas_musica"
        }
        if(store.categories === "Papelería"){
            return "/tiendas_papeleria"
        }
        if(store.categories === "Vestuario y Calzado"){
            return "/tiendas_vestuarioycalzado"
        }
        if(store.categories === "Otros"){
            return "/otras_categorias"
        }
        else {
            return "/error"
        }
    }

    return (
        <>
            {store.categories.map((category, index) => <div className="card mx-auto mb-2" style={{ width: "17rem" }} key={index}>
                <div className="card-body">
                    <h5 className="card-title">{category.name}</h5>
                    {console.log(category.name)}
                    <div>
                        <a href={redirectPage(actions.getCategories())} className="btn btn-primary mt-2">Ver tiendas</a>
                    </div>
                </div>
            </div>)}
        </>
    )
};

export default Card;