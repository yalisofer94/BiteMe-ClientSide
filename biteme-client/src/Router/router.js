import React from 'react';
import {Route} from 'react-router-dom';
import Login from './../Components/LogIn';
import Home from './../Components/Home';
const ReactRouter = () => {
    return(
        <>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
        </>
    )
}

export default ReactRouter;