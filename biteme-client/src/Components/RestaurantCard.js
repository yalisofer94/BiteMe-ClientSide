import React, { useState, useEffect } from "react";
import "./App.css";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Axios from "axios";

const useStyles = makeStyles({
    root: {
      minWidth: '30px',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
  // TODO THE CARD THING
//   const sendChosenRestaurant = () => {
//     Axios
//         .post('')
//         .then((response) => {console.log(response); res.json(response.data);})
//         .catch(err => console.log(`Error is: ${err}`));
// }

  export default function RestaurantCard({data}) {
    console.log("The data",data.formatted_address);
    const address = data.formatted_address;
    const name = data.name;
    const hours = data.opening_hours.open_now;
    console.log(hours)
    const rating = data.rating;

    const classes = useStyles();
    return(
    <>
    <Card style={{marginTop: '3%',marginLeft:'1%', width:'190px', display:'inline-block', background: '#39CCCC', borderRadius:'15px', border: '1px #001f3f solid'}}>
    <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Address: {address}
        </Typography>
        <Typography variant="h5" component="h2">
        {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Open: {hours ? ' Yes' : ' No'}<br/>
        Rating: {rating}
        </Typography> 
    </CardContent>
    <CardActions style={{justifyContent:'center', alignContent:'center'}}>
        <Button size="large" color="primary" >select</Button>
      </CardActions>
    </Card>
    </>
  )
}
