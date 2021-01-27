import React, { Component } from "react";
import Footer from './Footer';
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
                <>
                <Logo />
                    <div className="home-content" >
                        <Grid container alignItems="center" justify="center" spacing={0} direction="column">
                            <h1>Add New Game</h1>
                            <form>
                                    <label>Question 1: </label>
                                    <input type="text" style={{backgroundColor:'white', width: '80%', height: '25px', marginTop: '3%'}} placeholder="Highest building in the world.."/>
                                <div style={{marginTop: '3%'}}>
                                    <label>Answer 1: </label>
                                    <input style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer 2: </label>
                                    <input style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer 3: </label>
                                    <input style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer 4: </label>
                                    <input style={{height: '25px'}} placeholder="text"/>
                                </div>
                                <div>
                                    <label>Question 2: </label>
                                    <input type="text" style={{backgroundColor:'white', width: '80%', height: '25px', marginTop: '3%'}} placeholder="Highest building in the world.."/>
                                </div>
                                <div style={{marginTop: '3%'}}>
                                    <label>Answer 1: </label>
                                    <input style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer 2: </label>
                                    <input style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer 3: </label>
                                    <input style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer 4: </label>
                                    <input style={{height: '25px'}} placeholder="text"/>
                                </div>
                                <div>
                                    <label>Question 3: </label>
                                    <input type="text" style={{backgroundColor:'white', width: '80%', height: '25px', marginTop: '3%'}} placeholder="Highest building in the world.."/>
                                </div>
                                <div style={{marginTop: '3%'}}>
                                    <label>Answer 1: </label>
                                    <input style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer 2: </label>
                                    <input style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer 3: </label>
                                    <input style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer 4: </label>
                                    <input style={{height: '25px'}} placeholder="text"/>
                                </div>
                                <div>
                                    <label>Question 4: </label>
                                    <input type="text" style={{backgroundColor:'white', width: '80%', height: '25px', marginTop: '3%'}} placeholder="Highest building in the world.."/>
                                </div>
                                <div style={{marginTop: '3%'}}>
                                    <label>Answer 1: </label>
                                    <input style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer 2: </label>
                                    <input style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer 3: </label>
                                    <input style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer 4: </label>
                                    <input style={{height: '25px'}} placeholder="text"/>
                                </div>
                                <div>
                                    <label>Question 5: </label>
                                    <input type="text" style={{backgroundColor:'white', width: '80%', height: '25px', marginTop: '3%'}} placeholder="Highest building in the world.."/>
                                </div>
                                <div style={{marginTop: '3%'}}>
                                    <label>Answer 1: </label>
                                    <input style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer 2: </label>
                                    <input style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer 3: </label>
                                    <input style={{height: '25px'}} placeholder="text"/>
                                    <label>Answer 4: </label>
                                    <input style={{height: '25px'}} placeholder="text"/>
                                </div>
                                <Button variant="contained" color="primary" style={{width:'10%', height:'40px', marginBottom: '10%', marginTop: '5%'}}><b>CREATE</b></Button>
                            </form>
                        </Grid>
                <Footer />
            </div>
            </>  
            )
    }
}

export default GameForm;