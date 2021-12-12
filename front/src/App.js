import {Route, Routes} from "react-router-dom";
import Main from "./components/Main/Main";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import NewEvent from "./containers/NewEvent/NewEvent";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import React from "react";
import './App.css'

const App = () => {
    return (
        <div>
            <Toolbar/>
            <div className="container">
                <div className="container-inner">
                    <Routes>
                        <Route path="/" exact element={<Main/>}/>
                        <Route path="/events" exact element={<Main/>}/>
                        <Route path="/register" exact element={<Register/>}/>
                        <Route path="/login" exact element={<Login/>}/>
                        <Route path="/newEvent" exact element={<NewEvent/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
};

export default App;