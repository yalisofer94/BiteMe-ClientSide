import React, { Component } from "react";
import Footer from './Footer';
import MapContainer from './Map'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Logo from './Logo'
import "./App.css";

class Home extends Component{
    constructor(props) {
        super(props);
    }
 
        render() {
            return(
                <>
                <Logo/>
                <div className="home-content1">
                <Grid container >
                <Grid item xl></Grid>
                <Grid item xl={8} id="hm-cont1-main">
                  <h1><strong>FULFILL YOUR DESIRE</strong></h1>
                    <Grid container id="search-input">
                      <form> 
                        <input type="text" style={{display:'block', backgroundColor:'white', width: '450px', height:'55px'}} placeholder="Enter restaurant..." />
                        <Button variant="contained" color="primary" style={{display:'block',width:'150px', height:'60px', marginLeft:'145px', marginTop:'3%'}} onClick={this.handleSearchBar}><b>Search</b></Button>
                      </form>
                    </Grid>
                </Grid>
                <Grid item xl></Grid>
              </Grid>
              </div>
            <MapContainer/>
                <Grid container style={{backgroundImage: `url('./../Images/background3\ copy.jpg')`, paddingTop:'15px', paddingLeft:'35%'}}>
                <h1>LET THE FUN BEGIN</h1>
                </Grid>
            <Footer/>
            </>
            )
    }
}

export default Home;