import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import KSlogo from './logo/kickstartlogon.png'
import Formulario from './Formulario';

ReactDOM.render(
	<React.StrictMode>
	    
        <div className= "container">
            <div className="row">
                
                <div className="col-md-auto">
                    
                    <img  src={KSlogo} className="img-thumbnail mx-auto d-block" alt="" />

                    <Formulario />
                </div>

                


            </div>
        </div>       
	</React.StrictMode>,
	document.getElementById('root')
);