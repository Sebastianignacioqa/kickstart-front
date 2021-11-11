import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import CardArticulo from '../components/CardArticulo';

import logo from '../image2.png';

const ProfileTienda = () => {
    const { store, actions } = useContext(Context);

   
    return (
        <div>
            <img className="img-fluid mb-3" src={logo} alt=""/>
            <h2>{"{storename}"}</h2>
            <CardArticulo/>
            <CardArticulo/>
            <CardArticulo/>
            <CardArticulo/>
        </div>
    )
};

export default ProfileTienda;