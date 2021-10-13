import React, { useState } from 'react';
import logo from '../image.png';
import '../styles/Login.css'

const Login2 = () => {

    const [login, setLogin] = useState([])

    const handleSubmit = (evento) => {
        setLogin(evento.target.value)
        
      }

    return (<div className="container">
        <img src={logo} class="img-fluid w-25 p-2" alt="kickstart"/>
        <div className="abs-center">
        <h1>Felicitaciones! Tu Login fue exitoso</h1>
        <form>
            <div className="mb-3 w-100">
                <label for="rut" class="form-label">RUT</label>
                <input type="rut" class="form-control" id="rut" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3 w-100">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check w-100">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className ="form-check-label" for="exampleCheck1">Mantener sesión</label>
            </div>
            <div id="emailHelp" className ="form-text">Nunca compartiremos tus datos con nadie.</div><br></br>
            <button type="submit" className="btn btn-primary" onClick={() => { handleSubmit() }}>Entrar</button>
        </form>
        </div>
        </div>)
}
export default Login2