import React, { useContext, useEffect} from "react"
import { Context } from '../store/appContext';
import logo from '../image2.png';
import '../styles/Post.css'
import { useHistory, Link } from 'react-router-dom';

const Post = () => {

const {store, actions} = useContext(Context)
const history = useHistory();


return(<div className="container" >
        <img src={logo} className="img-fluid w-75 m-4" alt="kickstart"/><br></br><br></br>
        <Link to="/login" className="btn btn-primary" onClick={localStorage.clear()}>Cerrar sesion</Link>
<form onSubmit={(evento) => actions.handlePostSubmit(evento, history)}  encType="multipart/form-data" method="POST" classname="postform">
    <div className="row">
        <div className="col-6 form-group p-4"><br></br><br></br>
            <label>Producto</label>
            <input onChange={actions.handleChangeProduct} type="text" name="item_title" placeholder="Nombre" className="form-control" required  value={store.product.item_title}/>
        </div>
        <div className="col-6 form-group p-4"><br></br><br></br>
            <label>Categoria</label>
            <select onChange={actions.handleChangeProduct} name="category_id" placeholder="Lista" class="form-select" id="inputGroupSelect01">
            <option className="text-black-50">Lista</option>
                {store.categories.map((category, index) => <option required value={category.id} key={category.id}>{category.name}</option>)}
        </select>
        </div>
        <div className="col-6 form-group p-4"><br></br>
            <label>Precio</label>
            <input onChange={actions.handleChangeProduct} type="text" name="item_price" placeholder="$" className="form-control" required  value={store.product.item_price}/>
        </div>
        <div className="col-6 form-group p-4">
            <label>Stock disponible</label>
            <input onChange={actions.handleChangeProduct} type="text" name="item_stock" placeholder="UN" className="form-control" required  value={store.product.item_stock}/>
        </div>
        <div className="col-12 form-group">
            <label>Descripcion</label>
            <textarea onChange={actions.handleChangeProduct} name="item_description" placeholder="Breve descripcion de tu producto" className="form-control" required  value={store.product.item_description}/>
        </div>
        <div className="col-sm-12 form-group p-4 ">
            
            <label className="alert alert-info" role="alert">Selecciona las fotos para tu producto. Puedes subir un maximo de 5 fotos</label>
            <input type="file" name="file" className="col-8 ps-3 pe-2 form-control-file btn btn-outline-secondary" multiple/>
            <button onClick={actions.wrapperimg} data-bs-toggle="modal" data-bs-target="#exampleModal" className="col-sm-2 btn btn-primary m-2">Subir</button>
            <button type="submit" className="col btn btn-primary m-3 p-3">Ingresar Producto</button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <h1>Archivos guardados exitosamente!</h1>
            </div>
        <div className="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
</form>
    
</div>)

}

export default Post