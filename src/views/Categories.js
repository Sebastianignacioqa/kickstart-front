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
       /*  <div className="container">
            <div className="row">
                <div className="col-4 col-md-4"></div>
                <div className="col-4 col-md-4"> */
                    
         /*        </div>
                <div className="col-4 col-md-4"></div>
            </div>
        </div> */
    )
};

export default Categories;