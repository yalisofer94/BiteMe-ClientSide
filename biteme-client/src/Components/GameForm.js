import React, { Component } from "react";
import Footer from './Footer';
import MapContainer from './Map'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Logo from './Logo'
import "./App.css";

class GameForm extends Component{
    constructor(props) {
        super(props);
    }
        render() {
            return(
                <div>
                <Logo />
                    <div className="home-content">
                        <Grid container alignItems="center" justify="center" spacing={0} direction="column">
                            <h1>Add New Game</h1>
                            <form>
                                <div>
                                    <label htmlFor="userLoginEmail">Question 1: </label>
                                    <input type="email" className="forms" id="userLoginEmail" placeholder="Email" onChange={(e) => this.setState({userLoginEmail: e.target.value})} />
                                </div>
                                <div>
                                    <label htmlFor="userLoginPassword">Password</label>
                                    <input type="password" className="forms" id="userLoginPassword" placeholder="Password" onChange={(e) => this.setState({userLoginPassword: e.target.value})} />
                                </div>
                                <button type="submit" className="btn" onClick={this.handleLoginNowBtn}><b>Login Now</b></button>
                            </form>
                            <p>Don't have an account yet? <span className="cursor-pointer text-warning" onClick={this.handleForms}>Create an Account</span></p>
                        </Grid>
                    </div>
                <Footer />
            </div>  
            )
    }
}

export default GameForm;