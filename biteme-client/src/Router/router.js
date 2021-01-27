import React from 'react';
import {Route} from 'react-router-dom';
import Login from './../Components/LogIn';
import Home from './../Components/Home';
import GameForm from './../Components/GameForm';
import Game from './../Components/Game';

const ReactRouter = () => {
    return(
        <>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/addGame' component={GameForm}/>
            <Route path='/game' component={Game}/>
        </>
    )
}

export default ReactRouter;