import React, { Component } from "react";
import Footer from './Footer';
import MapContainer from './Map'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Logo from './Logo'
import "./App.css";
import Axios from "axios";

class Home extends Component{
    constructor(props) {
        super(props);
    }

    logout = () => {
      Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:4000/api/user/logout",
    }).then((res) => {
        if(res.data.msg === "User logged-out"){
            window.location = '/login';
        }
        else{ 
            window.location = '/game';
        }
    });
    }

      render() {
          return(
              <>
              <Logo/>
              <button onClick={this.logout}>Logout</button>
              <div className="home-content">
              <Grid container alignItems="center" justify="center" spacing={0} direction="column">
              <Grid item xl></Grid>
              <Grid item xl={8}>
                <h1 style={{marginTop: '5%'}}><strong>FULFILL YOUR DESIRE</strong></h1>
                  <Grid>
                    <form style={{justifyContent: 'center', textAlign: 'center'}}> 
                      <input type="text" style={{backgroundColor:'white', width: '40%', height: '34px', marginTop: '3%'}} placeholder="Enter restaurant..." />
                      <Button variant="contained" color="primary" style={{width:'10%', height:'40px', marginLeft: '0.8%'}}><b>Search</b></Button>
                    </form>
                  </Grid>
              </Grid>
            </Grid>
            </div>
          <MapContainer/>
              <Grid style={{backgroundImage: `url('./../Images/background3\ copy.jpg')`, paddingTop:'0.3%'}}>
              <h1 style={{justifyContent: 'center', textAlign: 'center'}}>LET THE FUN BEGIN</h1>
              </Grid>
          <Footer/>
          </>
          )
    }
}

export default Home;