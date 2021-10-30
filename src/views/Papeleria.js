import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';

const Papeleria = () => {
    const {store, actions} = useContext(Context);

    useEffect (() => {
        actions.showPapeleria();
    }, []);

    return (
        <>
            {store.tiendas && store.tiendas.map((tiendaspapel, index) => <p key={index}>{tiendaspapel}</p>)}
        </>
    );
};

export default Papeleria;