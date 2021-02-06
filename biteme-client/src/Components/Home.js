import React, { Component } from "react";
import Footer from './Footer';
import MapContainer from './Map';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Logo from './Logo';
import ButtonAppBar from './Navbar';
import "./App.css";
import Axios from "axios";

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          inputField : ""
        }
        this.logout = this.logout.bind(this);
        this.sendRest = this.sendRest.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.pushMapData = this.pushMapData.bind(this);
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

    handleChange(event) {
      this.setState({inputField: event.target.value});
      console.log(this.state.inputField);
    }

    sendRest = (e) => {
      Axios({
        method: "GET",
        withCredentials: false,
        url: `https://bite-me-app1.herokuapp.com/api/restaurantAPI?restName=${this.state.inputField}`,
    }).then((res) => {
        if(res.status === 200){
            console.log(res.data);
            this.pushMapData(res.data);
        }
        else{ 
            window.location = '/game';
        }
    });}

    pushMapData(restaurants) {
      Axios({
        method: "POST",
        data : {
          name: restaurants.candidates[0].name,
          address: restaurants.candidates[0].formatted_address,
          price: restaurants.candidates[0].price_level,
          rate: restaurants.candidates[0].rating,
          open: restaurants.candidates[0].opening_hours.open_now
        },
        withCredentials: false,
        url: `https://bite-me-app1.herokuapp.com/api/restaurant`,
      }).then((res) => {
          if(res.status === 200) {
            console.log(restaurants);
            window.location = '/home';
          }
      });
    };
  


      render() {
          return(
              <>
              <ButtonAppBar/>
              <Logo/>
              <button onClick={this.logout}>Logout</button>
              <div className="home-content">
              <Grid container alignItems="center" justify="center" spacing={0} direction="column">
              <Grid item xl></Grid>
              <Grid item xl={8}>
                <h1 style={{marginTop: '5%'}}><strong>FULFILL YOUR DESIRE</strong></h1>
                  <Grid>
                    <form style={{justifyContent: 'center', textAlign: 'center'}}> 
                      <input type="text" style={{backgroundColor:'white', width: '40%', height: '34px', marginTop: '3%'}} onChange={this.handleChange}  placeholder="Enter restaurant..." />
                      <Button variant="contained" onClick={this.sendRest} color="primary" style={{width:'10%', height:'40px', marginLeft: '0.8%'}}><b>Search</b></Button>
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