import React from 'react';
import {Route} from 'react-router-dom';
import Login from './../Components/LogIn';
import Home from './../Components/Home';
import GameForm from './../Components/GameForm';
import Game from './../Components/Game';
import Register from './../Components/Register';
import GameForm4 from './../Components/GameForm4';
const ReactRouter = () => {
    return(
        <>
            <Route exact path='/' component={Login}/>
            <Route path='/home' component={Home}/>
            <Route path='/register' component={Register}/>
            <Route path='/addGame' component={GameForm4}/>
            <Route path='/game' component={Game}/>
        </>
    )
}

export default ReactRouter;