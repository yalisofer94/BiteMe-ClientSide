import React, { Component } from "react";
import Footer from './Footer';
import MapContainer from './Map';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Logo from './Logo';
import ButtonAppBar from './Navbar';
import "./App.css";
import Axios from "axios";
import CardsListing from './CardsListing';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          inputField : "",
          rests_data: []
        }
        this.logout = this.logout.bind(this);
        this.sendRest = this.sendRest.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.pushMapData = this.pushMapData.bind(this);
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
            window.location = '/';
        }
    });
    }

    handleChange(event) {
      this.setState({inputField: event.target.value});
      console.log(this.state.inputField);
    }

    sendRest = (e) => {
      if (this.state.rests_data.length < 4) {
      Axios({
        method: "GET",
        withCredentials: false,
        url: `http://localhost:4000/api/restaurantAPI?restName=${this.state.inputField}` //`https://bite-me-app1.herokuapp.com/api/restaurantAPI?restName=${this.state.inputField}`,
    }).then((res) => {
        if(res.status === 200){
            console.log("The datda is - ",(res.data));
            let myArr= [...this.state.rests_data]
              myArr.push(res.data.candidates[0])
              console.log(myArr);
              this.setState({
                rests_data: myArr
            })
            //this.setState({ rests_data: [...this.state.rests_data, res.data.candidates[0]] });
            console.log(this.state.rests_data);
        }
        else{ 
            window.location = '/game';
        }
        
    });}else {
      alert('HI THIS IS AN ALERT!')
    }}

    // pushMapData(restaurants) {
    //   Axios({
    //     method: "POST",
    //     data : {
    //       name: restaurants.candidates[0].name,
    //       address: restaurants.candidates[0].formatted_address,
    //       price: restaurants.candidates[0].price_level,
    //       rate: restaurants.candidates[0].rating,
    //       open: restaurants.candidates[0].opening_hours.open_now
    //     },
    //     withCredentials: false,
    //     url: `https://bite-me-app1.herokuapp.com/api/restaurant`,
    //   }).then((res) => {
    //       if(res.status === 200) {
    //         console.log(restaurants);
    //         window.location = '/home';
    //       }
    //   });
    // };

      render() {
          return(
              <>
              <ButtonAppBar/>
              <Logo/>
              {/* <button onClick={this.logout}>Logout</button> */}
              <div className="home-content">
              <Grid container alignItems="center" justify="center" spacing={0} direction="column">
              <Grid item xl></Grid>
              <Grid item xl={8}>
                <h1 style={{marginTop: '5%'}}><strong>FULFILL YOUR DESIRE</strong></h1>
                  <Grid>
                    <form style={{justifyContent: 'center', textAlign: 'center'}}> 
                      <input type="text" style={{backgroundColor:'white', width: '70%', height: '40px', marginTop: '3%', borderRadius:'15px'}} onChange={this.handleChange}  placeholder="  Enter restaurant..." />
                      {/* {this.state.rests_data.length ? <CardsListing rests={this.state.rests_data} /> : <h3> No restaurants to show..</h3>} */}
                      <Button variant="contained" onClick={this.sendRest} color="primary" style={{width:'10%', height:'40px', marginLeft: '0.9%', borderRadius:'15px'}}><b>Search</b></Button>
                      {this.state.rests_data.length === 0 && (<h2 style={{ paddingTop: 10, textAlign: 'center' }}>No Restaurants to show</h2>)} 
                      <CardsListing rests={this.state.rests_data} />
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