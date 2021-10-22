import React, { useContext } from "react"
import { Context } from '../store/appContext';
import logo from '../image2.png';

const Post = () => {

    const {actions} = useContext(Context)

return(<div className="container" >
        <img src={logo} className="img-fluid w-50 m-4" alt="kickstart"/><br></br><br></br>
<form onSubmit={actions.handlePostSubmit} encType="multipart/form-data" method="POST">
    <div className="row">
        <div className="col-6 form-group p-4">
            <label>Nombre del producto</label>
            <input type="text" name="producto" placeholder="Producto" className="form-control"/>
        </div>
        <div className="col-6 form-group p-4">
            <label>Categoria</label>
            <input type="text" name="categoria" placeholder="Categoria" className="form-control"/>
        </div>
        <div className="col-6 form-group p-4">
            <label>Precio</label>
            <input type="text" name="Precio" placeholder="$" className="form-control"/>
        </div>
        <div className="col-6 form-group p-4">
            <label>Stock disponible</label>
            <input type="text" name="precio" placeholder="Unidades en stock" className="form-control"/>
        </div>
        <div className="col-12 form-group">
            <label>Descripcion</label>
            <textarea name="descripcion" placeholder="Breve descripcion de tu producto" className="form-control"/>
        </div>
        <div className="col-sm-12 form-group p-4">
            <label className="alert alert-info" role="alert">Selecciona la foto para tu producto</label><br></br><br></br>
            <input type="file" name="document" className="form-control-file"/>
        </div>
        <div className="col-12 form-group">
            <button className="btn btn-primary">Subir</button>
        </div>
    </div>
</form></div>)

}

export default Post