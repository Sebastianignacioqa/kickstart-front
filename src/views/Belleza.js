import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Belleza = () => {

    const [tienda, setTienda] = useState([]);

    useEffect(() => {
        sendCategoria()
    }, []);

    const sendCategoria = () => {
        fetch('http://localhost:8080/categorias', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({categoria: 'belleza'})
        }).then ((res) => res.json())
        .then ((data) => {
            setTienda(data)
            console.log(data);
        })
        .catch (error => console.log(error))
    };

    return (
        <div>
            {tienda.map((tiendas, i) => <Card data={tiendas}/>)}
        </div>
    )
};

export default Belleza;