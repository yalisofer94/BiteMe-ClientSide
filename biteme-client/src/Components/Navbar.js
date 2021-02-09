import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Axios from "axios";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const logout = () => {
  Axios({
    method: "GET",
    withCredentials: true,
    url: "http://localhost:4000/api/login/",
}).then((res) => {
    console.log(res);
    if(res.data.msg === "User logged-out"){
        window.location = '/';
    }
    else{ 
        window.location = '/';
    }
    
});
}

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            BiteMe🍕
          </Typography>
          <Button onClick = {logout} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}