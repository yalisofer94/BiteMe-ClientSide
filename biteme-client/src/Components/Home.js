import React, { Component, useContext , componentDidMount} from "react";
import MapContainer from './Map';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import ButtonAppBar from './Navbar';
import PersistentDrawerLeft from './Navbar';
import "./App.css";
import Axios from "axios";
import CardsListing from './CardsListing';


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          inputField : "",
          rests_data: [],
          username: localStorage.userName,
          userid : localStorage.userId,
          admin: localStorage.isAdmin,
          lng: 34.7818 ,
          lat: 32.0853
        }
        console.log("props received -",props.location.userName, props.location.userId, this.state.userid, this.state.admin);
      
        this.logout = this.logout.bind(this);
        this.sendRest = this.sendRest.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleSelectClick = this.handleSelectClick.bind(this);
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

    handleDeleteClick = (e) => {
      const newRests = this.state.rests_data.filter(
        (rest) => rest.place_id !== e
      );
      this.setState({
        rests_data: newRests
    })
    };

    handleSelectClick = (e) => {
      console.log("Returning data - ",e)
      const rest = this.state.rests_data.filter((rest) => rest.place_id === e);
      console.log("Hey there mama - ",rest);
      console.log("getting from select ", this.state.username, rest[0].place_id);
      if(rest !== null){
        Axios({
          method: "POST",
          withCredentials: false,
          url: `http://localhost:4000/api/order`,
              data: {
                user_id: this.state.userid,
                restaurant_id: rest[0].place_id,
              },
        }).then((res)=> {
            const { history } = this.props;
            const answer = res.data;
            if(answer == "user already ordered")
              alert("You've already ordered!")
              if(history) history.push('/home');
            if(answer == "Successfully added to existing order")
              alert("The order successfully added to the existing group order!")
              if(history) history.push('/selectSuccess');
            if(answer == "Successfully created new order")
              alert("The order successfully added! You are hungry for sure, you are the first person in the team to order!🍽🍴")
              if(history) history.push('/selectSuccess');
        }).catch((err) => {

        })
      } else {
        console.log("Issue occurred while trying to send the selected restaurant!");
      }
    }

    sendRest = (e) => {
      if (this.state.rests_data.length < 4) {
      Axios({
        method: "GET",
        withCredentials: false,
        url: `http://localhost:4000/api/restaurantAPI?restName=${this.state.inputField}` //`https://bite-me-app1.herokuapp.com/api/restaurantAPI?restName=${this.state.inputField}`,
    }).then((res) => {
        if(res.status === 200 && res.data.candidates[0].opening_hours.open_now !== null){
            console.log("The datda is - ",(res.data));
            const lat = res.data.candidates[0].geometry.location.lat;
            const lng = res.data.candidates[0].geometry.location.lng;
            console.log(lat,lng)
            this.setState({
              lat: res.data.candidates[0].geometry.location.lat,
              lng: res.data.candidates[0].geometry.location.lng
          })
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
            alert("Something wrong happened! \nStatus - ", res.status);
        }
        
    }).catch((err) => {
      alert(`You've entered a bad restaurant name, '${this.state.inputField}' does not exist 😖, try again!`);
      console.log("Error with bringing the restaurant you chose 😖 ", err);
    });
    }else {
      alert("The maximum number of restautrants are 4! 😇");
    }}

      render() {
        let {admin} = this.state;

          return(
              <>
              {/* <ButtonAppBar admin={this.state.admin} username={this.state.username}/> */}
              <PersistentDrawerLeft admin={this.state.admin} username={this.state.username}/>
              {/* <button onClick={this.logout}>Logout</button> */}
              <div className="home-content">
              <Grid container alignItems="center" justify="center" spacing={0} direction="column">
              <Grid item xl></Grid>
              <Grid item xl={8}>
              {/* {admin ? <h1>Admin</h1> : <h1>NotAdmin</h1>} */}

                <h1 style={{marginTop: '5%', color:'MintCream'}}><strong>FULFILL YOUR DESIRE</strong></h1>
                  <Grid>
                    <form style={{justifyContent: 'center', textAlign: 'center'}}> 
                      <input type="text" style={{backgroundColor:'white', width: '70%', height: '40px', marginTop: '3%', borderRadius:'15px', paddingLeft: '2%'}} onChange={this.handleChange}  placeholder="  Enter restaurant..." />
                      <Button variant="contained" onClick={this.sendRest} color="primary" style={{width:'10%', height:'40px', marginLeft: '0.9%', borderRadius:'15px'}}><b>Search</b></Button>
                      {this.state.rests_data.length === 0 && (<h2 style={{ paddingTop: 10, textAlign: 'center' }}>No Restaurants to show</h2>)} 
                      <CardsListing rests={this.state.rests_data} onDelete={this.handleDeleteClick} onSelect={this.handleSelectClick}/>
                    </form>
                  </Grid>
              </Grid>
            </Grid>
            </div>
          <MapContainer lat={this.state.lat} lng={this.state.lng}/>
              <Grid style={{backgroundImage: `url('./../Images/background3\ copy.jpg')`, paddingTop:'0.3%'}}>
              <h1 style={{justifyContent: 'center', textAlign: 'center'}}>LET THE FUN BEGIN</h1>
              </Grid>
          </>
          )
    }
}

export default Home;