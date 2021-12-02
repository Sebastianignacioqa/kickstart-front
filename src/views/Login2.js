import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import logo from '../image.png';
import '../styles/Login.css'
import { useHistory, Link } from 'react-router-dom';

const Login2 = () => {

const {store, actions} = useContext(Context)
const history = useHistory();

return (<div className="container">
    <Link to="/"><img src={logo} className="img-fluid w-75 p-2" alt="kickstart" /></Link>
    <div className="abs-center">
        <form onSubmit={(evento) => actions.handleSubmitLogin2(evento, history)} className="needs-validation" noValidate>
            <div className="mb-3 w-100">
                <label className="form-label">RUT</label>
                <input name="rut" type="text" className="form-control" id="rut" aria-describedby="emailHelp" required onChange={actions.handleChangeLogin} value={store.login.rut} />
            </div>
            <div className="mb-3 w-100">
            <label className="form-label">Password</label>
            <input name="password" type ="password" className="form-control" id="exampleInputPassword1" required onChange={actions.handleChangeLogin} value={store.login.password} />
            </div>
            <div className="mb-3 form-check w-100">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" value=""/>
                    <label className ="form-check-label" name="exampleCheck1">Mantener sesión</label>
            </div> 
            <div  id="emailHelp" className ="form-text">Nunca compartiremos tus datos con nadie.</div><br></br>
             <button type="submit" className="btn btn-primary">Entrar</button>
        </form>
        </div>
        </div>)
}
export default Login2;