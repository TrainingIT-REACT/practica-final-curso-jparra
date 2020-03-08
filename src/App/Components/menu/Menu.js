import React from "react";
import {  Route, NavLink } from "react-router-dom";
import Albums from "../album/Albums";
import AlbumDetails from "../album/AlbumDetails";
import Home from "../Home";
import Admin from "../login/Admin";
import PrivateRoute from "./PrivateRoute";
import Login from "../login/Login";


const AppMenu = () => {
    return (
        
            <div className="App">
                <nav>
                    <ul>
                        <li><NavLink activeClassName="active" to="/">Inicio</NavLink></li>
                        <li><NavLink activeClassName="active" to="/albums">Albums</NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin">Área privada</NavLink></li>
                    </ul>
                </nav>
                <Route path="/" exact component={Home}/>
                <Route path="/albums" exact component={Albums}/>
                <Route path="/album/:id" component={AlbumDetails}/>
                <Route path="/login" exact component={Login}/>
                <PrivateRoute path="/admin" exact component={Admin}/>
            </div>
        
)};

export default AppMenu;