   
import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import Card from '../components/Card';
import logo from '../image2.png';
import '../styles/Categories.css'

const Categories = () => {
    const { store } = useContext(Context);

    return (
        <div>
            <img className="img-fluid" src={logo} alt=""/>
            <Card />
        </div>
    )
};

export default Categories;