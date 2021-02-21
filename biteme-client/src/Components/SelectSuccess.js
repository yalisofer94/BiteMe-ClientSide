import React , {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import "./App.css";
import PersistentDrawerLeft from './Navbar';


class SelectSuccess extends Component {
    render() {
      return (
        <div className="component-emoji-results">
        <PersistentDrawerLeft admin={localStorage.isAdmin} username={localStorage.userName}/>
        <Grid container alignItems="center" justify="center" spacing={0} direction="column" style={{height:'100%'}}>
         <h1>We Got Your Selection!</h1>
         <h2>Results will receive shortly</h2>
         </Grid>
        </div>
      );
    }
  }

  export default SelectSuccess;