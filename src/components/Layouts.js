import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "../views/Login";
import Home from "../views/Home";
import Login2 from "../views/Login2";
import Post from "../views/Post";
import PrivateRoute from "./PrivateRoute";
import Deseos from "../views/Deseos";
import Tienda from "../views/Tienda";
import FormSeller from "../views/FormSeller";
import FormBuyer from "../views/FormBuyer";
import Tiendas from "../views/Tiendas";
import Categories from "../views/Categories";
import ProfileTienda from "../views/ProfileTienda";

const Layout = () => {
    return <Router>
        <div className="container">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <Login />  
                </Route>
                <Route exact path="/login2">
                    <Login2 />
                </Route>
                <Route exact path="/deseos">
                    <Deseos />
                </Route>
                <Route exact path="/tienda">
                    <Tienda />
                </Route>
                <Route exact path="/registrotienda">
                    <FormSeller />
                </Route>
                <Route exact path="/registrocomprador">
                    <FormBuyer />
                </Route>
                <Route exact path="/profiletienda">
                    <ProfileTienda />
                </Route>
                <Route exact path="/categorias">
                    <Categories />
                </Route>
                <Route exact path="/tiendas/:id">
                    <Tiendas />
                </Route>
                <PrivateRoute exact path="/post"component={()=> <Post/>}/>
                <Route render={() => <h1>No encontrado</h1>}>
                </Route>
            </Switch>
        </div>
    </Router>
}
export default Layout;