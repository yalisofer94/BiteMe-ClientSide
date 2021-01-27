import React from 'react';
import {Route} from 'react-router-dom';
import Login from './../Components/LogIn';
import Home from './../Components/Home';
import GameForm from './../Components/GameForm';

const ReactRouter = () => {
    return(
        <>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/addGame' component={GameForm}/>
        </>
    )
}

export default ReactRouter;