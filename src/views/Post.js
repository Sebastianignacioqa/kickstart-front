import React, { useContext } from "react"
import { Context } from '../store/appContext';
import logo from '../image2.png';
import '../styles/Post.css'

const Post = () => {

    const {store, actions} = useContext(Context)

return(<div className="container" >
        <img src={logo} className="img-fluid w-50 m-4" alt="kickstart"/><br></br><br></br>
<form onSubmit={actions.handlePostSubmit} encType="multipart/form-data" method="POST" classname="postform">
    <div className="row">
        <div className="col-6 form-group p-4">
            <label>Nombre del producto</label>
            <input type="text" name="item_title" placeholder="Producto" className="form-control" required onChange={actions.handleChangeProduct} value={store.product.item_title}/>
        </div>
        <div className="col-6 form-group p-4">
            <label>Categoria</label>
            <input type="text" name="category" placeholder="Categoria" className="form-control" required onChange={actions.handleChangeProduct} value={store.product.category}/>
        </div>
        <div className="col-6 form-group p-4">
            <label>Precio</label>
            <input type="text" name="item_price" placeholder="$" className="form-control" required onChange={actions.handleChangeProduct} value={store.product.item_price}/>
        </div>
        <div className="col-6 form-group p-4">
            <label>Stock disponible</label>
            <input type="text" name="item_stock" placeholder="Unidades en stock" className="form-control" required onChange={actions.handleChangeProduct} value={store.product.item_stock}/>
        </div>
        <div className="col-12 form-group">
            <label>Descripcion</label>
            <textarea name="item_description" placeholder="Breve descripcion de tu producto" className="form-control" required onChange={actions.handleChangeProduct} value={store.product.item_description}/>
        </div>
        <div className="col-sm-12 form-group p-4 ">
            <label className="alert alert-info" role="alert">Selecciona las fotos para tu producto. Puedes subir un maximo de 5 fotos</label>
            <input type="file" name="file" className="col-sm-9 form-control-file btn btn-outline-secondary" multiple/>
            <button className="col-sm-2 btn btn-primary m-2" onClick={actions.getProduct}>Subir</button>
        </div>
    </div>
</form></div>)

}

export default Post