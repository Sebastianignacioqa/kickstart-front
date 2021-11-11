import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Card = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            {store.categories.map((category, index) => <div className="card mx-auto mb-2" style={{ width: "17rem" }} key={index}>
                <div className="card-body">
                    <h5 className="card-title">{category.name}</h5>
                    {console.log(category.name)}
                    <div>
                        <Link to={`/tiendas/${category.id}`} className="btn btn-primary mt-2">Ver tiendas</Link>
                    </div>
                </div>
            </div>)}
        </>
    )
};

export default Card;