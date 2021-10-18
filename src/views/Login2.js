import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import logo from '../image.png';
import '../styles/Login.css'

const Login2 = () => {

const {store, actions} = useContext(Context)

return (<div className="container">
    <img src={logo} className="img-fluid w-25 p-2" alt="kickstart" />
    <div className="abs-center">
        <form onSubmit={actions.handleSubmit}>
            <div className="mb-3 w-100">
                <label className="form-label">RUT</label>
                <input name="rut" type="rut" className="form-control" id="rut" aria-describedby="emailHelp" required onChange={actions.handleChange} value={store.login.rut} />
            </div>
            <div className="mb-3 w-100">
            <label className="form-label">Password</label>
            <input name="password" type ="password" className="form-control" id="exampleInputPassword1" required onChange={actions.handleChange} value={store.login.password} />
            </div>
            <div className="mb-3 form-check w-100">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" value=""/>
                    <label className ="form-check-label" name="exampleCheck1">Mantener sesión</label>
            </div> 
            <div  id="emailHelp" className ="form-text">Nunca compartiremos tus datos con nadie.</div><br></br>
             <button type="submit" className="btn btn-primary" onClick={actions.getLogin2}>Entrar</button>
        </form>
        </div>
        </div>)
}
export default Login2