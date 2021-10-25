import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "../views/Login";
import Home from "../views/Home";
import Login2 from "../views/Login2";
import FormSeller from "../views/FormSeller";
import FormBuyer from "../views/FormBuyer";
import Categories from "../views/Categories";
import Post from "../views/Post";
import Artesanias from "../views/Artesanias";
import Belleza from "../views/Belleza";
import Joyeria from "../views/Joyeria";
import Musica from "../views/Musica";
import Papeleria from "../views/Papeleria";
import Vestuario from "../views/Vestuario";
import Otros from "../views/Otros";

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
                <Route exact path="/registrotienda">
                    <FormSeller/>
                </Route>
                <Route exact path="/registrocomprador">
                    <FormBuyer/>
                </Route>
                <Route exact path="/categorias">
                    <Categories/>
                </Route>
                <Route exact path="/post">
                    <Post />
                </Route>
                <Route exact path="/tiendas_artesania">
                    <Artesanias/>
                </Route>
                <Route exact path="/tiendas_belleza">
                    <Belleza/>
                </Route>
                <Route exact path="/tiendas_joyeria">
                    <Joyeria/>
                </Route>
                <Route exact path="/tiendas_musica">
                    <Musica/>
                </Route>
                <Route exact path="/tiendas_papeleria">
                    <Papeleria/>
                </Route>
                <Route exact path="/tiendas_vestuarioycalzado">
                    <Vestuario/>
                </Route>
                <Route exact path="/otras_categorias">
                    <Otros/>
                </Route>
                <Route render={() => <h1>No encontrado</h1>}></Route>
            </Switch>
        </div>
    </Router>
};

export default Layout;