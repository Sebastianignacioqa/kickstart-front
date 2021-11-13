import React, { useContext, useEffect } from "react"
import { Context } from '../store/appContext';
import logo from '../image2.png';
import '../styles/Post.css';
import { useHistory } from 'react-router-dom';

const Post = () => {

    const { store, actions } = useContext(Context)
    const history = useHistory();

    useEffect(() => {
        console.log(store.product)
        console.log(store.sellerID)
    }, [])

    return (
    <div className="container">
        <img src={logo} className="img-fluid w-50 m-4" alt="kickstart"/><br></br><br></br>
        <form onSubmit={(evento) => actions.handlePostSubmit(evento, history)}  encType="multipart/form-data" method="POST" classname="postform">
            <div className="row">
                <div className="col-6 form-group p-4">
                    <label>Nombre del producto</label>
                    <input onChange={actions.handleChangeProduct} type="text" name="item_title" placeholder="Producto" className="form-control" required value={store.product.item_title}/>
                </div>
                <div className="col-6 form-group p-4">
                    <label>Categoria</label>
                    <select onChange={actions.handleChangeProduct} name="category_id" placeholder="Seleccionar" class="form-select" id="inputGroupSelect01">
                    <option className="text-black-50">Seleccionar</option>
                        {store.categories.map((category, index) => <option required value={category.id} key={category.id}>{category.name}</option>)}
                    </select>
                </div>
                <div className="col-6 form-group p-4">
                    <label>Precio</label>
                    <input onChange={actions.handleChangeProduct} type="text" name="item_price" placeholder="$" className="form-control" required value={store.product.item_price}/>
                </div>
                <div className="col-6 form-group p-4">
                    <label>Stock disponible</label>
                    <input onChange={actions.handleChangeProduct} type="text" name="item_stock" placeholder="Unidades en stock" className="form-control" required value={store.product.item_stock}/>
                </div>
                <div className="col-12 form-group">
                    <label>Descripción</label>
                    <textarea onChange={actions.handleChangeProduct} name="item_description" placeholder="Breve descripcion de tu producto" className="form-control" required value={store.product.item_description}/>
                </div>
                <div className="col-sm-12 form-group p-4 ">
                    <label className="alert alert-info" role="alert">Selecciona las fotos para tu producto. Puedes subir un maximo de 5 fotos</label>
                    <input type="file" name="file" className="col-sm-9 form-control-file btn btn-outline-secondary" multiple/>
                    <button onClick={actions.handleFileSubmit} className="col-sm-2 btn btn-primary m-2">Subir</button>
                    <button type="submit" className="col btn btn-primary m-3 p-4">Ingresar Producto</button>
                </div>
            </div>
        </form>
    </div>
    )
}

export default Post;