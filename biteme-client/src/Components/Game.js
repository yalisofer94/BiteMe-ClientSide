import React, { Component } from "react";
import Footer from './Footer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Logo from './Logo'
import "./App.css";

class Game extends Component{
    constructor(props) {
        super(props);
    }

        render() {
            return(
                <>
                <Logo />
                    <div className="home-content" >
                        <Grid container alignItems="center" justify="center" spacing={0} direction="column">
                            <h1>Show Us What You Got</h1>
                            <form>
                                <Button variant="contained" color="primary" style={{width:'10%', height:'40px', marginBottom: '10%', marginTop: '5%'}}><b>NEXT</b></Button>
                            </form>
                        </Grid>
                <Footer />
            </div>
            </>  
        )
    }
}

export default Game;