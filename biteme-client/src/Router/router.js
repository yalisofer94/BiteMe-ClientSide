import React from 'react';
import {Route} from 'react-router-dom';
import LogIn from '../Components/LogIn';
import Footer from '../Components/Footer';
const ReactRouter = () => {
    return(
        <>
            <Route exact path='/' component={Footer}/>
        </>
    )
}

export default ReactRouter;