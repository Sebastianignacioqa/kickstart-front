import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Musica = () => {

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
            body: JSON.stringify({categoria: 'musica'})
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

export default Musica;