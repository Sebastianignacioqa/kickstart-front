import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "../views/Login";
import Home from "../views/Home";
import Login2 from "../views/Login2";
import Post from "../views/Post";
import Profile from "../views/Profile";
import PrivateRoute from "./PrivateRoute";

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
                <Route exact path="/post">
                    <Post />
                </Route>
                <PrivateRoute exact path="/profile"component={()=> <Profile/>}/>
                <Route render={() => <h1>No encontrado</h1>}>

                </Route>
            </Switch>
        </div>
    </Router>
}
export default Layout;