import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AddBox from '@material-ui/icons/AddBox';
import {useHistory} from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';

import Axios from "axios";

// import React , { useContext } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Axios from "axios";
// import UserContext from '../UserContext';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function PersistentDrawerLeft(props) {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


const randEmoji = () => {
    const emojis = ['🍔','🍕','🌶','🍩','🌭','🥨','🥦', '🍜', '🍿', '🥡','🍱','🍉','🍍','🥙','🍝' ];
    return `BiteMe ${emojis[Math.floor(Math.random() * (emojis.length - 1) + 1)]}`;
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  
  const logout = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/api/login/",
  }).then((res) => {
      console.log(res);
      if(res.data === "logged out?"){
          localStorage.clear()
          window.location = '/';
      }
      else{ 
          alert("Error occurred!")
    }});
  }
  const addGamePath = () => {
    history.push({pathname: '/addGame'});
  }
  const updateGame = () => {
    //Task to do 
  }

  return (
    <div className={classes.root}>
        <CssBaseline />
        <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        >
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap style={{ width: '100%'}}>
            {/* <AppBar position="static"> */}
            <Toolbar 
            >
            {/* <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu"> */}
            {/* <MenuIcon/> */}
            
            {/* </IconButton> */}
            <Typography variant="h6" className={classes.title}>
                {randEmoji()}
            </Typography>
            <Typography variant="h6" className={classes.title}>
                Hello, {props.username}!
            </Typography>
            <Button style={{position: 'absolute', right: '0px'}} onClick = {logout} color="inherit">Logout</Button>
            </Toolbar>
            {/* </AppBar> */}
        </Typography>
        </Toolbar>
        </AppBar>
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
            paper: classes.drawerPaper,
            }}
        >
        <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>  
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
        </div>
        <Divider />
        <List>
          {/* <Button><b><AddBox/>Create Game</b></Button> */}
        {/* {['Create Game', 'Update Game', 'map'].map((text, index, page) => ( */}
             {/* <ListItem button key={text}> */}
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon onClick={redirect=page}/> : <MailIcon />}</ListItemIcon> */}
              {/* <ListItemText primary={text} /> */}
             {/* </ListItem>  */}
            
            <MenuItem onClick={addGamePath}><InboxIcon/>Create Game</MenuItem>
            <MenuItem onClick={updateGame}><InboxIcon/>Edit Game</MenuItem>

          {/* ) */}
          {/* ) */}
          {/* } */}
        </List>
        </Drawer>
      
    </div>
  );
}
